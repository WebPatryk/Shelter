import styled, { css } from 'styled-components';
import themeButton from 'theme/themeVariables';

import facebookLogo from 'assets/images/facebook.svg';

const Button = styled.button`
  background-color: ${themeButton.primary};
  color: ${({ primary }) => (primary ? '#fff' : '#000')};
  font-size: 1.6rem;
  font-weight: 600;
  border: none;
  outline: none;
  margin: 1em;
  letter-spacing: 2.4;
  padding: 1rem 3rem;
  border-radius: 3px;
  transition: all 0.3s ease-in-out;
  cursor: pointer;

  ${({ facebook }) =>
    facebook &&
    css`
      background-color: #4064ac;
      color: #fff;
      font-weight: 400;
      background-image: url(${facebookLogo});
      background-repeat: no-repeat;
      background-position: 5%;
      width: 100%;
      margin: 1rem 0 0;
      text-align: right;
      padding: 1.3rem 3rem;
    `}

  ${({ fourth }) =>
    fourth &&
    css`
      background-color: ${themeButton.fourth};
      color: #fff;
    `}

  &:hover {
    opacity: 0.8;
  }
`;

export default Button;
