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

export const socialImpactData = [
    {
        category: "소셜임팩트",
        icon: "https://t1.kakaocdn.net/kakaocorp/kakaocorp/admin/65659472017800001.png?type=thumb&opt=C72x72.fwebp",
        title: "함께 만드는 더 좋은 세상, <br />카카오같이가치",
        image:
            "https://t1.kakaocdn.net/thumb/C630x354.fwebp.q100/?fname=https%3A%2F%2Ft1.kakaocdn.net%2Fkakaocorp%2Fkakaocorp%2Fadmin%2Fservice%2F2633650c018a00001.png",
        keywords: ["기부", "마음챙김", "사회변화", "소셜임팩트", "카카오같이가치"],
    }
];


export default function SocialImpact() {
    return (
        <>
            {socialImpactData.map((item, index) => (
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

