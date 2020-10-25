import styled, { css } from 'styled-components';
import Tooltip from '../Tooltip';

interface ContainerProps {
  isFocused: boolean;
  isFilled: boolean;
  isError: boolean;
}

export const Container = styled.div<ContainerProps>`
  background: #6d3ff5;

  border-radius: 10px;

  padding: 16px;

  width: 100%;

  border: 2px solid #232129;

  color: #fff;

  display: flex;

  align-items: center;

  ${props =>
    props.isError &&
    css`
      color: #fff;

      background: #c53030;

      border-color: #c53030;
    `}

  ${props =>
    props.isFocused &&
    css`
      color: #5636d3;

      border-color: #5636d3;
    `}

  ${props =>
    props.isFilled &&
    css`
      color: #5636d3;
    `}

  input {
    flex: 1;

    background: transparent;

    border: 0;

    color: #f4ede8;

    &::placeholder {
      color: #f4ede8;
    }
  }
`;

export const Error = styled(Tooltip)`
  height: 16px;
  margin-left: -20px;
  margin-bottom: 3px;

  svg {
    background: #c53030;
  }

  span {
    background: #fff;

    color: #c53030;

    &::before {
      border-color: #fff transparent;
    }
  }
`;
