import React from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';

const Main = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  margin: 2rem;
`;
const Figcaption = styled.p`
  width: 200px;
`;

const Thumbnail = styled.img`
  width: 80px;
  height: 80px;
  object-fit: cover;
`;

function Event({ Title, Description, Image }) {
  return (
    <>
      <Main>
        <Thumbnail src={Image} alt="" />
        <h5>{Title}</h5>
        <Figcaption>{Description}</Figcaption>
      </Main>
    </>
  );
}

export default Event;

Event.propTypes = {
  Title: PropTypes.string,
  Description: PropTypes.string,
  Image: PropTypes.string,
};
Event.defaultProps = {
  Title: 'Event title',
  Description: 'Event description',
  Image: 'Event description',
};
