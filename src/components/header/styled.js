import styled from "styled-components";

export const Wrapper = styled.div`
  display: flex;
  width: 100%;
  justify-content: space-between;
  padding: 14px;
  background-color: #000000;
  
 

  input {
    border: 1px solid #8b008b;
    border-radius: 58px;
    width: 100%;
    height: 44px;
    padding: 8px;
    font-weight: 500;
    color: #fff8dc
  }

  button {
    background-color: #8b008b;
    padding: 8px 16px;
    margin: 0 16px;
    border-radius: 8px;

    &:hover {
      background-color: #2c5282;
      box-shadow: 3px 2px 10px rgba(0, 0, 0, 0.2);
    }

    span {
      font-weight: bold;
      color: #fff8dc;
    }
  }
`;
