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
    gap: 5px;
    align-items: center;
`

const WrapInfo = styled.div`
    max-width: 268px;
    width: 100%;
    height: 18px;
    font-size: 13px;
    color: ${({ theme }) => (theme === "light" ? "#000" : "#FFFFFF")};
`

const GithubProfileLightModeLink = styled.a`
    max-width: 32px;
    width: 100%;
    height: 32px;
    display: flex;
    justify-content: center;
    align-items: center;
`

const GithubProfileDarkModeLink = styled.a`
    max-width: 32px;
    width: 100%;
    height: 32px;
    display: flex;
    justify-content: center;
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
                        <WrapInfo theme={theme}>© 2025 Kakao Cloning. All rights reserved.</WrapInfo>
                        
                        {theme === "light" ? (
                        <GithubProfileLightModeLink href="https://github.com/pan6603" target="blank">
                            <svg height="32" aria-hidden="true" viewBox="0 0 24 24" version="1.1" width="32" data-view-component="true" class="octicon octicon-mark-github v-align-middle" fill="black">
                                <path d="M12 1C5.923 1 1 5.923 1 12c0 4.867 3.149 8.979 7.521 10.436.55.096.756-.233.756-.522 0-.262-.013-1.128-.013-2.049-2.764.509-3.479-.674-3.699-1.292-.124-.317-.66-1.293-1.127-1.554-.385-.207-.936-.715-.014-.729.866-.014 1.485.797 1.691 1.128.99 1.663 2.571 1.196 3.204.907.096-.715.385-1.196.701-1.471-2.448-.275-5.005-1.224-5.005-5.432 0-1.196.426-2.186 1.128-2.956-.111-.275-.496-1.402.11-2.915 0 0 .921-.288 3.024 1.128a10.193 10.193 0 0 1 2.75-.371c.936 0 1.871.123 2.75.371 2.104-1.43 3.025-1.128 3.025-1.128.605 1.513.221 2.64.111 2.915.701.77 1.127 1.747 1.127 2.956 0 4.222-2.571 5.157-5.019 5.432.399.344.743 1.004.743 2.035 0 1.471-.014 2.654-.014 3.025 0 .289.206.632.756.522C19.851 20.979 23 16.854 23 12c0-6.077-4.922-11-11-11Z">

                                </path>
                            </svg>
                        </GithubProfileLightModeLink>
                        ) : (
                        <GithubProfileDarkModeLink href="https://github.com/pan6603" target="blank">
                            <svg height="32" aria-hidden="true" viewBox="0 0 24 24" version="1.1" width="32" data-view-component="true" class="octicon octicon-mark-github v-align-middle" fill="white">
                                <path d="M12 1C5.923 1 1 5.923 1 12c0 4.867 3.149 8.979 7.521 10.436.55.096.756-.233.756-.522 0-.262-.013-1.128-.013-2.049-2.764.509-3.479-.674-3.699-1.292-.124-.317-.66-1.293-1.127-1.554-.385-.207-.936-.715-.014-.729.866-.014 1.485.797 1.691 1.128.99 1.663 2.571 1.196 3.204.907.096-.715.385-1.196.701-1.471-2.448-.275-5.005-1.224-5.005-5.432 0-1.196.426-2.186 1.128-2.956-.111-.275-.496-1.402.11-2.915 0 0 .921-.288 3.024 1.128a10.193 10.193 0 0 1 2.75-.371c.936 0 1.871.123 2.75.371 2.104-1.43 3.025-1.128 3.025-1.128.605 1.513.221 2.64.111 2.915.701.77 1.127 1.747 1.127 2.956 0 4.222-2.571 5.157-5.019 5.432.399.344.743 1.004.743 2.035 0 1.471-.014 2.654-.014 3.025 0 .289.206.632.756.522C19.851 20.979 23 16.854 23 12c0-6.077-4.922-11-11-11Z"></path>
                            </svg>
                        </GithubProfileDarkModeLink>    
                        )}    
                        
                    </GroupInfo>
                </SectionRelation>
            </InnerFooter>
        </FooterContainer>
    )
}

export default Footer;