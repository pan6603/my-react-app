import {
    AccordionMenuDiv,
    WrapServiceWrapEtc,
    WrapEtcInnerService,
    KakaoGroupServiceSubTitle,
    KakaoGroupSubTitle,
    IRSubTitle,
    AccountSubTitle,
    WrapEtcSubTitleText,
    WrapEtcSubTitleIcoArrow,
    WrapEtcListService,
    WrapEtcItemService,
    WrapEtcLinkService,
    IcoOutlink
} from "../../styles/accordion_menu/AccordionMenu.styles"
import { useState } from "react";


export default function AccordionMenu() {
    const [kakaoGroupServiceOpenMenu, setKakaoGroupServiceOpenMenu] = useState(false);
    const [kakaoGroupOpenMenu, setKakaoGroupOpenMenu] = useState(false);
    const [irOpenMenu, setIrOpenMenu] = useState(false);
    const [accountOpenMenu, setAccountOpenMenu] = useState(false);


    return (
        <>
            <AccordionMenuDiv>
                <WrapServiceWrapEtc open={kakaoGroupServiceOpenMenu}>
                    <WrapEtcInnerService>
                        <KakaoGroupServiceSubTitle 
                            onClick={() => setKakaoGroupServiceOpenMenu(!kakaoGroupServiceOpenMenu)}>
                            <WrapEtcSubTitleText>카카오 그룹의 서비스</WrapEtcSubTitleText>

                            {kakaoGroupServiceOpenMenu ? (
                                <WrapEtcSubTitleIcoArrow viewBox="0 0 9 9">
                                    <g fill="none" fillRule="evenodd">
                                        <path d="M0 0H9V9H0z"></path>
                                        <path
                                            d="M1 6L4.5 3 8 6"  // ▲ 위 방향
                                            stroke="#747474"
                                        ></path>
                                    </g>
                                </WrapEtcSubTitleIcoArrow>
                            ) : (
                                <WrapEtcSubTitleIcoArrow viewBox="0 0 9 9">
                                    <g fill="none" fillRule="evenodd">
                                        <path d="M0 0H9V9H0z"></path>
                                        <path
                                            d="M8 3L4.5 6 1 3" // ▼ 아래 방향
                                            stroke="#747474"
                                        ></path>
                                    </g>
                                </WrapEtcSubTitleIcoArrow>
                            )}
                        </KakaoGroupServiceSubTitle>
                        { kakaoGroupServiceOpenMenu && 
                            <WrapEtcListService>
                                <WrapEtcItemService>
                                    <WrapEtcLinkService>커뮤니케이션</WrapEtcLinkService>
                                </WrapEtcItemService>
                                <WrapEtcItemService>
                                    <WrapEtcLinkService>일상편의</WrapEtcLinkService>
                                </WrapEtcItemService>
                                <WrapEtcItemService>
                                    <WrapEtcLinkService>비즈니스</WrapEtcLinkService>
                                </WrapEtcItemService>
                                <WrapEtcItemService>
                                    <WrapEtcLinkService>쇼핑</WrapEtcLinkService>
                                </WrapEtcItemService>
                                <WrapEtcItemService>
                                    <WrapEtcLinkService>엔터테인먼트</WrapEtcLinkService>
                                </WrapEtcItemService>
                                <WrapEtcItemService>
                                    <WrapEtcLinkService>임팩트</WrapEtcLinkService>
                                </WrapEtcItemService>
                            </WrapEtcListService> 
                        }
                    </WrapEtcInnerService>
                </WrapServiceWrapEtc>

                <WrapServiceWrapEtc open={kakaoGroupOpenMenu}>
                    <WrapEtcInnerService>
                        <KakaoGroupSubTitle 
                            onClick={() => setKakaoGroupOpenMenu(!kakaoGroupOpenMenu)}>
                            <WrapEtcSubTitleText>카카오 그룹</WrapEtcSubTitleText>

                            {kakaoGroupOpenMenu ? (
                                <WrapEtcSubTitleIcoArrow viewBox="0 0 9 9">
                                    <g fill="none" fillRule="evenodd">
                                        <path d="M0 0H9V9H0z"></path>
                                        <path
                                            d="M1 6L4.5 3 8 6"  // ▲ 위 방향
                                            stroke="#747474"
                                        ></path>
                                    </g>
                                </WrapEtcSubTitleIcoArrow>
                            ) : (
                                <WrapEtcSubTitleIcoArrow viewBox="0 0 9 9">
                                    <g fill="none" fillRule="evenodd">
                                        <path d="M0 0H9V9H0z"></path>
                                        <path
                                            d="M8 3L4.5 6 1 3" // ▼ 아래 방향
                                            stroke="#747474"
                                        ></path>
                                    </g>
                                </WrapEtcSubTitleIcoArrow>
                            )}                           
                        </KakaoGroupSubTitle>
                        { kakaoGroupOpenMenu && 
                            <WrapEtcListService>
                                <WrapEtcItemService>
                                    <WrapEtcLinkService>카카오</WrapEtcLinkService>
                                </WrapEtcItemService>
                                <WrapEtcItemService>
                                    <WrapEtcLinkService>
                                        카카오페이
                                        <IcoOutlink>
                                        <g data-v-61c8860e="" fill="none" fill-rule="evenodd"><path data-v-61c8860e="" d="M1.795 1.074L7.942 1.074 7.942 7.221M7.942 1.074L1.378 7.638" transform="translate(-935 -867) translate(836 848) translate(14 14) translate(85 5)" stroke="#888"></path></g>
                                        </IcoOutlink>
                                    </WrapEtcLinkService>
                                </WrapEtcItemService>
                                <WrapEtcItemService>
                                    <WrapEtcLinkService>
                                        카카오뱅크
                                        <IcoOutlink>
                                        <g data-v-61c8860e="" fill="none" fill-rule="evenodd"><path data-v-61c8860e="" d="M1.795 1.074L7.942 1.074 7.942 7.221M7.942 1.074L1.378 7.638" transform="translate(-935 -867) translate(836 848) translate(14 14) translate(85 5)" stroke="#888"></path></g>
                                        </IcoOutlink>
                                    </WrapEtcLinkService>
                                </WrapEtcItemService>
                                <WrapEtcItemService>
                                    <WrapEtcLinkService>
                                        카카오모빌리티
                                        <IcoOutlink>
                                        <g data-v-61c8860e="" fill="none" fill-rule="evenodd"><path data-v-61c8860e="" d="M1.795 1.074L7.942 1.074 7.942 7.221M7.942 1.074L1.378 7.638" transform="translate(-935 -867) translate(836 848) translate(14 14) translate(85 5)" stroke="#888"></path></g>
                                        </IcoOutlink>
                                    </WrapEtcLinkService>
                                </WrapEtcItemService>
                                <WrapEtcItemService>
                                    <WrapEtcLinkService>
                                        카카오스타일
                                        <IcoOutlink>
                                        <g data-v-61c8860e="" fill="none" fill-rule="evenodd"><path data-v-61c8860e="" d="M1.795 1.074L7.942 1.074 7.942 7.221M7.942 1.074L1.378 7.638" transform="translate(-935 -867) translate(836 848) translate(14 14) translate(85 5)" stroke="#888"></path></g>
                                        </IcoOutlink>
                                    </WrapEtcLinkService>
                                </WrapEtcItemService>
                                <WrapEtcItemService>
                                    <WrapEtcLinkService>
                                        카카오엔터테인먼트
                                        <IcoOutlink>
                                        <g data-v-61c8860e="" fill="none" fill-rule="evenodd"><path data-v-61c8860e="" d="M1.795 1.074L7.942 1.074 7.942 7.221M7.942 1.074L1.378 7.638" transform="translate(-935 -867) translate(836 848) translate(14 14) translate(85 5)" stroke="#888"></path></g>
                                        </IcoOutlink>
                                    </WrapEtcLinkService>
                                </WrapEtcItemService>
                                <WrapEtcItemService>
                                    <WrapEtcLinkService>
                                        axz
                                        <IcoOutlink>
                                        <g data-v-61c8860e="" fill="none" fill-rule="evenodd"><path data-v-61c8860e="" d="M1.795 1.074L7.942 1.074 7.942 7.221M7.942 1.074L1.378 7.638" transform="translate(-935 -867) translate(836 848) translate(14 14) translate(85 5)" stroke="#888"></path></g>
                                        </IcoOutlink>
                                    </WrapEtcLinkService>
                                </WrapEtcItemService>
                                <WrapEtcItemService>
                                    <WrapEtcLinkService>
                                        카카오게임즈
                                        <IcoOutlink>
                                        <g data-v-61c8860e="" fill="none" fill-rule="evenodd"><path data-v-61c8860e="" d="M1.795 1.074L7.942 1.074 7.942 7.221M7.942 1.074L1.378 7.638" transform="translate(-935 -867) translate(836 848) translate(14 14) translate(85 5)" stroke="#888"></path></g>
                                        </IcoOutlink>
                                    </WrapEtcLinkService>
                                </WrapEtcItemService>
                                <WrapEtcItemService>
                                    <WrapEtcLinkService>
                                        카카오픽코마
                                        <IcoOutlink>
                                        <g data-v-61c8860e="" fill="none" fill-rule="evenodd"><path data-v-61c8860e="" d="M1.795 1.074L7.942 1.074 7.942 7.221M7.942 1.074L1.378 7.638" transform="translate(-935 -867) translate(836 848) translate(14 14) translate(85 5)" stroke="#888"></path></g>
                                        </IcoOutlink>
                                    </WrapEtcLinkService>
                                </WrapEtcItemService>
                                <WrapEtcItemService>
                                    <WrapEtcLinkService>
                                        카카오엔터프라이즈
                                        <IcoOutlink>
                                        <g data-v-61c8860e="" fill="none" fill-rule="evenodd"><path data-v-61c8860e="" d="M1.795 1.074L7.942 1.074 7.942 7.221M7.942 1.074L1.378 7.638" transform="translate(-935 -867) translate(836 848) translate(14 14) translate(85 5)" stroke="#888"></path></g>
                                        </IcoOutlink>
                                    </WrapEtcLinkService>
                                </WrapEtcItemService>
                                <WrapEtcItemService>
                                    <WrapEtcLinkService>
                                        카카오헬스케어
                                        <IcoOutlink>
                                        <g data-v-61c8860e="" fill="none" fill-rule="evenodd"><path data-v-61c8860e="" d="M1.795 1.074L7.942 1.074 7.942 7.221M7.942 1.074L1.378 7.638" transform="translate(-935 -867) translate(836 848) translate(14 14) translate(85 5)" stroke="#888"></path></g>
                                        </IcoOutlink>
                                    </WrapEtcLinkService>
                                </WrapEtcItemService>
                                <WrapEtcItemService>
                                    <WrapEtcLinkService>
                                        카카오벤처스
                                        <IcoOutlink>
                                        <g data-v-61c8860e="" fill="none" fill-rule="evenodd"><path data-v-61c8860e="" d="M1.795 1.074L7.942 1.074 7.942 7.221M7.942 1.074L1.378 7.638" transform="translate(-935 -867) translate(836 848) translate(14 14) translate(85 5)" stroke="#888"></path></g>
                                        </IcoOutlink>
                                    </WrapEtcLinkService>
                                </WrapEtcItemService>
                                <WrapEtcItemService>
                                    <WrapEtcLinkService>
                                        카카오인베스트먼트
                                        <IcoOutlink>
                                        <g data-v-61c8860e="" fill="none" fill-rule="evenodd"><path data-v-61c8860e="" d="M1.795 1.074L7.942 1.074 7.942 7.221M7.942 1.074L1.378 7.638" transform="translate(-935 -867) translate(836 848) translate(14 14) translate(85 5)" stroke="#888"></path></g>
                                        </IcoOutlink>
                                    </WrapEtcLinkService>
                                </WrapEtcItemService>
                                <WrapEtcItemService>
                                    <WrapEtcLinkService>
                                        링키지랩
                                        <IcoOutlink>
                                        <g data-v-61c8860e="" fill="none" fill-rule="evenodd"><path data-v-61c8860e="" d="M1.795 1.074L7.942 1.074 7.942 7.221M7.942 1.074L1.378 7.638" transform="translate(-935 -867) translate(836 848) translate(14 14) translate(85 5)" stroke="#888"></path></g>
                                        </IcoOutlink>
                                    </WrapEtcLinkService>
                                </WrapEtcItemService>
                            </WrapEtcListService> 
                        }
                    </WrapEtcInnerService>
                </WrapServiceWrapEtc>

                <WrapServiceWrapEtc open={irOpenMenu}>
                    <WrapEtcInnerService>
                        <IRSubTitle onClick={() => setIrOpenMenu(!irOpenMenu)}>
                            <WrapEtcSubTitleText>IR</WrapEtcSubTitleText>

                            {irOpenMenu ? (
                                <WrapEtcSubTitleIcoArrow viewBox="0 0 9 9">
                                    <g fill="none" fillRule="evenodd">
                                        <path d="M0 0H9V9H0z"></path>
                                        <path
                                            d="M1 6L4.5 3 8 6"  // ▲ 위 방향
                                            stroke="#747474"
                                        ></path>
                                    </g>
                                </WrapEtcSubTitleIcoArrow>
                            ) : (
                                <WrapEtcSubTitleIcoArrow viewBox="0 0 9 9">
                                    <g fill="none" fillRule="evenodd">
                                        <path d="M0 0H9V9H0z"></path>
                                        <path
                                            d="M8 3L4.5 6 1 3" // ▼ 아래 방향
                                            stroke="#747474"
                                        ></path>
                                    </g>
                                </WrapEtcSubTitleIcoArrow>
                            )}
                        </IRSubTitle>
                        { irOpenMenu && 
                            <WrapEtcListService>
                                <WrapEtcItemService>
                                    <WrapEtcLinkService>
                                        기업지배구조
                                        <IcoOutlink>
                                        <g data-v-61c8860e="" fill="none" fill-rule="evenodd"><path data-v-61c8860e="" d="M1.795 1.074L7.942 1.074 7.942 7.221M7.942 1.074L1.378 7.638" transform="translate(-935 -867) translate(836 848) translate(14 14) translate(85 5)" stroke="#888"></path></g>
                                        </IcoOutlink>
                                    </WrapEtcLinkService>
                                </WrapEtcItemService>

                                <WrapEtcItemService>
                                    <WrapEtcLinkService>
                                        주가정보
                                        <IcoOutlink>
                                        <g data-v-61c8860e="" fill="none" fill-rule="evenodd"><path data-v-61c8860e="" d="M1.795 1.074L7.942 1.074 7.942 7.221M7.942 1.074L1.378 7.638" transform="translate(-935 -867) translate(836 848) translate(14 14) translate(85 5)" stroke="#888"></path></g>
                                        </IcoOutlink>
                                    </WrapEtcLinkService>
                                </WrapEtcItemService>

                                <WrapEtcItemService>
                                    <WrapEtcLinkService>
                                        재무정보
                                        <IcoOutlink>
                                        <g data-v-61c8860e="" fill="none" fill-rule="evenodd"><path data-v-61c8860e="" d="M1.795 1.074L7.942 1.074 7.942 7.221M7.942 1.074L1.378 7.638" transform="translate(-935 -867) translate(836 848) translate(14 14) translate(85 5)" stroke="#888"></path></g>
                                        </IcoOutlink>
                                    </WrapEtcLinkService>
                                </WrapEtcItemService>

                                <WrapEtcItemService>
                                    <WrapEtcLinkService>
                                        IR행사
                                        <IcoOutlink>
                                        <g data-v-61c8860e="" fill="none" fill-rule="evenodd"><path data-v-61c8860e="" d="M1.795 1.074L7.942 1.074 7.942 7.221M7.942 1.074L1.378 7.638" transform="translate(-935 -867) translate(836 848) translate(14 14) translate(85 5)" stroke="#888"></path></g>
                                        </IcoOutlink>
                                    </WrapEtcLinkService>
                                </WrapEtcItemService>

                                <WrapEtcItemService>
                                    <WrapEtcLinkService>
                                        공시정보
                                        <IcoOutlink>
                                        <g data-v-61c8860e="" fill="none" fill-rule="evenodd"><path data-v-61c8860e="" d="M1.795 1.074L7.942 1.074 7.942 7.221M7.942 1.074L1.378 7.638" transform="translate(-935 -867) translate(836 848) translate(14 14) translate(85 5)" stroke="#888"></path></g>
                                        </IcoOutlink>
                                    </WrapEtcLinkService>
                                </WrapEtcItemService>

                                <WrapEtcItemService>
                                    <WrapEtcLinkService>
                                        공고
                                        <IcoOutlink>
                                        <g data-v-61c8860e="" fill="none" fill-rule="evenodd"><path data-v-61c8860e="" d="M1.795 1.074L7.942 1.074 7.942 7.221M7.942 1.074L1.378 7.638" transform="translate(-935 -867) translate(836 848) translate(14 14) translate(85 5)" stroke="#888"></path></g>
                                        </IcoOutlink>
                                    </WrapEtcLinkService>
                                </WrapEtcItemService>
                            </WrapEtcListService> 
                        }
                    </WrapEtcInnerService>
                </WrapServiceWrapEtc>

                <WrapServiceWrapEtc open={accountOpenMenu}>
                    <WrapEtcInnerService>
                        <AccountSubTitle onClick={() => setAccountOpenMenu(!accountOpenMenu)}>
                            <WrapEtcSubTitleText>계정 및 지원</WrapEtcSubTitleText>

                            {accountOpenMenu ? (
                                <WrapEtcSubTitleIcoArrow viewBox="0 0 9 9">
                                    <g fill="none" fillRule="evenodd">
                                        <path d="M0 0H9V9H0z"></path>
                                        <path
                                            d="M1 6L4.5 3 8 6"  // ▲ 위 방향
                                            stroke="#747474"
                                        ></path>
                                    </g>
                                </WrapEtcSubTitleIcoArrow>
                            ) : (
                                <WrapEtcSubTitleIcoArrow viewBox="0 0 9 9">
                                    <g fill="none" fillRule="evenodd">
                                        <path d="M0 0H9V9H0z"></path>
                                        <path
                                            d="M8 3L4.5 6 1 3" // ▼ 아래 방향
                                            stroke="#747474"
                                        ></path>
                                    </g>
                                </WrapEtcSubTitleIcoArrow>
                            )}
                        </AccountSubTitle>
                        { accountOpenMenu && 
                            <WrapEtcListService>
                                <WrapEtcItemService>
                                    <WrapEtcLinkService>
                                        카카오계정
                                        <IcoOutlink>
                                        <g data-v-61c8860e="" fill="none" fill-rule="evenodd"><path data-v-61c8860e="" d="M1.795 1.074L7.942 1.074 7.942 7.221M7.942 1.074L1.378 7.638" transform="translate(-935 -867) translate(836 848) translate(14 14) translate(85 5)" stroke="#888"></path></g>
                                        </IcoOutlink>
                                    </WrapEtcLinkService>
                                </WrapEtcItemService>

                                <WrapEtcItemService>
                                    <WrapEtcLinkService>
                                        카카오 프라이버시
                                        <IcoOutlink>
                                        <g data-v-61c8860e="" fill="none" fill-rule="evenodd"><path data-v-61c8860e="" d="M1.795 1.074L7.942 1.074 7.942 7.221M7.942 1.074L1.378 7.638" transform="translate(-935 -867) translate(836 848) translate(14 14) translate(85 5)" stroke="#888"></path></g>
                                        </IcoOutlink>
                                    </WrapEtcLinkService>
                                </WrapEtcItemService>

                                <WrapEtcItemService>
                                    <WrapEtcLinkService>
                                        카카오 고객센터
                                        <IcoOutlink>
                                        <g data-v-61c8860e="" fill="none" fill-rule="evenodd"><path data-v-61c8860e="" d="M1.795 1.074L7.942 1.074 7.942 7.221M7.942 1.074L1.378 7.638" transform="translate(-935 -867) translate(836 848) translate(14 14) translate(85 5)" stroke="#888"></path></g>
                                        </IcoOutlink>
                                    </WrapEtcLinkService>
                                </WrapEtcItemService>

                                <WrapEtcItemService>
                                    <WrapEtcLinkService>
                                        다음 고객센터
                                        <IcoOutlink>
                                        <g data-v-61c8860e="" fill="none" fill-rule="evenodd"><path data-v-61c8860e="" d="M1.795 1.074L7.942 1.074 7.942 7.221M7.942 1.074L1.378 7.638" transform="translate(-935 -867) translate(836 848) translate(14 14) translate(85 5)" stroke="#888"></path></g>
                                        </IcoOutlink>
                                    </WrapEtcLinkService>
                                </WrapEtcItemService>

                                <WrapEtcItemService>
                                    <WrapEtcLinkService>
                                        커머스 고객센터
                                        <IcoOutlink>
                                        <g data-v-61c8860e="" fill="none" fill-rule="evenodd"><path data-v-61c8860e="" d="M1.795 1.074L7.942 1.074 7.942 7.221M7.942 1.074L1.378 7.638" transform="translate(-935 -867) translate(836 848) translate(14 14) translate(85 5)" stroke="#888"></path></g>
                                        </IcoOutlink>
                                    </WrapEtcLinkService>
                                </WrapEtcItemService>

                                <WrapEtcItemService>
                                    <WrapEtcLinkService>
                                        인재영입
                                        <IcoOutlink>
                                        <g data-v-61c8860e="" fill="none" fill-rule="evenodd"><path data-v-61c8860e="" d="M1.795 1.074L7.942 1.074 7.942 7.221M7.942 1.074L1.378 7.638" transform="translate(-935 -867) translate(836 848) translate(14 14) translate(85 5)" stroke="#888"></path></g>
                                        </IcoOutlink>
                                    </WrapEtcLinkService>
                                </WrapEtcItemService>
                            </WrapEtcListService> 
                        }
                    </WrapEtcInnerService>
                </WrapServiceWrapEtc>
            </AccordionMenuDiv>
        </>
    )
}