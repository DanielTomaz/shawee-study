import styled from 'styled-components';

export const ButtonHeader = styled.button`
  height: 50px;
  background: var(--primary);
  color: #ffffff;
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