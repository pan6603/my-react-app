import { 
    AboutBoxMenuContainer,
    ListSecond,
    ContMenu,
    SlickSlider,
    ListSecondMenu,
    LinkSubmenu,
    StyledSwiper,
    SlickSlide,
    LinkCont,
    ImgCont,
    WrapCont,
    IcoCategory,
    TxtCategory,
    WrapContDescription
} from "../../styles/boxmenu/BoxMenu.styles";
import { Pagination, Navigation, EffectFade } from 'swiper/modules'

function AboutBoxMenu() {
    return (
        <AboutBoxMenuContainer>
            <ListSecond>
                <ListSecondMenu>
                    <LinkSubmenu>카카오 문화</LinkSubmenu>
                </ListSecondMenu>
                <ListSecondMenu>
                    <LinkSubmenu>카카오 그룹</LinkSubmenu>
                </ListSecondMenu>
                <ListSecondMenu>
                    <LinkSubmenu>연혁</LinkSubmenu>
                </ListSecondMenu>
            </ListSecond>
            <ContMenu>
                <SlickSlider>
                    <StyledSwiper
                        modules={[Navigation, Pagination, EffectFade]}
                        spaceBetween={30}
                        slidesPerView={1}
                        loop={true} 
                        navigation
                        pagination={{ clickable: true }}
                        effect="fade"
                        fadeEffect={{ crossFade: true }}
                    >
                        <SlickSlide>
                            <LinkCont>
                                <ImgCont src="https://t1.kakaocdn.net/thumb/C317x178.fwebp.q100/?fname=https%3A%2F%2Ft1.kakaocdn.net%2Fkakaocorp%2Fkakaocorp%2Fservice%2Fgnb%2Fgnb_kakaoCulture.png"/>
                                <WrapCont>
                                    <IcoCategory src="https://t1.kakaocdn.net/kakaocorp/kakaocorp/admin/category/06c15fc0019400001.png"/>
                                    <TxtCategory>카카오 문화</TxtCategory>
                                    <WrapContDescription>
                                        사람을 이해하는 기술로 <br />
                                        필요한 미래를 더 가깝게
                                    </WrapContDescription>
                                </WrapCont>
                            </LinkCont>
                        </SlickSlide>
                        <SlickSlide>
                            <LinkCont>
                                <ImgCont src="https://t1.kakaocdn.net/thumb/C317x178.fwebp.q100/?fname=https%3A%2F%2Ft1.kakaocdn.net%2Fkakaocorp%2Fkakaocorp%2Fservice%2Fgnb%2Fgnb_kakaoGroup.png"/>
                                <WrapCont>
                                    <IcoCategory src="https://t1.kakaocdn.net/kakaocorp/kakaocorp/admin/65628c29017800001.png"/>
                                    <TxtCategory>카카오 그룹</TxtCategory>
                                    <WrapContDescription>카카오가 만든 더 나은 세상</WrapContDescription>
                                </WrapCont>
                            </LinkCont>
                        </SlickSlide>
                        <SlickSlide>
                            <LinkCont>
                                <ImgCont src="https://t1.kakaocdn.net/thumb/C317x178.fwebp.q100/?fname=https%3A%2F%2Ft1.kakaocdn.net%2Fkakaocorp%2Fkakaocorp%2Fservice%2Fgnb%2Fgnb_milestones.png"/>
                                <WrapCont>
                                    <IcoCategory src="https://t1.kakaocdn.net/kakaocorp/kakaocorp/admin/category/dd29d0e1018800001.png" />
                                    <TxtCategory>연혁</TxtCategory>
                                    <WrapContDescription>카카오가 걸어온 길</WrapContDescription>
                                </WrapCont>
                            </LinkCont>
                        </SlickSlide>
                    </StyledSwiper>
    
                </SlickSlider>
            </ContMenu>
        </AboutBoxMenuContainer>
    )
}

export default AboutBoxMenu;