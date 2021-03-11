import React from 'react';
import Button from 'components/Button/Button';
import styled from 'styled-components';
import { useForm } from 'react-hook-form';

const Form = styled.form`
  display: flex;
  flex-direction: column;
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

function NewEventForm() {
  const { register, handleSubmit, errors } = useForm();
  const onSubmit = data => console.log(data);

  return (
    <Form onSubmit={handleSubmit(onSubmit)} noValidate autoComplete="off">
      <InputWrapper>
        <Input
          type="text"
          name="userName"
          ref={register({ required: true })}
          required
        />
        <Label>Name</Label>
      </InputWrapper>
      {errors.userName && <Error>&#9888; This field is required</Error>}
      <InputWrapper>
        <Input
          type="password"
          name="password"
          ref={register({ required: true })}
          required
        />
        <Label>Description</Label>
      </InputWrapper>
      {errors.password && <Error> &#9888; This field is required</Error>}

      <InputWrapper>
        <Input
          type="password"
          name="password"
          ref={register({ required: true })}
          required
        />
        <Label>Localization</Label>
      </InputWrapper>

      <Button primary type="submit">
        Add
      </Button>
    </Form>
  );
}

export default NewEventForm;
