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
import { useTranslation } from "react-i18next";

function ContMainAreaResponsible() {
    const { theme } = useTheme()
    const { t } = useTranslation();

    return (
        <ContMainAreaResponsibleContainer>
            <TitleContTypeResponsible theme={theme}>
                {t("home.cont_main_area_responsible.responsibility")}
            </TitleContTypeResponsible>
            <InnerMainInnerResponsible theme={theme}>

                <BoxResponsibleTypeEsg>
                    <TitleResponsible theme={theme}>
                        <NameResponsible>
                        {t("home.cont_main_area_responsible.title.esg_name_responsible")}
                        </NameResponsible>
                        <ImgResponsibleTypeEsg src="https://t1.kakaocdn.net/kakaocorp/kakaocorp/service/main/esg_2025.gif"/>
                    </TitleResponsible>
                    <TextResponsible>
                        {t("home.cont_main_area_responsible.content.esg_text_responsible")}
                    </TextResponsible>
             
                    <BtnAreaLink href="https://www.kakaocorp.com/page/responsible/esg" theme={theme}>
                    <svg data-v-6984c41e="" data-v-85d56d7e="" xmlns="http://www.w3.org/2000/svg" width="55" height="55" viewBox="0 0 64 64" fill="none" class="btn_arr_big"><circle data-v-6984c41e="" cx="32" cy="31.9961" r="32" fill={theme === "light" ? "#000" : "#fff"}></circle> <path data-v-6984c41e="" d="M34.9292 25.5325L33.515 26.9467L38.1748 31.6065L23 31.6074V33.6015L38.1748 33.6005L33.515 38.2604L34.9292 39.6746L42.0002 32.6035L34.9292 25.5325Z" fill={theme === "light" ? "#fff" : "#000"}></path></svg>
                    </BtnAreaLink>
                </BoxResponsibleTypeEsg>

                <BoxResponsibleTypeGreen>
                    <TitleResponsible theme={theme}>
                        <ActiveGreenNameResponsible>
                        {t("home.cont_main_area_responsible.title.active_green_name_responsible")}       
                        </ActiveGreenNameResponsible>
                    </TitleResponsible>
                    <ImgResponsibleTypeActiveGreen src="https://t1.kakaocdn.net/kakaocorp/kakaocorp/service/main/green.gif"/>
                    <ActiveGreenTextResponsible style={{ whiteSpace: 'pre-line' }}>
                    {t("home.cont_main_area_responsible.content.active_green_text_responsible")}
                    </ActiveGreenTextResponsible>
                    <BtnAreaLink href="https://www.kakaocorp.com/page/responsible/esg" theme={theme}>
                    <svg data-v-6984c41e="" data-v-85d56d7e="" xmlns="http://www.w3.org/2000/svg" width="55" height="55" viewBox="0 0 64 64" fill="none" class="btn_arr_big"><circle data-v-6984c41e="" cx="32" cy="31.9961" r="32" fill={theme === "light" ? "#000" : "#fff"}></circle> <path data-v-6984c41e="" d="M34.9292 25.5325L33.515 26.9467L38.1748 31.6065L23 31.6074V33.6015L38.1748 33.6005L33.515 38.2604L34.9292 39.6746L42.0002 32.6035L34.9292 25.5325Z" fill={theme === "light" ? "#fff" : "#000"}></path></svg>
                    </BtnAreaLink>
                </BoxResponsibleTypeGreen>

                <BoxResponsibleTypePolicy>
                    <TitleResponsible theme={theme}>
                        <PolicyMagazineNameResponsible>
                        {t("home.cont_main_area_responsible.title.policy")}         
                        </PolicyMagazineNameResponsible>
                    </TitleResponsible>
                    <ImgResponsibleTypePolicyMagazine src="https://t1.kakaocdn.net/kakaocorp/kakaocorp/service/main/policy.gif"/>
                    <PolicyMagazineTextResponsible style={{ whiteSpace: 'pre-line' }}>
                    {t("home.cont_main_area_responsible.content.policy_magazine_text_responsible")}
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