import styled from "styled-components";

export const Input = styled.input `
    width: 100%;
    padding: 8px 13px;
    background: #FFFFFF;
    box-shadow: 0px 4px 10px rgba(21, 87, 88, 0.5);
    border-radius: 5px; 
    border: none;
    outline: none;
 
    :placeholder{
    color: #a6a6a6;
  }
`
export const PasswordInput = styled(Input)
`
background: transparent;
width: 90%;
box-shadow: none;
margin: 0;
`
export const PasswordContainer = styled.div `
    width: 100%;
    box-shadow: 0px 4px 10px rgba(21, 87, 88, 0.5);
    border-radius: 5px; 
    background: #FFFFFF;
    margin-top: 25px;

    & img {
        cursor: pointer;
    }
    & img.active {
        filter: invert(56%) sepia(7%) saturate(5521%) hue-rotate(313deg) brightness(94%) contrast(109%);
    }
`