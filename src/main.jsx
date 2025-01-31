import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { BrowserRouter, Route, Routes } from "react-router";

import "./index.css";
import Home from "./components/Home/Home.jsx";
import MainLayout from "./layouts/MainLayout.jsx";
import DetailsLayout from "./layouts/DetailsLayout.jsx";
import DashboardLayout from "./layouts/DashboardLayout.jsx";
import CartContainer from "./components/CartContainer/CartContainer.jsx";
import WishListContainer from "./components/WishListContainer/WishListContainer.jsx";
import CartProvider from "./providers/CartProvider.jsx";
import WishListProvider from "./providers/WishListProvider.jsx";

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <BrowserRouter>
      <CartProvider>
        <WishListProvider>
          <Routes>
            <Route path="/" element={<MainLayout />}>
              <Route index element={<Home />}></Route>
            </Route>
            <Route path="details/:id" element={<DetailsLayout />} />
            <Route path="/dashboard" element={<DashboardLayout />}>
              <Route path="cart" element={<CartContainer />} />
              <Route path="wishlist" element={<WishListContainer />} />
            </Route>
          </Routes>
        </WishListProvider>
      </CartProvider>
    </BrowserRouter>
  </StrictMode>
);
