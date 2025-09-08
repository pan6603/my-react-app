import {
    Slide,
    ItemStoryTypeWide,
    WrapCont,
    WrapText,
    WrapThumb,
    ThumbImg,
    InfoCate,
    IcoCate,
    TxtCate,
    BtnShareIcoComm,
    IcoShare,
    TitCard,
    DescCard,
    TxtKeyword,
    ItemStoryTypeNormal,
    ItemCardNewItemBottomCardTypeFlow,
    LinkCard,
    HeroWrapCont,
    HeroThumbImg,
    HeroWrapText,
    HeroInfoCate,
    HeroIcoCate,
    HeroBtnShareIcoComm,
    HeroTitCard,
    HeroInfoCard,
    ItemStoryTypeNormalDream,
    ItemCardNewItemNormalCardTypeFlow,
    InnerCard,
    ClickStoryCard2,
    WrapThumbDream,
    ThumbImgDream,
    InfoCardDream,
    BtnShareIcoCommDream,
    ChoSeungYeonItemStoryTypeNormal,
    ChoSeungYeonItemCardNewItemBottomCardTypeFlow,
    ChoSeungYeonLinkCard,
    ChoSeungYeonWrapCont,
    ChoSeungYeonWrapThumb,
    ChoSeungYeonThumbImg,
    ChoSeungYeonWrapText,
    ChoSeungYeonInfoCate,
    ChoSeungYeonTitCard,
    ChoSeungYeonInfoCard,
    ItemStoryTypeRow,
    ItemCardNewItemRowCardTypeFlow,
    LocationWrapCont,
    LocationWrapText,
    LocationWrapThumb,
    LocationThumbImg,
    LocationIcoCate,
    LocationTxtCate,
    LocationTitCard,
    LocationDescCard,
    LocationInfoCard,
    ReplyWrapCont,
    ReplyWrapThumb,
    ReplyThumbImg,
    ReplyWrapText,
    ReplyInfoCate,
    ReplyBtnShareIcoComm,
    ReplyTitCard,
    ReplyInfoCard,
    BlindPersonInnerCard,
    BlindPersonInfoCate,
    BlindPersonBtnShareIcoComm,
    BlindPersonLinkItem,
    BlindPersonTitCard,
    BlindPersonWrapThumb,
    BlindPersonThumbImg,
    BlindPersonInfoCard
} from "../../styles/main/ContMainAreaStory.styles";
import { useTheme } from "../../components/context/ThemeContext";
import { useTranslation } from "react-i18next";

function ListStory() {
    const { theme } = useTheme() 
    const { t } = useTranslation();

    return (
        <Slide>
            <ItemStoryTypeWide>
                <WrapCont>
                    <WrapText theme={theme}>
                        <InfoCate>
                            <IcoCate src="https://t1.kakaocdn.net/kakaocorp/kakaocorp/admin/category/1ef676a4019300001.png?type=thumb&opt=C72x72.fwebp"/>
                            <TxtCate theme={theme}>{t("home.list_story.esg")}</TxtCate>
                        </InfoCate>
                        
                        <TitCard theme={theme}>{t("home.list_story.big_beginner_ceo")}</TitCard>
                        <DescCard theme={theme}>
                            {t("home.list_story.secret_to_making_sales")}
                        </DescCard>
                    
                    </WrapText>
                    <WrapThumb>
                        <ThumbImg src="https://t1.kakaocdn.net/thumb/C954x537.fwebp.q100/?fname=https%3A%2F%2Ft1.kakaocdn.net%2Fkakaocorp%2Fkakaocorp%2Fadmin%2Fchronicle%2F54538fe4018e00001.jpeg"/>
                    </WrapThumb>
                </WrapCont>
                <BtnShareIcoComm>
                    <IcoShare>
                        <g data-v-19bdf39b="" fill="none" fill-rule="evenodd">
                            <path data-v-19bdf39b="" d="M0 0H24V24H0z" transform="translate(-350 -222) translate(24 192) translate(326 30)"></path> 
                            <g data-v-19bdf39b="" transform="translate(-350 -222) translate(24 192) translate(326 30) translate(10 2)" class="fill" fill={theme === "light" ? "#000" : "#adadad"}>
                                <circle data-v-19bdf39b="" cx="2" cy="2" r="2"></circle>
                                <circle data-v-19bdf39b="" cx="2" cy="10" r="2"></circle>
                                <circle data-v-19bdf39b="" cx="2" cy="18" r="2"></circle>
                            </g>
                        </g>
                    </IcoShare>
                </BtnShareIcoComm>
            </ItemStoryTypeWide>
        
            <ItemStoryTypeNormal>
                <ItemCardNewItemBottomCardTypeFlow>
                    <LinkCard>
                        <HeroWrapCont>
                            <HeroThumbImg src="https://t1.kakaocdn.net/thumb/C630x354.fwebp.q100/?fname=https%3A%2F%2Ft1.kakaocdn.net%2Fkakaocorp%2Fkakaocorp%2Fadmin%2Farchives%2F1a81e34d018900001.png" />
                        </HeroWrapCont>
                        <HeroWrapText theme={theme}>
                            <HeroInfoCate>
                                <HeroIcoCate src="https://t1.kakaocdn.net/kakaocorp/kakaocorp/admin/category/22d6226a019300001.png?type=thumb&opt=C72x72.fwebp" />
                                <TxtCate theme={theme}>{t("home.list_story.esg")}</TxtCate>
                            </HeroInfoCate>
                            <HeroTitCard theme={theme}>{t("home.list_story.hero_tit_card")}</HeroTitCard>
                            <HeroInfoCard>
                                <TxtKeyword theme={theme}>
                                    {t("home.list_story.hash_tag.kakao_mobility")}
                                </TxtKeyword>
                                <TxtKeyword theme={theme}>
                                    {t("home.list_story.hash_tag.partners")}
                                </TxtKeyword>
                            </HeroInfoCard>
                        </HeroWrapText>
                    </LinkCard>
                    <HeroBtnShareIcoComm>
                        <IcoShare>
                        <g data-v-19bdf39b="" fill="none" fill-rule="evenodd">
                            <path data-v-19bdf39b="" d="M0 0H24V24H0z" transform="translate(-350 -222) translate(24 192) translate(326 30)"></path> 
                            <g data-v-19bdf39b="" transform="translate(-350 -222) translate(24 192) translate(326 30) translate(10 2)" class="fill" fill={theme === "light" ? "#000" : "#fff"}>
                                <circle data-v-19bdf39b="" cx="2" cy="2" r="2"></circle>
                                <circle data-v-19bdf39b="" cx="2" cy="10" r="2"></circle>
                                <circle data-v-19bdf39b="" cx="2" cy="18" r="2"></circle>
                            </g>
                        </g>
                        </IcoShare>
                                      
                    </HeroBtnShareIcoComm>
                </ItemCardNewItemBottomCardTypeFlow>
            </ItemStoryTypeNormal>
        
            <ItemStoryTypeNormalDream>
                <ItemCardNewItemNormalCardTypeFlow theme={theme}>
                    <InnerCard>
                        <InfoCate>
                            <IcoCate src="https://t1.kakaocdn.net/kakaocorp/kakaocorp/admin/category/1ef676a4019300001.png?type=thumb&opt=C72x72.fwebp" />
                            <TxtCate theme={theme}>{t("home.list_story.esg")}</TxtCate>
                        </InfoCate>
                        <ClickStoryCard2>
                            <TitCard theme={theme}>
                                {t("home.list_story.kakao_dream")}
                            </TitCard>
                            <WrapThumbDream>
                                <ThumbImgDream src="https://t1.kakaocdn.net/thumb/C630x354.fwebp.q100/?fname=https%3A%2F%2Ft1.kakaocdn.net%2Fkakaocorp%2Fkakaocorp%2Fadmin%2Farchives%2F85d56931018c00001.jpg" />
                            </WrapThumbDream>
                        </ClickStoryCard2>
                        <InfoCardDream>
                            <TxtKeyword theme={theme}>
                                {t("home.list_story.hash_tag.esg")}
                            </TxtKeyword>
                            <TxtKeyword theme={theme}>
                                {t("home.list_story.hash_tag.esg_report")}
                            </TxtKeyword>
                            <TxtKeyword theme={theme}>
                                {t("home.list_story.hash_tag.promise_responsibility")}
                            </TxtKeyword>
                            <TxtKeyword theme={theme}>#카카오</TxtKeyword>
                        </InfoCardDream>
                    </InnerCard>
                    <BtnShareIcoCommDream>
                        <IcoShare>
                            <g data-v-19bdf39b="" fill="none" fill-rule="evenodd">
                                <path data-v-19bdf39b="" d="M0 0H24V24H0z" transform="translate(-350 -222) translate(24 192) translate(326 30)"></path> 
                                <g data-v-19bdf39b="" transform="translate(-350 -222) translate(24 192) translate(326 30) translate(10 2)" class="fill" fill={theme === "light" ? "#000" : "#adadad"}>
                                    <circle data-v-19bdf39b="" cx="2" cy="2" r="2"></circle> 
                                    <circle data-v-19bdf39b="" cx="2" cy="10" r="2"></circle> 
                                    <circle data-v-19bdf39b="" cx="2" cy="18" r="2"></circle></g></g>
                        </IcoShare>
                    </BtnShareIcoCommDream>
                </ItemCardNewItemNormalCardTypeFlow>
            </ItemStoryTypeNormalDream>
        
            <ChoSeungYeonItemStoryTypeNormal>
                <ChoSeungYeonItemCardNewItemBottomCardTypeFlow theme={theme}>
                    <ChoSeungYeonLinkCard>
                        <ChoSeungYeonWrapCont>
                            <ChoSeungYeonWrapThumb>
                                <ChoSeungYeonThumbImg src="https://t1.kakaocdn.net/thumb/C630x354.fwebp.q100/?fname=https%3A%2F%2Ft1.kakaocdn.net%2Fkakaocorp%2Fkakaocorp%2Fadmin%2Farchives%2F85ce8331018c00001.jpg" />
                            </ChoSeungYeonWrapThumb>
                            <ChoSeungYeonWrapText>
                                <ChoSeungYeonInfoCate>
                                    <IcoCate src="https://t1.kakaocdn.net/kakaocorp/kakaocorp/admin/category/1ef676a4019300001.png?type=thumb&opt=C72x72.fwebp"/>
                                    <TxtCate theme={theme}>
                                        {t("home.list_story.service")}
                                    </TxtCate>
                                </ChoSeungYeonInfoCate>
                                <ChoSeungYeonTitCard theme={theme}>
                                    {t("home.list_story.evolution")}
                                </ChoSeungYeonTitCard>
                                <ChoSeungYeonInfoCard>
                                    <TxtKeyword theme={theme}>
                                        {t("home.list_story.hash_tag.exploration_life")}
                                    </TxtKeyword>
                                    <TxtKeyword theme={theme}>
                                        {t("home.list_story.hash_tag.kakao_talk")}
                                    </TxtKeyword>
                                </ChoSeungYeonInfoCard>
                            </ChoSeungYeonWrapText>
                        </ChoSeungYeonWrapCont>
                    </ChoSeungYeonLinkCard>
                </ChoSeungYeonItemCardNewItemBottomCardTypeFlow>
            </ChoSeungYeonItemStoryTypeNormal>
        
            <ItemStoryTypeRow>
                <ItemCardNewItemRowCardTypeFlow theme={theme}>
                    <LocationWrapCont>
                        <LocationWrapText>
                            <InfoCate>
                                <LocationIcoCate src="https://t1.kakaocdn.net/kakaocorp/kakaocorp/admin/6562b710017800001.png?type=thumb&opt=C72x72.fwebp"/>
                                <LocationTxtCate theme={theme}>
                                    {t("home.list_story.click_click_click")}
                                </LocationTxtCate>
                            </InfoCate>
                            <LocationTitCard theme={theme}>
                                {t("home.list_story.location_tit_card")}
                            </LocationTitCard>
                            <LocationDescCard theme={theme}>
                                {t("home.list_story.location_desc_card")}
                            </LocationDescCard>
                            <LocationInfoCard>
                                <TxtKeyword theme={theme}>
                                    {t("home.list_story.hash_tag.map_platform")}
                                </TxtKeyword>
                                <TxtKeyword theme={theme}>
                                    {t("home.list_story.hash_tag.kakao_map")}
                                </TxtKeyword>
                                <TxtKeyword theme={theme}>
                                    {t("home.list_story.hash_tag.trend_ranking")}
                                </TxtKeyword>
                            </LocationInfoCard>
                        </LocationWrapText>
                        <LocationWrapThumb>
                            <LocationThumbImg src="https://t1.kakaocdn.net/thumb/C537x537.fwebp.q100/?fname=https%3A%2F%2Ft1.kakaocdn.net%2Fkakaocorp%2Fkakaocorp%2Fadmin%2Fchronicle%2Fc9325044018c00001.png"/>
                       
                        </LocationWrapThumb>
                    </LocationWrapCont>
                </ItemCardNewItemRowCardTypeFlow>
            </ItemStoryTypeRow>
        
            <ItemStoryTypeNormal>
                <ItemCardNewItemBottomCardTypeFlow>
                    <LinkCard>
                        <ReplyWrapCont theme={theme}>
                            <ReplyWrapThumb>
                                <ReplyThumbImg src="https://t1.kakaocdn.net/thumb/C630x354.fwebp.q100/?fname=https%3A%2F%2Ft1.kakaocdn.net%2Fkakaocorp%2Fkakaocorp%2Fadmin%2Farchives%2F85b76b14018c00001.jpg"/>
                            </ReplyWrapThumb>
                            <ReplyWrapText>
                                <ReplyInfoCate>
                                    <IcoCate src="https://t1.kakaocdn.net/kakaocorp/kakaocorp/admin/category/1ef676a4019300001.png?type=thumb&opt=C72x72.fwebp"/>
                                    <TxtCate theme={theme}>
                                        {t("home.list_story.service")}
                                    </TxtCate>
                                </ReplyInfoCate>
                                <ReplyTitCard theme={theme}>
                                    {t("home.list_story.reply_tit_card")}
                                </ReplyTitCard>
                                <ReplyInfoCard>
                                    <TxtKeyword theme={theme}>
                                        {t("home.list_story.hash_tag.road_trip")}
                                    </TxtKeyword>
                                    <TxtKeyword theme={theme}>
                                        {t("home.list_story.hash_tag.kakao_talk")}
                                    </TxtKeyword>
                                    <TxtKeyword theme={theme}>
                                        {t("home.list_story.hash_tag.kakao_easy")}
                                    </TxtKeyword>
                                </ReplyInfoCard>
                            </ReplyWrapText>
                        </ReplyWrapCont>
                    </LinkCard>
                    <ReplyBtnShareIcoComm>
                    <svg data-v-19bdf39b="" data-v-51d82ea5="" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" class="ico_share"><g data-v-19bdf39b="" fill="none" fill-rule="evenodd">
                        <path data-v-19bdf39b="" d="M0 0H24V24H0z" transform="translate(-350 -222) translate(24 192) translate(326 30)"></path>
                        <g data-v-19bdf39b="" transform="translate(-350 -222) translate(24 192) translate(326 30) translate(10 2)" class="fill" fill={theme === "light" ? "#000" : "#fff"}>
                            <circle data-v-19bdf39b="" cx="2" cy="2" r="2"></circle>
                            <circle data-v-19bdf39b="" cx="2" cy="10" r="2"></circle>
                            <circle data-v-19bdf39b="" cx="2" cy="18" r="2"></circle></g></g></svg>
                    </ReplyBtnShareIcoComm>
                </ItemCardNewItemBottomCardTypeFlow>
            </ItemStoryTypeNormal>
        
            <ItemStoryTypeNormal>
                <ItemCardNewItemBottomCardTypeFlow theme={theme}>
                    <BlindPersonInnerCard>
                        <BlindPersonInfoCate>
                            <IcoCate src="https://t1.kakaocdn.net/kakaocorp/kakaocorp/admin/category/1ef676a4019300001.png?type=thumb&opt=C72x72.fwebp" />
                            <TxtCate theme={theme}>{t("home.list_story.service")}</TxtCate>
                        </BlindPersonInfoCate>
                        <BlindPersonLinkItem>
                            <BlindPersonTitCard theme={theme} style={{ whiteSpace: 'pre-line' }}>
                                {t("home.list_story.blind_person_tit_card")}
                            </BlindPersonTitCard>
                            <BlindPersonWrapThumb>
                                <BlindPersonThumbImg src="https://t1.kakaocdn.net/thumb/C630x354.fwebp.q100/?fname=https%3A%2F%2Ft1.kakaocdn.net%2Fkakaocorp%2Fkakaocorp%2Fadmin%2Farchives%2F85c1a2dc018c00001.jpg"/>
                            </BlindPersonWrapThumb>
                        </BlindPersonLinkItem>
                        <BlindPersonInfoCard>
                            <TxtKeyword theme={theme}>{t("home.list_story.hash_tag.digital_accessibility")}</TxtKeyword>
                            <TxtKeyword theme={theme}>{t("home.list_story.hash_tag.kakao_talk")}</TxtKeyword>
                            <TxtKeyword theme={theme}>{t("home.list_story.hash_tag.kakao_easy")}</TxtKeyword>
                        </BlindPersonInfoCard>
                    </BlindPersonInnerCard>
                    <BlindPersonBtnShareIcoComm>
                    <svg data-v-19bdf39b="" data-v-76d2af19="" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" class="ico_share"><g data-v-19bdf39b="" fill="none" fill-rule="evenodd">
                        <path data-v-19bdf39b="" d="M0 0H24V24H0z" transform="translate(-350 -222) translate(24 192) translate(326 30)"></path> 
                        <g data-v-19bdf39b="" transform="translate(-350 -222) translate(24 192) translate(326 30) translate(10 2)" class="fill" fill={theme === "light" ? "#000" : "#adadad"}>
                            <circle data-v-19bdf39b="" cx="2" cy="2" r="2"></circle>
                            <circle data-v-19bdf39b="" cx="2" cy="10" r="2"></circle>
                            <circle data-v-19bdf39b="" cx="2" cy="18" r="2"></circle></g></g></svg>
                    </BlindPersonBtnShareIcoComm>
                </ItemCardNewItemBottomCardTypeFlow>
            </ItemStoryTypeNormal>

        </Slide>
    )
}

export default ListStory;