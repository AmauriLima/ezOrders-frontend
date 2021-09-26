import { ThemeProvider } from 'styled-components';

import GlobalStyle from '../../assets/styles/GlobalStyle';
import defaultTheme from '../../assets/styles/themes/default';
import { Container, Header } from './styles';

import { Orders } from '..';

import logo from '../../assets/images/logo.svg';

export default function App() {
  return (
    <ThemeProvider theme={defaultTheme}>
      <GlobalStyle />
      <Container>
        <Header>
          <img src={logo} alt="ezOrders" />
        </Header>
        <Orders />
      </Container>
    </ThemeProvider>
  );
}
