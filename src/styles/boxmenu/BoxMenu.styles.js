import styled from "styled-components";
import { Swiper, SwiperSlide } from 'swiper/react';

// AboutBoxMenu
export const AboutBoxMenuContainer = styled.div`
    position: absolute;
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