import styled from "styled-components";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";

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
        background-image: url(//t1.kakaocdn.net/kakaocorp/kakaocorp/service/ico_archives.gif);
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
    color: #000;
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
    background-image: url("data:image/svg+xml;charset=utf-8,%3Csvg xmlns='http://www.w3.org/2000/svg' width='56' height='56' fill='none'%3E%3Cpath d='M50 28c0 12.15-9.85 22-22 22S6 40.15 6 28 15.85 6 28 6s22 9.85 22 22z' fill='%23000' stroke='%23000' stroke-width='4' stroke-linecap='round' stroke-linejoin='round'/%3E%3Cpath d='M23.332 35V21m9.336 14V21' stroke='%23fff' stroke-width='4.667' stroke-linejoin='round'/%3E%3C/svg%3E");
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
`

export const InnerMainInnerStorySlider = styled(Slider)`
    margin-top: 43px;
    position: relative;
    font-size: 0;
    white-space: nowrap;
    max-width: 1440px;
    width: 100%;
    height: 439px;
    background-color: red;
    display: flex;
    overflow: hidden;
` 

export const LeftListStory = styled.div`
    max-width: 3579px;
    width: 100%;
    height: 439px;
    background-color: red;
`

export const RightListStory = styled.div`
    max-width: 3579px;
    width: 100%;
    height: 439px;
    background-color: blue;
`
