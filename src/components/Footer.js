import styled from "styled-components";
import { useTheme } from "./context/ThemeContext";
import { useTranslation } from "react-i18next";



const FooterContainer = styled.footer`
    margin: 0 auto;
    max-width: 1440px;
    width: 100%;
    height: 634px;
    background-color: ${({ theme }) => (theme === "light" ? "#FFFFFF" : "#000")};
    border-top: 1px solid #6D6D6D;
`

const InnerFooter = styled.div`
    max-width: 1316px;
    width: 100%;
    height: 534pxpx;
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
    display: flex;
    align-items: center;
`

const GroupInfo = styled.div`
    max-width: 320px;
    width: 100%;
    height: 38px;
    display: flex;
    align-items: center;
`

const WrapInfo = styled.div`
    max-width: 250px;
    width: 100%;
    height: 18px;
    font-size: 13px;
`



const GitHubRepositoryLink = styled.a`
    max-width: 38px;
    width: 100%;
    height: 38px;
    display: flex;
    justify-content: center;
    align-items: center;
    color: inherit;      
    text-decoration: none; 
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
    color: ${({ theme }) => (theme === "light" ? "#000" : "#fff")};
    width: max-content;
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
        color: ${({ theme }) => (theme === "light" ? "#000" : "#fff")};
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
    width: max-content;
    height: 28px;
    font-size: 16px;
    letter-spacing: -.5px;
    color: ${({ theme }) => (theme === "light" ? "#000" : "#fff")};

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
        color: ${({ theme }) => (theme === "light" ? "#000" : "#fff")};
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
        color: ${({ theme }) => (theme === "light" ? "#000" : "#fff")};
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
        color: ${({ theme }) => (theme === "light" ? "#000" : "#fff")};
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
        color: ${({ theme }) => (theme === "light" ? "#000" : "#fff")};
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
        color: ${({ theme }) => (theme === "light" ? "#000" : "#fff")};
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
    const { theme } = useTheme() 
    const { t } = useTranslation()

    return (
        <FooterContainer theme={theme}>
            <InnerFooter>
                <SectionService>
                    <TodaysKakaoMenuSectionServiceItem>
                        <TodayKakaoText theme={theme}>
                        {t("home.footer.today_kakao_text")}
                        </TodayKakaoText>
                        <TodaysKakaoMenuInnerService>
                            <InnerServiceUl>
                                <InnerServiceUlList>
                                    <InnerServiceUlListLink theme={theme}>
                                    {t("home.footer.todays_kakao_menu_inner_service.download_kakao_talk")}
                                    </InnerServiceUlListLink>
                                    <RightArrowIcon viewBox="0 0 9 9" xmlns="http://www.w3.org/2000/svg">
                                        <path d="M3 1L6 4.5L3 8" stroke="#888" />
                                    </RightArrowIcon>
                                </InnerServiceUlList>

                                <InnerServiceUlList>
                                    <InnerServiceUlListLink theme={theme}>
                                    {t("home.footer.todays_kakao_menu_inner_service.kakao_talk_backup")}
                                    </InnerServiceUlListLink>
                                    <StyledOutlinkIcon viewBox="0 0 9 9" xmlns="http://www.w3.org/2000/svg">
                                        <g fill="none" fillRule="evenodd">
                                            <path d="M1.795 1.074L7.942 1.074 7.942 7.221M7.942 1.074L1.378 7.638" stroke="#888" />
                                        </g>
                                    </StyledOutlinkIcon>
                                </InnerServiceUlList>

                                <InnerServiceUlList>
                                    <InnerServiceUlListLink theme={theme}>
                                    {t("home.footer.todays_kakao_menu_inner_service.emoticon_shop")}
                                    </InnerServiceUlListLink>
                                    <StyledOutlinkIcon viewBox="0 0 9 9" xmlns="http://www.w3.org/2000/svg">
                                        <g fill="none" fillRule="evenodd">
                                            <path d="M1.795 1.074L7.942 1.074 7.942 7.221M7.942 1.074L1.378 7.638" stroke="#888" />
                                        </g>
                                    </StyledOutlinkIcon>
                                </InnerServiceUlList>

                                <InnerServiceUlList>
                                    <InnerServiceUlListLink theme={theme}>
                                    {t("home.footer.todays_kakao_menu_inner_service.kakao_map")}
                                    </InnerServiceUlListLink>
                                    <StyledOutlinkIcon viewBox="0 0 9 9" xmlns="http://www.w3.org/2000/svg">
                                        <g fill="none" fillRule="evenodd">
                                            <path d="M1.795 1.074L7.942 1.074 7.942 7.221M7.942 1.074L1.378 7.638" stroke="#888" />
                                        </g>
                                    </StyledOutlinkIcon>
                                </InnerServiceUlList>
                                
                                <InnerServiceUlList>
                                    <InnerServiceUlListLink theme={theme}>
                                    {t("home.footer.todays_kakao_menu_inner_service.kakao_helthcare")}
                                    </InnerServiceUlListLink>
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
                        <SubTitle theme={theme}>
                        {t("home.footer.kakao_inner_service_categories.sub_title")}
                        </SubTitle>
                        <KakaoInnerServiceCategories>
                            <KakaoMenuCategories>
                                <KakaoMenuCategoriesLink theme={theme}>
                                {t("home.footer.kakao_inner_service_categories.communication")}
                                </KakaoMenuCategoriesLink>
                                <KakaoMenuCategoriesLink theme={theme}>
                                {t("home.footer.kakao_inner_service_categories.life")}
                                </KakaoMenuCategoriesLink>
                                <KakaoMenuCategoriesLink theme={theme}>
                                {t("home.footer.kakao_inner_service_categories.business")}
                                </KakaoMenuCategoriesLink>
                                <KakaoMenuCategoriesLink theme={theme}>
                                {t("home.footer.kakao_inner_service_categories.shopping")}
                                </KakaoMenuCategoriesLink>
                                <KakaoMenuCategoriesLink theme={theme}>
                                {t("home.footer.kakao_inner_service_categories.entertainment")}
                                </KakaoMenuCategoriesLink>
                                <KakaoMenuCategoriesLink theme={theme}>
                                {t("home.footer.kakao_inner_service_categories.impact")}
                                </KakaoMenuCategoriesLink>
                            </KakaoMenuCategories>
                        </KakaoInnerServiceCategories>
                    </KakaoSectionServiceItemCategories>

                    <KakaoSectionServiceGroupCompanies>
                        <SubTitle theme={theme}>
                        {t("home.footer.kakao_inner_service_group_companies.sub_title")}
                        </SubTitle>
                        <KakaoInnerServiceGroupCompanies>
                            <KakaoMenuGroupCompanies>
                                <KakaoMenuGroupCompaniesItem theme={theme}>
                                {t("home.footer.kakao_inner_service_group_companies.kakao")}
                                </KakaoMenuGroupCompaniesItem>
                                <KakaoMenuGroupCompaniesItem theme={theme}>
                                {t("home.footer.kakao_inner_service_group_companies.kakao_pay")}
                                    <KakaoPayOutlinkIcon viewBox="0 0 9 9" xmlns="http://www.w3.org/2000/svg">
                                        <g fill="none" fillRule="evenodd">
                                            <path d="M1.795 1.074L7.942 1.074 7.942 7.221M7.942 1.074L1.378 7.638" />
                                        </g>
                                    </KakaoPayOutlinkIcon>
                                </KakaoMenuGroupCompaniesItem>

                                <KakaoMenuGroupCompaniesItem theme={theme}>
                                {t("home.footer.kakao_inner_service_group_companies.kakao_bank")}
                                    <KakaoPayOutlinkIcon viewBox="0 0 9 9" xmlns="http://www.w3.org/2000/svg">
                                        <g fill="none" fillRule="evenodd">
                                            <path d="M1.795 1.074L7.942 1.074 7.942 7.221M7.942 1.074L1.378 7.638" />
                                        </g>
                                    </KakaoPayOutlinkIcon>
                                </KakaoMenuGroupCompaniesItem>

                                <KakaoMenuGroupCompaniesItem theme={theme}>
                                {t("home.footer.kakao_inner_service_group_companies.kakao_mobility")}
                                    <KakaoPayOutlinkIcon viewBox="0 0 9 9" xmlns="http://www.w3.org/2000/svg">
                                        <g fill="none" fillRule="evenodd">
                                            <path d="M1.795 1.074L7.942 1.074 7.942 7.221M7.942 1.074L1.378 7.638" />
                                        </g>
                                    </KakaoPayOutlinkIcon>
                                </KakaoMenuGroupCompaniesItem>

                                <KakaoMenuGroupCompaniesItem theme={theme}>
                                {t("home.footer.kakao_inner_service_group_companies.kakao_style")}
                                    <KakaoPayOutlinkIcon viewBox="0 0 9 9" xmlns="http://www.w3.org/2000/svg">
                                        <g fill="none" fillRule="evenodd">
                                            <path d="M1.795 1.074L7.942 1.074 7.942 7.221M7.942 1.074L1.378 7.638" />
                                        </g>
                                    </KakaoPayOutlinkIcon>
                                </KakaoMenuGroupCompaniesItem>

                                <KakaoMenuGroupCompaniesItem theme={theme}>
                                {t("home.footer.kakao_inner_service_group_companies.kakao_entertainment")}
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
                                <KakaoMenuGroupAffiliatesItem theme={theme}>
                                {t("home.footer.kakao_inner_service_group_companies.kakao_games")}
            
                                    <KakaoAffiliateOutlinkIcon viewBox="0 0 9 9" xmlns="http://www.w3.org/2000/svg">
                                        <g fill="none" fillRule="evenodd">
                                            <path d="M1.795 1.074L7.942 1.074 7.942 7.221M7.942 1.074L1.378 7.638" />
                                        </g>
                                    </KakaoAffiliateOutlinkIcon>
                                </KakaoMenuGroupAffiliatesItem>

                                <KakaoMenuGroupAffiliatesItem theme={theme}>
                                {t("home.footer.kakao_inner_service_group_companies.kakao_pickkoma")}
                               
                                    <KakaoAffiliateOutlinkIcon viewBox="0 0 9 9" xmlns="http://www.w3.org/2000/svg">
                                        <g fill="none" fillRule="evenodd">
                                            <path d="M1.795 1.074L7.942 1.074 7.942 7.221M7.942 1.074L1.378 7.638" />
                                        </g>
                                    </KakaoAffiliateOutlinkIcon>
                                </KakaoMenuGroupAffiliatesItem>

                                <KakaoMenuGroupAffiliatesItem theme={theme}>
                                {t("home.footer.kakao_inner_service_group_companies.kakao_enterprise")}
                                    
                                    <KakaoAffiliateOutlinkIcon viewBox="0 0 9 9" xmlns="http://www.w3.org/2000/svg">
                                        <g fill="none" fillRule="evenodd">
                                            <path d="M1.795 1.074L7.942 1.074 7.942 7.221M7.942 1.074L1.378 7.638" />
                                        </g>
                                    </KakaoAffiliateOutlinkIcon>
                                </KakaoMenuGroupAffiliatesItem>

                                <KakaoMenuGroupAffiliatesItem theme={theme}>
                                {t("home.footer.kakao_inner_service_group_companies.kakao_healthcare")}
                                    <KakaoAffiliateOutlinkIcon viewBox="0 0 9 9" xmlns="http://www.w3.org/2000/svg">
                                        <g fill="none" fillRule="evenodd">
                                            <path d="M1.795 1.074L7.942 1.074 7.942 7.221M7.942 1.074L1.378 7.638" />
                                        </g>
                                    </KakaoAffiliateOutlinkIcon>
                                </KakaoMenuGroupAffiliatesItem>

                                <KakaoMenuGroupAffiliatesItem theme={theme}>
                                {t("home.footer.kakao_inner_service_group_companies.kakao_ventures")}
                                
                                    <KakaoAffiliateOutlinkIcon viewBox="0 0 9 9" xmlns="http://www.w3.org/2000/svg">
                                        <g fill="none" fillRule="evenodd">
                                            <path d="M1.795 1.074L7.942 1.074 7.942 7.221M7.942 1.074L1.378 7.638" />
                                        </g>
                                    </KakaoAffiliateOutlinkIcon>
                                </KakaoMenuGroupAffiliatesItem>

                                <KakaoMenuGroupAffiliatesItem theme={theme}>
                                {t("home.footer.kakao_inner_service_group_companies.kakao_investment")}
                                    
                                    <KakaoAffiliateOutlinkIcon viewBox="0 0 9 9" xmlns="http://www.w3.org/2000/svg">
                                        <g fill="none" fillRule="evenodd">
                                            <path d="M1.795 1.074L7.942 1.074 7.942 7.221M7.942 1.074L1.378 7.638" />
                                        </g>
                                    </KakaoAffiliateOutlinkIcon>
                                </KakaoMenuGroupAffiliatesItem>

                                <KakaoMenuGroupAffiliatesItem theme={theme}>
                                {t("home.footer.kakao_inner_service_group_companies.linkage_lab")}
                                    
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
                        <SubTitle theme={theme}>IR</SubTitle>
                        <IrMenuService>
                            <IrMenuGroup>
                                <IrMenuGroupItem theme={theme}>
                                {t("home.footer.ir_menu_group.governance")}
                                    <IrMenuOutlinkIcon viewBox="0 0 9 9" xmlns="http://www.w3.org/2000/svg">
                                        <g fill="none" fillRule="evenodd">
                                            <path d="M1.795 1.074L7.942 1.074 7.942 7.221M7.942 1.074L1.378 7.638" />
                                        </g>
                                    </IrMenuOutlinkIcon>
                                </IrMenuGroupItem>

                                <IrMenuGroupItem theme={theme}>
                                {t("home.footer.ir_menu_group.stocks")}
                                    <IrMenuOutlinkIcon viewBox="0 0 9 9" xmlns="http://www.w3.org/2000/svg">
                                        <g fill="none" fillRule="evenodd">
                                            <path d="M1.795 1.074L7.942 1.074 7.942 7.221M7.942 1.074L1.378 7.638" />
                                        </g>
                                    </IrMenuOutlinkIcon>
                                </IrMenuGroupItem>

                                <IrMenuGroupItem theme={theme}>
                                {t("home.footer.ir_menu_group.financial_info")}
                                    <IrMenuOutlinkIcon viewBox="0 0 9 9" xmlns="http://www.w3.org/2000/svg">
                                        <g fill="none" fillRule="evenodd">
                                            <path d="M1.795 1.074L7.942 1.074 7.942 7.221M7.942 1.074L1.378 7.638" />
                                        </g>
                                    </IrMenuOutlinkIcon>
                                </IrMenuGroupItem>

                                <IrMenuGroupItem theme={theme}>
                                {t("home.footer.ir_menu_group.ir_event")}
                               
                                    <IrMenuOutlinkIcon viewBox="0 0 9 9" xmlns="http://www.w3.org/2000/svg">
                                        <g fill="none" fillRule="evenodd">
                                            <path d="M1.795 1.074L7.942 1.074 7.942 7.221M7.942 1.074L1.378 7.638" />
                                        </g>
                                    </IrMenuOutlinkIcon>
                                </IrMenuGroupItem>

                                <IrMenuGroupItem theme={theme}>
                                {t("home.footer.ir_menu_group.disclosure_info")}
                               
                                    <IrMenuOutlinkIcon viewBox="0 0 9 9" xmlns="http://www.w3.org/2000/svg">
                                        <g fill="none" fillRule="evenodd">
                                            <path d="M1.795 1.074L7.942 1.074 7.942 7.221M7.942 1.074L1.378 7.638" />
                                        </g>
                                    </IrMenuOutlinkIcon>
                                </IrMenuGroupItem>

                                <IrMenuGroupItem theme={theme}>
                                {t("home.footer.ir_menu_group.ir_news")}
                                
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
                            <SubTitle theme={theme}>
                            {t("home.footer.account_inner_service_item.sub_title")}
                            </SubTitle>
                            <AccountGroup>
                                <AccountGroupItem theme={theme}>
                                {t("home.footer.account_inner_service_item.kakao_account")}
                                
                                    <AccountOutlinkIcon viewBox="0 0 9 9" xmlns="http://www.w3.org/2000/svg">
                                        <g fill="none" fillRule="evenodd">
                                            <path d="M1.795 1.074L7.942 1.074 7.942 7.221M7.942 1.074L1.378 7.638" />
                                        </g>
                                    </AccountOutlinkIcon>
                                </AccountGroupItem>
                                <AccountGroupItem theme={theme}>
                                {t("home.footer.account_inner_service_item.kakao_privacy")}
                                    
                                    <AccountOutlinkIcon viewBox="0 0 9 9" xmlns="http://www.w3.org/2000/svg">
                                        <g fill="none" fillRule="evenodd">
                                            <path d="M1.795 1.074L7.942 1.074 7.942 7.221M7.942 1.074L1.378 7.638" />
                                        </g>
                                    </AccountOutlinkIcon>
                                </AccountGroupItem>
                                <AccountGroupItem theme={theme}>
                                {t("home.footer.account_inner_service_item.kakao_customer_center")}
                                    
                                    <AccountOutlinkIcon viewBox="0 0 9 9" xmlns="http://www.w3.org/2000/svg">
                                        <g fill="none" fillRule="evenodd">
                                            <path d="M1.795 1.074L7.942 1.074 7.942 7.221M7.942 1.074L1.378 7.638" />
                                        </g>
                                    </AccountOutlinkIcon>
                                </AccountGroupItem>
                                <AccountGroupItem theme={theme}>
                                {t("home.footer.account_inner_service_item.daum_customer_center")}
                               
                                    <AccountOutlinkIcon viewBox="0 0 9 9" xmlns="http://www.w3.org/2000/svg">
                                        <g fill="none" fillRule="evenodd">
                                            <path d="M1.795 1.074L7.942 1.074 7.942 7.221M7.942 1.074L1.378 7.638" />
                                        </g>
                                    </AccountOutlinkIcon>
                                </AccountGroupItem>
                                <AccountGroupItem theme={theme}>
                                {t("home.footer.account_inner_service_item.commerce_customer_center")}
                                
                                    <AccountOutlinkIcon viewBox="0 0 9 9" xmlns="http://www.w3.org/2000/svg">
                                        <g fill="none" fillRule="evenodd">
                                            <path d="M1.795 1.074L7.942 1.074 7.942 7.221M7.942 1.074L1.378 7.638" />
                                        </g>
                                    </AccountOutlinkIcon>
                                </AccountGroupItem>
                                <AccountGroupItem theme={theme}>
                                {t("home.footer.account_inner_service_item.kakao_careers")}
                                    
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
                <SectionRelation>
                    <GroupInfo>
                        <WrapInfo>© Kakao Cloning. All rights reserved.</WrapInfo>
                        <GitHubRepositoryLink href="https://github.com/pan6603" target="_blank">
                        <svg width="30" height="30" viewBox="0 0 16 16" fill="black" xmlns="http://www.w3.org/2000/svg" aria-hidden="true" focusable="false"><path d="M7.49933 0.25C3.49635 0.25 0.25 3.49593 0.25 7.50024C0.25 10.703 2.32715 13.4206 5.2081 14.3797C5.57084 14.446 5.70302 14.2222 5.70302 14.0299C5.70302 13.8576 5.69679 13.4019 5.69323 12.797C3.67661 13.235 3.25112 11.825 3.25112 11.825C2.92132 10.9874 2.44599 10.7644 2.44599 10.7644C1.78773 10.3149 2.49584 10.3238 2.49584 10.3238C3.22353 10.375 3.60629 11.0711 3.60629 11.0711C4.25298 12.1788 5.30335 11.8588 5.71638 11.6732C5.78225 11.205 5.96962 10.8854 6.17658 10.7043C4.56675 10.5209 2.87415 9.89918 2.87415 7.12104C2.87415 6.32925 3.15677 5.68257 3.62053 5.17563C3.54576 4.99226 3.29697 4.25521 3.69174 3.25691C3.69174 3.25691 4.30015 3.06196 5.68522 3.99973C6.26337 3.83906 6.8838 3.75895 7.50022 3.75583C8.1162 3.75895 8.73619 3.83906 9.31523 3.99973C10.6994 3.06196 11.3069 3.25691 11.3069 3.25691C11.7026 4.25521 11.4538 4.99226 11.3795 5.17563C11.8441 5.68257 12.1245 6.32925 12.1245 7.12104C12.1245 9.9063 10.4292 10.5192 8.81452 10.6985C9.07444 10.9224 9.30633 11.3648 9.30633 12.0413C9.30633 13.0102 9.29742 13.7922 9.29742 14.0299C9.29742 14.2239 9.42828 14.4496 9.79591 14.3788C12.6746 13.4179 14.75 10.7025 14.75 7.50024C14.75 3.49593 11.5036 0.25 7.49933 0.25Z" fill="currentColor" fill-rule="evenodd" clip-rule="evenodd"></path></svg>
                        </GitHubRepositoryLink>
                    </GroupInfo>
                </SectionRelation>
            </InnerFooter>
        </FooterContainer>
    )
}

export default Footer;