import "./App.css";

import { Route, Routes } from "react-router-dom";

import LayoutBase from "./components/Layout/Base";
import HomePage from "./page/Home";
import PageNotFound from "./page/PageNotFound";

import {Login,ForgotPassword} from "@/page/Account/index";
function App() {
  return (
    <Routes>
      <Route path="/" element={<LayoutBase />}>
        <Route index element={<HomePage />} />
        <Route path="/login" element={<Login />} />
        <Route path="/forgotPassword" element={<ForgotPassword />} />
        <Route path="*" element={<PageNotFound />} />
      </Route>
    </Routes>
  );
}

export default App;
