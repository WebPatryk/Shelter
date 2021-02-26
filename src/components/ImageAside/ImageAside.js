import React from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';

const Background = styled.div`
  background-color: #ffe8d2;
  height: 100vh;
  width: 50%;
  display: flex;
  justify-content: center;
  align-items: center;
  @media (max-width: 800px) {
    display: none;
  }
`;

const Image = styled.img`
  width: 600px;
`;

function ImageAside({ photo }) {
  return (
    <Background>
      <Image src={photo} alt="Dog's logo" />
    </Background>
  );
}

export default ImageAside;

ImageAside.propTypes = {
  photo: PropTypes.string,
};

ImageAside.defaultProps = {
  photo: 'https://bitsofco.de/content/images/2018/12/broken-1.png',
};
