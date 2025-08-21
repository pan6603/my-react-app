import { 
    DocHeader,
    InnerHeader,
    DocTitle,
    DocGnbNav,
    BtnLangViewPc,
    DocTitleLink
} from "../../styles/ir/main/InverstmentHeader.styles"


function InverstmentHeader() {
    return (
        <DocHeader>
            <InnerHeader>
                <DocTitle>
                    <DocTitleLink href="/ir/main">
                        
                    </DocTitleLink>
                </DocTitle>
                <DocGnbNav></DocGnbNav>
                <BtnLangViewPc></BtnLangViewPc>
            </InnerHeader>
        </DocHeader>
    )
}

export default InverstmentHeader