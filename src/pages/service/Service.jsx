import Header from "../../components/Header";
import Footer from "../../components/Footer";
import React, { useState } from 'react'; 
import { 
    MainContent, 
    ContentArticle,
    TitMain,
    EmphTit,
    TxtTit,
    SectionService,
    WrapTabs,
    ListTab,
    LinkTabDiv,
    LinkTab
} from "../../styles/pages/service/service.styles";


function Service() {
    const [TabMenu, setTabMenu] = useState("entire");

    const CategoryTabs = (menu) => {
        setTabMenu(menu);     
    }

    return (
        <>
            <Header />
            <MainContent>
                <ContentArticle>
                    <TitMain>
                        <EmphTit>서비스</EmphTit>
                        <TxtTit>더 나은 세상을 만드는 카카오</TxtTit>
                    </TitMain>
                    <SectionService>
                        <WrapTabs>
                            <ListTab>
                                <LinkTabDiv>
                                    <LinkTab 
                                        onClick={() => CategoryTabs("entire")}
                                        isActive={TabMenu === "entire"} 
                                        >
                                        전체
                                        </LinkTab>
                                </LinkTabDiv>
                                <LinkTabDiv>
                                    <LinkTab
                                        onClick={() => CategoryTabs("communication")}
                                        isActive={TabMenu === "communication"} 
                                    >
                                    커뮤니케이션
                                    </LinkTab>
                                </LinkTabDiv>
                                <LinkTabDiv>
                                    <LinkTab
                                        onClick={() => CategoryTabs("life")}
                                        isActive={TabMenu === "life"}
                                    >
                                    일상 편의 
                                    </LinkTab>
                                </LinkTabDiv>
                                <LinkTabDiv>
                                    <LinkTab 
                                         onClick={() => CategoryTabs("business")}
                                         isActive={TabMenu === "business"}
                                    >
                                    비즈니스
                                    </LinkTab>
                                </LinkTabDiv>
                                <LinkTabDiv> 
                                    <LinkTab 
                                        onClick={() => CategoryTabs("shopping")}
                                        isActive={TabMenu === "shopping"}
                                    >
                                    쇼핑
                                    </LinkTab>
                                </LinkTabDiv>
                                <LinkTabDiv>
                                    <LinkTab 
                                        onClick={() => CategoryTabs("entertainment")}
                                        isActive={TabMenu === "entertainment"}
                                    >
                                    엔터테인먼트
                                    </LinkTab>
                                </LinkTabDiv>
                                <LinkTabDiv>
                                    <LinkTab
                                        onClick={() => CategoryTabs("social_impact")}
                                        isActive={TabMenu === "social_impact"}
                                    >
                                    소셜임팩트
                                    </LinkTab>
                                </LinkTabDiv>
                            </ListTab>
                        </WrapTabs>
                    </SectionService>
                </ContentArticle>
            </MainContent>
            <Footer />
        </>
    )
}

export default Service;