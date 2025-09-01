import styled from "styled-components";

export const ContMainAreaNewsContainer = styled.div`
    max-width: 1316px;
    width: 100%;
    height: 1100px;
    margin: 120px auto;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
`

export const TitleContTypeNewsTitNews3 = styled.div`
    max-width: 1316px;
    width: 100%;
    max-height: 72px;
    height: 100%;
    font-size: 48px;
    line-height: 72px;
    letter-spacing: -1px;
    color: ${({ theme }) => (theme === "light" ? "#000" : "#fff")};
    font-weight: 400;

    &::before {
        content: "";
        max-width: 72px;
        width: 100%;
        max-height: 72px;
        height: 100%;
        margin-right: 16px;
        display: inline-block;
        vertical-align: top;
        background-size: 100%;
        background-image: ${({ theme }) => theme === "light"
        ? "url(//t1.kakaocdn.net/kakaocorp/kakaocorp/service/calendar/light/ico_date31.gif)"
        : "url(//t1.kakaocdn.net/kakaocorp/kakaocorp/service/calendar/dark/ico_date31.gif)"};
    }
`

export const InnerMainInnerNews = styled.div`
    max-width: 1315px;
    width: 100%;
    max-height: 985px;
    height: 100%;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
`

export const WrapTop = styled.div`
    max-width: 1332px;
    width: 100%;
    max-height: 621px;
    height: 100%;
`

export const SlickSlider = styled.div`
    position: relative;
    max-width: 1332px;
    width: 100%;
    max-height: 621px;
    height: 100%;
    box-sizing: border-box;
    user-select: none;
    line-height: 1.5;
    font-weight: 400;
`

export const SlickList = styled.div`
    max-width: 1332px;
    width: 100%;
    max-height: 621px;
    height: 100%;
    overflow: hidden;
    position: relative;
`

export const SlickTrack = styled.div`
    max-width: 1332px;
    width: 100%;
    max-height: 621px;
    height: 100%;
    opacity: 1;
    transform: translate3d(0px, 0px, 0px);
    position: relative;
    top: 0;
    left: 0;
    display: flex;
    justify-content: space-between;
    align-items: center;



    &::before {
        display: table;
        content: "";
    }

    &::after {
        clear: both;
        display: table;
        content: "";
    }
`

export const SlickSlide = styled.div`
    max-width: 444px;
    width: 100%;
    max-height: 621px;
    height: 100%;
`

export const SlickSlideDiv1 = styled.div`
    max-width: 444px;
    width: 100%;
    max-height: 621px;
    height: 100%;
`

export const SlickSlideDiv2 = styled.div`
    max-width: 444px;
    width: 100%;
    max-height: 621px;
    height: 100%;
`

export const WrapCardInnerSlide = styled.div`
    max-width: 428px;
    width: 100%;
    max-height: 621px;
    height: 100%;
`

export const ItemCardNewItemNormalCardTypeMain = styled.div`
    max-width: 428px;
    width: 100%;
    max-height: 621px;
    height: 100%;
    background-color: ${({ theme }) => (theme === "light" ? "#f0f0f0" : "#262626")};
    position: relative;
    border-radius: 36px;
    box-sizing: border-box;
    overflow: hidden;
`

export const InnerCard = styled.div`
    max-width: 428px;
    width: 100%;
    max-height: 621px;
    height: 100%;
    position: relative;
    box-sizing: border-box;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    border-radius: 36px;

`

export const InfoCate = styled.div`
    margin: 25px auto;
    max-width: 368px;
    width: 100%;
    max-height: 46px;
    height: 100%;
    font-size: 0;
    display: flex;
    align-items: center;
`

export const TxtCate = styled.div`
    max-width: 83px;
    width: 100%;
    max-height: 41px;
    width: 100%;
    background-color: ${({ theme }) => (theme === "light" ? "#fff" : "#343434")};
    line-height: 40px;
    border-radius: 8px;
    font-size: 14px;
    letter-spacing: -.2px;
    color: ${({ theme }) => (theme === "light" ? "#000" : "#fff")};
    display: flex;
    justify-content: center;
`

export const TxtDate = styled.div`
    max-width: 76px;
    width: 100%;
    max-height: 46px;
    height: 100%;
    margin-left: 12px;
    font-size: 14px;
    line-height: 46px;
    letter-spacing: -.2px;
    user-select: none;
    display: flex;
    justify-content: center;
    color: ${({ theme }) => (theme === "light" ? "#000" : "#fff")};
`

export const LinkItemDiv = styled.div`
    max-width: 428px;
    width: 100%;
    max-height: 525px;
    height: 100%;
    
`

export const LinkItem = styled.a`
    max-width: 428px;
    width: 100%;
    max-height: 525px;
    height: 100%;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
`

export const InfoCard = styled.div`
    max-width: 368px;
    width: 100%;
    max-height: 26px;
    height: 100%;
    position: absolute;
    top: 326px;
    left: 30px;
    right: 30px;
    overflow: hidden;
    font-size: 16px;
    line-height: 26px;
    white-space: nowrap;
    text-overflow: ellipsis;
    pointer-events: none;
`

export const TxtKeyword = styled.span`
    max-width: 94px;
    width: 100%;
    max-height: 23px;
    height: 100%;
    margin-right: 8px;
    letter-spacing: -.5px;
    font-size: 16px;
    white-space: nowrap;
    color: ${({ theme }) => (theme === "light" ? "#666" : "#fff")};
`


export const TitCard = styled.div`
    max-width: 428px;
    width: 100%;
    max-height: 210px;
    height: 100%;
    padding: 0 30px;
    font-size: 30px;
    font-weight: bold;
    line-height: 1.4;
    user-select: none;
    letter-spacing: -.6px;
    color: ${({ theme }) => (theme === "light" ? "#000" : "#fff")};
`

export const WrapThumb = styled.div`
    max-width: 428px;
    width: 100%;
    max-height: 249px;
    height: 100%;
    margin-top: 66px;
    position: relative;
`

export const ThumbImg = styled.img`
    max-width: 443px;
    width: 100%;
    max-height: 249px;
    height: 100%;
    position: absolute;
    overflow-clip-margin: content-box;
    overflow: clip;

`


export const BtnShareIcoComm = styled.div`
    max-width: 24px;
    width: 100%;
    max-height: 24px;
    height: 100%;
    position: absolute;
    right: 30px;
    top: 41px;
    z-index: 20;
    overflow: hidden;

`


export const IcoCate = styled.img`
    max-width: 46px;
    width: 100%;
    max-height: 46px;
    height: 100%;
    margin-right: 12px;
    vertical-align: top;
`



export const WrapBottom = styled.div`
    max-width: 1316px;
    width: 100%;
    max-height: 324px;
    height: 100%;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
`

export const WrapSlides = styled.div`
    max-width: 1332px;
    width: 100%;
    max-height: 198px;
    height: 100%;
`

export const TodayNewsSlickTrack = styled.div`
    max-width: 1332px;
    width: 100%;
    max-height: 198px;
    height: 100%;
    display: flex;
    justify-content: space-between;
    position: relative;
    top: 0;
    left: 0;
`

export const TodayNewsSlickSlide = styled.div`
    max-width: 666px;
    width: 100%;
    max-height: 198px;
    height: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
    
    
`

export const ItemCardNewBoxNews = styled.div`
    position: relative;
    max-width: 650px;
    width: 100%;
    max-height: 198px;
    height: 100%;
    background-color: ${({ theme }) => (theme === "light" ? "#f0f0f0" : "#262626")};
    border-radius: 20px;
`

export const BoxTop = styled.div`
    margin: 30px auto;
    max-width: 578px;
    width: 100%;
    max-height: 38px;
    height: 100%;
`
export const TitleBox = styled.div`
    margin: 0px auto;
    font-size: 27px;
    font-weight: 400;
    line-height: 38px;
    color: #000;
    max-width: 578px;
    width: 100%;
    max-height: 76px;
    height: 100%;
`

export const TitleBoxLink = styled.a`
    max-width: 578px;
    width: 100%;
    max-height: 76px;
    height: 100%;
    color: ${({ theme }) => (theme === "light" ? "#000" : "#fff")};
`

export const BadgeBox = styled.div`
    max-width: 217px;
    width: 100%;
    max-height: 38px;
    height: 100%;
    font-size: 14px;
    letter-spacing: -.2px;
    user-select: none;
    display: flex;
    justify-content: space-between;
    align-items: center;
`

export const IconBox = styled.img`
    max-width: 38px;
    width: 100%;
    max-height: 38px;
    height: 100%;
`

export const CateBox = styled.div`
    max-width: 73px;
    width: 100%;
    max-height: 33px;
    height: 100%;
    background-color: ${({ theme }) => (theme === "light" ? "#fff" : "#343434")};
    border-radius: 8px;
    color: ${({ theme }) => (theme === "light" ? "#000" : "#fff")};
    display: flex;
    justify-content: center;
    align-items: center;
`

export const DateBox = styled.div`
    max-width: 76px;
    width: 100%;
    max-height: 38px;
    height: 100%;
    font-size: 14px;
    line-height: 38px;
    color: ${({ theme }) => (theme === "light" ? "#000" : "#fff")};
    display: flex;
    justify-content: center;
    align-items: center;
`

export const TodayNewsBtnShareIcoComm = styled.div`
    position: absolute;
    top: 38px;
    right: 34px;
    max-width: 24px;
    width: 100%;
    max-height: 24px;
    height: 100%;
`


export const WrapLinks = styled.div`
    max-width: 1332px;
    width: 100%;
    max-height: 110px;
    height: 100%;
    display: flex;
    justify-content: space-between;
`

export const LinkNewsDiv = styled.div`
    max-width: 650px;
    width: 100%;
    max-height: 110px;
    height: 100%;
    background-color: ${({ theme }) => (theme === "light" ? "#f0f0f0" : "#262626")};
    box-sizing: border-box;
    border-radius: 20px;
`

export const LinkNews = styled.a`
    max-width: 650px;
    width: 100%;
    max-height: 110px;
    height: 100%;
    display: flex;
    gap: 450px;
    justify-content: center;
    align-items: center;

`

export const TitleLink = styled.div`
    font-size: 26px;
    font-weight: 400;
    line-height: 38px;
    letter-spacing: -.6px;
    color: ${({ theme }) => (theme === "light" ? "#000" : "#fff")};
`