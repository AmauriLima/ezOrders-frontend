import { useEffect, useState } from 'react';
import socketIOClient from 'socket.io-client';

import { Card, CardHeader, Container } from './styles';

export default function Orders() {
  const [orders, setOrders] = useState([]);
  const [statuses, setStatuses] = useState([]);

  useEffect(() => {
    (async () => {
      const res = await fetch('http://localhost:3001/orders');
      const json = await res.json();
      setOrders(json);
    })();

    const socket = socketIOClient('http://localhost:3001', {
      transports: ['websocket'],
    });

    socket.on('newOrder', (order) => {
      setOrders((prevState) => [order, ...prevState]);
    });

    socket.on('statusChange', (updatedOrder) => {
      setOrders((prevState) => (
        prevState.map((order) => (
          order._id === updatedOrder._id ? updatedOrder : order
        ))
      ));
    });
  }, []);

  useEffect(() => {
    (async () => {
      const res = await fetch('http://localhost:3001/status');
      const json = await res.json();
      setStatuses(json);
    })();
  }, []);

  function handleStatusChange(order) {
    return ({ target: { value } }) => {
      fetch(`http://localhost:3001/orders/${order._id}/status`, {
        method: 'PATCH',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ status: value }),
      });
    };
  }

  return (
    <Container>
      {orders.map((order) => (
        <Card key={order._id} status={order.status}>
          <CardHeader>
            <h3>
              Pedido <strong>#{order._id.substr(0, 15)}</strong>
            </h3>
            <small>MESA #{order.table}</small>
          </CardHeader>
          <p>{order.description}</p>
          <select value={order.status} onChange={handleStatusChange(order)}>
            {statuses.map((status) => (
              <option key={status._id} value={status.value}>{status.name}</option>
            ))}
          </select>
        </Card>
      ))}

    </Container>
  );
}
