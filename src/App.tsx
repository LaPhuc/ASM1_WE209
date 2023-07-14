import "./App.css";

import { Route, Routes } from "react-router-dom";

import { ForgotPassword, Login, Register } from "@/page/Base/Account/index";

import LayoutBase from "./components/Layout/Base";
import CartPage from "./page/Base/Cart";
import HomePage from "./page/Base/Home";
import PageNotFound from "./page/PageNotFound";
import AdminLayout from "@/components/Layout/Admin/index";
import Contact from "./page/Base/Contact";
import ProductPage from "./page/Base/Product";

function App() {
  return (
    <Routes>
      <Route path="/" element={<LayoutBase />}>
        <Route index element={<HomePage />} />
        <Route path="/login" element={<Login />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/forgotPassword" element={<ForgotPassword />} />
        <Route path="/register" element={<Register />} />
        <Route path="/cart" element={<CartPage />} />
        <Route path="product" element={<ProductPage />} />
      </Route>
      <Route path="/admin" element={<AdminLayout />}></Route>
      <Route path="*" element={<PageNotFound />} />
    </Routes>
  );
}

export default App;
