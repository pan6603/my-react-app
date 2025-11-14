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
    Overlay,
    HamburgerMenuOverlay,
    AreaGnb,
    ContHead,
    WrapUtil,
    IconCloseBtnHamburger,
    IcoModeDarkBtnHamburger,
    IcoLanguageBtnHamburger,
    DocGnb,
    GroupRelation,
    ListRelation,
    ListRelationItem,
    ListRelationLink,
    IcoOutlink,
    IcoArrow,
    ListSub,
    ListSubDiv,
    ListSubDivTwo,
    ListSubDivThree,
    LinkSubitem,
    ListGnb,
    ListGnbItem,
    ListGnbItemLink,
    ListGnbItemText,
    ListSubTypeThird,
    ListSubTypeThirdItem,
    WrapSubitem,
    ListThirdListCategory,
    ListCategoryItem,
    NewsListSubTypeThird,
    NewsListSubTypeThirdItem,
    NewsListThird,
    NewsListThirdItem
} from '../styles/Header.styles';
import BtnHamburger from './hamburger/BtnHamburger';
import ClickSearchOpen from './hamburger/ClickSearchOpen';
import { useTheme } from './context/ThemeContext';
import { useTranslation } from "react-i18next";
import AboutBoxMenu from './boxmenu/AboutBoxMenu';
import TechServiceBoxMenu from './boxmenu/TechServiceBoxMenu';
import PromiseAndResponsbilityBoxMenu from './boxmenu/PromiseAndResponsibilityBoxMenu';
import NewBoxMenu from './boxmenu/NewsBoxMenu';


function Header ({openSearch}) {
    const { theme, toggleTheme} = useTheme(); 
    const [isScrolled, setIsScrolled] = useState(false);
    const { t, i18n } = useTranslation();
    const [lang, setLang] = useState(i18n.language || "en"); 
    const [activeMenu, setActiveMenu] = useState(null);
    const [isOpen, setIsOpen] = useState(false);
    const [isHamburgerMenuOpen, setIsHamburgerMenuOpen] = useState(false);
    const [isCustomerServiceOpen, setIsCustomerServiceOpen] = useState(false);

    // 햄버거 메뉴 > 메뉴 클릭시 
    const [isAboutOpen, setIsAboutOpen] = useState(false);
    const [isTechOpen, setIsTechOpen] = useState(false);
    const [isPromiseOpen, setIsPromiseOpen] = useState(false);
    const [isNewsOpen, setIsNewsOpen] = useState(false);


    const btnHamburger = () => {
        setIsHamburgerMenuOpen(true);
    }

    const closeBtnHamburger = () => {
        setIsHamburgerMenuOpen(false);
    } 

    const closeBoxMenu = () => {
        setIsOpen(false); 
        setActiveMenu(null);
    }

    const openBoxMenu = (menu) => {
        if (activeMenu === menu) {
            setIsOpen(false);
            setActiveMenu(null);

        } else {
            setIsOpen(true);
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
    
    // 햄버거 메뉴 클릭시 스크롤 막기 
    useEffect(() => {
        if (isHamburgerMenuOpen) {
            document.body.style.overflow = "hidden";
        } else {
            document.body.style.overflow = "auto";
        }
    
        return () => {
            document.body.style.overflow = "auto";
        };
    }, [isHamburgerMenuOpen]);
  

    return (
        <>
            <HeaderWrapper isScrolled={isScrolled} theme={theme}>
                <InnerHeader>
                    <KakaoMainLogo to="/">
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

                            <NavItemMenu 
                                theme={theme}
                                onClick={() => openBoxMenu("news")}
                                isActive={activeMenu === "news"}
                                >
                                {t("home.header.news")}
                            </NavItemMenu>
                
                            <InvestmentLinkDiv to="/ir/main" target="_blank" theme={theme}>
                                <NavInvestmentItem theme={theme}>{t("home.header.ir")}</NavInvestmentItem>
                                <InvestmentArrowLink fill={theme === "light" ? "#000" : "#fff"} />
                            </InvestmentLinkDiv>
                        </NavigationList>
                    </Navigation>
                    <ClickSearchOpen />
                    <BtnHamburger onClick={() => btnHamburger()}/>

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

            {/* 햄버거 메뉴 열때 */}
            {isHamburgerMenuOpen && 
                <>
                    <HamburgerMenuOverlay />
                    <AreaGnb isOpen={isHamburgerMenuOpen}>
                        <ContHead>
                            <WrapUtil>
                                <IcoModeDarkBtnHamburger
                                    xmlns="http://www.w3.org/2000/svg"
                                    viewBox="0 0 24 24"
                                >
                                    <g fill="none" fillRule="evenodd" stroke="#000000" strokeLinejoin="round" strokeWidth="1.5">
                                        <path d="M16.086 13.417c-5.013 0-9.076-4.04-9.076-9.023 0-1.596.42-3.093 1.152-4.394C3.58.456 0 4.3 0 8.977 0 13.961 4.064 18 9.076 18c3.407 0 6.372-1.868 7.924-4.628-.3.03-.605.045-.914.045z" />
                                    </g>
                                </IcoModeDarkBtnHamburger>

                                <IcoLanguageBtnHamburger
                                    xmlns="http://www.w3.org/2000/svg"
                                    viewBox="0 0 24 24"
                                    width="28"
                                    height="28"
                                    className="ico_language"
                                >
                                    <g fill="none" fillRule="evenodd">
                                        <g stroke="#000" strokeWidth="1.35" strokeLinejoin="round">
                                        {/* 외곽 원 */}
                                        <path d="M19.353 9.914c0 5.213-4.226 9.438-9.438 9.438-5.213 0-9.438-4.225-9.438-9.438C.477 4.702 4.702.477 9.915.477c5.212 0 9.438 4.225 9.438 9.437z" />

                                        {/* 안쪽 원 */}
                                        <path d="M13.662 9.914c0 5.213-3.748 9.438-3.748 9.438s-3.747-4.225-3.747-9.438c0-5.212 3.747-9.437 3.747-9.437s3.748 4.225 3.748 9.437z" />

                                        {/* 가로 선 */}
                                        <path d="M.876 7.018L18.952 7.018M.876 12.811L18.952 12.811" />
                                        </g>
                                    </g>
                                </IcoLanguageBtnHamburger>

                                <IconCloseBtnHamburger
                                    onClick={closeBtnHamburger}
                                    xmlns="http://www.w3.org/2000/svg"
                                    viewBox="0 0 24 24"
                                >
                                    <g fill="none" fillRule="evenodd" strokeLinecap="square">
                                        <g stroke="#000" strokeWidth="1.6">
                                        {/* 대각선 1 */}
                                        <path d="M0 0.5L16.5 17.5" />
                                        {/* 대각선 2 (반대 방향) */}
                                        <path d="M0 0.5L16.5 17.5" transform="scale(-1,1) translate(-17,0)" />
                                        </g>
                                    </g>
                                </IconCloseBtnHamburger>
                            </WrapUtil>
                        </ContHead>
                        <DocGnb>
                            <ListGnb>
                                <ListGnbItem>
                                    <ListGnbItemLink onClick={() => setIsAboutOpen(prev => !prev)}>
                                        <ListGnbItemText>소개</ListGnbItemText>
                                        {isAboutOpen ? (
                                            <IcoArrow viewBox="0 0 9 9" fill="none">
                                                <path
                                                    d="M1 6L4.5 3 8 6"
                                                    stroke="black"
                                                    strokeWidth="1.0"
                                                    fill="none"
                                                    strokeLinecap="round"
                                                    strokeLinejoin="round"
                                                />
                                                </IcoArrow>
                                        ) : (
                                            <IcoArrow viewBox="0 0 9 9" fill="none">
                                                <path
                                                    d="M8 3L4.5 6 1 3"
                                                    stroke="gray"
                                                    strokeWidth="1.0"
                                                    fill="none"
                                                    strokeLinecap="round"
                                                    strokeLinejoin="round"
                                                />
                                            </IcoArrow>
                                        )}
                                    </ListGnbItemLink>
                                    {isAboutOpen && 
                                        <ListSub>
                                            <ListSubDiv>
                                                <LinkSubitem>카카오 문화</LinkSubitem>
                                            </ListSubDiv>
                                            <ListSubDivTwo>
                                                <LinkSubitem>카카오 그룹</LinkSubitem>
                                            </ListSubDivTwo>
                                            <ListSubDivThree>
                                                <LinkSubitem>연혁</LinkSubitem>
                                            </ListSubDivThree>
                                         </ListSub>  
                                    }
                                </ListGnbItem>

                                <ListGnbItem>
                                    <ListGnbItemLink onClick={() => setIsTechOpen(prev => !prev)}>
                                        <ListGnbItemText>기술과 서비스</ListGnbItemText>
                                        {isTechOpen ? (
                                            <IcoArrow viewBox="0 0 9 9" fill="none">
                                                <path
                                                    d="M1 6L4.5 3 8 6"
                                                    stroke="black"
                                                    strokeWidth="1.0"
                                                    fill="none"
                                                    strokeLinecap="round"
                                                    strokeLinejoin="round"
                                                />
                                                </IcoArrow>
                                        ) : (
                                            <IcoArrow viewBox="0 0 9 9" fill="none">
                                                <path
                                                    d="M8 3L4.5 6 1 3"
                                                    stroke="gray"
                                                    strokeWidth="1.0"
                                                    fill="none"
                                                    strokeLinecap="round"
                                                    strokeLinejoin="round"
                                                />
                                            </IcoArrow>
                                        )}
                                    </ListGnbItemLink>
                                    {isTechOpen && 
                                        <ListSubTypeThird>
                                            <ListSubTypeThirdItem>
                                                <WrapSubitem>기술</WrapSubitem>
                                                <ListThirdListCategory>
                                                    <ListCategoryItem>카카오AI</ListCategoryItem>
                                                    <ListCategoryItem>카카오테크</ListCategoryItem>
                                                    <ListCategoryItem>기술 플랫폼</ListCategoryItem>
                                                    <ListCategoryItem>기술 서비스</ListCategoryItem>
                                                    <ListCategoryItem>기술 콘텐츠</ListCategoryItem>
                                                    <ListCategoryItem>기술 이벤트</ListCategoryItem>
                                                    <ListCategoryItem>if(Kakao)</ListCategoryItem>
                                                </ListThirdListCategory>
                                            </ListSubTypeThirdItem>

                                            <ListSubTypeThirdItem>
                                                <WrapSubitem>서비스</WrapSubitem>
                                                <ListThirdListCategory>
                                                    <ListCategoryItem>커뮤니케이션</ListCategoryItem>
                                                    <ListCategoryItem>일상 편의</ListCategoryItem>
                                                    <ListCategoryItem>비즈니스</ListCategoryItem>
                                                    <ListCategoryItem>쇼핑</ListCategoryItem>
                                                    <ListCategoryItem>엔터테인먼트</ListCategoryItem>
                                                    <ListCategoryItem>소셜 임팩트</ListCategoryItem>
                                                </ListThirdListCategory>
                                            </ListSubTypeThirdItem>
                                        </ListSubTypeThird>  
                                    }
                                </ListGnbItem>

                                <ListGnbItem>
                                    <ListGnbItemLink onClick={() => setIsPromiseOpen(prev => !prev)}>
                                        <ListGnbItemText>약속과 책임</ListGnbItemText>
                                        {isPromiseOpen ? (
                                            <IcoArrow viewBox="0 0 9 9" fill="none">
                                                <path
                                                    d="M1 6L4.5 3 8 6"
                                                    stroke="black"
                                                    strokeWidth="1.0"
                                                    fill="none"
                                                    strokeLinecap="round"
                                                    strokeLinejoin="round"
                                                />
                                                </IcoArrow>
                                        ) : (
                                            <IcoArrow viewBox="0 0 9 9" fill="none">
                                                <path
                                                    d="M8 3L4.5 6 1 3"
                                                    stroke="gray"
                                                    strokeWidth="1.0"
                                                    fill="none"
                                                    strokeLinecap="round"
                                                    strokeLinejoin="round"
                                                />
                                            </IcoArrow>
                                        )}
                                    </ListGnbItemLink>
                                    {isPromiseOpen && 
                                        <ListSub>
                                            <ListSubDiv>
                                                <LinkSubitem>ESG 보고서</LinkSubitem>
                                            </ListSubDiv>
                                            <ListSubDivTwo>
                                                <LinkSubitem>프로젝트 단골</LinkSubitem>
                                            </ListSubDivTwo>
                                            <ListSubDivThree>
                                                <LinkSubitem>액티브 그린</LinkSubitem>
                                            </ListSubDivThree>
                                            <ListSubDivThree>
                                                <LinkSubitem>디지털 책임</LinkSubitem>
                                            </ListSubDivThree>
                                            <ListSubDivThree>
                                                <LinkSubitem>사회경제적 가치</LinkSubitem>
                                            </ListSubDivThree>
                                         </ListSub>  
                                    }
                                </ListGnbItem>

                                <ListGnbItem>
                                    <ListGnbItemLink onClick={() => setIsNewsOpen(prev => !prev)}>
                                        <ListGnbItemText>소식</ListGnbItemText>
                                        {isNewsOpen ? (
                                            <IcoArrow viewBox="0 0 9 9" fill="none">
                                                <path
                                                    d="M1 6L4.5 3 8 6"
                                                    stroke="black"
                                                    strokeWidth="1.0"
                                                    fill="none"
                                                    strokeLinecap="round"
                                                    strokeLinejoin="round"
                                                />
                                                </IcoArrow>
                                        ) : (
                                            <IcoArrow viewBox="0 0 9 9" fill="none">
                                                <path
                                                    d="M8 3L4.5 6 1 3"
                                                    stroke="gray"
                                                    strokeWidth="1.0"
                                                    fill="none"
                                                    strokeLinecap="round"
                                                    strokeLinejoin="round"
                                                />
                                            </IcoArrow>
                                        )}
                                    </ListGnbItemLink>
                                    {isNewsOpen && 
                                        <NewsListSubTypeThird>
                                            <NewsListSubTypeThirdItem>
                                                <WrapSubitem>뉴스</WrapSubitem>
                                                <NewsListThird>
                                                    <NewsListThirdItem>보도자료</NewsListThirdItem>
                                                    <NewsListThirdItem>미디어자료</NewsListThirdItem>
                                                </NewsListThird>
                                            </NewsListSubTypeThirdItem>

                                            <NewsListSubTypeThirdItem>
                                                <WrapSubitem>카카오나우</WrapSubitem>
                                                <NewsListThird>
                                                    <NewsListThirdItem>카카오이야기</NewsListThirdItem>
                                                    <NewsListThirdItem>그룹사이야기</NewsListThirdItem>
                                                </NewsListThird>
                                            </NewsListSubTypeThirdItem>
                                        </NewsListSubTypeThird>
                                    }
                                </ListGnbItem>

                                <ListGnbItem>
                                    <ListGnbItemLink>
                                        <ListGnbItemText>투자정보</ListGnbItemText>
                                        <IcoOutlink viewBox="0 0 9 9" fill="none">
                                            <path
                                                d="M1.8 1.1L7.9 1.1 7.9 7.2M7.9 1.1L1.4 7.6"
                                                stroke="gray"
                                                strokeWidth="1.0"
                                                strokeLinecap="round"
                                                strokeLinejoin="round"
                                            />
                                        </IcoOutlink>
                                    </ListGnbItemLink>
                                </ListGnbItem>
                            </ListGnb>
                        </DocGnb>
                        <GroupRelation>
                            <ListRelation isHeight={isCustomerServiceOpen}>
                                <ListRelationItem>
                                    <ListRelationLink>
                                        인재영입
                                        <IcoOutlink viewBox="0 0 9 9" fill="none">
                                            <path
                                                d="M1.8 1.1L7.9 1.1 7.9 7.2M7.9 1.1L1.4 7.6"
                                                stroke="gray"
                                                strokeWidth="1.0"
                                                strokeLinecap="round"
                                                strokeLinejoin="round"
                                            />
                                        </IcoOutlink>

                                    </ListRelationLink>
                                </ListRelationItem>

                                <ListRelationItem onClick={() => setIsCustomerServiceOpen(prev => !prev)}>
                                    <ListRelationLink>
                                        고객센터
                                        <IcoArrow viewBox="0 0 9 9" fill="none">
                                            <path
                                                d="M8 3L4.5 6 1 3"
                                                stroke="gray"
                                                strokeWidth="1.0"
                                                fill="none"
                                                strokeLinecap="round"
                                                strokeLinejoin="round"
                                            />
                                        </IcoArrow>

                                    </ListRelationLink>

                                    {isCustomerServiceOpen && 
                                        <ListSub>
                                            <ListSubDiv>
                                                <LinkSubitem>카카오 고객센터</LinkSubitem>
                                            </ListSubDiv>
                                            <ListSubDivTwo>
                                                <LinkSubitem>Daum 고객센터</LinkSubitem>
                                            </ListSubDivTwo>
                                            <ListSubDivThree>
                                                <LinkSubitem>커머스 고객센터</LinkSubitem>
                                            </ListSubDivThree>
                                        </ListSub>
                                    }
                                </ListRelationItem>
                                
                            </ListRelation>
                        </GroupRelation>
                    </AreaGnb>
            </>
            }

            {/* Overlay */}
            {isOpen && <Overlay onClick={closeBoxMenu} />}

            {/* About 메뉴 클릭 > 팝업 호출 */}
            {isOpen && activeMenu === "about" && <AboutBoxMenu />}   

            {/* Tech_Service 메뉴 클릭 > 팝업 호출  */}
            {isOpen && activeMenu === "tech_service" &&  <TechServiceBoxMenu />}
                      
            {/*  Promise And Responsibility 메뉴 클릭 > 팝업 호출 */}
            {isOpen && activeMenu === "responsibility" && <PromiseAndResponsbilityBoxMenu /> }

            {/* News 메뉴 클릭 > 팝업 호출 */}
            {isOpen && activeMenu === "news" && <NewBoxMenu /> }
            

        </>
   
        
    ) 
}

export default Header;