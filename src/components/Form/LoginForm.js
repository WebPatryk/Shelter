import React from 'react';
import Button from 'components/Button/Button';
import { Link } from 'react-router-dom';
import styled from 'styled-components';
import { useForm } from 'react-hook-form';

const Form = styled.form`
  display: flex;
  flex-direction: column;
`;

const Register = styled.strong`
  color: #da8230;
  text-decoration: none;
`;

const StyledLink = styled(Link)`
  text-decoration: none;
  transition: opacity 0.2s ease;

  &:hover {
    opacity: 0.5;
  }
`;

const Text = styled.p`
  color: #979797;
  margin-right: 1rem;
`;
const RegisterBlock = styled.div`
  display: flex;
  align-items: center;
`;
const InputWrapper = styled.div`
  position: relative;
`;
const Label = styled.label`
  position: absolute;
  bottom: 15px;
  left: 0;
  color: #ffd5ae;
  pointer-events: none;
  transition: transform 0.22s ease-in-out;
  font-size: 1.8rem;
`;

const Input = styled.input`
  border: none;
  transform: translateY(0);
  border-bottom: 1px solid #ffd5ae;
  margin: 1rem 0;
  padding: 1rem 0.5rem;
  font-size: 2rem;
  color: #ffd5ae;
  outline: none;
  transform: translateY(0);

  &:focus ~ ${Label}, &:valid ~ ${Label} {
    transform: translateY(-30px);
    font-size: 1.4rem;
  }
`;

const Error = styled.p`
  color: red;
`;

function LoginForm() {
  const { register, handleSubmit, errors } = useForm();
  const onSubmit = data => console.log(data);

  return (
    <Form onSubmit={handleSubmit(onSubmit)} noValidate>
      <InputWrapper>
        <Input
          type="text"
          name="userName"
          ref={register({ required: true })}
          required
        />
        <Label>Username</Label>
      </InputWrapper>
      {errors.userName && <Error>&#9888; This field is required</Error>}
      <InputWrapper>
        <Input
          type="password"
          name="password"
          ref={register({ required: true })}
          required
        />
        <Label>Password</Label>
      </InputWrapper>
      {errors.password && <Error> &#9888; This field is required</Error>}
      <Button primary type="submit">
        Login
      </Button>
      <RegisterBlock>
        <Text>Don’t have an account yet?</Text>
        <StyledLink to="/register">
          <Register>Sign up</Register>
        </StyledLink>
      </RegisterBlock>
    </Form>
  );
}

export default LoginForm;
