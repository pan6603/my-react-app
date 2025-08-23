import { 
    DocMain,
    SectionRelation,
    SectionNews,
    SectionVisual,
    SectionRelationTitle,
    ListRelation,
    ListRelationItem,
    LinkRelation,
    WrapRelationFirst,
    WrapRelationTwo,
    WrapRelationThird,
    TitRelation,
    TxtSub,
    TxtGoto,
    SectionNewsTitle,
    WrapBoard,
    WrapNews,
    LinkAllDiv,
    LinkAll,
    ListNews,
    LinkNewsDiv,
    InnerNews,
    BoxInfo,
    BadgeNews,
    TxtDate,
    TitNews,
    ListTag,
    ListTagItem,
    BoxBoard,
    TitBoard,
    ListBoard,
    LinkBoard,
    InnerBoard,
    TxtSubDiv,
    TxtEm,
    BorderLine,
    TxtSubDate
} from "../../styles/ir/main/InverstmentMain.styles"

function InverstmentMain() {
    return (
        <DocMain>
            <SectionVisual>카카오 비전</SectionVisual>
            <SectionNews>
                <SectionNewsTitle>카카오 주요현황</SectionNewsTitle>
                <WrapBoard>
                    <BoxBoard>
                        <TitBoard>주주총회</TitBoard>
                        <ListBoard>
                            <LinkBoard>
                                <InnerBoard>
                                    <TxtEm>주주총회</TxtEm>
                                    <TxtSubDiv>바로가기</TxtSubDiv>
                                </InnerBoard>
                            </LinkBoard>
                            <BorderLine />
                            <LinkBoard>
                                <InnerBoard>
                                    <TxtEm>주주환원</TxtEm>
                                    <TxtSubDiv>바로가기</TxtSubDiv>
                                </InnerBoard>
                            </LinkBoard>
                        </ListBoard>
                    </BoxBoard>
                    <BoxBoard>
                        <TitBoard>IR 행사</TitBoard>
                        <ListBoard>
                            <LinkBoard>
                                <InnerBoard>
                                    <TxtEm>다올투자증권 국내 NDR</TxtEm>
                                    <TxtSubDate>2025-08-18</TxtSubDate>
                                </InnerBoard>
                            </LinkBoard>
                            <BorderLine />
                            <LinkBoard>
                                <InnerBoard>
                                    <TxtEm>메리츠증권 국내 NDR</TxtEm>
                                    <TxtSubDate>2025-08-13</TxtSubDate>
                                </InnerBoard>
                            </LinkBoard>
                        </ListBoard>
                    </BoxBoard>
                    <BoxBoard>
                        <TitBoard>최근 제출 보고서</TitBoard>
                        <ListBoard>
                            <LinkBoard>
                                <InnerBoard>
                                    <TxtEm>감사(검토)보고서</TxtEm>
                                    <TxtSubDiv>바로가기</TxtSubDiv>
                                </InnerBoard>
                            </LinkBoard>
                            <BorderLine />
                            <LinkBoard>
                                <InnerBoard>
                                    <TxtEm>사업(분·반기)보고서</TxtEm>
                                    <TxtSubDiv>바로가기</TxtSubDiv>
                                </InnerBoard>
                            </LinkBoard>
                        </ListBoard>
                    </BoxBoard>
                </WrapBoard>
                <WrapNews>
                    <ListNews>
                        <LinkNewsDiv>
                            <InnerNews>
                                <BoxInfo>
                                    <BadgeNews>보도자료</BadgeNews>
                                    <TxtDate>2025.08.21</TxtDate>
                                </BoxInfo>
                                <TitNews>카카오, ‘2025 찾아가는 카카오 클래스’ 오프라인 과정 참가자 모집</TitNews>
                                <ListTag>
                                    <ListTagItem>#카카오클래스</ListTagItem>
                                    <ListTagItem>#카카오</ListTagItem>
                                    <ListTagItem>#카카오채널</ListTagItem>
                                </ListTag>
                            </InnerNews>
                        </LinkNewsDiv>
                        <LinkNewsDiv>
                            <InnerNews>
                                <BoxInfo>
                                    <BadgeNews>보도자료</BadgeNews>
                                    <TxtDate>2025.08.20</TxtDate>
                                </BoxInfo>
                                <TitNews>
                                    카카오, ‘사이좋은 디지털 세상’ 10주년 맞아 AI 맞춤형 교육으로 개편···
                                    <br />
                                    2025년 2학기 참여 학교 ...
                                </TitNews>
                                <ListTag>
                                    <ListTagItem>#더가깝게카카오</ListTagItem>
                                    <ListTagItem>#사이좋은디지털세상</ListTagItem>
                                    <ListTagItem>#카카오 ...</ListTagItem>                
                                </ListTag>
                            </InnerNews>
                        </LinkNewsDiv>
                        <LinkNewsDiv>
                            <InnerNews>
                                <BoxInfo>
                                    <BadgeNews>보도자료</BadgeNews>
                                    <TxtDate>2025.08.14</TxtDate>
                                </BoxInfo>
                                <TitNews>
                                    카카오, ‘카카오테크 캠퍼스 아이디어톤’으로 전국 5개 국립대 손잡고 지역 기술 인재 양성 박차
                                </TitNews>
                                <ListTag>
                                    <ListTagItem>#ESG</ListTagItem>
                                    <ListTagItem>#기술인재양성</ListTagItem>
                                    <ListTagItem>#카카오테크 캠퍼스</ListTagItem>                
                                </ListTag>
                            </InnerNews>
                        </LinkNewsDiv>
                    </ListNews>
                </WrapNews>
                <LinkAllDiv>
                    <LinkAll>보도자료 전체보기</LinkAll>
                </LinkAllDiv>
            </SectionNews>
            <SectionRelation>
                <SectionRelationTitle>필요한 미래를 만드는 카카오</SectionRelationTitle>
                <ListRelation>
                    <ListRelationItem>
                        <LinkRelation>
                            <WrapRelationFirst>
                                <TitRelation>IR 미팅 예약</TitRelation>
                                <TxtSub>투자정보의 이해를 도와줄 커뮤니케이션 채널</TxtSub>
                                <TxtGoto>바로가기</TxtGoto>
                            </WrapRelationFirst>
                        </LinkRelation>
                    </ListRelationItem>
                    <ListRelationItem>
                        <LinkRelation>
                            <WrapRelationTwo>
                                <TitRelation>기업지배구조헌장</TitRelation>
                                <TxtSub>카카오 기업지배구조 헌장 확인하기</TxtSub>
                                <TxtGoto>바로가기</TxtGoto>
                            </WrapRelationTwo>
                        </LinkRelation>
                    </ListRelationItem>
                    <ListRelationItem>
                        <LinkRelation>
                            <WrapRelationThird>
                                <TitRelation>기업사이트</TitRelation>
                                <TxtSub>더 나은 세상을 만드는 카카오의 기업사이트</TxtSub>
                                <TxtGoto>바로가기</TxtGoto>
                            </WrapRelationThird>
                        </LinkRelation>
                    </ListRelationItem>
                </ListRelation>
                </SectionRelation>
        </DocMain>
    )
}

export default InverstmentMain