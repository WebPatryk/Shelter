import React from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';
import User from 'components/User/User';

const Nav = styled.nav`
  display: flex;
  justify-content: space-around;
  width: 100%;
`;

const Lists = styled.ul`
  display: flex;
  align-items: center;
  list-style-type: none;
`;
const LinkStyled = styled(Link)`
  text-decoration: none;
  font-size: 2rem;
  font-weight: 600;
  margin: 1rem 3rem;
`;

function Navigation() {
  return (
    <Nav>
      <img
        src="https://i.ebayimg.com/images/g/RDAAAOxyffZSXGeC/s-l300.jpg"
        alt="dog paw"
        style={{ width: 150 }}
      />

      <Lists>
        <li>
          <LinkStyled to="/">Home</LinkStyled>
        </li>
        <li>
          <LinkStyled to="/events">Events</LinkStyled>
        </li>
        <li>
          <LinkStyled to="/feed">Feed animals</LinkStyled>
        </li>
        <li>
          <LinkStyled to="/chat">Chat</LinkStyled>
        </li>
      </Lists>
      <User />
    </Nav>
  );
}

export default Navigation;
