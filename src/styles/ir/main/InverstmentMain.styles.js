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
    background-color: red;
    margin: 120px auto;
`

export const SectionVisual = styled.section`
    max-width: 1316px;
    width: 100%;
    height: 741px;
    background-color: red;
    margin: 0 auto;
`