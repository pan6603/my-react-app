import {
    ListCardNewDiv,
    ItemNormalCard,
    InnerCard,
    InfoCate,
    IcoCate,
    TxtCate,
    LinkItem,
    TitCard,
    WrapThumb,
    ThumbImg,
    InfoCard,
    TxtKeyword,
    BtnShare
} from "../../../styles/pages/service/service.styles"

export const businessData = [
    {
        category: "비즈니스",
        icon: "https://t1.kakaocdn.net/kakaocorp/kakaocorp/admin/65659472017800001.png?type=thumb&opt=C72x72.fwebp",
        title: "요즘 일하는 방식, <br />카카오워크",
        image:
            "https://t1.kakaocdn.net/thumb/C630x354.fwebp.q100/?fname=https%3A%2F%2Ft1.kakaocdn.net%2Fkakaocorp%2Fkakaocorp%2Fadmin%2Fservice%2F79b14009017900001.jpg",
        keywords: ["ai", "비즈니스", "언택트", "업무메신저", "카카오워크"],
    },
    {
        category: "비즈니스",
        icon: "https://t1.kakaocdn.net/kakaocorp/kakaocorp/admin/65659472017800001.png?type=thumb&opt=C72x72.fwebp",
        title: "더 편한 모바일 생활의 시작, <br /> 카카오톡 채널",
        image: "https://t1.kakaocdn.net/thumb/C630x354.fwebp.q100/?fname=https%3A%2F%2Ft1.kakaocdn.net%2Fkakaocorp%2Fkakaocorp%2Fadmin%2Fservice%2F79b37ff6017900001.jpg",
        keywords: ["비즈니스", "채널", "카카오톡채널"],
    },
    {
        category: "비즈니스",
        icon: "https://t1.kakaocdn.net/kakaocorp/kakaocorp/admin/65659472017800001.png?type=thumb&opt=C72x72.fwebp",
        title: "비즈니스, 톡처럼 쉬워지다. <br /> 카카오비즈니스",
        image: "https://t1.kakaocdn.net/thumb/C630x354.fwebp.q100/?fname=https%3A%2F%2Ft1.kakaocdn.net%2Fkakaocorp%2Fkakaocorp%2Fadmin%2Fservice%2F7a392789017900001.jpg",
        keywords: ["비즈도구", "카카오광고", "카카오비즈니스", "카카오톡채널"],
    },
    {
        category: "비즈니스",
        icon: "https://t1.kakaocdn.net/kakaocorp/kakaocorp/admin/65659472017800001.png?type=thumb&opt=C72x72.fwebp",
        title: "클라우드 AI 컨택센터, <br /> 센터플로우",
        image: "https://t1.kakaocdn.net/thumb/C630x354.fwebp.q100/?fname=https%3A%2F%2Ft1.kakaocdn.net%2Fkakaocorp%2Fkakaocorp%2Fadmin%2Fservice%2Fc1b59e8e018e00001.png",
        keywords: ["AICC", "카카오엔터프라이즈", "카카오클라우드", "컨택센터", "클라우드AI컨택센터"],
    },
    {
        category: "비즈니스",
        icon: "https://t1.kakaocdn.net/kakaocorp/kakaocorp/admin/65659472017800001.png?type=thumb&opt=C72x72.fwebp",
        title: "다양한 기술, 플랫폼, 서비스를 <br /> 연결하는 <br /> 카카오클라우드",
        image: "https://t1.kakaocdn.net/thumb/C630x354.fwebp.q100/?fname=https%3A%2F%2Ft1.kakaocdn.net%2Fkakaocorp%2Fkakaocorp%2Fadmin%2Fservice%2F78d09478017900001.jpeg",
        keywords: ["B2B", "기업솔루션", "카카오엔터프라이즈", "카카오클라우드", "클라우드"],
    },
    {
        category: "비즈니스",
        icon: "https://t1.kakaocdn.net/kakaocorp/kakaocorp/admin/65659472017800001.png?type=thumb&opt=C72x72.fwebp",
        title: "AI 기반 비즈니스 플랫폼, <br /> 카카오 i 커넥트",
        image: "https://t1.kakaocdn.net/thumb/C630x354.fwebp.q100/?fname=https%3A%2F%2Ft1.kakaocdn.net%2Fkakaocorp%2Fkakaocorp%2Fadmin%2Fservice%2Faccbf7de017a00001.png",
        keywords: ["AI솔루션", "B2B", "비즈니스", "인공지능"],
    },
    {
        category: "비즈니스",
        icon: "https://t1.kakaocdn.net/kakaocorp/kakaocorp/admin/65659472017800001.png?type=thumb&opt=C72x72.fwebp",
        title: "함께 일하는 즐거움, <br /> 우리들의 아지트",
        image: "https://t1.kakaocdn.net/thumb/C630x354.fwebp.q100/?fname=https%3A%2F%2Ft1.kakaocdn.net%2Fkakaocorp%2Fkakaocorp%2Fadmin%2Fservice%2F7a700b7e017900001.jpg",
        keywords: ["기업문화", "비즈니스", "아지트", "업무플랫폼", "커뮤니케이션"],
    },
];

export default function Business() {
    return (
        <>
            {businessData.map((item, index) => (
                <ListCardNewDiv key={index}>
                    <ItemNormalCard>
                        <InnerCard>
                            <InfoCate>
                                <IcoCate src={item.icon} />
                                <TxtCate>{item.category}</TxtCate>
                            </InfoCate>

                            <LinkItem>
                                <TitCard dangerouslySetInnerHTML={{ __html: item.title }} />
                                <WrapThumb>
                                    <ThumbImg src={item.image} />
                                </WrapThumb>
                            </LinkItem>

                            <InfoCard>
                                {item.keywords.map((keyword, i) => (
                                    <TxtKeyword key={i}>#{keyword}</TxtKeyword>
                                ))}
                            </InfoCard>
                        </InnerCard>

                        <BtnShare
                            viewBox="0 0 24 24"
                            xmlns="http://www.w3.org/2000/svg"
                        >
                            <g fill="none" fillRule="evenodd">
                                <path d="M0 0H24V24H0z"></path>
                                <g transform="translate(10 2)" fill="#000">
                                    <circle cx="2" cy="2" r="2"></circle>
                                    <circle cx="2" cy="10" r="2"></circle>
                                    <circle cx="2" cy="18" r="2"></circle>
                                </g>
                            </g>
                        </BtnShare>
                    </ItemNormalCard>
                </ListCardNewDiv>
            ))}
        </>
    )
}