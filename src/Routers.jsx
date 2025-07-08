import Footer from "./components/Footer";
import Header from "./components/Header";
import Main from "./pages/Main";
import Culture from "./pages/about/Culture";
import History from "./pages/about/History";
import SubsidiaryCompany from "./pages/about/SubsidiaryCompany";
import NotFound from "./pages/NotFound";
import { HashRouter, BrowserRouter, Route, Routes } from "react-router-dom";

function Routers () {
    return (
        <BrowserRouter>
      <Header />
        <Routes>
          
          <Route path="/" element={<Main />} />
          <Route path="/about/culture" element={<Culture />} />
          <Route path="/about/history" element={<History />} />
          <Route path="/about/subsidiarycompany" element={<SubsidiaryCompany />} />
          <Route path="*" element={<NotFound />} />
          
        </Routes>
      <Footer />

      </BrowserRouter>
    )
}

export default Routers;