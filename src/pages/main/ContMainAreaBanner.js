import { 
    ContMainAreaBannerContainer,
    AreaVisual,
    ItemVisualVideo,
    InnerfirstWidget,
    InnerSlideFirstLink,
    InnerFirstImg,
    ImgFirst,
    InnerThirdWidget,
    InnerSlideThirdLink,
    InnerThirdFlex,
    IconThird,
    TitleThird,
    AreaWidget,
    InnerBottomTypeBtn,
    LinkBottom,
    InnerWidgetSecondWidget,
    SwiperSlideItem,
    InnerSlideLink,
    InnerSecond,
    BadgeSecondTypeYellow,
    TitleSecond,
    WrapTags,
    ItemTag,
    StyledSwiper
} from "../../styles/main/ContMainAreaBanner.styles";
import 'swiper/css'
import 'swiper/css/autoplay'
import 'swiper/css/pagination'
import "swiper/css/effect-fade";
import { SwiperSlide } from 'swiper/react';
import { Autoplay, Pagination, EffectFade } from 'swiper/modules'
import { useTheme } from "../../components/context/ThemeContext";
import { useTranslation } from "react-i18next";


function ContMainAreaBanner() {
    const { theme } = useTheme() 
    const { t, i18n } = useTranslation();

    const slides = [
        {
          badge: <>{t("home.main.kakao_tech")}</>,
          title: <>{t("home.main.kakao_tech_title")}</>,
          tags: [<>{t("home.main.hash_tag.ai")}</>, <>{t("home.main.hash_tag.open_ai")}</>, <>{t("home.main.hash_tag.kakao_ai")}</>]
        },
        {
          badge: <>{t("home.main.kakao_description")}</>,
          title: <>{t("home.main.kakao_description_title")}</>,
          tags: [<>{t("home.main.hash_tag.updated_news")}</>, <>{t("home.main.hash_tag.tips_for_kakakotalk")}</>]
        }
    ];

    return (
        <ContMainAreaBannerContainer>
            <AreaVisual>
                <ItemVisualVideo src="https://t1.kakaocdn.net/kakaocorp/kakaocorp/admin/heroVisual/ef4074ea019800001.mp4" muted="muted" loop="loop" type="video/mp4" autoplay="autoplay" playsinline="playsinline" />

                <InnerBottomTypeBtn theme={theme}>
                    <LinkBottom theme={theme}>
                        {t("home.main.view_more")}
                        <svg data-v-6984c41e="" data-v-85d56d7e="" xmlns="http://www.w3.org/2000/svg" width="48" height="48" viewBox="0 0 64 64" fill="none" class="btn_arr_big"><circle data-v-6984c41e="" cx="32" cy="31.9961" r="32" fill={theme === "light" ? "#000" : "#fff"}></circle> <path data-v-6984c41e="" d="M34.9292 25.5325L33.515 26.9467L38.1748 31.6065L23 31.6074V33.6015L38.1748 33.6005L33.515 38.2604L34.9292 39.6746L42.0002 32.6035L34.9292 25.5325Z" fill={theme === "light" ? "#fff" : "#000"}></path></svg>
                    </LinkBottom>
                </InnerBottomTypeBtn>
            </AreaVisual>

            <AreaWidget>
                <InnerfirstWidget>
                    <InnerSlideFirstLink href="https://www.kakaocorp.com/page/about/culture" target="_blank">
                        <InnerFirstImg>
                            <ImgFirst alt="카카오문화를 소개합니다." 
                            src={i18n.language === "ko" 
                            ? "//t1.kakaocdn.net/thumb/C544x544.fwebp.q100/?fname=https%3A%2F%2Ft1.kakaocdn.net%2Fkakaocorp%2Fkakaocorp%2Fadmin%2Fwidget%2Fae7546a6019600001.png"
                            : "https://t1.kakaocdn.net/thumb/C544x544.fwebp.q100/?fname=https%3A%2F%2Ft1.kakaocdn.net%2Fkakaocorp%2Fkakaocorp%2Fadmin%2Fwidget%2Fae768293019600001.png"}
                            draggable="false" />
                        </InnerFirstImg>
                    </InnerSlideFirstLink>
                </InnerfirstWidget>

                <InnerWidgetSecondWidget>
                    <StyledSwiper
                        theme={theme}
                        modules={[Autoplay, Pagination, EffectFade]}
                        spaceBetween={20}
                        slidesPerView={1}
                        loop={true}
                        autoplay={{ delay: 5000 }}
                        pagination={{ clickable: true }}
                        effect="fade"
                        fadeEffect={{ crossFade: true }}
                    >
                    {slides.map((item, index) => (
                        <SwiperSlide key={index}>
                            <SwiperSlideItem
                            theme={theme}
                            style={{
                                width: "206px",
                                height: "259px",
                                borderRadius: "24px",
                                display: "flex",
                                alignItems: "center",
                                justifyContent: "center"
                            }}
                            >
                                    <InnerSlideLink>
                                        <InnerSecond>
                                            <BadgeSecondTypeYellow>{item.badge}</BadgeSecondTypeYellow>
                                            <TitleSecond theme={theme} style={{ whiteSpace: 'pre-line' }}>
                                                {item.title}
                                            </TitleSecond>
                                            <WrapTags>
                                            {item.tags.map((tag, i) => (
                                                <ItemTag 
                                                    key={i}
                                                    theme={theme}
                                                    >
                                                    {tag}
                                                </ItemTag>
                                            ))}
                                            </WrapTags>
                                        </InnerSecond>
                                    </InnerSlideLink>
                                </SwiperSlideItem>
                            </SwiperSlide>
                    ))}
                    </StyledSwiper>
                </InnerWidgetSecondWidget>

                <InnerThirdWidget>
                    <InnerSlideThirdLink href="https://www.kakaocorp.com/page/service/service/KakaoTalk" target="_self" draggable="false" theme={theme}>

                        <InnerThirdFlex>
                            <IconThird src="//t1.kakaocdn.net/thumb/C80x80.fwebp.q100/?fname=https%3A%2F%2Ft1.kakaocdn.net%2Fkakaocorp%2Fkakaocorp%2Fadmin%2Fwidget%2Fae796489019600001.png" alt=""/>
                            
                            <TitleThird>{t("home.main.download")}</TitleThird>
                        </InnerThirdFlex>

                    </InnerSlideThirdLink>
                </InnerThirdWidget>
            </AreaWidget>
        </ContMainAreaBannerContainer>
    )
}

export default ContMainAreaBanner;