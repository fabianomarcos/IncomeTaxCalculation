import styled from 'styled-components';
import { shade } from 'polished';

interface ContainerProps {
  isBackButton: boolean;
}

export const Container = styled.button`
  background: #c53030;
  height: 56px;
  width: 100%;
  border-radius: 10px;
  border: 0;
  padding: 0 16px;
  color: #fff;
  font-weight: 500;
  margin-top: 16px;
  transition: background-color 0.2s;

  &:hover {
    background: ${shade(0.2, '#c53030')};
  }
`;
