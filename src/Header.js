import styled from "styled-components";
import {ReactComponent as IconEarth} from "./img/area/area-earth-icon.svg";
import {ReactComponent as IconMoon} from "./img/area/area-moon-icon.svg";
import {ReactComponent as IconMagnifier} from "./img/area/area-magnifier-icon.svg";
import {ReactComponent as KakaoLogoIcon} from "./img/logo/kakao_logo_icon.svg";

const HeaderWrapper = styled.header`
    max-width:1440px;
    width:100%;
    height:91px;
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
`;


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
`

const IconMoonItem = styled(IconMoon)`
    max-width: 22px;
    width: 100%;
    height: 22px; 
` 

const IconMagnifierItem = styled(IconMagnifier)`
    max-width: 22px;
    width: 100%;
    height: 22px; 
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
                        <NavItemMenu>투자정보</NavItemMenu>
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