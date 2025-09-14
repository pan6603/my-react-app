import styled from "styled-components";

export const Overlay = styled.div`
    position: fixed;       
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background-color: rgba(0,0,0,0.7); 
    z-index: 998;         
`;

export const MainContainer = styled.main`
    max-width:1440px;
    width: 100%;
    height: 5457px;
    padding-top: 91px;
    background-color: ${({theme}) => theme.bgColor};
    
`

export const InnerMain = styled.section`
    max-width: 1440px;
    width: 100%;
    height: 5467px;
    margin: 0 auto;
`

export const MainContent = styled.div`
    max-width: 1440px;
    width: 100%;
    height: 5366px;
    margin: 0 auto;
`

export const ContentArticle = styled.article`
    max-width: 1440px;
    width: 100%;
    height: 5366px;
    margin: 0 auto;
`

export const ContHome = styled.div`
    max-width: 1440px;
    width: 100%;
    height: 5243px;
    margin: 0 auto;
`


















































