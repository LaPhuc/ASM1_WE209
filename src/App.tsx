import "./App.css";

import { Route, Routes } from "react-router-dom";

import { ForgotPassword, Login, Register } from "@/page/Base/Account/index";

import LayoutBase from "./components/Layout/Base";
import CartPage from "./page/Base/Cart";
import HomePage from "./page/Base/Home";
import PageNotFound from "./page/PageNotFound";
import Contact from "./page/Base/Contact";
import AdminLayout from "./components/Layout/admin";
import ProductAdd from "./page/Admin/Product/Product-add";

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
      </Route>
      <Route path="/admin" element={<AdminLayout />}>
        <Route path="products/add" element={<ProductAdd/>}/>
      </Route>
      <Route path="*" element={<PageNotFound />} />
    </Routes>
  );
}

export default App;
