import "./App.css";

import { Route, Routes } from "react-router-dom";

import { ForgotPassword, Login, Register } from "@/page/Base/Account/index";

import AdminLayout from "./components/Layout/Admin";
import LayoutBase from "./components/Layout/Base";
import Dashboard from "./page/Admin/dashboard";
import AddProduct from "./page/Admin/Products/Add";
import EditProduct from "./page/Admin/Products/Edit";
import ListProducts from "./page/Admin/Products/List";
import AboutUs from "./page/Base/AboutUs";
import ResetPassword from "./page/Base/Account/ResetPassword";
import CartPage from "./page/Base/Cart";
import Contact from "./page/Base/Contact";
import HomePage from "./page/Base/Home";
import NewsPage from "./page/Base/News";
import ProductPage from "./page/Base/Product";
import PageNotFound from "./page/PageNotFound";

function App() {
  return (
    <Routes>
      <Route path="/" element={<LayoutBase />}>
        <Route index element={<HomePage />} />
        <Route path="login" element={<Login />} />
        <Route path="forgotPassword" element={<ForgotPassword />} />
        <Route path="register" element={<Register />} />
        <Route path="product" element={<ProductPage />} />
        <Route path="news" element={<NewsPage />} />
        <Route path="login" element={<Login />} />
        <Route path="contact" element={<Contact />} />
        <Route path="aboutUs" element={<AboutUs />} />
        <Route path="cart" element={<CartPage />} />
        <Route path="resetPassword" element={<ResetPassword />} />
        <Route path="resetPassword/:id" element={<ResetPassword />} />
      </Route>
      <Route path="/admin" element={<AdminLayout />}>
        <Route index element={<Dashboard />} />
        <Route path="products" element={<ListProducts />} />
        <Route path="products/add" element={<AddProduct />} />
        <Route path="products/:id/edit" element={<EditProduct />} />
      </Route>
      <Route path="*" element={<PageNotFound />} />
    </Routes>
  );
}

export default App;
