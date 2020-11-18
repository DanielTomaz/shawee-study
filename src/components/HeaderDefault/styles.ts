import styled from 'styled-components';
import { Link } from 'react-scroll';

export const ButtonHeader = styled(Link)`
  height: 40px;
  background: var(--primary);
  color: var(--color-texts);
  font-size: 16px;
  font-weight: 300;
  font-family: 'Roboto', sans-serif;
  border: 0;
  padding: 0 3% 0 3%;
  cursor: pointer;

  :hover{
    border-bottom: #eb902f solid 4px;
  }

  :focus{
    outline: 0;
    border-bottom: #eb902f solid 4px;
  }

`;