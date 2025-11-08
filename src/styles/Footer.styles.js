import styled from "styled-components";


export const FooterContainer = styled.footer`
    margin: 0 auto;
    max-width: 1440px;
    width: 100%;
    height: 634px;
    background-color: ${({ theme }) => (theme === "light" ? "#FFFFFF" : "#000")};
    border-top: 1px solid #6D6D6D;
`

export const InnerFooter = styled.div`
    max-width: 1316px;
    width: 100%;
    height: 534px;
    margin: 0 auto;
    padding: 81px 0 48px;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    align-items: center;

    @media (max-width: 1436px) {
        max-width: 952px;
        width: 100%;
        padding-top: 56px;
    }  

    @media (max-width: 1023px) {
        max-width: 712px;
        width: 100%;
        padding-top: 40px;
    }
`

export const SectionService = styled.section`
    max-width: 1316px;
    width: 100%;
    height: 319px;
    margin: 0 auto;
    display: flex;
    justify-content: space-between;
    align-items: center;

    @media (max-width: 1436px) {
        max-width: 952px;
        width: 100%;
        height: 650px;
        margin: -40px 0 0 -16px;
        font-size: 0;
        display: grid;
        grid-template-columns: repeat(4, 1fr);
    }  

    @media (max-width: 1023px) {
        max-width: 712px;
        width: 100%;
        margin: 0px 0 0 0;
        height: max-content;
        padding-top: 0;
        display: grid;
        grid-template-columns: repeat(1, 1fr);
    }   
`

export const SectionRelation = styled.section`
    max-width: 1316px;
    width: 100%;
    height: 65px;
    display: flex;
    align-items: center;
    margin-top: 55px;
`

export const GroupInfo = styled.div`
    max-width: 320px;
    width: 100%;
    height: 38px;
    display: flex;
    gap: 5px;
    align-items: center;
`

export const WrapInfo = styled.div`
    max-width: 268px;
    width: 100%;
    height: 18px;
    font-size: 13px;
    color: ${({ theme }) => (theme === "light" ? "#000" : "#FFFFFF")};
`

export const GithubProfileLightModeLink = styled.a`
    max-width: 32px;
    width: 100%;
    height: 32px;
    display: flex;
    justify-content: center;
    align-items: center;
`

export const GithubProfileDarkModeLink = styled.a`
    max-width: 32px;
    width: 100%;
    height: 32px;
    display: flex;
    justify-content: center;
    align-items: center;
`

export const AccountSectionServiceItem = styled.div`
    max-width: 211px;
    width: 100%;
    height: 319px;
    display: flex;
    flex-direction: column;

    @media (max-width: 1023px) {
        display: none;
    }
`

export const TodaysKakaoMenuSectionServiceItem = styled.div`
    max-width: 211px;
    width: 100%;
    height: 319px;
    display: flex;
    flex-direction: column;
    margin-left: 10px;

    @media (max-width: 1436px) {
        max-width: 226px;
        width: 100%;
        height: 204px;
        margin-top: 0px;
        padding-bottom: 56px;
        box-sizing: border-box;
    }  

    @media (max-width: 1023px) {
        padding-top: 0;
    }
`


export const KakaoSectionServiceItemCategories = styled.div`
    max-width: 211px;
    width: 100%;
    height: 319px;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: flex-start;
    margin-top: 33px;
    margin-left: 10px;

    @media (max-width: 1023px) {
        display: none;
    }
`

export const KakaoSectionServiceGroupCompanies = styled.div`
    max-width: 211px;
    width: 100%;
    height: 319px;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: flex-start;
    margin-top: 33px;
    margin-left: 10px;

    @media (max-width: 1023px) {
        display: none;
    }
`

export const KaKaoSectionServiceAffiliates = styled.div`
    max-width: 211px;
    width: 100%;
    height: 319px;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: flex-start;
    margin-top: 33px;
    margin-left: 10px;

    @media (max-width: 1023px) {
        display: none;
    }
`

export const IrMenuSectionServiceItem = styled.div`
    max-width: 211px;
    width: 100%;
    height: 319px;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: flex-start;
    margin-top: 33px;
    margin-left: 10px;

    @media (max-width: 1023px) {
        display: none;
    }
`

export const TodayKakaoText = styled.h3`
    color: ${({ theme }) => (theme === "light" ? "#000" : "#fff")};
    width: max-content;
    height: 35px;
    font-size: 26px;
    margin-top: 0;

    @media (max-width: 1436px) {
        font-size: 18px;
        line-height: 1.55;
        letter-spacing: -.5px
    }  

    @media (max-width: 1023px) {
        position: static;
        padding-bottom: 20px;
        margin-bottom: 0;
        font-size: 15px;
        line-height: 1.6;
        letter-spacing: -.5px;
        box-sizing: border-box;
    } 
` 
export const TodaysKakaoMenuInnerService = styled.div`
    max-width: 211px;
    width: 100%;
    height: 156px;

    @media (max-width: 1436px) {
        max-width: 226px;
        width: 100%;
        height: 156px;
    }
        
    @media (max-width: 1023px) {
        font-size: 0;
        max-width: 712px;
        width: 100%;
        height: 138px;
    }
`

export const AccountInnerServiceItem = styled.div`
    max-width: 211px;
    width: 100%;
    height: 319px;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: flex-start;
    margin-top: 33px;
`

export const InnerServiceUl = styled.div`
    max-width: 211px;
    width: 100%;
    height: 156px;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    align-items: center;

`

export const InnerServiceUlList = styled.div`
    max-width: 211px;
    width: 100%;
    height: 24px;
    display: flex;
    align-items: center;
    gap: 2px;
    cursor: pointer;
`

export const InnerServiceUlListLink = styled.a`
    font-size: 14px;
    font-weight: 400;
    text-decoration: none;
    letter-spacing: -.2px;
    color: #757575;
    line-height: 1.78;

    &:hover {
        color: ${({ theme }) => (theme === "light" ? "#000" : "#fff")};
    }

    @media (max-width: 1023px) {
        font-size: 12px;
        line-height: 1.5;
        color: #000;
    }
`

export const RightArrowIcon = styled.svg`
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

export const StyledOutlinkIcon = styled.svg`
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

export const KakaoInnerServiceCategories = styled.div`
    max-width: 211px;
    width: 100%;
    height: 189px;
`

export const IrMenuService = styled.div`
    max-width: 211px;
    width: 100%;
    height: 189px;
`

export const KakaoInnerServiceGroupCompanies = styled.div`
    max-width: 211px;
    width: 100%;
    height: 189px;
`

export const KaKaoInnerServiceAffiliates = styled.div`
    max-width: 211px;
    width: 100%;
    height: 189px;
`

export const SubTitle = styled.strong`
    width: max-content;
    height: 28px;
    font-size: 16px;
    letter-spacing: -.5px;
    color: ${({ theme }) => (theme === "light" ? "#000" : "#fff")};

`
export const KakaoMenuCategories = styled.div`
    max-width: 211px;
    width: 100%;
    height: 189px;
    display: flex;
    flex-direction: column; 
    justify-content: flex-start; 
    align-items: flex-start; 
    gap: 5px;
`

export const KakaoMenuGroupCompanies = styled.div`
    max-width: 211px;
    width: 100%;
    height: 189px;
    display: flex;
    flex-direction: column; 
    justify-content: flex-start; 
    align-items: flex-start; 
    gap: 5px;
`

export const IrMenuGroup = styled.div`
    max-width: 211px;
    width: 100%;
    height: 189px;
    display: flex;
    flex-direction: column; 
    justify-content: flex-start; 
    align-items: flex-start; 
    gap: 5px;
`

export const KakaoMenuGroupAffiliates = styled.div`
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

export const AccountGroup = styled.div`
    max-width: 211px;
    width: 100%;
    height: 189px;
    display: flex;
    flex-direction: column; 
    justify-content: flex-start; 
    align-items: flex-start; 
    gap: 5px;
`

export const KakaoMenuCategoriesLink = styled.a`
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

export const KakaoMenuGroupCompaniesItem = styled.a`
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

export const IrMenuGroupItem = styled.a`
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

export const AccountGroupItem = styled.a`
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

export const KakaoMenuGroupAffiliatesItem = styled.a`
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

export const KakaoPayOutlinkIcon = styled.svg`
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

export const KakaoAffiliateOutlinkIcon = styled.svg`
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

export const IrMenuOutlinkIcon = styled.svg`
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

export const AccountOutlinkIcon = styled.svg`
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