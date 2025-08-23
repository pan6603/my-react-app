import styled from "styled-components";


export const DocMain = styled.main`
    max-width: 1440px;
    width: 100%;
    height: 2548px;
    margin: 0 auto;
`

export const SectionRelation = styled.section`
    max-width: 1316px;
    width: 100%;
    height: 552px;
    margin: 120px auto;
    
`

export const ListRelation = styled.div`
    max-width: 1316px;
    width: 100%;
    height: 308px;
    margin: 0 auto;
    display: flex;
    justify-content: space-between;
`

export const ListRelationItem = styled.div`
    max-width: 428px;
    width: 100%;
    height: 308px;
    border-radius: 24px;
    background: #f3f3f3;
`

export const LinkRelation = styled.a`
    max-width: 428px;
    width: 100%;
    height: 308px;
    color: #000;
    text-decoration: none;
    cursor: pointer;
`

export const WrapRelationFirst = styled.div`
    max-width: 428px;
    width: 100%;
    height: 308px;
    cursor: pointer;
    padding: 36px 36px 32px;
    box-sizing: border-box;
    
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
    }
`

export const WrapRelationTwo = styled.div`
    max-width: 428px;
    width: 100%;
    height: 308px;
    cursor: pointer;
    padding: 36px 36px 32px;
    box-sizing: border-box;
    
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
    }
`

export const WrapRelationThird = styled.div`
    max-width: 428px;
    width: 100%;
    height: 308px;
    cursor: pointer;
    padding: 36px 36px 32px;
    box-sizing: border-box;
    
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
`

export const TxtSub = styled.div`
    max-width: 356px;
    width: 100%;
    height: 25px;
    font-size: 17px;
    letter-spacing: -0.6px;
    color: #000;
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

    &::after {
        display: inline-block;
        content: '';
        width: 24px;
        height: 24px;
        margin-left: 8px;
        background: url(https://t1.kakaocdn.net/kakaocorp/Ir/images/ico_arrow.svg) right no-repeat;
        content: '';
    }
`



export const SectionRelationTitle = styled.h4`
    max-width: 1316px;
    width: 100%;
    height: 72px;
    margin-bottom: 52px;
    font-size: 48px;
    letter-spacing: -1px;
    font-weight: 400;
    color: #000;

    &::before {
        content: '';
        display: inline-block;
        width: 72px;
        height: 72px;
        margin-right: 16px;
        background: url(https://t1.kakaocdn.net/kakaocorp/Ir/images/img_heart.png) center/contain no-repeat;
        vertical-align: top;
        line-height: 1.5;
    }
`

export const SectionNews = styled.section`
    max-width: 1316px;
    width: 100%;
    height: 1014px;
    margin: 120px auto;
`

export const SectionNewsTitle = styled.h4`
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
    }
`

export const WrapBoard = styled.div`
    max-width: 1316px;
    width: 100%;
    height: 241px;
    margin-bottom: 46px;
    display: flex;
    justify-content: space-between;
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
`

export const TitBoard = styled.div`
    margin-bottom: 16px;
    font-size: 30px;
    letter-spacing: -0.8px;
    color: #000;
    font-weight: 700;
`


export const ListBoard = styled.div`
    max-width: 368px;
    width: 100%;
    height: 116px;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
`

export const LinkBoard = styled.a`
    max-width: 368px;
    width: 100%;
    height: 57px;
`

export const InnerBoard = styled.div`
    max-width: 368px;
    width: 100%;
    height: 57px;
    display: flex;
    justify-content: space-between;
    align-items: center;
`

export const TxtSubDiv = styled.div`
    text-decoration: underline;
    text-underline-offset: 4px;
    letter-spacing: -0.5px;
    font-size: 17px;
    font-weight: 700;
`

export const TxtSubDate = styled.div`
    text-decoration: none;
    color: #666;
    text-underline-offset: 4px;
    font-size: 17px;
    letter-spacing: -0.5px;
`


export const BorderLine = styled.div`
    border: 1px solid #D0D0D0;
    max-width: 368px;
    width: 100%;
    height: 1px;
`


export const TxtEm = styled.em`
    font-style: normal;
    font-weight: 700;
    font-size: 17px;
    letter-spacing: -0.5px;
    color: #000;
`



export const WrapNews = styled.div`
    max-width: 1316px;
    width: 100%;
    height: 360px;
    margin-bottom: 46px;
`

export const ListNews = styled.div`
    max-width: 1316px;
    width: 100%;
    height: 360px;
    display: flex;
    justify-content: space-between;
`

export const LinkNewsDiv = styled.div`
    max-width: 428px;
    width: 100%;
    height: 360px;
    border-radius: 24px;
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
`

export const ListTagItem = styled.div`
    font-size: 16px;
    color: #666;
    white-space: nowrap;
    width: max-content;
    height: 23px;
`


export const BadgeNews = styled.div`
    max-width: 81px;
    width: 100%;
    height: 37px;
    background-color: #fff;
    border-radius: 8px;
    display: flex;
    justify-content: center;
    align-items: center;
`

export const TxtDate = styled.div`
    font-size: 14px;
    letter-spacing: -0.2px;
    color: #000;

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
`

export const LinkAll = styled.a`
    width: fit-content;
    height: 79px;
    margin: 0 auto;
    padding: 23px 61px;
    box-sizing: border-box;
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
`



export const SectionVisual = styled.section`
    max-width: 1316px;
    width: 100%;
    height: 741px;
    background-color: red;
    margin: 0 auto;
`