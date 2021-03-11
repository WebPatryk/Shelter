import React from 'react';

function Hellouser() {
  const user = {
    user: 'Thomas',
    welcomeMessage:
      'Help other animals in zoo buying food for them, taking part in events and much much more. Find a people whose share your passion to animals and spend time together. Help other animals in zoo buying food for them, taking part in events and much much more. Find a people whose share your passion to animals and spend time together.',
  };

  return (
    <div>
      <h2>Hello {user.name}</h2>
      <p>{user.welcomeMessage}</p>
    </div>
  );
}

export default Hellouser;
