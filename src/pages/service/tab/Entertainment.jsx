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

export const entertainmentData = [
    {
        category: "엔터테인먼트",
        icon: "https://t1.kakaocdn.net/kakaocorp/kakaocorp/admin/65659472017800001.png?type=thumb&opt=C72x72.fwebp",
        title: "세상 모든 이야기를 담다,<br />카카오페이지",
        image:
            "https://t1.kakaocdn.net/thumb/C630x354.fwebp.q100/?fname=https%3A%2F%2Ft1.kakaocdn.net%2Fkakaocorp%2Fkakaocorp%2Fadmin%2Fservice%2Fad52cc82017900001.jpg",
        keywords: ["기다리면무료", "엔터테인먼트", "웹소설", "웹툰", "카카오페이지"],
    },
    {
        category: "엔터테인먼트",
        icon: "https://t1.kakaocdn.net/kakaocorp/kakaocorp/admin/65659472017800001.png?type=thumb&opt=C72x72.fwebp",
        title: "오리지널 콘텐츠와 라이브를 즐길<br />수 있는, 카카오TV",
        image:
            "https://t1.kakaocdn.net/thumb/C630x354.fwebp.q100/?fname=https%3A%2F%2Ft1.kakaocdn.net%2Fkakaocorp%2Fkakaocorp%2Fadmin%2Fservice%2F7a22f8b4017900001.jpg",
        keywords: ["드라마", "라이브", "예능", "오리지널", "카카오TV"],
    },
    {
        category: "엔터테인먼트",
        icon: "https://t1.kakaocdn.net/kakaocorp/kakaocorp/admin/65659472017800001.png?type=thumb&opt=C72x72.fwebp",
        title: "Korea No.1 캐릭터,<br />카카오프렌즈",
        image:
            "https://t1.kakaocdn.net/thumb/C630x354.fwebp.q100/?fname=https%3A%2F%2Ft1.kakaocdn.net%2Fkakaocorp%2Fkakaocorp%2Fadmin%2Fservice%2Fa85d0594017900001.jpg",
        keywords: ["라이언", "리틀카카오프렌즈", "어피치", "춘식이", "카카오프렌즈"],
    },
    {
        category: "엔터테인먼트",
        icon: "https://t1.kakaocdn.net/kakaocorp/kakaocorp/admin/65659472017800001.png?type=thumb&opt=C72x72.fwebp",
        title: "세상에 없던 세상,<br />카카오웹툰",
        image:
            "https://t1.kakaocdn.net/thumb/C630x354.fwebp.q100/?fname=https%3A%2F%2Ft1.kakaocdn.net%2Fkakaocorp%2Fkakaocorp%2Fadmin%2Fservice%2Ffcf3da10017a00001.png",
        keywords: ["엔터테인먼트", "웹툰", "카카오웹툰", "콘텐츠"],
    },
    {
        category: "엔터테인먼트",
        icon: "https://t1.kakaocdn.net/kakaocorp/kakaocorp/admin/65659472017800001.png?type=thumb&opt=C72x72.fwebp",
        title: "내가 좋아할 음악들만,<br />멜론",
        image:
            "https://t1.kakaocdn.net/thumb/C630x354.fwebp.q100/?fname=https%3A%2F%2Ft1.kakaocdn.net%2Fkakaocorp%2Fkakaocorp%2Fadmin%2Fservice%2Fa8fa107c017900001.jpg",
        keywords: ["k팝", "mma", "멜론", "멜론차트", "뮤직앱"],
    },
    {
        category: "엔터테인먼트",
        icon: "https://t1.kakaocdn.net/kakaocorp/kakaocorp/admin/65659472017800001.png?type=thumb&opt=C72x72.fwebp",
        title: "새로운 세대에게 사랑받는, 니니즈",
        image:
            "https://t1.kakaocdn.net/thumb/C630x354.fwebp.q100/?fname=https%3A%2F%2Ft1.kakaocdn.net%2Fkakaocorp%2Fkakaocorp%2Fadmin%2Fservice%2F7e704120017900001.jpg",
        keywords: ["니니즈", "니니툰즈", "죠르디", "죠르디24시", "죠르디TV"],
    },
    {
        category: "엔터테인먼트",
        icon: "https://t1.kakaocdn.net/kakaocorp/kakaocorp/admin/65659472017800001.png?type=thumb&opt=C72x72.fwebp",
        title: "함께해요,<br />카카오게임즈",
        image:
            "https://t1.kakaocdn.net/thumb/C630x354.fwebp.q100/?fname=https%3A%2F%2Ft1.kakaocdn.net%2Fkakaocorp%2Fkakaocorp%2Fadmin%2Fservice%2Fa3ed2ecc017900001.jpg",
        keywords: ["pc온라인게임", "게임광고", "다음게임", "모바일게임", "카카오게임"],
    },
    {
        category: "엔터테인먼트",
        icon: "https://t1.kakaocdn.net/kakaocorp/kakaocorp/admin/65659472017800001.png?type=thumb&opt=C72x72.fwebp",
        title: "언제 어디서나 내 손 안에 펼쳐지는<br />콘텐츠 세상, 픽코마",
        image:
            "https://t1.kakaocdn.net/thumb/C630x354.fwebp.q100/?fname=https%3A%2F%2Ft1.kakaocdn.net%2Fkakaocorp%2Fkakaocorp%2Fadmin%2Fservice%2F7a444447017900001.jpg",
        keywords: ["만화", "소설", "웹툰", "콘텐츠", "픽코마"],
    },
];


export default function Entertainment() {
    return (
        <>
            {entertainmentData.map((item, index) => (
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

