import { 
    ContMainAreaResponsibleContainer,
    TitleContTypeResponsible,
    InnerMainInnerResponsible,
    BoxResponsibleTypeEsg,
    BoxResponsibleTypeGreen,
    BoxResponsibleTypePolicy,
    TitleResponsible,
    NameResponsible,
    ImgResponsibleTypeEsg,
    TextResponsible,
    BtnAreaLink,
    ActiveGreenNameResponsible,
    ImgResponsibleTypeActiveGreen,
    ActiveGreenTextResponsible,
    PolicyMagazineNameResponsible,
    ImgResponsibleTypePolicyMagazine,
    PolicyMagazineTextResponsible
 } from "../../styles/main/ContMainAreaResponsible.styles";
import { useTheme } from "../../components/context/ThemeContext";

function ContMainAreaResponsible() {
    const { theme } = useTheme()

    return (
        <ContMainAreaResponsibleContainer>
            <TitleContTypeResponsible theme={theme}>약속과 책임</TitleContTypeResponsible>
            <InnerMainInnerResponsible theme={theme}>

                <BoxResponsibleTypeEsg>
                    <TitleResponsible theme={theme}>
                        <NameResponsible>ESG</NameResponsible>
                        <ImgResponsibleTypeEsg src="https://t1.kakaocdn.net/kakaocorp/kakaocorp/service/main/esg_2025.gif"/>
                    </TitleResponsible>
                    <TextResponsible>모두의 지속가능한 미래를 위한 카카오의 약속과 책임</TextResponsible>
             
                    <BtnAreaLink href="https://www.kakaocorp.com/page/responsible/esg" theme={theme}>
                    <svg data-v-6984c41e="" data-v-85d56d7e="" xmlns="http://www.w3.org/2000/svg" width="55" height="55" viewBox="0 0 64 64" fill="none" class="btn_arr_big"><circle data-v-6984c41e="" cx="32" cy="31.9961" r="32" fill={theme === "light" ? "#000" : "#fff"}></circle> <path data-v-6984c41e="" d="M34.9292 25.5325L33.515 26.9467L38.1748 31.6065L23 31.6074V33.6015L38.1748 33.6005L33.515 38.2604L34.9292 39.6746L42.0002 32.6035L34.9292 25.5325Z" fill={theme === "light" ? "#fff" : "#000"}></path></svg>
                    </BtnAreaLink>
                </BoxResponsibleTypeEsg>

                <BoxResponsibleTypeGreen>
                    <TitleResponsible theme={theme}>
                        <ActiveGreenNameResponsible>액티브그린</ActiveGreenNameResponsible>
                    </TitleResponsible>
                    <ImgResponsibleTypeActiveGreen src="https://t1.kakaocdn.net/kakaocorp/kakaocorp/service/main/green.gif"/>
                    <ActiveGreenTextResponsible>
                        카카오를 이용하는 만큼 <br />
                        우리들의 지구도 더 풍요로울 수 있도록
                    </ActiveGreenTextResponsible>
                    <BtnAreaLink href="https://www.kakaocorp.com/page/responsible/esg" theme={theme}>
                    <svg data-v-6984c41e="" data-v-85d56d7e="" xmlns="http://www.w3.org/2000/svg" width="55" height="55" viewBox="0 0 64 64" fill="none" class="btn_arr_big"><circle data-v-6984c41e="" cx="32" cy="31.9961" r="32" fill={theme === "light" ? "#000" : "#fff"}></circle> <path data-v-6984c41e="" d="M34.9292 25.5325L33.515 26.9467L38.1748 31.6065L23 31.6074V33.6015L38.1748 33.6005L33.515 38.2604L34.9292 39.6746L42.0002 32.6035L34.9292 25.5325Z" fill={theme === "light" ? "#fff" : "#000"}></path></svg>
                    </BtnAreaLink>
                </BoxResponsibleTypeGreen>

                <BoxResponsibleTypePolicy>
                    <TitleResponsible theme={theme}>
                        <PolicyMagazineNameResponsible>정책매거진</PolicyMagazineNameResponsible>
                    </TitleResponsible>
                    <ImgResponsibleTypePolicyMagazine src="https://t1.kakaocdn.net/kakaocorp/kakaocorp/service/main/policy.gif"/>
                    <PolicyMagazineTextResponsible>
                        기술과 사람이 함께 만드는 <br />건강한 디지털 문화를 <br/> 고민합니다
                    </PolicyMagazineTextResponsible>
                    <BtnAreaLink href="https://www.kakaocorp.com/page/responsible/esg" theme={theme}>
                    <svg data-v-6984c41e="" data-v-85d56d7e="" xmlns="http://www.w3.org/2000/svg" width="55" height="55" viewBox="0 0 64 64" fill="none" class="btn_arr_big"><circle data-v-6984c41e="" cx="32" cy="31.9961" r="32" fill={theme === "light" ? "#000" : "#fff"}></circle> <path data-v-6984c41e="" d="M34.9292 25.5325L33.515 26.9467L38.1748 31.6065L23 31.6074V33.6015L38.1748 33.6005L33.515 38.2604L34.9292 39.6746L42.0002 32.6035L34.9292 25.5325Z" fill={theme === "light" ? "#fff" : "#000"}></path></svg>
                    </BtnAreaLink>
                </BoxResponsibleTypePolicy>
            </InnerMainInnerResponsible>
        </ContMainAreaResponsibleContainer>
    )
}

export default ContMainAreaResponsible;