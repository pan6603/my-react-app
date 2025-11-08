import styled from "styled-components"

export const ScrollToTopButton = styled.button`
    position: absolute;
    max-width: 50px;
    width: 100%;
    height: 50px;
    bottom: 36px;
    right: 0;
    cursor: pointer;
    border: 0;
    background-color: transparent;

    @media (max-width: 1023px) { 
        max-width: 40px;
        width: 100%;
        height: 40px;
        right: 50%;
        width: 40px;
        height: 40px;
        margin-right: -20px;
    } 
`

export const IcoTop = styled.svg`
    width: 50px;
    height: 50px;

    @media (max-width: 1023px) { 
        width: 40px;
        height: 100%;
    }
`