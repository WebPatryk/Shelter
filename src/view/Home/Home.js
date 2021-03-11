import React from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';

const LinkHref = styled(Link)`
  text-transform: uppercase;
  font-size: 3rem;
  margin: 0 5rem;
`;

const Container = styled.section`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100vh;
`;
function Home() {
  return (
    <Container>
      <LinkHref to="/events">Go to Events!</LinkHref>
      <LinkHref to="/login">Go to Login!</LinkHref>
      <LinkHref to="/register">Go to Register!</LinkHref>
      <p>Site in progress</p>
    </Container>
  );
}

export default Home;
