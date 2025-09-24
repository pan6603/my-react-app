import { 
    PromiseAndResponsbilityBoxMenuContainer,
    PromiseAndResponsbilityListSecond,
    PromiseAndResponsbilityContMenu,
    PromiseAndResponsbilitySlickSlider,
    PromiseAndResponsbilitySlickList,
    PromiseAndResponsbilityStyledSwiper,
    PromiseAndResponsbilitySlickSlide,
    PromiseAndResponsbilityLinkCont,
    PromiseAndResponsbilityImgCont,
    PromiseAndResponsbilityWrapCont,
    PromiseAndResponsbilityIcoCategory,
    PromiseAndResponsbilityTxtCategory,
    PromiseAndResponsbilityWrapContDescription,
    PromiseAndResponsbilityListFlex,
    PromiseAndResponsbilityLinkSubmenu
} from "../../styles/boxmenu/BoxMenu.styles";
import { Pagination, Navigation, EffectFade } from 'swiper/modules'
import { useTheme } from "../context/ThemeContext";

function PromiseAndResponsbilityBoxMenu() {
    const { theme } = useTheme() 

    return (
        <>
            <PromiseAndResponsbilityBoxMenuContainer theme={theme}>
                <PromiseAndResponsbilityListSecond>
                    <PromiseAndResponsbilityListFlex>
                        <PromiseAndResponsbilityLinkSubmenu theme={theme}>ESG 보고서</PromiseAndResponsbilityLinkSubmenu>
                        <PromiseAndResponsbilityLinkSubmenu theme={theme}>
                            프로젝트 단골
                        </PromiseAndResponsbilityLinkSubmenu>
                        <PromiseAndResponsbilityLinkSubmenu theme={theme}>액티브그린</PromiseAndResponsbilityLinkSubmenu>
                        <PromiseAndResponsbilityLinkSubmenu theme={theme}>디지털 책임</PromiseAndResponsbilityLinkSubmenu>
                        <PromiseAndResponsbilityLinkSubmenu theme={theme}>사회경제적 가치</PromiseAndResponsbilityLinkSubmenu>
                    </PromiseAndResponsbilityListFlex>
                </PromiseAndResponsbilityListSecond>
                <PromiseAndResponsbilityContMenu theme={theme}>
                    <PromiseAndResponsbilitySlickSlider>
                        <PromiseAndResponsbilitySlickList>
                            <PromiseAndResponsbilityStyledSwiper
                                theme={theme}
                                modules={[Navigation, Pagination, EffectFade]}
                                spaceBetween={30}
                                slidesPerView={1}
                                loop={true} 
                                navigation
                                pagination={{ clickable: true }}
                                effect="fade"
                                fadeEffect={{ crossFade: true }}
                            >
                                <PromiseAndResponsbilitySlickSlide>
                                    <PromiseAndResponsbilityLinkCont>
                                        <PromiseAndResponsbilityImgCont src="https://t1.kakaocdn.net/thumb/C317x178.fwebp.q100/?fname=https%3A%2F%2Ft1.kakaocdn.net%2Fkakaocorp%2Fkakaocorp%2Fservice%2Fgnb%2Fgnb_esg_2025.jpg"/>

                                        <PromiseAndResponsbilityWrapCont theme={theme}>
                                            <PromiseAndResponsbilityIcoCategory 
                                                src="https://t1.kakaocdn.net/kakaocorp/kakaocorp/admin/category/65fde7b2017900001.png"/>
                                                <PromiseAndResponsbilityTxtCategory theme={theme}>
                                                    ESG 보고서
                                                </PromiseAndResponsbilityTxtCategory>
                                                <PromiseAndResponsbilityWrapContDescription theme={theme}>
                                                    모두의 지속가능한 미래를 위한 <br />
                                                    카카오의 약속과 책임
                                                </PromiseAndResponsbilityWrapContDescription>
                                        </PromiseAndResponsbilityWrapCont>
                                    </PromiseAndResponsbilityLinkCont>
                                </PromiseAndResponsbilitySlickSlide>

                                <PromiseAndResponsbilitySlickSlide>
                                    <PromiseAndResponsbilityLinkCont>
                                        <PromiseAndResponsbilityImgCont src="https://t1.kakaocdn.net/thumb/C317x178.fwebp.q100/?fname=https%3A%2F%2Ft1.kakaocdn.net%2Fkakaocorp%2Fkakaocorp%2Fservice%2Fgnb%2Fgnb_dangol.png"/>

                                        <PromiseAndResponsbilityWrapCont theme={theme}>
                                            <PromiseAndResponsbilityIcoCategory 
                                                src="https://t1.kakaocdn.net/kakaocorp/kakaocorp/admin/category/b1921311019200001.png"/>
                                            <PromiseAndResponsbilityTxtCategory theme={theme}>
                                                프로젝트 단골
                                            </PromiseAndResponsbilityTxtCategory>  
                                            <PromiseAndResponsbilityWrapContDescription theme={theme}>
                                                더 많은 단골을 만나는게 <br />
                                                사장님에겐 가장 큰 힘이 되니깐
                                            </PromiseAndResponsbilityWrapContDescription>  
                                        </PromiseAndResponsbilityWrapCont>
                                    </PromiseAndResponsbilityLinkCont>
                                </PromiseAndResponsbilitySlickSlide>

                                <PromiseAndResponsbilitySlickSlide>
                                    <PromiseAndResponsbilityLinkCont>
                                        <PromiseAndResponsbilityImgCont src="https://t1.kakaocdn.net/thumb/C317x178.fwebp.q100/?fname=https%3A%2F%2Ft1.kakaocdn.net%2Fkakaocorp%2Fkakaocorp%2Fservice%2Fgnb%2Fgnb_activegreen.png"/>

                                        <PromiseAndResponsbilityWrapCont theme={theme}>
                                            <PromiseAndResponsbilityIcoCategory 
                                                src="https://t1.kakaocdn.net/kakaocorp/kakaocorp/admin/category/6f187cca018800001.png"/>
                                            <PromiseAndResponsbilityTxtCategory theme={theme}>
                                                액티브그린
                                            </PromiseAndResponsbilityTxtCategory>
                                            <PromiseAndResponsbilityWrapContDescription theme={theme}>
                                                카카오와 이용자가 함께 만들어가는 <br />
                                                지속가능한 지구
                                            </PromiseAndResponsbilityWrapContDescription>    
                                        </PromiseAndResponsbilityWrapCont>
                                    </PromiseAndResponsbilityLinkCont>
                                </PromiseAndResponsbilitySlickSlide>

                                <PromiseAndResponsbilitySlickSlide>
                                    <PromiseAndResponsbilityLinkCont>
                                        <PromiseAndResponsbilityImgCont src="https://t1.kakaocdn.net/thumb/C317x178.fwebp.q100/?fname=https%3A%2F%2Ft1.kakaocdn.net%2Fkakaocorp%2Fkakaocorp%2Fservice%2Fgnb%2Fgnb_policy.png"/>

                                        <PromiseAndResponsbilityWrapCont theme={theme}>
                                            <PromiseAndResponsbilityIcoCategory 
                                                src="https://t1.kakaocdn.net/kakaocorp/kakaocorp/admin/category/ad670b2e018b00001.png"/>
                                            <PromiseAndResponsbilityTxtCategory theme={theme}>
                                                디지털 책임
                                            </PromiseAndResponsbilityTxtCategory>
                                            <PromiseAndResponsbilityWrapContDescription theme={theme}>
                                                더 나은 디지털 세상을 향한 <br />
                                                카카오의 원칙과 생각들
                                            </PromiseAndResponsbilityWrapContDescription>   
                                        </PromiseAndResponsbilityWrapCont>
                                    </PromiseAndResponsbilityLinkCont>
                                </PromiseAndResponsbilitySlickSlide>

                            </PromiseAndResponsbilityStyledSwiper>
                        </PromiseAndResponsbilitySlickList>
                    </PromiseAndResponsbilitySlickSlider>
                </PromiseAndResponsbilityContMenu>
            </PromiseAndResponsbilityBoxMenuContainer>
        </>
    )
}

export default PromiseAndResponsbilityBoxMenu;