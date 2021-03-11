import React from 'react';
import styled, { createGlobalStyle } from 'styled-components';
import NewEventForm from 'components/Form/NewEventForm';
import themeButton from 'theme/themeVariables';
import PropTypes from 'prop-types';
import closeIcon from 'assets/icons/close.png';

const GlobalStyle = createGlobalStyle`
  body {
    background-color: ${props => props.isShow && 'lightgray'};
  }
`;
const Container = styled.main`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  flex: 1;
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  padding: 7rem;
  border-radius: 6px;
  background-color: ${themeButton.fifth};

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
const CloseModal = styled.button`
  padding: 1rem;
  background-color: transparent;
  color: red;
  position: absolute;
  top: 5%;
  right: 5%;
  border: none;
  font-size: 3rem;
  transform: rotate(45deg);
  cursor: pointer;
  outline: none;
`;

function Popup({ isShow, setIsShow }) {
  const handleModalClose = () => {
    setIsShow(false);
  };

  return (
    <Container>
      <GlobalStyle isShow={isShow} />
      <Title>Add new event</Title>
      <CloseModal onClick={handleModalClose} type="button">
        <img src={closeIcon} alt="close icon" />
      </CloseModal>
      <NewEventForm isShow={isShow} setIsShow={setIsShow} />
    </Container>
  );
}

export default Popup;

Popup.propTypes = {
  isShow: PropTypes.bool.isRequired,
  setIsShow: PropTypes.func.isRequired,
};
