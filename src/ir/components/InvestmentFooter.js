import { 
    DocFooter,
    ListMain,
    ListMainItem,
    ListSubTitle,
    ListSub,
    ListSubMenuDiv,
    ListSubMenuLink
} from "../../styles/ir/main/InverstmentFooter.styles"

function InvestmentFooter() {
    return (
        <DocFooter>
            <ListMain>
                <ListMainItem>
                    <ListSubTitle>기업지배구조</ListSubTitle>
                    <ListSub>
                        <ListSubMenuDiv>
                            <ListSubMenuLink>주주구성</ListSubMenuLink>
                        </ListSubMenuDiv>
                        <ListSubMenuDiv>
                            <ListSubMenuLink>주주총회</ListSubMenuLink>
                        </ListSubMenuDiv>
                        <ListSubMenuDiv>
                            <ListSubMenuLink>이사회</ListSubMenuLink>
                        </ListSubMenuDiv>
                        <ListSubMenuDiv>
                            <ListSubMenuLink>규정</ListSubMenuLink>
                        </ListSubMenuDiv>
                        <ListSubMenuDiv>
                            <ListSubMenuLink>지배구조</ListSubMenuLink>
                        </ListSubMenuDiv>
                    </ListSub>
                </ListMainItem>
                <ListMainItem>
                    <ListSubTitle>주식정보</ListSubTitle>
                    <ListSub>
                        <ListSubMenuDiv>
                            <ListSubMenuLink>주가정보</ListSubMenuLink>
                        </ListSubMenuDiv>
                        <ListSubMenuDiv>
                            <ListSubMenuLink>주주환원</ListSubMenuLink>
                        </ListSubMenuDiv>
                    </ListSub>
                </ListMainItem>
                <ListMainItem>
                    <ListSubTitle>재무정보</ListSubTitle>
                    <ListSub>
                        <ListSubMenuDiv>
                            <ListSubMenuLink>연결재무제표</ListSubMenuLink>
                        </ListSubMenuDiv>
                        <ListSubMenuDiv>
                            <ListSubMenuLink>별도재무제표</ListSubMenuLink>
                        </ListSubMenuDiv>
                        <ListSubMenuDiv>
                            <ListSubMenuLink>신용등급</ListSubMenuLink>
                        </ListSubMenuDiv>
                    </ListSub>
                </ListMainItem>
                <ListMainItem>
                    <ListSubTitle>IR 자료</ListSubTitle>
                    <ListSub>
                        <ListSubMenuDiv>
                            <ListSubMenuLink>CEO 메시지</ListSubMenuLink>
                        </ListSubMenuDiv>
                        <ListSubMenuDiv>
                            <ListSubMenuLink>실적발표</ListSubMenuLink>
                        </ListSubMenuDiv>
                        <ListSubMenuDiv>
                            <ListSubMenuLink>IR 행사</ListSubMenuLink>
                        </ListSubMenuDiv>
                        <ListSubMenuDiv>
                            <ListSubMenuLink>IR 미팅예약</ListSubMenuLink>
                        </ListSubMenuDiv>
                        <ListSubMenuDiv>
                            <ListSubMenuLink>증권사커버리지</ListSubMenuLink>
                        </ListSubMenuDiv>
                    </ListSub>
                </ListMainItem>
                <ListMainItem>
                    <ListSubTitle>공시정보</ListSubTitle>
                    <ListSub>
                        <ListSubMenuDiv>
                            <ListSubMenuLink>공시사항</ListSubMenuLink>
                        </ListSubMenuDiv>
                        <ListSubMenuDiv>
                            <ListSubMenuLink>사업보고서</ListSubMenuLink>
                        </ListSubMenuDiv>
                        <ListSubMenuDiv>
                            <ListSubMenuLink>감사 및 검토보고서</ListSubMenuLink>
                        </ListSubMenuDiv>
                    </ListSub>
                </ListMainItem>
                <ListMainItem>
                    <ListSubTitle>공고</ListSubTitle>
                    <ListSub>
                        <ListSubMenuDiv>
                            <ListSubMenuLink>공고사항</ListSubMenuLink>
                        </ListSubMenuDiv>
                        <ListSubMenuDiv>
                            <ListSubMenuLink>주주제안권</ListSubMenuLink>
                        </ListSubMenuDiv>
                    </ListSub>
                </ListMainItem>
            </ListMain>
        </DocFooter>
    )
}

export default InvestmentFooter