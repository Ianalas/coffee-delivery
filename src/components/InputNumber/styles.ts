import styled from 'styled-components';

export const ButtonNumberContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;

  background-color: ${props => props.theme['base-button']};
  border-radius: 6px;
  padding: 5px 10px;
  width: fit-content;
  max-width: 72px;
  max-height: 38px;

  input {
    display:flex;
    align-items: center;
    border: none;
    text-align: center;
    max-width: 20px;

    background: none;
    outline: none;


    font-size: 1rem;
    font-weight: 500;
    line-height: 130%;
    color: ${props => props.theme['base-title']};


    margin: 4px;
  }

  & input[type="number"]::-webkit-inner-spin-button,
  input[type="number"]::-webkit-outer-spin-button {
    -webkit-appearance: none;
    appearance: none;
    margin: 0;
  }

  button {
    all: unset;
    font-size: 20px;
    color: ${props => props.theme['purple']}; 
    cursor: pointer;
    padding: 4px;
  }

  button:hover {
    color: ${props => props.theme['purple-dark']};
  }
`