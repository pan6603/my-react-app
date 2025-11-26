import { Link } from "react-router-dom";
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

    @media (max-width: 1023px) {
        max-width: 1023px;
        width: 100%;
        height: 72px;
        padding: 0 28px;
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

    @media (max-width: 1023px) {
        max-width: 1023px;
        width: 100%;
        height: 72px;
        padding: 0 28px;
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

    @media (max-width: 1023px) {
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

export const Overlay = styled.div`
    position: fixed;       
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background-color: rgba(0,0,0,0.5); 
    z-index: 998;         
`;

export const DocGnb = styled.nav`
    @media (max-width: 1431px) {
        max-width: 536px; 
        width: 100%;
        height: 100vh;
        overflow-y: auto;
        position: fixed;
        z-index: 1000;
        top: 0;
        right: 0;
        bottom: 0;
        padding: 0 48px 48px;
        box-sizing: border-box;
        background: #fff;
    } 

    @media (max-width: 1023px) {
        max-width: 408px; 
        width: 100%;
        height: 100vh;
        padding: 0 35px 35px;
        box-sizing: border-box;
    }
`

export const ContHead = styled.div`
    max-width: 412px;
    width: 100%;
    height: 72px;
    margin: 0;
    padding: 0;
    display: flex;
    justify-content: end;
    align-items: center;
`

export const HamBurgerBoxControls = styled.div`
    max-width: 96px;
    width: 100%;
    height: 36px;
    display: flex;
    justify-content: space-between;
    align-items: center;
`

export const BtnLang = styled.div`
    @media (max-width: 1431px) {
        max-width: 36px;
        width: 100%;
        height: 36px;
        background: url(https://t1.kakaocdn.net/kakaocorp/Ir/images/btn_en.svg) no-repeat;
    }
` 

export const BtnClose = styled.div`
    @media (max-width: 1431px) {
        max-width: 36px;
        width: 100%;
        height: 36px;
        background-image: url(https://t1.kakaocdn.net/kakaocorp/Ir/images/ico_close.svg);
    }
`


export const ListMain = styled.div`
    @media (max-width: 1431px) {
        min-width: 440px;
        height: 514px;
        margin-top: 126px;
        display: flex;
        flex-direction: column;
        gap: 12px;
    }

    @media (max-width: 1023px) {
        min-width: 338px;
        width: 100%;
        height: 471px;
        gap: 8px;
        margin-top: 40px;
        display: flex;
        flex-direction: column;
    }
`

export const ListMainMenu = styled.div`
    @media (max-width: 1431px) {
        min-width: 440px;
        width: 100%;
        height: max-content;
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
    }

    @media (max-width: 1023px) {
        min-width: 338px;
        width: 100%;
        height: max-content;
    }
`

export const MenuLink = styled(Link)`
     @media (max-width: 1431px) {
        min-width: 440px;
        width: 100%;
        height: 53px;
        display: flex;
        align-items: center;
        justify-content: space-between;
        font-size: 26px;
        color: #000;
        font-weight: 700;
        line-height: 1.3;
        text-decoration: none;
        padding: 10px 0;
        box-sizing: border-box;

        &::after {
            width: 14px;
            height: 14px;
            background: url(https://t1.kakaocdn.net/kakaocorp/Ir/images/ico_more.svg) no-repeat;
            transform: rotate(${props => (props.bg ? "180deg" : "0deg")});
            filter: brightness(${props => (props.bg ? "0" : "1")});
            content: '';
        }
    }

    @media (max-width: 1023px) {
        min-width: 338px;
        width: 100%;
        height: 51px;
        font-size: 22px;
        line-height: 1.45;
    }
`


export const ESGMenuLink = styled(Link)`
     @media (max-width: 1431px) {
        min-width: 440px;
        width: 100%;
        height: 53px;
        display: flex;
        align-items: center;
        justify-content: space-between;
        padding: 10px 0;
        box-sizing: border-box;
        font-size: 26px;
        color: #000;
        font-weight: 700;
        line-height: 1.3;
        text-decoration: none;

        &::after {
            content: '';
            margin: 0;
            width: 14px;
            height: 14px;
            background-image: url(https://t1.kakaocdn.net/kakaocorp/Ir/images/ico_outlink2.svg);
        }
    }

    @media (max-width: 1023px) {
        min-width: 338px;
        width: 100%;
        height: 51px;
        font-size: 22px;
        line-height: 1.45;
    }
`

export const KaKaoMenuLink = styled(Link)`
     @media (max-width: 1431px) {
        min-width: 440px;
        width: 100%;
        height: 53px;
        display: flex;
        align-items: center;
        justify-content: space-between;
        padding: 10px 0;
        box-sizing: border-box;
        font-size: 26px;
        color: #000;
        font-weight: 700;
        line-height: 1.3;
        text-decoration: none;

        &::after {
            content: '';
            margin: 0;
            width: 14px;
            height: 14px;
            background-image: url(https://t1.kakaocdn.net/kakaocorp/Ir/images/ico_outlink2.svg);
        }
    }

    @media (max-width: 1023px) {
        min-width: 338px;
        width: 100%;
        height: 51px;
        font-size: 22px;
        line-height: 1.45;
    }
`

export const ListSub = styled.div`
    max-width: 440px;
    width: 100%;
    height: max-content; 
    position: unset;
    transform: none;
    padding: 28px 36px;
    box-sizing: border-box;
    margin: 4px 0 10px;
    border-radius: 16px;
    border: none;
    background: #f7f7f7;

    @media (max-width: 1023px) {
        min-width: 338px;
        width: 100%;
        height: max-content;
        padding: 24px 32px;
        box-sizing: border-box;
    }
`

export const ListSubItem = styled.div`
    max-width: 368px;
    width: 100%;
    height: 41px;
    display: flex;
    align-items: center;

    @media (max-width: 1023px) {
        max-width: 274px;
        width: 100%;
        height: 40px;
    }
`

export const ListSubItemLink = styled(Link)`
    width: max-content;
    height: max-content;
    font-size: 17px;
    letter-spacing: -0.5px;
    font-weight: 500;
    text-decoration: none;
    color: #000;
    cursor: pointer;

    &:hover {
        border-bottom: 2px solid #000;
    }
`


