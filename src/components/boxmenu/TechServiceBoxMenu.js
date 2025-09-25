import { 
    TechServiceBoxMenuContainer,
    TechServiceBoxMenuListSecond,
    TechServiceBoxMenuContMenu,
    TechServiceBoxMenuSlickSlider,
    TechServiceBoxMenuSlickList,
    TechServiceBoxMenuStyledSwiper,
    TechServiceBoxMenuSlickSlide,
    TechServiceBoxMenuLinkCont,
    TechServiceBoxMenuImgCont,
    TechServiceBoxMenuWrapCont,
    TechServiceBoxMenuIcoCategory,
    TechServiceBoxMenuTxtCategory,
    TechServiceWrapContDescription,
    TechServiceListFlex,
    TitSubmenu,
    ListThird,
    TechServiceLinkSubmenu 
} from "../../styles/boxmenu/BoxMenu.styles";
import { Pagination, Navigation, EffectFade } from 'swiper/modules'
import { useTheme } from "../context/ThemeContext"; 
import { useTranslation } from "react-i18next";

function TechServiceBoxMenu() {
    const { t } = useTranslation();
    const { theme } = useTheme()

    return (
        <>
            <TechServiceBoxMenuContainer theme={theme}>
                <TechServiceBoxMenuListSecond>
                    <TechServiceListFlex>
                        <TitSubmenu>{t("home.list_menu.tit_submenu.tech")}</TitSubmenu>
                        <ListThird>
                            <TechServiceLinkSubmenu theme={theme}>{t("home.list_menu.link_submenu.kakao_ai")}</TechServiceLinkSubmenu>
                            <TechServiceLinkSubmenu theme={theme}>{t("home.list_menu.link_submenu.kakao_tech")}</TechServiceLinkSubmenu>
                            <TechServiceLinkSubmenu theme={theme}>{t("home.list_menu.link_submenu.tech_service")}</TechServiceLinkSubmenu>
                            <TechServiceLinkSubmenu theme={theme}>{t("home.list_menu.link_submenu.tech_contents")}</TechServiceLinkSubmenu>
                            <TechServiceLinkSubmenu theme={theme}>{t("home.list_menu.link_submenu.tech_event")}</TechServiceLinkSubmenu>
                            <TechServiceLinkSubmenu theme={theme}>{t("home.list_menu.link_submenu.if_kakao")}</TechServiceLinkSubmenu>
                        </ListThird>
                    </TechServiceListFlex>
                    <TechServiceListFlex>
                        <TitSubmenu>{t("home.list_menu.tit_submenu.service")}</TitSubmenu>
                        <ListThird>
                            <TechServiceLinkSubmenu theme={theme}>{t("home.list_menu.link_submenu.communication")}</TechServiceLinkSubmenu>
                            <TechServiceLinkSubmenu theme={theme}>{t("home.list_menu.link_submenu.life")}</TechServiceLinkSubmenu>
                            <TechServiceLinkSubmenu theme={theme}>{t("home.list_menu.link_submenu.business")}</TechServiceLinkSubmenu>
                            <TechServiceLinkSubmenu theme={theme}>{t("home.list_menu.link_submenu.shopping")}</TechServiceLinkSubmenu>
                            <TechServiceLinkSubmenu theme={theme}>{t("home.list_menu.link_submenu.entertainment")}</TechServiceLinkSubmenu>
                            <TechServiceLinkSubmenu theme={theme}>{t("home.list_menu.link_submenu.social_impact")}</TechServiceLinkSubmenu>
                        </ListThird>
                    </TechServiceListFlex>
                </TechServiceBoxMenuListSecond>
                <TechServiceBoxMenuContMenu theme={theme}>
                    <TechServiceBoxMenuSlickSlider>
                        <TechServiceBoxMenuSlickList>
                            <TechServiceBoxMenuStyledSwiper
                                theme={theme}
                                modules={[Navigation, Pagination, EffectFade]}
                                spaceBetween={30}
                                slidesPerView={1}
                                loop={true} 
                                navigation
                                pagination={{ clickable: true }}
                                effect="fade"
                                fadeEffect={{ crossFade: true }}
                            >
                                <TechServiceBoxMenuSlickSlide>
                                    <TechServiceBoxMenuLinkCont>
                                        <TechServiceBoxMenuImgCont src="https://t1.kakaocdn.net/thumb/C317x178.fwebp.q100/?fname=https%3A%2F%2Ft1.kakaocdn.net%2Fkakaocorp%2Fkakaocorp%2Fadmin%2Ftech%2F2324bb0e019300001.png" />

                                        <TechServiceBoxMenuWrapCont theme={theme}>
                                            <TechServiceBoxMenuIcoCategory src="https://t1.kakaocdn.net/kakaocorp/kakaocorp/admin/category/ea259486018400001.png"/>
                                            <TechServiceBoxMenuTxtCategory theme={theme}>
                                                {t("home.list_menu.txt_category.if_kakao")}
                                            </TechServiceBoxMenuTxtCategory>
                                            <TechServiceWrapContDescription 
                                                theme={theme}
                                                style={{ whiteSpace: 'pre-line' }}
                                                >
                                                {t("home.list_menu.wrap_cont_description.if_kakao")}
                                            </TechServiceWrapContDescription>
                                        </TechServiceBoxMenuWrapCont>
                                    </TechServiceBoxMenuLinkCont>
                                </TechServiceBoxMenuSlickSlide>

                                <TechServiceBoxMenuSlickSlide>
                                    <TechServiceBoxMenuLinkCont>
                                        <TechServiceBoxMenuImgCont src="https://t1.kakaocdn.net/thumb/C317x178.fwebp.q100/?fname=https%3A%2F%2Ft1.kakaocdn.net%2Fkakaocorp%2Fkakaocorp%2Fadmin%2Ftech%2F29cf1dcd019300001.png"/>

                                        <TechServiceBoxMenuWrapCont theme={theme}>
                                            <TechServiceBoxMenuIcoCategory 
                                                src="https://t1.kakaocdn.net/kakaocorp/kakaocorp/admin/category/ea259486018400001.png"/>
                                            <TechServiceBoxMenuTxtCategory theme={theme}>
                                                {t("home.list_menu.txt_category.kakao_tech")}
                                            </TechServiceBoxMenuTxtCategory>
                                            <TechServiceWrapContDescription 
                                                theme={theme}
                                                style={{ whiteSpace: 'pre-line' }}
                                                >
                                                {t("home.list_menu.wrap_cont_description.kakao_tech")}
                                            </TechServiceWrapContDescription>
                                        </TechServiceBoxMenuWrapCont>
                                    </TechServiceBoxMenuLinkCont>
                                </TechServiceBoxMenuSlickSlide>

                                <TechServiceBoxMenuSlickSlide>
                                    <TechServiceBoxMenuLinkCont>
                                        <TechServiceBoxMenuImgCont 
                                            src="https://t1.kakaocdn.net/thumb/C317x178.fwebp.q100/?fname=https%3A%2F%2Ft1.kakaocdn.net%2Fkakaocorp%2Fkakaocorp%2Fadmin%2Fservice%2Fabcd3a11017900001.jpg"/>
                                        
                                        <TechServiceBoxMenuWrapCont theme={theme}>
                                            <TechServiceBoxMenuIcoCategory src="https://t1.kakaocdn.net/kakaocorp/kakaocorp/admin/65659472017800001.png"/>
                                            <TechServiceBoxMenuTxtCategory theme={theme}>
                                                {t("home.list_menu.txt_category.communication")}
                                            </TechServiceBoxMenuTxtCategory>

                                            <TechServiceWrapContDescription 
                                                theme={theme}
                                                style={{ whiteSpace: 'pre-line' }}
                                                >
                                                
                                                {t("home.list_menu.wrap_cont_description.communication")}
                                            </TechServiceWrapContDescription>
                                        </TechServiceBoxMenuWrapCont>
                                    </TechServiceBoxMenuLinkCont>
                                </TechServiceBoxMenuSlickSlide>

                                <TechServiceBoxMenuSlickSlide>
                                    <TechServiceBoxMenuLinkCont>
                                        <TechServiceBoxMenuImgCont 
                                            src="https://t1.kakaocdn.net/thumb/C317x178.fwebp.q100/?fname=https%3A%2F%2Ft1.kakaocdn.net%2Fkakaocorp%2Fkakaocorp%2Fadmin%2Fservice%2F88b8f3c9019500001.png"/>

                                        <TechServiceBoxMenuWrapCont theme={theme}>
                                            <TechServiceBoxMenuIcoCategory src="https://t1.kakaocdn.net/kakaocorp/kakaocorp/admin/65659472017800001.png"/>
                                            <TechServiceBoxMenuTxtCategory theme={theme}>
                                                {t("home.list_menu.txt_category.communication")}
                                            </TechServiceBoxMenuTxtCategory>

                                            <TechServiceWrapContDescription 
                                                theme={theme}
                                                style={{ whiteSpace: 'pre-line' }}
                                                >
                                                {t("home.list_menu.wrap_cont_description.kakao_talk_prospectus")}
                                            </TechServiceWrapContDescription>
                                        </TechServiceBoxMenuWrapCont>
                                    </TechServiceBoxMenuLinkCont>
                                </TechServiceBoxMenuSlickSlide>

                            </TechServiceBoxMenuStyledSwiper>
                        </TechServiceBoxMenuSlickList>
                    </TechServiceBoxMenuSlickSlider>
                </TechServiceBoxMenuContMenu>
            </TechServiceBoxMenuContainer>
        </>
    )
}

export default TechServiceBoxMenu;