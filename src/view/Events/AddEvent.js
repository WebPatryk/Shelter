import React, { useState } from 'react';
import styled from 'styled-components';
import themeButton from 'theme/themeVariables';
import Popup from 'components/Popup/Popup';

const Rectangle = styled.div`
  width: 50px;
  height: 50px;
  border-radius: 50%;
  border: 3px solid ${themeButton.fourth};
  margin-left: auto;
  margin-right: 8rem;
  position: relative;
  transition: opacity 0.3s ease-in-out;
  cursor: pointer;

  &::before {
    content: '';
    display: block;
    width: 80%;
    height: 3px;
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    background-color: ${themeButton.fourth};
  }
  &::after {
    content: '';
    display: block;
    width: 70%;
    height: 3px;
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%) rotate(90deg);
    background-color: ${themeButton.fourth};
  }
  &:hover {
    opacity: 0.7;
  }
`;

function AddEvent() {
  const [isShow, setIsShow] = useState(false);

  const popupClick = () => {
    setIsShow(!isShow);
  };
  return (
    <>
      <Rectangle onClick={popupClick} />
      {isShow && (
        <Popup className="rectangleBox" isShow={isShow} setIsShow={setIsShow} />
      )}
    </>
  );
}

export default AddEvent;
