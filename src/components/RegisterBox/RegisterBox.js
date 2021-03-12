import React from 'react';
import Button from 'components/Button/Button';
import { Link, useHistory } from 'react-router-dom';
import styled from 'styled-components';
import { useForm } from 'react-hook-form';
import 'firebase/auth';
import firebase from 'firebase/app';

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
  border-bottom: 1px solid #ffd5ae;
  margin: 1rem 0;
  padding: 1rem 0.5rem;
  font-size: 2rem;
  color: #ffd5ae;
  outline: none;

  &:focus ~ ${Label}, &:valid ~ ${Label} {
    transform: translateY(-30px);
    font-size: 1.4rem;
  }
`;
const LineContainer = styled.div`
  display: flex;
  align-items: center;

  p {
    padding: 0.5rem 1rem;
    background-color: #c4c4c4;
    border-radius: 50%;
  }
`;

const Line = styled.div`
  width: 50%;
  height: 1px;
  background-color: #c4c4c4;
  margin-right: 2rem;

  &:last-child {
    margin-left: 2rem;
  }
`;

const SubTitle = styled.p`
  color: #d26500;
  font-weight: 600;
  font-size: 2.7rem;
`;
const Error = styled.p`
  color: red;
`;

function RegisterBox() {
  const history = useHistory();
  const { register, handleSubmit, errors, reset } = useForm();
  const onSubmit = data => {
    const { email, password } = data;

    firebase
      .auth()
      .createUserWithEmailAndPassword(email, password)
      .then(userCredential => {
        const { user } = userCredential;

        console.log('user has been creted', user);

        history.push('/');
      })
      .catch(error => {
        reset('');
        console.log(error.message);
      });
  };
  return (
    <Container>
      <img
        src="https://i.ebayimg.com/images/g/RDAAAOxyffZSXGeC/s-l300.jpg"
        alt="dog paw"
        style={{ width: 150 }}
      />
      <Title>Sign up</Title>
      <SubTitle>To animals word’s</SubTitle>
      <Form onSubmit={handleSubmit(onSubmit)} noValidate autoComplete="off">
        <InputWrapper>
          <Input
            type="text"
            required
            name="username"
            ref={register({ required: true, minLength: 6 })}
          />
          <Label>Username</Label>
        </InputWrapper>
        {errors.username && <Error>&#9888; This field is required</Error>}
        <InputWrapper>
          <Input type="email" required name="email" />
          <Label>E-mail</Label>
        </InputWrapper>
        {errors.email && <Error>&#9888; This field is required</Error>}
        <InputWrapper>
          <Input
            type="password"
            required
            name="password"
            ref={register({ required: true, minLength: 6 })}
          />
          <Label>Password</Label>
          {errors.password && <Error>&#9888; This field is required</Error>}
        </InputWrapper>
        <InputWrapper>
          <Input type="text" required name="pupil" />
          <Label>Pupil&apos;s name</Label>
        </InputWrapper>
        {errors.pupil && <Error>&#9888; This field is required</Error>}

        <Button primary>Sign up</Button>
        <RegisterBlock>
          <Text>Already have an account yet?</Text>
          <StyledLink to="/register">
            <Register>Log in </Register>
          </StyledLink>
        </RegisterBlock>
        <div>
          <LineContainer>
            <Line />
            <p>or</p>
            <Line />
          </LineContainer>
          <Button facebook>Sign up with facebook</Button>
        </div>
      </Form>
    </Container>
  );
}

export default RegisterBox;
