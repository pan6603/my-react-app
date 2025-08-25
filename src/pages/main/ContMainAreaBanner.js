import { 
    ContMainAreaBannerContainer,
    AreaVisual,
    ItemVisualVideo,
    WrapText,
    TitleVisual,
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

const slides = [
    {
      badge: "카카오의 기술",
      title: <>AI 서비스를 <br /> 내 일상 속으로</>,
      tags: ["#AI", "#오픈AI", "#전략적제휴"]
    },
    {
      badge: "카톡설명서",
      title: <>모두의 카톡을 <br /> 더 가깝고 안전하게</>,
      tags: ["#업데이트소식", "#톡활용팁"]
    }
];

function ContMainAreaBanner() {
    return (
        <ContMainAreaBannerContainer>
            <AreaVisual>
                <ItemVisualVideo src="https://t1.kakaocdn.net/kakaocorp/kakaocorp/admin/heroVisual/d6b781eb019600001.mp4" muted="muted" loop="loop" type="video/mp4" autoplay="autoplay" playsinline="playsinline" />

                <WrapText>
                    <TitleVisual>다시 한 번 세상을 놀랍게!</TitleVisual>
                </WrapText>
                <InnerBottomTypeBtn>
                    <LinkBottom>
                        자세히 알아보기
                        <svg data-v-6984c41e="" data-v-85d56d7e="" xmlns="http://www.w3.org/2000/svg" width="48" height="48" viewBox="0 0 64 64" fill="none" class="btn_arr_big"><circle data-v-6984c41e="" cx="32" cy="31.9961" r="32" fill="black"></circle> <path data-v-6984c41e="" d="M34.9292 25.5325L33.515 26.9467L38.1748 31.6065L23 31.6074V33.6015L38.1748 33.6005L33.515 38.2604L34.9292 39.6746L42.0002 32.6035L34.9292 25.5325Z" fill="white"></path></svg>
                    </LinkBottom>
                </InnerBottomTypeBtn>
            </AreaVisual>
            <AreaWidget>
                <InnerfirstWidget>
                    <InnerSlideFirstLink href="https://www.kakaocorp.com/page/about/culture" target="_blank">
                        <InnerFirstImg>
                            <ImgFirst alt="카카오문화를 소개합니다." src="//t1.kakaocdn.net/thumb/C544x544.fwebp.q100/?fname=https%3A%2F%2Ft1.kakaocdn.net%2Fkakaocorp%2Fkakaocorp%2Fadmin%2Fwidget%2Fae7546a6019600001.png" draggable="false" />
                        </InnerFirstImg>
                    </InnerSlideFirstLink>
                </InnerfirstWidget>

                <InnerWidgetSecondWidget>
                    <StyledSwiper
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
                                        <TitleSecond>{item.title}</TitleSecond>
                                        <WrapTags>
                                        {item.tags.map((tag, i) => (
                                            <ItemTag key={i}>{tag}</ItemTag>
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
                    <InnerSlideThirdLink href="https://www.kakaocorp.com/page/service/service/KakaoTalk" target="_self" draggable="false">

                        <InnerThirdFlex>
                            <IconThird src="//t1.kakaocdn.net/thumb/C80x80.fwebp.q100/?fname=https%3A%2F%2Ft1.kakaocdn.net%2Fkakaocorp%2Fkakaocorp%2Fadmin%2Fwidget%2Fae796489019600001.png" alt=""/>

                            <TitleThird>카카오톡 다운로드</TitleThird>
                        </InnerThirdFlex>

                    </InnerSlideThirdLink>
                </InnerThirdWidget>
            </AreaWidget>
        </ContMainAreaBannerContainer>
    )
}

export default ContMainAreaBanner;