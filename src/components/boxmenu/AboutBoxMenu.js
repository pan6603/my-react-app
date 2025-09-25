import { 
    AboutBoxMenuContainer,
    ListSecond,
    ContMenu,
    SlickSlider,
    ListSecondMenu,
    LinkSubmenu,
    StyledSwiper,
    SlickSlide,
    LinkCont,
    ImgCont,
    WrapCont,
    IcoCategory,
    TxtCategory,
    WrapContDescription
} from "../../styles/boxmenu/BoxMenu.styles";
import { Pagination, Navigation, EffectFade } from 'swiper/modules'
import { useTheme } from "../context/ThemeContext";
import { useTranslation } from "react-i18next";

function AboutBoxMenu() {
    const { t } = useTranslation();
    const { theme } = useTheme() 

    return (
        <AboutBoxMenuContainer theme={theme}>
            <ListSecond theme={theme}>
                <ListSecondMenu>
                    <LinkSubmenu theme={theme}>{t("home.list_menu.link_submenu.kakao_culture")}</LinkSubmenu>
                </ListSecondMenu>
                <ListSecondMenu>
                    <LinkSubmenu theme={theme}>{t("home.list_menu.link_submenu.kakao_group")}</LinkSubmenu>
                </ListSecondMenu>
                <ListSecondMenu>
                    <LinkSubmenu theme={theme}>{t("home.list_menu.link_submenu.milestones")}</LinkSubmenu>
                </ListSecondMenu>
            </ListSecond>
            <ContMenu>
                <SlickSlider>
                    <StyledSwiper
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
                        <SlickSlide>
                            <LinkCont>
                                <ImgCont src="https://t1.kakaocdn.net/thumb/C317x178.fwebp.q100/?fname=https%3A%2F%2Ft1.kakaocdn.net%2Fkakaocorp%2Fkakaocorp%2Fservice%2Fgnb%2Fgnb_kakaoCulture.png"/>
                                <WrapCont theme={theme}>
                                    <IcoCategory src="https://t1.kakaocdn.net/kakaocorp/kakaocorp/admin/category/06c15fc0019400001.png"/>
                                    <TxtCategory theme={theme}>
                                        {t("home.list_menu.txt_category.kakao_culture")}
                                    </TxtCategory>
                                    <WrapContDescription 
                                        theme={theme} 
                                        style={{ whiteSpace: 'pre-line' }}
                                    >
                                        {t("home.list_menu.wrap_cont_description.kakao_culture")}
                                    </WrapContDescription>
                                </WrapCont>
                            </LinkCont>
                        </SlickSlide>
                        <SlickSlide>
                            <LinkCont>
                                <ImgCont src="https://t1.kakaocdn.net/thumb/C317x178.fwebp.q100/?fname=https%3A%2F%2Ft1.kakaocdn.net%2Fkakaocorp%2Fkakaocorp%2Fservice%2Fgnb%2Fgnb_kakaoGroup.png"/>
                                <WrapCont theme={theme}>
                                    <IcoCategory src="https://t1.kakaocdn.net/kakaocorp/kakaocorp/admin/65628c29017800001.png"/>
                                    <TxtCategory theme={theme}>
                                        {t("home.list_menu.txt_category.kakao_group")}
                                    </TxtCategory>
                                    <WrapContDescription 
                                        theme={theme}
                                        style={{ whiteSpace: 'pre-line' }}
                                    >
                                        {t("home.list_menu.wrap_cont_description.kakao_group")}   
                                    </WrapContDescription>
                                </WrapCont>
                            </LinkCont>
                        </SlickSlide>
                        <SlickSlide>
                            <LinkCont>
                                <ImgCont src="https://t1.kakaocdn.net/thumb/C317x178.fwebp.q100/?fname=https%3A%2F%2Ft1.kakaocdn.net%2Fkakaocorp%2Fkakaocorp%2Fservice%2Fgnb%2Fgnb_milestones.png"/>
                                <WrapCont theme={theme}>
                                    <IcoCategory src="https://t1.kakaocdn.net/kakaocorp/kakaocorp/admin/category/dd29d0e1018800001.png" />
                                    <TxtCategory theme={theme}>
                                        {t("home.list_menu.txt_category.milestones")}
                                    </TxtCategory>
                                    <WrapContDescription 
                                        theme={theme}
                                        style={{ whiteSpace: 'pre-line' }}
                                    >
                                        {t("home.list_menu.wrap_cont_description.milestones")}   
                                    </WrapContDescription>
                                </WrapCont>
                            </LinkCont>
                        </SlickSlide>
                    </StyledSwiper>
    
                </SlickSlider>
            </ContMenu>
        </AboutBoxMenuContainer>
    )
}

export default AboutBoxMenu;