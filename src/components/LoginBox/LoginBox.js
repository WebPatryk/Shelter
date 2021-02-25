import React from 'react';
import Button from 'components/Button/Button';
import { Link } from 'react-router-dom';
import styled from 'styled-components';

const Container = styled.main`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  flex: 1;
`;
const Form = styled.form`
  display: flex;
  flex-direction: column;
`;

const Title = styled.h1`
  color: #d26500;
  font-size: 5.1rem;
  font-weight: bold;
`;
const Register = styled.strong`
  color: #da8230;
  text-decoration: none;
`;

const StyledLink = styled(Link)`
  text-decoration: none;
`;

const Text = styled.p`
  color: #979797;
  margin-right: 1rem;
`;
const RegisterBlock = styled.div`
  display: flex;
  align-items: center;
`;

const Input = styled.input`
  border: none;
  border-bottom: 1px solid #ffd5ae;
  margin: 1rem 0;
  padding: 1rem 0.5rem;
  font-size: 2rem;
  color: #ffd5ae;
  outline: none;

  &::placeholder {
    color: #ffd5ae;
  }
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
      <Form>
        <Input type="text" placeholder="Username" />
        <Input type="text" placeholder="Password" />

        <Button primary>Login</Button>
        <RegisterBlock>
          <Text>Don’t have an account yet?</Text>
          <StyledLink to="/register">
            <Register>Sign up</Register>
          </StyledLink>
        </RegisterBlock>
      </Form>
    </Container>
  );
}

export default LoginBox;
