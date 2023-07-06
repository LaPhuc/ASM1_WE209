import "./App.css";

import { Route, Routes } from "react-router-dom";

import { ForgotPassword, Login, Register } from "@/page/Account/index";

import LayoutBase from "./components/Layout/Base";
import CartPage from "./page/Cart";
import HomePage from "./page/Home";
import PageNotFound from "./page/PageNotFound";
import AdminLayout from "@/components/Layout/admin/index";

function App() {
  return (
    <Routes>
      <Route path="/" element={<LayoutBase />}>
        <Route index element={<HomePage />} />
        <Route path="/login" element={<Login />} />
        <Route path="/forgotPassword" element={<ForgotPassword />} />
        <Route path="/register" element={<Register />} />
        <Route path="/cart" element={<CartPage />} />
        <Route path="*" element={<PageNotFound />} />
      </Route>
      <Route path="/admin" element={<AdminLayout />}></Route>
    </Routes>
  );
}

export default App;
