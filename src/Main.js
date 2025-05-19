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
    max-width: 1316px;
    width: 100%;
    height: 621px;
    margin: 0 auto;
    display: flex;
    justify-content: space-between;
    align-items: center;
`

const AreaVisual = styled.div`
    max-width: 1094px;
    width: 100%;
    height: 621px;
    background-color: blue;
`

const AreaWidget = styled.div`
    max-width: 206px;
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

    &::after {
        content: "";
        width: 36px;
        height: 128px;
        top: -2px;
        right: -2px;
        z-index: 2;
        position: absolute;
        background-image: url("data:image/svg+xml;charset=utf-8,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 36 128'%3E%3Cpath d='M33.3 119.9c-5.1 0-9.9-1.1-14.3-3.2-4.4 5.7-11.3 9.3-19 9.3v2h36V0H0v2c13.3 0 24 10.7 24 24v76.9c.4 7 3.9 13.1 9.3 17' fill='%23fff' fill-rule='evenodd' clip-rule='evenodd'/%3E%3C/svg%3E");
    }
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
    background-color: red;
    border-radius: 24px;
`

const InnerThirdWidget = styled.div`
    max-width: 215px;
    width: 100%;
    height: 124px;
    border-radius: 24px;
`
const InnerSlideThirdLink = styled.a`
    max-width: 215px;
    width: 100%;
    height: 124px;
    border-radius: 24px;
    text-decoration: none;

`

const InnerThirdFlex = styled.div`
    max-width: 215px;
    width: 100%;
    height: 124px;
    border-radius: 24px;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    background-color: #fae100;
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
    background-color: green;
    display: block;
`


function Main() {
    return (
        <MainContainer>
            <InnerMain>
                <MainContent>
                    <ContentArticle>
                        <ContHome>
                            <ContMainAreaBanner>
                                <AreaVisual></AreaVisual>
                                <AreaWidget>
                                    <InnerfirstWidget>
                                        <InnerSlideFirstLink href="https://www.kakaocorp.com/page/about/culture" target="_blank">
                                            <InnerFirstImg>
                                                <ImgFirst alt="카카오문화를 소개합니다." src="//t1.kakaocdn.net/thumb/C544x544.fwebp.q100/?fname=https%3A%2F%2Ft1.kakaocdn.net%2Fkakaocorp%2Fkakaocorp%2Fadmin%2Fwidget%2Fae7546a6019600001.png" draggable="false" />
                                            </InnerFirstImg>
                                        </InnerSlideFirstLink>
                                    </InnerfirstWidget>
                                    <InnerSecondWidget></InnerSecondWidget>
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
                        </ContHome>
                    </ContentArticle>
                </MainContent>
            </InnerMain>
        </MainContainer>
    )
}

export default Main;