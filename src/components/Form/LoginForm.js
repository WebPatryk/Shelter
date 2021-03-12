import React, { useState } from 'react';
import Button from 'components/Button/Button';
import { Link, useHistory } from 'react-router-dom';
import styled from 'styled-components';
import { useForm } from 'react-hook-form';
import 'firebase/auth';
import firebase from 'firebase/app';
import { useSelector, useDispatch } from 'react-redux';
import { LoginUser } from 'redux/user/action';

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

const NoUserInfo = styled.span`
  font-size: 1.6rem;
  color: red;
  max-width: 300px;
  text-align: center;
`;

function LoginForm() {
  const history = useHistory();
  const [noUser, setNoUser] = useState(false);

  const sel = useSelector(state => state.loginReducer);
  const dispatch = useDispatch();

  const { register, handleSubmit, errors, reset } = useForm();
  const onSubmit = data => {
    const { email, password } = data;

    firebase
      .auth()
      .signInWithEmailAndPassword(email, password)
      .then(userCredential => {
        const { user } = userCredential;

        console.log('user has been loggin', user);

        dispatch(LoginUser());
        history.push('/');
      })
      .catch(error => {
        reset('');
        setNoUser(error.message);
      });
  };

  return (
    <Form onSubmit={handleSubmit(onSubmit)} noValidate autoComplete="off">
      {noUser && <NoUserInfo>{noUser}</NoUserInfo>}
      <InputWrapper>
        <Input
          type="text"
          name="email"
          ref={register({ required: true })}
          required
        />
        <Label>Email</Label>
      </InputWrapper>
      {errors.email && <Error>&#9888; This field is required</Error>}
      {sel}
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
