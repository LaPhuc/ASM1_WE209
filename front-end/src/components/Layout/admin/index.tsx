import LayoutAdmin from "@/components/Layout/Admin/LayoutAdmin/index";
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
    <div className="dark:bg-[#212226] bg-[#f2f2f2] w-[100%]">
      <LayoutAdmin darkMode={darkMode} setDarkMode={setDarkMode} />
      <div className="md:w-[calc(100%-219px)] w-[calc(100%-15px)] min-h-[calc(100vh)] md:ml-auto ml-0">
        <Outlet />
      </div>
    </div>
  );
};

export default AdminLayout;
