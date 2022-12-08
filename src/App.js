import "./App.scss";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { Route, Routes, useParams } from "react-router-dom";
import IndexPage from "./Pages/IndexPage/IndexPage";
import ProductsPage from "./Pages/ProductsPage/ProductsPage";
import useFetchData from "./Hook/useFetchData";
import { myContext } from "./components/Context/Context";
import DetailsPage from "./Pages/DetailsPage/DetailsPage";

function App() {
  const [popularProduct] = useFetchData("trending", 1, "");
  const params = useParams();
  return (
    <myContext.Provider value={{ popularProduct, params }}>
      <Routes>
        <Route path="/" element={<IndexPage />} />
        <Route path="/shop-fashion/:category" element={<ProductsPage />} />
        <Route path="/product/:id" element={<DetailsPage />} />
      </Routes>
    </myContext.Provider>
  );
}

export default App;
