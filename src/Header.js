import styled from "styled-components";
import {ReactComponent as Logo} from "./img/logo/ico_logo.svg";

const HeaderWrapper = styled.header`
    max-width:1440px;
    width:100%;
    height:91px;
`

const InnerHeader = styled.div`
    max-width:1316px;
    width:100%;
    height:91px;
    background-color:green;
    margin: 0 auto;
    display: flex;
    justify-content: space-between;
    align-items: center;
`;

const MainLogo = styled.h1`
    max-width: 74px;
    width:100%;
    height: 24px;
`;

const MainLogoText = styled.a`
    max-width: 74px;
    width:100%;
    height: 24px;
    text-decoration: none;
    color: #333;
    display: flex;
    align-items: center;
`;

const MainLogoSvg = styled.a`
    max-width: 74px;
    width:100%;
    height: 24px;
`;

const StyledLogo = styled(Logo)`

`
const Navigation = styled.nav`
    max-width: 626px;
    width: 100%;
    height: 37px;
    background-color:blue;
`;

function Header () {
    return (  
        <HeaderWrapper>
            <InnerHeader>
                <MainLogo>
                    <MainLogoText>
                       <StyledLogo />
                       <Navigation />
                    </MainLogoText>
                </MainLogo>
            </InnerHeader>
        </HeaderWrapper>
    ) 
}

export default Header;