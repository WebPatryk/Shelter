import styled from 'styled-components';
import themeButton from 'theme/themeVariables';

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

  &:hover {
    opacity: 0.8;
  }
`;

export default Button;
