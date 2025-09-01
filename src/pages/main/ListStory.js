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


function ListStory() {
    const { theme } = useTheme() 

    return (
        <Slide>
            <ItemStoryTypeWide>
                <WrapCont>
                    <WrapText theme={theme}>
                        <InfoCate>
                            <IcoCate src="https://t1.kakaocdn.net/kakaocorp/kakaocorp/admin/category/1ef676a4019300001.png?type=thumb&opt=C72x72.fwebp"/>
                            <TxtCate theme={theme}>ESG</TxtCate>
                        </InfoCate>
        
                        <TitCard theme={theme}>왕초보 사장님들의 <br /> 단골 만들기 비법</TitCard>
                        <DescCard theme={theme}>
                            마케팅이 어려웠던 사장님이 <br />
                            매출 500% 올린 비결
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
                                <TxtCate theme={theme}>ESG</TxtCate>
                            </HeroInfoCate>
                            <HeroTitCard theme={theme}>도로 위 히어로즈</HeroTitCard>
                            <HeroInfoCard>
                                <TxtKeyword theme={theme}>#카카오모빌리티</TxtKeyword>
                                <TxtKeyword theme={theme}>#파트너상생</TxtKeyword>
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
                            <TxtCate theme={theme}>ESG</TxtCate>
                        </InfoCate>
                        <ClickStoryCard2>
                            <TitCard theme={theme}>카카오가 꿈꾸는<br /> 지속가능한 미래</TitCard>
                            <WrapThumbDream>
                                <ThumbImgDream src="https://t1.kakaocdn.net/thumb/C630x354.fwebp.q100/?fname=https%3A%2F%2Ft1.kakaocdn.net%2Fkakaocorp%2Fkakaocorp%2Fadmin%2Farchives%2F85d56931018c00001.jpg" />
                            </WrapThumbDream>
                        </ClickStoryCard2>
                        <InfoCardDream>
                            <TxtKeyword theme={theme}>#ESG</TxtKeyword>
                            <TxtKeyword theme={theme}>#ESG보고서</TxtKeyword>
                            <TxtKeyword theme={theme}>#약속과책임</TxtKeyword>
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
                                    <TxtCate theme={theme}>서비스</TxtCate>
                                </ChoSeungYeonInfoCate>
                                <ChoSeungYeonTitCard theme={theme}>
                                    진화에 누구보다 <br />
                                    진심인 편
                                </ChoSeungYeonTitCard>
                                <ChoSeungYeonInfoCard>
                                    <TxtKeyword theme={theme}>#조승연의탐구생활</TxtKeyword>
                                    <TxtKeyword theme={theme}>#카카오톡</TxtKeyword>
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
                                <LocationTxtCate theme={theme}>뚝딱뚝딱 성장기</LocationTxtCate>
                            </InfoCate>
                            <LocationTitCard theme={theme}>
                                지역 정보 매체에서  <br/>
                                위치 기반 상호작용 <br/> 플랫폼으로
                            </LocationTitCard>
                            <LocationDescCard theme={theme}>
                                카카오맵에서 일어난 <br/>
                                24년 간의 업데이트 이야기
                            </LocationDescCard>
                            <LocationInfoCard>
                                <TxtKeyword theme={theme}>#지도플랫폼</TxtKeyword>
                                <TxtKeyword theme={theme}>#카카오맵</TxtKeyword>
                                <TxtKeyword theme={theme}>#트렌드랭킹</TxtKeyword>
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
                                    <TxtCate theme={theme}>서비스</TxtCate>
                                </ReplyInfoCate>
                                <ReplyTitCard theme={theme}>
                                    100명에게 <br />
                                    물어봤습니다
                                </ReplyTitCard>
                                <ReplyInfoCard>
                                    <TxtKeyword theme={theme}>#로드트립</TxtKeyword>
                                    <TxtKeyword theme={theme}>#카카오톡</TxtKeyword>
                                    <TxtKeyword theme={theme}>#카톡이지</TxtKeyword>
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
                            <TxtCate theme={theme}>서비스</TxtCate>
                        </BlindPersonInfoCate>
                        <BlindPersonLinkItem>
                            <BlindPersonTitCard theme={theme}>
                                접근성 <br />
                                어디까지 고민해 봤나요? 
                            </BlindPersonTitCard>
                            <BlindPersonWrapThumb>
                                <BlindPersonThumbImg src="https://t1.kakaocdn.net/thumb/C630x354.fwebp.q100/?fname=https%3A%2F%2Ft1.kakaocdn.net%2Fkakaocorp%2Fkakaocorp%2Fadmin%2Farchives%2F85c1a2dc018c00001.jpg"/>
                            </BlindPersonWrapThumb>
                        </BlindPersonLinkItem>
                        <BlindPersonInfoCard>
                            <TxtKeyword theme={theme}>#디지털접근성</TxtKeyword>
                            <TxtKeyword theme={theme}>#카카오톡</TxtKeyword>
                            <TxtKeyword theme={theme}>#카톡이지</TxtKeyword>
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