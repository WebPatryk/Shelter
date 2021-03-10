import React from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';
import Button from 'components/Button/Button';

const Main = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  margin: 2rem;
  padding: 0 2rem;
`;
const Figcaption = styled.p`
  width: 200px;
  color: #929292;
`;

const Thumbnail = styled.img`
  width: 80px;
  height: 80px;
  object-fit: cover;
  margin: 2rem 0 1rem;
`;
const TimeBar = styled.div`
  background-color: #d26500;
  display: flex;
  justify-content: center;
  align-items: center;
  color: #fff;
  width: 100%;
  border-top-left-radius: 6px;
  border-top-right-radius: 6px;

  p {
    font-weight: bold;
    font-size: 2rem;
    margin-right: 2rem;
  }
  span {
    font-size: 1.5rem;
    justify-self: flex-end;
  }
`;
const TimeContaine = styled.div`
  display: flex;
  align-items: center;
`;

function Event({ Title, Description, Image }) {
  return (
    <>
      <Main>
        <TimeBar>
          <p>42:33</p> <span>left</span>
        </TimeBar>
        <Thumbnail src={Image} alt="" />
        <h5>{Title}</h5>
        <Figcaption>{Description}</Figcaption>
        <TimeContaine>
          <h4>Start: </h4>
          <span>21.04.2021</span>
        </TimeContaine>
        <Button type="button" fourth>
          Take part
        </Button>
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
