import { 
    DocFooter,
    ListMain,
    ListMainItem,
    ListSubTitle,
    ListSub,
    ListSubMenuDiv,
    ListSubMenuLink
} from "../../styles/ir/main/InverstmentFooter.styles"
import { useTranslation } from "react-i18next";
import InverstmentAccordionMenu from "./InverstmentAccordionMenu";
import GithubFooterLink from "./GithubFooterLink";

function InvestmentFooter() {
    const { t } = useTranslation();

    return (
        <DocFooter>
            {/* 1023px 경우 아코디언 메뉴 만들기*/}
            <InverstmentAccordionMenu />
            <GithubFooterLink />


            <ListMain>
                <ListMainItem>
                    <ListSubTitle>{t("investment_footer.governance")}</ListSubTitle>
                    <ListSub>
                        <ListSubMenuDiv>
                            <ListSubMenuLink>
                                {t("investment_footer.shareholders")}
                            </ListSubMenuLink>
                        </ListSubMenuDiv>
                        <ListSubMenuDiv>
                            <ListSubMenuLink>
                                {t("investment_footer.general_meetings")}
                            </ListSubMenuLink>
                        </ListSubMenuDiv>
                        <ListSubMenuDiv>
                            <ListSubMenuLink>
                                {t("investment_footer.board")}
                            </ListSubMenuLink>
                        </ListSubMenuDiv>
                        <ListSubMenuDiv>
                            <ListSubMenuLink>                
                                {t("investment_footer.regulation")}
                            </ListSubMenuLink>
                        </ListSubMenuDiv>
                        <ListSubMenuDiv>
                            <ListSubMenuLink>
                                {t("investment_footer.governance")}
                            </ListSubMenuLink>
                        </ListSubMenuDiv>
                    </ListSub>
                </ListMainItem>
                <ListMainItem>
                    <ListSubTitle>
                        {t("investment_footer.stock_info")}
                    </ListSubTitle>
                    <ListSub>
                        <ListSubMenuDiv>
                            <ListSubMenuLink>
                                {t("investment_footer.stocks")}
                            </ListSubMenuLink>
                        </ListSubMenuDiv>
                        <ListSubMenuDiv>
                            <ListSubMenuLink>
                                {t("investment_footer.shareholder_return")}
                            </ListSubMenuLink>
                        </ListSubMenuDiv>
                    </ListSub>
                </ListMainItem>
                <ListMainItem>
                    <ListSubTitle>
                        {t("investment_footer.financial_info")}
                    </ListSubTitle>
                    <ListSub>
                        <ListSubMenuDiv>
                            <ListSubMenuLink>
                                {t("investment_footer.consolidated")}
                            </ListSubMenuLink>
                        </ListSubMenuDiv>
                        <ListSubMenuDiv>
                            <ListSubMenuLink>
                                {t("investment_footer.separate")}
                            </ListSubMenuLink>
                        </ListSubMenuDiv>
                        <ListSubMenuDiv>
                            <ListSubMenuLink>
                                {t("investment_footer.credit_ratings")}
                            </ListSubMenuLink>
                        </ListSubMenuDiv>
                    </ListSub>
                </ListMainItem>
                <ListMainItem>
                    <ListSubTitle>{t("investment_footer.ir")}</ListSubTitle>
                    <ListSub>
                        <ListSubMenuDiv>
                            <ListSubMenuLink>{t("investment_footer.ceo_message")}</ListSubMenuLink>
                        </ListSubMenuDiv>
                        <ListSubMenuDiv>
                            <ListSubMenuLink>{t("investment_footer.earnings_release")}</ListSubMenuLink>
                        </ListSubMenuDiv>
                        <ListSubMenuDiv>
                            <ListSubMenuLink>{t("investment_footer.events")}</ListSubMenuLink>
                        </ListSubMenuDiv>
                        <ListSubMenuDiv>
                            <ListSubMenuLink>{t("investment_footer.ir_meeting_reservation")}</ListSubMenuLink>
                        </ListSubMenuDiv>
                        <ListSubMenuDiv>
                            <ListSubMenuLink>{t("investment_footer.analyst_coverage")}</ListSubMenuLink>
                        </ListSubMenuDiv>
                    </ListSub>
                </ListMainItem>
                <ListMainItem>
                    <ListSubTitle>{t("investment_footer.disclosure")}</ListSubTitle>
                    <ListSub>
                        <ListSubMenuDiv>
                            <ListSubMenuLink>{t("investment_footer.disclosure_details")}</ListSubMenuLink>
                        </ListSubMenuDiv>
                        <ListSubMenuDiv>
                            <ListSubMenuLink>{t("investment_footer.business_report")}</ListSubMenuLink>
                        </ListSubMenuDiv>
                        <ListSubMenuDiv>
                            <ListSubMenuLink>{t("investment_footer.audit_report")}</ListSubMenuLink>
                        </ListSubMenuDiv>
                    </ListSub>
                </ListMainItem>
                <ListMainItem>
                    <ListSubTitle>{t("investment_footer.ir_news")}</ListSubTitle>
                    <ListSub>
                        <ListSubMenuDiv>
                            <ListSubMenuLink>{t("investment_footer.public_notice")}</ListSubMenuLink>
                        </ListSubMenuDiv>
                        <ListSubMenuDiv>
                            <ListSubMenuLink>{t("investment_footer.shareholder_proposal")}</ListSubMenuLink>
                        </ListSubMenuDiv>
                    </ListSub>
                </ListMainItem>
            </ListMain>
        </DocFooter>
    )
}

export default InvestmentFooter