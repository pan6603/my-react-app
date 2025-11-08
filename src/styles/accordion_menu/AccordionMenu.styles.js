import styled from "styled-components"


export const AccordionMenuDiv = styled.div`
    margin-top: 20px;
    max-width: 712px;
    width: 100%;
    height: max-content; 
    
    display: flex;
    flex-direction: column;
    justify-content: space-between;

    @media(min-width: 1024px) {
        display: none;
    }
`

export const WrapServiceWrapEtc = styled.div`
    max-width: 712px;
    width: 100%;
    height: max-content;
    padding-bottom: ${({ open }) => (open ? "10px" : "0px" )};
`

export const WrapEtcInnerService = styled.div`
    max-width: 712px;
    width: 100%;
    height: max-content;
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    display: flex;
    align-items: center;
    flex-direction: column;
    border-top: 1px solid #e6e6e6;
`

export const WrapEtcListService = styled.div`
    max-width: 712px;
    width: 100%;
    height: max-content; 
    display: flex;
    flex-direction: column;
    gap: 8px;
`

export const WrapEtcItemService = styled.div`
    max-width: 712px;
    width: 100%;
    height: 21px;
`

export const WrapEtcLinkService = styled.a`
    color: #888;
    font-size: 12px;
    font-weight: bold;
    line-height: 1.5;
    text-decoration: none;
    cursor: pointer;
    margin-left: 8px;
`

export const IcoOutlink = styled.svg`
    color: #888;
    font-weight: bold;
    max-width: 9px;
    width: 100%;
    height: 9px;
    margin: 4px 0 0 4px;
`

export const KakaoGroupServiceSubTitle = styled.div`
    overflow: hidden;
    width: 100%;
    position: static;
    font-size: 13px;
    font-weight: 700;
    line-height: 1.53;
    letter-spacing: -.2px;
    margin-bottom: 0;
    padding: 16px 0;
    text-align: left;
    display: flex;
    justify-content: space-between;
    align-items: center;
`

export const KakaoGroupSubTitle = styled.div`
    overflow: hidden;
    width: 100%;
    position: static;
    font-size: 13px;
    font-weight: 700;
    line-height: 1.53;
    letter-spacing: -.2px;
    margin-bottom: 0;
    padding: 16px 0;
    text-align: left;
    display: flex;
    justify-content: space-between;
    align-items: center;
`

export const IRSubTitle = styled.div`
    overflow: hidden;
    width: 100%;
    position: static;
    font-size: 13px;
    font-weight: 700;
    line-height: 1.53;
    letter-spacing: -.2px;
    margin-bottom: 0;
    padding: 16px 0;
    text-align: left;
    display: flex;
    justify-content: space-between;
    align-items: center;
`

export const AccountSubTitle = styled.div`
    overflow: hidden;
    width: 100%;
    position: static;
    font-size: 13px;
    font-weight: 700;
    line-height: 1.53;
    letter-spacing: -.2px;
    margin-bottom: 0;
    padding: 16px 0;
    text-align: left;
    display: flex;
    justify-content: space-between;
    align-items: center;
`


export const WrapEtcSubTitleText = styled.div`
    margin-left: 8px;
`

export const WrapEtcSubTitleIcoArrow = styled.svg`
    width: 14px;
    height: 14px;
    margin: 4px 12px 0 0;
`