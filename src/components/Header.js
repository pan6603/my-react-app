import React, { useState, useEffect } from 'react'; 
import { 
    HeaderWrapper, 
    InnerHeader,
    KakaoMainLogo,
    KakaoMainLogoImg,
    Navigation,
    NavigationList,
    NavItemMenu,
    InvestmentLinkDiv,
    NavInvestmentItem,
    InvestmentArrowLink,
    AreaUtil,
    IconEarthItem,
    IconMoonItem,
    IconMagnifierItem,
} from '../styles/Header.styles';





function Header () {
    const [isScrolled, setIsScrolled] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            setIsScrolled(window.scrollY > 0);
        };

        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll); // 클린업
    }, []);
 
    return (  
        <HeaderWrapper isScrolled={isScrolled}>
            <InnerHeader>
                <KakaoMainLogo>
                    <KakaoMainLogoImg />
                </KakaoMainLogo>
                <Navigation>
                    <NavigationList>
                        <NavItemMenu to="/admin">소개</NavItemMenu>
                        <NavItemMenu to="/about/history">기술과 서비스</NavItemMenu>
                        <NavItemMenu to="/about/subsidiarycompany">약속과 책임</NavItemMenu>
                        <NavItemMenu to="/">소식</NavItemMenu>
                
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