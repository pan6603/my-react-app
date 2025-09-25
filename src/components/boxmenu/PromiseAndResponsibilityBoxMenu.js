import { 
    PromiseAndResponsbilityBoxMenuContainer,
    PromiseAndResponsbilityListSecond,
    PromiseAndResponsbilityContMenu,
    PromiseAndResponsbilitySlickSlider,
    PromiseAndResponsbilitySlickList,
    PromiseAndResponsbilityStyledSwiper,
    PromiseAndResponsbilitySlickSlide,
    PromiseAndResponsbilityLinkCont,
    PromiseAndResponsbilityImgCont,
    PromiseAndResponsbilityWrapCont,
    PromiseAndResponsbilityIcoCategory,
    PromiseAndResponsbilityTxtCategory,
    PromiseAndResponsbilityWrapContDescription,
    PromiseAndResponsbilityListFlex,
    PromiseAndResponsbilityLinkSubmenu
} from "../../styles/boxmenu/BoxMenu.styles";
import { Pagination, Navigation, EffectFade } from 'swiper/modules'
import { useTheme } from "../context/ThemeContext";
import { useTranslation } from "react-i18next";

function PromiseAndResponsbilityBoxMenu() {
    const { t } = useTranslation();
    const { theme } = useTheme() 

    return (
        <>
            <PromiseAndResponsbilityBoxMenuContainer theme={theme}>
                <PromiseAndResponsbilityListSecond>
                    <PromiseAndResponsbilityListFlex>
                        <PromiseAndResponsbilityLinkSubmenu theme={theme}>{t("home.list_menu.link_submenu.esg_reports")}</PromiseAndResponsbilityLinkSubmenu>
                        <PromiseAndResponsbilityLinkSubmenu theme={theme}>{t("home.list_menu.link_submenu.project_dangol")}</PromiseAndResponsbilityLinkSubmenu>
                        <PromiseAndResponsbilityLinkSubmenu theme={theme}>{t("home.list_menu.link_submenu.active_green")}</PromiseAndResponsbilityLinkSubmenu>
                        <PromiseAndResponsbilityLinkSubmenu theme={theme}>{t("home.list_menu.link_submenu.digital")}</PromiseAndResponsbilityLinkSubmenu>
                        <PromiseAndResponsbilityLinkSubmenu theme={theme}>{t("home.list_menu.link_submenu.socioeconomic_value")}
                        </PromiseAndResponsbilityLinkSubmenu>
                    </PromiseAndResponsbilityListFlex>
                </PromiseAndResponsbilityListSecond>
                <PromiseAndResponsbilityContMenu theme={theme}>
                    <PromiseAndResponsbilitySlickSlider>
                        <PromiseAndResponsbilitySlickList>
                            <PromiseAndResponsbilityStyledSwiper
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
                                <PromiseAndResponsbilitySlickSlide>
                                    <PromiseAndResponsbilityLinkCont>
                                        <PromiseAndResponsbilityImgCont src="https://t1.kakaocdn.net/thumb/C317x178.fwebp.q100/?fname=https%3A%2F%2Ft1.kakaocdn.net%2Fkakaocorp%2Fkakaocorp%2Fservice%2Fgnb%2Fgnb_esg_2025.jpg"/>

                                        <PromiseAndResponsbilityWrapCont theme={theme}>
                                            <PromiseAndResponsbilityIcoCategory 
                                                src="https://t1.kakaocdn.net/kakaocorp/kakaocorp/admin/category/65fde7b2017900001.png"/>
                                                <PromiseAndResponsbilityTxtCategory theme={theme}>
                                                    {t("home.list_menu.txt_category.esg_reports")}
                                                </PromiseAndResponsbilityTxtCategory>
                                                <PromiseAndResponsbilityWrapContDescription 
                                                    theme={theme}
                                                    style={{ whiteSpace: 'pre-line' }}
                                                    >
                                                    {t("home.list_menu.wrap_cont_description.esg_reports")}
                                                </PromiseAndResponsbilityWrapContDescription>
                                        </PromiseAndResponsbilityWrapCont>
                                    </PromiseAndResponsbilityLinkCont>
                                </PromiseAndResponsbilitySlickSlide>

                                <PromiseAndResponsbilitySlickSlide>
                                    <PromiseAndResponsbilityLinkCont>
                                        <PromiseAndResponsbilityImgCont src="https://t1.kakaocdn.net/thumb/C317x178.fwebp.q100/?fname=https%3A%2F%2Ft1.kakaocdn.net%2Fkakaocorp%2Fkakaocorp%2Fservice%2Fgnb%2Fgnb_dangol.png"/>

                                        <PromiseAndResponsbilityWrapCont theme={theme}>
                                            <PromiseAndResponsbilityIcoCategory 
                                                src="https://t1.kakaocdn.net/kakaocorp/kakaocorp/admin/category/b1921311019200001.png"/>
                                            <PromiseAndResponsbilityTxtCategory theme={theme}>
                                                {t("home.list_menu.txt_category.project_dangol")}
                                            </PromiseAndResponsbilityTxtCategory>  
                                            <PromiseAndResponsbilityWrapContDescription 
                                                theme={theme} 
                                                style={{ whiteSpace: 'pre-line' }}
                                            >
                                                {t("home.list_menu.wrap_cont_description.project_dangol")}
                                            </PromiseAndResponsbilityWrapContDescription>  
                                        </PromiseAndResponsbilityWrapCont>
                                    </PromiseAndResponsbilityLinkCont>
                                </PromiseAndResponsbilitySlickSlide>

                                <PromiseAndResponsbilitySlickSlide>
                                    <PromiseAndResponsbilityLinkCont>
                                        <PromiseAndResponsbilityImgCont src="https://t1.kakaocdn.net/thumb/C317x178.fwebp.q100/?fname=https%3A%2F%2Ft1.kakaocdn.net%2Fkakaocorp%2Fkakaocorp%2Fservice%2Fgnb%2Fgnb_activegreen.png"/>

                                        <PromiseAndResponsbilityWrapCont theme={theme}>
                                            <PromiseAndResponsbilityIcoCategory 
                                                src="https://t1.kakaocdn.net/kakaocorp/kakaocorp/admin/category/6f187cca018800001.png"/>
                                            <PromiseAndResponsbilityTxtCategory theme={theme}>
                                                {t("home.list_menu.txt_category.active_green")}
                                            </PromiseAndResponsbilityTxtCategory>
                                            <PromiseAndResponsbilityWrapContDescription 
                                                theme={theme} 
                                                style={{ whiteSpace: 'pre-line' }}
                                            >
                                                {t("home.list_menu.wrap_cont_description.active_green")}
                                            </PromiseAndResponsbilityWrapContDescription>    
                                        </PromiseAndResponsbilityWrapCont>
                                    </PromiseAndResponsbilityLinkCont>
                                </PromiseAndResponsbilitySlickSlide>

                                <PromiseAndResponsbilitySlickSlide>
                                    <PromiseAndResponsbilityLinkCont>
                                        <PromiseAndResponsbilityImgCont src="https://t1.kakaocdn.net/thumb/C317x178.fwebp.q100/?fname=https%3A%2F%2Ft1.kakaocdn.net%2Fkakaocorp%2Fkakaocorp%2Fservice%2Fgnb%2Fgnb_policy.png"/>

                                        <PromiseAndResponsbilityWrapCont theme={theme}>
                                            <PromiseAndResponsbilityIcoCategory 
                                                src="https://t1.kakaocdn.net/kakaocorp/kakaocorp/admin/category/ad670b2e018b00001.png"/>
                                            <PromiseAndResponsbilityTxtCategory theme={theme}>
                                                {t("home.list_menu.txt_category.digital")}
                                            </PromiseAndResponsbilityTxtCategory>
                                            <PromiseAndResponsbilityWrapContDescription 
                                                theme={theme}
                                                style={{ whiteSpace: 'pre-line' }}>
                                                {t("home.list_menu.wrap_cont_description.digital")}
                                            </PromiseAndResponsbilityWrapContDescription>   
                                        </PromiseAndResponsbilityWrapCont>
                                    </PromiseAndResponsbilityLinkCont>
                                </PromiseAndResponsbilitySlickSlide>

                            </PromiseAndResponsbilityStyledSwiper>
                        </PromiseAndResponsbilitySlickList>
                    </PromiseAndResponsbilitySlickSlider>
                </PromiseAndResponsbilityContMenu>
            </PromiseAndResponsbilityBoxMenuContainer>
        </>
    )
}

export default PromiseAndResponsbilityBoxMenu;