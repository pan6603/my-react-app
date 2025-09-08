import { 
    ContMainAreaStoryContainer,
    TitleContTypeService,
    InnerMainInnerService,
    ListService,
    BoxService,
    CateService,
    ItemsService,
    BoxServiceFlex,
    SocialImpactFlex,
    KaKaoLink,
    NextWebSiteLink,
    EmoticonImgLink,
    CommunicationLink,
    KakaoTalkChannelLink,
    KakaoCloudLink,
    AgitLink,
    KakaoMapLink,
    KakaoBankLink,
    KakaoTalkGiftLink,
    TalkDealLink,
    ZigZagLink,
    KakaoTLink,
    KakaoTogetherLink,
    KakaoPageLink,
    PicComaLink,
    MelonLink,
    LinkImg,
    WrapBtn,
    LinkCommon,
    LinkCommonDiv,
    LinkCommonText,
    BtnArr
} from "../../styles/main/ContMainAreaService.styles";
import { useTheme } from "../../components/context/ThemeContext";
import { useTranslation } from "react-i18next";

function ContMainAreaService() {
    const { theme } = useTheme() 
    const { t } = useTranslation();

    return (
        <ContMainAreaStoryContainer>
            <TitleContTypeService theme={theme}>
                {t("home.cont_main_area_service.title_cont_type_service")}
            </TitleContTypeService>
            <InnerMainInnerService>
                <ListService>
                    <BoxService theme={theme}>
                        <BoxServiceFlex>
                        <CateService theme={theme}>
                            {t("home.cont_main_area_service.communication")}
                        </CateService>
                        <ItemsService>
                            <KaKaoLink href="https://www.kakaocorp.com/page/service/service/KakaoTalk">
                                <LinkImg src="https://t1.kakaocdn.net/kakaocorp/kakaocorp/admin/kakaoService/cc08d9e2018e00001.png" alt="카카오톡" />
                            </KaKaoLink>
                            <NextWebSiteLink href="https://www.kakaocorp.com/page/service/service/Daum">
                                <LinkImg src="https://t1.kakaocdn.net/kakaocorp/kakaocorp/admin/kakaoService/2666427d019500001.png" alt="다음"/>
                            </NextWebSiteLink>
                            <EmoticonImgLink href="https://www.kakaocorp.com/page/service/service/KakaoEmoticon">
                                <LinkImg src="https://t1.kakaocdn.net/kakaocorp/kakaocorp/admin/kakaoService/f6999d4b019600001.png" />
                            </EmoticonImgLink>
                            <CommunicationLink href="https://www.kakaocorp.com/page/service/service?tab=communication">
                                <LinkImg src="data:image/svg+xml;charset=utf-8,%3Csvg xmlns='http://www.w3.org/2000/svg' width='56' height='56' fill='none'%3E%3Cpath opacity='.4' d='M1 25C1 13.686 1 8.03 4.515 4.515 8.029 1 13.686 1 25 1h6c11.314 0 16.97 0 20.485 3.515C55 8.029 55 13.686 55 25v6c0 11.314 0 16.97-3.515 20.485C47.971 55 42.314 55 31 55h-6c-11.314 0-16.97 0-20.485-3.515C1 47.971 1 42.314 1 31v-6z' fill='%23000'/%3E%3Cpath d='M26.174 20.389a1.522 1.522 0 013.043 0v15.217a1.522 1.522 0 11-3.043 0V20.39z' fill='%23fff'/%3E%3Cpath d='M35.609 26.172a1.522 1.522 0 110 3.043H20.39a1.522 1.522 0 010-3.043h15.22z' fill='%23fff'/%3E%3C/svg%3E" />
                            </CommunicationLink>
                        </ItemsService> 
                        </BoxServiceFlex>
                          
                    </BoxService>
                    <BoxService theme={theme}>
                        <BoxServiceFlex> 
                            <CateService theme={theme}>{t("home.cont_main_area_service.business")}</CateService>
                            <ItemsService>
                                <KakaoTalkChannelLink href="https://www.kakaocorp.com/page/service/service/KakaoTalkChannel">
                                    <LinkImg src="https://t1.kakaocdn.net/kakaocorp/kakaocorp/admin/kakaoService/c9468d8a018c00001.png" alt="카카오채널" />
                                </KakaoTalkChannelLink>
                                <KakaoCloudLink href="https://www.kakaocorp.com/page/service/service/KakaoCloud">
                                    <LinkImg src="https://t1.kakaocdn.net/kakaocorp/kakaocorp/admin/kakaoService/c9469d4a018c00001.png" alt="카카오클라우드" />
                                </KakaoCloudLink>
                                <AgitLink href="https://www.kakaocorp.com/page/service/service/Agit">
                                    <LinkImg src="https://t1.kakaocdn.net/kakaocorp/kakaocorp/admin/kakaoService/c946aa55018c00001.png" alt="아지트"/>
                                </AgitLink>
                                <CommunicationLink href="https://www.kakaocorp.com/page/service/service?tab=communication">
                                    <LinkImg src="data:image/svg+xml;charset=utf-8,%3Csvg xmlns='http://www.w3.org/2000/svg' width='56' height='56' fill='none'%3E%3Cpath opacity='.4' d='M1 25C1 13.686 1 8.03 4.515 4.515 8.029 1 13.686 1 25 1h6c11.314 0 16.97 0 20.485 3.515C55 8.029 55 13.686 55 25v6c0 11.314 0 16.97-3.515 20.485C47.971 55 42.314 55 31 55h-6c-11.314 0-16.97 0-20.485-3.515C1 47.971 1 42.314 1 31v-6z' fill='%23000'/%3E%3Cpath d='M26.174 20.389a1.522 1.522 0 013.043 0v15.217a1.522 1.522 0 11-3.043 0V20.39z' fill='%23fff'/%3E%3Cpath d='M35.609 26.172a1.522 1.522 0 110 3.043H20.39a1.522 1.522 0 010-3.043h15.22z' fill='%23fff'/%3E%3C/svg%3E" />
                                </CommunicationLink>
                            </ItemsService>
                        </BoxServiceFlex>
                       
                    </BoxService>
                    <BoxService theme={theme}>
                        <BoxServiceFlex>  
                            <CateService theme={theme}>
                                {t("home.cont_main_area_service.life")}
                            </CateService>
                            <ItemsService>
                                <KakaoMapLink href="https://www.kakaocorp.com/page/service/service/KakaoMap">
                                    <LinkImg src="https://t1.kakaocdn.net/kakaocorp/kakaocorp/admin/kakaoService/c947f606018c00001.png" alt="카카오맵"/>
                                </KakaoMapLink>
                                <KakaoTLink href="https://www.kakaocorp.com/page/service/service/KakaoT">
                                    <LinkImg src="https://t1.kakaocdn.net/kakaocorp/kakaocorp/admin/kakaoService/c94804d8018c00001.png" alt="카카오T"/>
                                </KakaoTLink>
                                <KakaoBankLink href="https://www.kakaocorp.com/page/service/service/KakaoBank">
                                    <LinkImg src="https://t1.kakaocdn.net/kakaocorp/kakaocorp/admin/kakaoService/c9481249018c00001.png" alt="카카오뱅크" />
                                </KakaoBankLink>
                                <CommunicationLink href="https://www.kakaocorp.com/page/service/service?tab=communication">
                                    <LinkImg src="data:image/svg+xml;charset=utf-8,%3Csvg xmlns='http://www.w3.org/2000/svg' width='56' height='56' fill='none'%3E%3Cpath opacity='.4' d='M1 25C1 13.686 1 8.03 4.515 4.515 8.029 1 13.686 1 25 1h6c11.314 0 16.97 0 20.485 3.515C55 8.029 55 13.686 55 25v6c0 11.314 0 16.97-3.515 20.485C47.971 55 42.314 55 31 55h-6c-11.314 0-16.97 0-20.485-3.515C1 47.971 1 42.314 1 31v-6z' fill='%23000'/%3E%3Cpath d='M26.174 20.389a1.522 1.522 0 013.043 0v15.217a1.522 1.522 0 11-3.043 0V20.39z' fill='%23fff'/%3E%3Cpath d='M35.609 26.172a1.522 1.522 0 110 3.043H20.39a1.522 1.522 0 010-3.043h15.22z' fill='%23fff'/%3E%3C/svg%3E" />
                                </CommunicationLink>
                            </ItemsService>
                        </BoxServiceFlex>
                    </BoxService>

                    <BoxService theme={theme}>
                        <BoxServiceFlex>
                            <CateService theme={theme}>
                                {t("home.cont_main_area_service.shopping")}        
                            </CateService>
                            <ItemsService>
                                <KakaoTalkGiftLink href="https://www.kakaocorp.com/page/service/service/KakaoTalkGift">
                                    <LinkImg src="https://t1.kakaocdn.net/kakaocorp/kakaocorp/admin/kakaoService/c94a2627018c00001.png" alt="" />
                                </KakaoTalkGiftLink>
                                <TalkDealLink href="https://www.kakaocorp.com/page/service/service/TalkDeal">
                                    <LinkImg src="https://t1.kakaocdn.net/kakaocorp/kakaocorp/admin/kakaoService/cd650bd2019300001.png" alt="톡딜" />
                                </TalkDealLink>
                                <ZigZagLink href="https://www.kakaocorp.com/page/service/service/zigzag">
                                    <LinkImg src="https://t1.kakaocdn.net/kakaocorp/kakaocorp/admin/kakaoService/c94a96f9018c00001.png" alt="지그재그" />
                                </ZigZagLink>
                                <CommunicationLink href="https://www.kakaocorp.com/page/service/service?tab=communication">
                                    <LinkImg src="data:image/svg+xml;charset=utf-8,%3Csvg xmlns='http://www.w3.org/2000/svg' width='56' height='56' fill='none'%3E%3Cpath opacity='.4' d='M1 25C1 13.686 1 8.03 4.515 4.515 8.029 1 13.686 1 25 1h6c11.314 0 16.97 0 20.485 3.515C55 8.029 55 13.686 55 25v6c0 11.314 0 16.97-3.515 20.485C47.971 55 42.314 55 31 55h-6c-11.314 0-16.97 0-20.485-3.515C1 47.971 1 42.314 1 31v-6z' fill='%23000'/%3E%3Cpath d='M26.174 20.389a1.522 1.522 0 013.043 0v15.217a1.522 1.522 0 11-3.043 0V20.39z' fill='%23fff'/%3E%3Cpath d='M35.609 26.172a1.522 1.522 0 110 3.043H20.39a1.522 1.522 0 010-3.043h15.22z' fill='%23fff'/%3E%3C/svg%3E" />
                                </CommunicationLink>
                            </ItemsService>
                        </BoxServiceFlex>
                    </BoxService>

                    <BoxService theme={theme}>
                        <BoxServiceFlex>
                            <CateService theme={theme}>
                                {t("home.cont_main_area_service.entertainment")}   
                            </CateService>
                            <ItemsService>
                                <KakaoPageLink href="https://www.kakaocorp.com/page/service/service/KakaoPage">
                                    <LinkImg src="https://t1.kakaocdn.net/kakaocorp/kakaocorp/admin/kakaoService/c94b668f018c00001.png" alt="카카오페이지"/>
                                </KakaoPageLink>
                                <PicComaLink href="https://www.kakaocorp.com/page/service/service/piccoma">
                                    <LinkImg src="https://t1.kakaocdn.net/kakaocorp/kakaocorp/admin/kakaoService/c94b7687018c00001.png" alt="픽코마" />
                                </PicComaLink>
                                <MelonLink href="https://www.kakaocorp.com/page/service/service/Melon">
                                    <LinkImg src="https://t1.kakaocdn.net/kakaocorp/kakaocorp/admin/kakaoService/c94b83e3018c00001.png" alt="멜론"/>
                                </MelonLink>
                                <CommunicationLink href="https://www.kakaocorp.com/page/service/service?tab=communication">
                                    <LinkImg src="data:image/svg+xml;charset=utf-8,%3Csvg xmlns='http://www.w3.org/2000/svg' width='56' height='56' fill='none'%3E%3Cpath opacity='.4' d='M1 25C1 13.686 1 8.03 4.515 4.515 8.029 1 13.686 1 25 1h6c11.314 0 16.97 0 20.485 3.515C55 8.029 55 13.686 55 25v6c0 11.314 0 16.97-3.515 20.485C47.971 55 42.314 55 31 55h-6c-11.314 0-16.97 0-20.485-3.515C1 47.971 1 42.314 1 31v-6z' fill='%23000'/%3E%3Cpath d='M26.174 20.389a1.522 1.522 0 013.043 0v15.217a1.522 1.522 0 11-3.043 0V20.39z' fill='%23fff'/%3E%3Cpath d='M35.609 26.172a1.522 1.522 0 110 3.043H20.39a1.522 1.522 0 010-3.043h15.22z' fill='%23fff'/%3E%3C/svg%3E" />
                                </CommunicationLink>
                            </ItemsService>
                        </BoxServiceFlex>
                    </BoxService>

                    <BoxService theme={theme}>
                        <BoxServiceFlex>
                            <CateService theme={theme}>
                                {t("home.cont_main_area_service.social_impact")}   
                            </CateService>
                            <SocialImpactFlex>
                                <KakaoTogetherLink href="https://www.kakaocorp.com/page/service/service/KakaoTogether">
                                    <LinkImg src="https://t1.kakaocdn.net/kakaocorp/kakaocorp/admin/kakaoService/c94c09cc018c00001.png" alt="카카오같이가치" />
                                </KakaoTogetherLink>
                                <CommunicationLink href="https://www.kakaocorp.com/page/service/service?tab=communication">
                                    <LinkImg src="data:image/svg+xml;charset=utf-8,%3Csvg xmlns='http://www.w3.org/2000/svg' width='56' height='56' fill='none'%3E%3Cpath opacity='.4' d='M1 25C1 13.686 1 8.03 4.515 4.515 8.029 1 13.686 1 25 1h6c11.314 0 16.97 0 20.485 3.515C55 8.029 55 13.686 55 25v6c0 11.314 0 16.97-3.515 20.485C47.971 55 42.314 55 31 55h-6c-11.314 0-16.97 0-20.485-3.515C1 47.971 1 42.314 1 31v-6z' fill='%23000'/%3E%3Cpath d='M26.174 20.389a1.522 1.522 0 013.043 0v15.217a1.522 1.522 0 11-3.043 0V20.39z' fill='%23fff'/%3E%3Cpath d='M35.609 26.172a1.522 1.522 0 110 3.043H20.39a1.522 1.522 0 010-3.043h15.22z' fill='%23fff'/%3E%3C/svg%3E" />
                                </CommunicationLink>
                            </SocialImpactFlex>
                        </BoxServiceFlex>
                    </BoxService>
                </ListService>
                <WrapBtn>
                    <LinkCommon href="https://www.kakaocorp.com/page/service/service">
                        <LinkCommonDiv theme={theme}>
                            <LinkCommonText theme={theme}>
                                {t("home.cont_main_area_service.go_to_service")}   
                            </LinkCommonText>

                            <BtnArr theme={theme}>
                            <circle data-v-be739f74="" cx="12" cy="12" r="12" fill={theme === "light" ? "#000" : "#fff"}></circle> <path data-v-be739f74="" d="M13.9704 8.57847L13.2078 9.34107L15.7207 11.8539L7.53764 11.8543L7.53765 12.9296L15.7207 12.9292L13.2079 15.442L13.9705 16.2046L17.7836 12.3916L13.9704 8.57847Z" fill={theme === "light" ? "#fff" : "#000"}></path>
                            </BtnArr>
                         
                        </LinkCommonDiv>
                    </LinkCommon>
                </WrapBtn>
            </InnerMainInnerService>
        </ContMainAreaStoryContainer>
    )
}

export default ContMainAreaService;