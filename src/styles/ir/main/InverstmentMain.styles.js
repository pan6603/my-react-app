import styled from "styled-components";
import { Swiper } from 'swiper/react';


export const DocMain = styled.main`
    max-width: 1440px;
    width: 100%;
    height: 2548px;
    margin: 0 auto;

    @media (max-width: 1431px) {
        max-width: 1431px;
        width: 100%;
        height: 1650px;
        margin: 0 auto;
        padding: 0 38px;
        box-sizing: border-box;
    }

    @media (max-width: 1023px) {
        max-width: 1023px;
        width: 100%;
        height: 2081px;
        margin: 0 auto;
    }
`

export const SectionRelation = styled.section`
    max-width: 1316px;
    width: 100%;
    height: 552px;
    margin: 120px auto;
    
    @media (max-width: 1431px) {
        max-width: 1355px;
        width: 100%;
        height: 376px;
        padding-bottom: 80px;
        box-sizing: border-box;
        margin: 0px auto;
    }
`

export const ListRelation = styled.div`
    max-width: 1316px;
    width: 100%;
    height: 308px;
    margin: 0 auto;
    display: flex;
    gap: 16px;

    @media (max-width: 1431px) {
        max-width: 1355px;
        width: 100%;
        height: 224px;
        gap: 12px;
    }
`

export const ListRelationItem = styled.div`
    max-width: 428px;
    width: 100%;
    height: 308px;
    border-radius: 24px;
    background: #f3f3f3;

    @media (max-width: 1431px) {
        max-width: 443px;
        width: 100%;
        height: 224px;
    }
`

export const LinkRelation = styled.a`
    max-width: 428px;
    width: 100%;
    height: 308px;
    color: #000;
    text-decoration: none;
    cursor: pointer;

    @media (max-width: 1431px) {
        max-width: 443px;
        width: 100%;
        height: 224px;
    }
`

export const WrapRelationFirst = styled.div`
    max-width: 428px;
    width: 100%;
    height: 308px;
    cursor: pointer;
    padding: 36px 36px 32px;
    box-sizing: border-box;

    @media (max-width: 1431px) {
        max-width: 443px;
        width: 100%;
        height: 224px;
        padding: 24px 24px 20px;
        box-sizing: border-box;
    }
    
    &::before {
        content: '';
        display: block;
        background-image: url(https://t1.kakaocdn.net/kakaocorp/Ir/images/img_meet.png);
        background-repeat: no-repeat;
        background-size: cover;
        margin-bottom: 20px;
        width: 72px;
        height: 72px;
        font-size: 14px;

        @media (max-width: 1431px) {
            width: 48px;
            height: 48px;
            margin-bottom: 12px;
        }
    }
`

export const WrapRelationTwo = styled.div`
    max-width: 428px;
    width: 100%;
    height: 308px;
    cursor: pointer;
    padding: 36px 36px 32px;
    box-sizing: border-box;

    @media (max-width: 1431px) {
        max-width: 443px;
        width: 100%;
        height: 224px;
        padding: 24px 24px 20px;
        box-sizing: border-box;
    }
    
    &::before {
        content: '';
        display: block;
        background-image: url(https://t1.kakaocdn.net/kakaocorp/Ir/images/img_esg.png);
        background-repeat: no-repeat;
        background-size: cover;
        margin-bottom: 20px;
        width: 72px;
        height: 72px;
        font-size: 14px;

        @media (max-width: 1431px) {
            width: 48px;
            height: 48px;
            margin-bottom: 12px;
        }
    }
`

export const WrapRelationThird = styled.div`
    max-width: 428px;
    width: 100%;
    height: 308px;
    cursor: pointer;
    padding: 36px 36px 32px;
    box-sizing: border-box;

    @media (max-width: 1431px) {
        max-width: 443px;
        width: 100%;
        height: 224px;
        padding: 24px 24px 20px;
        box-sizing: border-box;
    }
    
    &::before {
        content: '';
        display: block;
        background-image: url(https://t1.kakaocdn.net/kakaocorp/Ir/images/img_light.png);
        background-repeat: no-repeat;
        background-size: cover;
        margin-bottom: 20px;
        width: 72px;
        height: 72px;
        font-size: 14px;

        @media (max-width: 1431px) {
            width: 48px;
            height: 48px;
            margin-bottom: 12px;
        }
    }
`


export const TitRelation = styled.div`
    max-width: 356px;
    width: 100%;
    height: 39px;
    margin-bottom: 6px;
    font-size: 26px;
    font-weight: 700;
    letter-spacing: -0.8px;

    @media (max-width: 1431px) {
        max-width: 395px;
        width: 100%;
        height: 27px;
        font-size: 18px;
    }
`

export const TxtSub = styled.div`
    max-width: 356px;
    width: 100%;
    height: 25px;
    font-size: 17px;
    letter-spacing: -0.6px;
    color: #000;

    @media (max-width: 1431px) {
        max-width: 395px;
        width: 100%;
        height: 21px;
        font-size: 14px;
    }
`

export const TxtGoto = styled.div`
    max-width: 356px;
    width: 100%;
    height: 25px;
    margin-top: 50px;
    font-size: 17px;
    letter-spacing: -0.5px;
    display: flex;
    align-items: center;

    @media (max-width: 1431px) {
        font-size: 14px;
    }

    &::after {
        display: inline-block;
        content: '';
        width: 24px;
        height: 24px;
        margin-left: 8px;
        background: url(https://t1.kakaocdn.net/kakaocorp/Ir/images/ico_arrow.svg) right no-repeat;
        content: '';

        @media (max-width: 1431px) {
            font-size: 14px;
        }
    }
`



export const SectionRelationTitle = styled.div`
    max-width: 1316px;
    width: 100%;
    height: 72px;
    margin-bottom: 52px;
    font-size: 48px;
    letter-spacing: -1px;
    font-weight: 400;
    color: #000;

    @media (max-width: 1431px) {
        max-width: 1355px;
        width: 100%;
        height: 48px;
        margin-bottom: 24px;
        font-size: 32px;
    }

    &::before {
        content: '';
        display: inline-block;
        width: 72px;
        height: 72px;
        margin-right: 16px;
        background: url(https://t1.kakaocdn.net/kakaocorp/Ir/images/img_heart.png) center/contain no-repeat;
        vertical-align: top;
        line-height: 1.5;

        @media (max-width: 1431px) {
            width: 48px;
            height: 48px;
            margin-right: 4px;
        }
    }
`

export const SectionNews = styled.section`
    max-width: 1316px;
    width: 100%;
    height: 1014px;
    margin: 120px auto;

    @media (max-width: 1431px) {
        max-width: 1355px;
        width: 100%;
        height: 708px;
        padding-bottom: 80px;
        box-sizing: border-box;
        margin: 0 auto;
    }
`

export const SectionNewsTitle = styled.div`
    max-width: 1316px;
    width: 100%;
    height: 72px;
    margin-bottom: 46px;
    font-size: 48px;
    color: #000;
    font-weight: 400;
    letter-spacing: -1px;
    line-height: 1.5;

    &::before {
        content: '';
        width: 72px;
        height: 72px;
        margin-right: 16px;
        display: inline-block;
        vertical-align: top;
        background: url(https://t1.kakaocdn.net/kakaocorp/Ir/images/img_balloon.png) center/contain no-repeat;

        @media (max-width: 1431px) {
            width: 48px;
            height: 48px;
            margin-right: 4px;
        }
    }

    @media (max-width: 1431px) {
        max-width: 1355px;
        width: 100%;
        height: 48px;
        margin-bottom: 24px;
        font-size: 32px;
    }
`

export const WrapBoard = styled.div`
    max-width: 1316px;
    width: 100%;
    height: 241px;
    margin-bottom: 46px;
    display: flex;
    justify-content: space-between;

    @media (max-width: 1431px) {
        max-width: 1355px;
        width: 100%;
        height: 162px;
        gap: 12px;
    }
`

export const BoxBoard = styled.div`
    max-width: 428px;
    width: 100%;
    height: 241px;
    background-color: red;
    padding: 40px 30px 24px;
    box-sizing: border-box;
    overflow: hidden;
    border-radius: 24px;
    background: #f3f3f3;

    @media (max-width: 1431px) {
        max-width: 443px;
        width: 100%;
        height: 162px;
        padding: 24px 24px 12px;
        box-sizing: border-box;
    }


`

export const TitBoard = styled.div`
    margin-bottom: 16px;
    font-size: 30px;
    letter-spacing: -0.8px;
    color: #000;
    font-weight: 700;

    @media (max-width: 1431px) {
        margin-bottom: 8px;
        font-size: 18px;
    }
`


export const ListBoard = styled.div`
    max-width: 368px;
    width: 100%;
    height: 116px;
    display: flex;
    flex-direction: column;
    justify-content: space-between;

    @media (max-width: 1431px) {
        max-width: 395px;
        width: 100%;
        height: 91px;
    }

    & > a:nth-of-type(2) {
        border-top: 1px solid #d9d9d9;
    }

`

export const LinkBoard = styled.a`
    max-width: 368px;
    width: 100%;
    height: 57px;

    @media (max-width: 1431px) {
        max-width: 395px;
        width: 100%;
        height: 45px;
    }
`

export const InnerBoard = styled.div`
    max-width: 368px;
    width: 100%;
    height: 57px;
    display: flex;
    justify-content: space-between;
    align-items: center;

    @media (max-width: 1431px) {
        max-width: 395px;
        width: 100%;
        height: 45px;
    }

`

export const TxtSubDiv = styled.div`
    text-decoration: underline;
    text-underline-offset: 4px;
    letter-spacing: -0.5px;
    font-size: 17px;
    font-weight: 400;

    @media (max-width: 1431px) {
        font-size: 14px;
    }
`

export const TxtSubDate = styled.div`
    text-decoration: none;
    color: #666;
    text-underline-offset: 4px;
    font-size: 17px;
    letter-spacing: -0.5px;
`


export const TxtEm = styled.em`
    font-style: normal;
    font-weight: 400;
    font-size: 17px;
    letter-spacing: -0.5px;
    color: #000;

    @media (max-width: 1431px) {
        font-size: 14px;
    }
`



export const WrapNews = styled.div`
    max-width: 1316px;
    width: 100%;
    height: 360px;
    margin-bottom: 46px;

    @media (max-width: 1431px) {
        max-width: 1355px;
        width: 100%;
        height: 244px;
        margin-bottom: 32px;
    }
`

export const ListNews = styled.div`
    max-width: 1316px;
    width: 100%;
    height: 360px;
    display: flex;
    justify-content: space-between;

    @media (max-width: 1431px) {
        max-width: 1355px;
        width: 100%;
        height: 244px;
        gap: 12px;
    }
`

export const LinkNewsDiv = styled.div`
    max-width: 428px;
    width: 100%;
    height: 360px;
    border-radius: 24px;

    @media (max-width: 1431px) {
        max-width: 441px;
        width: 100%;
        height: 244px;   
    }
`

export const LinkNewsDivItem = styled.a`
    max-width: 428px;
    width: 100%;
    height: 360px;
    color: #000;
    text-decoration: none;
    cursor: pointer;
    font-size: 14px;
    overflow: hidden;
    border-radius: 24px;
`

export const InnerNews = styled.div`
    max-width: 428px;
    width: 100%;
    height: 360px;
    padding: 36px 36px 32px;
    display: flex;
    flex-direction: column;
    padding: 40px 40px 32px;
    background: #f3f3f3;
    box-sizing: border-box;
    border-radius: 24px;

    @media (max-width: 1431px) {
        max-width: 441px;
        width: 100%;
        height: 244px;
        padding: 24px 24px 20px;  
        box-sizing: border-box;
    }
`

export const BoxInfo = styled.div`
    max-width: 356px;
    width: 100%;
    height: 46px;
    display: flex;
    align-items: center;
    gap: 12px;

    &::before {
        width: 46px;
        height: 46px;
        background: url(https://t1.kakaocdn.net/kakaocorp/Ir/images/img_notice.png) center / contain no-repeat;
        content: '';

        @media (max-width: 1431px) {
            width: 38px;
            height: 38px;
        }
    }

    @media (max-width: 1431px) {
        max-width: 393px;
        width: 100%;
        height: 38px;
        gap: 8px;
    }
`

export const TitNews = styled.div`
    max-width: 356px;
    width: 100%;
    height: max-content;;
    margin-top: 20px;
    font-size: 30px;
    font-weight: 700;
    overflow: hidden;

    @media (max-width: 1431px) {
        max-width: 393px;
        width: 100%;
        height: max-content;
        margin-top: 12px;
        font-size: 18px;
        line-height: 1.55;
    }
`

export const ListTag = styled.div`
    max-width: 356px;
    width: 100%;
    height: 17px;
    overflow: hidden;
    margin-top: auto;
    white-space: nowrap;
    text-overflow: ellipsis;
    line-height: 1.1;
    display: flex;
    gap: 8px;

    @media (max-width: 1431px) {
        max-width: 393px;
        width: 100%;
        height: 15px;

    }
`

export const ListTagItem = styled.div`
    font-size: 16px;
    color: #666;
    white-space: nowrap;
    width: max-content;
    height: 23px;

    @media (max-width: 1431px) {
        font-size: 13px;
    }
`


export const BadgeNews = styled.div`
    width: max-content;
    height: 37px;
    background-color: #fff;
    border-radius: 8px;
    display: flex;
    justify-content: center;
    align-items: center;
    padding: 8px 16px;
    box-sizing: border-box;

    @media (max-width: 1431px) {
        max-width: 66px;
        width: 100%;
        height: 26px;
        font-size: 12px;
        padding: 4px 12px;
        box-sizing: border-box;
    }
`

export const TxtDate = styled.div`
    font-size: 14px;
    letter-spacing: -0.2px;
    color: #000;

    @media (max-width: 1431px) {
        font-size: 12px;
    }
`



export const LinkAllDiv = styled.div`
    max-width: 315px;
    width: 100%;
    height: 79px;
    margin: 0 auto;
    background-color: blue;
    border-radius: 36px;
    background: #f3f3f3;
    font-size: 22px;
    letter-spacing: -0.6px;

    @media (max-width: 1431px) {
        max-width: 275px;
        width: 100%;
        height: 58px;
    }
`

export const LinkAll = styled.a`
    width: max-content;
    height: 79px;
    margin: 0 auto;
    display: flex;
    justify-content: center;
    align-items: center;

    &::after {
        display: inline-block;
        width: 24px;
        height: 24px;
        margin: 0px 0 0 12px;
        background: url(https://t1.kakaocdn.net/kakaocorp/Ir/images/ico_arrow.svg) no-repeat;
        content: '';
    }

    @media (max-width: 1431px) {
        width: max-content;
        height: 58px;
        font-size: 15px;
    }
`


export const SectionVisual = styled.section`
    max-width: 1316px;
    width: 100%;
    height: 741px;
    margin: 0 auto;
    display: flex;
    justify-content: space-between;

    @media (max-width: 1431px) {
        max-width: 1355px;
        width: 100%;
        height: 566px;
        display: flex;
        justify-content: space-between;
        padding-bottom: 80px;
        box-sizing: border-box;
    } 
        
    @media (max-width: 1023px) {
        max-width: 964px;
        width: 100%;
        height: 737px;
        display: flex;
        flex-wrap: wrap;
        gap: 20px;
    } 
`

export const WrapVisual = styled.div`
    max-width: 1094px;
    width: 100%;
    height: 621px;
    overflow: hidden; 
    position: relative;
    border-radius: 36px;

    @media (max-width: 1431px) {
        max-width: 1163px;
        width: 100%;
        height: 486px;
        width: calc(100% - 192px);
        border-radius: 20px;
    }  

    @media (max-width: 1023px) {
        max-width: 964px;
        width: 100%;
        height: 405px;
    }
`

export const BgDimmed = styled.div`
    width: 100%;
    height: 621px;
    position: absolute;
    top: 0;
    left: 0;
    bottom: 0;
    right: 0;
    z-index: 10;
    background: rgba(0,0,0,0.2);
    background-color: red;

    @media (max-width: 1023px) {
        width: 100%;
        height: 405px;
    }
`

export const BgDimmedVideo = styled.video`
    object-fit: cover;

    @media (max-width: 1023px) {
        width: 100%;
        height: 405px;
    }
`


export const WrapBanner = styled.div`
    max-width: 206px;
    width: 100%;
    height: 621px;
    display: flex;
    flex-direction: column;
    justify-content: space-between;

    @media (max-width: 1431px) {
        max-width: 180px;
        width: 100%;
        height: 486px;
        display: flex;
        flex-direction: column;
        justify-content: space-between;
    } 


    @media (max-width: 1023px) {
        max-width: unset;
        width: 100%;
        height: 232px;
        flex-direction: row;
        gap: 8px;
    }

`

export const BoxStock = styled.div`
    max-width: 206px;
    width: 100%;
    height: 136px;
    background-color: red;
    border-radius: 24px;

    @media (max-width: 1431px) {
        max-width: 180px;
        width: 100%;
        height: 120px;
    } 

    @media (max-width: 1023px) {
        max-width: 311px;
        width: 100%;
        height: 232px;
    }
`

export const BnrItem = styled.div`
    max-width: 206px;
    width: 100%;
    height: 136px;
    border-radius: 24px;
    padding: 16px 20px;
    box-sizing: border-box;
    background-color: #333;
    display: flex;
    flex-direction: column;

    @media (max-width: 1431px) {
        max-width: 180px;
        width: 100%;
        height: 120px;
        padding: 12px 16px;
        box-sizing: border-box;
    } 

    @media (max-width: 1023px) {
        max-width: 311px;
        width: 100%;
        height: 232px;
        padding: 20px;
        box-sizing: border-box;
    }
`

export const TxtStock = styled.div`
    max-width: 166px;
    width: 100%;
    height: 39px;
    font-size: 26px;
    font-weight: 700;
    letter-spacing: -0.8px;
    color: #fff;

    @media (max-width: 1431px) {
        max-width: 148px;
        width: 100%;
        height: 39px;
    }
`

export const EmphStockChangeDown = styled.em`
    max-width: 166px;
    width: 100%;
    height: 21px;
    color: #4a9cff;
    letter-spacing: -0.5px;
    font-size: 14px;

    &::before {
        display: inline-block;
        border-top: 5px solid #4a9cff;
        border-bottom: none;
        margin-right: 3px;
        border-left: 5px solid transparent;
        border-right: 5px solid transparent;
        content: '';
        color: #4a9cff;
    }

`

export const EmphStockTxtSub = styled.div`
    max-width: 166px;
    width: 100%;
    height: 21px;
    font-size: 14px;
    margin-top: auto;
    color: #d2d2d2;
    letter-spacing: -0.2px;

    @media (max-width: 1431px) {
        font-size: 12px;  
    }          
        
    @media (max-width: 1023px) {
        font-size: 14px;
    }
`


export const CarouselNotice = styled.div`
    position: relative;
    overflow: hidden;
    max-width: 206px;
    width: 100%;
    height: 255px;
    border-radius: 24px;
    background-color: #f0f0f0;

    @media (max-width: 1431px) {
        max-width: 180px;
        width: 100%;
        height: 203px;
        border-radius: 16px;
    } 

    @media (max-width: 1023px) {
        max-width: 311px;
        width: 100%;
        height: 232px;
        border-radius: 16px;
    }
`

export const SwiperSlideItem = styled.div`
    max-width: 206px;
    width: 100%;
    height: 255px;
    border-radius: 24px;
    display: flex;
    align-items: center;
    justify-content: center;


    @media (max-width: 1431px) {
        max-width: 180px;
        width: 100%;
        height: 203px;
        border-radius: 16px;
    } 

    @media (max-width: 1023px) {
        max-width: 311px;
        width: 100%;
        height: 232px;
        border-radius: 16px;
        padding: 20px;
        box-sizing: border-box;
    }
`

export const CarouselPostSwiperSlideItem = styled.div`
    max-width: 206px;
    width: 100%;
    height: 206px;
    border-radius: 24px;
    display: flex;
    align-items: center;
    justify-content: center;


    @media (max-width: 1431px) {
        max-width: 180px;
        width: 100%;
        height: 147px;
        border-radius: 16px;
    } 

    @media (max-width: 1023px) {
        max-width: 311px;
        width: 100%;
        height: 232px;
        border-radius: 16px;
        padding: 20px;
        box-sizing: border-box;
    }
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
        gap: 8px;
        justify-content: center;
        align-items: center;

        @media (max-width: 1431px) {
            max-width: 181px;
            width: 100%;
            height: 21px;
            margin: 0 auto;
        } 

        @media (max-width: 1023px) {
            max-width: 314px;
            width: 100%;
            height: 21px;
            margin: 0 auto;
            bottom: 20px;
        } 
    }

    .swiper-pagination-bullet {
        background-color: #000;
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

    @media (max-width: 1431px) {
        max-width: 180px;
        width: 100%;
        height: 203px;
        border-radius: 16px;
    } 


    @media (max-width: 1023px) {
        max-width: 311px;
        width: 100%;
        height: 232px;
        border-radius: 16px;
    }
`

export const BoxPostStyledSwiper = styled(Swiper)`
    @media (max-width: 1023px) {
        max-width: 311px;
        width: 100%;
        height: 232px;
        border-radius: 16px;
    }

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
        gap: 8px;
        justify-content: center;
        align-items: center;

        @media (max-width: 1431px) {
            max-width: 181px;
            width: 100%;
            height: 21px;
            margin: 0 auto;
        } 

        @media (max-width: 1023px) {
            max-width: 311px;
            width: 100%;
            height: 21px;
            bottom: 20px;
            margin: 0 auto;
        } 
    }

    .swiper-pagination-bullet {
        background-color: #000;
        opacity: .45;
    }

    .swiper-pagination-bullet-active {
        width: 25px;
        height: 8px;
        border-radius: 24px;
        background-color: #000;
        opacity: 1;
  }

`

export const InnerSlideLink = styled.a`
    max-width: 206px;
    width: 100%;
    height: 255px;
    cursor: pointer;
    border-radius: 24px;

    @media (max-width: 1431px) {
        max-width: 180px;
        width: 100%;
        height: 203px;
        border-radius: 16px;
    } 

    @media (max-width: 1023px) {
        max-width: 311px;
        width: 100%;
        height: 232px;
        border-radius: 16px;
    }
`

export const InnerSecond = styled.div`
    max-width: 206px;
    width: 100%;
    height: 255px;
    height: 100%;
    margin: 20px auto;

    @media (max-width: 1431px) {
        max-width: 180px;
        width: 100%;
        height: 203px;
        border-radius: 16px;
    } 

    @media (max-width: 1023px) {
        max-width: 311px;
        width: 100%;
        height: 232px;
        border-radius: 16px;
    }
`

export const TitNotice = styled.div`
    max-width: 166px;
    width: 100%;
    height: max-content;
    overflow: hidden;
    font-size: 26px;
    font-weight: 500;
    margin: 0 auto;
    white-space: pre-line;

    @media (max-width: 1431px) {
        max-width: 148px;
        width: 100%;
        font-size: 17px;
        letter-spacing: -0.6px;
        white-space: pre-line;
    } 

    @media (max-width: 1023px) {
        max-width: 273px;
        width: 100%;
        height: max-content;
        font-weight: 700;
        font-size: 18px;
        white-space: normal;
    }
 `   

export const AreaLinks = styled.div`
    max-width: 166px;
    width: 100%;
    height: 21px;
    margin: 0 auto;
    display: flex;
    gap: 12px;
    margin-top: 12px;

    @media (max-width: 1431px) {
        max-width: 148px;
        width: 100%;
        height: 21px;
        display: flex;
        margin: 0 auto;
        margin-top: 12px;
    } 

      @media (max-width: 1023px) {
        max-width: 274px;
        width: 100%;
        height: max-content;
        font-size: 18px;
        white-space: normal;
    }
`

export const LinkItemPdf = styled.div`
    width: max-content;
    height: 20px;
    

    @media (max-width: 1431px) {
        font-size: 14px;
    }   

    &::after {
        width: 20px;
        height: 20px;
        margin-left: 6px;
        display: inline-block;
        vertical-align: top;
        background: url(https://t1.kakaocdn.net/kakaocorp/Ir/images/ico_download.svg) no-repeat;
        content: '';

        @media (max-width: 1431px) {
            margin-left: 4px;
        }       
    }
   
`

export const LinkItemMusic = styled.div`
    width: max-content;
    height: 20px;

    @media (max-width: 1431px) {
        font-size: 14px;
    }  
    
    &::after {
        width: 20px;
        height: 20px;
        margin-left: 6px;
        display: inline-block;
        vertical-align: top;
        background-image: url(https://t1.kakaocdn.net/kakaocorp/Ir/images/ico_webcast.svg);
        content: '';

        @media (max-width: 1431px) {
            margin-left: 4px;
        }   
    }
`

export const CarouselPost = styled.div`
    max-width: 206px;
    width: 100%;
    height: 206px;
    border-radius: 24px;
    background-color: #f0f0f0;

    @media (max-width: 1431px) {
        max-width: 180px;
        width: 100%;
        height: 147px;
    } 

    @media (max-width: 1023px) {
        max-width: 311px;
        width: 100%;
        height: 232px;
    }
`

export const BoxPost = styled.div`
    max-width: 206px;
    width: 100%;
    height: 206px;
    border-radius: 24px;

    @media (max-width: 1431px) {
        max-width: 180px;
        width: 100%;
        height: 147px;
    } 

    @media (max-width: 1023px) {
        max-width: 311px;
        width: 100%;
        height: 232px;

    }
`

export const FirstInnerSlideLink = styled.a`
    max-width: 206px;
    width: 100%;
    height: 206px;
    cursor: pointer;
    border-radius: 24px;
    background-color: #FAE100;
    color: #000;

    @media (max-width: 1431px) {
        max-width: 180px;
        width: 100%;
        height: 147px;
        border-radius: 16px;
    } 

    @media (max-width: 1023px) {
        max-width: 311px;
        width: 100%;
        height: 232px;
        border-radius: 16px;
    }
`

export const TwoInnerSlideLink = styled.a`
    max-width: 206px;
    width: 100%;
    height: 206px;
    cursor: pointer;
    border-radius: 24px;
    color: #fff;

     @media (max-width: 1431px) {
        max-width: 180px;
        width: 100%;
        height: 147px;
        border-radius: 16px;
    } 

    @media (max-width: 1023px) {
        max-width: 311px;
        width: 100%;
        height: 232px;
        border-radius: 16px;
    }
`


export const InnerPost = styled.div`
    max-width: 206px;
    width: 100%;
    height: 170px;
    height: 100%;
    padding: 20px 20px 16px;
    display: flex;
    flex-direction: column;
    border-radius: 24px;

    @media (max-width: 1431px) {
        max-width: 180px;
        width: 100%;
        height: 147px;
        padding: 16px 16px 12px;
        box-sizing: border-box;
        border-radius: 16px;
    } 

    @media (max-width: 1023px) {
        max-width: 311px;
        width: 100%;
        height: 232px;
        border-radius: 16px;
    }
`

export const TitPost = styled.strong`
    max-width: 166px;
    width: 100%;
    height: max-content;
    margin-bottom: 4px;
    font-size: 26px;
    font-weight: 700;
    letter-spacing: -0.6px;
    overflow: hidden;

    @media (max-width: 1431px) {
        font-size: 18px;
    }

    @media (max-width: 1023px) {
        font-size: 18px;
    }
`

export const BoxPostTxtDate = styled.div`
    font-size: 17px;
    font-weight: 700;
    letter-spacing: -0.5px;
    overflow: hidden;
    white-space: pre-line;

    @media (max-width: 1431px) {
        max-width: 148px;
        width: 100%;
        height: max-content;
        font-size: 14px;
        white-space: pre-line;
    }

    @media (max-width: 1023px) {
        max-width: 271px;
        width: 100%;
        height: max-content;
        white-space: nowrap;
    }
`


export const WrapMore = styled.div`
    position: absolute;
    z-index: 10;
    border-radius: 0 36px 0 0;
    background: #fff;
    bottom: 98px;
    max-width: 236px;
    width: 100%;
    height: 102px;
    padding: 24px 33px 30px 34px;
    box-sizing: border-box;

    &::before {
        position: absolute;
        left: -1px;
        bottom: 100px;
        z-index: 20;
        width: 38px;
        height: 38px;
        background: url(https://t1.kakaocdn.net/kakaocorp/Ir/images/ico_mask_36.svg) no-repeat;
        content: '';

        @media (max-width: 1431px) {
            position: absolute;
            width: 38px;
            height: 38px;
            z-index: 20;
            left: -1px;
            bottom: 58px;
            background-size: 34px;
            background-image: url(https://t1.kakaocdn.net/kakaocorp/Ir/images/ico_mask_20.svg) no-repeat
            content: '';
        }
       
    }

    &::after {
        position: absolute;
        left: 234px;
        bottom: 0px;
        z-index: 20;
        width: 38px;
        height: 38px;
        background: url(https://t1.kakaocdn.net/kakaocorp/Ir/images/ico_mask_36.svg) no-repeat;
        content: '';

        @media (max-width: 1431px) {
            position: absolute;
            z-index: 20;
            width: 38px;
            height: 38px;
            left: 158px;
            bottom: 4px;
            background-size: 34px;
            background-image: url(https://t1.kakaocdn.net/kakaocorp/Ir/images/ico_mask_20.svg);
            content: '';
        }
    }

    @media (max-width: 1431px) {
        position: absolute;
        z-index: 10;
        left: 1;
        width: 160px;
        height: 64px;
        padding: 19px 30px 21px 30px;
        bottom: 138px;
        border-top-right-radius: 20px;
    } 

    @media (max-width: 1023px) {
        bottom: 230px;
        left: 1;
        padding: 14px 30px 16px 30px;
    }
`

export const LinkVideo = styled.a`
    max-width: 169px;
    width: 100%;
    height: 48px;
    display: flex;
    align-items: center;
    font-size: 22px;
    letter-spacing: -0.6px;
    white-space: nowrap;

    &::after {
        width: 48px;
        height: 48px;
        border-radius: 24px;
        margin-left: 20px;
        background: url(https://t1.kakaocdn.net/kakaocorp/Ir/images/ico_arrow_241212.png) 50%/20px no-repeat,#000;
        content: '';
        
        @media (max-width: 1431px) {
            width: 24px;
            height: 24px;
            margin-left: 8px;
            border-radius: 12px;
            background-size: 10.8px;
        }
    }

    @media (max-width: 1431px) {
        font-size: 15px;
    }
`