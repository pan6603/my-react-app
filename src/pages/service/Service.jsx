import Header from "../../components/Header";
import Footer from "../../components/Footer";
import React, { useState } from 'react'; 
import { 
    DocMain,
    InnerMain,
    MainContent, 
    ContentArticle,
    TitMain,
    EmphTit,
    TxtTit,
    SectionService,
    WrapTabs,
    ListTab,
    LinkTabDiv,
    LinkTab,
    ListCardNew,
} from "../../styles/pages/service/service.styles";
import LinkTop from "../../components/linktop/LinkTop";
import SocialImpact from "./tab/SocialImpact";
import Entertainment from "./tab/Entertainment";
import Shopping from "./tab/Shopping";
import Business from "./tab/Business";
import Life from "./tab/Life";
import Communication from "./tab/Communication";


function Service() {
    const [tabMenu, setTabMenu] = useState("entire");

    const CategoryTabs = (menu) => {
        setTabMenu(menu);     
    }

    return (
        <>
            <Header />
            <DocMain>
                <InnerMain>
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
                                                isActive={tabMenu === "entire"} 
                                                >
                                                전체
                                                </LinkTab>
                                        </LinkTabDiv>
                                        <LinkTabDiv>
                                            <LinkTab
                                                onClick={() => CategoryTabs("communication")}
                                                isActive={tabMenu === "communication"} 
                                            >
                                            커뮤니케이션
                                            </LinkTab>
                                        </LinkTabDiv>
                                        <LinkTabDiv>
                                            <LinkTab
                                                onClick={() => CategoryTabs("life")}
                                                isActive={tabMenu === "life"}
                                            >
                                            일상 편의 
                                            </LinkTab>
                                        </LinkTabDiv>
                                        <LinkTabDiv>
                                            <LinkTab 
                                                onClick={() => CategoryTabs("business")}
                                                isActive={tabMenu === "business"}
                                            >
                                            비즈니스
                                            </LinkTab>
                                        </LinkTabDiv>
                                        <LinkTabDiv> 
                                            <LinkTab 
                                                onClick={() => CategoryTabs("shopping")}
                                                isActive={tabMenu === "shopping"}
                                            >
                                            쇼핑
                                            </LinkTab>
                                        </LinkTabDiv>
                                        <LinkTabDiv>
                                            <LinkTab 
                                                onClick={() => CategoryTabs("entertainment")}
                                                isActive={tabMenu === "entertainment"}
                                            >
                                            엔터테인먼트
                                            </LinkTab>
                                        </LinkTabDiv>
                                        <LinkTabDiv>
                                            <LinkTab
                                                onClick={() => CategoryTabs("social_impact")}
                                                isActive={tabMenu === "social_impact"}
                                            >
                                            소셜임팩트
                                            </LinkTab>
                                        </LinkTabDiv>
                                    </ListTab>
                                </WrapTabs>

                                <ListCardNew>
                                {/* 전체 */}
                                { tabMenu === "entire" && (
                                    <>
                                        <Communication />
                                        <Life />
                                        <Business />
                                        <Shopping />
                                        <Entertainment />
                                        <SocialImpact />
                                    </>
                                )}

                                {/* 카테고리 탭 > 커뮤니케이션 */}
                                { tabMenu === "communication" && (
                                    <Communication />
                                )}

                                {/* 카데고리 탭 > 일상 편의 */}
                                { tabMenu === "life" && (
                                    <Life />       
                                )}

                                { tabMenu === "business" && (
                                    <Business />  
                                )}

                                { tabMenu === "shopping" && (
                                    <Shopping />
                                )}

                                { tabMenu === "entertainment" && (
                                    <Entertainment />
                                )}

                                { tabMenu === "social_impact" && (
                                    <SocialImpact />    
                                )}
                                </ListCardNew>       
                            </SectionService>
                            <LinkTop />
                        </ContentArticle>
                    </MainContent>
                </InnerMain>
            </DocMain>
            <Footer />
        </>
    )
}

export default Service;