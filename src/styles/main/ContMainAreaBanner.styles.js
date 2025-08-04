import styled from "styled-components";

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
    background-color: #fff;
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
        background-image: url("data:image/svg+xml;charset=utf-8,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 38 38'%3E%3Cpath d='M2 0H0v38h38v-2C18.1 36 2 19.9 2 0z' fill='%23fff'/%3E%3C/svg%3E");
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
        background-image: url("data:image/svg+xml;charset=utf-8,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 38 38'%3E%3Cpath d='M2 0H0v38h38v-2C18.1 36 2 19.9 2 0z' fill='%23fff'/%3E%3C/svg%3E");
    
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
    color: #000;
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

export const InnerSecondWidget = styled.div`
    max-width: 206px;
    width: 100%;
    height: 259px;
    overflow: hidden;
    position: relative;
    border-radius: 24px;
`

export const SlickTrack = styled.div`
    max-width: 206px;
    width: 100%;
    height: 259px;
    display: flex;
    transition: transform 0.5s ease;
`

export const SlickSlide = styled.div`
    max-width: 206px;
    width: 100%;
    height: 259px;
    position: absolute;
    cursor: pointer;
    background-color: #F0F0F0;
`

export const SecondInnerSlide = styled.a`
    max-width: 206px;
    width: 100%;
    height: 259px;
    cursor: pointer;
`

export const InnerSecond = styled.div`
    max-width: 166px;
    width: 100%;
    height: 119px;
    margin: 20px auto;
    display: flex; 
    justify-content: center;
    flex-direction: column;
`

export const InnerSecondSpan = styled.span`
    max-width: 100px;
    width: 100%;
    height: 32px;
    display: inline-block;
    border-radius: 8px;
    font-size: 14px;
    line-height: 1.78;
    letter-spacing: -.2px;
    background-color: #fae100;
    color: #000;
    font-weight: 400;
    display: flex;
    justify-content: center;
    align-items: center;
    margin-bottom: 8px;
`

export const TitleSecond = styled.strong`
    line-height: 1.4;
    font-size: 18px;
    letter-spacing: -.6px;
    font-weight: 400;
    color: #000;
`

export const TitleSecondBr = styled.br
`
`

export const WrapTags = styled.div`
    max-height: 174px;
    width: 100%;
    height: 20px;
    margin-top: 8px;
    display: flex;
    justify-content: space-around;
    align-items: center;
    margin-left: -8px;
    font-weight: 400;
`

export const ItemTag = styled.span`
    font-size: 14px;
    letter-spacing: -.2px;
    line-height: 1.42;
    color: #666;   
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
        background-image: url("data:image/svg+xml;charset=utf-8,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 36 128'%3E%3Cpath d='M33.3 119.9c-5.1 0-9.9-1.1-14.3-3.2-4.4 5.7-11.3 9.3-19 9.3v2h36V0H0v2c13.3 0 24 10.7 24 24v76.9c.4 7 3.9 13.1 9.3 17' fill='%23fff' fill-rule='evenodd' clip-rule='evenodd'/%3E%3C/svg%3E");
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

export const SelectedSlideIndex = styled.li`
    max-width: 24px;
    width: 100%;
    height: 24px;
    list-style: none;
    display: flex;
    justify-content: center;
    align-items: center;
`


export const SelectedSlideIndexButtom = styled.button`
    padding: 4px;
    opacity: .45;
    border-radius: 10px;
`

export const AreaWidget = styled.div`
    max-width: 215px;
    width: 100%;
    height: 621px;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
`

export const SlickDots = styled.ul`
    max-width: 64px;
    width: 100%;
    height: 24px;
    background-color: blue;
    position: absolute;
    flex-direction: column;
    left: 50%;
    bottom: -2%;
    transform: translateX(-50%);
    white-space: nowrap;
    display: inline-block;
`