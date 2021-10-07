import styled from "styled-components";

export const Wrapper = styled.div`
  display: flex;
  align-items: flex-start;
  background-color: #000000;
`;

export const WrapperInfoUser = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: space-between;
  margin-left: 18px;
  height: 200px;
  background-color: #8b008b

  h1 {
    font-size: 32px;
    font-weight: bold;
    color: #8b008b;
  }

  h3 {
    font-size: 18px;
    font-weight: bold;
    color: #8b008b;
  }


  h4 {
    font-size: 16px;
    font-weight: bold;
    color: blue;
  }
`;

// RESPOSTA DE FOLLOWERS-FOLLOWINS-GISTS-REPOS
export const WrapperStatusCount = styled.div`
  display: flex;
  align-items: center;
    
  div {
    margin: 8px;
    text-align: center;
    color: #8b008b;
  }
`;

//RESPOSTA DE COMPANY E LOCATIONN
export const WrapperUserGeneric = styled.div`
  display: flex;
  align-items: center;
  margin-top: 8px;
  color: #8b008b;
  

  h3 {
    margin-right: 8px;
    color: blue;
    
  }

  a {
    font-size: 18px;
    color: #8b008b;
    font-weight: bold;
   
  }
`;

export const WrapperImage = styled.img`
  border-radius: 10%;
  width: 200px;
  margin: 10px;
  color: blue;
  
`;
