import styled from 'styled-components';

export interface IBackgroundColorSquareButton{
  primary?: string,
  secondary?: string,
  tertiary?: string,
  quaternary?: string,
};

export const SquareButtonContainer = styled.div<IBackgroundColorSquareButton>`
  display: flex;
  flex-direction: column;
  cursor: pointer;
  width: 205px;
  background-color: ${(props) => props.primary ? '#e32740' : props.secondary ? '#c31d32'
  : props.tertiary ? '#fc3c2d' : props.quaternary ? '#a01d44' : '#dc1f69'};   
  height: 200px;
  justify-content: space-around;

  :hover{
    opacity: 85%;
  }
`;

export const TextNumberSquareButton = styled.text`
  font-size: 18px;
  font-family: 'Roboto', sans-serif;
  font-weight: bold;
  color: var(--color-texts);
  margin-bottom: 5%;
  padding-left: 10px;
`;  

export const IconSquareButton = styled.img`
  height: 50px;
  width: 50px;
  align-self: center;
  margin-bottom: 5%;
`;  

export const TextSquareButton = styled.text`
  font-size: 16px;
  font-family: 'Roboto', sans-serif;
  font-weight: bold;
  color: var(--color-texts);
  text-align: center;
  margin-bottom: 5%;
`;

