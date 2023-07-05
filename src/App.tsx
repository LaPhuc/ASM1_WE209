import "./App.css";

import { Route, Routes } from "react-router-dom";

import { Login, Register } from "@/page/Account/index";

import LayoutBase from "./components/Layout/Base";
import CartPage from "./page/Cart";
import HomePage from "./page/Home";
import PageNotFound from "./page/PageNotFound";

function App() {
  return (
    <Routes>
      <Route path="/" element={<LayoutBase />}>
        <Route index element={<HomePage />} />
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
        <Route path="/cart" element={<CartPage />} />
        <Route path="*" element={<PageNotFound />} />
      </Route>
    </Routes>
  );
}

export default App;
