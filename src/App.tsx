import "./App.css";

import { Route, Routes } from "react-router-dom";

import LayoutBase from "./components/Layout/Base";
import HomePage from "./page/Home";
import PageNotFound from "./page/PageNotFound";
import {Login,Register} from "@/page/Account/index";
import AdminLayout from "@/components/Layout/admin/index"
function App() {
  return (
    <Routes>
      <Route path="/" element={<LayoutBase />}>
        <Route index element={<HomePage />} />
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
        <Route path="*" element={<PageNotFound />} />
      </Route>
      <Route path="/admin" element={<AdminLayout />}>
      </Route>
    </Routes>
  );
}

export default App;
