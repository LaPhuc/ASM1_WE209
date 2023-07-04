import "./App.css";

import { Route, Routes } from "react-router-dom";

import LayoutBase from "./components/Layout/Base";
import Login from "./page/Account/Login";
import HomePage from "./page/Home";
import PageNotFound from "./page/PageNotFound";

function App() {
  return (
    <Routes>
      <Route path="/" element={<LayoutBase />}>
        <Route index element={<HomePage />} />
        <Route path="/login" element={<Login />} />
        <Route path="*" element={<PageNotFound />} />
      </Route>
    </Routes>
  );
}

export default App;
