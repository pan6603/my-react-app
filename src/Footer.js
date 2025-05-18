import styled from "styled-components";


const FooterContainer = styled.footer`
    margin: 0 auto;
    max-width: 1440px;
    width: 100%;
    height: 634px;
    background-color: #FFFFFF;
    border-top: 1px solid #6D6D6D;
`

const InnerFooter = styled.div`
    max-width: 1316px;
    width: 100%;
    height: 633px;
    margin: 0 auto;
    padding: 81px 0 48px;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
`

const SectionService = styled.section`
    max-width: 1316px;
    width: 100%;
    height: 319px;
    margin: 0 auto;
    display: flex;
    justify-content: space-between;
    align-items: center;
`

const SectionRelation = styled.section`
    max-width: 1316px;
    width: 100%;
    height: 65px;
    background-color: red;
    margin: 0 auto;
`

const SectionServiceItem = styled.div`
    max-width: 211px;
    width: 100%;
    height: 319px;
    display: flex;
    flex-direction: column;
    background-color: red;
`

const TodaysKakaoMenuSectionServiceItem = styled.div`
    max-width: 211px;
    width: 100%;
    height: 319px;
    display: flex;
    flex-direction: column;
`

const KakaoSectionServiceItemCategories = styled.div`
    max-width: 211px;
    width: 100%;
    height: 319px;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: flex-start;
    margin-top: 33px;
`

const TodayKakaoText = styled.h3`
    color: black;
    max-width: 143px;
    width: 100%;
    height: 35px;
    font-size: 26px;
    margin-top: 0;
` 
const TodaysKakaoMenuInnerService = styled.div`
    max-width: 211px;
    width: 100%;
    height: 156px;
   
`

const InnerServiceUl = styled.div`
    max-width: 211px;
    width: 100%;
    height: 156px;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    align-items: center;
`

const InnerServiceUlList = styled.div`
    max-width: 211px;
    width: 100%;
    height: 24px;
    display: flex;
    align-items: center;
    gap: 2px;
    cursor: pointer;
`

const InnerServiceUlListLink = styled.a`
    font-size: 14px;
    font-weight: 400;
    text-decoration: none;
    letter-spacing: -.2px;
    color: #757575;
    line-height: 1.78;

    &:hover {
        color: black;
    }
`

const RightArrowIcon = styled.svg`
    width: 9px;
    height: 9px;
    fill: none;
    margin: 8px 0 0 4px

    path {
        stroke: #888;
        transition: stroke 0.2s ease;
    }

    &:hover path {
        stroke: black;
    }
`;

const StyledOutlinkIcon = styled.svg`
    width: 9px;
    height: 9px;
    fill: none;
    margin: 8px 0 0 4px

    path {
        stroke: #888;
        transition: stroke 0.2s ease;
    }

    &:hover path {
        stroke: black;
    }
`;

const KakaoInnerServiceCategories = styled.div`
    max-width: 211px;
    width: 100%;
    height: 189px;
`

const SubTitle = styled.strong`
    max-width: 129px;
    width: 100%;
    height: 28px;
    font-size: 16px;
    letter-spacing: -.5px;
    color: black;

`
const KakaoMenuCategories = styled.div`
    max-width: 211px;
    width: 100%;
    height: 189px;
    display: flex;
    flex-direction: column; 
    justify-content: flex-start; 
    align-items: flex-start; 
    gap: 3px;
`

const KakaoMenuCategoriesLink = styled.a`
    font-size: 14px;
    font-weight: 400;
    text-decoration: none;
    letter-spacing: -.2px;
    color: #757575;
    line-height: 1.78;

    &:hover {
        color: black;
    }
`


function Footer () {

    return (
        <FooterContainer>
            <InnerFooter>
                <SectionService>
                    <TodaysKakaoMenuSectionServiceItem>
                        <TodayKakaoText>오늘의 카카오</TodayKakaoText>
                        <TodaysKakaoMenuInnerService>
                            <InnerServiceUl>
                                <InnerServiceUlList>
                                    <InnerServiceUlListLink>카카오톡 공식 다운로드</InnerServiceUlListLink>
                                    <RightArrowIcon viewBox="0 0 9 9" xmlns="http://www.w3.org/2000/svg">
                                        <path d="M3 1L6 4.5L3 8" stroke="#888" />
                                    </RightArrowIcon>
                                </InnerServiceUlList>

                                <InnerServiceUlList>
                                    <InnerServiceUlListLink>카카오톡백업</InnerServiceUlListLink>
                                    <StyledOutlinkIcon viewBox="0 0 9 9" xmlns="http://www.w3.org/2000/svg">
                                        <g fill="none" fillRule="evenodd">
                                            <path d="M1.795 1.074L7.942 1.074 7.942 7.221M7.942 1.074L1.378 7.638" stroke="#888" />
                                        </g>
                                    </StyledOutlinkIcon>
                                </InnerServiceUlList>

                                <InnerServiceUlList>
                                    <InnerServiceUlListLink>카카오톡 이모티콘샵</InnerServiceUlListLink>
                                    <StyledOutlinkIcon viewBox="0 0 9 9" xmlns="http://www.w3.org/2000/svg">
                                        <g fill="none" fillRule="evenodd">
                                            <path d="M1.795 1.074L7.942 1.074 7.942 7.221M7.942 1.074L1.378 7.638" stroke="#888" />
                                        </g>
                                    </StyledOutlinkIcon>
                                </InnerServiceUlList>

                                <InnerServiceUlList>
                                    <InnerServiceUlListLink>카카오톡맵</InnerServiceUlListLink>
                                    <StyledOutlinkIcon viewBox="0 0 9 9" xmlns="http://www.w3.org/2000/svg">
                                        <g fill="none" fillRule="evenodd">
                                            <path d="M1.795 1.074L7.942 1.074 7.942 7.221M7.942 1.074L1.378 7.638" stroke="#888" />
                                        </g>
                                    </StyledOutlinkIcon>
                                </InnerServiceUlList>

                                <InnerServiceUlList>
                                    <InnerServiceUlListLink>지속가능성</InnerServiceUlListLink>
                                    <StyledOutlinkIcon viewBox="0 0 9 9" xmlns="http://www.w3.org/2000/svg">
                                        <g fill="none" fillRule="evenodd">
                                            <path d="M1.795 1.074L7.942 1.074 7.942 7.221M7.942 1.074L1.378 7.638" stroke="#888" />
                                        </g>
                                    </StyledOutlinkIcon>
                                </InnerServiceUlList>
                            </InnerServiceUl>
                        </TodaysKakaoMenuInnerService>
                    </TodaysKakaoMenuSectionServiceItem>

                    <KakaoSectionServiceItemCategories>
                        <SubTitle>카카오 그룹의 서비스</SubTitle>
                        <KakaoInnerServiceCategories>
                            <KakaoMenuCategories>
                                <KakaoMenuCategoriesLink>커뮤니케이션</KakaoMenuCategoriesLink>
                                <KakaoMenuCategoriesLink>일상편의</KakaoMenuCategoriesLink>
                                <KakaoMenuCategoriesLink>비즈니스</KakaoMenuCategoriesLink>
                                <KakaoMenuCategoriesLink>쇼핑</KakaoMenuCategoriesLink>
                                <KakaoMenuCategoriesLink>엔터테인먼트</KakaoMenuCategoriesLink>
                                <KakaoMenuCategoriesLink>임팩트</KakaoMenuCategoriesLink>
                            </KakaoMenuCategories>
                        </KakaoInnerServiceCategories>
                    </KakaoSectionServiceItemCategories>

                    <SectionServiceItem></SectionServiceItem>
                    <SectionServiceItem></SectionServiceItem>
                    <SectionServiceItem></SectionServiceItem>
                    <SectionServiceItem></SectionServiceItem>
                </SectionService>
                <SectionRelation></SectionRelation>
            </InnerFooter>
        </FooterContainer>
    )
}

export default Footer;