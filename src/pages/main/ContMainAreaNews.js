import { 
    ContMainAreaNewsContainer,
    TitleContTypeNewsTitNews3,
    InnerMainInnerNews,
    WrapTop,
    WrapBottom,
    SlickSlider,
    SlickList,
    SlickTrack,
    SlickSlide,
    SlickSlideDiv1,
    SlickSlideDiv2,
    WrapCardInnerSlide,
    ItemCardNewItemNormalCardTypeMain,
    InnerCard,
    InfoCate,
    IcoCate,
    TxtCate,
    TxtDate,
    BtnShareIcoComm,
    LinkItemDiv,
    LinkItem,
    TitCard,
    InfoCard,
    TxtKeyword,
    WrapThumb,
    ThumbImg,
    WrapSlides,
    WrapLinks,
    LinkNewsDiv,
    LinkNews,
    TitleLink,
    TodayNewsSlickTrack,
    TodayNewsSlickSlide,
    ItemCardNewBoxNews,
    BoxTop,
    BadgeBox,
    IconBox,
    CateBox,
    DateBox,
    TodayNewsBtnShareIcoComm,
    TitleBox,
    TitleBoxLink
} from "../../styles/main/ContMainAreaNews.styles";
import { useTheme } from "../../components/context/ThemeContext";

function ContMainAreaNews() {
    const { theme } = useTheme() 

    return (
        <ContMainAreaNewsContainer>
            <TitleContTypeNewsTitNews3 theme={theme}>
                오늘의 뉴스
            </TitleContTypeNewsTitNews3>
            <InnerMainInnerNews>
                <WrapTop>
                    <SlickSlider>
                        <SlickList>
                            <SlickTrack>
                                <SlickSlide>
                                    <SlickSlideDiv1>
                                        <SlickSlideDiv2>
                                            <WrapCardInnerSlide>
                                                <ItemCardNewItemNormalCardTypeMain theme={theme}>
                                                    <InnerCard>
                                                        <InfoCate>
                                                            <IcoCate src="https://t1.kakaocdn.net/kakaocorp/kakaocorp/admin/category/1ee6415a019300001.png?type=thumb&opt=C72x72.fwebp"/>
                                                            <TxtCate theme={theme}>보도자료</TxtCate>
                                                            <TxtDate theme={theme}>2025.07.31</TxtDate>
                                                        </InfoCate>
                                                        <LinkItemDiv>
                                                            <LinkItem>
                                                                <TitCard theme={theme}>
                                                                    카카오프렌즈, 여름 한정 테마 <br /> '냥냥특집' 테마 굿즈 출시
                                                                </TitCard>
                                                                <WrapThumb>
                                                                    <ThumbImg src="https://t1.kakaocdn.net/thumb/C630x354.fwebp.q100/?fname=https%3A%2F%2Ft1.kakaocdn.net%2Fkakaocorp%2Fkakaocorp%2Fadmin%2Fnews%2F5de0d0eb019800001.jpg"/>
                                                                </WrapThumb>
                                                            </LinkItem>
                                                            <InfoCard>
                                                                <TxtKeyword theme={theme}>#카카오프렌즈</TxtKeyword>
                                                                <TxtKeyword theme={theme}>#카카오프렌즈 스토어</TxtKeyword>
                                                                <TxtKeyword theme={theme}>#캐릭터</TxtKeyword>
                                                                <TxtKeyword theme={theme}>#IP</TxtKeyword>
                                                                <TxtKeyword theme={theme}>#춘식</TxtKeyword>
                                                            </InfoCard>
                                                        </LinkItemDiv>
                                                    </InnerCard>
                                                    <BtnShareIcoComm>
                                                    <svg data-v-19bdf39b="" data-v-76d2af19="" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" class="ico_share"><g data-v-19bdf39b="" fill="none" fill-rule="evenodd"><path data-v-19bdf39b="" d="M0 0H24V24H0z" transform="translate(-350 -222) translate(24 192) translate(326 30)"></path> <g data-v-19bdf39b="" transform="translate(-350 -222) translate(24 192) translate(326 30) translate(10 2)" class="fill" fill={theme === "light" ? "#000" : "#adadad"}><circle data-v-19bdf39b="" cx="2" cy="2" r="2"></circle> <circle data-v-19bdf39b="" cx="2" cy="10" r="2"></circle> <circle data-v-19bdf39b="" cx="2" cy="18" r="2"></circle></g></g></svg>
                                                    </BtnShareIcoComm>
                                                </ItemCardNewItemNormalCardTypeMain>  
                                            </WrapCardInnerSlide>
                                        </SlickSlideDiv2>
                                    </SlickSlideDiv1>
                                </SlickSlide>
                                <SlickSlide>
                                    <SlickSlideDiv1>
                                        <SlickSlideDiv2>
                                            <WrapCardInnerSlide>
                                                <ItemCardNewItemNormalCardTypeMain theme={theme}>
                                                    <InnerCard>
                                                        <InfoCate>
                                                            <IcoCate src="https://t1.kakaocdn.net/kakaocorp/kakaocorp/admin/category/1ee6415a019300001.png?type=thumb&opt=C72x72.fwebp"/>
                                                            <TxtCate theme={theme}>보도자료</TxtCate>
                                                            <TxtDate theme={theme}>2025.07.31</TxtDate>
                                                        </InfoCate>
                                                        <LinkItemDiv>
                                                            <LinkItem>
                                                                <TitCard theme={theme}>
                                                                    카카오, ‘제12회 브런치북 출판 <br /> 프로젝트’ 대상 수상작 출간
                                                                </TitCard>
                                                                <WrapThumb>
                                                                    <ThumbImg src="https://t1.kakaocdn.net/thumb/C630x354.fwebp.q100/?fname=https%3A%2F%2Ft1.kakaocdn.net%2Fkakaocorp%2Fkakaocorp%2Fadmin%2Fnews%2F73e36256019800001.png"/>
                                                                </WrapThumb>
                                                            </LinkItem>
                                                            <InfoCard>
                                                                <TxtKeyword theme={theme}>#브런치북</TxtKeyword>
                                                                <TxtKeyword theme={theme}>#브런치스토리</TxtKeyword>
                                                                <TxtKeyword theme={theme}>#카카오</TxtKeyword>
                                                            </InfoCard>
                                                        </LinkItemDiv>
                                                    </InnerCard>
                                                    <BtnShareIcoComm>
                                                    <svg data-v-19bdf39b="" data-v-76d2af19="" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" class="ico_share"><g data-v-19bdf39b="" fill="none" fill-rule="evenodd"><path data-v-19bdf39b="" d="M0 0H24V24H0z" transform="translate(-350 -222) translate(24 192) translate(326 30)"></path> <g data-v-19bdf39b="" transform="translate(-350 -222) translate(24 192) translate(326 30) translate(10 2)" class="fill" fill={theme === "light" ? "#000" : "#adadad"}><circle data-v-19bdf39b="" cx="2" cy="2" r="2"></circle> <circle data-v-19bdf39b="" cx="2" cy="10" r="2"></circle> <circle data-v-19bdf39b="" cx="2" cy="18" r="2"></circle></g></g></svg>
                                                    </BtnShareIcoComm>
                                                </ItemCardNewItemNormalCardTypeMain>
                                            </WrapCardInnerSlide>
                                        </SlickSlideDiv2>
                                    </SlickSlideDiv1>
                                </SlickSlide>
                                <SlickSlide>
                                    <SlickSlideDiv1>
                                        <SlickSlideDiv2>
                                            <WrapCardInnerSlide>
                                                <ItemCardNewItemNormalCardTypeMain theme={theme}>
                                                    <InnerCard>
                                                        <InfoCate>
                                                            <IcoCate src="https://t1.kakaocdn.net/kakaocorp/kakaocorp/admin/category/1ee6415a019300001.png?type=thumb&opt=C72x72.fwebp"/>
                                                            <TxtCate theme={theme}>보도자료</TxtCate>
                                                            <TxtDate theme={theme}>2025.07.31</TxtDate>
                                                        </InfoCate>
                                                        <LinkItemDiv>
                                                            <LinkItem>
                                                                <TitCard theme={theme}>
                                                                    카카오, 신규 톡디지털카드 <br /> ‘러너스 카드’ 출시
                                                                </TitCard>
                                                                <WrapThumb>
                                                                    <ThumbImg src="https://t1.kakaocdn.net/thumb/C630x354.fwebp.q100/?fname=https%3A%2F%2Ft1.kakaocdn.net%2Fkakaocorp%2Fkakaocorp%2Fadmin%2Fnews%2F5e077e51019800001.jpg"/>
                                                                </WrapThumb>
                                                            </LinkItem>
                                                            <InfoCard>
                                                                <TxtKeyword theme={theme}>#카카오</TxtKeyword>
                                                                <TxtKeyword theme={theme}>#카카오톡</TxtKeyword>
                                                                <TxtKeyword theme={theme}>#톡디지털카드</TxtKeyword>
                                                                <TxtKeyword theme={theme}>#러너스 카드</TxtKeyword>
                                                                <TxtKeyword theme={theme}>#러너블</TxtKeyword>
                                                            </InfoCard>
                                                        </LinkItemDiv>
                                                    </InnerCard>
                                                    <BtnShareIcoComm>
                                                    <svg data-v-19bdf39b="" data-v-76d2af19="" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" class="ico_share"><g data-v-19bdf39b="" fill="none" fill-rule="evenodd"><path data-v-19bdf39b="" d="M0 0H24V24H0z" transform="translate(-350 -222) translate(24 192) translate(326 30)"></path> <g data-v-19bdf39b="" transform="translate(-350 -222) translate(24 192) translate(326 30) translate(10 2)" class="fill" fill={theme === "light" ? "#000" : "#adadad"}><circle data-v-19bdf39b="" cx="2" cy="2" r="2"></circle> <circle data-v-19bdf39b="" cx="2" cy="10" r="2"></circle> <circle data-v-19bdf39b="" cx="2" cy="18" r="2"></circle></g></g></svg>
                                                    </BtnShareIcoComm>
                                                </ItemCardNewItemNormalCardTypeMain>
                                            </WrapCardInnerSlide>
                                        </SlickSlideDiv2>
                                    </SlickSlideDiv1>
                                </SlickSlide>
                            </SlickTrack>
                        </SlickList>
                    </SlickSlider>
                </WrapTop>
                <WrapBottom>
                    <WrapSlides>
                        <TodayNewsSlickTrack>
                            <TodayNewsSlickSlide>
                                <ItemCardNewBoxNews theme={theme}>
                                    <BoxTop>
                                        <BadgeBox>
                                            <IconBox src="https://t1.kakaocdn.net/kakaocorp/kakaocorp/admin/category/1ee6415a019300001.png?type=thumb&opt=C72x72.fwebp"/>
                                            <CateBox theme={theme}>보도자료</CateBox>
                                            <DateBox theme={theme}>
                                                2025.07.31
                                            </DateBox>
                                        </BadgeBox>
                                    </BoxTop>
                                    <TitleBox>
                                        <TitleBoxLink theme={theme}>카카오프렌즈, 여름 한정 테마 '냥냥특집' 테마 굿즈 출시</TitleBoxLink>
                                    </TitleBox>
                                    <TodayNewsBtnShareIcoComm>
                                    <svg data-v-19bdf39b="" data-v-76d2af19="" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" class="ico_share"><g data-v-19bdf39b="" fill="none" fill-rule="evenodd"><path data-v-19bdf39b="" d="M0 0H24V24H0z" transform="translate(-350 -222) translate(24 192) translate(326 30)"></path> <g data-v-19bdf39b="" transform="translate(-350 -222) translate(24 192) translate(326 30) translate(10 2)" class="fill" fill={theme === "light" ? "#000" : "#adadad"}><circle data-v-19bdf39b="" cx="2" cy="2" r="2"></circle> <circle data-v-19bdf39b="" cx="2" cy="10" r="2"></circle> <circle data-v-19bdf39b="" cx="2" cy="18" r="2"></circle></g></g></svg>
                                    </TodayNewsBtnShareIcoComm>
                                </ItemCardNewBoxNews>
                            </TodayNewsSlickSlide>
                            <TodayNewsSlickSlide>
                                <ItemCardNewBoxNews theme={theme}>
                                    <BoxTop>
                                        <BadgeBox>
                                            <IconBox src="https://t1.kakaocdn.net/kakaocorp/kakaocorp/admin/category/1ee6415a019300001.png?type=thumb&opt=C72x72.fwebp"/>
                                            <CateBox theme={theme}>보도자료</CateBox>
                                            <DateBox theme={theme}>
                                                2025.07.31
                                            </DateBox>
                                        </BadgeBox>
                                    </BoxTop>
                                    <TitleBox>
                                        <TitleBoxLink theme={theme}>카카오임팩트, ‘돕는 AI 컨퍼런스 2025’ 참가자 모집</TitleBoxLink>
                                    </TitleBox>
                                    <TodayNewsBtnShareIcoComm>
                                    <svg data-v-19bdf39b="" data-v-76d2af19="" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" class="ico_share"><g data-v-19bdf39b="" fill="none" fill-rule="evenodd"><path data-v-19bdf39b="" d="M0 0H24V24H0z" transform="translate(-350 -222) translate(24 192) translate(326 30)"></path> <g data-v-19bdf39b="" transform="translate(-350 -222) translate(24 192) translate(326 30) translate(10 2)" class="fill" fill={theme === "light" ? "#000" : "#adadad"}><circle data-v-19bdf39b="" cx="2" cy="2" r="2"></circle> <circle data-v-19bdf39b="" cx="2" cy="10" r="2"></circle> <circle data-v-19bdf39b="" cx="2" cy="18" r="2"></circle></g></g></svg>
                                    </TodayNewsBtnShareIcoComm>
                                </ItemCardNewBoxNews>
                            </TodayNewsSlickSlide>
                        </TodayNewsSlickTrack>
                    </WrapSlides>
                    <WrapLinks>
                        <LinkNewsDiv theme={theme}>
                            <LinkNews>
                                <TitleLink theme={theme}>보도자료</TitleLink>
                                <svg data-v-be739f74="" data-v-85d56d7e="" width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" class="btn_arr"><circle data-v-be739f74="" cx="12" cy="12" r="12" fill={theme === "light" ? "#000" : "#fff"}></circle> <path data-v-be739f74="" d="M13.9704 8.57847L13.2078 9.34107L15.7207 11.8539L7.53764 11.8543L7.53765 12.9296L15.7207 12.9292L13.2079 15.442L13.9705 16.2046L17.7836 12.3916L13.9704 8.57847Z" fill={theme === "light" ? "#fff" : "#000"}></path></svg>
                            </LinkNews>
                        </LinkNewsDiv>
                        <LinkNewsDiv theme={theme}>
                            <LinkNews>
                                <TitleLink theme={theme}>미디어자료</TitleLink>
                                <svg data-v-be739f74="" data-v-85d56d7e="" width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" class="btn_arr"><circle data-v-be739f74="" cx="12" cy="12" r="12" fill={theme === "light" ? "#000" : "#fff"}></circle> <path data-v-be739f74="" d="M13.9704 8.57847L13.2078 9.34107L15.7207 11.8539L7.53764 11.8543L7.53765 12.9296L15.7207 12.9292L13.2079 15.442L13.9705 16.2046L17.7836 12.3916L13.9704 8.57847Z" fill={theme === "light" ? "#fff" : "#000"}></path></svg>
                            </LinkNews>
                        </LinkNewsDiv>
                    </WrapLinks>
                </WrapBottom>
            </InnerMainInnerNews>
        </ContMainAreaNewsContainer>
    )
}

export default ContMainAreaNews;