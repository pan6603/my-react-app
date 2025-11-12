
import { ReactComponent as IconMoon } from "../img/area/area-moon-icon.svg";
import { ReactComponent as IconSun } from "../img/area/area-sun-icon.svg";
import { ReactComponent as IconMagnifier } from "../img/area/area-magnifier-icon.svg";
import { ReactComponent as KakaoLogoIcon } from "../img/logo/kakao_logo_icon.svg";
import { ReactComponent as IconArrowLink } from "../img/nav/arrow_icon-icons.svg";
import { Link } from "react-router-dom";
import styled from "styled-components";


export const HamburgerMenuOverlay = styled.div`
    position: fixed;       
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background-color: rgba(0,0,0,0.5); 
    z-index: 3010;  

    @media (min-width: 1024px) {
        display: none;
    }  
`

export const AreaGnb = styled.div`
    position: fixed;
    top: 0;
    right: 0;
    z-index: 9999;
    max-width: 412px;
    width: 100%;
    height: 100vh;
    background-color: #ffffff;
    transform: ${({ isOpen }) => (isOpen ? "translateX(0)" : "translateX(100%)")};
    transition: transform 0.3s ease;

    /* 스크롤 가능하도록 */
    overflow-y: auto;
    -webkit-overflow-scrolling: touch; /* 모바일에서 부드러운 스크롤 */

    @media (min-width: 1024px) {
        display: none;
    }      
`;

export const ContHead = styled.div`
    max-width: 412px;
    width: 100%;
    height: 72px;
    padding: 22px 28px;
    box-sizing: border-box;
    display: flex;
    justify-content: end;
`

export const GnbContentMO = styled.nav`
    max-width: 412px;
    width: 100%;
    height: 840px;
    background-color: blue;
`

export const GroupRelation = styled.div`
    border-top: 1px solid #eee;
    margin: auto 35px 0;
    max-width: 342px;
    width: 100%;
    height: ${({ isHeight }) => (isHeight ? "327px" : "144px")};
    
`

export const ListRelation = styled.div`
    max-width: 342px;
    width: 100%;
    height: ${({ isHeight }) => (isHeight ? "327px" : "144px")};
    padding: 36px 0;
    font-size: 16px;
    line-height: 1.6;
    box-sizing: border-box;
`

export const ListRelationItem = styled.div`
    max-width: 342px;
    width: 100%;
    height: 25px;
    position: relative;
    margin-bottom: 20px;
`

export const ListRelationLink = styled(Link)`
    max-width: 342px;
    width: 100%;
    height: 25px;
    position: relative;
    color: #000;
    text-decoration: none;
    display: flex;
    justify-content: space-between;
    align-items: center;   
`

export const ListSub = styled.div`
    max-width: 342px;
    width: 100%;
    height: 168px;
    margin-top: 16px;
    padding: 32px;
    background: #F7F7F7;
    border-radius: 16px;
    font-size: 16px;
    line-height: 1.5;
    letter-spacing: -.25px;
    box-sizing: border-box;
`

export const ListSubDiv = styled.div`
    max-width: 278px;
    width: 100%;
    height: 24px;
`

export const ListSubDivTwo = styled.div`
    max-width: 278px;
    width: 100%;
    height: 24px;
    margin-top: 16px;
`

export const ListSubDivThree = styled.div`
    max-width: 278px;
    width: 100%;
    height: 24px;
    margin-top: 16px;
`

export const LinkSubitem = styled.a`
    color: #000;
    text-decoration: none;

`



export const IcoOutlink = styled.svg`
    position: absolute;
    right: 0;
    width: 14px;
    height: 14px;
`

export const IcoArrow = styled.svg`
    position: absolute;
    right: 0;
    width: 14px;
    height: 14px;
`


export const WrapUtil = styled.div`
    max-width: 137px;
    width: 100%;
    height: 28px;
    display: flex;
    justify-content: space-between;
    align-items: center;
`


export const IcoModeDarkBtnHamburger = styled.svg`
    max-width: 28px;
    width: 100%;
    height: 28px;
    overflow: visible; 
`

export const IconCloseBtnHamburger = styled.svg`
    max-width: 28px;
    width: 100%;
    height: 28px;
`

export const IcoLanguageBtnHamburger = styled.svg`
    max-width: 28px;
    width: 100%;
    height: 28px;
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


export const HeaderWrapper = styled.header`
    max-width:1440px;
    width:100%;
    height:91px;
    z-index: 3000;
    position: fixed;
    top: 0;
    left: 0;
    right: 0;
    border: 0;
    background-color: ${({ theme }) => (theme === "light" ? "#fff" : "#000")};
    color: ${({ theme }) => (theme === "light" ? "#000" : "#fff")};
    border-bottom: ${({ isScrolled, theme }) => isScrolled ?
        theme === "light" ? "1px solid #EAEAEA" : "1px solid #262626" : "none"};

     @media (max-width: 1436px) {
        height: 84px;
    }
        
    @media (max-width: 1023px) {
        height: 72px;
    }
`;

export const InnerHeader = styled.div`
    position: relative;
    max-width:1316px;
    width:100%;
    height:91px;
    margin: 0 auto;
    display: flex;
    justify-content: space-between;
    align-items: center;

    @media (max-width: 1436px) {
        max-width: 952px;
        width: 100%;
        height: 84px;
    } 
    
    @media (max-width: 1023px) {
        max-width: 712px;
        width: 100%;
        height: 72px;
    } 
`;

export const KakaoMainLogo = styled(Link)`
    max-width: 74px;
    width:100%;
    height: 50px;
    display: flex;
    justify-content: center;
    align-items: center;
`

export const KakaoMainLogoImg = styled(KakaoLogoIcon)`
    max-width: 74px;
    width: 100%;
    height: 50px;
    cursor: pointer;

`

export const Navigation = styled.nav`
    max-width: 626px;
    width: 100%;
    height: 37px;
    display: flex;
    justify-content: center;
    align-items: center;

    @media (max-width: 1436px) {
        max-width: 436px;
        width: 100%;
        height: 29px;
    }
        
    @media (max-width: 1023px) {
        display: none;
    }
`;

export const NavigationList = styled.ul`
    max-width: 626px;
    width: 100%;
    height: 37px;
    margin: 0 auto;
    list-style: none;
    display: flex;
    justify-content: space-between;
    align-items: center;

    @media (max-width: 1436px) {
        max-width: 436px;
        width: 100%;
        height: 29px;
    }  
`;

export const NavItemMenu = styled(Link)`
    margin: 0;
    font-size: 17px;
    font-weight: 500;
    cursor: pointer;
    padding: 8px 12px; 
    text-decoration: none;
    color: ${({ theme }) => (theme === "light" ? "#000" : "#fff")};
    background-color: ${({ isActive, theme }) => isActive ? (theme === "light" ? "#000" : "#fff") : "transparent"};
    color: ${({ isActive, theme }) => isActive ? (theme === "light" ? "#fff" : "#000") : "inherit"};
    border-radius: ${({ isActive }) => (isActive ? "54px" : "0")};

    ${({ isActive, theme }) =>
        !isActive &&
        `&:hover {
            background-color: ${theme === "light" ? "#f5f5f5" : "#333"};
            border-radius: 54px;
        }
    `}

    @media (max-width: 1436px) {
        padding: 4px 12px 5px;
        font-size: 14px;
        line-height: 20px;
        letter-spacing: -.2px;
    }  
`;

export const InvestmentLinkDiv = styled(Link)`
    margin: 0;
    cursor: pointer;
    padding: 8px 2px;
    max-width: 90px;
    width: 100%;
    display: flex;
    justify-content: center;
    gap: 3px;
    align-items: center;
    text-decoration: none;
    color: ${({ theme }) => (theme === "light" ? "#000" : "#fff")};

    &:hover {
        background-color: ${({ theme }) => theme === "light" ? "#f5f5f5" : "#333"}; 
        border-radius: 54px; 
    }
`

export const NavInvestmentItem = styled.li`
    margin: 0;
    font-weight: 400;
    cursor: pointer; 
    color: ${({ theme }) => (theme === "light" ? "#000" : "#fff")};
`;

export const InvestmentArrowLink = styled(IconArrowLink)`
    max-width: 8px;
    width: 100%;
    height: 8px;
`


export const AreaUtil = styled.div`
    max-width: 134px;
    width: 100%;
    height: 36px;
    display: flex;
    justify-content: space-between;
    align-items: center;

    @media (max-width: 1023px) {
        display: none;
    }  
`


export const TranslationBtn = styled.svg`
    max-width: 22px;
    width: 100%;
    height: 22px; 
    cursor: pointer;
    padding: 8px 10px; 
    background: url(${props => props.bg});
    filter: ${({ mode }) => (mode === "light" ? "brightness(1) invert(0)" : "brightness(4) invert(1)")};
  
    &:hover {
      background-color: ${({ mode }) => mode === "light" ? "#f5f5f5" : "#333"}; 
      border-radius: 54px; 
    }
`;


export const IconMoonItem = styled(IconMoon)`
    max-width: 22px;
    width: 100%;
    height: 22px; 
    cursor: pointer;
    padding: 8px 12px; 

    &:hover {
        background-color: ${({ theme }) => theme === "light" ? "#f5f5f5" : "#333"}; 
        border-radius: 54px; 
    }
`

export const IconSunItem = styled(IconSun)`
    max-width: 22px;
    width: 100%;
    height: 22px; 
    cursor: pointer;
    padding: 8px 12px; 

    &:hover {
        background-color: ${({ theme }) => theme === "light" ? "#f5f5f5" : "#333"}; 
        border-radius: 54px; 
    }
`


export const IconMagnifierItem = styled(IconMagnifier)`
    max-width: 22px;
    width: 100%;
    height: 22px; 
    cursor: pointer;
    padding: 8px 12px; 

    &:hover {
        background-color: ${({ theme }) => theme === "light" ? "#f5f5f5" : "#333"}; 
        border-radius: 54px; 
    }
`

export const ClickSearchOpenIcon = styled.svg`
    max-width: 28px;
    width: 100%;
    height: 28px; 
    cursor: pointer;
    margin-left: auto;

    @media (min-width: 1024px) {
        display: none;
    }  
`

export const BtnHamburgerIcon = styled.svg`
    max-width: 28px;
    width: 100%;
    height: 28px; 
    cursor: pointer;
    margin-left: 22px;

    @media (min-width: 1024px) {
        display: none;
    }  
`
