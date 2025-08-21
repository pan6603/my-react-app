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
`

export const InnerHeader = styled.div`
    max-width: 1300px;
    width: 100%;
    height: 92px;
    margin: 0 auto;
    display: flex;
    justify-content: space-between;
    align-items: center;
`

export const DocTitle = styled.div`
    max-width: 154px;
    width: 100%;
    height: 29px;
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
    width: max-content;
    height: 36px;
`

export const NavItemMenuLink = styled.a`
    width: max-content;
    height: 36px;
    line-height: 1.58;
    text-decoration: none;
    font-size: 17px;
    letter-spacing: -0.5px;
`

export const NavItemMenuLinkArrow = styled.a`
    width: max-content;
    height: 36px;
    line-height: 1.58;
    text-decoration: none;
    font-size: 17px;

    &::after {
        content: '';
        display: inline-block;
        vertical-align: top;
        background: url(https://t1.kakaocdn.net/kakaocorp/Ir/images/ico_outlink.svg) no-repeat;
        margin: 7px 0 0 4px;
        width: 10px;
        height: 9px;
    }
`


export const BtnLangViewPc = styled.div`
    max-width: 36px;
    width: 100%;
    height: 36px;
    background-color: blue;
    background: url('https://t1.kakaocdn.net/kakaocorp/Ir/images/btn_en.svg');
    cursor: pointer;
`