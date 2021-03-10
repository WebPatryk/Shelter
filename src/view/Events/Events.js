import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
import { v4 as uuidv4 } from 'uuid';
import { db } from '../../firebase';
import Event from './Event';

const Main = styled.div`
  /* display: flex; */

  @media (max-width: 800px) {
    flex-direction: column;
  }
`;
const EventContainer = styled.div`
  display: flex;
  justify-content: center;
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
        <h1>Your latest events! </h1>
        <EventContainer>
          <h3>{isLoading && 'Logowanie...'}</h3>
          {fetchError}
          {animalsEvents && animalsEvents.length > 0 ? (
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
