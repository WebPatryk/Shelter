import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
import { v4 as uuidv4 } from 'uuid';
import themeButton from 'theme/themeVariables';
import { db } from '../../firebase';
import Event from './Event';
import AddEvent from './AddEvent';

const Main = styled.div`
  /* display: flex; */

  @media (max-width: 800px) {
    flex-direction: column;
  }
`;
const EventContainer = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(400px, 1fr));
  justify-items: center;
  align-items: center;
`;
const Title = styled.h1`
  text-align: center;
  color: ${themeButton.fourth};
  margin: 4rem 0;
  font-size: 4rem;
`;

function Events() {
  const [animalsEvents, setAnimalsEvents] = useState([]);
  const [fetchError, setFetchError] = useState(false);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    db.collection('events')
      .get()
      .then(snap => {
        setIsLoading(false);
        setAnimalsEvents(snap.docs.map(doc => doc.data()));
      })
      .catch(err => {
        setFetchError(err);
      });
  }, []);

  return (
    <>
      <Main>
        <Title>Your latest events! </Title>
        <h3>{isLoading && 'Logowanie...'}</h3>
        <AddEvent />
        <EventContainer>
          {fetchError}
          {animalsEvents ? (
            animalsEvents.map(animal => <Event {...animal} key={uuidv4()} />)
          ) : (
            <p>Your&apos;s events weren&apos;t loaded </p>
          )}
        </EventContainer>
      </Main>
    </>
  );
}

export default Events;
