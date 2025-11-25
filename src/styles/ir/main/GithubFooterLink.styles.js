import styled from "styled-components";

export const GithubFooterLinkContainer = styled.div`
    max-width: 967px;
    width: 100%;
    height: 53px;
    margin: 30px auto;
    display: flex;
    align-items: center;

    @media (min-width: 1024px) {
        display: none;
    }
`

export const GithubProfileLightModeLink = styled.a`
    max-width: 32px;
    width: 100%;
    height: 32px;
    display: flex;
    justify-content: center;
    align-items: center;
`

export const WrapInfo = styled.div`
    max-width: 268px;
    width: 100%;
    height: 18px;
    font-size: 13px;
    color: #000;
`