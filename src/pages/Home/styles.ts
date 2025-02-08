import styled from "styled-components";

export const HomeContainer = styled.div`
  
`

export const AdscenseHomeLayout = styled.div`
  display: flex;
  margin-block: 90px;
  gap: 3.5rem;
  border-radius: 5%; 

  background: linear-gradient(
    to bottom right,
    rgba(255, 255, 255, 0.1),
    rgba(235, 193, 54, 0.1), 
    rgba(255, 255, 255, 0.1)
  ); 


  & > div:nth-child(1){
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    gap: 66px;

    & div:nth-child(1){
      display: flex;
      flex-direction: column;
      gap: 1rem;

      & h1{
        font-size: 3rem;
        line-height: 130%;
      }

      & h4{
        font-size: 1.25rem;
        line-height: 130%;
      }
    }

    & div:nth-child(2){
      display: grid;
      grid-template-columns: repeat(2, 1fr);
      row-gap: 20px;
      margin-bottom: 1rem;

      & > p{
        display: flex;
        gap: .75rem;
        align-items: center;

        & > a{
          display: grid;
          align-items: center;
          justify-content: center;
          width: 32px;
          height: 32px;


          background-color: ${props => props.theme["yellow-dark"]};
          border-radius: 50%;

          & svg{
            height: 16px;
            width: 16px;
            color: ${props => props.theme["background"]};
          }
        }
        &:nth-child(2) a{
          background-color: ${props => props.theme["base-text"]};
        }
        &:nth-child(3) a{
          background-color: ${props => props.theme["yellow"]};
        }
        &:nth-child(4) a{
          background-color: ${props => props.theme["purple"]};
        }
        
        
        & span{
          font-family: 'Roboto', sans-serif;
          font-size: 1rem;
          font-weight: 400;
          line-height: 130%;

          color: ${props => props.theme["base-text"]};
        }
      }
    }
  }

  & > div:nth-child(2){
    & img{
      height: 360px;
    }
  }
`

export const TableHomeLayout = styled.div`
  h1 {
    margin-bottom: 54px;
  }
  & > div{
    display: grid;
    column-gap: 2rem;
    row-gap: 2.5rem;
    grid-template-columns: repeat(4, 1fr);
  }

  & span{
    display: flex;
    align-items: center;
    justify-content: center;


    height: min-content;
    width: min-content;
    background-color: ${props => props.theme["purple-dark"]};
    padding:8px;
    border-radius: 6px;
    cursor: pointer;

    &:hover{
      background-color: ${props => props.theme["purple"]};
    }

    & svg{
      
      color: ${props => props.theme["base-card"]};
    }
  }
`
export const ProductForSaleLayout = styled.div`
  background-color: ${props => props.theme["base-card"]};
  border-radius: 0 40px 0 40px;
  padding: 20px;
  height: 310px;
  display: grid;

  justify-content: space-between;

  & > div:nth-child(1){
    position: relative;
    display: grid;
    flex-direction: column;
    justify-content: center;
    gap: .75rem;
    
    & img{
      position: absolute;
      height: 120px;
      width: 120px;
      top: -40px;
      left: calc(50% - 60px);
    }

    & div{
      display: flex; 
      margin-top: 90px;
      gap: 4px;
      
      & > label {
        display: flex;
        align-items: center;
        justify-content: center;
        max-height: 21px;

        font-family: "Roboto", sans-serif;
        font-size: 10px;
        font-weight: bold;
        line-height: 130%;

        padding: 0px 8px;
        border-radius: 16px;

        background-color: ${props => props.theme["yellow-light"]};
        color: ${props => props.theme["yellow-dark"]};
      }
    }
  }

  & > div:nth-child(2){
    text-align: center;
    & > h3{
      margin-block: 8px 4px;
      color: ${props => props.theme["base-subtitle"]};
    }
    & > p{
      color: ${props => props.theme["base-label"]};
      font-size: 14px;
      line-height: 130%;
    }
  }

  & > div:nth-child(3){
    display: flex;
    align-items: center;
    justify-content: space-between;
    margin-top: 12px;

    & > h2{
      color: ${props => props.theme["base-text"]};
    }

    & form{
      display: flex;
      gap: 8px;

      & input[type="number"]{
        width: 4.5rem;
        border-radius: 6px;

        background-color: ${props => props.theme["base-button"]};
        color: ${props => props.theme["base-title"]};
      }

      & input[type="number"]::-webkit-inner-spin-button,
      input[type="number"]::-webkit-outer-spin-button {
        -webkit-appearance: none;
        appearance: none;
        margin: 0;
      }
    }
  }
`

