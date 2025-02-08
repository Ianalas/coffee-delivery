import styled from "styled-components"

export const ContainerProduct = styled.tr`
  & td > div{
    display: flex;
    justify-content: space-between;
    gap: 4rem;

    border-bottom: 1px solid  ${({theme}) => theme["base-button"]};
    padding-bottom: 1.5rem;
    margin-bottom: 1.5rem;
    
    & > div{
      display: flex;
      align-items: center;

      gap: 1.25rem;
      & img{
        height: 4rem;
        width: 4rem;
      }

      & > div{
        display: grid;
        grid-template-columns: repeat(2, 1fr);
        row-gap: .75rem;

        & > p{
          grid-column: span 2;
          color: ${({theme}) => theme["base-subtitle"]};
          font-weight: 400;
        }

        & > button{
          display: flex;
          align-items: center;
          background-color: ${({theme}) => theme["base-button"]};
          border-radius: 6px;
          padding: .5rem;
          gap: 2px;

          text-transform: uppercase;
          font-size: .75rem;

          & > svg{
            height: 1rem;
            width: 1rem;
            color: ${({theme}) => theme.purple};
          }
        }
      }
    }
  }
`