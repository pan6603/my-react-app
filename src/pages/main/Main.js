import {
    MainContainer,
    InnerMain, 
    MainContent,
    ContentArticle,
    ContHome,
    Overlay
} from "../../styles/main/Main.styles"
import ContMainAreaBanner from "./ContMainAreaBanner";
import ContMainAreaStory from "./ContMainAreaStory";
import ContMainAreaService from "./ContMainAreaService";
import ContMainAreaNews from "./ContMainAreaNews";
import ContMainAreaResponsible from "./ContMainAreaResponsible";
import ContMainAreaHelp from "./ContMainAreaHelp";
import Header from "../../components/Header";
import Footer from "../../components/Footer";
import SearchLayer from "../../components/SearchLayer";
import { lightTheme, darkTheme } from "../../styles/context/theme";
import { useTheme } from "../../components/context/ThemeContext";
import React, { useState } from "react";

function Main() {
    const { theme } = useTheme() 

    const [isSearchOpen, setIsSearchOpen] = useState(false);

    const openSearch = () => setIsSearchOpen(true);
    const closeSearch = () => setIsSearchOpen(false);
    
    return (
        <>
            <Header openSearch={openSearch} />   
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

            {isSearchOpen && <Overlay />}

            {isSearchOpen && <SearchLayer theme={theme} closeSearch={closeSearch} />}

        </>
 
    )
}

export default Main;