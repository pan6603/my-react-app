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
    height: 533px;
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

const AccountSectionServiceItem = styled.div`
    max-width: 211px;
    width: 100%;
    height: 319px;
    display: flex;
    flex-direction: column;
`

const TodaysKakaoMenuSectionServiceItem = styled.div`
    max-width: 211px;
    width: 100%;
    height: 319px;
    display: flex;
    flex-direction: column;
    margin-left: 10px;
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
    margin-left: 10px;
`

const KakaoSectionServiceGroupCompanies = styled.div`
    max-width: 211px;
    width: 100%;
    height: 319px;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: flex-start;
    margin-top: 33px;
    margin-left: 10px;
`

const KaKaoSectionServiceAffiliates = styled.div`
    max-width: 211px;
    width: 100%;
    height: 319px;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: flex-start;
    margin-top: 33px;
    margin-left: 10px;
`

const IrMenuSectionServiceItem = styled.div`
    max-width: 211px;
    width: 100%;
    height: 319px;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: flex-start;
    margin-top: 33px;
    margin-left: 10px;
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

const AccountInnerServiceItem = styled.div`
    max-width: 211px;
    width: 100%;
    height: 319px;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: flex-start;
    margin-top: 33px;
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

const IrMenuService = styled.div`
    max-width: 211px;
    width: 100%;
    height: 189px;
`

const KakaoInnerServiceGroupCompanies = styled.div`
    max-width: 211px;
    width: 100%;
    height: 189px;
`

const KaKaoInnerServiceAffiliates = styled.div`
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
    gap: 5px;
`

const KakaoMenuGroupCompanies = styled.div`
    max-width: 211px;
    width: 100%;
    height: 189px;
    display: flex;
    flex-direction: column; 
    justify-content: flex-start; 
    align-items: flex-start; 
    gap: 5px;
`

const IrMenuGroup = styled.div`
    max-width: 211px;
    width: 100%;
    height: 189px;
    display: flex;
    flex-direction: column; 
    justify-content: flex-start; 
    align-items: flex-start; 
    gap: 5px;
`

const KakaoMenuGroupAffiliates = styled.div`
    max-width: 211px;
    width: 100%;
    height: 189px;
    display: flex;
    flex-direction: column; 
    justify-content: flex-start; 
    align-items: flex-start; 
    gap: 5px;
    margin-top: 15px;
`

const AccountGroup = styled.div`
    max-width: 211px;
    width: 100%;
    height: 189px;
    display: flex;
    flex-direction: column; 
    justify-content: flex-start; 
    align-items: flex-start; 
    gap: 5px;
`

const KakaoMenuCategoriesLink = styled.a`
    font-size: 14px;
    font-weight: 400;
    text-decoration: none;
    letter-spacing: -.2px;
    color: #757575;
    line-height: 1.78;
    cursor: pointer;

    &:hover {
        color: black;
    }
`

const KakaoMenuGroupCompaniesItem = styled.a`
    font-size: 14px;
    font-weight: 400;
    text-decoration: none;
    letter-spacing: -.2px;
    color: #757575;
    line-height: 1.78;
    display: flex;
    align-items: center;
    gap: 4px;
    cursor: pointer;

    &:hover {
        color: black;
    }
`

const IrMenuGroupItem = styled.a`
    font-size: 14px;
    font-weight: 400;
    text-decoration: none;
    letter-spacing: -.2px;
    color: #757575;
    line-height: 1.78;
    display: flex;
    align-items: center;
    gap: 4px;
    cursor: pointer;

    &:hover {
        color: black;
    }
`

const AccountGroupItem = styled.a`
    font-size: 14px;
    font-weight: 400;
    text-decoration: none;
    letter-spacing: -.2px;
    color: #757575;
    line-height: 1.78;
    display: flex;
    align-items: center;
    gap: 4px;
    cursor: pointer;

    &:hover {
        color: black;
    }
`

const KakaoMenuGroupAffiliatesItem = styled.a`
    font-size: 14px;
    font-weight: 400;
    text-decoration: none;
    letter-spacing: -.2px;
    color: #757575;
    line-height: 1.78;
    display: flex;
    align-items: center;
    gap: 4px;
    cursor: pointer;

    &:hover {
        color: black;
    }
`

const KakaoPayOutlinkIcon = styled.svg`
  width: 9px;
  height: 9px;
  fill: none;

  path {
    stroke: #757575; 
    stroke-width: 1;
    transition: stroke 0.2s ease;
  }

  &:hover path {
    stroke: black;
  }
`;

const KakaoAffiliateOutlinkIcon = styled.svg`
  width: 9px;
  height: 9px;
  fill: none;

  path {
    stroke: #757575; 
    stroke-width: 1;
    transition: stroke 0.2s ease;
  }

  &:hover path {
    stroke: black;
  }
`;

const IrMenuOutlinkIcon = styled.svg`
    width: 9px;
    height: 9px;
    fill: none;

    path {
        stroke: #757575; 
        stroke-width: 1;
        transition: stroke 0.2s ease;
    }

    &:hover path {
      stroke: black;
    }
`;

const AccountOutlinkIcon = styled.svg`
    width: 9px;
    height: 9px;
    fill: none;

    path {
        stroke: #757575; 
        stroke-width: 1;
        transition: stroke 0.2s ease;
    }

    &:hover path {
      stroke: black;
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

                    <KakaoSectionServiceGroupCompanies>
                        <SubTitle>카카오 그룹</SubTitle>
                        <KakaoInnerServiceGroupCompanies>
                            <KakaoMenuGroupCompanies>
                                <KakaoMenuGroupCompaniesItem>카카오</KakaoMenuGroupCompaniesItem>
                                <KakaoMenuGroupCompaniesItem>
                                    카카오페이
                                    <KakaoPayOutlinkIcon viewBox="0 0 9 9" xmlns="http://www.w3.org/2000/svg">
                                        <g fill="none" fillRule="evenodd">
                                            <path d="M1.795 1.074L7.942 1.074 7.942 7.221M7.942 1.074L1.378 7.638" />
                                        </g>
                                    </KakaoPayOutlinkIcon>
                                </KakaoMenuGroupCompaniesItem>

                                <KakaoMenuGroupCompaniesItem>
                                    카카오뱅크
                                    <KakaoPayOutlinkIcon viewBox="0 0 9 9" xmlns="http://www.w3.org/2000/svg">
                                        <g fill="none" fillRule="evenodd">
                                            <path d="M1.795 1.074L7.942 1.074 7.942 7.221M7.942 1.074L1.378 7.638" />
                                        </g>
                                    </KakaoPayOutlinkIcon>
                                </KakaoMenuGroupCompaniesItem>

                                <KakaoMenuGroupCompaniesItem>
                                    카카오모빌리티
                                    <KakaoPayOutlinkIcon viewBox="0 0 9 9" xmlns="http://www.w3.org/2000/svg">
                                        <g fill="none" fillRule="evenodd">
                                            <path d="M1.795 1.074L7.942 1.074 7.942 7.221M7.942 1.074L1.378 7.638" />
                                        </g>
                                    </KakaoPayOutlinkIcon>
                                </KakaoMenuGroupCompaniesItem>

                                <KakaoMenuGroupCompaniesItem>
                                    카카오스타일
                                    <KakaoPayOutlinkIcon viewBox="0 0 9 9" xmlns="http://www.w3.org/2000/svg">
                                        <g fill="none" fillRule="evenodd">
                                            <path d="M1.795 1.074L7.942 1.074 7.942 7.221M7.942 1.074L1.378 7.638" />
                                        </g>
                                    </KakaoPayOutlinkIcon>
                                </KakaoMenuGroupCompaniesItem>

                                <KakaoMenuGroupCompaniesItem>
                                    카카오엔터테인먼트
                                    <KakaoPayOutlinkIcon viewBox="0 0 9 9" xmlns="http://www.w3.org/2000/svg">
                                        <g fill="none" fillRule="evenodd">
                                            <path d="M1.795 1.074L7.942 1.074 7.942 7.221M7.942 1.074L1.378 7.638" />
                                        </g>
                                    </KakaoPayOutlinkIcon>
                                </KakaoMenuGroupCompaniesItem>

                            </KakaoMenuGroupCompanies>
                        </KakaoInnerServiceGroupCompanies>
                    </KakaoSectionServiceGroupCompanies>

                    <KaKaoSectionServiceAffiliates>
                        <KaKaoInnerServiceAffiliates>
                            <KakaoMenuGroupAffiliates>
                                <KakaoMenuGroupAffiliatesItem>
                                    카카오게임즈 
                                    <KakaoAffiliateOutlinkIcon viewBox="0 0 9 9" xmlns="http://www.w3.org/2000/svg">
                                        <g fill="none" fillRule="evenodd">
                                            <path d="M1.795 1.074L7.942 1.074 7.942 7.221M7.942 1.074L1.378 7.638" />
                                        </g>
                                    </KakaoAffiliateOutlinkIcon>
                                </KakaoMenuGroupAffiliatesItem>

                                <KakaoMenuGroupAffiliatesItem>
                                    카카오픽코마
                                    <KakaoAffiliateOutlinkIcon viewBox="0 0 9 9" xmlns="http://www.w3.org/2000/svg">
                                        <g fill="none" fillRule="evenodd">
                                            <path d="M1.795 1.074L7.942 1.074 7.942 7.221M7.942 1.074L1.378 7.638" />
                                        </g>
                                    </KakaoAffiliateOutlinkIcon>
                                </KakaoMenuGroupAffiliatesItem>

                                <KakaoMenuGroupAffiliatesItem>
                                    카카오엔터프라이즈
                                    <KakaoAffiliateOutlinkIcon viewBox="0 0 9 9" xmlns="http://www.w3.org/2000/svg">
                                        <g fill="none" fillRule="evenodd">
                                            <path d="M1.795 1.074L7.942 1.074 7.942 7.221M7.942 1.074L1.378 7.638" />
                                        </g>
                                    </KakaoAffiliateOutlinkIcon>
                                </KakaoMenuGroupAffiliatesItem>

                                <KakaoMenuGroupAffiliatesItem>
                                    카카오헬스케어
                                    <KakaoAffiliateOutlinkIcon viewBox="0 0 9 9" xmlns="http://www.w3.org/2000/svg">
                                        <g fill="none" fillRule="evenodd">
                                            <path d="M1.795 1.074L7.942 1.074 7.942 7.221M7.942 1.074L1.378 7.638" />
                                        </g>
                                    </KakaoAffiliateOutlinkIcon>
                                </KakaoMenuGroupAffiliatesItem>

                                <KakaoMenuGroupAffiliatesItem>
                                    카카오벤처스
                                    <KakaoAffiliateOutlinkIcon viewBox="0 0 9 9" xmlns="http://www.w3.org/2000/svg">
                                        <g fill="none" fillRule="evenodd">
                                            <path d="M1.795 1.074L7.942 1.074 7.942 7.221M7.942 1.074L1.378 7.638" />
                                        </g>
                                    </KakaoAffiliateOutlinkIcon>
                                </KakaoMenuGroupAffiliatesItem>

                                <KakaoMenuGroupAffiliatesItem>
                                    카카오인베스트먼트
                                    <KakaoAffiliateOutlinkIcon viewBox="0 0 9 9" xmlns="http://www.w3.org/2000/svg">
                                        <g fill="none" fillRule="evenodd">
                                            <path d="M1.795 1.074L7.942 1.074 7.942 7.221M7.942 1.074L1.378 7.638" />
                                        </g>
                                    </KakaoAffiliateOutlinkIcon>
                                </KakaoMenuGroupAffiliatesItem>

                                <KakaoMenuGroupAffiliatesItem>
                                    링키지랩 
                                    <KakaoAffiliateOutlinkIcon viewBox="0 0 9 9" xmlns="http://www.w3.org/2000/svg">
                                        <g fill="none" fillRule="evenodd">
                                            <path d="M1.795 1.074L7.942 1.074 7.942 7.221M7.942 1.074L1.378 7.638" />
                                        </g>
                                    </KakaoAffiliateOutlinkIcon>
                                </KakaoMenuGroupAffiliatesItem>
                            </KakaoMenuGroupAffiliates>
                        </KaKaoInnerServiceAffiliates>
                    </KaKaoSectionServiceAffiliates>

                    <IrMenuSectionServiceItem>
                        <SubTitle>IR</SubTitle>
                        <IrMenuService>
                            <IrMenuGroup>
                                <IrMenuGroupItem>
                                    기업지배구조
                                    <IrMenuOutlinkIcon viewBox="0 0 9 9" xmlns="http://www.w3.org/2000/svg">
                                        <g fill="none" fillRule="evenodd">
                                            <path d="M1.795 1.074L7.942 1.074 7.942 7.221M7.942 1.074L1.378 7.638" />
                                        </g>
                                    </IrMenuOutlinkIcon>
                                </IrMenuGroupItem>

                                <IrMenuGroupItem>
                                    주가정보
                                    <IrMenuOutlinkIcon viewBox="0 0 9 9" xmlns="http://www.w3.org/2000/svg">
                                        <g fill="none" fillRule="evenodd">
                                            <path d="M1.795 1.074L7.942 1.074 7.942 7.221M7.942 1.074L1.378 7.638" />
                                        </g>
                                    </IrMenuOutlinkIcon>
                                </IrMenuGroupItem>

                                <IrMenuGroupItem>
                                    재무정보
                                    <IrMenuOutlinkIcon viewBox="0 0 9 9" xmlns="http://www.w3.org/2000/svg">
                                        <g fill="none" fillRule="evenodd">
                                            <path d="M1.795 1.074L7.942 1.074 7.942 7.221M7.942 1.074L1.378 7.638" />
                                        </g>
                                    </IrMenuOutlinkIcon>
                                </IrMenuGroupItem>

                                <IrMenuGroupItem>
                                    IR행사
                                    <IrMenuOutlinkIcon viewBox="0 0 9 9" xmlns="http://www.w3.org/2000/svg">
                                        <g fill="none" fillRule="evenodd">
                                            <path d="M1.795 1.074L7.942 1.074 7.942 7.221M7.942 1.074L1.378 7.638" />
                                        </g>
                                    </IrMenuOutlinkIcon>
                                </IrMenuGroupItem>

                                <IrMenuGroupItem>
                                    공시정보
                                    <IrMenuOutlinkIcon viewBox="0 0 9 9" xmlns="http://www.w3.org/2000/svg">
                                        <g fill="none" fillRule="evenodd">
                                            <path d="M1.795 1.074L7.942 1.074 7.942 7.221M7.942 1.074L1.378 7.638" />
                                        </g>
                                    </IrMenuOutlinkIcon>
                                </IrMenuGroupItem>

                                <IrMenuGroupItem>
                                    공고
                                    <IrMenuOutlinkIcon viewBox="0 0 9 9" xmlns="http://www.w3.org/2000/svg">
                                        <g fill="none" fillRule="evenodd">
                                            <path d="M1.795 1.074L7.942 1.074 7.942 7.221M7.942 1.074L1.378 7.638" />
                                        </g>
                                    </IrMenuOutlinkIcon>
                                </IrMenuGroupItem>
                            </IrMenuGroup>
                        </IrMenuService>
                    </IrMenuSectionServiceItem>

                    <AccountSectionServiceItem>
                        <AccountInnerServiceItem>
                            <SubTitle>계정 및 지원</SubTitle>
                            <AccountGroup>
                                <AccountGroupItem>
                                    카카오계정
                                    <AccountOutlinkIcon viewBox="0 0 9 9" xmlns="http://www.w3.org/2000/svg">
                                        <g fill="none" fillRule="evenodd">
                                            <path d="M1.795 1.074L7.942 1.074 7.942 7.221M7.942 1.074L1.378 7.638" />
                                        </g>
                                    </AccountOutlinkIcon>
                                </AccountGroupItem>
                                <AccountGroupItem>
                                    카카오 프라이버시
                                    <AccountOutlinkIcon viewBox="0 0 9 9" xmlns="http://www.w3.org/2000/svg">
                                        <g fill="none" fillRule="evenodd">
                                            <path d="M1.795 1.074L7.942 1.074 7.942 7.221M7.942 1.074L1.378 7.638" />
                                        </g>
                                    </AccountOutlinkIcon>
                                </AccountGroupItem>
                                <AccountGroupItem>
                                    카카오 고객센터
                                    <AccountOutlinkIcon viewBox="0 0 9 9" xmlns="http://www.w3.org/2000/svg">
                                        <g fill="none" fillRule="evenodd">
                                            <path d="M1.795 1.074L7.942 1.074 7.942 7.221M7.942 1.074L1.378 7.638" />
                                        </g>
                                    </AccountOutlinkIcon>
                                </AccountGroupItem>
                                <AccountGroupItem>
                                    다음 고객센터
                                    <AccountOutlinkIcon viewBox="0 0 9 9" xmlns="http://www.w3.org/2000/svg">
                                        <g fill="none" fillRule="evenodd">
                                            <path d="M1.795 1.074L7.942 1.074 7.942 7.221M7.942 1.074L1.378 7.638" />
                                        </g>
                                    </AccountOutlinkIcon>
                                </AccountGroupItem>
                                <AccountGroupItem>
                                    커머스 고객센터
                                    <AccountOutlinkIcon viewBox="0 0 9 9" xmlns="http://www.w3.org/2000/svg">
                                        <g fill="none" fillRule="evenodd">
                                            <path d="M1.795 1.074L7.942 1.074 7.942 7.221M7.942 1.074L1.378 7.638" />
                                        </g>
                                    </AccountOutlinkIcon>
                                </AccountGroupItem>
                                <AccountGroupItem>
                                    인재영입
                                    <AccountOutlinkIcon viewBox="0 0 9 9" xmlns="http://www.w3.org/2000/svg">
                                        <g fill="none" fillRule="evenodd">
                                            <path d="M1.795 1.074L7.942 1.074 7.942 7.221M7.942 1.074L1.378 7.638" />
                                        </g>
                                    </AccountOutlinkIcon>
                                </AccountGroupItem>
                            </AccountGroup>
                        </AccountInnerServiceItem>
                    </AccountSectionServiceItem>
                </SectionService>
                
            </InnerFooter>
        </FooterContainer>
    )
}

export default Footer;