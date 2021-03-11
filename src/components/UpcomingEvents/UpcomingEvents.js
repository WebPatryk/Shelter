import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
import { v4 as uuidv4 } from 'uuid';
import themeButton from 'theme/themeVariables';
import TheNewestEvent from './TheNewestEvent';
import { db } from '../../firebase';

const Main = styled.div`
  /* display: flex; */

  @media (max-width: 800px) {
    flex-direction: column;
  }
`;
const EventContainer = styled.div`
  display: flex;
`;
const Title = styled.h1`
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
      .limit(3)
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
        <Title>Upcoming Events! </Title>
        <h3>{isLoading && 'Logowanie...'}</h3>

        <EventContainer>
          {fetchError}
          {animalsEvents ? (
            animalsEvents.map(animal => (
              <TheNewestEvent {...animal} key={uuidv4()} />
            ))
          ) : (
            <p>Your&apos;s events weren&apos;t loaded </p>
          )}
        </EventContainer>
      </Main>
    </>
  );
}

export default Events;
