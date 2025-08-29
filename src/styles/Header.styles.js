
import {ReactComponent as IconMoon} from "../img/area/area-moon-icon.svg";
import {ReactComponent as IconMagnifier} from "../img/area/area-magnifier-icon.svg";
import {ReactComponent as KakaoLogoIcon} from "../img/logo/kakao_logo_icon.svg";
import {ReactComponent as IconArrowLink} from "../img/nav/arrow_icon-icons.svg";
import { Link } from "react-router-dom";
import {ReactComponent as IconEarth} from "../img/area/area-earth-icon.svg";
import styled from "styled-components";



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

    border-bottom: ${props => (props.isScrolled ? '1px solid #EAEAEA' : 'none')};
`;

export const InnerHeader = styled.div`
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
    color: #000;

    &:hover {
        background-color: #f5f5f5;
        border-radius: 54px; 
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
    color: #000;

    &:hover {
        background-color: #f5f5f5;
        border-radius: 54px; 
    }
`

export const NavInvestmentItem = styled.li`
    margin: 0;
    font-weight: 400;
    cursor: pointer; 
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

export const IconEarthItem = styled(IconEarth)`
    max-width: 22px;
    width: 100%;
    height: 22px; 
    cursor: pointer;
    padding: 8px 12px; 

    &:hover {
        background-color: #f5f5f5;
        border-radius: 54px; 
    }
`

export const IconMoonItem = styled(IconMoon)`
    max-width: 22px;
    width: 100%;
    height: 22px; 
    cursor: pointer;
    padding: 8px 12px; 

    &:hover {
        background-color: #f5f5f5;
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
        background-color: #f5f5f5;
        border-radius: 54px; 
    }
`