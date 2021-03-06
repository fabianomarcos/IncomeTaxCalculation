import styled, { keyframes } from 'styled-components';
import { shade } from 'polished';

export const Container = styled.div`
    display: flex;
    align-items: stretch;
`;

export const Content = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;

    width: 100%;
`;

const appearFromUp = keyframes`
  from {
    opacity: 0;
    transform: translateY(-150px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
`;

export const AnimationContainer = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;

    animation: ${appearFromUp} 1s;

    form {
        margin: 40px 0;
        text-align: center;

        .input-content {
            display: flex;
            gap: 15px;
            flex-wrap: wrap;
            justify-content: center;
        }

        .button-content {
            display: grid;
            grid-template-columns: 1fr 1fr;
            gap: 21.8%;
            a {
                margin: 0;
            }

            .success {
                background: green;
            }
        }

        h1 {
            margin-bottom: 24px;
        }

        div {
            text-align: left;

            span {
                margin: 5px;
            }
        }

        a {
            color: #f4ede8;
            display: block;
            margin-top: 24px;
            text-decoration: none;
            transition: color 0.2s;

            &:hover {
                color: ${shade(0.2, '#f4ede8')};
            }
        }
    }

    > a {
        color: #ff9000;
        display: block;
        margin-top: 24px;
        text-decoration: none;
        transition: color 0.2s;

        display: flex;
        align-items: center;

        svg {
            margin-right: 16px;
        }

        &:hover {
            color: ${shade(0.2, '#ff9000')};
        }
    }

    @media (max-width: 1244px) {
        .button-content {
            padding: 0 20px;
        }
    }

    @media (max-width: 900px) {
        table td {
            width: 90vw;
            display: inline-block;
        }

        th {
            display: none;
        }
    }

    @media (max-width: 500px) {
        .input-content {
            flex-wrap: wrap;
            justify-content: center;

            div {
                width: 100%;
            }
        }

        .button-content {
            display: flex !important;
            width: 90vw;
            margin: 0 auto;
            flex-wrap: wrap;
            flex-direction: column-reverse;
        }

        table td {
            width: 90vw;
            display: inline-block;
        }

        th {
            display: none;
        }
    }
`;
