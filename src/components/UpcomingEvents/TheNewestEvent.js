import React from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';
import Button from 'components/Button/Button';

const Main = styled.div`
  display: flex;
  align-items: center;
  margin-right: 3rem;
`;
const Figcaption = styled.p`
  color: #929292;
  max-width: 200px;
`;

const Thumbnail = styled.img`
  width: 80px;
  height: 80px;
  object-fit: cover;
  margin: 2rem 0 1rem;
`;
const RightSide = styled.div`
  display: flex;
  flex-direction: column;
  margin-left: 2rem;
`;

function TheNewestEvent({ Title, Description, Image }) {
  const checkWordsLength = words =>
    `${words.length > 70 ? `${words.substring(0, 70)}....` : words}`;

  return (
    <>
      <Main>
        <Thumbnail src={Image} alt="" />
        <RightSide>
          <h5>{Title}</h5>
          <Figcaption>{checkWordsLength(Description)}</Figcaption>
          <Button type="button" fourth>
            {'>'}
          </Button>
        </RightSide>
      </Main>
    </>
  );
}

export default TheNewestEvent;

TheNewestEvent.propTypes = {
  Title: PropTypes.string,
  Description: PropTypes.string,
  Image: PropTypes.string,
};
TheNewestEvent.defaultProps = {
  Title: 'Event title',
  Description: 'Event description',
  Image: 'Event description',
};
