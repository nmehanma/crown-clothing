import { Routes, Route } from "react-router-dom";
import CategoriesPreview from "../categories-preview/categories-preview.component";

import "./shop.styles.scss";

const Shop = () => {
  // console.log(products[0].id);
  return (
    <Routes>
      <Route index element={CategoriesPreview} />
    </Routes>
  );
};

export default Shop;
