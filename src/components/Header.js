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
    TranslationBtn,
    IconMoonItem,
    IconSunItem,
    IconMagnifierItem,
    Overlay
} from '../styles/Header.styles';
import { useTheme } from './context/ThemeContext';
import { useTranslation } from "react-i18next";
import AboutBoxMenu from './boxmenu/AboutBoxMenu';
import TechServiceBoxMenu from './boxmenu/TechServiceBoxMenu';
import PromiseAndResponsbilityBoxMenu from './boxmenu/PromiseAndResponsibilityBoxMenu';


function Header ({openSearch}) {
    const { theme, toggleTheme} = useTheme(); 
    const [isScrolled, setIsScrolled] = useState(false);
    const { t, i18n } = useTranslation();
    const [lang, setLang] = useState(i18n.language || "en"); 
    const [activeMenu, setActiveMenu] = useState(null);
    const [isBoxMenuOpen, setIsBoxMenuOpen] = useState(false);  // Nav 메뉴 클릭 > boxMenu 팝업 열기 
   
    const closeBoxMenu = () => {
        setIsBoxMenuOpen(false); 
        setActiveMenu(null);
    }

    const openBoxMenu = (menu) => {
        if (activeMenu === menu) {
            setIsBoxMenuOpen(false);
            setActiveMenu(null);

        } else {
            setIsBoxMenuOpen(true);
            setActiveMenu(menu);
        }        
    }

    const toggleLanguage = () => {
        const newLang = i18n.language === "ko" ? "en" : "ko";
        i18n.changeLanguage(newLang);

        setLang(newLang);
    };

    const iconUrl = lang === "en" 
        ? "https://t1.kakaocdn.net/kakaocorp/Ir/images/btn_ko.svg"
        : "https://t1.kakaocdn.net/kakaocorp/Ir/images/btn_en.svg"  


    useEffect(() => {
        const handleScroll = () => {
            setIsScrolled(window.scrollY > 0);
        };

        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll); // 클린업
    }, []);


    return (
        <>
            <HeaderWrapper isScrolled={isScrolled} theme={theme}>
                <InnerHeader>
                    <KakaoMainLogo>
                        <KakaoMainLogoImg fill={theme === "light" ? "#000" : "#fff"}/>
                    </KakaoMainLogo>
                    <Navigation>
                        <NavigationList>
                        
                            <NavItemMenu
                                theme={theme}
                                onClick={() => openBoxMenu("about")}
                                isActive={activeMenu === "about"} 
                            >
                                {t("home.header.about")}
                            </NavItemMenu>

                            <NavItemMenu 
                                theme={theme}
                                onClick={() => openBoxMenu("tech_service")}
                                isActive={activeMenu === "tech_service"} 
                                >
                                {t("home.header.tech_service")}
                            </NavItemMenu>

                            <NavItemMenu 
                                theme={theme}
                                onClick={() => openBoxMenu("responsibility")}
                                isActive={activeMenu === "responsibility"} 
                                >
                                {t("home.header.responsibility")}
                            </NavItemMenu>

                            <NavItemMenu theme={theme} to="/">{t("home.header.news")}</NavItemMenu>
                
                            <InvestmentLinkDiv to="/ir/main" target="_blank" theme={theme}>
                                <NavInvestmentItem theme={theme}>{t("home.header.ir")}</NavInvestmentItem>
                                <InvestmentArrowLink fill={theme === "light" ? "#000" : "#fff"} />
                            </InvestmentLinkDiv>
                        </NavigationList>
                    </Navigation>
                    <AreaUtil>
                        <IconMagnifierItem 
                            theme={theme}
                            fill={theme === "light" ? "#000" : "#fff"}
                            onClick={openSearch}
                        />
        
                        <TranslationBtn
                            onClick={toggleLanguage}
                            mode={theme}
                            bg={iconUrl}
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

            {/* Overlay */}
            {isBoxMenuOpen && <Overlay onClick={closeBoxMenu} />}

            {/* About 메뉴 클릭 > 팝업 호출 */}
            {isBoxMenuOpen && activeMenu === "about" && <AboutBoxMenu />}   

            {/* Tech_Service 메뉴 클릭 > 팝업 호출  */}
            {isBoxMenuOpen && activeMenu === "tech_service" &&  <TechServiceBoxMenu />}
                      
            {/*  Promise And Responsibility 메뉴 클릭 > 팝업 호출 */}
            {isBoxMenuOpen && activeMenu === "responsibility" && <PromiseAndResponsbilityBoxMenu /> }

        </>
   
        
    ) 
}

export default Header;