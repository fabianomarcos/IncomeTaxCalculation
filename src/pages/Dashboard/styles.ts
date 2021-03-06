import styled, { keyframes } from 'styled-components';

const appearFromDown = keyframes`
  from {
    opacity: 0;
    transform: translateY(150px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
`;

export const Container = styled.div`
  animation: ${appearFromDown} 1s;
  width: 100%;
  max-width: 90%;
  margin: 0 auto;
  padding: 10px;
`;

export const Title = styled.h1`
  font-size: 48px;
  color: #3a3a3a;
`;

export const TableContainer = styled.section`
  table {
    width: 100%;
    border-spacing: 0 8px;

    th {
      color: #969cb3;
      font-weight: normal;
      padding: 10px 25px;
      text-align: left;
      font-size: 16px;
      line-height: 24px;

      &.center {
        text-align: center;
      }
    }

    td {
      padding: 10px 10px;
      border: 0;
      background: #fff;
      font-size: 16px;
      font-weight: normal;
      color: #969cb3;
      text-align: center;

      &.name {
        text-align: left;
        color: #363f5f;
      }
    }

    td:first-child {
      border-radius: 8px 0 0 8px;
    }

    td:last-child {
      border-radius: 0 8px 8px 0;
    }

    svg {
      margin: 0 10px;
    }
  }

  .empty {
    font-size: 40px;
    justify-content: center;
    align-items: center;
    display: flex;
    height: 50vh;
  }

  @media (max-width: 500px) {
    table td {
      width: 90vw;
      display: inline-block;
    }

    th {
      display: none;
    }
  }
`;
