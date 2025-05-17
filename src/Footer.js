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
`

const TodayKakaoText = styled.h3`
    color: black;
    max-width: 143px;
    width: 100%;
    height: 35px;
    font-size: 26px;
    margin-top: 0;
` 
const InnerService = styled.div`
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
    gap: 2px;
`

const InnerServiceUlListLink = styled.a`
    font-size: 14px;
    font-weight: 400;
    text-decoration: none;
    letter-spacing: -.2px;
    color: #333;
    line-height: 1.78;
`

const RightArrowIcon = styled.svg`
    width: 9px;
    height: 9px;
    fill: none;
    class: ico_footerlink fff; 
    margin: 8px 0 0 4px
`;

const StyledOutlinkIcon = styled.svg`
    width: 9px;
    height: 9px;
    fill: none;
    class: ico_outlink;
    margin: 8px 0 0 4px
`;

function Footer () {

    return (
        <FooterContainer>
            <InnerFooter>
                <SectionService>
                    <SectionServiceItem>
                        <TodayKakaoText>오늘의 카카오</TodayKakaoText>
                        <InnerService>
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
                        </InnerService>
                    </SectionServiceItem>
                    <SectionServiceItem></SectionServiceItem>
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