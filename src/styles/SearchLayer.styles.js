import styled from "styled-components";


export const SearchLayerContainer = styled.section`
    position: absolute;
    top: 0;
    bottom: 0;
    left: 0;
    right: 0;
    z-index: 3000;
    max-width: 1440px;
    width: 100%;
    height: 464px;

`


export const InnerLayer = styled.div`
    max-width: 1440px;
    width: 100%;
    height: 454px;
    opacity: 1;
    background-color: ${({ theme }) => theme === "light" ? "#fff" : "#000"}; 
    position: fixed;
`

export const LayerHead = styled.div`
    position: relative;
    max-width: 1296px;
    width: 100%;
    height: 72px;
    margin: 0 auto;
    display: flex;
    justify-content: center;
    align-items: center;
`

export const LayerHeadDiv = styled.div`
    max-width: 1296px;
    width: 100%;
    height: 48px;
    display: flex;
    align-items: center;
`

export const KakaoLogoLink = styled.a`
    max-width: 74px;
    width: 100%;
    height: 24px;
`

export const LayerBody = styled.div`
    position: relative;
    max-width: 1296px;
    width: 100%;
    height: 382px;
    margin: 0 auto;
`

export const AreaSearch = styled.div`
    max-width: 1296px;
    width: 100%;
    height: 382px;
    opacity: 1;
    transform: translateY(0);
`

export const GroupSearch = styled.div`
    max-width: 1296px;
    width: 100%;
    height: 382px;
    padding: 120px 0;
    box-sizing: border-box;
    background: url(//t1.kakaocdn.net/kakaocorp/kakaocorp/service/bg_search.png) no-repeat top 96px right 50px;
    background-size: 162px 178px;
`

export const WrapSearch = styled.form`
    position: relative;
    max-width: 823px;
    width: 100%;
    height: 72px;
    margin: 0 auto;
`

export const IcoSearchBold = styled.svg`
    position: absolute;
    top: 22px;
    left: 24px;
    width: 28px;
    height: 28px;
`


export const WrapTag = styled.div`
    max-width: 600px;
    width: 100%;
    height: 40px;
    margin: 30px auto 0;
    text-align: center;
`

export const LinkTag = styled.a`
    width: max-content;
    height: 34px;
    margin-top: 6px;
    border-radius: 34px;
    font-size: 13px;
    font-weight: 600;
    line-height: 34px;
    color: ${({ theme }) => theme === "light" ? "#000" : "#fff"}; 
    background-color: ${({ theme }) => theme === "light" ? "#eee" : "#333"}; 
    letter-spacing: -.5px;
    white-space: nowrap;
    text-overflow: ellipsis;
    padding: 8px 15px;
    margin-right: 10px;
    vertical-align: top;
    text-decoration: none;
    cursor: pointer;

    &:hover {
        background-color: ${({ theme }) => theme === "light" ? "#ddd" : "#555"}; 
    }
`



export const InpSearch = styled.input`
    max-width: 823px;
    width: 100%;
    height: 72px;
    padding: 20px 24px 20px 64px;
    background: ${({ theme }) => theme === "light" 
    ? `url('data:image/svg+xml;charset=utf-8,%3Csvg xmlns="http://www.w3.org/2000/svg" width="823" height="72"%3E%3Cg transform="rotate(180 411.5 36)" fill="%23333" fill-rule="evenodd"%3E%3Cpath d="M0 0c4.004 2.904 6.617 7.607 6.615 12.931V24H24C24 10.745 13.255 0 0 0"/%3E%3Crect width="816" height="72" x="6.5" rx="27"/%3E%3C/g%3E%3C/svg%3E') no-repeat`
    : `url('data:image/svg+xml;charset=utf-8,%3Csvg xmlns="http://www.w3.org/2000/svg" width="823" height="72"%3E%3Cg transform="rotate(180 411.5 36)" fill="%23fff" fill-rule="evenodd"%3E%3Cpath d="M0 0c4.004 2.904 6.617 7.607 6.615 12.931V24H24C24 10.745 13.255 0 0 0"/%3E%3Crect width="816" height="72" x="6.5" rx="27"/%3E%3C/g%3E%3C/svg%3E') no-repeat`
    };
    line-height: 32px;
    font-size: 22px;
    font-weight: 700;
    color: ${({ theme }) => theme === "light" ? "#fff" : "#000"}; 
    letter-spacing: -.6px;
    box-sizing: border-box;
    border: none;      
    outline: none;

    ::placeholder {
        color: ${({ theme }) => theme === "light" ? "#fff" : "#000"}; 
        opacity: 1; 
    }

    &::-webkit-input-placeholder { /* Chrome, Safari */
        color: ${({ theme }) => theme === "light" ? "#fff" : "#000"}; 
        opacity: 1;
    }
`


export const BtnClose = styled.div`
    position: absolute;
    top: -52px;
    right: 0;
    max-width: 28px;
    width: 100%;
    height: 28px;
    background-color: transparent;
    font-size: 14px;
    line-height: 1.5;
    font-weight: 400;
    color: #333;
    cursor: pointer;
    border: 0;
    display: flex;
    justify-content: center;
    align-items: center;
`