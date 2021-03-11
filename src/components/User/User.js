import React from 'react';
import userLogo from 'assets/icons/user.svg';
import styled from 'styled-components';

function User() {
  const user = {
    name: 'Thomas Anders',
    url: userLogo,
  };

  const UserContainer = styled.div`
    display: flex;
    align-items: center;
  `;

  return (
    <UserContainer>
      <p>{user.name}</p>
      <img src={user.url} alt={user.url} />
    </UserContainer>
  );
}

export default User;
