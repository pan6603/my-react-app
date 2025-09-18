
import {ReactComponent as IconMoon} from "../img/area/area-moon-icon.svg";
import {ReactComponent as IconSun} from "../img/area/area-sun-icon.svg";
import {ReactComponent as IconMagnifier} from "../img/area/area-magnifier-icon.svg";
import {ReactComponent as KakaoLogoIcon} from "../img/logo/kakao_logo_icon.svg";
import {ReactComponent as IconArrowLink} from "../img/nav/arrow_icon-icons.svg";
import { Link } from "react-router-dom";
import styled from "styled-components";


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
        theme === "light" ? "1px solid #EAEAEA" : "1px solid #262626": "none"};
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
`;

export const KakaoMainLogo = styled.h1`
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
    max-width: 666px;
    width: 100%;
    height: 37px;
    display: flex;
    justify-content: center;
    align-items: center;
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
`;

export const NavItemMenu = styled(Link)`
    margin: 0;
    font-weight: 400;
    cursor: pointer;
    padding: 8px 12px; 
    text-decoration: none;
    color: ${({ theme }) => (theme === "light" ? "#000" : "#fff")};
    background-color: ${({ isActive, theme }) =>
        isActive ? (theme === "light" ? "#000" : "#fff") : "transparent"};
    color: ${({ isActive, theme }) =>
        isActive ? (theme === "light" ? "#fff" : "#000") : "inherit"};
    border-radius: ${({ isActive }) => (isActive ? "54px" : "0")};

    ${({ isActive, theme }) =>
        !isActive &&
        `&:hover {
            background-color: ${theme === "light" ? "#f5f5f5" : "#333"};
            border-radius: 54px;
        }
    `}
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