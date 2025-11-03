import styled from "styled-components";
import { Link } from "react-router-dom";


export const DocMain = styled.main`
    max-width: 1440px;
    width: 100%;

    @media (max-width: 1436px) {
        max-width: 1436px;
        width: 100%;
    }  
`

export const InnerMain = styled.section`
    max-width: 1440px;
    width: 100%;

     @media (max-width: 1436px) {
        max-width: 1436px;
        width: 100%;
    }      
`


export const MainContent = styled.div`
    padding-top: 91px;
    max-width: 1440px;
    width: 100%;
    margin: 0px auto;

    @media (max-width: 1436px) {
        max-width: 1436px;
        width: 100%;
    }  
`

export const ContentArticle = styled.article`
    position: relative;
    max-width: 1296px;
    width: 100%;
    margin: 0 auto;
    padding-bottom: 182px;

    @media (max-width: 1436px) {
        max-width: 952px;
        width: 100%;
    }  
`

export const TitMain = styled.div`
    max-width: 1296px;
    width: 100%;
    height: 220px;
    margin: 0 auto;
    background-image: url(//t1.kakaocdn.net/kakaocorp/kakaocorp/service/ico_tit_service.gif);
    background-repeat: no-repeat;
    background-position: 0 94px;
    background-size: 72px 72px;
    letter-spacing: -1px;
    color: #000;
    font-size: 46px;
    line-height: 66px;
    padding-top: 96px;
    box-sizing: border-box;

    @media (max-width: 1436px) {
        padding-top: 72px;
        font-size: 40px;
        line-height: 52px;
        background-position-y: 72px;
        background-size: 56px 56px;
    }  
`

export const EmphTit = styled.div`
    display: block;
    padding-left: 84px;
    font-weight: 700;

     @media (max-width: 1436px) {
        padding-left: 68px;
    } 
`

export const TxtTit = styled.div`
    display: block;
    margin-top: 22px;
    font-weight: 400;
    font-size: 36px;
    line-height: 36px;

    @media (max-width: 1436px) {
        margin-top: 3px;
        font-size: 28px;
        line-height: 52px;
    } 
`


export const SectionService = styled.section`
    position: relative;
    margin-top: 92px;
    max-width: 1296px;
    width: 100%;
    color: #333;
    display: flex;
    flex-direction: column;
    gap: 45px;

    @media (max-width: 1436px) {
        margin-top: 20px;
    }     
`

export const WrapTabs = styled.div`
    max-width: 1296px;
    width: 100%;
    height: 61px;

    @media (max-width: 1436px) {
        max-width: 952px;
        width: 100%;
        height: 50px;
    }  
`

export const ListCardNew = styled.div`
    max-width: 1296px;
    width: 100%;
    display: grid;
    grid-template-columns: repeat(3,1fr);
    gap: 36px;

    @media (max-width: 1436px) {
        max-width: 952px;
        width: 100%;
        gap: 24px;
    }  
`

export const ListCardNewDiv = styled.div`
    max-width: 408px;
    width: 100%;
    height: 502px;

    @media (max-width: 1436px) {
        max-width: 301px;
        width: 100%;
        height: 385px;
    }  

`

export const ItemNormalCard = styled.div`
    overflow: hidden;
    box-sizing: border-box;
    position: relative;
    background-color: #f3f3f3;
    border-radius: 16px;
    max-width: 408px;
    width: 100%;
    height: 502px;

    @media (max-width: 1436px) {
        max-width: 301px;
        width: 100%;
        height: 385px;
    }  
`

export const InnerCard = styled.div`
    max-width: 408px;
    width: 100%;
    height: 502px;
    position: relative;
    padding: 32px 32px 0;
    box-sizing: border-box;

    @media (max-width: 1436px) {
        max-width: 301px;
        width: 100%;
        height: 385px;
        padding: 24px 24px 0;
    }  
`

export const InfoCard = styled.span`
    position: absolute;
    top: 224px;
    left: 32px;
    right: 32px;
    height: 26px;
    align-items: center;
    overflow: hidden;         /* 필수 */
    white-space: nowrap;      /* 필수 */
    text-overflow: ellipsis;  /* 필수 */           
    font-size: 16px;
    font-weight: 500;
    line-height: 26px;
    color: #666;
    pointer-events: none;

    @media (max-width: 1436px) {
        top: 174px;
        left: 24px;
        right: 24px;
        height: 18px;
        font-size: 13px;
        line-height: 18px;
    }  
`


export const TxtKeyword = styled.span`
    margin-right: 15px;
    vertical-align: top;
    letter-spacing: -.5px;
    pointer-events: none;
    white-space: nowrap;
    font-size: 16px;
    line-height: 26px;
    color: #666;

    @media (max-width: 1436px) {
        font-size: 13px;
        line-height: 18px;
    }  
`

export const LinkItem = styled.div`
    position: absolute;
    max-width: 408px;
    width: 100%;
    height: 418px;
    display: block;
    margin: 0px -32px;
    font-size: 1px;
    outline-offset: -4px;
    text-decoration: none;
    color: #333; 

    @media (max-width: 1436px) {
        margin: 0 -24px;
    }  
`

export const WrapDownload = styled.a`
    position: absolute;
    top: 199px;
    left: 32px;
    max-width: 193px;
    width: 100%;
    height: 43px;
`

export const BtnDownload = styled.div`
    padding: 8px 52px 8px 20px;
    box-sizing: border-box;
    border-radius: 36px;
    background-color: #fae100;
    background-image: url("data:image/svg+xml;charset=utf-8,%3Csvg width='24' height='25' fill='none' xmlns='http://www.w3.org/2000/svg'%3E%3Ccircle cx='12' cy='12.5' r='12' fill='%23000'/%3E%3Cpath d='M15.421 13.579l-.762-.763-2.513 2.513V7.146H11.07v8.183l-2.512-2.513-.763.763 3.813 3.813 3.813-3.813z' fill='%23fff'/%3E%3C/svg%3E");
    background-repeat: no-repeat;
    background-position: right 20px center;
    background-size: 24px 25px;
    color: #000;
`


export const WrapThumb = styled.div`
    max-width: 408px;
    width: 100%;
    height: 229px;
    margin-top: 117px;
    position: relative;
    display: block;

    @media (max-width: 1436px) {
        height: 169px;
        margin-top: 66px;
    }      
`

export const ThumbImg = styled.img`
    position: absolute;
    left: 50%;
    transform: translateX(-50%);
    display: block;
    height: 100%;
    min-width: 100%; 
`


export const TitCard = styled.div`
    max-width: 408px;
    width: 100%;
    height: 72px;
    margin-top: 16px;
    padding: 0 32px;
    font-size: 26px;
    font-weight: 700;
    line-height: 36px;
    letter-spacing: -.6px;
    color: #000;

    @media (max-width: 1436px) {
        height: 84px;
        margin-top: 12px;
        padding: 0 24px;
        font-size: 18px;
        line-height: 28px;
        letter-spacing: -.5px;
    }  
`

export const InfoCate = styled.div`
    max-width: 344px;
    width: 100%;
    height: 36px;

    @media (max-width: 1436px) {
        height: 30px;
    }  
`
export const IcoCate = styled.img`
    max-width: 36px;
    width: 100%;
    height: 36px;
    margin-right: 8px;
    vertical-align: top;

    @media (max-width: 1436px) {
        width: 28px;
        height: 28px;
        margin-top: 1px;
    } 
`

export const TxtCate = styled.div`
    display: inline-block;
    position: relative;
    padding: 0 12px;
    border-radius: 8px;
    font-size: 14px;
    line-height: 36px;
    letter-spacing: -.2px;
    color: #000;
    background-color: #fff;
    width: max-content;
    height: 36px;
    vertical-align: top;

     @media (max-width: 1436px) {
        height: 30px;
        border-radius: 6px;
        font-size: 12px;
        line-height: 30px;
    } 
`

export const BtnShare = styled.svg`
    display: block;
    overflow: hidden;
    position: absolute;
    top: 38px;
    right: 32px;
    z-index: 20;
    width: 24px;
    height: 24px;
    font-size: 0;
    line-height: 0;
    text-indent: -9999px;

    @media (max-width: 1436px) {
        top: 27px;
        right: 24px;
    }  
`


export const ListTab = styled.div`
    max-width: 1296px;
    width: 100%;
    height: 61px;
    display: flex;
    align-items: center;

    @media (max-width: 1436px) {
        max-width: 952px;
        width: 100%;
        height: 50px;
        display: flex;
        align-items: center;
    }  
`

export const LinkTabDiv = styled.div`
    width: max-content;
    height: 51px;
    margin: 10px 8px 0 0;
    display: flex;

    @media (max-width: 1436px) {
        height: 40px;
    }  
`

export const LinkTab = styled(Link)`
    width: max-content;
    height: 51px;
    padding: 12px 24px;
    box-sizing: border-box;
    border-radius: 999px;
    background: #f3f3f3;
    font-size: 17px;
    line-height: 27px;
    letter-spacing: -.5px;
    color: #666;
    text-decoration: none;
    background-color: ${({ isActive }) => isActive ? "#000" : "#f3f3f3"};
    color: ${({ isActive }) => isActive ? "#fff" : "#666"};

    @media (max-width: 1436px) {
        padding: 8px 20px;
        font-size: 15px;
        line-height: 24px;
        letter-spacing: -.2px;
        height: 40px;
    } 
`
