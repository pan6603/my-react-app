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
    background-color: red;
    margin: 0 auto;
    display: flex;
    justify-content: space-between;
    align-items: center;
`

export const DocTitle = styled.div`
    max-width: 154px;
    width: 100%;
    height: 29px;
    background-color: blue;
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
    background-color: blue;
`

export const BtnLangViewPc = styled.div`
    max-width: 36px;
    width: 100%;
    height: 36px;
    background-color: blue;
    background: url('https://t1.kakaocdn.net/kakaocorp/Ir/images/btn_en.svg');
    cursor: pointer;
`