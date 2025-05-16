import styled from "styled-components";
import {ReactComponent as IconEarth} from "./img/area/area-earth-icon.svg";
import {ReactComponent as IconMoon} from "./img/area/area-moon-icon.svg";
import {ReactComponent as IconMagnifier} from "./img/area/area-magnifier-icon.svg";
import {ReactComponent as KakaoLogoIcon} from "./img/logo/kakao_logo_icon.svg";
import {ReactComponent as IconArrowLink} from "./img/nav/arrow_icon-icons.svg";

const HeaderWrapper = styled.header`
    max-width:1440px;
    width:100%;
    height:91px;
    z-index: 999px;
`

const InnerHeader = styled.div`
    max-width:1316px;
    width:100%;
    height:91px;
    margin: 0 auto;
    display: flex;
    justify-content: space-between;
    align-items: center;
`;

const KakaoMainLogo = styled.h1`
    max-width: 74px;
    width:100%;
    height: 50px;
    display: flex;
    justify-content: center;
    align-items: center;
` 

const KakaoMainLogoImg = styled(KakaoLogoIcon)`
    max-width: 74px;
    width: 100%;
    height: 50px;
    cursor: pointer;
`

const Navigation = styled.nav`
    max-width: 666px;
    width: 100%;
    height: 37px;
    display: flex;
    justify-content: center;
    align-items: center;
`;

const NavigationList = styled.ul`
    max-width: 626px;
    width: 100%;
    height: 37px;
    margin: 0 auto;
    list-style: none;
    display: flex;
    justify-content: space-between;
    align-items: center;
`;

const NavItemMenu = styled.li`
    margin: 0;
    font-weight: 400;
    cursor: pointer;
    padding: 8px 12px; 

    &:hover {
        background-color: #f5f5f5;
        border-radius: 54px; 
    }
`;

const InvestmentLinkDiv = styled.div`
    margin: 0;
    cursor: pointer;
    padding: 8px 2px;
    max-width: 90px;
    width: 100%;
    display: flex;
    justify-content: center;
    gap: 3px;
    align-items: center;

    &:hover {
        background-color: #f5f5f5;
        border-radius: 54px; 
    }
`

const NavInvestmentItem = styled.li`
    margin: 0;
    font-weight: 400;
    cursor: pointer; 
`;

const InvestmentArrowLink = styled(IconArrowLink)`
    max-width: 8px;
    width: 100%;
    height: 8px;
`


const AreaUtil = styled.div`
    max-width: 134px;
    width: 100%;
    height: 36px;
    display: flex;
    justify-content: space-between;
    align-items: center;
`

const IconEarthItem = styled(IconEarth)`
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

const IconMoonItem = styled(IconMoon)`
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

const IconMagnifierItem = styled(IconMagnifier)`
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



function Header () {
    return (  
        <HeaderWrapper>
            <InnerHeader>
                <KakaoMainLogo>
                    <KakaoMainLogoImg />
                </KakaoMainLogo>
                <Navigation>
                    <NavigationList>
                        <NavItemMenu>소개</NavItemMenu>
                        <NavItemMenu>기술과 서비스</NavItemMenu>
                        <NavItemMenu>약속과 책임</NavItemMenu>
                        <NavItemMenu>소식</NavItemMenu>
                        <InvestmentLinkDiv>
                            <NavInvestmentItem>투자정보</NavInvestmentItem>
                            <InvestmentArrowLink />
                        </InvestmentLinkDiv>
                    </NavigationList>
                </Navigation>

                <AreaUtil>
                    <IconMagnifierItem />
                    <IconEarthItem />
                    <IconMoonItem />
                </AreaUtil>
            </InnerHeader>
        </HeaderWrapper>
    ) 
}

export default Header;