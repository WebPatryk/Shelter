import React from 'react';
import userLogo from 'assets/icons/user.svg';
import styled from 'styled-components';
import 'firebase/auth';
import firebase from 'firebase/app';
import { useHistory } from 'react-router-dom';
import { signOutUser } from 'redux/user/action';
import { useSelector, useDispatch } from 'react-redux';

function User() {
  useSelector(state => state.loginReducer);
  const dispatch = useDispatch();

  const history = useHistory();
  const isAuth = true;

  const handleSignOut = () => {
    firebase
      .auth()
      .signOut()
      .then(() => {
        dispatch(signOutUser());
        history.push('/login');
      })
      .catch(error => {
        console.log(error);
      });
  };

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
      {isAuth && (
        <button type="button" onClick={handleSignOut}>
          SIGN OUT
        </button>
      )}
    </UserContainer>
  );
}

export default User;
