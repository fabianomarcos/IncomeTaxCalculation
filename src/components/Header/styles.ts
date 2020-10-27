import styled from 'styled-components';

export const Container = styled.div`
  background: #5636d3;
  padding: 10px;
  display: flex;
  align-items: center;
  justify-content: space-between;

  header {
    width: 90%;
    max-width: 1120px;
    margin: 0 auto;
    padding: 5px;
    display: flex;
    align-items: center;
    justify-content: space-between;

    .logo {
      display: flex;
      justify-content: center;
      align-items: center;

      span {
        color: #fff;
        margin-left: -140px;
      }
    }
    nav {
      a {
        color: #fff;
        text-decoration: none;
        font-size: 16px;
        transition: opacity 0.2s;

        & + a {
          margin-left: 32px;
        }

        &:hover {
          opacity: 0.6;
        }
      }
    }
  }
  @media (max-width: 500px) {
    header {
      width: 100%;
    }
  }
`;
