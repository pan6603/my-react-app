import { 
    NewsBoxMenuContainer,
    NewsListSecond,
    NewsListFlex,
    NewsTitSubmenu,
    NewsListThird,
    NewsLinkSubmenu,
    NewsContMenu,
    NewsSlickSlider,
    NewsSlickList,
    NewsStyledSwiper,
    NewsBoxMenuSlickSlide,
    NewsBoxMenuLinkContDiv,
    NewsBoxMenuLinkCont,
    NewsBoxMenuWrapCont,
    NewsBoxMenuIcoCategory,
    NewsBoxMenuTxtCategory,
    NewsWrapContDescription
} from "../../styles/boxmenu/BoxMenu.styles";
import { Pagination, Navigation, EffectFade } from 'swiper/modules'

function NewBoxMenu() {
    return (
        <>
            <NewsBoxMenuContainer>
                <NewsListSecond>
                    <NewsListFlex>
                        <NewsTitSubmenu>뉴스</NewsTitSubmenu>
                        <NewsListThird>
                            <NewsLinkSubmenu>보도자료</NewsLinkSubmenu>
                            <NewsLinkSubmenu>미디어자료</NewsLinkSubmenu>
                        </NewsListThird>
                    </NewsListFlex>
                    <NewsListFlex>
                        <NewsTitSubmenu>카카오나우</NewsTitSubmenu>
                        <NewsListThird>
                            <NewsLinkSubmenu>카카오이야기</NewsLinkSubmenu>
                            <NewsLinkSubmenu>그룹사이야기</NewsLinkSubmenu>
                        </NewsListThird>
                    </NewsListFlex>
                </NewsListSecond>
                <NewsContMenu>
                    <NewsSlickSlider>
                        <NewsSlickList>
                            <NewsStyledSwiper
                                modules={[Navigation, Pagination, EffectFade]}
                                spaceBetween={30}
                                slidesPerView={1}
                                loop={true} 
                                navigation
                                pagination={{ clickable: true }}
                                effect="fade"
                                fadeEffect={{ crossFade: true }}
                            >
                                <NewsBoxMenuSlickSlide>
                                    <NewsBoxMenuLinkContDiv>
                                        <NewsBoxMenuLinkCont>
                                            <NewsBoxMenuWrapCont>
                                                <NewsBoxMenuIcoCategory 
                                                    src="https://t1.kakaocdn.net/kakaocorp/kakaocorp/admin/category/1ee6415a019300001.png"/> 
                                                    <NewsBoxMenuTxtCategory>
                                                        보도자료
                                                    </NewsBoxMenuTxtCategory>

                                                    <NewsWrapContDescription>
                                                        브런치 10주년, 작가 9만 5천여 명 <br /> 돌파… 
                                                    </NewsWrapContDescription>
                                            </NewsBoxMenuWrapCont>
                                        </NewsBoxMenuLinkCont>
                                    </NewsBoxMenuLinkContDiv>
                                    <NewsBoxMenuLinkContDiv>
                                        <NewsBoxMenuLinkCont>
                                            <NewsBoxMenuWrapCont>
                                                <NewsBoxMenuIcoCategory 
                                                    src="https://t1.kakaocdn.net/kakaocorp/kakaocorp/admin/category/1ee6415a019300001.png"/> 
                                                    <NewsBoxMenuTxtCategory>
                                                        보도자료
                                                    </NewsBoxMenuTxtCategory>
                                                    <NewsWrapContDescription>
                                                        강 위에서도 실시간 위치 확인… 
                                                        <br />
                                                        카카오맵, 초정밀 한강버스 정보…
                                                    </NewsWrapContDescription>
                                            </NewsBoxMenuWrapCont>
                                        </NewsBoxMenuLinkCont>
                                    </NewsBoxMenuLinkContDiv>
                                </NewsBoxMenuSlickSlide>
                                
                                <NewsBoxMenuSlickSlide>
                                    <NewsBoxMenuLinkContDiv>
                                        <NewsBoxMenuLinkCont>
                                            <NewsBoxMenuWrapCont>
                                                <NewsBoxMenuIcoCategory 
                                                    src="https://t1.kakaocdn.net/kakaocorp/kakaocorp/admin/category/1ee6415a019300001.png"/> 
                                                    <NewsBoxMenuTxtCategory>
                                                        보도자료
                                                    </NewsBoxMenuTxtCategory>
                                                    <NewsWrapContDescription>
                                                        카카오, 국가 균형 성장 위해 500억<br />
                                                        원 규모 AI 지역 거점 조성
                                                    </NewsWrapContDescription>
                                            </NewsBoxMenuWrapCont>
                                        </NewsBoxMenuLinkCont>
                                    </NewsBoxMenuLinkContDiv>

                                    <NewsBoxMenuLinkContDiv>
                                        <NewsBoxMenuLinkCont>
                                            <NewsBoxMenuWrapCont>
                                                <NewsBoxMenuIcoCategory 
                                                    src="https://t1.kakaocdn.net/kakaocorp/kakaocorp/admin/category/1ee6415a019300001.png"/> 
                                                    <NewsBoxMenuTxtCategory>
                                                        보도자료
                                                    </NewsBoxMenuTxtCategory>
                                                    <NewsWrapContDescription>
                                                        카카오, 카카오톡 개편 캠페인 티저 <br />영상 공개!
                                                    </NewsWrapContDescription>
                                            </NewsBoxMenuWrapCont>
                                        </NewsBoxMenuLinkCont>
                                    </NewsBoxMenuLinkContDiv>
                                </NewsBoxMenuSlickSlide>
                                
                                <NewsBoxMenuSlickSlide>
                                    <NewsBoxMenuLinkContDiv>
                                        <NewsBoxMenuLinkCont>
                                            <NewsBoxMenuWrapCont>
                                                <NewsBoxMenuIcoCategory 
                                                    src="https://t1.kakaocdn.net/kakaocorp/kakaocorp/admin/category/1ee6415a019300001.png"/> 
                                                    <NewsBoxMenuTxtCategory>
                                                        보도자료
                                                    </NewsBoxMenuTxtCategory>
                                                    <NewsWrapContDescription>
                                                        카카오, ‘카카오비즈니스 사장님 <br />
                                                        커뮤니티’ 3기 모집
                                                    </NewsWrapContDescription>
                                            </NewsBoxMenuWrapCont>
                                        </NewsBoxMenuLinkCont>
                                    </NewsBoxMenuLinkContDiv>
                                    <NewsBoxMenuLinkContDiv>
                                        <NewsBoxMenuLinkCont>
                                            <NewsBoxMenuWrapCont>
                                                <NewsBoxMenuIcoCategory 
                                                    src="https://t1.kakaocdn.net/kakaocorp/kakaocorp/admin/category/1ee6415a019300001.png"/> 
                                                    <NewsBoxMenuTxtCategory>
                                                        보도자료
                                                    </NewsBoxMenuTxtCategory>
                                                    <NewsWrapContDescription>
                                                        추석선물은 톡딜·선물하기· <br />
                                                        카쇼라에서…
                                                    </NewsWrapContDescription>
                                            </NewsBoxMenuWrapCont>
                                        </NewsBoxMenuLinkCont>
                                    </NewsBoxMenuLinkContDiv>
                                </NewsBoxMenuSlickSlide>
                                
                                <NewsBoxMenuSlickSlide>
                                    <NewsBoxMenuLinkContDiv>
                                        <NewsBoxMenuLinkCont>
                                            <NewsBoxMenuWrapCont>
                                                <NewsBoxMenuIcoCategory 
                                                    src="https://t1.kakaocdn.net/kakaocorp/kakaocorp/admin/category/1ee6415a019300001.png"/> 
                                                    <NewsBoxMenuTxtCategory>
                                                        보도자료
                                                    </NewsBoxMenuTxtCategory>
                                                    <NewsWrapContDescription>
                                                        카카오, ‘비즈니스 임팩트 리포트 <br /> 
                                                        2025’ 발간…산업 생태계 기여… 
                                                    </NewsWrapContDescription>
                                            </NewsBoxMenuWrapCont>
                                        </NewsBoxMenuLinkCont>
                                    </NewsBoxMenuLinkContDiv>

                                    <NewsBoxMenuLinkContDiv>
                                        <NewsBoxMenuLinkCont>
                                            <NewsBoxMenuWrapCont>
                                                <NewsBoxMenuIcoCategory 
                                                    src="https://t1.kakaocdn.net/kakaocorp/kakaocorp/admin/category/1ee6415a019300001.png"/> 
                                                    <NewsBoxMenuTxtCategory>
                                                        보도자료
                                                    </NewsBoxMenuTxtCategory>
                                                    <NewsWrapContDescription>
                                                        카카오, ‘카카오프렌즈 X T1’ 협업 <br /> 
                                                        굿즈 출시
                                                    </NewsWrapContDescription>
                                            </NewsBoxMenuWrapCont>
                                        </NewsBoxMenuLinkCont>
                                    </NewsBoxMenuLinkContDiv>
                                </NewsBoxMenuSlickSlide>

                            </NewsStyledSwiper>
                        </NewsSlickList>
                    </NewsSlickSlider>
                </NewsContMenu>
            </NewsBoxMenuContainer>
        </>
    )
}


export default NewBoxMenu;