import styled from 'styled-components';

export interface IStylesLargeButtonProps{
  backgroundColor?: string,
  fontColor?: string,
  borderColor?: string,
}

export const LargeButtonDefault = styled.button<IStylesLargeButtonProps>`
  width: 60vw;
  height: 60px;
  font-family: 'Roboto', sans-serif;
  font-weight: bold;
  font-size: 20px;
  background-color: ${(props) => props.backgroundColor ? '#0000' : '#63398a'};
  color: ${(props) => props.fontColor ? '#e85b21' : '#ffffff'};
  border: 1px solid ${(props) => props.borderColor ? '#ffffff' : '#63398a'};

  :hover{
    background-color: ${(props) => props.backgroundColor ? '#e85b21' : '#563278'};
    color: var(--color-texts);
    border: 0;
  }

  :focus{
    outline: 0;
  }
`; 