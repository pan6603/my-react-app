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


function Main() {
    return (
        <MainContainer>
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
    )
}

export default Main;