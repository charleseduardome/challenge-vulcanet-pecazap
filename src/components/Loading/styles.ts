import styled from 'styled-components';

export const Container = styled.div`
  margin: 20% 50%;
  @keyframes spin {
    100% {
      -webkit-transform: rotate(360deg);
      transform: rotate(360deg);
    }
  }
  svg {
    animation: spin 1s linear infinite;
  }
`;
