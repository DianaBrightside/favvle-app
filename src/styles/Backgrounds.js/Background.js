// import Flexbox from "flexbox-react";
import styled from "styled-components";

const whiteBackground = 'linear-gradient(180deg, #FFFFFF 0%, rgba(255, 255, 255, 0.676956) 55.94%, rgba(255, 255, 255, 0.377568) 82.37%, rgba(255, 255, 255, 0.0001) 100%), linear-gradient(180deg, #155254 0%, #95D1CB 100%)';

export const Column = styled.div `
 & img.info__image {
    padding-bottom: 30px;
 }
`

// export const LeftColumn = styled.div 
export const LeftColumn = styled(Column)
`   padding-right: 30px;
    justify-content: flex-end;
    padding-right: 30px;
`

//  height: 100%; 
// export const RightColumn = styled.div 
export const RightColumn = styled(Column)
`
    background-image: ${whiteBackground};
    border-radius: 25px 0 0 25px;
    justify-content: flex-start;
    padding-left: 119px;
`
export const RightColumnSignUp = styled(RightColumn)
`
    padding-left: 30px;
    background: transparent;
    border-radius: 0;
`
export const LeftColumnSignUp = styled(LeftColumn)
`
    padding-right: 119px;
    background-image: ${whiteBackground};
    border-radius: 0 25px 25px 0;

`
export const PopUpBlock = styled.div `
    background: #EAF8F8;
    box-shadow: 0px 3px 10px 1px rgba(21, 106, 108, 0.5);
    border-radius: 23px;    
    padding: 33px 60px 40px;
    line-height: 22px;

`