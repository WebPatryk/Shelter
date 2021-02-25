import React from 'react';
import mainDog from 'assets/images/main-dog.svg';
import styled from 'styled-components';

const Background = styled.div`
  background-color: #ffe8d2;
  height: 100vh;
  width: 50%;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const Image = styled.img`
  width: 500px;
`;

function ImageAside() {
  return (
    <Background>
      <Image src={mainDog} alt="Dog's logo" />
    </Background>
  );
}

export default ImageAside;
