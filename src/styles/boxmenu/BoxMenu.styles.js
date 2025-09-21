import styled from "styled-components";
import { Swiper, SwiperSlide } from 'swiper/react';

// AboutBoxMenu
export const AboutBoxMenuContainer = styled.div`
    position: fixed;
    top: 91px;
    left: 320px;
    border-top: none;
    border-radius: 0 0 24px 24px;
    background-color: #fff;
    padding: 35px;
    box-sizing: border-box;
    border: 1px solid #eee;
    max-width: 521px;
    width: 100%;
    height: 384px;
    background-color: #fff;
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
    border-right: 1px solid #f6f6f6;
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
    color: #000;
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
        background-color: "#000";
        color: #000;
        opacity: .45;
    }

    .swiper-pagination-bullet-active {
        width: 25px;
        height: 8px;
        border-radius: 24px;
        background-color: #000;
        color: #000;
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
    background-color: #f3f3f3;
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
    background-color: #fff;
    color: #000;
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
    color: #000;
`

// TechServiceBoxMenu 
export const TechServiceBoxMenuContainer = styled.div`
    position: fixed;
    top: 91px;
    left: 380px;
    padding: 35px;
    box-sizing: border-box;
    border: 1px solid #eee;
    border-top: 1px solid #eee;
    border-radius: 0 0 24px 24px;
    max-width: 663px;
    width: 100%;
    height: 384px;
    visibility: visible;
    background-color: #fff;
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

export const TechServiceLinkSubmenu = styled.a`
    margin-top: 12px;
    max-width: 142px;
    width: 100%;
    height: 28px;
    font-size: 17px;
    line-height: 28px;
    color: #000;
    white-space: pre-line;

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
    border-left: 1px solid #eee;
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
        background-color: "#000";
        color: #000;
        opacity: .45;
    }

    .swiper-pagination-bullet-active {
        width: 25px;
        height: 8px;
        border-radius: 24px;
        background-color: #000;
        color: #000;
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
    background-color: yellow;
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
    background-color: #f3f3f3;
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
    background-color: #fff;
    color: #000;
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
`


