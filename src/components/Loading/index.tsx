import React from 'react';
import { AiOutlineLoading3Quarters } from 'react-icons/ai';
import { Container } from './styles';

const Loading: React.FC = () => {
  return (
    <Container>
      <AiOutlineLoading3Quarters color="#00a6ce" size={64} />
    </Container>
  );
};

export default Loading;
