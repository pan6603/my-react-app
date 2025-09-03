import { 
    DocMain,
    SectionRelation,
    SectionNews,
    SectionVisual,
    SectionRelationTitle,
    ListRelation,
    ListRelationItem,
    LinkRelation,
    WrapRelationFirst,
    WrapRelationTwo,
    WrapRelationThird,
    TitRelation,
    TxtSub,
    TxtGoto,
    SectionNewsTitle,
    WrapBoard,
    WrapNews,
    LinkAllDiv,
    LinkAll,
    ListNews,
    LinkNewsDiv,
    InnerNews,
    BoxInfo,
    BadgeNews,
    TxtDate,
    TitNews,
    ListTag,
    ListTagItem,
    BoxBoard,
    TitBoard,
    ListBoard,
    LinkBoard,
    InnerBoard,
    TxtSubDiv,
    TxtEm,
    BorderLine,
    TxtSubDate,
    WrapVisual,
    WrapBanner,
    BoxStock,
    CarouselNotice,
    CarouselPost,
    BgDimmed,
    WrapMore,
    LinkVideo,
    BnrItem,
    TxtStock,
    EmphStockChangeDown,
    EmphStockTxtSub,
    StyledSwiper,
    InnerSlideLink,
    InnerSecond,
    TitNotice,
    SwiperSlideItem,
    AreaLinks,
    LinkItemPdf,
    LinkItemMusic,
    BoxPost,
    TwoInnerSlideLink,
    FirstInnerSlideLink,
    InnerPost,
    TitPost,
    BoxPostTxtDate,
    BoxPostStyledSwiper
} from "../../styles/ir/main/InverstmentMain.styles"
import CountUp from "react-countup"
import { SwiperSlide } from 'swiper/react';
import { Autoplay, Pagination, EffectFade } from 'swiper/modules'
import React from "react";

const twoSlides = [
    {
      title: <>2025년도 <br />연결재무제표</>
    },
    {
      title: <>2025년도 <br />2분기 실적발표</>,
      pdf: <><LinkItemPdf>PDF</LinkItemPdf></>,
      webCast: <><LinkItemMusic>웹 캐스트</LinkItemMusic></>
    }
];

const boxPostSlides = [
    {
        innerSlideLink: <>
        <FirstInnerSlideLink>
            <InnerPost>
                <TitPost>카카오 주주서한</TitPost>
                <BoxPostTxtDate>2024.05.16</BoxPostTxtDate>
            </InnerPost>
        </FirstInnerSlideLink></>
    },
    {
        innerSlideLink: <>
        <TwoInnerSlideLink>
            <InnerPost>
                <TitPost>공고사항</TitPost>
                <BoxPostTxtDate>자본금 감소 및 채권자 <br /> 이의제출 공고</BoxPostTxtDate>
            </InnerPost>
        </TwoInnerSlideLink></>
    }
]

function InverstmentMain() {

    return (
        <DocMain>
            <SectionVisual>
                <WrapVisual>
                    <BgDimmed>
                        <video data-v-85d56d7e="" data-v-bb1396d4="" src="https://t1.kakaocdn.net/kakaocorp/kakaocorp/admin/heroVisual/ef3f91ae019800001.mp4" poster="https://t1.kakaocdn.net/kakaocorp/kakaocorp/admin/heroVisual/ef3f9d11019800001.png?type=thumb&amp;opt=C1424x808.fwebp" autoplay="autoplay" muted="muted" loop="loop" playsinline="playsinline" type="video/mp4" class="item_visual"></video>
                    </BgDimmed>
                    
                </WrapVisual>
                <WrapMore>
                    <LinkVideo>
                        더 알아보기
                    </LinkVideo>
                </WrapMore>
                <WrapBanner>
                    <BoxStock>
                        <BnrItem>
                            <TxtStock>
                                <CountUp start={0} end={63600} duration={2} separator="," />
                            </TxtStock>
                            <EmphStockChangeDown>400 &nbsp;(-0.63%)</EmphStockChangeDown>
                            <EmphStockTxtSub>카카오 035720</EmphStockTxtSub>
                        </BnrItem>
                    </BoxStock>
                    <CarouselNotice>
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
                            {twoSlides.map((item, index) => (
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
                                                <TitNotice>{item.title}</TitNotice>
                                                <AreaLinks>
                                                    {item.pdf}
                                                    {item.webCast}
                                                </AreaLinks>
                                            </InnerSecond>
                                        </InnerSlideLink>
                                    </SwiperSlideItem>
                                </SwiperSlide>       
                            ))}
                        
                        </StyledSwiper>
                    </CarouselNotice>
                    <CarouselPost>
                        <BoxPost>
                            <BoxPostStyledSwiper
                                modules={[Autoplay, Pagination, EffectFade]}
                                spaceBetween={20}
                                slidesPerView={1}
                                loop={true}
                                autoplay={{ delay: 8000 }}
                                pagination={{ clickable: true }}
                                effect="fade"
                                fadeEffect={{ crossFade: true }}
                            >
                                {boxPostSlides.map((item, index) => (
                                    <SwiperSlide key={index}>
                                        <SwiperSlideItem
                                            style={{
                                                width: "206px",
                                                height: "206px",
                                                borderRadius: "24px",
                                                display: "flex",
                                                alignItems: "center",
                                                justifyContent: "center"
                                            }}    
                                        >
                                            {item.innerSlideLink}         
                                   
                                        </SwiperSlideItem>   
                                    </SwiperSlide>  
                                ))}
                       
                            </BoxPostStyledSwiper>
                        </BoxPost>
                    </CarouselPost>
                </WrapBanner>
            </SectionVisual>
            <SectionNews>
                <SectionNewsTitle>카카오 주요현황</SectionNewsTitle>
                <WrapBoard>
                    <BoxBoard>
                        <TitBoard>주주총회</TitBoard>
                        <ListBoard>
                            <LinkBoard>
                                <InnerBoard>
                                    <TxtEm>주주총회</TxtEm>
                                    <TxtSubDiv>바로가기</TxtSubDiv>
                                </InnerBoard>
                            </LinkBoard>
                            <BorderLine />
                            <LinkBoard>
                                <InnerBoard>
                                    <TxtEm>주주환원</TxtEm>
                                    <TxtSubDiv>바로가기</TxtSubDiv>
                                </InnerBoard>
                            </LinkBoard>
                        </ListBoard>
                    </BoxBoard>
                    <BoxBoard>
                        <TitBoard>IR 행사</TitBoard>
                        <ListBoard>
                            <LinkBoard>
                                <InnerBoard>
                                    <TxtEm>다올투자증권 국내 NDR</TxtEm>
                                    <TxtSubDate>2025-08-18</TxtSubDate>
                                </InnerBoard>
                            </LinkBoard>
                            <BorderLine />
                            <LinkBoard>
                                <InnerBoard>
                                    <TxtEm>메리츠증권 국내 NDR</TxtEm>
                                    <TxtSubDate>2025-08-13</TxtSubDate>
                                </InnerBoard>
                            </LinkBoard>
                        </ListBoard>
                    </BoxBoard>
                    <BoxBoard>
                        <TitBoard>최근 제출 보고서</TitBoard>
                        <ListBoard>
                            <LinkBoard>
                                <InnerBoard>
                                    <TxtEm>감사(검토)보고서</TxtEm>
                                    <TxtSubDiv>바로가기</TxtSubDiv>
                                </InnerBoard>
                            </LinkBoard>
                            <BorderLine />
                            <LinkBoard>
                                <InnerBoard>
                                    <TxtEm>사업(분·반기)보고서</TxtEm>
                                    <TxtSubDiv>바로가기</TxtSubDiv>
                                </InnerBoard>
                            </LinkBoard>
                        </ListBoard>
                    </BoxBoard>
                </WrapBoard>
                <WrapNews>
                    <ListNews>
                        <LinkNewsDiv>
                            <InnerNews>
                                <BoxInfo>
                                    <BadgeNews>보도자료</BadgeNews>
                                    <TxtDate>2025.08.21</TxtDate>
                                </BoxInfo>
                                <TitNews>카카오, ‘2025 찾아가는 카카오 클래스’ 오프라인 과정 참가자 모집</TitNews>
                                <ListTag>
                                    <ListTagItem>#카카오클래스</ListTagItem>
                                    <ListTagItem>#카카오</ListTagItem>
                                    <ListTagItem>#카카오채널</ListTagItem>
                                </ListTag>
                            </InnerNews>
                        </LinkNewsDiv>
                        <LinkNewsDiv>
                            <InnerNews>
                                <BoxInfo>
                                    <BadgeNews>보도자료</BadgeNews>
                                    <TxtDate>2025.08.20</TxtDate>
                                </BoxInfo>
                                <TitNews>
                                    카카오, ‘사이좋은 디지털 세상’ 10주년 맞아 AI 맞춤형 교육으로 개편···
                                    <br />
                                    2025년 2학기 참여 학교 ...
                                </TitNews>
                                <ListTag>
                                    <ListTagItem>#더가깝게카카오</ListTagItem>
                                    <ListTagItem>#사이좋은디지털세상</ListTagItem>
                                    <ListTagItem>#카카오 ...</ListTagItem>                
                                </ListTag>
                            </InnerNews>
                        </LinkNewsDiv>
                        <LinkNewsDiv>
                            <InnerNews>
                                <BoxInfo>
                                    <BadgeNews>보도자료</BadgeNews>
                                    <TxtDate>2025.08.14</TxtDate>
                                </BoxInfo>
                                <TitNews>
                                    카카오, ‘카카오테크 캠퍼스 아이디어톤’으로 전국 5개 국립대 손잡고 지역 기술 인재 양성 박차
                                </TitNews>
                                <ListTag>
                                    <ListTagItem>#ESG</ListTagItem>
                                    <ListTagItem>#기술인재양성</ListTagItem>
                                    <ListTagItem>#카카오테크 캠퍼스</ListTagItem>                
                                </ListTag>
                            </InnerNews>
                        </LinkNewsDiv>
                    </ListNews>
                </WrapNews>
                <LinkAllDiv>
                    <LinkAll>보도자료 전체보기</LinkAll>
                </LinkAllDiv>
            </SectionNews>
            <SectionRelation>
                <SectionRelationTitle>필요한 미래를 만드는 카카오</SectionRelationTitle>
                <ListRelation>
                    <ListRelationItem>
                        <LinkRelation>
                            <WrapRelationFirst>
                                <TitRelation>IR 미팅 예약</TitRelation>
                                <TxtSub>투자정보의 이해를 도와줄 커뮤니케이션 채널</TxtSub>
                                <TxtGoto>바로가기</TxtGoto>
                            </WrapRelationFirst>
                        </LinkRelation>
                    </ListRelationItem>
                    <ListRelationItem>
                        <LinkRelation>
                            <WrapRelationTwo>
                                <TitRelation>기업지배구조헌장</TitRelation>
                                <TxtSub>카카오 기업지배구조 헌장 확인하기</TxtSub>
                                <TxtGoto>바로가기</TxtGoto>
                            </WrapRelationTwo>
                        </LinkRelation>
                    </ListRelationItem>
                    <ListRelationItem>
                        <LinkRelation>
                            <WrapRelationThird>
                                <TitRelation>기업사이트</TitRelation>
                                <TxtSub>더 나은 세상을 만드는 카카오의 기업사이트</TxtSub>
                                <TxtGoto>바로가기</TxtGoto>
                            </WrapRelationThird>
                        </LinkRelation>
                    </ListRelationItem>
                </ListRelation>
                </SectionRelation>
        </DocMain>
    )
}

export default InverstmentMain