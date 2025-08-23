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
    TxtGoto
} from "../../styles/ir/main/InverstmentMain.styles"

function InverstmentMain() {
    return (
        <DocMain>
            <SectionVisual>카카오 비전</SectionVisual>
            <SectionNews>카카오 주요현황</SectionNews>
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