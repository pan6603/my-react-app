import Header from "../../components/Header";
import Footer from "../../components/Footer";
import React, { useState } from 'react'; 
import { 
    DocMain,
    InnerMain,
    MainContent, 
    ContentArticle,
    TitMain,
    EmphTit,
    TxtTit,
    SectionService,
    WrapTabs,
    ListTab,
    LinkTabDiv,
    LinkTab,
    ListCardNew,
    ListCardNewDiv,
    ItemNormalCard,
    InnerCard,
    InfoCate,
    IcoCate,
    TxtCate,
    BtnShare,
    LinkItem,
    TitCard,
    WrapThumb,
    WrapDownload,
    BtnDownload,
    InfoCard,
    TxtKeyword,
    ThumbImg
} from "../../styles/pages/service/service.styles";
import LinkTop from "../../components/linktop/LinkTop";


function Service() {
    const [tabMenu, setTabMenu] = useState("entire");

    const CategoryTabs = (menu) => {
        setTabMenu(menu);     
    }

    return (
        <>
            <Header />
            <DocMain>
                <InnerMain>
                    <MainContent>
                        <ContentArticle>
                            <TitMain>
                                <EmphTit>서비스</EmphTit>
                                <TxtTit>더 나은 세상을 만드는 카카오</TxtTit>
                            </TitMain>
                            <SectionService>
                                <WrapTabs>
                                    <ListTab>
                                        <LinkTabDiv>
                                            <LinkTab 
                                                onClick={() => CategoryTabs("entire")}
                                                isActive={tabMenu === "entire"} 
                                                >
                                                전체
                                                </LinkTab>
                                        </LinkTabDiv>
                                        <LinkTabDiv>
                                            <LinkTab
                                                onClick={() => CategoryTabs("communication")}
                                                isActive={tabMenu === "communication"} 
                                            >
                                            커뮤니케이션
                                            </LinkTab>
                                        </LinkTabDiv>
                                        <LinkTabDiv>
                                            <LinkTab
                                                onClick={() => CategoryTabs("life")}
                                                isActive={tabMenu === "life"}
                                            >
                                            일상 편의 
                                            </LinkTab>
                                        </LinkTabDiv>
                                        <LinkTabDiv>
                                            <LinkTab 
                                                onClick={() => CategoryTabs("business")}
                                                isActive={tabMenu === "business"}
                                            >
                                            비즈니스
                                            </LinkTab>
                                        </LinkTabDiv>
                                        <LinkTabDiv> 
                                            <LinkTab 
                                                onClick={() => CategoryTabs("shopping")}
                                                isActive={tabMenu === "shopping"}
                                            >
                                            쇼핑
                                            </LinkTab>
                                        </LinkTabDiv>
                                        <LinkTabDiv>
                                            <LinkTab 
                                                onClick={() => CategoryTabs("entertainment")}
                                                isActive={tabMenu === "entertainment"}
                                            >
                                            엔터테인먼트
                                            </LinkTab>
                                        </LinkTabDiv>
                                        <LinkTabDiv>
                                            <LinkTab
                                                onClick={() => CategoryTabs("social_impact")}
                                                isActive={tabMenu === "social_impact"}
                                            >
                                            소셜임팩트
                                            </LinkTab>
                                        </LinkTabDiv>
                                    </ListTab>
                                </WrapTabs>

                                {/* 카테고리 탭 > 커뮤니케이션 */}
                                { tabMenu === "communication" && (
                                    <ListCardNew>
                                        <ListCardNewDiv>
                                            <ItemNormalCard>
                                                <InnerCard>
                                                    <InfoCate>
                                                        <IcoCate src="https://t1.kakaocdn.net/kakaocorp/kakaocorp/admin/65659472017800001.png?type=thumb&opt=C72x72.fwebp"/>
                                                        <TxtCate>커뮤니케이션</TxtCate>
                                                    </InfoCate>
                                                    <LinkItem>
                                                        <TitCard>
                                                        쓰는이에 집중. 쓰기좋게 맞춤. <br />
                                                        카카오톡
                                                        </TitCard>
                                                        <WrapThumb>
                                                            <ThumbImg src="https://t1.kakaocdn.net/thumb/C630x354.fwebp.q100/?fname=https%3A%2F%2Ft1.kakaocdn.net%2Fkakaocorp%2Fkakaocorp%2Fadmin%2Fservice%2F6ffc0b76019900001.jpg" />
                                                        </WrapThumb>
                                                    </LinkItem>
                                                    <WrapDownload>
                                                        <BtnDownload>
                                                            카카오톡 다운로드
                                                        </BtnDownload>
                                                    </WrapDownload>
                                                </InnerCard>
                                                <BtnShare viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                                                <g data-v-19bdf39b="" fill="none" fill-rule="evenodd"><path data-v-19bdf39b="" d="M0 0H24V24H0z" transform="translate(-350 -222) translate(24 192) translate(326 30)"></path> <g data-v-19bdf39b="" transform="translate(-350 -222) translate(24 192) translate(326 30) translate(10 2)" class="fill" fill="#000"><circle data-v-19bdf39b="" cx="2" cy="2" r="2"></circle> <circle data-v-19bdf39b="" cx="2" cy="10" r="2"></circle><circle data-v-19bdf39b="" cx="2" cy="18" r="2"></circle></g></g>
                                                </BtnShare>
                                            </ItemNormalCard>
                                        </ListCardNewDiv>
                                        <ListCardNewDiv>
                                            <ItemNormalCard>
                                                <InnerCard>
                                                    <InfoCate>
                                                        <IcoCate src="https://t1.kakaocdn.net/kakaocorp/kakaocorp/admin/65659472017800001.png?type=thumb&opt=C72x72.fwebp"/>
                                                        <TxtCate>커뮤니케이션</TxtCate>
                                                    </InfoCate>
                                                    <LinkItem>
                                                        <TitCard>
                                                            사라질 걱정 없이 <br />
                                                            언제나 쓰던 톡 그대로, 톡클라우드
                                                        </TitCard>
                                                        <WrapThumb>
                                                            <ThumbImg src="https://t1.kakaocdn.net/thumb/C630x354.fwebp.q100/?fname=https%3A%2F%2Ft1.kakaocdn.net%2Fkakaocorp%2Fkakaocorp%2Fadmin%2Fservice%2F87f00081019800001.png" />
                                                        </WrapThumb>
                                                    </LinkItem>
                                                    <InfoCard>
                                                        <TxtKeyword>#백업</TxtKeyword>
                                                        <TxtKeyword>#저장공간</TxtKeyword>
                                                        <TxtKeyword>#클라우드</TxtKeyword>
                                                        <TxtKeyword>#톡데이터</TxtKeyword>
                                                    </InfoCard>
                                                </InnerCard>
                                                <BtnShare viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                                                <g data-v-19bdf39b="" fill="none" fill-rule="evenodd"><path data-v-19bdf39b="" d="M0 0H24V24H0z" transform="translate(-350 -222) translate(24 192) translate(326 30)"></path> <g data-v-19bdf39b="" transform="translate(-350 -222) translate(24 192) translate(326 30) translate(10 2)" class="fill" fill="#000"><circle data-v-19bdf39b="" cx="2" cy="2" r="2"></circle> <circle data-v-19bdf39b="" cx="2" cy="10" r="2"></circle><circle data-v-19bdf39b="" cx="2" cy="18" r="2"></circle></g></g>
                                                </BtnShare>
                                            </ItemNormalCard>
                                        </ListCardNewDiv>
                                        <ListCardNewDiv>
                                            <ItemNormalCard>
                                                <InnerCard>
                                                    <InfoCate>
                                                        <IcoCate src="https://t1.kakaocdn.net/kakaocorp/kakaocorp/admin/65659472017800001.png?type=thumb&opt=C72x72.fwebp"/>
                                                        <TxtCate>커뮤니케이션</TxtCate>
                                                    </InfoCate>
                                                    <LinkItem>
                                                        <TitCard>
                                                            세상의 모든 관심, <br />
                                                            카카오톡 오픈채팅
                                                        </TitCard>
                                                        <WrapThumb>
                                                            <ThumbImg src="https://t1.kakaocdn.net/thumb/C630x354.fwebp.q100/?fname=https%3A%2F%2Ft1.kakaocdn.net%2Fkakaocorp%2Fkakaocorp%2Fadmin%2Fservice%2Fe194e31e018800001.png" />
                                                        </WrapThumb>
                                                    </LinkItem>
                                                    <InfoCard>
                                                        <TxtKeyword>#관심사</TxtKeyword>
                                                        <TxtKeyword>#오픈채팅</TxtKeyword>
                                                        <TxtKeyword>#오픈채팅Lite</TxtKeyword>
                                                        <TxtKeyword>#오픈채팅탭</TxtKeyword>
                                                        <TxtKeyword>#카카오톡</TxtKeyword>
                                                    </InfoCard>
                                                </InnerCard>
                                                <BtnShare viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                                                <g data-v-19bdf39b="" fill="none" fill-rule="evenodd"><path data-v-19bdf39b="" d="M0 0H24V24H0z" transform="translate(-350 -222) translate(24 192) translate(326 30)"></path> <g data-v-19bdf39b="" transform="translate(-350 -222) translate(24 192) translate(326 30) translate(10 2)" class="fill" fill="#000"><circle data-v-19bdf39b="" cx="2" cy="2" r="2"></circle> <circle data-v-19bdf39b="" cx="2" cy="10" r="2"></circle><circle data-v-19bdf39b="" cx="2" cy="18" r="2"></circle></g></g>
                                                </BtnShare>
                                            </ItemNormalCard>
                                        </ListCardNewDiv>
                                        <ListCardNewDiv>
                                            <ItemNormalCard>
                                                <InnerCard>
                                                    <InfoCate>
                                                        <IcoCate src="https://t1.kakaocdn.net/kakaocorp/kakaocorp/admin/65659472017800001.png?type=thumb&opt=C72x72.fwebp"/>
                                                        <TxtCate>커뮤니케이션</TxtCate>
                                                    </InfoCate>
                                                    <LinkItem>
                                                        <TitCard>
                                                            모두의 카톡을 더 가깝고 안전하게, <br /> 카톡설명서
                                                        </TitCard>
                                                        <WrapThumb>
                                                            <ThumbImg src="https://t1.kakaocdn.net/thumb/C630x354.fwebp.q100/?fname=https%3A%2F%2Ft1.kakaocdn.net%2Fkakaocorp%2Fkakaocorp%2Fadmin%2Fservice%2F88b8f3c9019500001.png" />
                                                        </WrapThumb>
                                                    </LinkItem>
                                                    <InfoCard>
                                                        <TxtKeyword>#라이프</TxtKeyword>
                                                        <TxtKeyword>#카카오톡</TxtKeyword>
                                                        <TxtKeyword>#커뮤니케이션</TxtKeyword>
                                                    </InfoCard>
                                                </InnerCard>
                                                <BtnShare viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                                                <g data-v-19bdf39b="" fill="none" fill-rule="evenodd"><path data-v-19bdf39b="" d="M0 0H24V24H0z" transform="translate(-350 -222) translate(24 192) translate(326 30)"></path> <g data-v-19bdf39b="" transform="translate(-350 -222) translate(24 192) translate(326 30) translate(10 2)" class="fill" fill="#000"><circle data-v-19bdf39b="" cx="2" cy="2" r="2"></circle> <circle data-v-19bdf39b="" cx="2" cy="10" r="2"></circle><circle data-v-19bdf39b="" cx="2" cy="18" r="2"></circle></g></g>
                                                </BtnShare>
                                            </ItemNormalCard>
                                        </ListCardNewDiv>
                                        <ListCardNewDiv>
                                            <ItemNormalCard>
                                                <InnerCard>
                                                    <InfoCate>
                                                        <IcoCate src="https://t1.kakaocdn.net/kakaocorp/kakaocorp/admin/65659472017800001.png?type=thumb&opt=C72x72.fwebp"/>
                                                        <TxtCate>커뮤니케이션</TxtCate>
                                                    </InfoCate>
                                                    <LinkItem>
                                                        <TitCard>
                                                            말로하는 오픈채팅 <br /> 보이스룸
                                                        </TitCard>
                                                        <WrapThumb>
                                                            <ThumbImg src="https://t1.kakaocdn.net/thumb/C630x354.fwebp.q100/?fname=https%3A%2F%2Ft1.kakaocdn.net%2Fkakaocorp%2Fkakaocorp%2Fadmin%2Fservice%2F1a6cee7d018300001.png" />
                                                        </WrapThumb>
                                                    </LinkItem>
                                                    <InfoCard>
                                                        <TxtKeyword>#보이스룸</TxtKeyword>
                                                        <TxtKeyword>#오픈채팅</TxtKeyword>
                                                    </InfoCard>
                                                </InnerCard>
                                                <BtnShare viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                                                <g data-v-19bdf39b="" fill="none" fill-rule="evenodd"><path data-v-19bdf39b="" d="M0 0H24V24H0z" transform="translate(-350 -222) translate(24 192) translate(326 30)"></path> <g data-v-19bdf39b="" transform="translate(-350 -222) translate(24 192) translate(326 30) translate(10 2)" class="fill" fill="#000"><circle data-v-19bdf39b="" cx="2" cy="2" r="2"></circle> <circle data-v-19bdf39b="" cx="2" cy="10" r="2"></circle><circle data-v-19bdf39b="" cx="2" cy="18" r="2"></circle></g></g>
                                                </BtnShare>
                                            </ItemNormalCard>
                                        </ListCardNewDiv>
                                        <ListCardNewDiv>
                                            <ItemNormalCard>
                                                <InnerCard>
                                                    <InfoCate>
                                                        <IcoCate src="https://t1.kakaocdn.net/kakaocorp/kakaocorp/admin/65659472017800001.png?type=thumb&opt=C72x72.fwebp"/>
                                                        <TxtCate>커뮤니케이션</TxtCate>
                                                    </InfoCate>
                                                    <LinkItem>
                                                        <TitCard>
                                                            톡으로 하는 똑소리 나는 일정관리, <br /> 
                                                            톡캘린더
                                                        </TitCard>
                                                        <WrapThumb>
                                                            <ThumbImg src="https://t1.kakaocdn.net/thumb/C630x354.fwebp.q100/?fname=https%3A%2F%2Ft1.kakaocdn.net%2Fkakaocorp%2Fkakaocorp%2Fadmin%2Fservice%2Fdf891f12017d00001.png" />
                                                        </WrapThumb>
                                                    </LinkItem>
                                                    <InfoCard>
                                                        <TxtKeyword>#일정관리</TxtKeyword>
                                                        <TxtKeyword>#친구초대</TxtKeyword>
                                                        <TxtKeyword>#카톡알림</TxtKeyword>
                                                        <TxtKeyword>#캘린더</TxtKeyword>
                                                        <TxtKeyword>#톡캘린더</TxtKeyword>
                                                    </InfoCard>
                                                </InnerCard>
                                                <BtnShare viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                                                <g data-v-19bdf39b="" fill="none" fill-rule="evenodd"><path data-v-19bdf39b="" d="M0 0H24V24H0z" transform="translate(-350 -222) translate(24 192) translate(326 30)"></path> <g data-v-19bdf39b="" transform="translate(-350 -222) translate(24 192) translate(326 30) translate(10 2)" class="fill" fill="#000"><circle data-v-19bdf39b="" cx="2" cy="2" r="2"></circle> <circle data-v-19bdf39b="" cx="2" cy="10" r="2"></circle><circle data-v-19bdf39b="" cx="2" cy="18" r="2"></circle></g></g>
                                                </BtnShare>
                                            </ItemNormalCard>
                                        </ListCardNewDiv>
                                        <ListCardNewDiv>
                                            <ItemNormalCard>
                                                <InnerCard>
                                                    <InfoCate>
                                                        <IcoCate src="https://t1.kakaocdn.net/kakaocorp/kakaocorp/admin/65659472017800001.png?type=thumb&opt=C72x72.fwebp"/>
                                                        <TxtCate>커뮤니케이션</TxtCate>
                                                    </InfoCate>
                                                    <LinkItem>
                                                        <TitCard>
                                                            우리들의 새로운 언어,  <br />카카오 이모티콘!
                                                        </TitCard>
                                                        <WrapThumb>
                                                            <ThumbImg src="https://t1.kakaocdn.net/thumb/C630x354.fwebp.q100/?fname=https%3A%2F%2Ft1.kakaocdn.net%2Fkakaocorp%2Fkakaocorp%2Fadmin%2Fservice%2F79c03804017900001.jpg" />
                                                        </WrapThumb>
                                                    </LinkItem>
                                                    <InfoCard>
                                                        <TxtKeyword>#이모티콘</TxtKeyword>
                                                        <TxtKeyword>#이모티콘플러스</TxtKeyword>
                                                        <TxtKeyword>#카카오이모티콘</TxtKeyword>
                                                        <TxtKeyword>#카카오톡</TxtKeyword>
                                                    </InfoCard>
                                                </InnerCard>
                                                <BtnShare viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                                                <g data-v-19bdf39b="" fill="none" fill-rule="evenodd"><path data-v-19bdf39b="" d="M0 0H24V24H0z" transform="translate(-350 -222) translate(24 192) translate(326 30)"></path> <g data-v-19bdf39b="" transform="translate(-350 -222) translate(24 192) translate(326 30) translate(10 2)" class="fill" fill="#000"><circle data-v-19bdf39b="" cx="2" cy="2" r="2"></circle> <circle data-v-19bdf39b="" cx="2" cy="10" r="2"></circle><circle data-v-19bdf39b="" cx="2" cy="18" r="2"></circle></g></g>
                                                </BtnShare>
                                            </ItemNormalCard>
                                        </ListCardNewDiv>
                                        <ListCardNewDiv>
                                            <ItemNormalCard>
                                                <InnerCard>
                                                    <InfoCate>
                                                        <IcoCate src="https://t1.kakaocdn.net/kakaocorp/kakaocorp/admin/65659472017800001.png?type=thumb&opt=C72x72.fwebp"/>
                                                        <TxtCate>커뮤니케이션</TxtCate>
                                                    </InfoCate>
                                                    <LinkItem>
                                                        <TitCard>
                                                            좀 아는 블로거들의 유용한 이야기, <br />티스토리
                                                        </TitCard>
                                                        <WrapThumb>
                                                            <ThumbImg src="https://t1.kakaocdn.net/thumb/C630x354.fwebp.q100/?fname=https%3A%2F%2Ft1.kakaocdn.net%2Fkakaocorp%2Fkakaocorp%2Fadmin%2Fservice%2F2ab955ef018700001.png" />
                                                        </WrapThumb>
                                                    </LinkItem>
                                                    <InfoCard>
                                                        <TxtKeyword>#블로그</TxtKeyword>
                                                        <TxtKeyword>#수익</TxtKeyword>
                                                        <TxtKeyword>#커뮤니케이션</TxtKeyword>
                                                        <TxtKeyword>#콘텐츠</TxtKeyword>
                                                        <TxtKeyword>#티스토리</TxtKeyword>
                                                    </InfoCard>
                                                </InnerCard>
                                                <BtnShare viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                                                <g data-v-19bdf39b="" fill="none" fill-rule="evenodd"><path data-v-19bdf39b="" d="M0 0H24V24H0z" transform="translate(-350 -222) translate(24 192) translate(326 30)"></path> <g data-v-19bdf39b="" transform="translate(-350 -222) translate(24 192) translate(326 30) translate(10 2)" class="fill" fill="#000"><circle data-v-19bdf39b="" cx="2" cy="2" r="2"></circle> <circle data-v-19bdf39b="" cx="2" cy="10" r="2"></circle><circle data-v-19bdf39b="" cx="2" cy="18" r="2"></circle></g></g>
                                                </BtnShare>
                                            </ItemNormalCard>
                                        </ListCardNewDiv>
                                        <ListCardNewDiv>
                                            <ItemNormalCard>
                                                <InnerCard>
                                                    <InfoCate>
                                                        <IcoCate src="https://t1.kakaocdn.net/kakaocorp/kakaocorp/admin/65659472017800001.png?type=thumb&opt=C72x72.fwebp"/>
                                                        <TxtCate>커뮤니케이션</TxtCate>
                                                    </InfoCate>
                                                    <LinkItem>
                                                        <TitCard>
                                                            작품이 되는 이야기, 브런치스토리
                                                        </TitCard>
                                                        <WrapThumb>
                                                            <ThumbImg src="https://t1.kakaocdn.net/thumb/C630x354.fwebp.q100/?fname=https%3A%2F%2Ft1.kakaocdn.net%2Fkakaocorp%2Fkakaocorp%2Fadmin%2Fservice%2F2abf5dd5018700001.png" />
                                                        </WrapThumb>
                                                    </LinkItem>
                                                    <InfoCard>
                                                        <TxtKeyword>#글쓰기</TxtKeyword>
                                                        <TxtKeyword>#브런치북</TxtKeyword>
                                                        <TxtKeyword>#브런치스토리</TxtKeyword>
                                                    </InfoCard>
                                                </InnerCard>
                                                <BtnShare viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                                                <g data-v-19bdf39b="" fill="none" fill-rule="evenodd"><path data-v-19bdf39b="" d="M0 0H24V24H0z" transform="translate(-350 -222) translate(24 192) translate(326 30)"></path> <g data-v-19bdf39b="" transform="translate(-350 -222) translate(24 192) translate(326 30) translate(10 2)" class="fill" fill="#000"><circle data-v-19bdf39b="" cx="2" cy="2" r="2"></circle> <circle data-v-19bdf39b="" cx="2" cy="10" r="2"></circle><circle data-v-19bdf39b="" cx="2" cy="18" r="2"></circle></g></g>
                                                </BtnShare>
                                            </ItemNormalCard>
                                        </ListCardNewDiv>
                                        <ListCardNewDiv>
                                            <ItemNormalCard>
                                                <InnerCard>
                                                    <InfoCate>
                                                        <IcoCate src="https://t1.kakaocdn.net/kakaocorp/kakaocorp/admin/65659472017800001.png?type=thumb&opt=C72x72.fwebp"/>
                                                        <TxtCate>커뮤니케이션</TxtCate>
                                                    </InfoCate>
                                                    <LinkItem>
                                                        <TitCard>
                                                            그대로의 일상 이야기, <br /> 카카오스토리
                                                        </TitCard>
                                                        <WrapThumb>
                                                            <ThumbImg src="https://t1.kakaocdn.net/thumb/C630x354.fwebp.q100/?fname=https%3A%2F%2Ft1.kakaocdn.net%2Fkakaocorp%2Fkakaocorp%2Fadmin%2Fservice%2F2abc3148018700001.png" />
                                                        </WrapThumb>
                                                    </LinkItem>
                                                    <InfoCard>
                                                        <TxtKeyword>#sns</TxtKeyword>
                                                        <TxtKeyword>#사진</TxtKeyword>
                                                        <TxtKeyword>#스토리채널</TxtKeyword>
                                                        <TxtKeyword>#일상</TxtKeyword>
                                                        <TxtKeyword>#카카오스토리</TxtKeyword>
                                                    </InfoCard>
                                                </InnerCard>
                                                <BtnShare viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                                                <g data-v-19bdf39b="" fill="none" fill-rule="evenodd"><path data-v-19bdf39b="" d="M0 0H24V24H0z" transform="translate(-350 -222) translate(24 192) translate(326 30)"></path> <g data-v-19bdf39b="" transform="translate(-350 -222) translate(24 192) translate(326 30) translate(10 2)" class="fill" fill="#000"><circle data-v-19bdf39b="" cx="2" cy="2" r="2"></circle> <circle data-v-19bdf39b="" cx="2" cy="10" r="2"></circle><circle data-v-19bdf39b="" cx="2" cy="18" r="2"></circle></g></g>
                                                </BtnShare>
                                            </ItemNormalCard>
                                        </ListCardNewDiv>
                                        <ListCardNewDiv>
                                            <ItemNormalCard>
                                                <InnerCard>
                                                    <InfoCate>
                                                        <IcoCate src="https://t1.kakaocdn.net/kakaocorp/kakaocorp/admin/65659472017800001.png?type=thumb&opt=C72x72.fwebp"/>
                                                        <TxtCate>커뮤니케이션</TxtCate>
                                                    </InfoCate>
                                                    <LinkItem>
                                                        <TitCard>
                                                            모든 이야기의 시작, <br />
                                                            Daum 카페
                                                        </TitCard>
                                                        <WrapThumb>
                                                            <ThumbImg src="https://t1.kakaocdn.net/thumb/C630x354.fwebp.q100/?fname=https%3A%2F%2Ft1.kakaocdn.net%2Fkakaocorp%2Fkakaocorp%2Fadmin%2Fservice%2F79890e2b017900001.jpg" />
                                                        </WrapThumb>
                                                    </LinkItem>
                                                    <InfoCard>
                                                        <TxtKeyword>#공식팬카페</TxtKeyword>
                                                        <TxtKeyword>#다음카페</TxtKeyword>
                                                        <TxtKeyword>#실시간인기글</TxtKeyword>
                                                        <TxtKeyword>#커뮤니티</TxtKeyword>
                                                        <TxtKeyword>#콘텐츠</TxtKeyword>
                                                    </InfoCard>
                                                </InnerCard>
                                                <BtnShare viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                                                <g data-v-19bdf39b="" fill="none" fill-rule="evenodd"><path data-v-19bdf39b="" d="M0 0H24V24H0z" transform="translate(-350 -222) translate(24 192) translate(326 30)"></path> <g data-v-19bdf39b="" transform="translate(-350 -222) translate(24 192) translate(326 30) translate(10 2)" class="fill" fill="#000"><circle data-v-19bdf39b="" cx="2" cy="2" r="2"></circle> <circle data-v-19bdf39b="" cx="2" cy="10" r="2"></circle><circle data-v-19bdf39b="" cx="2" cy="18" r="2"></circle></g></g>
                                                </BtnShare>
                                            </ItemNormalCard>
                                        </ListCardNewDiv>
                                        <ListCardNewDiv>
                                            <ItemNormalCard>
                                                <InnerCard>
                                                    <InfoCate>
                                                        <IcoCate src="https://t1.kakaocdn.net/kakaocorp/kakaocorp/admin/65659472017800001.png?type=thumb&opt=C72x72.fwebp"/>
                                                        <TxtCate>커뮤니케이션</TxtCate>
                                                    </InfoCate>
                                                    <LinkItem>
                                                        <TitCard>
                                                            다채로운 콘텐츠와 의견이 만나는 <br /> 특별한 공간, 다음앱
                                                        </TitCard>
                                                        <WrapThumb>
                                                            <ThumbImg src="https://t1.kakaocdn.net/thumb/C630x354.fwebp.q100/?fname=https%3A%2F%2Ft1.kakaocdn.net%2Fkakaocorp%2Fkakaocorp%2Fadmin%2Fservice%2F26673a2b019500001.png" />
                                                        </WrapThumb>
                                                    </LinkItem>
                                                    <InfoCard>
                                                        <TxtKeyword>#검색</TxtKeyword>
                                                        <TxtKeyword>#뉴스</TxtKeyword>
                                                        <TxtKeyword>#다음앱</TxtKeyword>
                                                        <TxtKeyword>#콘텐츠</TxtKeyword>
                                                        <TxtKeyword>#포털</TxtKeyword>
                                                    </InfoCard>
                                                </InnerCard>
                                                <BtnShare viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                                                <g data-v-19bdf39b="" fill="none" fill-rule="evenodd"><path data-v-19bdf39b="" d="M0 0H24V24H0z" transform="translate(-350 -222) translate(24 192) translate(326 30)"></path> <g data-v-19bdf39b="" transform="translate(-350 -222) translate(24 192) translate(326 30) translate(10 2)" class="fill" fill="#000"><circle data-v-19bdf39b="" cx="2" cy="2" r="2"></circle> <circle data-v-19bdf39b="" cx="2" cy="10" r="2"></circle><circle data-v-19bdf39b="" cx="2" cy="18" r="2"></circle></g></g>
                                                </BtnShare>
                                            </ItemNormalCard>
                                        </ListCardNewDiv>
                                        <ListCardNewDiv>
                                            <ItemNormalCard>
                                                <InnerCard>
                                                    <InfoCate>
                                                        <IcoCate src="https://t1.kakaocdn.net/kakaocorp/kakaocorp/admin/65659472017800001.png?type=thumb&opt=C72x72.fwebp"/>
                                                        <TxtCate>커뮤니케이션</TxtCate>
                                                    </InfoCate>
                                                    <LinkItem>
                                                        <TitCard>
                                                            일상을 더 쉽고 편리하게, 카카오톡 <br /> 지갑
                                                        </TitCard>
                                                        <WrapThumb>
                                                            <ThumbImg src="https://t1.kakaocdn.net/thumb/C630x354.fwebp.q100/?fname=https%3A%2F%2Ft1.kakaocdn.net%2Fkakaocorp%2Fkakaocorp%2Fadmin%2Fservice%2Fb534a86a018a00001.png" />
                                                        </WrapThumb>
                                                    </LinkItem>
                                                    <InfoCard>
                                                        <TxtKeyword>#금융</TxtKeyword>
                                                        <TxtKeyword>#전자문서</TxtKeyword>
                                                        <TxtKeyword>#카카오인증서</TxtKeyword>
                                                        <TxtKeyword>#톡지갑</TxtKeyword>
                                                        <TxtKeyword>#톡학생증</TxtKeyword>
                                                    </InfoCard>
                                                </InnerCard>
                                                <BtnShare viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                                                <g data-v-19bdf39b="" fill="none" fill-rule="evenodd"><path data-v-19bdf39b="" d="M0 0H24V24H0z" transform="translate(-350 -222) translate(24 192) translate(326 30)"></path> <g data-v-19bdf39b="" transform="translate(-350 -222) translate(24 192) translate(326 30) translate(10 2)" class="fill" fill="#000"><circle data-v-19bdf39b="" cx="2" cy="2" r="2"></circle> <circle data-v-19bdf39b="" cx="2" cy="10" r="2"></circle><circle data-v-19bdf39b="" cx="2" cy="18" r="2"></circle></g></g>
                                                </BtnShare>
                                            </ItemNormalCard>
                                        </ListCardNewDiv>
                                        <ListCardNewDiv>
                                            <ItemNormalCard>
                                                <InnerCard>
                                                    <InfoCate>
                                                        <IcoCate src="https://t1.kakaocdn.net/kakaocorp/kakaocorp/admin/65659472017800001.png?type=thumb&opt=C72x72.fwebp"/>
                                                        <TxtCate>커뮤니케이션</TxtCate>
                                                    </InfoCate>
                                                    <LinkItem>
                                                        <TitCard>
                                                            카카오톡의 편리함을 더한 메일, <br /> 카카오메일
                                                        </TitCard>
                                                        <WrapThumb>
                                                            <ThumbImg src="https://t1.kakaocdn.net/thumb/C630x354.fwebp.q100/?fname=https%3A%2F%2Ft1.kakaocdn.net%2Fkakaocorp%2Fkakaocorp%2Fadmin%2Fservice%2F79977762017900001.jpg" />
                                                        </WrapThumb>
                                                    </LinkItem>
                                                    <InfoCard>
                                                        <TxtKeyword>#카카오메일</TxtKeyword>
                                                        <TxtKeyword>#커뮤니케이션</TxtKeyword>
                                                        <TxtKeyword>#톡메일</TxtKeyword>
                                                    </InfoCard>
                                                </InnerCard>
                                                <BtnShare viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                                                <g data-v-19bdf39b="" fill="none" fill-rule="evenodd"><path data-v-19bdf39b="" d="M0 0H24V24H0z" transform="translate(-350 -222) translate(24 192) translate(326 30)"></path> <g data-v-19bdf39b="" transform="translate(-350 -222) translate(24 192) translate(326 30) translate(10 2)" class="fill" fill="#000"><circle data-v-19bdf39b="" cx="2" cy="2" r="2"></circle> <circle data-v-19bdf39b="" cx="2" cy="10" r="2"></circle><circle data-v-19bdf39b="" cx="2" cy="18" r="2"></circle></g></g>
                                                </BtnShare>
                                            </ItemNormalCard>
                                        </ListCardNewDiv>
                                    </ListCardNew>
                                )}

                                {/* 카데고리 탭 > 일상 편의 */}
                                { tabMenu === "life" && (
                                    <ListCardNew>
                                        <ListCardNewDiv>
                                            <ItemNormalCard>
                                                <InnerCard>
                                                    <InfoCate>

                                                    </InfoCate>
                                                </InnerCard>
                                            </ItemNormalCard>
                                        </ListCardNewDiv>
                                        <ListCardNewDiv>
                                            <ItemNormalCard>
                                                <InnerCard>
                                                    <InfoCate></InfoCate>
                                                </InnerCard>
                                            </ItemNormalCard>
                                        </ListCardNewDiv>
                                        <ListCardNewDiv>
                                            <ItemNormalCard>
                                                <InnerCard>
                                                    <InfoCate></InfoCate>
                                                </InnerCard>
                                            </ItemNormalCard>
                                        </ListCardNewDiv>
                                        <ListCardNewDiv>
                                            <ItemNormalCard>
                                                <InnerCard>
                                                    <InfoCate></InfoCate>
                                                </InnerCard>
                                            </ItemNormalCard>
                                        </ListCardNewDiv>
                                        <ListCardNewDiv>
                                            <ItemNormalCard>
                                                <InnerCard>
                                                    <InfoCate></InfoCate>
                                                </InnerCard>
                                            </ItemNormalCard>
                                        </ListCardNewDiv>
                                        <ListCardNewDiv>
                                            <ItemNormalCard>
                                                <InnerCard>
                                                    <InfoCate></InfoCate>
                                                </InnerCard>
                                            </ItemNormalCard>
                                        </ListCardNewDiv>
                                    </ListCardNew>
                                )}
                                
                            </SectionService>
                            <LinkTop />
                        </ContentArticle>
                    </MainContent>
                </InnerMain>
            </DocMain>
            <Footer />
        </>
    )
}

export default Service;