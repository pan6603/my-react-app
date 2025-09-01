import {
    MainContainer,
    InnerMain, 
    MainContent,
    ContentArticle,
    ContHome,
} from "../../styles/main/Main.styles"
import ContMainAreaBanner from "./ContMainAreaBanner";
import ContMainAreaStory from "./ContMainAreaStory";
import ContMainAreaService from "./ContMainAreaService";
import ContMainAreaNews from "./ContMainAreaNews";
import ContMainAreaResponsible from "./ContMainAreaResponsible";
import ContMainAreaHelp from "./ContMainAreaHelp";
import Header from "../../components/Header";
import Footer from "../../components/Footer";
import { lightTheme, darkTheme } from "../../styles/context/theme";
import { useTheme } from "../../components/context/ThemeContext";

function Main() {
    const { theme } = useTheme() 
    
    return (
        <>
            <Header />   
            <MainContainer theme={theme === 'light' ? lightTheme : darkTheme}>
                <InnerMain>
                    <MainContent>
                        <ContentArticle>
                            <ContHome>
                                <ContMainAreaBanner />
                                <ContMainAreaStory />
                                <ContMainAreaService />
                                <ContMainAreaNews />
                                <ContMainAreaResponsible />
                                <ContMainAreaHelp />
                            </ContHome>
                        </ContentArticle>
                        
                    </MainContent>
                </InnerMain>
            </MainContainer>
            <Footer />
        </>
 
    )
}

export default Main;