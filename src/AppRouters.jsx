import { BrowserRouter, Route, Routes } from "react-router-dom";
import Header from "./components/Header";
import Footer from "./components/Footer";
import Main from "./pages/main/Main";
import Culture from "./pages/about/Culture";
import History from "./pages/about/History";
import SubsidiaryCompany from "./pages/about/SubsidiaryCompany";
import Admin from "./pages/Admin";
import NotFound from "./pages/NotFound";

function AppRouters () {
    return (
        <BrowserRouter>
            <Header />
            <Routes>
                <Route path="/" element={<Main />} />
                <Route path="/about/culture" element={<Culture />} />
                <Route path="/about/history" element={<History />} />
                <Route path="/about/subsidiarycompany" element={<SubsidiaryCompany />} />
                <Route path="/admin" element={<Admin />} />
                <Route path="*" element={<NotFound />} />
            </Routes>
            <Footer />    
        </BrowserRouter>
    )
}

export default AppRouters;