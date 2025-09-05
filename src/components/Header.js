import React, { useState, useEffect} from 'react'; 
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
    TranslationButton,
    IconMoonItem,
    IconSunItem,
    IconMagnifierItem,
} from '../styles/Header.styles';
import { useTheme } from './context/ThemeContext';
import { lightTheme, darkTheme } from '../styles/context/theme';
import { useTranslation } from "react-i18next";

function Header () {
    const { theme, toggleTheme} = useTheme() 
    const [isScrolled, setIsScrolled] = useState(false);
    const { t, i18n } = useTranslation();
    const [lang, setLang] = useState(i18n.language || "en"); 
    
    const toggleLanguage = () => {
        const newLang = i18n.language === "ko" ? "en" : "ko";
        i18n.changeLanguage(newLang);

        setLang(newLang);
    };
    
    const iconUrl = lang === "en"
        ? "https://t1.kakaocdn.net/kakaocorp/Ir/images/btn_ko.svg"
        : "https://t1.kakaocdn.net/kakaocorp/Ir/images/btn_en.svg";

    useEffect(() => {
        const handleScroll = () => {
            setIsScrolled(window.scrollY > 0);
        };

        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll); // 클린업
    }, []);
 
    return (
        <HeaderWrapper 
            isScrolled={isScrolled}
            theme={theme === 'light' ? lightTheme : darkTheme}
            >
            <InnerHeader>
                <KakaoMainLogo>
                    <KakaoMainLogoImg fill={theme === "light" ? "#000" : "#fff"}/>
                </KakaoMainLogo>
                <Navigation>
                    <NavigationList>
                        <NavItemMenu theme={theme} to="/admin">{t("main.about")}</NavItemMenu>
                        <NavItemMenu theme={theme} to="/about/history">기술과 서비스</NavItemMenu>
                        <NavItemMenu theme={theme} to="/about/subsidiarycompany">약속과 책임</NavItemMenu>
                        <NavItemMenu theme={theme} to="/">소식</NavItemMenu>
                
                        <InvestmentLinkDiv to="/ir/main" target="_blank" theme={theme}>
                            <NavInvestmentItem theme={theme}>투자정보</NavInvestmentItem>
                            <InvestmentArrowLink fill={theme === "light" ? "#000" : "#fff"} />
                        </InvestmentLinkDiv>
                    </NavigationList>
                </Navigation>
                <AreaUtil>
                    <IconMagnifierItem 
                        theme={theme}
                        fill={theme === "light" ? "#000" : "#fff"}
                    />
                    <TranslationButton
                        onClick={toggleLanguage}
                        bg={iconUrl}
                        theme={theme}
                        fill={theme === "light" ? "#000" : "#fff"}
                    />
                    
                    {theme === "light" ? (
                        <IconMoonItem
                          onClick={toggleTheme}
                          theme={theme}
                          fill={theme === "light" ? "#000" : "#fff"}
                        />
                    ) : (
                      <IconSunItem
                        onClick={toggleTheme}
                        theme={theme}
                        fill={theme === "light" ? "#000" : "#fff"}
                      />
                    )}

                </AreaUtil>
            </InnerHeader>
        </HeaderWrapper>
        
    ) 
}

export default Header;