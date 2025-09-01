import styled from "styled-components";

export const ContMainAreaHelpContainer = styled.div`
    max-width: 1316px;
    width: 100%;
    height: 941px;
    margin: 120px auto;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
`

export const TitleContTypeHelp = styled.div`
    max-width: 1316px;
    width: 100%;
    max-height: 72px;
    height: 100%;
    font-size: 48px;
    line-height: 72px;
    color: ${({ theme }) => (theme === "light" ? "#000" : "#fff")};
    font-weight: 400;
    letter-spacing: -1px;

    &::before {
        content: "";
        background-image: ${({ theme }) => theme === "light"
        ? "url('https://t1.kakaocdn.net/kakaocorp/kakaocorp/service/ico_tit_help.gif')"
        : "url('https://t1.kakaocdn.net/kakaocorp/kakaocorp/service/ico_tit_help_dark.gif')"};
        max-width: 72px;
        width: 100%;
        max-height: 72px;
        height: 100%;
        margin-right: 16px;
        display: inline-block;
        background-size: 100%;
        vertical-align: top;
    }
`

export const InnerMainInnerHelp = styled.div`
    max-width: 1316px;
    width: 100%;
    max-height: 710px;
    height: 100%;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
`

export const WrapTop = styled.div`
    max-width: 1316px;
    width: 100%;
    max-height: 494px;
    height: 100%;
    display: flex;
    justify-content: space-between;
`

export const WrapCenterInnerTop = styled.div`
    margin-top: -3px;
    max-width: 428px;
    width: 100%;
    max-height: 494px;
    height: 100%;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
`

export const BoxHelp = styled.div`
    max-width: 428px;
    width: 100%;
    max-height: 153px;
    height: 100%;
    background-color: ${({ theme }) => (theme === "light" ? "#f3f3f3" : "#333")};
    border-radius: 20px;
    position: relative;
`

export const BoxHelpLink = styled.div`
    padding: 36px 40px;
`

export const BoxHelpLinkClick = styled.a`

`


export const WrapSocialInnerTop = styled.div`
    max-width: 428px;
    width: 100%;
    max-height: 494px;
    height: 100%;
    background-color: #fae100;
    background-image: url(//t1.kakaocdn.net/kakaocorp/kakaocorp/service/main/img_ryan.png);
    background-repeat: no-repeat;
    background-position: bottom;
    border-radius: 36px;
    box-sizing: border-box;
    padding: 40px;
    background-size: 284px auto;
`

export const WrapSocialInnerTopTitle = styled.strong`
    font-size: 26px;
    line-height: 1.38;
`

export const SubSocial = styled.div`
    margin-top: 22px;
    font-size: 17px;
    line-height: 1.58px;
`

export const ListSocial = styled.div`
    margin-top: 37px;
    max-width: 348px;
    width: 100%;
    max-height: 60px;
    height: 100%;
    display: flex;
    justify-content: space-between;
    align-items: center;

`

export const LinkSocialLinkCh = styled.div`
    max-width: 60px;
    width: 100%;
    max-height: 60px;
    height: 100%;
    background-image: url(//t1.kakaocdn.net/kakaocorp/kakaocorp/service/main/icon_ch.png);
    background-position: 50%;
    background-repeat: no-repeat;
    background-size: 100%;
`

export const LinkSocialLinkChLink = styled.a`
    text-decoration: none;
`

export const LinkSocialLinkYt = styled.div`
    max-width: 60px;
    width: 100%;
    max-height: 60px;
    height: 100%;
    background-image: url(//t1.kakaocdn.net/kakaocorp/kakaocorp/service/main/icon_yt.png);
   
    background-position: 50%;
    background-repeat: no-repeat;
    background-size: 100%;
`

export const LinkSocialLinkYtLink = styled.a`
    text-decoration: none;
`

export const LinkSocialLinkInsta = styled.div`
    max-width: 60px;
    width: 100%;
    max-height: 60px;
    height: 100%;
    background-image: url(//t1.kakaocdn.net/kakaocorp/kakaocorp/service/main/icon_insta.png);
   
    background-position: 50%;
    background-repeat: no-repeat;
    background-size: 100%;
`

export const LinkSocialLinkInstaLink = styled.a`
    text-decoration: none;
`

export const LinkSocialLinkFb = styled.div`
    max-width: 60px;
    width: 100%;
    max-height: 60px;
    height: 100%;
    background-image: url(//t1.kakaocdn.net/kakaocorp/kakaocorp/service/main/icon_fb.png);
    background-position: 50%;
    background-repeat: no-repeat;
    background-size: 100%;
`

export const LinkSocialLinkFbLink = styled.a`
    text-decoration: none;
`

export const LinkSocialLinkLi = styled.div`
    max-width: 60px;
    width: 100%;
    max-height: 60px;
    height: 100%;
    background-image: url(https://t1.kakaocdn.net/kakaocorp/kakaocorp/service/main/icon_li.png);
    background-position: 50%;
    background-repeat: no-repeat;
    background-size: 100%;
`

export const LinkSocialLinkLiLink = styled.a`
    text-decoration: none;
`


export const WrapRecruitInnerTop = styled.div`
    max-width: 428px;
    width: 100%;
    max-height: 494px;
    height: 100%;
    background-color: pink;
    background-image: url(//t1.kakaocdn.net/kakaocorp/kakaocorp/service/main/img_recruit.png);
    background-position: 0 100%;
    background-size: 100% auto;
    background-repeat: no-repeat;
    background-color: #0073ff;
    color: #fff;
    border-radius: 36px;
    box-sizing: border-box;
    padding: 40px;
`

export const WrapRecruitInnerTopTitle = styled.strong`
    font-size: 26px;
    line-height: 1.38;
    font-weight: bolder;

`

export const SubHelpDiv = styled.div`
    margin-top: 22px;
    max-width: 94px;
    width: 100%;
    max-height: 25px;
    height: 100%;
    position: static;
    color: #fff;
    font-size: 17px;
    line-height: 1.58;
`

export const SubHelpLink = styled.a`
    display: flex;
    align-items: center;
    gap: 10px;
`


export const WrapBottom = styled.div`
    max-width: 1316px;
    width: 100%;
    max-height: 200px;
    height: 100%;
    display: flex;
    justify-content: space-between;
`

export const BoxHelpTypeDouble = styled.div`
    max-width: 650px;
    width: 100%;
    max-height: 200px;
    height: 100%;
    background-color: ${({ theme }) => (theme === "light" ? "#f3f3f3" : "#333")};
    border-radius: 20px;
    cursor: pointer;
    vertical-align: top;
    color: #000;
`

export const BoxHelpTypeDoubleLink = styled.div`
    max-width: 650px;
    width: 100%;
    max-height: 200px;
    height: 100%;
    position: relative;
    text-decoration: none;
    padding: 36px 40px;
    box-sizing: border-box;
 
`

export const DoubleLink = styled.a`

`

export const TitleHelp = styled.strong`
    max-width: 365px;
    font-size: 26px;
    font-weight: 400;
    line-height: 1.46;
    color: ${({ theme }) => (theme === "light" ? "#000" : "#fff")};
`

export const SubHelp = styled.div`
    position: absolute;
    bottom: 36px;
    left: 40px;
    font-size: 17px;
    line-height: 1.58;
    max-width: 94px;
    width: 100%;
    max-height: 27px;
    height: 100%;
    display: flex;
    align-items: center;
    gap: 10px;
    color: ${({ theme }) => (theme === "light" ? "#000" : "#fff")};
`

export const IconHelp = styled.img`
    max-width: 84px;
    width: 100%;
    max-height: 84px;
    height: 100%;
    position: absolute;
    top: 50%;
    right: 40px;
    transform: translateY(-50%);
`

export const HelpWrapBtn = styled.div`
    max-width: 1316px;
    width: 100%;
    max-height: 76px;
    height: 100%;
    text-align: center;
`

export const LinkCommonDiv = styled.div`
    max-width: 316px;
    width: 100%;
    max-height: 76px;
    height: 100%;
    line-height: 76px;
    border-radius: 38px;
    font-size: 22px;
    font-weight: 400;
    color: #000;
    background-color: ${({ theme }) => (theme === "light" ? "#f3f3f3" : "#333")};
    display: inline-block;
`

export const LinkCommon = styled.a`
    max-width: 316px;
    width: 100%;
    max-height: 76px;
    height: 100%;
    display: flex;
    gap: 10px;
    align-items: center;
    justify-content: center;
    color: ${({ theme }) => (theme === "light" ? "#000" : "#fff")};
`

