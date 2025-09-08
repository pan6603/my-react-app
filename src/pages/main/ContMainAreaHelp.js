import { 
    ContMainAreaHelpContainer,
    TitleContTypeHelp,
    InnerMainInnerHelp,
    HelpWrapBtn,
    LinkCommonDiv,
    LinkCommon,
    WrapTop,
    WrapBottom,
    BoxHelpTypeDouble,
    BoxHelpTypeDoubleLink,
    TitleHelp,
    DoubleLink,
    SubHelp,
    IconHelp,
    WrapCenterInnerTop,
    WrapSocialInnerTop,
    WrapRecruitInnerTop,
    BoxHelp,
    BoxHelpLink,
    BoxHelpLinkClick,
    WrapSocialInnerTopTitle,
    SubSocial,
    ListSocial,
    LinkSocialLinkCh,
    LinkSocialLinkChLink,
    LinkSocialLinkYt,
    LinkSocialLinkYtLink,
    LinkSocialLinkInsta,
    LinkSocialLinkInstaLink,
    LinkSocialLinkFb,
    LinkSocialLinkFbLink,
    LinkSocialLinkLi,
    LinkSocialLinkLiLink,
    WrapRecruitInnerTopTitle,
    SubHelpDiv,
    SubHelpLink
 } from "../../styles/main/ContMainAreaHelp.styles";
 import { useTheme } from "../../components/context/ThemeContext";
 import { useTranslation } from "react-i18next";

function ContMainAreaHelp() {
    const { theme } = useTheme() 
    const { t } = useTranslation()

    return (
        <ContMainAreaHelpContainer>
            <TitleContTypeHelp theme={theme}>
            {t("home.cont_main_area_help.title_cont_type_help")}
            </TitleContTypeHelp>
            <InnerMainInnerHelp>
                <WrapTop>
                    <WrapCenterInnerTop>
                        <BoxHelp theme={theme}>
                            <BoxHelpLink>
                                <BoxHelpLinkClick>
                                    <TitleHelp theme={theme}>
                                    {t("home.cont_main_area_help.title_help.kakao")}                                   
                                    </TitleHelp>
                                    <SubHelp theme={theme}>
                                    {t("home.cont_main_area_help.sub_help.customer_service")}
                                        <svg data-v-57327a75="" data-v-85d56d7e="" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" class="btn_out"><circle data-v-57327a75="" cx="12" cy="12" r="12" fill={theme === "light" ? "#000" : "#fff"}></circle> <path data-v-57327a75="" d="M10.8104 8.57804V9.65654H14.3641L8.57812 15.4432L9.33847 16.2035L15.1244 10.4169V13.9706H16.2029V8.57804H10.8104Z" fill={theme === "light" ? "#fff" : "#000"}></path></svg>
                                    </SubHelp>
                                    <IconHelp 
                                          src={
                                            theme === "light"
                                              ? "https://t1.kakaocdn.net/thumb/C200x200.fwebp.q100/?fname=https%3A%2F%2Ft1.kakaocdn.net%2Fkakaocorp%2Fkakaocorp%2Fservice%2Fmain%2Fkakao-cs-white.gif"
                                              : "https://t1.kakaocdn.net/thumb/C200x200.fwebp.q100/?fname=https%3A%2F%2Ft1.kakaocdn.net%2Fkakaocorp%2Fkakaocorp%2Fservice%2Fmain%2Fkakao-cs-dark.gif"
                                          }
                                          alt="help icon"
                                    />
                              
                                </BoxHelpLinkClick>
                            </BoxHelpLink>
                        </BoxHelp>
                        <BoxHelp theme={theme}>
                            <BoxHelpLink>
                                <BoxHelpLinkClick>
                                    <TitleHelp theme={theme}>
                                    {t("home.cont_main_area_help.title_help.daum")}  
                                    </TitleHelp>
                                    <SubHelp theme={theme}>
                                    {t("home.cont_main_area_help.sub_help.customer_service")}
                                        <svg data-v-57327a75="" data-v-85d56d7e="" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" class="btn_out"><circle data-v-57327a75="" cx="12" cy="12" r="12" fill={theme === "light" ? "#000" : "#fff"}></circle> <path data-v-57327a75="" d="M10.8104 8.57804V9.65654H14.3641L8.57812 15.4432L9.33847 16.2035L15.1244 10.4169V13.9706H16.2029V8.57804H10.8104Z" fill={theme === "light" ? "#fff" : "#000"}></path></svg>
                                    </SubHelp>
                                    <IconHelp src=""/>

                                    <IconHelp 
                                          src={
                                            theme === "light"
                                              ? "https://t1.kakaocdn.net/thumb/C200x200.fwebp.q100/?fname=https%3A%2F%2Ft1.kakaocdn.net%2Fkakaocorp%2Fkakaocorp%2Fservice%2Fmain%2Fdaum-cs-white_250224_v2.gif"
                                              : "https://t1.kakaocdn.net/thumb/C200x200.fwebp.q100/?fname=https%3A%2F%2Ft1.kakaocdn.net%2Fkakaocorp%2Fkakaocorp%2Fservice%2Fmain%2Fdaum-cs-dark_250224.gif"
                                          }
                                          alt="help icon"
                                    />
                                </BoxHelpLinkClick>
                            </BoxHelpLink>
                        </BoxHelp>
                        <BoxHelp theme={theme}>
                            <BoxHelpLink>
                                <BoxHelpLinkClick>
                                    <TitleHelp theme={theme}>
                                    {t("home.cont_main_area_help.title_help.commerce")} 
                                    </TitleHelp>
                                    <SubHelp theme={theme}>
                                        {t("home.cont_main_area_help.sub_help.customer_service")}
                                        <svg data-v-57327a75="" data-v-85d56d7e="" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" class="btn_out"><circle data-v-57327a75="" cx="12" cy="12" r="12" fill={theme === "light" ? "#000" : "#fff"}></circle> <path data-v-57327a75="" d="M10.8104 8.57804V9.65654H14.3641L8.57812 15.4432L9.33847 16.2035L15.1244 10.4169V13.9706H16.2029V8.57804H10.8104Z" fill={theme === "light" ? "#fff" : "#000"}></path></svg>
                                    </SubHelp>
                                    <IconHelp 
                                          src={
                                            theme === "light"
                                              ? "https://t1.kakaocdn.net/thumb/C200x200.fwebp.q100/?fname=https%3A%2F%2Ft1.kakaocdn.net%2Fkakaocorp%2Fkakaocorp%2Fservice%2Fmain%2Fcommerce-cs-white_231229.gif"
                                              : "https://t1.kakaocdn.net/thumb/C200x200.fwebp.q100/?fname=https%3A%2F%2Ft1.kakaocdn.net%2Fkakaocorp%2Fkakaocorp%2Fservice%2Fmain%2Fcommerce-cs-dark_231229.gif"
                                          }
                                          alt="help icon"
                                    />
                                    
                                </BoxHelpLinkClick>
                            </BoxHelpLink>
                        </BoxHelp>
                    </WrapCenterInnerTop>

                    <WrapSocialInnerTop>
                        <WrapSocialInnerTopTitle style={{ whiteSpace: 'pre-line' }}>
                        {t("home.cont_main_area_help.wrap_social_inner_top.wrap_social_inner_top_title")}
                        </WrapSocialInnerTopTitle>
                        <SubSocial>
                        {t("home.cont_main_area_help.wrap_social_inner_top.sub_social")}
                        </SubSocial>
                        <ListSocial>
                            <LinkSocialLinkCh>
                                <LinkSocialLinkChLink href="https://pf.kakao.com/_ZRQBh"></LinkSocialLinkChLink>
                            </LinkSocialLinkCh>
                            <LinkSocialLinkYt>
                                <LinkSocialLinkYtLink href="https://www.youtube.com/@Kakaobrandmedia"></LinkSocialLinkYtLink>
                            </LinkSocialLinkYt>
                            <LinkSocialLinkInsta>
                                <LinkSocialLinkInstaLink href="https://www.instagram.com/kakao.today/#"></LinkSocialLinkInstaLink>
                            </LinkSocialLinkInsta>
                            <LinkSocialLinkFb>
                                <LinkSocialLinkFbLink href="https://www.facebook.com/kakao.brandmedia"></LinkSocialLinkFbLink>
                            </LinkSocialLinkFb>
                            <LinkSocialLinkLi>
                                <LinkSocialLinkLiLink href="https://www.linkedin.com/company/kakaocorp/"></LinkSocialLinkLiLink>
                            </LinkSocialLinkLi>
                        </ListSocial>
                    </WrapSocialInnerTop>

                    <WrapRecruitInnerTop>
                        <WrapRecruitInnerTopTitle style={{ whiteSpace: 'pre-line' }}>
                        {t("home.cont_main_area_help.wrap_recruit_inner_top.wrap_recruit_inner_top_title")}
                        </WrapRecruitInnerTopTitle>
                        <SubHelpDiv>
                            <SubHelpLink>
                            {t("home.cont_main_area_help.wrap_recruit_inner_top.sub_help_link")}
                                <svg data-v-57327a75="" data-v-85d56d7e="" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" class="btn_out type_inversion"><circle data-v-57327a75="" cx="12" cy="12" r="12" fill="white"></circle> <path data-v-57327a75="" d="M10.8104 8.57804V9.65654H14.3641L8.57812 15.4432L9.33847 16.2035L15.1244 10.4169V13.9706H16.2029V8.57804H10.8104Z" fill="black"></path></svg>
                            </SubHelpLink>
                        </SubHelpDiv>
                    </WrapRecruitInnerTop>
                </WrapTop>
                <WrapBottom>
                    <BoxHelpTypeDouble theme={theme}>
                        <BoxHelpTypeDoubleLink>
                            <DoubleLink>
                                <TitleHelp theme={theme}>
                                {t("home.cont_main_area_help.title_help.stock")} 
                                </TitleHelp>
                                <SubHelp theme={theme}>
                                {t("home.cont_main_area_help.sub_help.go_to")}     
                                <svg data-v-57327a75="" data-v-85d56d7e="" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" class="btn_out"><circle data-v-57327a75="" cx="12" cy="12" r="12" fill={theme === "light" ? "#000" : "#fff"}></circle> <path data-v-57327a75="" d="M10.8104 8.57804V9.65654H14.3641L8.57812 15.4432L9.33847 16.2035L15.1244 10.4169V13.9706H16.2029V8.57804H10.8104Z" fill={theme === "light" ? "#fff" : "#000"}></path></svg>
                                </SubHelp>
                                <IconHelp src="https://t1.kakaocdn.net/thumb/C100x100.fwebp.q100/?fname=https%3A%2F%2Ft1.kakaocdn.net%2Fkakaocorp%2Fkakaocorp%2Fservice%2Fmain%2Ficon_help_stock.png"/>
                            </DoubleLink>
                        </BoxHelpTypeDoubleLink>
                    </BoxHelpTypeDouble>
                    <BoxHelpTypeDouble theme={theme}>
                        <BoxHelpTypeDoubleLink>
                            <DoubleLink>
                                <TitleHelp theme={theme} style={{ whiteSpace: 'pre-line' }}>
                                {t("home.cont_main_area_help.title_help.protection")} 
                                </TitleHelp>
                                <SubHelp theme={theme}>
                                {t("home.cont_main_area_help.sub_help.go_to")}    
                                <svg data-v-57327a75="" data-v-85d56d7e="" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" class="btn_out"><circle data-v-57327a75="" cx="12" cy="12" r="12" fill={theme === "light" ? "#000" : "#fff"}></circle> <path data-v-57327a75="" d="M10.8104 8.57804V9.65654H14.3641L8.57812 15.4432L9.33847 16.2035L15.1244 10.4169V13.9706H16.2029V8.57804H10.8104Z" fill={theme === "light" ? "#fff" : "#000"}></path></svg>
                                </SubHelp>
                                <IconHelp src="https://t1.kakaocdn.net/thumb/C100x100.fwebp.q100/?fname=https%3A%2F%2Ft1.kakaocdn.net%2Fkakaocorp%2Fkakaocorp%2Fservice%2Fmain%2Ficon_help_safe.png"/>
                            </DoubleLink>
                        </BoxHelpTypeDoubleLink>
                    </BoxHelpTypeDouble>
                </WrapBottom>
            </InnerMainInnerHelp>
            <HelpWrapBtn>
                <LinkCommonDiv theme={theme}>
                    <LinkCommon theme={theme}>
                    {t("home.cont_main_area_help.link_common.view_all_kakao_news")} 
                    <svg data-v-be739f74="" data-v-85d56d7e="" width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" class="btn_arr"><circle data-v-be739f74="" cx="12" cy="12" r="12" fill={theme === "light" ? "#000" : "#fff"}></circle> <path data-v-be739f74="" d="M13.9704 8.57847L13.2078 9.34107L15.7207 11.8539L7.53764 11.8543L7.53765 12.9296L15.7207 12.9292L13.2079 15.442L13.9705 16.2046L17.7836 12.3916L13.9704 8.57847Z" fill={theme === "light" ? "#fff" : "#000"}></path></svg>
                    </LinkCommon>
                </LinkCommonDiv>
            </HelpWrapBtn>
        </ContMainAreaHelpContainer>
    )
}

export default ContMainAreaHelp;