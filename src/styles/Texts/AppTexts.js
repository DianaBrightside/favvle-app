import styled from "styled-components";

export const brandColor = "#154A4E";


export const MainTitle = styled.h1 `
    color: ${brandColor};
    margin-bottom: 12px;
    font-size: 26px;
    letter-spacing: 0.35px;
    font-weight: 600;
    opacity: 0.7;
`
export const MainInfoTitle = styled(MainTitle)
`
color: #fff;
margin-bottom: 20px;
opacity: 1;
`

export const MainSubtitle = styled.p `
    color: ${brandColor};
    font-size: 22px;
    letter-spacing: 0.36px;
    margin-bottom: 40px;
    opacity: 0.55;
`
export const OrText = styled.span `
    font-size: 15px;
    opacity: 0.55;
    color: ${brandColor};
    margin-bottom: 18px;
`
export const InfoText = styled.div `
    width:80%;
    margin-bottom: 40px;
    color: #fff;
    font-size: 18px;
    line-height: 28px;
`

export const InfoList = styled(InfoText)
`
    padding-left: 10px;
    width: 100%;
    line-height: 37px;

`