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
    background-color: red;
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
