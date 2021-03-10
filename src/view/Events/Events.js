import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
import { db } from '../../firebase';

const Main = styled.div`
  /* display: flex; */

  @media (max-width: 800px) {
    flex-direction: column;
  }
`;

function Events() {
  const [animalsEvents, setAnimalsEvents] = useState([]);

  useEffect(() => {
    db.collection('events')
      .get()
      .then(snap => {
        setAnimalsEvents(snap.docs.map(doc => doc.data()));
      });
  }, []);

  console.log(animalsEvents);

  return (
    <>
      <Main>
        <h1>Events 123</h1>
        <div>
          {animalsEvents.map(animal => (
            <div key={animal.id}>
              <h3>{animal.Title}</h3>
              <p>{animal.Description}</p>
            </div>
          ))}
        </div>
      </Main>
    </>
  );
}

export default Events;
