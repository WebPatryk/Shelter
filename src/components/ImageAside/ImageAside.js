import React from 'react';
import mainDog from 'assets/images/main-dog.svg';

function ImageAside() {
  return (
    <div>
      {/* image */}
      <img src={mainDog} alt="Dog's logo" />
    </div>
  );
}

export default ImageAside;
