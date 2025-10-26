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
                                                        <IcoCate src="https://t1.kakaocdn.net/kakaocorp/kakaocorp/admin/65659472017800001.png?type=thumb&opt=C72x72.fwebp"/>
                                                        <TxtCate>일상 편의</TxtCate>
                                                    </InfoCate>
                                                    <LinkItem>
                                                        <TitCard>
                                                            같지만 다른 은행, <br />
                                                            카카오뱅크
                                                        </TitCard>
                                                        <WrapThumb>
                                                            <ThumbImg src="https://t1.kakaocdn.net/thumb/C630x354.fwebp.q100/?fname=https%3A%2F%2Ft1.kakaocdn.net%2Fkakaocorp%2Fkakaocorp%2Fadmin%2Fservice%2Fa3ef9f77017900001.jpg" />
                                                        </WrapThumb>
                                                    </LinkItem>
                                                    <InfoCard>
                                                        <TxtKeyword>#같지만다른은행</TxtKeyword>
                                                        <TxtKeyword>#은행</TxtKeyword>
                                                        <TxtKeyword>#인터넷전문은행</TxtKeyword>
                                                        <TxtKeyword>#카카오뱅크</TxtKeyword>
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
                                                        <TxtCate>일상 편의</TxtCate>
                                                    </InfoCate>
                                                    <LinkItem>
                                                        <TitCard>
                                                            좋은 곳을 함께 찾아가는 지도, <br />카카오맵
                                                        </TitCard>
                                                        <WrapThumb>
                                                            <ThumbImg src="https://t1.kakaocdn.net/thumb/C630x354.fwebp.q100/?fname=https%3A%2F%2Ft1.kakaocdn.net%2Fkakaocorp%2Fkakaocorp%2Fadmin%2Fservice%2Fa8bc22bb017900001.jpg" />
                                                        </WrapThumb>
                                                    </LinkItem>
                                                    <InfoCard>
                                                        <TxtKeyword>#모빌리티</TxtKeyword>
                                                        <TxtKeyword>#지도</TxtKeyword>
                                                        <TxtKeyword>#카카오맵</TxtKeyword>
                                                        <TxtKeyword>#카카오버스</TxtKeyword>
                                                        <TxtKeyword>#카카오지하철</TxtKeyword>
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
                                                        <TxtCate>일상 편의</TxtCate>
                                                    </InfoCate>
                                                    <LinkItem>
                                                        <TitCard>
                                                            모든 이동을 위한,  <br />
                                                            카카오 T
                                                        </TitCard>
                                                        <WrapThumb>
                                                            <ThumbImg src="https://t1.kakaocdn.net/thumb/C630x354.fwebp.q100/?fname=https%3A%2F%2Ft1.kakaocdn.net%2Fkakaocorp%2Fkakaocorp%2Fadmin%2Fservice%2Ff34e0634018000001.jpg" />
                                                        </WrapThumb>
                                                    </LinkItem>
                                                    <InfoCard>
                                                        <TxtKeyword>#maas</TxtKeyword>
                                                        <TxtKeyword>#모빌리티</TxtKeyword>
                                                        <TxtKeyword>#이동플랫폼</TxtKeyword>
                                                        <TxtKeyword>#카카오T</TxtKeyword>
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
                                                        <TxtCate>일상 편의</TxtCate>
                                                    </InfoCate>
                                                    <LinkItem>
                                                        <TitCard>
                                                            정확하고 즐거운  <br />
                                                            운전 도우미, 카카오내비
                                                        </TitCard>
                                                        <WrapThumb>
                                                            <ThumbImg src="https://t1.kakaocdn.net/thumb/C630x354.fwebp.q100/?fname=https%3A%2F%2Ft1.kakaocdn.net%2Fkakaocorp%2Fkakaocorp%2Fadmin%2Fservice%2F7a339b98017900001.jpg" />
                                                        </WrapThumb>
                                                    </LinkItem>
                                                    <InfoCard>
                                                        <TxtKeyword>#길안내</TxtKeyword>
                                                        <TxtKeyword>#내비게이션</TxtKeyword>
                                                        <TxtKeyword>#내차관리</TxtKeyword>
                                                        <TxtKeyword>#모빌리티</TxtKeyword>
                                                        <TxtKeyword>#카카오내비</TxtKeyword>
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
                                                        <TxtCate>일상 편의</TxtCate>
                                                    </InfoCate>
                                                    <LinkItem>
                                                        <TitCard>
                                                            말 한마디로 편리해지는 일상, <br />헤이카카오
                                                        </TitCard>
                                                        <WrapThumb>
                                                            <ThumbImg src="https://t1.kakaocdn.net/thumb/C630x354.fwebp.q100/?fname=https%3A%2F%2Ft1.kakaocdn.net%2Fkakaocorp%2Fkakaocorp%2Fadmin%2Fservice%2Fa8bdf743017900001.jpg" />
                                                        </WrapThumb>
                                                    </LinkItem>
                                                    <InfoCard>
                                                        <TxtKeyword>#내비게이션</TxtKeyword>
                                                        <TxtKeyword>#디스플레이</TxtKeyword>
                                                        <TxtKeyword>#모빌리티</TxtKeyword>
                                                        <TxtKeyword>#스마트홈</TxtKeyword>
                                                        <TxtKeyword>#헤이카카오</TxtKeyword>
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
                                                        <TxtCate>일상 편의</TxtCate>
                                                    </InfoCate>
                                                    <LinkItem>
                                                        <TitCard>
                                                            마음놓고 금융하다, <br />
                                                            카카오페이
                                                        </TitCard>
                                                        <WrapThumb>
                                                            <ThumbImg src="https://t1.kakaocdn.net/thumb/C630x354.fwebp.q100/?fname=https%3A%2F%2Ft1.kakaocdn.net%2Fkakaocorp%2Fkakaocorp%2Fadmin%2Fservice%2Fad87abda017900001.jpg" />
                                                        </WrapThumb>
                                                    </LinkItem>
                                                    <InfoCard>
                                                        <TxtKeyword>#결제</TxtKeyword>
                                                        <TxtKeyword>#금융</TxtKeyword>
                                                        <TxtKeyword>#송금</TxtKeyword>
                                                        <TxtKeyword>#카카오페이</TxtKeyword>
                                                        <TxtKeyword>#테크핀</TxtKeyword>
                                                    </InfoCard>
                                                </InnerCard>
                                                <BtnShare viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                                                <g data-v-19bdf39b="" fill="none" fill-rule="evenodd"><path data-v-19bdf39b="" d="M0 0H24V24H0z" transform="translate(-350 -222) translate(24 192) translate(326 30)"></path> <g data-v-19bdf39b="" transform="translate(-350 -222) translate(24 192) translate(326 30) translate(10 2)" class="fill" fill="#000"><circle data-v-19bdf39b="" cx="2" cy="2" r="2"></circle> <circle data-v-19bdf39b="" cx="2" cy="10" r="2"></circle><circle data-v-19bdf39b="" cx="2" cy="18" r="2"></circle></g></g>
                                                </BtnShare>
                                            </ItemNormalCard>
                                        </ListCardNewDiv>
                                    </ListCardNew>
                                )}

                                { tabMenu === "business" && (
                                    <ListCardNew>
                                        <ListCardNewDiv>
                                            <ItemNormalCard>
                                                <InnerCard>
                                                    <InfoCate>
                                                        <IcoCate src="https://t1.kakaocdn.net/kakaocorp/kakaocorp/admin/65659472017800001.png?type=thumb&opt=C72x72.fwebp"/>
                                                        <TxtCate>비즈니스</TxtCate>
                                                    </InfoCate>
                                                    <LinkItem>
                                                        <TitCard>
                                                            요즘 일하는 방식, <br />카카오워크
                                                        </TitCard>
                                                        <WrapThumb>
                                                            <ThumbImg src="https://t1.kakaocdn.net/thumb/C630x354.fwebp.q100/?fname=https%3A%2F%2Ft1.kakaocdn.net%2Fkakaocorp%2Fkakaocorp%2Fadmin%2Fservice%2F79b14009017900001.jpg" />
                                                        </WrapThumb>
                                                    </LinkItem>
                                                    <InfoCard>
                                                        <TxtKeyword>#ai</TxtKeyword>
                                                        <TxtKeyword>#비즈니스</TxtKeyword>
                                                        <TxtKeyword>#언택트</TxtKeyword>
                                                        <TxtKeyword>#업무메신저</TxtKeyword>
                                                        <TxtKeyword>#카카오워크</TxtKeyword>
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
                                                        <TxtCate>비즈니스</TxtCate>
                                                    </InfoCate>
                                                    <LinkItem>
                                                        <TitCard>
                                                            더 편한 모바일 생활의 시작, <br /> 카카오톡 채널
                                                        </TitCard>
                                                        <WrapThumb>
                                                            <ThumbImg src="https://t1.kakaocdn.net/thumb/C630x354.fwebp.q100/?fname=https%3A%2F%2Ft1.kakaocdn.net%2Fkakaocorp%2Fkakaocorp%2Fadmin%2Fservice%2F79b37ff6017900001.jpg" />
                                                        </WrapThumb>
                                                    </LinkItem>
                                                    <InfoCard>
                                                        <TxtKeyword>#비즈니스</TxtKeyword>
                                                        <TxtKeyword>#채널</TxtKeyword>
                                                        <TxtKeyword>#카카오톡채널</TxtKeyword>
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
                                                        <TxtCate>비즈니스</TxtCate>
                                                    </InfoCate>
                                                    <LinkItem>
                                                        <TitCard>
                                                            비즈니스, 톡처럼 쉬워지다. <br /> 카카오비즈니스
                                                        </TitCard>
                                                        <WrapThumb>
                                                            <ThumbImg src="https://t1.kakaocdn.net/thumb/C630x354.fwebp.q100/?fname=https%3A%2F%2Ft1.kakaocdn.net%2Fkakaocorp%2Fkakaocorp%2Fadmin%2Fservice%2F7a392789017900001.jpg" />
                                                        </WrapThumb>
                                                    </LinkItem>
                                                    <InfoCard>
                                                        <TxtKeyword>#비즈도구</TxtKeyword>
                                                        <TxtKeyword>#카카오광고</TxtKeyword>
                                                        <TxtKeyword>#카카오비즈니스</TxtKeyword>
                                                        <TxtKeyword>#카카오톡채널</TxtKeyword>
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
                                                        <TxtCate>비즈니스</TxtCate>
                                                    </InfoCate>
                                                    <LinkItem>
                                                        <TitCard>
                                                            클라우드 AI 컨택센터, <br /> 센터플로우
                                                        </TitCard>
                                                        <WrapThumb>
                                                            <ThumbImg src="https://t1.kakaocdn.net/thumb/C630x354.fwebp.q100/?fname=https%3A%2F%2Ft1.kakaocdn.net%2Fkakaocorp%2Fkakaocorp%2Fadmin%2Fservice%2Fc1b59e8e018e00001.png" />
                                                        </WrapThumb>
                                                    </LinkItem>
                                                    <InfoCard>
                                                        <TxtKeyword>#AICC</TxtKeyword>
                                                        <TxtKeyword>#카카오엔터프라이즈</TxtKeyword>
                                                        <TxtKeyword>#카카오클라우드</TxtKeyword>
                                                        <TxtKeyword>#컨택센터</TxtKeyword>
                                                        <TxtKeyword>#클라우드AI컨택센터</TxtKeyword>
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
                                                        <TxtCate>비즈니스</TxtCate>
                                                    </InfoCate>
                                                    <LinkItem>
                                                        <TitCard>
                                                            다양한 기술, 플랫폼, 서비스를 <br /> 연결하는 <br /> 카카오클라우드
                                                        </TitCard>
                                                        <WrapThumb>
                                                            <ThumbImg src="https://t1.kakaocdn.net/thumb/C630x354.fwebp.q100/?fname=https%3A%2F%2Ft1.kakaocdn.net%2Fkakaocorp%2Fkakaocorp%2Fadmin%2Fservice%2F78d09478017900001.jpeg" />
                                                        </WrapThumb>
                                                    </LinkItem>
                                                    <InfoCard>
                                                        <TxtKeyword>#B2B</TxtKeyword>
                                                        <TxtKeyword>#기업솔루션</TxtKeyword>
                                                        <TxtKeyword>#카카오엔터프라이즈</TxtKeyword>
                                                        <TxtKeyword>#카카오클라우드</TxtKeyword>
                                                        <TxtKeyword>#클라우드</TxtKeyword>
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
                                                        <TxtCate>비즈니스</TxtCate>
                                                    </InfoCate>
                                                    <LinkItem>
                                                        <TitCard>
                                                            AI 기반 비즈니스 플랫폼, <br /> 
                                                            카카오 i 커넥트
                                                        </TitCard>
                                                        <WrapThumb>
                                                            <ThumbImg src="https://t1.kakaocdn.net/thumb/C630x354.fwebp.q100/?fname=https%3A%2F%2Ft1.kakaocdn.net%2Fkakaocorp%2Fkakaocorp%2Fadmin%2Fservice%2Faccbf7de017a00001.png" />
                                                        </WrapThumb>
                                                    </LinkItem>
                                                    <InfoCard>
                                                        <TxtKeyword>#AI솔루션</TxtKeyword>
                                                        <TxtKeyword>#B2B</TxtKeyword>
                                                        <TxtKeyword>#비즈니스</TxtKeyword>
                                                        <TxtKeyword>#인공지능</TxtKeyword>
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
                                                        <TxtCate>비즈니스</TxtCate>
                                                    </InfoCate>
                                                    <LinkItem>
                                                        <TitCard>
                                                            함께 일하는 즐거움, <br /> 
                                                            우리들의 아지트
                                                        </TitCard>
                                                        <WrapThumb>
                                                            <ThumbImg src="https://t1.kakaocdn.net/thumb/C630x354.fwebp.q100/?fname=https%3A%2F%2Ft1.kakaocdn.net%2Fkakaocorp%2Fkakaocorp%2Fadmin%2Fservice%2F7a700b7e017900001.jpg" />
                                                        </WrapThumb>
                                                    </LinkItem>
                                                    <InfoCard>
                                                        <TxtKeyword>#기업문화</TxtKeyword>
                                                        <TxtKeyword>#비즈니스</TxtKeyword>
                                                        <TxtKeyword>#아지트</TxtKeyword>
                                                        <TxtKeyword>#업무플랫폼</TxtKeyword>
                                                        <TxtKeyword>#커뮤니케이션</TxtKeyword>
                                                    </InfoCard>
                                                </InnerCard>
                                                <BtnShare viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                                                <g data-v-19bdf39b="" fill="none" fill-rule="evenodd"><path data-v-19bdf39b="" d="M0 0H24V24H0z" transform="translate(-350 -222) translate(24 192) translate(326 30)"></path> <g data-v-19bdf39b="" transform="translate(-350 -222) translate(24 192) translate(326 30) translate(10 2)" class="fill" fill="#000"><circle data-v-19bdf39b="" cx="2" cy="2" r="2"></circle> <circle data-v-19bdf39b="" cx="2" cy="10" r="2"></circle><circle data-v-19bdf39b="" cx="2" cy="18" r="2"></circle></g></g>
                                                </BtnShare>
                                            </ItemNormalCard>
                                        </ListCardNewDiv>
                                    </ListCardNew>
                                )}

                                { tabMenu === "shopping" && (
                                    <ListCardNew>
                                        <ListCardNewDiv>
                                            <ItemNormalCard>
                                                <InnerCard>
                                                    <InfoCate>
                                                        <IcoCate src="https://t1.kakaocdn.net/kakaocorp/kakaocorp/admin/65659472017800001.png?type=thumb&opt=C72x72.fwebp"/>
                                                        <TxtCate>쇼핑</TxtCate>
                                                    </InfoCate>
                                                    <LinkItem>
                                                        <TitCard>
                                                            마음을 전하는 가장 쉬운 방법, <br /> 카카오톡 선물하기
                                                        </TitCard>
                                                        <WrapThumb>
                                                            <ThumbImg src="https://t1.kakaocdn.net/thumb/C630x354.fwebp.q100/?fname=https%3A%2F%2Ft1.kakaocdn.net%2Fkakaocorp%2Fkakaocorp%2Fadmin%2Fservice%2F798cb262017900001.jpg" />
                                                        </WrapThumb>
                                                    </LinkItem>
                                                    <InfoCard>
                                                        <TxtKeyword>#b2b선물</TxtKeyword>
                                                        <TxtKeyword>#비즈니스선물</TxtKeyword>
                                                        <TxtKeyword>#선물하기</TxtKeyword>
                                                        <TxtKeyword>#카카오톡</TxtKeyword>
                                                        <TxtKeyword>#카카오톡선물하기</TxtKeyword>
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
                                                        <TxtCate>쇼핑</TxtCate>
                                                    </InfoCate>
                                                    <LinkItem>
                                                        <TitCard>
                                                            쇼핑을 톡하다! <br /> 톡딜
                                                        </TitCard>
                                                        <WrapThumb>
                                                            <ThumbImg src="https://t1.kakaocdn.net/thumb/C630x354.fwebp.q100/?fname=https%3A%2F%2Ft1.kakaocdn.net%2Fkakaocorp%2Fkakaocorp%2Fadmin%2Fservice%2Fe32f3cf5019300001.png" />
                                                        </WrapThumb>
                                                    </LinkItem>
                                                    <InfoCard>
                                                        <TxtKeyword>#커머스</TxtKeyword>
                                                        <TxtKeyword>#톡딜</TxtKeyword>
                                                        <TxtKeyword>#톡스토어</TxtKeyword>
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
                                                        <TxtCate>쇼핑</TxtCate>
                                                    </InfoCate>
                                                    <LinkItem>
                                                        <TitCard>
                                                            여러분의 참여로 완성되는 <br />카카오쇼핑라이브
                                                        </TitCard>
                                                        <WrapThumb>
                                                            <ThumbImg src="https://t1.kakaocdn.net/thumb/C630x354.fwebp.q100/?fname=https%3A%2F%2Ft1.kakaocdn.net%2Fkakaocorp%2Fkakaocorp%2Fadmin%2Fservice%2Fddbfa9c0018900001.png" />
                                                        </WrapThumb>
                                                    </LinkItem>
                                                    <InfoCard>
                                                        <TxtKeyword>#라이브커머스</TxtKeyword>
                                                        <TxtKeyword>#카쇼라스튜디오</TxtKeyword>
                                                        <TxtKeyword>#카카오쇼핑라이브</TxtKeyword>
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
                                                        <TxtCate>쇼핑</TxtCate>
                                                    </InfoCate>
                                                    <LinkItem>
                                                        <TitCard>
                                                            나를 표현하는 쇼핑, 지그재그
                                                        </TitCard>
                                                        <WrapThumb>
                                                            <ThumbImg src="https://t1.kakaocdn.net/thumb/C630x354.fwebp.q100/?fname=https%3A%2F%2Ft1.kakaocdn.net%2Fkakaocorp%2Fkakaocorp%2Fadmin%2Fservice%2Ff62cbd72017a00001.jpg" />
                                                        </WrapThumb>
                                                    </LinkItem>
                                                    <InfoCard>
                                                        <TxtKeyword>#개인화추천</TxtKeyword>
                                                        <TxtKeyword>#쇼핑</TxtKeyword>
                                                        <TxtKeyword>#스타일</TxtKeyword>
                                                        <TxtKeyword>#지그재그</TxtKeyword>
                                                        <TxtKeyword>#패션</TxtKeyword>
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
                                                        <TxtCate>쇼핑</TxtCate>
                                                    </InfoCate>
                                                    <LinkItem>
                                                        <TitCard>
                                                            더 나은 내일을 만드는 주문, <br />카카오메이커스
                                                        </TitCard>
                                                        <WrapThumb>
                                                            <ThumbImg src="https://t1.kakaocdn.net/thumb/C630x354.fwebp.q100/?fname=https%3A%2F%2Ft1.kakaocdn.net%2Fkakaocorp%2Fkakaocorp%2Fadmin%2Fservice%2F7c45d580018300001.png" />
                                                        </WrapThumb>
                                                    </LinkItem>
                                                    <InfoCard>
                                                        <TxtKeyword>#공동주문</TxtKeyword>
                                                        <TxtKeyword>#주문제작</TxtKeyword>
                                                        <TxtKeyword>#카카오메이커스</TxtKeyword>
                                                        <TxtKeyword>#커머스</TxtKeyword>
                                                        <TxtKeyword>#큐레이션</TxtKeyword>
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
                                                        <TxtCate>쇼핑</TxtCate>
                                                    </InfoCate>
                                                    <LinkItem>
                                                        <TitCard>
                                                            현명한 쇼핑 생활의 시작, <br />쇼핑하우
                                                        </TitCard>
                                                        <WrapThumb>
                                                            <ThumbImg src="https://t1.kakaocdn.net/thumb/C630x354.fwebp.q100/?fname=https%3A%2F%2Ft1.kakaocdn.net%2Fkakaocorp%2Fkakaocorp%2Fadmin%2Fservice%2F798b5a56017900001.jpg" />
                                                        </WrapThumb>
                                                    </LinkItem>
                                                    <InfoCard>
                                                        <TxtKeyword>#쇼핑</TxtKeyword>
                                                        <TxtKeyword>#쇼핑하우</TxtKeyword>
                                                    </InfoCard>
                                                </InnerCard>
                                                <BtnShare viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                                                <g data-v-19bdf39b="" fill="none" fill-rule="evenodd"><path data-v-19bdf39b="" d="M0 0H24V24H0z" transform="translate(-350 -222) translate(24 192) translate(326 30)"></path> <g data-v-19bdf39b="" transform="translate(-350 -222) translate(24 192) translate(326 30) translate(10 2)" class="fill" fill="#000"><circle data-v-19bdf39b="" cx="2" cy="2" r="2"></circle> <circle data-v-19bdf39b="" cx="2" cy="10" r="2"></circle><circle data-v-19bdf39b="" cx="2" cy="18" r="2"></circle></g></g>
                                                </BtnShare>
                                            </ItemNormalCard>
                                        </ListCardNewDiv>
                                    </ListCardNew>
                                )}

                                { tabMenu === "social_impact" && (
                                    <ListCardNew>
                                        <ListCardNewDiv>
                                            <ItemNormalCard>
                                                <InnerCard>
                                                    <InfoCate>
                                                        <IcoCate src="https://t1.kakaocdn.net/kakaocorp/kakaocorp/admin/65659472017800001.png?type=thumb&opt=C72x72.fwebp"/>
                                                        <TxtCate>소셜임팩트</TxtCate>
                                                    </InfoCate>
                                                    <LinkItem>
                                                        <TitCard>
                                                            함께 만드는 더 좋은 세상, <br />카카오같이가치
                                                        </TitCard>
                                                        <WrapThumb>
                                                            <ThumbImg src="https://t1.kakaocdn.net/thumb/C630x354.fwebp.q100/?fname=https%3A%2F%2Ft1.kakaocdn.net%2Fkakaocorp%2Fkakaocorp%2Fadmin%2Fservice%2F2633650c018a00001.png" />
                                                        </WrapThumb>
                                                    </LinkItem>
                                                    <InfoCard>
                                                        <TxtKeyword>#기부</TxtKeyword>
                                                        <TxtKeyword>#마음챙김</TxtKeyword>
                                                        <TxtKeyword>#사회변화</TxtKeyword>
                                                        <TxtKeyword>#소셜임팩트</TxtKeyword>
                                                        <TxtKeyword>#카카오같이가치</TxtKeyword>
                                                    </InfoCard>
                                                </InnerCard>
                                                <BtnShare viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                                                <g data-v-19bdf39b="" fill="none" fill-rule="evenodd"><path data-v-19bdf39b="" d="M0 0H24V24H0z" transform="translate(-350 -222) translate(24 192) translate(326 30)"></path> <g data-v-19bdf39b="" transform="translate(-350 -222) translate(24 192) translate(326 30) translate(10 2)" class="fill" fill="#000"><circle data-v-19bdf39b="" cx="2" cy="2" r="2"></circle> <circle data-v-19bdf39b="" cx="2" cy="10" r="2"></circle><circle data-v-19bdf39b="" cx="2" cy="18" r="2"></circle></g></g>
                                                </BtnShare>
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