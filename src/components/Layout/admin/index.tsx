import LayoutAdmin from "@/components/Layout/admin/LayoutAdmin/index";
import { useEffect, useState } from "react";
import { Outlet } from "react-router-dom";

const AdminLayout = () => {
  const [darkMode, setDarkMode] = useState<boolean>(false);
  useEffect(() => {
    if (!darkMode) {
      localStorage.theme = "dark";
    } else {
      localStorage.theme = "light";
    }
    if (
      localStorage.theme === "dark" ||
      (!("theme" in localStorage) &&
        window.matchMedia("(prefers-color-scheme: dark)").matches)
    ) {
      document.documentElement.classList.add("dark");
    } else {
      document.documentElement.classList.remove("dark");
    }
  }, [darkMode]);
  return (
    <div className="dark:bg-[#212226] bg-white w-screen min-h-screen">
      <LayoutAdmin darkMode={darkMode} setDarkMode={setDarkMode} />
      <div className="w-[calc(100vw-230px)] h-[calc(100vh)] ml-auto">
        <Outlet />
      </div>
    </div>
  );
};

export default AdminLayout;
