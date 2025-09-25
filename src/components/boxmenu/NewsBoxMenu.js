import { 
    NewsBoxMenuContainer,
    NewsListSecond,
    NewsListFlex,
    NewsTitSubmenu,
    NewsListThird,
    NewsLinkSubmenu,
    NewsContMenu,
    NewsSlickSlider,
    NewsSlickList,
    NewsStyledSwiper,
    NewsBoxMenuSlickSlide,
    NewsBoxMenuLinkContDiv,
    NewsBoxMenuLinkCont,
    NewsBoxMenuWrapCont,
    NewsBoxMenuIcoCategory,
    NewsBoxMenuTxtCategory,
    NewsWrapContDescription
} from "../../styles/boxmenu/BoxMenu.styles";
import { Pagination, Navigation, EffectFade } from 'swiper/modules'
import { useTheme } from "../context/ThemeContext";
import { useTranslation } from "react-i18next";

function NewBoxMenu() {
    const { theme } = useTheme() 
    const { t } = useTranslation();

    return (
        <>
            <NewsBoxMenuContainer theme={theme}>
                <NewsListSecond>
                    <NewsListFlex>
                        <NewsTitSubmenu>{t("home.list_menu.tit_submenu.news")}</NewsTitSubmenu>
                        <NewsListThird>
                            <NewsLinkSubmenu theme={theme}>
                                {t("home.list_menu.link_submenu.press_release")}
                            </NewsLinkSubmenu>
                            <NewsLinkSubmenu theme={theme}>
                                {t("home.list_menu.link_submenu.media_materials")}
                            </NewsLinkSubmenu>
                        </NewsListThird>
                    </NewsListFlex>
                    <NewsListFlex>
                        <NewsTitSubmenu>{t("home.list_menu.tit_submenu.kakao_now")}</NewsTitSubmenu>
                        <NewsListThird>
                            <NewsLinkSubmenu theme={theme}>
                                {t("home.list_menu.link_submenu.kakao_talk")}
                            </NewsLinkSubmenu>
                            <NewsLinkSubmenu theme={theme}>
                                {t("home.list_menu.link_submenu.group_company_story")}
                            </NewsLinkSubmenu>
                        </NewsListThird>
                    </NewsListFlex>
                </NewsListSecond>
                <NewsContMenu theme={theme}>
                    <NewsSlickSlider>
                        <NewsSlickList>
                            <NewsStyledSwiper
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
                                <NewsBoxMenuSlickSlide>
                                    <NewsBoxMenuLinkContDiv>
                                        <NewsBoxMenuLinkCont>
                                            <NewsBoxMenuWrapCont theme={theme}>
                                                <NewsBoxMenuIcoCategory 
                                                    src="https://t1.kakaocdn.net/kakaocorp/kakaocorp/admin/category/1ee6415a019300001.png"/> 
                                                    <NewsBoxMenuTxtCategory theme={theme}>
                                                        {t("home.list_menu.txt_category.press_release")}
                                                    </NewsBoxMenuTxtCategory>

                                                    <NewsWrapContDescription 
                                                        theme={theme} 
                                                        style={{ whiteSpace: 'pre-line' }}
                                                    >
                                                    {t("home.list_menu.wrap_cont_description.press_release_one")}
                                                    </NewsWrapContDescription>
                                            </NewsBoxMenuWrapCont>
                                        </NewsBoxMenuLinkCont>
                                    </NewsBoxMenuLinkContDiv>
                                    <NewsBoxMenuLinkContDiv>
                                        <NewsBoxMenuLinkCont>
                                            <NewsBoxMenuWrapCont theme={theme}>
                                                <NewsBoxMenuIcoCategory 
                                                    src="https://t1.kakaocdn.net/kakaocorp/kakaocorp/admin/category/1ee6415a019300001.png"/> 
                                                    <NewsBoxMenuTxtCategory theme={theme}>
                                                        {t("home.list_menu.txt_category.press_release")}
                                                    </NewsBoxMenuTxtCategory>
                                                    <NewsWrapContDescription 
                                                        theme={theme} 
                                                        style={{ whiteSpace: 'pre-line' }}
                                                    >
                                                        {t("home.list_menu.wrap_cont_description.press_release_two")}
                                                    </NewsWrapContDescription>
                                            </NewsBoxMenuWrapCont>
                                        </NewsBoxMenuLinkCont>
                                    </NewsBoxMenuLinkContDiv>
                                </NewsBoxMenuSlickSlide>
                                
                                <NewsBoxMenuSlickSlide>
                                    <NewsBoxMenuLinkContDiv>
                                        <NewsBoxMenuLinkCont>
                                            <NewsBoxMenuWrapCont theme={theme}>
                                                <NewsBoxMenuIcoCategory 
                                                    src="https://t1.kakaocdn.net/kakaocorp/kakaocorp/admin/category/1ee6415a019300001.png"/> 
                                                    <NewsBoxMenuTxtCategory theme={theme}>
                                                        {t("home.list_menu.txt_category.press_release")}
                                                    </NewsBoxMenuTxtCategory>
                                                    <NewsWrapContDescription 
                                                        theme={theme} 
                                                        style={{ whiteSpace: 'pre-line' }}
                                                    >
                                                        {t("home.list_menu.wrap_cont_description.press_release_three")}
                                                    </NewsWrapContDescription>
                                            </NewsBoxMenuWrapCont>
                                        </NewsBoxMenuLinkCont>
                                    </NewsBoxMenuLinkContDiv>

                                    <NewsBoxMenuLinkContDiv>
                                        <NewsBoxMenuLinkCont>
                                            <NewsBoxMenuWrapCont theme={theme}>
                                                <NewsBoxMenuIcoCategory 
                                                    src="https://t1.kakaocdn.net/kakaocorp/kakaocorp/admin/category/1ee6415a019300001.png"/> 
                                                    <NewsBoxMenuTxtCategory theme={theme}>
                                                        {t("home.list_menu.txt_category.press_release")}
                                                    </NewsBoxMenuTxtCategory>
                                                    <NewsWrapContDescription 
                                                        theme={theme} 
                                                        style={{ whiteSpace: 'pre-line' }}
                                                    >
                                                        {t("home.list_menu.wrap_cont_description.press_release_fourth")}
                                                    </NewsWrapContDescription>
                                            </NewsBoxMenuWrapCont>
                                        </NewsBoxMenuLinkCont>
                                    </NewsBoxMenuLinkContDiv>
                                </NewsBoxMenuSlickSlide>
                                
                                <NewsBoxMenuSlickSlide>
                                    <NewsBoxMenuLinkContDiv>
                                        <NewsBoxMenuLinkCont>
                                            <NewsBoxMenuWrapCont theme={theme}>
                                                <NewsBoxMenuIcoCategory 
                                                    src="https://t1.kakaocdn.net/kakaocorp/kakaocorp/admin/category/1ee6415a019300001.png"/> 
                                                    <NewsBoxMenuTxtCategory theme={theme}>
                                                        {t("home.list_menu.txt_category.press_release")}
                                                    </NewsBoxMenuTxtCategory>
                                                    <NewsWrapContDescription 
                                                        theme={theme} 
                                                        style={{ whiteSpace: 'pre-line' }}
                                                    >
                                                        {t("home.list_menu.wrap_cont_description.press_release_five")}
                                                    </NewsWrapContDescription>
                                            </NewsBoxMenuWrapCont>
                                        </NewsBoxMenuLinkCont>
                                    </NewsBoxMenuLinkContDiv>
                                    <NewsBoxMenuLinkContDiv>
                                        <NewsBoxMenuLinkCont>
                                            <NewsBoxMenuWrapCont theme={theme}>
                                                <NewsBoxMenuIcoCategory 
                                                    src="https://t1.kakaocdn.net/kakaocorp/kakaocorp/admin/category/1ee6415a019300001.png"/> 
                                                    <NewsBoxMenuTxtCategory theme={theme}>
                                                        {t("home.list_menu.txt_category.press_release")}
                                                    </NewsBoxMenuTxtCategory>
                                                    <NewsWrapContDescription 
                                                        theme={theme} 
                                                        style={{ whiteSpace: 'pre-line' }}
                                                    >
                                                        {t("home.list_menu.wrap_cont_description.press_release_six")}
                                                    </NewsWrapContDescription>
                                            </NewsBoxMenuWrapCont>
                                        </NewsBoxMenuLinkCont>
                                    </NewsBoxMenuLinkContDiv>
                                </NewsBoxMenuSlickSlide>
                                
                                <NewsBoxMenuSlickSlide>
                                    <NewsBoxMenuLinkContDiv>
                                        <NewsBoxMenuLinkCont>
                                            <NewsBoxMenuWrapCont theme={theme}>
                                                <NewsBoxMenuIcoCategory 
                                                    src="https://t1.kakaocdn.net/kakaocorp/kakaocorp/admin/category/1ee6415a019300001.png"/> 
                                                    <NewsBoxMenuTxtCategory theme={theme}>
                                                        {t("home.list_menu.txt_category.press_release")}
                                                    </NewsBoxMenuTxtCategory>
                                                    <NewsWrapContDescription 
                                                        theme={theme} 
                                                        style={{ whiteSpace: 'pre-line' }}
                                                    >
                                                        {t("home.list_menu.wrap_cont_description.press_release_seven")} 
                                                    </NewsWrapContDescription>
                                            </NewsBoxMenuWrapCont>
                                        </NewsBoxMenuLinkCont>
                                    </NewsBoxMenuLinkContDiv>

                                    <NewsBoxMenuLinkContDiv>
                                        <NewsBoxMenuLinkCont>
                                            <NewsBoxMenuWrapCont theme={theme}>
                                                <NewsBoxMenuIcoCategory 
                                                    src="https://t1.kakaocdn.net/kakaocorp/kakaocorp/admin/category/1ee6415a019300001.png"/> 
                                                    <NewsBoxMenuTxtCategory theme={theme}>
                                                        {t("home.list_menu.txt_category.press_release")}
                                                    </NewsBoxMenuTxtCategory>
                                                    <NewsWrapContDescription 
                                                        theme={theme} 
                                                        style={{ whiteSpace: 'pre-line' }}
                                                    >
                                                        {t("home.list_menu.wrap_cont_description.press_release_eight")}
                                                    </NewsWrapContDescription>
                                            </NewsBoxMenuWrapCont>
                                        </NewsBoxMenuLinkCont>
                                    </NewsBoxMenuLinkContDiv>
                                </NewsBoxMenuSlickSlide>

                            </NewsStyledSwiper>
                        </NewsSlickList>
                    </NewsSlickSlider>
                </NewsContMenu>
            </NewsBoxMenuContainer>
        </>
    )
}


export default NewBoxMenu;