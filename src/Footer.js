import styled from "styled-components";

const FooterContainer = styled.footer`
    margin: 0 auto;
    max-width: 1440px;
    width: 100%;
    height: 634px;
    background-color: gray;
`

function Footer () {

    return (
        <FooterContainer>
            <p>Hello Footer</p>
        </FooterContainer>
 
    )
}

export default Footer;