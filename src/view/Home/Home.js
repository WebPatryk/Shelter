import React from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';
import UpcomingEvents from 'components/UpcomingEvents/UpcomingEvents';
import HelloUser from 'components/HelloUser/HelloUser';

const LinkHref = styled(Link)`
  text-transform: uppercase;
  font-size: 3rem;
  margin: 5rem;
`;

const Container = styled.section`
  display: flex;
  height: 100vh;
  flex-direction: column;
  max-width: 80%;
  margin: auto;
`;

const LinkList = styled.div`
  display: flex;
`;

function Home() {
  return (
    <Container>
      <HelloUser />
      <UpcomingEvents />
      <LinkList>
        <LinkHref to="/events">Go to Events!</LinkHref>
        <LinkHref to="/login">Go to Login!</LinkHref>
        <LinkHref to="/register">Go to Register!</LinkHref>
      </LinkList>
      <p>Site in progress</p>
    </Container>
  );
}

export default Home;
