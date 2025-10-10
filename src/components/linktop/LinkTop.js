import { 
    ScrollToTopButton,
    IcoTop
} from "../../styles/linktop/LinkTop.styles";
import { useEffect, useState } from "react";



function LinkTop() {
    const [visible, setVisible] = useState(false);

    const handleScroll = () => {
        // 스크롤이 일정 이상 내려가면 버튼 보이기
        if (window.scrollY > 300) {
            setVisible(true);
        } else {
            setVisible(false);
        }
    };
    
    const scrollToTop = () => {
        // behavior: "smooth" -> 부드럽게 스크롤 
        window.scrollTo({ top: 0, behavior: "smooth" });
    };
    
    useEffect(() => {
        window.addEventListener("scroll", handleScroll);
        return () => window.removeEventListener("scroll", handleScroll);
    }, []);

    return (
        visible && (
            <ScrollToTopButton onClick={scrollToTop}>
                <IcoTop data-v-10784264="" data-v-8c7d6b0a="" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 50 50" class="ico_top"><g data-v-10784264="" fill="black" fill-rule="evenodd"><g data-v-10784264="" transform="translate(-1318 -4124) translate(1318 4124)"><circle data-v-10784264="" cx="25" cy="25" r="25"></circle> <g data-v-10784264="" stroke="white" stroke-width="1.5" class="stroke"><path data-v-10784264="" d="M8.467 16.933L0 8.467 8.467 0M.085 8.467L19.918 8.534" transform="rotate(90 9.5 24)"></path></g></g></g>
                </IcoTop>
            </ScrollToTopButton>
        )
    )
}

export default LinkTop; 