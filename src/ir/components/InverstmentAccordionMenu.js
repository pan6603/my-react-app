import {
    ListMain,
    ListMainItem,
    ListSubTitle,
    ListSub,
    ListSubMenuDiv
} from "../../styles/ir/main/InverstmentAccordionMenu.styles";
import { useState } from "react";

function InverstmentAccordionMenu() {
    const [isCorporationMenu, setIsCorporationMenu] = useState(false);
    const [isStockMenu, setIsStockMenu] = useState(false);
    const [isFinanceMenu, setIsFinanceMenu] = useState(false);
    const [isIrMenu, setIsIrMenu] = useState(false);
    const [isDisclosureInfoMenu, setIsDisclosureInfoMenu] = useState(false);
    const [isOfficialMenu, setIsOfficialMenu] = useState(false);

    return (
        <>
            <ListMain>
                <ListMainItem>
                    <ListSubTitle bg={isCorporationMenu} onClick={() => setIsCorporationMenu(prev => !prev)}>기업지배구조</ListSubTitle>
                    {isCorporationMenu && 
                        <ListSub>
                            <ListSubMenuDiv>주주구성</ListSubMenuDiv>
                            <ListSubMenuDiv>주주총회</ListSubMenuDiv>
                            <ListSubMenuDiv>이사회</ListSubMenuDiv>
                            <ListSubMenuDiv>규정</ListSubMenuDiv>
                            <ListSubMenuDiv>지배구조</ListSubMenuDiv>
                        </ListSub>
                    }
                </ListMainItem>

                <ListMainItem>
                    <ListSubTitle bg={isStockMenu} onClick={() => setIsStockMenu(prev => !prev)}>주식정보</ListSubTitle>
                    {isStockMenu && 
                        <ListSub>
                            <ListSubMenuDiv>주주정보</ListSubMenuDiv>
                            <ListSubMenuDiv>주주환원</ListSubMenuDiv>
                        </ListSub>
                    }
                </ListMainItem>

                <ListMainItem>
                    <ListSubTitle bg={isFinanceMenu} onClick={() => setIsFinanceMenu(prev => !prev)}>재무정보</ListSubTitle>
                    {isFinanceMenu && 
                        <ListSub>
                            <ListSubMenuDiv>연결재무재표</ListSubMenuDiv>
                            <ListSubMenuDiv>별도재무재표</ListSubMenuDiv>
                            <ListSubMenuDiv>신용등급</ListSubMenuDiv>
                        </ListSub>
                    }
                </ListMainItem>

                <ListMainItem>
                    <ListSubTitle bg={isIrMenu} onClick={() => setIsIrMenu(prev => !prev)}>IR 자료</ListSubTitle>
                    {isIrMenu && 
                        <ListSub>
                            <ListSubMenuDiv>CEO 메세지</ListSubMenuDiv>
                            <ListSubMenuDiv>실적발표</ListSubMenuDiv>
                            <ListSubMenuDiv>IR 행사</ListSubMenuDiv>
                            <ListSubMenuDiv>IR 미팅예약</ListSubMenuDiv>
                            <ListSubMenuDiv>증권사커버리지</ListSubMenuDiv>
                        </ListSub>
                    }
                </ListMainItem>

                <ListMainItem>
                    <ListSubTitle bg={isDisclosureInfoMenu} onClick={() => setIsDisclosureInfoMenu(prev => !prev)}>공시정보</ListSubTitle>
                    {isDisclosureInfoMenu && 
                        <ListSub>
                            <ListSubMenuDiv>공시사항</ListSubMenuDiv>
                            <ListSubMenuDiv>사업보고서</ListSubMenuDiv>
                            <ListSubMenuDiv>감사 및 검토보고서</ListSubMenuDiv>
                        </ListSub>
                    }
                </ListMainItem>

                <ListMainItem>
                    <ListSubTitle bg={isOfficialMenu} onClick={() => setIsOfficialMenu(prev => !prev)}>공고</ListSubTitle>
                    {isOfficialMenu && 
                        <ListSub>
                            <ListSubMenuDiv>이용약관</ListSubMenuDiv>
                            <ListSubMenuDiv>개인정보처리방침</ListSubMenuDiv>
                        </ListSub>
                    }
                </ListMainItem>
            </ListMain>
        </>
    )
}

export default InverstmentAccordionMenu;