import styled from 'styled-components';
import { shade } from 'polished';
import { Form as Unform } from '@unform/web';

export const Form = styled(Unform)`
  padding: 48px 40px;
  display: flex;
  flex-direction: column;
  align-items: center;

  .input-content {
    display: flex;
    flex-direction: column;
    gap: 5px;
    width: 100%;

    input {
      text-align: center;
    }

    > div {
      display: flex;
      justify-content: space-between;
      align-items: flex-end;
      gap: 10px;

      border-bottom: 1px solid #bbbbad55;

      > div {
        width: 80%;
      }
    }
  }

  h2 {
    font-weight: 600;
    font-size: 36px;
    line-height: 36px;
    margin-bottom: 40px;
    text-align: center;
  }

  .button-content {
    display: flex;
    justify-content: flex-end;
    gap: 17px;
    width: 80%;
  }

  button {
    margin-top: 48px;
    align-self: flex-end;
    font-weight: 600;
    border-radius: 8px;
    border: 0;
    background: #0032bd;
    color: #fff;

    display: flex;
    flex-direction: row;
    align-items: center;

    .text {
      padding: 16px 24px;
    }

    .icon {
      display: flex;
      padding: 16px 16px;
      background: #0b69dc;
      border-radius: 0 8px 8px 0;
      margin: 0 auto;
    }

    &:hover {
      background: ${shade(0.2, '#0032bd')};

      .icon {
        background: ${shade(0.2, '#0b69dc')};
      }
    }

    & + button {
      background: #d81e0b;

      &:hover {
        background: ${shade(0.2, '#d81e0b')};

        .icon {
          background: ${shade(0.2, '#ff1700')};
        }
      }

      .icon {
        background: #ff1700;
      }
    }
  }
`;
