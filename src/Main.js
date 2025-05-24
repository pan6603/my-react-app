import styled from "styled-components";

const MainContainer = styled.main`
    max-width:1440px;
    width: 100%;
    height: 5457px;
    padding-top: 91px;
`

const InnerMain = styled.section`
    max-width: 1440px;
    width: 100%;
    height: 5467px;
    margin: 0 auto;
`

const MainContent = styled.div`
    max-width: 1440px;
    width: 100%;
    height: 5366px;
    margin: 0 auto;
`

const ContentArticle = styled.article`
    max-width: 1440px;
    width: 100%;
    height: 5366px;
    margin: 0 auto;
`

const ContHome = styled.div`
    max-width: 1440px;
    width: 100%;
    height: 5243px;
    margin: 0 auto;
`

const ContMainAreaBanner = styled.div`
    max-width: 1324px;
    width: 100%;
    height: 621px;
    margin: 0 auto;
    display: flex;
    justify-content: space-between;
    align-items: center;
`

const AreaVisual = styled.div`
    position: relative;
    max-width: 1094px;
    width: 100%;
    height: 621px;
    border-radius: 36px;
`

const WrapText = styled.div`
    position: absolute;
    left: 90px;
    top: 80px;
    color: #fff;
    max-width: 700px;
    width: 100%;
    height: 60px;
`

const TitleVisual = styled.strong`
    font-size: 48px;
    line-height: 1.25;
    font-weight: 400;
    letter-spacing: -1px;
    color: #fff;
`

const ItemVisualVideo = styled.video`
    position: absolute;
    max-width: 1104px;
    width: 100%;
    height: 621px;
    object-fit: contain;
    overflow: clip;
    overflow-clip-margin: content-box;
    border-radius: 36px;
`

const AreaWidget = styled.div`
    max-width: 215px;
    width: 100%;
    height: 621px;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
`
const InnerfirstWidget = styled.div`
    max-width: 206px;
    width: 100%;
    height: 206px;
    border-radius: 24px;
`

const InnerSlideFirstLink = styled.a`
    max-width: 206px;
    width: 100%;
    height: 206px;
    border-radius: 24px;
`

const InnerFirstImg = styled.div`
    max-width: 206px;
    width: 100%;
    height: 206px;
    border-radius: 24px;
`

const ImgFirst = styled.img`
    max-width: 206px;
    width: 100%;
    height: 206px;
    border-radius: 24px;
`

const InnerSecondWidget = styled.div`
    max-width: 206px;
    width: 100%;
    height: 259px;
    overflow: hidden;
    position: relative;
    border-radius: 24px;
`

const SlickTrack = styled.div`
    max-width: 206px;
    width: 100%;
    height: 259px;
    display: flex;
    transition: transform 0.5s ease;
`

const SlickSlide = styled.div`
    max-width: 206px;
    width: 100%;
    height: 259px;
    position: absolute;
    cursor: pointer;
    background-color: #F0F0F0;
`

const SlickDots = styled.ul`
    max-width: 64px;
    width: 100%;
    height: 24px;
    background-color: blue;
    position: absolute;
    flex-direction: column;
    left: 50%;
    bottom: -2%;
    transform: translateX(-50%);
    white-space: nowrap;
    display: inline-block;
`

const SelectedSlideIndex = styled.li`
    max-width: 24px;
    width: 100%;
    height: 24px;
    list-style: none;
    display: flex;
    justify-content: center;
    align-items: center;
`

const SelectedSlideIndexButtom = styled.button`
    padding: 4px;
    opacity: .45;
    border-radius: 10px;
`

const SecondInnerSlide = styled.a`
    max-width: 206px;
    width: 100%;
    height: 259px;
    cursor: pointer;
`

const InnerSecond = styled.div`
    max-width: 166px;
    width: 100%;
    height: 119px;
    margin: 20px auto;
    display: flex; 
    justify-content: center;
    flex-direction: column;
`

const InnerSecondSpan = styled.span`
    max-width: 100px;
    width: 100%;
    height: 32px;
    display: inline-block;
    border-radius: 8px;
    font-size: 14px;
    line-height: 1.78;
    letter-spacing: -.2px;
    background-color: #fae100;
    color: #000;
    font-weight: 400;
    display: flex;
    justify-content: center;
    align-items: center;
    margin-bottom: 8px;
`

const TitleSecond = styled.strong`
    line-height: 1.4;
    font-size: 18px;
    letter-spacing: -.6px;
    font-weight: 400;
    color: #000;
`

const WrapTags = styled.div`
    max-height: 174px;
    width: 100%;
    height: 20px;
    margin-top: 8px;
    display: flex;
    justify-content: space-around;
    align-items: center;
    margin-left: -8px;
    font-weight: 400;
`

const ItemTag = styled.span`
    font-size: 14px;
    letter-spacing: -.2px;
    line-height: 1.42;
    color: #666;
    
`

const TitleSecondBr = styled.br
`
`

const InnerThirdWidget = styled.div`
    position: relative; 
    max-width: 215px;
    width: 100%;
    height: 124px;

    &::after {
        content: "";
        width: 36px;
        height: 128px;
        top: -2px;
        right: -2px;
        z-index: 2;
        position: relative;
        background-image: url("data:image/svg+xml;charset=utf-8,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 36 128'%3E%3Cpath d='M33.3 119.9c-5.1 0-9.9-1.1-14.3-3.2-4.4 5.7-11.3 9.3-19 9.3v2h36V0H0v2c13.3 0 24 10.7 24 24v76.9c.4 7 3.9 13.1 9.3 17' fill='%23fff' fill-rule='evenodd' clip-rule='evenodd'/%3E%3C/svg%3E");
    }
`
const InnerSlideThirdLink = styled.a`
    max-width: 215px;
    width: 100%;
    height: 124px;
    text-decoration: none;

    &::after {
        content: "";
        width: 36px;
        height: 128px;
        top: -2px;
        right: 0px;
        z-index: 2;
        position: absolute;
        background-image: url("data:image/svg+xml;charset=utf-8,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 36 128'%3E%3Cpath d='M33.3 119.9c-5.1 0-9.9-1.1-14.3-3.2-4.4 5.7-11.3 9.3-19 9.3v2h36V0H0v2c13.3 0 24 10.7 24 24v76.9c.4 7 3.9 13.1 9.3 17' fill='%23fff' fill-rule='evenodd' clip-rule='evenodd'/%3E%3C/svg%3E");
    }

`

const InnerThirdFlex = styled.div`
    max-width: 215px;
    width: 100%;
    height: 124px;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    background-color: #fae100;
    border-radius: 24px 0 0 24px;
`

const IconThird = styled.img`
    max-width: 40px;
    width: 100%;
    height: 40px;
`

const TitleThird = styled.span`
    font-size: 16px;
    line-height: 1.36;
    letter-spacing: -.6px;
    color: #000;
`


const ContMainAreaStory = styled.div`
    max-width: 1316px;
    width: 100%;
    height: 621px;
    margin: 0 auto;
    display: block;
    background-color: red;
`
const ContMainAreaNews = styled.div`
    max-width: 1316px;
    width: 100%;
    height: 1100px;
    margin: 0 auto;
`

const ContMainAreaNewsTitle = styled.h3`
    max-width: 1316px;
    width: 100%;
    height: 72px;
    font-size: 48px;
    line-height: 72px;
    letter-spacing: -1px;
    color: #000;
    font-weight: 400;

    &::before {
        content: "";
        display: inline-block;
        vertical-align: top;
        max-width: 72px;
        width: 100%;
        height: 72px;
        margin-right: 16px;
        background-size: 100%;
        background-image: url(https://t1.kakaocdn.net/kakaocorp/kakaocorp/service/calendar/light/ico_date25.gif)
  }

`

const InnerMainInnerNews = styled.div`
    max-width: 1316px;
    width: 100%;
    height: 985px;
    display: flex;
    flex-direction: column;
    justify-content: space-between;

`

const WrapTop = styled.div`
    max-width: 1332px;
    width: 100%;
    height: 621px;
`

const WrapTopSlickSlider = styled.div`
    max-width: 1332px;
    width: 100%;
    height: 621px;
`

const WrapTopSlickList = styled.div`
    max-width: 1332px;
    width: 100%;
    height: 621px;
`

const WrapTopSlickTrack = styled.div`
    max-width: 1332px;
    width: 100%;
    height: 621px;
    display: flex;
    justify-content: space-between;
    
`

const SlickTrackSlickSlide = styled.div`
    max-width: 444px;
    width: 100%;
    height: 621px;
    background-color: blue;
`

const WrapBottom = styled.div`
    max-width: 1316px;
    width: 100%;
    height: 324px;
    background-color: blue;
`



function Main() {
    return (
        <MainContainer>
            <InnerMain>
                <MainContent>
                    <ContentArticle>
                        <ContHome>
                            <ContMainAreaBanner>
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
                            </ContMainAreaBanner>
                            <ContMainAreaStory></ContMainAreaStory>
                            <ContMainAreaNews>
                                <ContMainAreaNewsTitle>오늘의 뉴스</ContMainAreaNewsTitle>
                                <InnerMainInnerNews>
                                    <WrapTop>
                                        <WrapTopSlickSlider>
                                            <WrapTopSlickList>
                                                <WrapTopSlickTrack>
                                                    <SlickTrackSlickSlide></SlickTrackSlickSlide>
                                                    <SlickTrackSlickSlide></SlickTrackSlickSlide>
                                                    <SlickTrackSlickSlide></SlickTrackSlickSlide>
                                                </WrapTopSlickTrack>
                                            </WrapTopSlickList>
                                        </WrapTopSlickSlider>
                                    </WrapTop>
                                    <WrapBottom></WrapBottom>
                                </InnerMainInnerNews>
                            </ContMainAreaNews>
                        </ContHome>
                    </ContentArticle>
                    
                </MainContent>
            </InnerMain>
        </MainContainer>
    )
}

export default Main;