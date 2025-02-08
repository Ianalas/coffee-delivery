import styled from "styled-components";

export const CheckoutContainer = styled.div`
  & form {
    display: grid;
    grid-template-columns: repeat(2, 1fr);
    gap: 2rem;

    & > div{
      display: grid;
      gap: .75rem;
    }

    & > div > div {
      display: grid;
      background-color: ${({ theme }) => theme["base-card"]};
      padding: 2.5rem;
      border-radius: 6px;
      max-width: 40rem;
      gap: 2rem;

      & > div{
        display: flex;
        gap: .5rem;
        & svg{
          color: ${({ theme }) => theme["yellow-dark"]};
        }
        & div{
          gap: 1rem;
          & h4{
            font-size: 1rem;
            color: ${({ theme }) => theme["base-subtitle"]};
          }
          & p{
            margin-top: 4px;
            font-size: .875rem;
            color: ${({ theme }) => theme["base-text"]};
          }
        }
      }
    }

    & .payment-group {

      & > div:nth-child(2){
        display: flex;
        justify-content: space-between;
        

        & button {
          display: flex;
          align-items: center;
          gap: 0.75rem;
          text-transform: uppercase;
          border-radius: 6px;
          padding: 1rem;
          font-size: 0.75rem;
          
          background-color: ${({ theme }) => theme["base-button"]};
          cursor: pointer;
          transition: outline 200ms linear;

          // Adicionado para manter o foco quando o botão for selecionado via teclado
          &:focus {
            outline: 2px solid ${({ theme }) => theme["purple-light"]};
          }

          &:hover {
            outline: 1px solid ${({ theme }) => theme["purple"]};
          }

          &:active {  // Quando o botão é pressionado
            outline: 1px solid ${({ theme }) => theme["purple"]};
          }

          &.selected { // Se um estado "selecionado" for necessário, use uma classe
            outline: 2px solid ${({ theme }) => theme["purple"]};
          }
        }
      }

      & > div:nth-child(1){
        justify-content: none;
      }
      & svg{
        color: ${({ theme }) => theme.purple};
      }
    }
  }

  

  & .input-group {
    display: grid;
    max-width: 560px;
    grid-template-columns:  200px 1fr 60px;
    grid-gap: 16px;

    & > input {
      background-color: ${({ theme }) => theme["base-input"]};
      border: 1px solid ${({ theme }) => theme["base-button"]};
      padding: 0.75rem;
      border-radius: 4px;

      &:placeholder {
        color: ${({ theme }) => theme["base-label"]};
      }

      &:nth-child(2){
        grid-column: span 3;
      }
      &:nth-child(4){
        grid-column: span 2;
      }
    }
  }

  & .selected-coffees {
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    gap: 1.5rem;
    border-radius: 6px;
    padding: 2.5rem;

    background-color: ${({ theme }) => theme["base-card"]};

    & > table > tbody{
      display: block;
      max-height: 300px;
      overflow-y: auto;

      & tr:last-child div{
        margin-bottom: 0;
      }
    }

    & > div{
      display: grid;
      padding: 0;

      & > div{
        display: grid;
        grid-template-columns: repeat(2, 1fr);
      }

      & button{
        color: ${({theme})=> theme.white};
        padding: .75rem;  
        font-size: .875rem;
        line-height: 160%;
        font-weight: bold;

        border-radius: 6px;
        background-color: ${({theme})=> theme["yellow"]};
        transition: opacity 300ms linear;
        cursor: pointer;

        &:hover{
          opacity: 0.8;
        }
      }
    }
  }
`;