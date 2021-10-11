import styled from "styled-components";
import {
    brandColor
} from "../Texts/AppTexts";

export const MediaButton = styled.button `
    width: 240px;
    padding: 3px 30px 6px 10px;
    background-color: #fff;
    margin-bottom: 20px;
    border-radius: 22px;
    letter-spacing: 0.25px;
    color: #636363;
    border: none;
    cursor: pointer;
    img {
        margin: 0 10px 0 25px;
    }
`

export const UnderlinedButton = styled.button `
    margin-top: 0;
    color: ${brandColor};
    font-size: 16px;
    letter-spacing: 0.33px;
    opacity: 0.5;
    background: transparent;
    border:none;
    border-bottom: 1px solid ${brandColor};
    cursor:pointer;
`
export const ForgotPassword = styled(UnderlinedButton)
` 
      margin:12px 0 0 50%;
`

export const MainButton = styled.button `
    margin: 80px 0 38px 0;
    padding: 10px 66px;
    font-size: 19px;
    font-weight: 600;
    letter-spacing: 0.5px;
    color: #fff;
    background: linear-gradient(180deg, #F18B6D 0%, #AD3C3B 100%);
    box-shadow: 0px 4px 10px rgba(21, 87, 88, 0.5);
    border: 1px solid #FFF;
    border-radius: 25px;
    cursor: pointer;
`

export const MainButtonSignUp = styled(MainButton)
`
    margin: 50px 0 16px 0;
`

export const SkipButton = styled(MainButtonSignUp)
`
    margin: 0 0 35px 0;
    box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.1);
     background: transparent;
`
export const SkipPopUpButton = styled(SkipButton)
`
    background: #BAD7D5;
    margin: 0 0 0 15px;
`