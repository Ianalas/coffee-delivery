import styled from "styled-components";

export const SuccessContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;  
  gap: 2.5rem;


  & div:nth-child(1){
    display: flex;
    flex-direction: column;
    gap: 0.25rem;

    & h2{
      font-size: 2rem;
      font-weight: 800;
      color: ${({theme}) => theme["yellow-dark"]};
    }
    & > p{
      font-size: 1.25rem;
      color: ${({theme}) => theme["base-subtitle"]};
    }
  }

  & div:nth-child(2){
    display: flex;

    justify-content: space-between;
    align-items: center;

    & div:nth-child(1) {
      padding: 2.5rem;
      border-radius: 6px 36px;
      border: 1px solid ${({ theme }) => theme.purple};
      

      display: flex;
      flex-direction: column;
      justify-content: space-between;
      gap: 2rem;
      max-height: 270px;
      max-width: 526px;

      & > p {
        display: flex; 
        gap: 0.75rem;
        align-items: center;
        font-size: 1rem;
        color: ${({theme}) => theme["base-text"]};

        & a{
          display: flex; 
          justify-content: center;
          align-items: center;

          background: ${({ theme }) => theme["purple-dark"]};
          height: 2rem;
          min-width: 2rem;

          border-radius: 50%;
          padding: 0;

          & svg {
            height: 1rem;
            width: 1rem;
            color: ${({ theme }) => theme["white"]};
          }
        }

        & > span{
          display: block;
        }
        
        &:nth-child(2) a {
          background: ${({ theme }) => theme["yellow"]};
        }

        &:nth-child(3) a{
          background: ${({ theme }) => theme["yellow-dark"]};
        }
      }
    }
  }
`