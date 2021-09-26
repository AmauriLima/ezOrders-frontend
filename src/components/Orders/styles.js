import styled, { css } from 'styled-components';

const cardStatusVariants = {
  PREPARING: css`
    background: ${({ theme }) => theme.colors.warning};
    color: #fff;

    header small {
      background: #fff;
      color: ${({ theme }) => theme.colors.black};
    }

    select {
      border-color: #fff;
    }
  `,
  DONE: css`
    background: ${({ theme }) => theme.colors.success};
    color: #fff;

    header small {
      background: #fff;
      color: ${({ theme }) => theme.colors.black};
    }

    select {
      border-color: #fff;
    }
  `,
};

export const Container = styled.div`
  margin-top: 42px;

  display: grid;
  grid-gap: 1.6rem;
  grid-template-columns: 1fr;

  @media (min-width: 658px) {
    grid-template-columns: 1fr 1fr;
  }
`;

export const Card = styled.div`
  background: #fff;
  padding: 16px;
  border-radius: 5px;
  box-shadow: 0px 8px 8px rgba(0, 0, 0, 0.1);

  p {
    font-size: 14px;
  }

  select {
    margin-top: 8px;
    width: 100%;
    border-radius: 5px;
    border: 1px solid #ccc;
    background: #fff;
    font-size: 14px;
    height: 45px;
    padding: 0 8px;
  }

  ${({ status }) => cardStatusVariants[status] || null}
`;

export const CardHeader = styled.header`
  display: flex;
  justify-content: space-between;
  margin-bottom: 16px;

  h3 {
    font-weight: 400;
    font-size: 18px;
  }

  small {
    padding: 4px 8px;
    border-radius: 5px;
    background: #ccc;
    color: #fff;
    font-weight: bold;
    font-size: 12px;
  }
`;
