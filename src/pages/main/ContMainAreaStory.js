// ContMainAreaStory.js
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
import { useRef, useEffect, useState } from "react";

function ContMainAreaStory() {
    const slidesCount = 10; // 충분히 많은 복제본
    const { theme } = useTheme();
    const slideTrackRef = useRef(null);
    const scrollX = useRef(0);
    const [paused, setPaused] = useState(false);

    useEffect(() => {
        const slideTrack = slideTrackRef.current;
        if (!slideTrack) return;
    
        const speed = 0.6; // 이동 속도 (픽셀/프레임)
        let requestId;
    
        const animate = () => {
            
            scrollX.current += speed;

            // 끝까지 가면 처음으로
            if (scrollX.current >= slideTrack.scrollWidth / 2) {
                // scrollX.current = 0;
            }

            slideTrack.style.transform = `translateX(-${scrollX.current}px)`;

            // 다음 프레임 요청
            requestId = requestAnimationFrame(animate);
            
        };
    
        // animate 시작
        requestId = requestAnimationFrame(animate);
    
        return () => cancelAnimationFrame(requestId);
    });
    
    
    

    // slidesCount만큼 ListStory를 반복
    const stories = Array(slidesCount).fill(0);

    return (
        <ContMainAreaStoryContainer>
            <TitleContTypeStory theme={theme}>
                <TitleContTypeStorySpan theme={theme}>
                    카카오와 카카오 그룹이 축적해 온 이야기들
                </TitleContTypeStorySpan>
                <WrapTop>
                    <BtnStoryTypePause 
                        theme={theme}
                        paused={paused}
                        onClick={() => setPaused(prev => !prev)} 
                    />
                </WrapTop>
            </TitleContTypeStory>

            <InnerMainInnerStory>
                <SlideTrack ref={slideTrackRef}>
                    {stories.map((_, index) => (
                        <ListStory key={index} />
                    ))}
                </SlideTrack>
            </InnerMainInnerStory>
        </ContMainAreaStoryContainer>
    );
}

export default ContMainAreaStory;
