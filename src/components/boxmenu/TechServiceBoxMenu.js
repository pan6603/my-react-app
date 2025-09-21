import { 
    TechServiceBoxMenuContainer,
    TechServiceBoxMenuListSecond,
    TechServiceBoxMenuContMenu,
    TechServiceBoxMenuSlickSlider,
    TechServiceBoxMenuSlickList,
    TechServiceBoxMenuStyledSwiper,
    TechServiceBoxMenuSlickSlide,
    TechServiceBoxMenuLinkCont,
    TechServiceBoxMenuImgCont,
    TechServiceBoxMenuWrapCont,
    TechServiceBoxMenuIcoCategory,
    TechServiceBoxMenuTxtCategory,
    TechServiceWrapContDescription,
    TechServiceListFlex,
    TitSubmenu,
    ListThird,
    TechServiceLinkSubmenu 
} from "../../styles/boxmenu/BoxMenu.styles";
import { Pagination, Navigation, EffectFade } from 'swiper/modules'

function TechServiceBoxMenu() {
    return (
        <>
            <TechServiceBoxMenuContainer>
                <TechServiceBoxMenuListSecond>
                    <TechServiceListFlex>
                        <TitSubmenu>기술</TitSubmenu>
                        <ListThird>
                            <TechServiceLinkSubmenu>카카오테크</TechServiceLinkSubmenu>
                            <TechServiceLinkSubmenu>기술 플랫폼</TechServiceLinkSubmenu>
                            <TechServiceLinkSubmenu>기술 서비스</TechServiceLinkSubmenu>
                            <TechServiceLinkSubmenu>기술 콘텐츠</TechServiceLinkSubmenu>
                            <TechServiceLinkSubmenu>기술 이벤트</TechServiceLinkSubmenu>
                            <TechServiceLinkSubmenu>if(코코아)</TechServiceLinkSubmenu>
                        </ListThird>
                    </TechServiceListFlex>
                    <TechServiceListFlex>
                        <TitSubmenu>서비스</TitSubmenu>
                        <ListThird>
                            <TechServiceLinkSubmenu>커뮤니케이션</TechServiceLinkSubmenu>
                            <TechServiceLinkSubmenu>일상 편의</TechServiceLinkSubmenu>
                            <TechServiceLinkSubmenu>비즈니스</TechServiceLinkSubmenu>
                            <TechServiceLinkSubmenu>쇼핑</TechServiceLinkSubmenu>
                            <TechServiceLinkSubmenu>엔터테인먼트</TechServiceLinkSubmenu>
                            <TechServiceLinkSubmenu>소셜임팩트</TechServiceLinkSubmenu>
                        </ListThird>
                    </TechServiceListFlex>
                </TechServiceBoxMenuListSecond>
                <TechServiceBoxMenuContMenu>
                    <TechServiceBoxMenuSlickSlider>
                        <TechServiceBoxMenuSlickList>
                            <TechServiceBoxMenuStyledSwiper
                                modules={[Navigation, Pagination, EffectFade]}
                                spaceBetween={30}
                                slidesPerView={1}
                                loop={true} 
                                navigation
                                pagination={{ clickable: true }}
                                effect="fade"
                                fadeEffect={{ crossFade: true }}
                            >
                                <TechServiceBoxMenuSlickSlide>
                                    <TechServiceBoxMenuLinkCont>
                                        <TechServiceBoxMenuImgCont src="https://t1.kakaocdn.net/thumb/C317x178.fwebp.q100/?fname=https%3A%2F%2Ft1.kakaocdn.net%2Fkakaocorp%2Fkakaocorp%2Fadmin%2Ftech%2F2324bb0e019300001.png" />

                                        <TechServiceBoxMenuWrapCont>
                                            <TechServiceBoxMenuIcoCategory src="https://t1.kakaocdn.net/kakaocorp/kakaocorp/admin/category/ea259486018400001.png"/>
                                            <TechServiceBoxMenuTxtCategory>if(코코아)</TechServiceBoxMenuTxtCategory>
                                            <TechServiceWrapContDescription>카카오 AI를 이해하는, 5가지 <br />키워드</TechServiceWrapContDescription>
                                        </TechServiceBoxMenuWrapCont>
                                    </TechServiceBoxMenuLinkCont>
                                </TechServiceBoxMenuSlickSlide>

                                <TechServiceBoxMenuSlickSlide>
                                    <TechServiceBoxMenuLinkCont>
                                        <TechServiceBoxMenuImgCont src="https://t1.kakaocdn.net/thumb/C317x178.fwebp.q100/?fname=https%3A%2F%2Ft1.kakaocdn.net%2Fkakaocorp%2Fkakaocorp%2Fadmin%2Ftech%2F29cf1dcd019300001.png"/>

                                        <TechServiceBoxMenuWrapCont>
                                            <TechServiceBoxMenuIcoCategory 
                                                src="https://t1.kakaocdn.net/kakaocorp/kakaocorp/admin/category/ea259486018400001.png"/>
                                            <TechServiceBoxMenuTxtCategory>카카오테크</TechServiceBoxMenuTxtCategory>
                                            <TechServiceWrapContDescription>카카오의 AI 모델, Kanana Model <br/>Family를 소개합니다</TechServiceWrapContDescription>
                                        </TechServiceBoxMenuWrapCont>
                                    </TechServiceBoxMenuLinkCont>
                                </TechServiceBoxMenuSlickSlide>

                                <TechServiceBoxMenuSlickSlide>
                                    <TechServiceBoxMenuLinkCont>
                                        <TechServiceBoxMenuImgCont 
                                            src="https://t1.kakaocdn.net/thumb/C317x178.fwebp.q100/?fname=https%3A%2F%2Ft1.kakaocdn.net%2Fkakaocorp%2Fkakaocorp%2Fadmin%2Fservice%2Fabcd3a11017900001.jpg"/>
                                        
                                        <TechServiceBoxMenuWrapCont>
                                            <TechServiceBoxMenuIcoCategory src="https://t1.kakaocdn.net/kakaocorp/kakaocorp/admin/65659472017800001.png"/>
                                            <TechServiceBoxMenuTxtCategory>커뮤니케이션</TechServiceBoxMenuTxtCategory>

                                            <TechServiceWrapContDescription>사람과 세상을 향한  <br/> 모든 연결의 시작, 카카오톡</TechServiceWrapContDescription>
                                        </TechServiceBoxMenuWrapCont>
                                    </TechServiceBoxMenuLinkCont>
                                </TechServiceBoxMenuSlickSlide>

                                <TechServiceBoxMenuSlickSlide>
                                    <TechServiceBoxMenuLinkCont>
                                        <TechServiceBoxMenuImgCont 
                                            src="https://t1.kakaocdn.net/thumb/C317x178.fwebp.q100/?fname=https%3A%2F%2Ft1.kakaocdn.net%2Fkakaocorp%2Fkakaocorp%2Fadmin%2Fservice%2F88b8f3c9019500001.png"/>

                                        <TechServiceBoxMenuWrapCont>
                                            <TechServiceBoxMenuIcoCategory src="https://t1.kakaocdn.net/kakaocorp/kakaocorp/admin/65659472017800001.png"/>
                                            <TechServiceBoxMenuTxtCategory>커뮤니케이션</TechServiceBoxMenuTxtCategory>

                                            <TechServiceWrapContDescription>모두의 카톡을 더 가깝고 안전하게, <br/>카톡설명서</TechServiceWrapContDescription>
                                        </TechServiceBoxMenuWrapCont>
                                    </TechServiceBoxMenuLinkCont>
                                </TechServiceBoxMenuSlickSlide>

                            </TechServiceBoxMenuStyledSwiper>
                        </TechServiceBoxMenuSlickList>
                    </TechServiceBoxMenuSlickSlider>
                </TechServiceBoxMenuContMenu>
            </TechServiceBoxMenuContainer>
        </>
    )
}

export default TechServiceBoxMenu;