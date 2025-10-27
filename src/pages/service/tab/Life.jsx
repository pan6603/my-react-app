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

export const lifeData = [
    {
        category: "일상 편의",
        icon: "https://t1.kakaocdn.net/kakaocorp/kakaocorp/admin/65659472017800001.png?type=thumb&opt=C72x72.fwebp",
        title: "같지만 다른 은행, <br /> 카카오뱅크",
        image: "https://t1.kakaocdn.net/thumb/C630x354.fwebp.q100/?fname=https%3A%2F%2Ft1.kakaocdn.net%2Fkakaocorp%2Fkakaocorp%2Fadmin%2Fservice%2Fa3ef9f77017900001.jpg",
        keywords: ["같지만다른은행", "은행", "인터넷전문은행", "카카오뱅크"],
    },

    {
        category: "일상 편의",
        icon: "https://t1.kakaocdn.net/kakaocorp/kakaocorp/admin/65659472017800001.png?type=thumb&opt=C72x72.fwebp",
        title: "좋은 곳을 함께 찾아가는 지도, <br />카카오맵",
        image: "https://t1.kakaocdn.net/thumb/C630x354.fwebp.q100/?fname=https%3A%2F%2Ft1.kakaocdn.net%2Fkakaocorp%2Fkakaocorp%2Fadmin%2Fservice%2Fa8bc22bb017900001.jpg",
        keywords: ["모빌리티", "지도", "카카오맵", "카카오버스", "카카오지하철"],
    },

    {
        category: "일상 편의",
        icon: "https://t1.kakaocdn.net/kakaocorp/kakaocorp/admin/65659472017800001.png?type=thumb&opt=C72x72.fwebp",
        title: "모든 이동을 위한,  <br /> 카카오 T",
        image: "https://t1.kakaocdn.net/thumb/C630x354.fwebp.q100/?fname=https%3A%2F%2Ft1.kakaocdn.net%2Fkakaocorp%2Fkakaocorp%2Fadmin%2Fservice%2Ff34e0634018000001.jpg",
        keywords: ["maas", "모빌리티", "이동플랫폼", "카카오T"],
    },

    {
        category: "일상 편의",
        icon: "https://t1.kakaocdn.net/kakaocorp/kakaocorp/admin/65659472017800001.png?type=thumb&opt=C72x72.fwebp",
        title: "정확하고 즐거운  <br /> 운전 도우미, 카카오내비",
        image: "https://t1.kakaocdn.net/thumb/C630x354.fwebp.q100/?fname=https%3A%2F%2Ft1.kakaocdn.net%2Fkakaocorp%2Fkakaocorp%2Fadmin%2Fservice%2F7a339b98017900001.jpg",
        keywords: ["길안내", "내비게이션", "내차관리", "모빌리티", "카카오내비"],
    },

    {
        category: "일상 편의",
        icon: "https://t1.kakaocdn.net/kakaocorp/kakaocorp/admin/65659472017800001.png?type=thumb&opt=C72x72.fwebp",
        title: "말 한마디로 편리해지는 일상, <br />헤이카카오",
        image: "https://t1.kakaocdn.net/thumb/C630x354.fwebp.q100/?fname=https%3A%2F%2Ft1.kakaocdn.net%2Fkakaocorp%2Fkakaocorp%2Fadmin%2Fservice%2Fa8bdf743017900001.jpg",
        keywords: ["내비게이션", "디스플레이", "모빌리티", "스마트홈", "헤이카카오"],
    },

    {
        category: "일상 편의",
        icon: "https://t1.kakaocdn.net/kakaocorp/kakaocorp/admin/65659472017800001.png?type=thumb&opt=C72x72.fwebp",
        title: "마음놓고 금융하다, <br /> 카카오페이",
        image: "https://t1.kakaocdn.net/thumb/C630x354.fwebp.q100/?fname=https%3A%2F%2Ft1.kakaocdn.net%2Fkakaocorp%2Fkakaocorp%2Fadmin%2Fservice%2Fad87abda017900001.jpg",
        keywords: ["결제", "금융", "송금", "카카오페이", "테크핀"],
    },

];

export default function Life() {
    return (
        <>
            {lifeData.map((item, index) => (
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