
import { Route, Routes } from "react-router-dom";
import "./App.css";
import CardProducts from "./components/cardProducts/CardProducts";
import CategoryPage from "./pages/categoriesPage/CategoryPage";
import Main from "./pages/home/Main";
import LoginPage from "./pages/logPage/LoginPage";
import RegPage from "./pages/logPage/RegPage";
import SingleProduct from "./pages/singleproduct/SingleProduct";

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/reg" element={<RegPage />} />
        <Route path="/" element={<LoginPage />} />

        <Route path="/main" element={<Main />}>
          <Route index element={<CardProducts />} />
          <Route path="/main/category/:id" element={<CategoryPage />} />
          <Route path="/main/category/meta/:id" element={<SingleProduct />} />
        </Route>

        <Route path="*" element={<div>page not found</div>} />
      </Routes>
    </div>
  );
}

export default App;
