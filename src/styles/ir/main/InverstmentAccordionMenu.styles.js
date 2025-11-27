import styled from "styled-components"

export const ListMain = styled.div`
    max-width: 967px;
    width: 100%;
    height: max-content;
    display: flex;
    gap: 0px;
    flex-wrap: wrap;
    margin: 0 auto;

    @media(min-width: 1024px) {
        display: none;
    }

    @media(max-width: 767px) {
        max-width: 739px;
        width: 100%;
        height: max-content;
    }
`

export const ListMainItem = styled.div`
    max-width: 967px;
    width: 100%;
    height: max-content;
    margin: 0;
    border-bottom: 1px solid #E6E6E6;

    @media(max-width: 767px) {
        max-width: 739px;
        width: 100%;
        height: max-content;
        border-color: #888;
    }
`

export const ListSub = styled.div`
    max-width: 967px;
    width: 100%;
    height: max-content;
    display: flex;
    flex-direction: column;
    gap: 0px;
`

export const ListSubMenuDiv = styled.div`
    max-width: 967px;
    width: 100%;
    height: 26px;
    display: flex;
    align-items: center;
    font-size: 12px;
    font-weight: 500;
    color: gray;

    &:hover {
        color: #000;
    }
`


export const ListSubTitle = styled.div`
    max-width: 967px;
    width: 100%;
    height: 52px;
    display: block;
    position: relative;
    padding: 16px 0;
    box-sizing: border-box;
    font-size: 13px;
    font-weight: bold;
    cursor: pointer;
    line-height: 1.54;
    
    &::after {
        content: "";
        position: absolute;
        top: 20px;
        right: 20px;
        width: 14px;
        height: 14px;
        background: url(https://t1.kakaocdn.net/kakaocorp/Ir/images/ico_more.svg) no-repeat;
        transform: rotate(${props => (props.bg ? "180deg" : "0deg")});
        filter: brightness(${props => (props.bg ? "0" : "1")});
    }

    
`