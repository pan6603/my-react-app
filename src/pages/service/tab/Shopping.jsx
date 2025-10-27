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

export const shoppingData = [
    {
        category: "쇼핑",
        icon: "https://t1.kakaocdn.net/kakaocorp/kakaocorp/admin/65659472017800001.png?type=thumb&opt=C72x72.fwebp",
        title: "마음을 전하는 가장 쉬운 방법, <br /> 카카오톡 선물하기",
        image:
            "https://t1.kakaocdn.net/thumb/C630x354.fwebp.q100/?fname=https%3A%2F%2Ft1.kakaocdn.net%2Fkakaocorp%2Fkakaocorp%2Fadmin%2Fservice%2F798cb262017900001.jpg",
        keywords: ["b2b선물", "비즈니스선물", "선물하기", "카카오톡", "카카오톡선물하기"],
    },

    {
        category: "쇼핑",
        icon: "https://t1.kakaocdn.net/kakaocorp/kakaocorp/admin/65659472017800001.png?type=thumb&opt=C72x72.fwebp",
        title: "쇼핑을 톡하다! <br /> 톡딜",
        image:
            "https://t1.kakaocdn.net/thumb/C630x354.fwebp.q100/?fname=https%3A%2F%2Ft1.kakaocdn.net%2Fkakaocorp%2Fkakaocorp%2Fadmin%2Fservice%2Fe32f3cf5019300001.png",
        keywords: ["커머스", "톡딜", "톡스토어"],
    },

    {
        category: "쇼핑",
        icon: "https://t1.kakaocdn.net/kakaocorp/kakaocorp/admin/65659472017800001.png?type=thumb&opt=C72x72.fwebp",
        title: "여러분의 참여로 완성되는 <br />카카오쇼핑라이브",
        image:
            "https://t1.kakaocdn.net/thumb/C630x354.fwebp.q100/?fname=https%3A%2F%2Ft1.kakaocdn.net%2Fkakaocorp%2Fkakaocorp%2Fadmin%2Fservice%2Fddbfa9c0018900001.png",
        keywords: ["라이브커머스", "카쇼라스튜디오", "카카오쇼핑라이브"],
    },

    {
        category: "쇼핑",
        icon: "https://t1.kakaocdn.net/kakaocorp/kakaocorp/admin/65659472017800001.png?type=thumb&opt=C72x72.fwebp",
        title: "나를 표현하는 쇼핑, 지그재그",
        image: "https://t1.kakaocdn.net/thumb/C630x354.fwebp.q100/?fname=https%3A%2F%2Ft1.kakaocdn.net%2Fkakaocorp%2Fkakaocorp%2Fadmin%2Fservice%2Ff62cbd72017a00001.jpg",
        keywords: ["개인화추천", "쇼핑", "스타일", "지그재그", "패션"],
    },

    {
        category: "쇼핑",
        icon: "https://t1.kakaocdn.net/kakaocorp/kakaocorp/admin/65659472017800001.png?type=thumb&opt=C72x72.fwebp",
        title: "더 나은 내일을 만드는 주문, <br />카카오메이커스",
        image: "https://t1.kakaocdn.net/thumb/C630x354.fwebp.q100/?fname=https%3A%2F%2Ft1.kakaocdn.net%2Fkakaocorp%2Fkakaocorp%2Fadmin%2Fservice%2F7c45d580018300001.png",
        keywords: ["공동주문", "주문제작", "카카오메이커스", "커머스", "큐레이션"],
    },

    {
        category: "쇼핑",
        icon: "https://t1.kakaocdn.net/kakaocorp/kakaocorp/admin/65659472017800001.png?type=thumb&opt=C72x72.fwebp",
        title: "현명한 쇼핑 생활의 시작, <br />쇼핑하우",
        image: "https://t1.kakaocdn.net/thumb/C630x354.fwebp.q100/?fname=https%3A%2F%2Ft1.kakaocdn.net%2Fkakaocorp%2Fkakaocorp%2Fadmin%2Fservice%2F798b5a56017900001.jpg",
        keywords: ["쇼핑", "쇼핑하우"],
    },



];

export default function Shopping() {
    return (
        <>
            {shoppingData.map((item, index) => (
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