import styled from "styled-components";
import { Swiper } from 'swiper/react';

export const ContMainAreaBannerContainer = styled.div`
    max-width: 1324px;
    width: 100%;
    height: 621px;
    margin: 0 auto;
    display: flex;
    justify-content: space-between;
    align-items: center;
`

export const AreaVisual = styled.div`
    position: relative;
    max-width: 1094px;
    width: 100%;
    height: 621px;
    border-radius: 36px;
`

export const ItemVisualVideo = styled.video`
    position: absolute;
    max-width: 1104px;
    width: 100%;
    height: 621px;
    object-fit: contain;
    overflow: clip;
    overflow-clip-margin: content-box;
    border-radius: 36px;
`

export const WrapText = styled.div`
    position: absolute;
    left: 90px;
    top: 80px;
    color: #fff;
    max-width: 700px;
    width: 100%;
    height: 60px;
`

export const InnerBottomTypeBtn = styled.div`
    position: absolute;
    bottom: -2px;
    left: -2px;
    max-width: 247px;
    width: 100%;
    max-height: 99px;
    height: 100%;
    background-color: ${({ theme }) => theme === "light" ? "#fff" : "#000"}; 
    border-radius: 0 36px 0 0;
    display: flex;
    justify-content: center;
    align-items: center;


    &::before {
        content: "";
        position: absolute;
        left: 0;
        top: -36px;
        max-width: 38px;
        width: 100%;
        max-height: 38px;
        height: 100%;
        background-position: 50%;
        background-repeat: no-repeat;
        background-size: 100% auto;
        background-image: ${({ theme }) => theme === "light"
        ? `url("data:image/svg+xml;charset=utf-8,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 38 38'%3E%3Cpath d='M2 0H0v38h38v-2C18.1 36 2 19.9 2 0z' fill='%23fff'/%3E%3C/svg%3E")`
        : `url("data:image/svg+xml;charset=utf-8,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 38 38'%3E%3Cpath d='M2 0H0v38h38v-2C18.1 36 2 19.9 2 0z' fill='%23000'/%3E%3C/svg%3E")`};
    }

    &::after {
        content: "";
        position: absolute;
        right: -36px;
        bottom: 0;
        max-width: 38px;
        width: 100%;
        max-height: 38px;
        height: 100%;
        background-position: 50%;
        background-repeat: no-repeat;
        background-size: 100% auto;
        background-image: ${({ theme }) => theme === "light"
        ? `url("data:image/svg+xml;charset=utf-8,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 38 38'%3E%3Cpath d='M2 0H0v38h38v-2C18.1 36 2 19.9 2 0z' fill='%23fff'/%3E%3C/svg%3E")`
        : `url("data:image/svg+xml;charset=utf-8,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 38 38'%3E%3Cpath d='M2 0H0v38h38v-2C18.1 36 2 19.9 2 0z' fill='%23000'/%3E%3C/svg%3E")`};
    
    }
`

export const LinkBottom = styled.a`
    max-width: 201px;
    width: 100%;
    max-height: 48px;
    height: 100%;
    line-height: 48px;
    font-size: 22px;
    letter-spacing: -.6px;
    color: ${({ theme }) => (theme === "light" ? "#000" : "#fff")};
    display: flex;
    justify-content: space-between;
    align-items: center;
`

export const TitleVisual = styled.strong`
    font-size: 48px;
    line-height: 1.25;
    font-weight: 400;
    letter-spacing: -1px;
    color: #fff;
`

export const InnerfirstWidget = styled.div`
    max-width: 206px;
    width: 100%;
    height: 206px;
    border-radius: 24px;
`

export const InnerSlideFirstLink = styled.a`
    max-width: 206px;
    width: 100%;
    height: 206px;
    border-radius: 24px;
`

export const InnerFirstImg = styled.div`
    max-width: 206px;
    width: 100%;
    height: 206px;
    border-radius: 24px;
`

export const ImgFirst = styled.img`
    max-width: 206px;
    width: 100%;
    height: 206px;
    border-radius: 24px;
`


export const InnerThirdWidget = styled.div`
    position: relative; 
    max-width: 215px;
    width: 100%;
    height: 124px;

    &::after {
        content: "";
        width: 36px;
        height: 128px;
        top: -2px;
        right: -2px;
        z-index: 2;
        position: relative;
        background-image: url("data:image/svg+xml;charset=utf-8,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 36 128'%3E%3Cpath d='M33.3 119.9c-5.1 0-9.9-1.1-14.3-3.2-4.4 5.7-11.3 9.3-19 9.3v2h36V0H0v2c13.3 0 24 10.7 24 24v76.9c.4 7 3.9 13.1 9.3 17' fill='%23fff' fill-rule='evenodd' clip-rule='evenodd'/%3E%3C/svg%3E");
    }
`


export const InnerSlideThirdLink = styled.a`
    max-width: 215px;
    width: 100%;
    height: 124px;
    text-decoration: none;

    &::after {
        content: "";
        width: 36px;
        height: 128px;
        top: -2px;
        right: 0px;
        z-index: 2;
        position: absolute;
        background-image: ${({ theme }) => theme === "light" 
        ? `url("data:image/svg+xml;charset=utf-8,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 36 128'%3E%3Cpath d='M33.3 119.9c-5.1 0-9.9-1.1-14.3-3.2-4.4 5.7-11.3 9.3-19 9.3v2h36V0H0v2c13.3 0 24 10.7 24 24v76.9c.4 7 3.9 13.1 9.3 17' fill='%23fff' fill-rule='evenodd' clip-rule='evenodd'/%3E%3C/svg%3E")`
        : `url("data:image/svg+xml;charset=utf-8,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 36 128'%3E%3Cpath d='M33.3 119.9c-5.1 0-9.9-1.1-14.3-3.2-4.4 5.7-11.3 9.3-19 9.3v2h36V0H0v2c13.3 0 24 10.7 24 24v76.9c.4 7 3.9 13.1 9.3 17' fill='%23000' fill-rule='evenodd' clip-rule='evenodd'/%3E%3C/svg%3E")`

    }

`


export const InnerThirdFlex = styled.div`
    max-width: 215px;
    width: 100%;
    height: 124px;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    background-color: #fae100;
    border-radius: 24px 0 0 24px;
`


export const IconThird = styled.img`
    max-width: 40px;
    width: 100%;
    height: 40px;
`

export const TitleThird = styled.span`
    font-size: 16px;
    line-height: 1.36;
    letter-spacing: -.6px;
    color: #000;
`

export const AreaWidget = styled.div`
    max-width: 215px;
    width: 100%;
    height: 621px;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
`

export const InnerWidgetSecondWidget = styled.div`
    left: 0px;
    max-width: 206px;
    width: 100%;
    max-height: 259px;
    height: 100%;
    user-select: none;
    border-radius: 24px;
    cursor: pointer;
`

export const SwiperSlideItem = styled.div`
    max-width: 206px;
    width: 100%;
    max-height: 259px;
    height: 100%;
    background-color: ${({ theme }) => (theme === "light" ? "#f3f3f3" : "#333")};
    border-radius: 24px;
`

export const InnerSlideLink = styled.a`
    max-width: 206px;
    width: 100%;
    max-height: 259px;
    height: 100%;
    cursor: pointer;
    border-radius: 24px;
`

export const InnerSecond = styled.div`
    max-width: 166px;
    width: 100%;
    max-height: 119px;
    height: 100%;
    margin: 20px auto;
`

export const BadgeSecondTypeYellow = styled.div`
    max-width: 100px;
    width: 100%;
    max-height: 32px;
    height: 100%;
    margin-bottom: 8px;
    border-radius: 8px;
    font-size: 14px;
    letter-spacing: -.2px;
    line-height: 1.78;
    background-color: #fae100;
    color: #000;
    display: flex;
    justify-content: center;
    align-items: center;
    font-weight: 400;
`

export const TitleSecond = styled.strong`
    max-width: 166px;
    width: 100%;
    max-height: 50px;
    height: 100%;
    font-size: 18px;
    line-height: 1.4;
    letter-spacing: -.6px;
    font-weight: 400;
    color: ${({ theme }) => (theme === "light" ? "#000" : "#fff")};
    
`

export const WrapTags = styled.div`
    margin-top: 9px;
    max-width: 166px;
    width: 100%;
    max-height: 19px;
    height: 100%;
    display: flex;
    gap: 9px;
    align-items: center;
`

export const ItemTag = styled.div`
    width: max-content; 
    font-size: 14px;
    line-height: 1.42;
    letter-spacing: -.2px;
    color: ${({ theme }) => (theme === "light" ? "#000" : "#fff")};
` 

export const StyledSwiper = styled(Swiper)`
    .swiper-slide {
        transition: opacity 500ms, visibility 500ms;
    }

    .swiper-pagination {
        max-width: 64px;
        width: 100%;
        max-height: 24px;
        height: 100%;
        margin-left: 70px;
        display: flex;
        justify-content: space-around;
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