import { Outlet } from "react-router-dom";

import FooterBase from "./Footer";
import HeaderBase from "./Header";

const LayoutBase = () => {
  return (
    <>
      <HeaderBase />
      <Outlet />
      <FooterBase />
    </>
  );
};

export default LayoutBase;
