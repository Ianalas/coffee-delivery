import styled from "styled-components";

export const HeaderContainer = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;

  margin: 2rem 0;

  font: 400 0.875rem/1.3 'Roboto';


  & img{
    height: 40px;
  }

  & div{
    display: flex;
    gap: .75rem;

    & span{
      display: flex;

      font-family: 'Roboto', sans-serif;
      font-size: 0.875rem;
      font-weight: 400;
      line-height: 130%;
      
      color: ${props => props.theme['purple-dark']};
      background-color: ${props => props.theme["purple-light"]};
      
      padding: 8px;
      border-radius: 6px;
      gap: 4px;
      justify-content: center;
      align-items: center;

      & svg{
        color: ${props => props.theme['purple']};
      }
    }

    & > a > span{
      position: relative;
      background-color: ${props => props.theme["yellow-light"]};
      padding: 8px;

      & svg{
        color: ${props => props.theme["yellow-dark"]};
      }

      & p{
        top: -10px;
        left: 26px;
        position: absolute;
        background-color: ${props => props.theme["yellow-dark"]};
        color: ${props => props.theme.white};
        padding: 2px 8px;
        border-radius: 50%;
        max-height: 22px;
        max-width: 22px;

        display: flex;
        aling-items: center;
        text-aling: center;

        // & a{
        //   color: ${props => props.theme.white};
        // }
      }
    }
  } 
`