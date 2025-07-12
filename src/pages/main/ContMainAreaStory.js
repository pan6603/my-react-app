import { 
    ContMainAreaStoryContainer,
    TitleContTypeStory,
    TitleContTypeStorySpan,
    WrapTop,
    BtnStoryTypePause,
    InnerMainInnerStorySlider,
    LeftListStory,
    RightListStory
 } from "../../styles/main/ContMainAreaStory.styles";


function ContMainAreaStory () {
    const settings = {
        infinite: true,        // 무한 루프
        speed: 1000,           // 슬라이드 속도
        slidesToShow: 3,       // 화면에 보일 슬라이드 수
        slidesToScroll: 1,     // 한번에 넘길 슬라이드 수
        autoplay: true,        // 자동 재생
        autoplaySpeed: 2000,   // 자동 재생 간격(ms)
        arrows: true,          // 화살표 버튼
        dots: true             // 하단 점 네비게이션
    };

    return (
        <ContMainAreaStoryContainer>
            <TitleContTypeStory>
                <TitleContTypeStorySpan>카카오와 카카오 그룹이 축적해 온 이야기들</TitleContTypeStorySpan>
                <WrapTop>
                    <BtnStoryTypePause></BtnStoryTypePause>
                </WrapTop>
            </TitleContTypeStory>

            <InnerMainInnerStorySlider {...settings}>
                <LeftListStory></LeftListStory>
                <RightListStory></RightListStory>
            </InnerMainInnerStorySlider>
        
        </ContMainAreaStoryContainer>
    )
}

export default ContMainAreaStory;