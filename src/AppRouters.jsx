import { BrowserRouter, Route, Routes } from "react-router-dom";
import Main from "./pages/main/Main";
import Culture from "./pages/about/Culture";
import History from "./pages/about/History";
import SubsidiaryCompany from "./pages/about/SubsidiaryCompany";
import Admin from "./pages/Admin";
import NotFound from "./pages/NotFound";
import Investment from "./Investment";

function AppRouters () {
    return (
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<Main />} />
                <Route path="/about/culture" element={<Culture />} />
                <Route path="/about/history" element={<History />} />
                <Route path="/about/subsidiarycompany" element={<SubsidiaryCompany />} />
                <Route path="/admin" element={<Admin />} />
                <Route path="*" element={<NotFound />} />
                <Route path="/ir/main" element={<Investment />} />
            </Routes>  
        </BrowserRouter>
    )
}

export default AppRouters;