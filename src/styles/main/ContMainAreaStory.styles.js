import styled from 'styled-components';

// const slideLeft = keyframes`
//     0% {
//         transform: translateX(0.2%);
//     }
//     100% {
//         transform: translateX(-50.2%);
//     }
// `;

export const ContMainAreaStoryContainer = styled.div`
    max-width: 1440px;
    width: 100%;
    height: 554px;
    margin: 120px auto;
`;

export const TitleContTypeStory = styled.h3`
    max-width: 1316px;
    width: 100%;
    height: 72px;
    overflow: hidden;
    margin: 0 auto;
    letter-spacing: -1px;
    

    &::before {
        content: "";
        display: inline-block;
        vertical-align: top;
        background-size: 100%;
        background-image: ${({ theme }) => theme === "light"
              ? "url(//t1.kakaocdn.net/kakaocorp/kakaocorp/service/ico_archives.gif);"
              : "url(//t1.kakaocdn.net/kakaocorp/kakaocorp/service/ico_archives_dark.gif)"};
        max-width: 72px;
        width: 100%;
        height: 72px;
        margin-right: 16px;

    }
`

export const TitleContTypeStorySpan = styled.span`
    font-size: 48px;
    line-height: 72px;
    font-weight: 400;
    color: ${({ theme }) => (theme === "light" ? "#000" : "#fff")};
`

export const WrapTop = styled.div`
    margin: 0;
    padding: 0;
    margin-top: 8px;
    float: right;
    max-width: 56px;
    width: 100%;
    height: 56px;
`

export const BtnStoryTypePause = styled.button`
    background-image: ${({ theme, paused }) =>
        paused
        ? // ▶️ Play 아이콘
            theme === "light"
            ? "url(\"data:image/svg+xml;charset=utf-8,%3Csvg xmlns='http://www.w3.org/2000/svg' width='56' height='56' fill='none'%3E%3Cpath d='M50 28c0 12.15-9.85 22-22 22S6 40.15 6 28 15.85 6 28 6s22 9.85 22 22z' fill='%23000' stroke='%23000' stroke-width='4' stroke-linecap='round' stroke-linejoin='round'/%3E%3Cpath d='M24 19l14 9-14 9V19z' fill='%23fff'/%3E%3C/svg%3E\")"
            : "url(\"data:image/svg+xml;charset=utf-8,%3Csvg xmlns='http://www.w3.org/2000/svg' width='56' height='56' fill='none'%3E%3Cpath d='M50 28c0 12.15-9.85 22-22 22S6 40.15 6 28 15.85 6 28 6s22 9.85 22 22z' fill='%23fff' stroke='%23fff' stroke-width='4' stroke-linecap='round' stroke-linejoin='round'/%3E%3Cpath d='M24 19l14 9-14 9V19z' fill='%23000'/%3E%3C/svg%3E\")"
        : // ⏸ Pause 아이콘
            theme === "light"
            ? "url(\"data:image/svg+xml;charset=utf-8,%3Csvg xmlns='http://www.w3.org/2000/svg' width='56' height='56' fill='none'%3E%3Cpath d='M50 28c0 12.15-9.85 22-22 22S6 40.15 6 28 15.85 6 28 6s22 9.85 22 22z' fill='%23000' stroke='%23000' stroke-width='4' stroke-linecap='round' stroke-linejoin='round'/%3E%3Cpath d='M23.332 35V21m9.336 14V21' stroke='%23fff' stroke-width='4.667' stroke-linejoin='round'/%3E%3C/svg%3E\")"
            : "url(\"data:image/svg+xml;charset=utf-8,%3Csvg xmlns='http://www.w3.org/2000/svg' width='56' height='56' fill='none'%3E%3Cpath d='M50 28c0 12.15-9.85 22-22 22S6 40.15 6 28 15.85 6 28 6s22 9.85 22 22z' fill='%23fff' stroke='%23fff' stroke-width='4' stroke-linecap='round' stroke-linejoin='round'/%3E%3Cpath d='M23.332 35V21m9.336 14V21' stroke='%23000' stroke-width='4.667' stroke-linejoin='round'/%3E%3C/svg%3E\")"};

            display: block;
            max-width: 56px;
            width: 100%;
            height: 56px;
            background-position: 50%;
            background-repeat: no-repeat;
            background-size: 100% auto;
            border: 0;
            background-color: transparent;
            cursor: pointer;
            font-size: 14px;
            line-height: 1.5;
`;


export const SlideTrack = styled.div`
    display: flex;
    gap: 20px;
    width: max-content;   
    position: absolute;
    top: 0;
    left: 0px;
    padding: 0;
    transition: transform 0.5s ease-in-out;
`;

export const InnerMainInnerStory = styled.div`
    position: relative;
    margin-top: 43px;
    width: 100%;
    height: 439px;
    overflow: hidden;

`
   

export const Slide = styled.div`
    width: 3579px;
    height: 439px;
    flex-shrink: 0;
    cursor: grab;
    user-select: none;
    display: flex;
    gap: 20px;
`;

export const ItemStoryTypeWide = styled.div`
    max-width: 1110px;
    width: 100%;
    height: 439px;
`

export const WrapCont = styled.a`
    max-width: 1110px;
    width: 100%;
    height: 439px;
    outline-offset: -1px;
    overflow: hidden;
    box-sizing: border-box;
    display: flex;
    border-radius: 24px;
    text-decoration: none;
`

export const WrapText = styled.div`
    max-width: 332px;
    width: 100%;
    height: 439px;
    background-color: ${({ theme }) => (theme === "light" ? "#f0f0f0" : "#262626")};
`

export const WrapThumb = styled.div`
    position: relative;
    max-width: 778px;
    width: 100%;
    height: 439px;
`

export const ThumbImg = styled.img`
    max-width: 780px;
    position: absolute;
    left: 50%;
    transform: translateX(-50%);
`

export const InfoCate = styled.div`
    max-width: 272px;
    width: 100%;
    height: 32px;
    margin: 30px auto;
    display: flex;
    align-items: center;
`

export const IcoCate = styled.img`
    max-width: 32px;
    width: 100%;
    height: 32px;

`

export const TxtCate = styled.div`
    height: 32px;
    padding: 0 12px;
    line-height: 32px;
    background-color: ${({ theme }) => (theme === "light" ? "#fff" : "#343434")};
    font-size: 14px;
    font-weight: 400;
    letter-spacing: -.2px;
    color: ${({ theme }) => (theme === "light" ? "#000" : "#fff")};
    border-radius: 8px;
    display: inline-block;
    margin-left: 8px;

`

export const BtnShareIcoComm = styled.div`
    position: absolute;
    top: 34px;
    left: 287px;
    z-index: 20;
    width: 24px;
    height: 24px;
    font-size: 0;
    line-height: 0;
    text-indent: -9999px;
    background-color: transparent;
    cursor: pointer;
    color: #333;
`

export const IcoShare = styled.svg`
    display: block;
    width: 24px;
    height: 24px;
    margin: 0 auto;
`

export const TitCard = styled.strong`
    max-width: 272px;
    width: 100%;
    height: 72px;
    display: -webkit-box;
    margin: 16px auto;
    font-size: 26px;
    line-height: 1.38;
    letter-spacing: -.6px;
    color: ${({ theme }) => (theme === "light" ? "#000" : "#fff")};
`

export const DescCard = styled.p`
    max-width: 272px;
    width: 100%;
    height: 182px;
    font-size: 16px;
    color: ${({ theme }) => (theme === "light" ? "#666" : "#fff")};
    margin: 12px auto;
    line-height: 1.62;
    letter-spacing: -.5px;

`

export const InfoCard = styled.div`
    position: absolute;
    max-width: 252px;
    width: 100%;
    height: 26px;
    left: 40px;
    right: 40px;
    font-weight: 400;
    line-height: 26px;
    bottom: 30px;
    white-space: normal;
    overflow: hidden;
`

export const TxtKeyword = styled.span`
    font-size: 16px;
    margin-right: 8px;
    letter-spacing: -.5px;
    display: inline-block;
    color: ${({ theme }) => (theme === "light" ? "#666" : "#fff")};
`

export const ItemStoryTypeNormal = styled.div`
    max-width: 317px;
    width: 100%;
    height: 439px;
    border-radius: 24px;
`

export const ItemCardNewItemBottomCardTypeFlow = styled.div`
    max-width: 317px;
    width: 100%;
    height: 439px;
    background-color: ${({ theme }) => (theme === "light" ? "#f0f0f0" : "#262626")};
    border-radius: 24px;
    display: block;
    position: relative;
    overflow: hidden;
    box-sizing: border-box;
    user-select: none;
    margin: 0;
    padding: 0;
`

export const LinkCard = styled.a`
    position: relative;
    display: flex;
    flex-direction: column;
    z-index: 10;
    outline-offset: -3px;
    text-decoration: none;
    color: #333;
    cursor: pointer;
`

export const HeroWrapCont = styled.div`
    max-width: 317px;
    width: 100%;
    height: 179px;
    color: #333;
    cursor: pointer;
    user-select: none;
`

export const HeroWrapThumb = styled.div`
    max-width: 317px;
    width: 100%;
    height: 179px!important;
    position: relative;
    display: block;
`

export const HeroThumbImg = styled.img`
    max-width: 318px;
    width: 100%;
    height: 179px;
    position: absolute;
    left: 50%;
    transform: translateX(-50%);
    display: block;
    z-index: -1;
`

export const HeroWrapText = styled.div`
    max-width: 317px;
    width: 100%;
    height: 260px;
    background-color: ${({ theme }) => (theme === "light" ? "#f0f0f0" : "#262626")};
    padding: 30px 30px 20px;
    box-sizing: border-box; 
`

export const HeroInfoCate = styled.div`
    max-width: 257px;
    width: 100%;
    height: 32px;
    display: flex;
    align-items: center;
    margin: 0px auto;
    user-select: none;
    height: 32px;
`

export const HeroIcoCate = styled.img`
    max-width: 32px;
    width: 100%;
    height: 32px;
`

export const HeroBtnShareIcoComm = styled.div`
    z-index: 20;
    bottom: 202px;
    right: 24px;
    width: 24px;
    height: 24px;
    position: absolute;
    line-height: 0;
    text-indent: -9999px;
`

export const HeroTitCard = styled.div`
    max-width: 257px;
    width: 100%;
    height: 108px;
    margin: 16px auto;
    font-size: 26px;
    line-height: 1.38;
    letter-spacing: -.6px;
    color: ${({ theme }) => (theme === "light" ? "#000" : "#fff")};
`

export const HeroInfoCard = styled.div`
    max-width: 257px;
    width: 100%;
    height: 26px;
    margin: 28px auto;
    font-size: 16px;
    line-height: 1.73;
    color: #666;

`

export const ItemStoryTypeNormalDream = styled.div`
    max-width: 317px;
    width: 100%;
    height: 439px;
    border-radius: 24px;
`

export const ItemCardNewItemNormalCardTypeFlow = styled.div`
    max-width: 317px;
    width: 100%;
    height: 439px;
    border-radius: 24px;
    background-color: green;
    margin: 0 auto;
    user-select: none;
    overflow: hidden;
    box-sizing: border-box;
    position: relative;
    background-color: ${({ theme }) => (theme === "light" ? "#f0f0f0" : "#262626")};
`

export const InnerCard = styled.div`
    max-width: 317px;
    width: 100%;
    height: 439px;
    position: relative;
    box-sizing: border-box;
    user-select: none;
`

export const ClickStoryCard2 = styled.a`
    max-width: 317px;
    width: 100%;
    height: 362px;
    outline-offset: -4px;
    text-decoration: none;
    color: #333;
    cursor: pointer;
    user-select: none;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
`

export const WrapThumbDream = styled.div`
    max-width: 317px;
    width: 100%;
    height: 179px;
    background-color: pink;
`

export const ThumbImgDream = styled.img`
    max-width: 318px;
    width: 100%;
    height: 179px;
`

export const InfoCardDream = styled.div`
    max-width: 257px;
    width: 100%;
    height: 26px;
    position: absolute;
    top: 200px;
    left: 30px;
    right: 30px;
    overflow: hidden;
    white-space: nowrap;
    text-overflow: ellipsis;
    line-height: 26px;
    font-size: 16px;
    user-select: none;
`

export const BtnShareIcoCommDream = styled.div`
    max-width: 24px;
    width: 100%;
    height: 24px;
    position: absolute;
    top: 34px;
    right: 20px;
    z-index: 20;
    font-size: 0;
    line-height: 0;
    text-indent: -9999px;
    background-color: transparent;
    color: #333;
`

export const ChoSeungYeonItemStoryTypeNormal = styled.div`
    max-width: 317px;
    width: 100%;
    height: 439px;
`

export const ChoSeungYeonItemCardNewItemBottomCardTypeFlow = styled.div`
    max-width: 317px;
    width: 100%;
    height: 439px;
    position: relative;
    overflow: hidden;
    box-sizing: border-box;
    border-radius: 24px;
    user-select: none;
    background-color: ${({ theme }) => (theme === "light" ? "#f0f0f0" : "#262626")};
`

export const ChoSeungYeonLinkCard = styled.a`
    max-width: 317px;
    width: 100%;
    height: 439px;
    position: relative;
    z-index: 10;
    outline-offset: -3px;
    text-decoration: none;
    color: #333;
    cursor: pointer;

`

export const ChoSeungYeonWrapCont = styled.div`
    max-width: 317px;
    width: 100%;
    height: 439px;
    position: relative;
    box-sizing: border-box;
`

export const ChoSeungYeonWrapThumb = styled.div`
    position: relative;
    max-width: 317px;
    width: 100%;
    height: 179px!important;
`

export const ChoSeungYeonThumbImg = styled.img`
    max-width: 317px;
    width: 100%;
    height: 100%;
    position: absolute;
    border: 0;
`

export const ChoSeungYeonWrapText = styled.div`
    max-width: 317px;
    width: 100%;
    height: 260px;
    position: relative;
    box-sizing: border-box;
    user-select: none;
`

export const ChoSeungYeonInfoCate = styled.div`
    max-width: 257px;
    width: 100%;
    height: 32px;
    margin: 30px auto;
    display: flex;
    align-items: center;
`

export const ChoSeungYeonTitCard = styled.div`
    max-width: 257px;
    width: 100%;
    height: 108px;
    margin: 16px auto;
    font-size: 26px;
    font-weight: bold;
    line-height: 1.38;
    letter-spacing: -.6px;
    color: ${({ theme }) => (theme === "light" ? "#000" : "#fff")};
`

export const ChoSeungYeonInfoCard = styled.div`
    max-width: 257px;
    width: 100%;
    height: 26px;
    margin: 0px auto;
    font-size: 16px;
    line-height: 1.73;
    color: #666;
`

export const ItemStoryTypeRow = styled.div`
    max-width: 772px;
    width: 100%;
    height: 439px;
`

export const ItemCardNewItemRowCardTypeFlow = styled.div`
    position: relative;
    border-radius: 24px;
    background-color: ${({ theme }) => (theme === "light" ? "#f0f0f0" : "#262626")};
    overflow: hidden;
    box-sizing: border-box;
    width: 100%;
    height: 100%;
    user-select: none;
`

export const LocationWrapCont = styled.a`
    font-size: 0;
    outline-offset: -1px;
    overflow: hidden;
    box-sizing: border-box;
    height: 100%;
    text-decoration: none;
    color: #333;
    cursor: pointer;
    display: flex;
`

export const LocationWrapText = styled.div`
    position: relative;
    box-sizing: border-box;
    max-width: 332px;
    width: 100%;
    height: 439px;
    user-select: none;
`

export const LocationWrapThumb = styled.div`
    max-width: 439px;
    width: 100%;
    height: 439px;
    line-height: 1.5;
`

export const LocationThumbImg = styled.img`
    position: absolute;
    max-width: 420px;
    width: 100%;
    height: 420px;
    border: 0;
    overflow-clip-margin: content-box;
    overflow: clip;
    white-space: nowrap;
`

export const LocationIcoCate = styled.img`
    max-width: 32px;
    width: 100%;
    height: 32px;
    margin-right: 8px;

`

export const LocationTxtCate = styled.div`
    max-width: 115px;
    width: 100%;
    height: 32px;
    line-height: 32px;
    background-color: ${({ theme }) => (theme === "light" ? "#fff" : "#343434")};
    font-size: 14px;
    letter-spacing: -.2px;
    color: ${({ theme }) => (theme === "light" ? "#000" : "#fff")};
    border-radius: 8px;
    display: flex;
    justify-content: center;
    align-items: center;   
`

export const LocationTitCard = styled.div`
    max-width: 272px;
    width: 100%;
    height: 107px;
    margin: 16px auto;
    font-size: 26px;
    font-weight: bold;
    line-height: 1.38;
    letter-spacing: -.6px;
    color: ${({ theme }) => (theme === "light" ? "#000" : "#fff")};
`

export const LocationDescCard = styled.p`
    max-width: 272px;
    width: 100%;
    height: 182px;
    font-size: 16px;
    white-space: normal;
    line-height: 1.62;
    letter-spacing: -.5px;
    margin: 12px auto;
    color: ${({ theme }) => (theme === "light" ? "#666" : "#fff")};
`

export const LocationInfoCard = styled.div`
    position: absolute;
    bottom: 30px;
    left: 40px;
    right: 40px;
    max-width: 252px;
    width: 100%;
    height: 26px;
    margin: 0px auto;
    font-size: 16px;
    line-height: 1.73;
    color: #666;
`

export const ReplyWrapCont = styled.div`
    position: relative;
    user-select: none;
    max-width: 317px;
    width: 100%;
    height: 439px;
    background-color: ${({ theme }) => (theme === "light" ? "#f0f0f0" : "#262626")};
`

export const ReplyWrapThumb = styled.div`
    position: relative;
    max-width: 317px;
    width: 100%;
    height: 179px!important;
    white-space: nowrap;
`

export const ReplyThumbImg = styled.img`
    position: absolute;
    z-index: 1;
    border: 0;
    max-width: 317px;
    width: 100%;
    height: 100%;

`

export const ReplyWrapText = styled.div`
    position: relative;
    max-width: 317px;
    width: 100%;
    height: 260px;
    box-sizing: border-box;
    user-select: none;

`

export const ReplyInfoCate = styled.div`
    max-width: 257px;
    width: 100%;
    height: 32px;
    display: flex;
    align-items: center;
    margin: 30px auto;
`

export const ReplyBtnShareIcoComm = styled.div`
    position: absolute;
    bottom: 202px;
    right: 20px;
    max-width: 24px;
    width: 100%;
    height: 24px;
    line-height: 0;
    z-index: 20;
`

export const ReplyTitCard = styled.div`
    max-width: 257px;
    width: 100%;
    height: 108px;
    margin: 16px auto;
    font-size: 26px;
    font-weight: bold;
    line-height: 1.38;
    letter-spacing: -.6px;
    color: ${({ theme }) => (theme === "light" ? "#000" : "#fff")};
`

export const ReplyInfoCard = styled.div`
    max-width: 257px;
    width: 100%;
    height: 26px;
    margin: 0 auto;
    font-size: 16px;
    line-height: 1.73;
    color: #666;
    white-space: normal;
    user-select: none;
`

export const BlindPersonInnerCard = styled.div`
    position: relative;
    box-sizing: border-box;
    user-select: none;
    max-width: 317px;
    width: 100%;
    height: 439px;

`

export const BlindPersonInfoCate = styled.div`
    max-width: 257px;
    width: 100%;
    height: 32px;
    margin: 30px auto;
    display: flex;
    align-items: center;
`

export const BlindPersonBtnShareIcoComm = styled.div`
    position: absolute;
    top: 34px;
    right: 20px;
    max-width: 24px;
    width: 100%;
    height: 24px;
    z-index: 20;
    font-size: 0;
    line-height: 0;
`

export const BlindPersonLinkItem = styled.div`
    max-width: 317px;
    width: 100%;
    height: 362px;
    font-size: 1px;
    text-decoration: none;
    color: #333;
    margin: 0 30px;
`

export const BlindPersonTitCard = styled.a`
    max-width: 317px;
    width: 100%;
    height: 108px;
    margin: 16px auto;
    font-size: 26px;
    font-weight: bold;
    line-height: 36px;
    letter-spacing: -.6px;
    color: ${({ theme }) => (theme === "light" ? "#000" : "#fff")};
    display: flex;
    flex-direction column;
    justify-content: space-between;
`

export const BlindPersonWrapThumb = styled.div`
    max-width: 317px;
    width: 100%;
    height: 179px;
    background-color: green;
    margin: 75px -30px;
    position: relative;
    font-size: 1px;
`

export const BlindPersonThumbImg = styled.img`
    max-width: 317px;
    width: 100%;
    height: 179px;
`

export const BlindPersonInfoCard = styled.div`
    position: absolute;
    top: 200px;
    left: 30px;
    right: 30px;
    max-width: 257px;
    width: 100%;
    height: 26px;
    white-space: nowrap;
    user-select: none;
    font-size: 16px;
    line-height: 26px;
    color: #666;
`