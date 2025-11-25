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
    BoxPostStyledSwiper,
    BgDimmedVideo,
    CarouselPostSwiperSlideItem
} from "../../styles/ir/main/InverstmentMain.styles"
import CountUp from "react-countup"
import { SwiperSlide } from 'swiper/react';
import { Autoplay, Pagination, EffectFade } from 'swiper/modules'
import React from "react";
import { useTranslation } from "react-i18next";


function InverstmentMain() {
    const { t } = useTranslation();

    const twoSlides = [
        {
          title: <>{t("carouselnotice.tit_notice_financial_statement")}</>
        },
        {
          title: <>{t("carouselnotice.tit_notice_earnings")}</>,
          pdf: <><LinkItemPdf>{t("carouselnotice.pdf")}</LinkItemPdf></>,
          webCast: <><LinkItemMusic>{t("carouselnotice.webcast")}</LinkItemMusic></>
        }
    ];

    const boxPostSlides = [
        {
            innerSlideLink: <>
            <FirstInnerSlideLink>
                <InnerPost>
                    <TitPost style={{ whiteSpace: 'pre-line' }}>{t("boxpostslides.ceo_titpost")}</TitPost>
                    <BoxPostTxtDate>2024.05.16</BoxPostTxtDate>
                </InnerPost>
            </FirstInnerSlideLink></>,
            bgColor: "#FAE100" // 노랑
        },
        {
            innerSlideLink: <>
            <TwoInnerSlideLink>
                <InnerPost>
                    <TitPost>{t("boxpostslides.notice_titpost")}</TitPost>
                    <BoxPostTxtDate>{t("boxpostslides.notice_boxpost_txtdate")}</BoxPostTxtDate>
                </InnerPost>
            </TwoInnerSlideLink></>,
            bgColor: "#0073FF" // 파랑
        }
    ]

    return (
        <DocMain>
            <SectionVisual>
                <WrapVisual>
                    <BgDimmed>
                        <BgDimmedVideo data-v-85d56d7e="" data-v-bb1396d4="" src="https://t1.kakaocdn.net/kakaocorp/Ir/images/video_main_250522.mp4" poster="https://t1.kakaocdn.net/kakaocorp/Ir/images/poster_image_250522.png" autoplay="autoplay" muted="muted" loop="loop" playsinline="playsinline" type="video/mp4" class="item_visual"></BgDimmedVideo>
                    </BgDimmed>
                    
                </WrapVisual>
                <WrapMore>
                    <LinkVideo>
                        {t("wrapmore.linkvideo")}
                    </LinkVideo>
                </WrapMore>
                <WrapBanner>
                    <BoxStock>
                        <BnrItem>
                            <TxtStock>
                                <CountUp start={0} end={63600} duration={2} separator="," />
                            </TxtStock>
                            <EmphStockChangeDown>400 &nbsp;(-0.63%)</EmphStockChangeDown>
                            <EmphStockTxtSub>{t("boxstock.bnritem.emphstocktxtsub")}</EmphStockTxtSub>
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
                                    <SwiperSlideItem>
                                        <InnerSlideLink>
                                            <InnerSecond>
                                                <TitNotice>
                                                    {item.title}
                                                </TitNotice>
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
                                        <CarouselPostSwiperSlideItem style={{ backgroundColor: item.bgColor }}>
                                            {item.innerSlideLink}
                                        </CarouselPostSwiperSlideItem>   
                                    </SwiperSlide>  
                                ))}
                       
                            </BoxPostStyledSwiper>
                        </BoxPost>
                    </CarouselPost>
                </WrapBanner>
            </SectionVisual>
            
            <SectionNews>
                <SectionNewsTitle>{t("section_news.section_news_title")}</SectionNewsTitle>
                <WrapBoard>
                    <BoxBoard>
                        <TitBoard>
                            {t("wrapboard.first_box_board.tit_board")}
                        </TitBoard>
                        <ListBoard>
                            <LinkBoard>
                                <InnerBoard>
                                    <TxtEm>
                                        {t("wrapboard.first_box_board.first_inner_board.txtem")}
                                    </TxtEm>
                                    <TxtSubDiv>
                                        {t("wrapboard.first_box_board.first_inner_board.txt_sub_div")}
                                    </TxtSubDiv>
                                </InnerBoard>
                            </LinkBoard>
                            
                            <LinkBoard>
                                <InnerBoard>
                                    <TxtEm>
                                        {t("wrapboard.first_box_board.two_inner_board.txtem")}
                                    </TxtEm>
                                    <TxtSubDiv>
                                        {t("wrapboard.first_box_board.two_inner_board.txt_sub_div")}
                                    </TxtSubDiv>
                                </InnerBoard>
                            </LinkBoard>
                        </ListBoard>
                    </BoxBoard>
                    <BoxBoard>
                        <TitBoard>
                            {t("wrapboard.two_box_board.tit_board")}
                        </TitBoard>
                        <ListBoard>
                            <LinkBoard>
                                <InnerBoard>
                                    <TxtEm>
                                        {t("wrapboard.two_box_board.first_inner_board.txtem")}
                                    </TxtEm>
                                    <TxtSubDate>
                                        {t("wrapboard.two_box_board.first_inner_board.txt_sub_div")}
                                    </TxtSubDate>
                                </InnerBoard>
                            </LinkBoard>

                            <LinkBoard>
                                <InnerBoard>
                                    <TxtEm>
                                        {t("wrapboard.two_box_board.two_inner_board.txtem")}
                                    </TxtEm>
                                    <TxtSubDate>
                                        {t("wrapboard.two_box_board.two_inner_board.txt_sub_div")}
                                    </TxtSubDate>
                                </InnerBoard>
                            </LinkBoard>
                        </ListBoard>
                    </BoxBoard>
                    <BoxBoard>
                        <TitBoard>
                            {t("wrapboard.three_box_board.tit_board")}
                        </TitBoard>
                        <ListBoard>
                            <LinkBoard>
                                <InnerBoard>
                                    <TxtEm>
                                        {t("wrapboard.three_box_board.first_inner_board.txtem")}
                                    </TxtEm>
                                    <TxtSubDiv>
                                        {t("wrapboard.three_box_board.first_inner_board.txt_sub_div")}
                                    </TxtSubDiv>
                                </InnerBoard>
                            </LinkBoard>
                            <LinkBoard>
                                <InnerBoard>
                                    <TxtEm>
                                        {t("wrapboard.three_box_board.two_inner_board.txtem")}    
                                    </TxtEm>
                                    <TxtSubDiv>
                                        {t("wrapboard.three_box_board.two_inner_board.txt_sub_div")}
                                    </TxtSubDiv>
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
                                    <BadgeNews>
                                        {t("badgenews")}
                                    </BadgeNews>
                                    <TxtDate>2025.08.21</TxtDate>
                                </BoxInfo>
                                <TitNews>
                                    {t("first_tit_news")}    
                                </TitNews>
                                <ListTag>
                                    <ListTagItem>{t("list_tag.kakao_class")}</ListTagItem>
                                    <ListTagItem>{t("list_tag.kakao")}</ListTagItem>
                                    <ListTagItem>{t("list_tag.kakao_channel")}</ListTagItem>
                                </ListTag>
                            </InnerNews>
                        </LinkNewsDiv>
                        
                        <LinkNewsDiv>
                            <InnerNews>
                                <BoxInfo>
                                    <BadgeNews>
                                        {t("badgenews")}
                                    </BadgeNews>
                                    <TxtDate>2025.08.20</TxtDate>
                                </BoxInfo>
                                <TitNews>
                                    {t("two_tit_news")}    
                                </TitNews>
                                <ListTag>
                                    <ListTagItem>{t("list_tag.closer_to_kakao")}</ListTagItem>
                                    <ListTagItem>{t("list_tag.digital_world")}</ListTagItem>
                                    <ListTagItem>{t("list_tag.kakao")} ...</ListTagItem>                
                                </ListTag>
                            </InnerNews>
                        </LinkNewsDiv>

                        <LinkNewsDiv>
                            <InnerNews>
                                <BoxInfo>
                                    <BadgeNews>
                                        {t("badgenews")}
                                    </BadgeNews>
                                    <TxtDate>2025.08.14</TxtDate>
                                </BoxInfo>
                                <TitNews>
                                    {t("three_tit_news")}
                                </TitNews>
                                <ListTag>
                                    <ListTagItem>#ESG</ListTagItem>
                                    <ListTagItem>{t("list_tag.technical_talent")}</ListTagItem>
                                    <ListTagItem>{t("list_tag.kakao_tech_campus")}</ListTagItem>                
                                </ListTag>
                            </InnerNews>
                        </LinkNewsDiv>
                    </ListNews>
                </WrapNews>
                
                <LinkAllDiv>
                    <LinkAll>
                        {t("link_all")}
                    </LinkAll>
                </LinkAllDiv>
            </SectionNews>

            <SectionRelation>
                <SectionRelationTitle>
                    {t("section_relation.section_relation_title")}
                </SectionRelationTitle>
                <ListRelation>
                    <ListRelationItem>
                        <LinkRelation>
                            <WrapRelationFirst>
                                <TitRelation>{t("section_relation.tit_relation")}</TitRelation>
                                <TxtSub>{t("section_relation.txt_sub")}</TxtSub>
                                <TxtGoto>{t("section_relation.txt_goto")}</TxtGoto>
                            </WrapRelationFirst>
                        </LinkRelation>
                    </ListRelationItem>
                    
                    <ListRelationItem>
                        <LinkRelation>
                            <WrapRelationTwo>
                                <TitRelation>
                                    {t("section_relation.governance_section_relation_title")}
                                </TitRelation>
                                <TxtSub>
                                    {t("section_relation.governance_txt_sub")}
                                </TxtSub>
                                <TxtGoto>
                                    {t("section_relation.governance_txt_goto")}
                                </TxtGoto>
                            </WrapRelationTwo>
                        </LinkRelation>
                    </ListRelationItem>
                    <ListRelationItem>
                        <LinkRelation>
                            <WrapRelationThird>
                                <TitRelation>
                                    {t("section_relation.kakao_website_section_relation_title")}
                                </TitRelation>
                                <TxtSub>
                                    {t("section_relation.kakao_website_txt_sub")}
                                </TxtSub>
                                <TxtGoto>
                                    {t("section_relation.kakao_website_txt_goto")}
                                </TxtGoto>
                            </WrapRelationThird>
                        </LinkRelation>
                    </ListRelationItem>
                </ListRelation>
                </SectionRelation>
        </DocMain>
    )
}

export default InverstmentMain