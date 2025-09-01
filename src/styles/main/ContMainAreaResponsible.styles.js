import styled from "styled-components";

export const ContMainAreaResponsibleContainer = styled.div`
    max-width: 1316px;
    width: 100%;
    height: 684px;
    margin: 120px auto;
`

export const TitleContTypeResponsible = styled.h3`
    max-width: 1316px;
    width: 100%;
    height: 72px;
    letter-spacing: -1px;
    font-weight: 400;
    color: ${({ theme }) => (theme === "light" ? "#000" : "#fff")};
    font-size: 48px;
    line-height: 72px;
    display: flex;
    align-items: center;

    &::before {
        content: "";
        display: inline-block;
        width: 72px;
        height: 72px;
        margin-right: 16px;
        background-image: ${({ theme }) => theme === "light"
        ? "url(//t1.kakaocdn.net/kakaocorp/kakaocorp/service/ico_tit_esg.gif)"
        : "url(//t1.kakaocdn.net/kakaocorp/kakaocorp/service/ico_tit_esg_dark.gif)"};
        background-size: cover;
    }
`

export const InnerMainInnerResponsible = styled.div`
    max-width: 1332px;
    width: 100%;
    height: 569px;
    margin-left: -16px;
    display: flex;
    justify-content: space-between;
    background-color: ${({ theme }) => (theme === "light" ? "#fff" : "#000")};
`

export const BoxResponsibleTypeEsg = styled.div`
    max-width: 428px;
    width: 100%;
    height: 569px;
    background-color: #f6f2e8;
    position: relative;
    margin-left: 16px;
    border-radius: 24px;
`

export const BoxResponsibleTypeGreen = styled.div`
    max-width: 428px;
    width: 100%;
    height: 569px;
    background-color: #03502b;
    position: relative;
    margin-left: 16px;
    border-radius: 24px;
`

export const BoxResponsibleTypePolicy = styled.div`
    max-width: 428px;
    width: 100%;
    height: 569px;
    background-color: #333;
    position: relative;
    margin-left: 16px;
    border-radius: 24px;
`

export const TitleResponsible = styled.div`
    max-width: 222px;
    width: 100%;
    height: 67px;
    border-radius: 0 0 0 24px;
    position: absolute;
    right: -2px;
    top: -2px;
    background-color: ${({ theme }) => (theme === "light" ? "#fff" : "#000")};
    text-align: right;

    &::before {
        left: -24px;
        top: 0;
        content: "";
        display: block;
        position: absolute;
        width: 26px;
        height: 26px;
        background-size: 100% auto;
        background-position: 50%;
        background-repeat: no-repeat;
        background-image: ${({ theme }) => theme === "light"
        ? "url(\"data:image/svg+xml;charset=utf-8,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 26 26'%3E%3Cpath d='M0 2c13.3 0 24 10.7 24 24h2V0H0v2z' fill='%23fff' clip-rule='evenodd'/%3E%3C/svg%3E\")"
        : "url(\"data:image/svg+xml;charset=utf-8,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 26 26'%3E%3Cpath d='M0 2c13.3 0 24 10.7 24 24h2V0H0v2z' fill='%23000' clip-rule='evenodd'/%3E%3C/svg%3E\")"};

        
    }

    &::after {
        right: 0;
        bottom: -24px;
        content: "";
        display: block;
        position: absolute;
        width: 26px;
        height: 26px;
        background-size: 100% auto;
        background-position: 50%;
        background-repeat: no-repeat;
         background-image: ${({ theme }) => theme === "light"
        ? "url(\"data:image/svg+xml;charset=utf-8,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 26 26'%3E%3Cpath d='M0 2c13.3 0 24 10.7 24 24h2V0H0v2z' fill='%23fff' clip-rule='evenodd'/%3E%3C/svg%3E\")"
        : "url(\"data:image/svg+xml;charset=utf-8,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 26 26'%3E%3Cpath d='M0 2c13.3 0 24 10.7 24 24h2V0H0v2z' fill='%23000' clip-rule='evenodd'/%3E%3C/svg%3E\")"};
    }
`

export const NameResponsible = styled.div`
    max-width: 205px;
    width: 100%;
    height: 50px;
    line-height: 50px;
    border-radius: 29px;
    background-color: #f6f2e8;
    display: inline-block;
    margin: 2px 2px 0 0;
    font-size: 17px;
    color: #000;
    text-align: center;
    letter-spacing: -.5px;
    font-weight: 400;
    position: absolute;
    right: 0;
    top: 0;
    text-align: center;
`

export const ActiveGreenNameResponsible = styled.div`
    max-width: 205px;
    width: 100%;
    height: 50px;
    line-height: 50px;
    border-radius: 29px;
    background-color: #1ed47e;
    display: inline-block;
    margin: 2px 2px 0 0;
    font-size: 17px;
    color: #000;
    text-align: center;
    letter-spacing: -.5px;
    font-weight: 400;
    position: absolute;
    right: 0;
    top: 0;
    text-align: center;
`

export const PolicyMagazineNameResponsible = styled.div`
    max-width: 205px;
    width: 100%;
    height: 50px;
    line-height: 50px;
    border-radius: 29px;
    background-color: #fae100;
    display: inline-block;
    margin: 2px 2px 0 0;
    font-size: 17px;
    color: #000;
    text-align: center;
    letter-spacing: -.5px;
    font-weight: 400;
    position: absolute;
    right: 0;
    top: 0;
    text-align: center;
`

export const ImgResponsibleTypeEsg = styled.img`
    width: 428px;
    height: 245px;
    top: 142px;
    position: absolute;
    left: 0%;
    transform: translateX(-50%);
    border: 0;
    overflow-clip-margin: content-box;
    overflow: clip;
`

export const ImgResponsibleTypeActiveGreen = styled.img`
    position: absolute;
    left: 50%;
    transform: translateX(-50%);
    max-width: 244px;
    width: 100%;
    top: 142px;
`

export const ImgResponsibleTypePolicyMagazine = styled.img`
    position: absolute;
    left: 50%;
    transform: translateX(-50%);
    max-width: 244px;
    width: 100%;
    top: 142px;
`


export const TextResponsible = styled.p`
    color: #000;
    max-width: 330px;
    position: absolute;
    bottom: 40px;
    left: 40px;
    font-size: 26px;
    line-height: 1.46;
    margin: 0;
    padding: 0;
`

export const ActiveGreenTextResponsible = styled.p`
    color: #fff;
    max-width: 330px;
    position: absolute;
    bottom: 40px;
    left: 40px;
    font-size: 26px;
    line-height: 1.46;
    margin: 0;
    padding: 0;
`

export const PolicyMagazineTextResponsible = styled.p`
    color: #fff;
    max-width: 330px;
    position: absolute;
    bottom: 40px;
    left: 40px;
    font-size: 26px;
    line-height: 1.46;
    margin: 0;
    padding: 0;
`

export const BtnAreaLink = styled.a`
    cursor: pointer;
    text-decoration: none;   
    position: absolute;
    right: -2px;
    bottom: -2px;
    max-width: 57px;
    width: 100%;
    height: 57px;
    background-color: ${({ theme }) => (theme === "light" ? "#fff" : "#000")};
    padding: 15px 0 0 15px;
    border-radius: 36px 0 0 0;

    &::before {
        left: -24px;
        bottom: 0;
        content: "";
        display: block;
        position: absolute;
        width: 26px;
        height: 26px;
        background-size: 100% auto;
        background-position: 50%;
        background-repeat: no-repeat;
        background-image: ${({ theme }) => theme === "light"
        ? "url(\"data:image/svg+xml;charset=utf-8,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 26 26'%3E%3Cpath d='M24 0c0 13.3-10.7 24-24 24v2h26V0h-2z' fill='%23fff' fill-rule='evenodd' clip-rule='evenodd'/%3E%3C/svg%3E\")"
        : "url(\"data:image/svg+xml;charset=utf-8,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 26 26'%3E%3Cpath d='M24 0c0 13.3-10.7 24-24 24v2h26V0h-2z' fill='%23000' fill-rule='evenodd' clip-rule='evenodd'/%3E%3C/svg%3E\")"};
    }

    &::after {
        right: 0;
        top: -24px;
        content: "";
        display: block;
        position: absolute;
        width: 26px;
        height: 26px;
        background-size: 100% auto;
        background-position: 50%;
        background-repeat: no-repeat;
        background-image: ${({ theme }) => theme === "light"
        ? "url(\"data:image/svg+xml;charset=utf-8,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 26 26'%3E%3Cpath d='M24 0c0 13.3-10.7 24-24 24v2h26V0h-2z' fill='%23fff' fill-rule='evenodd' clip-rule='evenodd'/%3E%3C/svg%3E\")"
        : "url(\"data:image/svg+xml;charset=utf-8,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 26 26'%3E%3Cpath d='M24 0c0 13.3-10.7 24-24 24v2h26V0h-2z' fill='%23000' fill-rule='evenodd' clip-rule='evenodd'/%3E%3C/svg%3E\")"};
    }
`



