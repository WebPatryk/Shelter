import styled, { css } from 'styled-components';

const Button = styled.button`
  background: ${props => (props.primary ? 'orange' : 'transparent')};
  color: ${({ primary }) => (primary ? '#fff' : '#000')};
  border: 2px solid orange;
  font-size: 1rem;
  ${({ primary }) =>
    primary &&
    css`
      font-size: 5rem;
      font-weight: bold;
    `};
  margin: 1em;
  padding: 1rem 3rem;
  border: 2px solid palevioletred;
  border-radius: 3px;
`;

export default Button;
