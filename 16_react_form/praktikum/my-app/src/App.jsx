import { BrowserRouter, Route, Routes } from "react-router-dom";
import LandingPage from "./landingPage.jsx";
import CreateProductPage from "./createProductPage";
import NotFound from "./components/not-found/notFound.jsx";
import DetailProduct from "./Pages/detail-product/detailProduct.jsx";
import { useState } from "react";


function App() {
   const [data, setData] = useState([]);
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<LandingPage />} />
        <Route path="/createProduct" element={<CreateProductPage  data={data} setData={setData}/>} />
        <Route path="/detailProduct/:id" element={<DetailProduct data={data} />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;