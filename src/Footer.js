import styled from "styled-components";

const FooterContainer = styled.footer`
    margin: 0 auto;
    max-width: 1440px;
    width: 100%;
    height: 634px;
    background-color: #FFFFFF;
    border-top: 1px solid #6D6D6D;
`

const InnerFooter = styled.div`
    max-width: 1316px;
    width: 100%;
    height: 633px;
    margin: 0 auto;
    padding: 81px 0 48px;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
`

const SectionService = styled.section`
    max-width: 1316px;
    width: 100%;
    height: 319px;
    background-color: red;
    margin: 0 auto;
`

const SectionRelation = styled.section`
    max-width: 1316px;
    width: 100%;
    height: 65px;
    background-color: red;
    margin: 0 auto;
`

function Footer () {

    return (
        <FooterContainer>
            <InnerFooter>
                <SectionService></SectionService>
                <SectionRelation></SectionRelation>
            </InnerFooter>
        </FooterContainer>
 
    )
}

export default Footer;