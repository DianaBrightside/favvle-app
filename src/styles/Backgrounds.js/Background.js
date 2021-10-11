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
    position: relative;
    padding-right: 119px;
    background-image: ${whiteBackground};
    border-radius: 0 25px 25px 0;

`
export const PopUpContainer = styled.div `
    position: absolute;
    height: 100%;
    top: 0;
    left: 0;
    right: 0;
    justify-content: flex-end;
    padding-right: 18px;
     padding-top: 235px; 
}

`

export const PopUpBlock = styled.div `
    height: 266px;
    background: #EAF8F8;
    box-shadow: 0px 3px 10px 1px rgba(21, 106, 108, 0.5);
    border-radius: 23px;    
    padding: 33px 40px 40px;
    line-height: 22px;

`

export const PopUpFader = styled.div `
    position: absolute;
    left: 0;
    right: 0;
    bottom: 0;
    top: 0;
    background: #00000001;
`