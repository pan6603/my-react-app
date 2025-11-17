import styled from "styled-components";


export const DocHeader = styled.header`
    position: sticky;
    top: 0;
    left: 0;
    right: 0;
    z-index: 95;
    max-width: 1440px;
    width: 100%;
    height: 92px;
    background-color: #fff;
    border-bottom: ${({ isScrolled }) => isScrolled ? "1px solid #EAEAEA" : "none"};

    @media (max-width: 1431px) {
        max-width: 1431px;
        width: 100%;
        height: 84px;
        padding: 0 38px;
        box-sizing: border-box;
    }  
`

export const InnerHeader = styled.div`
    max-width: 1300px;
    width: 100%;
    height: 92px;
    margin: 0 auto;
    display: flex;
    justify-content: space-between;
    align-items: center;

    @media (max-width: 1431px) {
        max-width: 1431px;
        width: 100%;
        height: 84px;
        padding: 0 38px;
        box-sizing: border-box;
    }  
`

export const DocTitle = styled.div`
    max-width: 154px;
    width: 100%;
    height: 29px;

    @media (max-width: 1431px) {
        max-width: 132px;
        width: 100%;
        height: 26px;
    }  
`

export const DocTitleLink = styled.a`
    max-width: 154px;
    width: 100%;
    height: 29px;
`


export const DocGnbNav = styled.div`
    max-width: 818px;
    width: 100%;
    height: 36px;

    @media (max-width: 1431px) {
        display: none;
    }  
`

export const ListMainNav = styled.div`
    max-width: 818px;
    width: 100%;
    height: 36px;
    display: flex;
    justify-content: space-between;
    align-items: center;
`

export const NavItemMenu = styled.div`
    position: relative;
    height: 36px;
    cursor: pointer;
    display: flex;
    justify-content: center;
    align-items: center;

`

export const NavItemMenuLink = styled.a`
    width: max-content;
    height: 36px;
    display: flex;
    justify-content: center;
    align-items: center;
    font-size: 17px;
    letter-spacing: -0.5px;
    padding: 8px 12px; 
    text-decoration: none;
    color: #000;

    &:hover {
        background-color: #f5f5f5;
        border-radius: 24px; 
    }

`

export const NavItemMenuLinkArrow = styled.a`
    width: max-content;
    height: 36px;
    font-size: 17px;
    padding: 8px 12px; 
    text-decoration: none;
    color: #000;
    display: flex;
    justify-content: center;
    align-items: center;

    &::after {
        content: '';
        display: inline-block;
        vertical-align: top;
        background: url(https://t1.kakaocdn.net/kakaocorp/Ir/images/ico_outlink.svg) no-repeat;
        margin: 7px 0 0 4px;
        width: 10px;
        height: 9px;
    }

     &:hover {
        background-color: #f5f5f5;
        border-radius: 24px; 
    }
`


export const BtnLangViewPc = styled.div`
    max-width: 36px;
    width: 100%;
    height: 36px;
    background: url(${props => props.bg});
    cursor: pointer;

    @media (max-width: 1431px) {
        display: none;
    }  
`

export const BoxControls = styled.div`
    max-width: 96px;
    width: 100%;
    height: 36px;
    display: flex;
    z-index: 110;
    justify-content: space-between;
    align-items: center;

    @media (min-width: 1440px) {
        display: none;
    }  
`

export const BtnLangIcon = styled.div`
    @media (max-width: 1431px) {
        max-width: 36px;
        width: 100%;
        height: 36px;
        background: url(${props => props.bg});
    }
`

export const BtnMenuIcon = styled.div`
    @media (max-width: 1431px) {
        max-width: 36px;
        width: 100%;
        height: 36px;
        background-image: url(${props => props.bg});
    }
`