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
 import { useTheme } from "../../components/context/ThemeContext";


function ContMainAreaStory () {
    const stories = Array(2).fill(0); // 2개 복제
    const { theme } = useTheme()

    return (
        <ContMainAreaStoryContainer>
            <TitleContTypeStory theme={theme}>
                <TitleContTypeStorySpan theme={theme}>카카오와 카카오 그룹이 축적해 온 이야기들</TitleContTypeStorySpan>
                <WrapTop>
                    <BtnStoryTypePause theme={theme}></BtnStoryTypePause>
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