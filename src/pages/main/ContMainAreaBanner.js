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
    InnerSecondWidget,
    SlickTrack,
    SlickSlide,
    SecondInnerSlide,
    InnerSecond,
    InnerSecondSpan,
    TitleSecond,
    TitleSecondBr,
    WrapTags,
    ItemTag,
    InnerThirdWidget,
    InnerSlideThirdLink,
    InnerThirdFlex,
    IconThird,
    TitleThird,
    SelectedSlideIndex,
    SelectedSlideIndexButtom,
    AreaWidget,
    SlickDots
} from "../../styles/main/ContMainAreaBanner.styles";



function ContMainAreaBanner() {
    return (
        <ContMainAreaBannerContainer>
            <AreaVisual>
                <ItemVisualVideo src="https://t1.kakaocdn.net/kakaocorp/kakaocorp/admin/heroVisual/d6b781eb019600001.mp4" poster="https://t1.kakaocdn.net/kakaocorp/kakaocorp/admin/heroVisual/d6b79a46019600001.png?type=thumb&amp;opt=C1424x808.fwebp" muted="muted" loop="loop" type="video/mp4" />

                <WrapText>
                    <TitleVisual>다시 한 번 세상을 놀랍게!</TitleVisual>
                </WrapText>
            </AreaVisual>
            <AreaWidget>
                <InnerfirstWidget>
                    <InnerSlideFirstLink href="https://www.kakaocorp.com/page/about/culture" target="_blank">
                        <InnerFirstImg>
                            <ImgFirst alt="카카오문화를 소개합니다." src="//t1.kakaocdn.net/thumb/C544x544.fwebp.q100/?fname=https%3A%2F%2Ft1.kakaocdn.net%2Fkakaocorp%2Fkakaocorp%2Fadmin%2Fwidget%2Fae7546a6019600001.png" draggable="false" />
                        </InnerFirstImg>
                    </InnerSlideFirstLink>
                </InnerfirstWidget>

                <InnerSecondWidget>
                    <SlickTrack>
                        <SlickSlide>
                            <SecondInnerSlide>
                                <InnerSecond>
                                    <InnerSecondSpan>카카오의 기술</InnerSecondSpan>
                                    <TitleSecond>
                                        AI 서비스를 
                                        <TitleSecondBr />
                                        내 일상 속으로
                                    </TitleSecond>
                                    <WrapTags>
                                        <ItemTag>#AI</ItemTag>
                                        <ItemTag>#오픈AI</ItemTag>
                                        <ItemTag>#전략적제휴</ItemTag>
                                    </WrapTags>
                                </InnerSecond>
                            </SecondInnerSlide>
                            <SlickDots>
                                <SelectedSlideIndex>
                                    <SelectedSlideIndexButtom></SelectedSlideIndexButtom>
                                </SelectedSlideIndex>
                            </SlickDots>
                        </SlickSlide>
                    </SlickTrack>
                </InnerSecondWidget>

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