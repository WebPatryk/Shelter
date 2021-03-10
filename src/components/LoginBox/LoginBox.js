import React from 'react';

import styled from 'styled-components';
import LoginForm from 'components/Form/LoginForm';

const Container = styled.main`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  flex: 1;

  @media (max-width: 800px) {
    order: -1;
    min-height: 100vh;
  }
`;

const Title = styled.h1`
  color: #d26500;
  font-size: 5.1rem;
  font-weight: bold;
`;

const SubTitle = styled.p`
  color: #d26500;
  font-weight: 600;
  font-size: 2.7rem;
`;

function LoginBox() {
  return (
    <Container>
      <img
        src="https://i.ebayimg.com/images/g/RDAAAOxyffZSXGeC/s-l300.jpg"
        alt="dog paw"
        style={{ width: 150 }}
      />
      <Title>Login</Title>
      <SubTitle> To animals word’s</SubTitle>
      <LoginForm />
    </Container>
  );
}

export default LoginBox;
