import styled from "styled-components"

export const DocFooter = styled.footer`
    position: relative;
    max-width: 1440px;
    width: 100%;
    height: 230px;
    margin: 0px auto;
    padding: 80px 0 70px;
    background: #fff;
    border-top: 1px solid #333;
    z-index: 90;

    @media (max-width: 1431px) {
        max-width: 1431px;
        width: 100%;
        height: 330px;
        padding: 0 38px 40px;
        box-sizing: border-box;
    }

    @media (max-width: 1023px) {
        max-width: 1023px;
        width: 100%;
        height: 490px;
        padding: 24px 28px 40px;
        box-sizing: border-box;
    }      
        
    @media (max-width: 767px) {
        max-width: 767px;
        width: 100%;
        height: 510px;
        padding-left: 14px;
        padding-right: 14px;
        box-sizing: border-box;
    }
    
`

export const ListMain = styled.div`
    max-width: 1316px;
    width: 100%;
    height: 200px;   
    margin: 0 auto;
    display: flex;
    gap: 16px;
    align-items: center;

    @media (max-width: 1431px) {
        max-width: 1355px;
        width: 100%;
        height: 280px;
        display: flex;
        flex-wrap: wrap;
        gap: 12px;
    }

    @media (max-width: 1023px) {
        display: none;
    }
`

export const ListMainItem = styled.div`
    max-width: 206px;
    width: 100%;
    height: 200px;

    @media (max-width: 1431px) {
        min-width: 227px;
        width: 100%;
        margin-top: 40px;
        height: 193px;
    }

    @media (max-width: 1023px) {
        display: none;
    }
`

export const ListSubTitle = styled.div`
    color: #000;
    font-size: 16px;
    font-weight: 700;
    letter-spacing: -0.5px;
    line-height: 1.75;
    width: max-content;
    height: 23px;
`

export const ListSub = styled.div`
    margin-top: 8px;
    max-width: 206px;
    width: 100%;
    height: max-content;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
`

export const ListSubMenuDiv = styled.div`
    max-width: 206px;
    width: 100%;
    height: 32px;
`

export const ListSubMenuLink = styled.a`
    max-width: 206px;
    width: 100%;
    height: 32px;
    color: #888;
    font-size: 14px;
    letter-spacing: -0.2px;
`