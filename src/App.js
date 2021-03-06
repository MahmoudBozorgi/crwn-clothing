import React from "react";
import { Route, Routes } from "react-router-dom";
import ShopPage from "./pages/shop/shop.component";
import "./App.css";

import HomePage from "./pages/homepage/homepage.component";

function App() {
  return (
    <div>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/shop" element={<ShopPage />} />
      </Routes>
    </div>
  );
}

export default App;
