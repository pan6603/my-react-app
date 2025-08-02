import { 
    ContMainAreaStoryContainer,
    TitleContTypeStory,
    TitleContTypeStorySpan,
    WrapTop,
    BtnStoryTypePause,
    InnerMainInnerStory,
    SlideTrack
 } from "../../styles/main/ContMainAreaStory.styles";
 import ListStory from "./ListStory";


function ContMainAreaStory () {
    const stories = Array(2).fill(0); // 2개 복제
 
    return (
        <ContMainAreaStoryContainer>
            <TitleContTypeStory>
                <TitleContTypeStorySpan>카카오와 카카오 그룹이 축적해 온 이야기들</TitleContTypeStorySpan>
                <WrapTop>
                    <BtnStoryTypePause></BtnStoryTypePause>
                </WrapTop>
            </TitleContTypeStory>

            <InnerMainInnerStory>
                <SlideTrack>
                {stories.map((_, index) => (
                    <ListStory key={index} />
            ))}        
                </SlideTrack>
            </InnerMainInnerStory>
      
        </ContMainAreaStoryContainer>
    )
}

export default ContMainAreaStory;