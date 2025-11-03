import { Link } from "react-router-dom";
import styled from "styled-components";
import { Swiper, SwiperSlide } from 'swiper/react';

// AboutBoxMenu
export const AboutBoxMenuContainer = styled.div`
    position: fixed;
    top: 91px;
    left: 392px;
    border-top: none;
    border-radius: 0 0 24px 24px;
    background-color: ${({ theme }) => theme === "light" ? "#fff" : "#000"}; 
    padding: 35px;
    box-sizing: border-box;
    border: ${({ theme }) => theme === "light" ? "1px solid #eee" : "1px solid #262626"}; 
    max-width: 521px;
    width: 100%;
    height: 384px;
    visibility: visible;
    display: flex;
    justify-content: space-between;
    z-index: 1000;
`

export const ListSecond = styled.div`
    max-width: 142px;
    width: 100%;
    height: 325px;
    margin-top: -12px;
    border-right: ${({ theme }) => theme === "light" ? "1px solid #f6f6f6" : "1px solid #262626"}; 
    
`

export const ListSecondMenu = styled.div`
    max-width: 142px;
    width: 100%;
    height: 28px;
    letter-spacing: -.5px;
`

export const LinkSubmenu = styled.a`
    display: block;
    min-width: 142px;
    margin-top: 12px;
    font-size: 17px;
    line-height: 28px;
    color: ${({ theme }) => (theme === "light" ? "#000" : "#fff")};
    white-space: pre-line;
    text-decoration: none;
    font-weight: 500;

    &:hover {
        text-decoration: underline;
        text-underline-offset: 4px; 
    }
`


export const ContMenu = styled.div`
    max-width: 307px;
    width: 100%;
    height: 313px;
    display: flex;
    justify-content: flex-end;
`

export const SlickSlider = styled.div`
    position: relative;
    max-width: 270px;
    width: 100%;
    height: 313px;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    overflow: hidden;
    user-select: none;
`


export const StyledSwiper = styled(Swiper)`
    max-width: 270px;
    width: 100%;
    height: 313px;

    .swiper-slide {
        transition: opacity 500ms, visibility 500ms;
    }

    .swiper-pagination {
        position: absolute;
        bottom: 0px;
        left: 50% !important;         
        transform: translateX(-50%); 
        max-width: 80px;
        width: 100%;
        height: 24px;
        display: flex;
        justify-content: space-between;
        align-items: center;
    }

    .swiper-pagination-bullet {
        background-color: ${({ theme }) => (theme === "light" ? "#000" : "#fff")};
        color: #000;
        opacity: .45;
    }

    .swiper-pagination-bullet-active {
        width: 25px;
        height: 8px;
        border-radius: 24px;
        background-color: ${({ theme }) => (theme === "light" ? "#000" : "#fff")};
        color: ${({ theme }) => (theme === "light" ? "#000" : "#fff")};
        opacity: 1;
    }

`

export const SlickSlide = styled(SwiperSlide)`
    max-width: 270px;
    width: 100%;
    height: 281px;
`

export const LinkCont = styled.a`
    max-width: 270px;
    width: 100%;
    height: 281px;
    text-decoration: none;
    border-radius: 24px;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
`

export const ImgCont = styled.img`
    max-width: 270px;
    width: 100%;
    height: 151px;
    border-top-left-radius: 24px;
    border-top-right-radius: 24px;
`

export const WrapCont = styled.div`
    max-width: 270px;
    width: 100%;
    height: 130px;
    background-color: ${({ theme }) => (theme === "light" ? "#f3f3f3" : "#262626")};
    padding: 20px;
    box-sizing: border-box;
    border-radius: 0 0 16px 16px;
`

export const IcoCategory = styled.img`
    display: inline-block;
    margin: 2px 8px 0 0;
    vertical-align: top;
    max-width: 24px;
    width: 100%;
    height: 24px;
`

export const TxtCategory = styled.div`
    display: inline-block;
    width: max-content;
    height: 28px;
    font-size: 13px;
    line-height: 20px;
    letter-spacing: -.2px;
    vertical-align: top;
    padding: 4px 12px;
    box-sizing: border-box;
    border-radius: 8px;
    background-color: ${({ theme }) => (theme === "light" ? "#fff" : "#343434")};
    color: ${({ theme }) => (theme === "light" ? "#000" : "#fff")};
`

export const WrapContDescription = styled.div`
    max-width: 230px;
    width: 100%;
    height: 54px;
    overflow: hidden;
    margin-top: 8px;
    font-weight: 700;
    font-size: 17px;
    line-height: 27px;
    color: ${({ theme }) => (theme === "light" ? "#000" : "#fff")};
`

// TechServiceBoxMenu 
export const TechServiceBoxMenuContainer = styled.div`
    position: fixed;
    top: 91px;
    left: 380px;
    padding: 35px;
    box-sizing: border-box;
    border: ${({ theme }) => theme === "light" ? "1px solid #eee" : "1px solid #262626"}; 
    border-radius: 0 0 24px 24px;
    max-width: 663px;
    width: 100%;
    height: 384px;
    visibility: visible;
    background-color: ${({ theme }) => theme === "light" ? "#fff" : "#000"}; 
    z-index: 1000;
    display: flex;
`

export const TechServiceBoxMenuListSecond = styled.div`
    margin-top: -12px;
    max-width: 284px;
    width: 100%;
    height: 325px;
    display: flex;
`

export const TechServiceListFlex = styled.div`
    max-width: 142px;
    width: 100%;
    height: 325px;
    display: flex;
    flex-direction: column;
`

export const TitSubmenu = styled.div`
    max-width: 142px;
    width: 100%;
    height: 24px;
    margin-top: 12px;
    line-height: 24px;
    color: #666;
    font-size: 14px;
    font-style: normal;
    font-weight: 400;
`

export const ListThird = styled.div`
    max-width: 142px;
    width: 100%;
    height: 238px;
    letter-spacing: -.5px;
    display: flex;
    flex-direction: column;
`

export const TechServiceLinkSubmenu = styled(Link)`
    margin-top: 12px;
    max-width: 142px;
    width: 100%;
    height: 28px;
    font-size: 17px;
    line-height: 28px;
    color: ${({ theme }) => (theme === "light" ? "#000" : "#fff")};
    white-space: pre-line;
    text-decoration: none;

    &:hover {
        text-decoration: underline;
        text-underline-offset: 4px; 
    }
`


export const TechServiceBoxMenuContMenu = styled.div`
    max-width: 307px;
    width: 100%;
    height: 313px;
    display: flex;
    justify-content: flex-end;
    border-left: ${({ theme }) => theme === "light" ? "1px solid #eee" : "1px solid #262626"};
`

export const TechServiceBoxMenuSlickSlider = styled.div`
    position: relative;
    max-width: 270px;
    width: 100%;
    height: 313px;
    user-select: none;
    box-sizing: border-box;
`

export const TechServiceBoxMenuSlickList = styled.div`
    max-width: 270px;
    width: 100%;
    height: 313px;
`

export const TechServiceBoxMenuStyledSwiper = styled(Swiper)`
    max-width: 270px;
    width: 100%;
    height: 313px;

    .swiper-slide {
        transition: opacity 500ms, visibility 500ms;
    }

    .swiper-pagination {
        position: absolute;
        bottom: -8px;
        left: 50% !important;         
        transform: translateX(-50%); 
        max-width: 100px;
        width: 100%;
        height: 24px;
        display: flex;
        justify-content: space-between;
        align-items: center;
    }

    .swiper-pagination-bullet {
        background-color: ${({ theme }) => (theme === "light" ? "#000" : "#fff")};
        color: #000;
        opacity: .45;
    }

    .swiper-pagination-bullet-active {
        width: 25px;
        height: 8px;
        border-radius: 24px;
        background-color: ${({ theme }) => (theme === "light" ? "#000" : "#fff")};
        color: ${({ theme }) => (theme === "light" ? "#000" : "#fff")};
        opacity: 1;
    }
`

export const TechServiceBoxMenuSlickSlide = styled(SwiperSlide)`
    max-width: 270px;
    width: 100%;
    height: 281px;
`

export const TechServiceBoxMenuLinkCont = styled.div`
    max-width: 270px;
    width: 100%;
    height: 281px;
    text-decoration: none;
    cursor: pointer;
    user-select: none;
    border-radius: 24px;
    display: flex;
    flex-direction: column;
`

export const TechServiceBoxMenuImgCont = styled.img`
    max-width: 270px;
    width: 100%;
    height: 151px;
    border-top-left-radius: 24px;
    border-top-right-radius: 24px;
`

export const TechServiceBoxMenuWrapCont = styled.div`
    max-width: 270px;
    width: 100%;
    height: 130px;
    background-color: ${({ theme }) => (theme === "light" ? "#f3f3f3" : "#262626")};
    padding: 20px;
    box-sizing: border-box;
    border-radius: 0 0 16px 16px;
`

export const TechServiceBoxMenuIcoCategory = styled.img`
    max-width: 24px;
    width: 100%;
    height: 24px;
    margin: 2px 8px 0 0;
`

export const TechServiceBoxMenuTxtCategory = styled.div`
    display: inline-block;
    font-size: 13px;
    line-height: 20px;
    letter-spacing: -.2px;
    vertical-align: top;
    width: max-content;
    height: 28px;
    padding: 4px 12px;
    box-sizing: border-box;
    border-radius: 8px;
    background-color: ${({ theme }) => (theme === "light" ? "#fff" : "#343434")};
    color: ${({ theme }) => (theme === "light" ? "#000" : "#fff")};
` 

export const TechServiceWrapContDescription = styled.div`
    overflow: hidden;
    margin-top: 8px;
    color: #000;
    font-size: 17px;
    font-weight: 500;
    line-height: 27px;
    width: max-content;
    height: 54px;
    color: ${({ theme }) => (theme === "light" ? "#000" : "#fff")};
`


// PromiseAndResponsbilityBoxMenu

export const PromiseAndResponsbilityBoxMenuContainer = styled.div`
    max-width: 521px;
    width: 100%;
    height: 384px;
    position: fixed;
    top: 91px;
    left: 450px;
    padding: 35px;
    box-sizing: border-box;
    visibility: visible;
    border: ${({ theme }) => theme === "light" ? "1px solid #eee" : "1px solid #262626"};
    border-radius: 0 0 24px 24px;
    background-color: ${({ theme }) => theme === "light" ? "#fff" : "#000"}; 
    z-index: 1000;
    display: flex;
`

export const PromiseAndResponsbilityListSecond = styled.div`
    max-width: 142px;
    width: 100%;
    height: 325px;
    margin-top: -12px;
`

export const PromiseAndResponsbilityListFlex = styled.div`
    max-width: 142px;
    width: 100%;
    height: 325px;
    display: flex;
    flex-direction: column;
`

export const PromiseAndResponsbilityLinkSubmenu = styled.div`
    margin-top: 12px;
    max-width: 142px;
    width: 100%;
    height: max-content;
    font-size: 17px;
    line-height: 28px;
    color: ${({ theme }) => (theme === "light" ? "#000" : "#fff")};
    white-space: pre-line;

    &:hover {
        text-decoration: underline;
        text-underline-offset: 4px; 
    }
`

export const PromiseAndResponsbilityContMenu = styled.div`
    max-width: 307px;
    width: 100%;
    height: 313px;
    border-left: ${({ theme }) => theme === "light" ? "1px solid #f6f6f6" : "1px solid #262626"}; 
    display: flex;
    justify-content: flex-end;
`

export const PromiseAndResponsbilitySlickSlider = styled.div`
    position: relative;
    max-width: 270px;
    width: 100%;
    height: 313px;
` 

export const PromiseAndResponsbilitySlickList = styled.div`
    max-width: 270px;
    width: 100%;
    height: 313px;
`

export const PromiseAndResponsbilityStyledSwiper = styled(Swiper)`
    max-width: 270px;
    width: 100%;
    height: 313px;

    .swiper-slide {
        transition: opacity 500ms, visibility 500ms;
    }

    .swiper-pagination {
        position: absolute;
        bottom: -8px;
        left: 50% !important;         
        transform: translateX(-50%); 
        max-width: 100px;
        width: 100%;
        height: 24px;
        display: flex;
        justify-content: space-between;
        align-items: center;
    }

    .swiper-pagination-bullet {
        background-color: ${({ theme }) => (theme === "light" ? "#000" : "#fff")};
        color: #000;
        opacity: .45;
    }

    .swiper-pagination-bullet-active {
        width: 25px;
        height: 8px;
        border-radius: 24px;
        background-color: ${({ theme }) => (theme === "light" ? "#000" : "#fff")};
        color: ${({ theme }) => (theme === "light" ? "#000" : "#fff")};
        opacity: 1;
    }
`

export const PromiseAndResponsbilitySlickSlide = styled(SwiperSlide)`
    max-width: 270px;
    width: 100%;
    height: 281px;
`

export const PromiseAndResponsbilityLinkCont = styled.div`
    max-width: 270px;
    width: 100%;
    height: 281px;
    text-decoration: none;
    cursor: pointer;
    user-select: none;
    border-radius: 24px;
    display: flex;
    flex-direction: column;
    background-color: green;
`

export const PromiseAndResponsbilityImgCont = styled.img`
    max-width: 270px;
    width: 100%;
    height: 151px;
    border-top-left-radius: 24px;
    border-top-right-radius: 24px;
`

export const PromiseAndResponsbilityWrapCont = styled.div`
    max-width: 270px;
    width: 100%;
    height: 130px;
    background-color: ${({ theme }) => (theme === "light" ? "#f3f3f3" : "#262626")};
    padding: 20px;
    box-sizing: border-box;
    border-radius: 0 0 16px 16px;
`

export const PromiseAndResponsbilityIcoCategory = styled.img`
    max-width: 24px;
    width: 100%;
    height: 24px;
    margin: 2px 8px 0 0;
`

export const PromiseAndResponsbilityTxtCategory = styled.div`
    display: inline-block;
    font-size: 13px;
    line-height: 20px;
    letter-spacing: -.2px;
    vertical-align: top;
    width: max-content;
    height: 28px;
    padding: 4px 12px;
    box-sizing: border-box;
    border-radius: 8px;
    background-color: ${({ theme }) => (theme === "light" ? "#fff" : "#343434")};
    color: ${({ theme }) => (theme === "light" ? "#000" : "#fff")};
` 

export const PromiseAndResponsbilityWrapContDescription = styled.div`
    overflow: hidden;
    margin-top: 8px;
    color: ${({ theme }) => (theme === "light" ? "#000" : "#fff")};
    font-size: 17px;
    font-weight: 500;
    line-height: 27px;
    width: max-content;
    height: 54px;
`

// NewsBoxMenu 
export const NewsBoxMenuContainer = styled.div`
    position: fixed;
    top: 91px;
    left: 382px;
    padding: 35px;
    box-sizing: border-box;
    border: ${({ theme }) => theme === "light" ? "1px solid #eee" : "1px solid #262626"};
    border-radius: 0 0 24px 24px;
    z-index: 1000;
    background-color: ${({ theme }) => theme === "light" ? "#fff" : "#000"}; 
    max-width: 663px;
    width: 100%;
    height: 371px;
    visibility: visible;
    display:  flex;
`

export const NewsListSecond = styled.div`
    margin-top: -12px;
    max-width: 284px;
    width: 100%;
    height: 312px;
    display: flex;
`

export const NewsListFlex = styled.div`
    max-width: 142px;
    width: 100%;
    height: 312px;
    display: flex;
    flex-direction: column;
`

export const NewsTitSubmenu = styled.div`
    max-width: 142px;
    width: 100%;
    height: 24px;
    color: #666;
    margin-top: 12px;
    line-height: 24px;
    font-style: normal;
    font-weight: 400;
    font-size: 14px;
`

export const NewsListThird = styled.div`
    max-width: 142px;
    width: 100%;
    height: 68px;
    letter-spacing: -.5px;
    display: flex;
    flex-direction: column;
`

export const NewsLinkSubmenu = styled.a`
    margin-top: 12px;
    max-width: 142px;
    width: 100%;
    height: 28px;
    font-size: 17px;
    line-height: 28px;
    color: ${({ theme }) => (theme === "light" ? "#000" : "#fff")};
    white-space: pre-line;

    &:hover {
        text-decoration: underline;
        text-underline-offset: 4px; 
    }
`

export const NewsContMenu = styled.div`
    max-width: 307px;
    width: 100%;
    height: 300px;
    display: flex;
    justify-content: flex-end;
    border-left: ${({ theme }) => theme === "light" ? "1px solid #f6f6f6" : "1px solid #262626"}; 
`

export const NewsSlickSlider = styled.div`
    position: relative;
    max-width: 270px;
    width: 100%;
    height: 300px;
    user-select: none;
    box-sizing: border-box;
`

export const NewsSlickList = styled.div`
    max-width: 270px;
    width: 100%;
    height: 300px;
`

export const NewsStyledSwiper = styled(Swiper)`
    max-width: 270px;
    width: 100%;
    height: 300px;

    .swiper-slide {
        transition: opacity 500ms, visibility 500ms;
    }

    .swiper-pagination {
        position: absolute;
        bottom: -8px;
        left: 50% !important;         
        transform: translateX(-50%); 
        max-width: 100px;
        width: 100%;
        height: 24px;
        display: flex;
        justify-content: space-between;
        align-items: center;
    }

    .swiper-pagination-bullet {
        background-color: ${({ theme }) => (theme === "light" ? "#000" : "#fff")};
        color: #000;
        opacity: .45;
    }

    .swiper-pagination-bullet-active {
        width: 25px;
        height: 8px;
        border-radius: 24px;
        background-color: ${({ theme }) => (theme === "light" ? "#000" : "#fff")};
        color: ${({ theme }) => (theme === "light" ? "#000" : "#fff")};
        opacity: 1;
    }
`

export const NewsBoxMenuSlickSlide = styled(SwiperSlide)`
    max-width: 270px;
    width: 100%;
    height: 268px;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
`

export const NewsBoxMenuLinkContDiv = styled.div`
    max-width: 270px;
    width: 100%;
    height: 130px;
    border-radius: 16px;
`

export const NewsBoxMenuLinkCont = styled.a`
    max-width: 270px;
    width: 100%;
    height: 130px;
    border-radius: 16px;
    text-decoration: none;
    color: #333;
    cursor: pointer;
    user-select: none;
`

export const NewsBoxMenuWrapCont = styled.div`
    max-width: 270px;
    width: 100%;
    height: 130px;
    background-color: ${({ theme }) => (theme === "light" ? "#eee" : "#262626")};
    border-radius: 16px;
    padding: 20px;
    box-sizing: border-box;
`

export const NewsBoxMenuIcoCategory = styled.img`
    max-width: 24px;
    width: 100%;
    height: 24px;
    margin: 2px 8px 0 0;
`

export const NewsBoxMenuTxtCategory = styled.div`
    display: inline-block;
    font-size: 13px;
    line-height: 20px;
    letter-spacing: -.2px;
    vertical-align: top;
    width: max-content;
    height: 28px;
    padding: 4px 12px;
    box-sizing: border-box;
    border-radius: 8px;
    background-color: ${({ theme }) => (theme === "light" ? "#fff" : "#343434")};
    color: ${({ theme }) => (theme === "light" ? "#000" : "#fff")};
` 

export const NewsWrapContDescription = styled.div`
    overflow: hidden;
    margin-top: 8px;
    color: ${({ theme }) => (theme === "light" ? "#000" : "#fff")};
    font-size: 17px;
    font-weight: 500;
    line-height: 27px;
    width: max-content;
    height: max-content;
`