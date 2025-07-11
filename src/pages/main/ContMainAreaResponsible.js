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
    BtnAreaLink
 } from "../../styles/main/ContMainAreaResponsible.styles";


function ContMainAreaResponsible() {

    return (
        <ContMainAreaResponsibleContainer>
            <TitleContTypeResponsible>약속과 책임</TitleContTypeResponsible>
            <InnerMainInnerResponsible>
                <BoxResponsibleTypeEsg>
                    <TitleResponsible>
                        <NameResponsible>ESG</NameResponsible>
                        <ImgResponsibleTypeEsg src="https://t1.kakaocdn.net/kakaocorp/kakaocorp/service/main/esg_2025.gif"/>
                    </TitleResponsible>
                    <TextResponsible>모두의 지속가능한 미래를 위한 카카오의 약속과 책임</TextResponsible>
             
                    <BtnAreaLink href="https://www.kakaocorp.com/page/responsible/esg">
                    <svg data-v-6984c41e="" data-v-85d56d7e="" xmlns="http://www.w3.org/2000/svg" width="55" height="55" viewBox="0 0 64 64" fill="none" class="btn_arr_big"><circle data-v-6984c41e="" cx="32" cy="31.9961" r="32" fill="black"></circle> <path data-v-6984c41e="" d="M34.9292 25.5325L33.515 26.9467L38.1748 31.6065L23 31.6074V33.6015L38.1748 33.6005L33.515 38.2604L34.9292 39.6746L42.0002 32.6035L34.9292 25.5325Z" fill="white"></path></svg>
                    </BtnAreaLink>
        
                </BoxResponsibleTypeEsg>
                <BoxResponsibleTypeGreen></BoxResponsibleTypeGreen>
                <BoxResponsibleTypePolicy></BoxResponsibleTypePolicy>
            </InnerMainInnerResponsible>
        </ContMainAreaResponsibleContainer>
    )
}

export default ContMainAreaResponsible;