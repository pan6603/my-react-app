import styled from "styled-components";
import { Link } from "react-router-dom";


export const DocMain = styled.main`
    max-width: 1440px;
    width: 100%;
    height: 3338px;
`

export const InnerMain = styled.section`
    max-width: 1440px;
    width: 100%;
    height: 3338px;
`


export const MainContent = styled.div`
    padding-top: 91px;
    max-width: 1440px;
    width: 100%;
    height: 3247px;
    margin: 0px auto;
`

export const ContentArticle = styled.article`
    position: relative;
    max-width: 1296px;
    width: 100%;
    height: 3247px;
    margin: 0 auto;
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
`

export const EmphTit = styled.div`
    display: block;
    padding-left: 84px;
    font-weight: 700;
`

export const TxtTit = styled.div`
    display: block;
    margin-top: 22px;
    font-weight: 400;
    font-size: 36px;
    line-height: 36px;
`


export const SectionService = styled.section`
    position: relative;
    margin-top: 92px;
    max-width: 1296px;
    width: 100%;
    height: 2763px;
    color: #333;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
`

export const WrapTabs = styled.div`
    max-width: 1296px;
    width: 100%;
    height: 61px;
`

export const ListCardNew = styled.div`
    max-width: 1296px;
    width: 100%;
    height: 2654px;
    display: grid;
    grid-template-columns: repeat(3,1fr);
    gap: 36px;
`

export const ListCardNewDiv = styled.div`
    max-width: 408px;
    width: 100%;
    height: 502px;
`

export const ItemNormalCard = styled.div`
    overflow: hidden;
    box-sizing: border-box;
    position: relative;
    background-color: #f3f3f3;
    border-radius: 16px;
    width: 100%;
    height: 100%;
    max-width: 408px;
    width: 100%;
    height: 502px;
`

export const InnerCard = styled.div`
    max-width: 408px;
    width: 100%;
    height: 502px;
    position: relative;
    padding: 32px 32px 0;
    box-sizing: border-box;
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
`

export const InfoCate = styled.div`
    max-width: 344px;
    width: 100%;
    height: 36px;
`
export const IcoCate = styled.img`
    max-width: 36px;
    width: 100%;
    height: 36px;
    margin-right: 8px;
    vertical-align: top;
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
`


export const ListTab = styled.div`
    max-width: 1296px;
    width: 100%;
    height: 61px;
    display: flex;
    align-items: center;
`

export const LinkTabDiv = styled.div`
    width: max-content;
    height: 51px;
    margin: 10px 8px 0 0;
    display: flex;
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
`
