import { useEffect, useState } from "react";
import { AiOutlineBars, AiOutlineSearch } from "react-icons/ai";
import { BiUser } from "react-icons/bi";
import { BsTelephone } from "react-icons/bs";
import { FaSearch } from "react-icons/fa";
import { IoIosArrowDown } from "react-icons/io";
import { SlHandbag } from "react-icons/sl";

import Logo from "@/assets/logo-giay.png";
import ModelMenu from "@/components/ModelMenu";
import ModelMenuResponsive from "@/components/ModelMenuResponsive";
import { Link, useLocation } from "react-router-dom";

const HeaderBase = () => {
  const [open, setOpen] = useState<boolean>(false);
  const [isWideScreen, setIsWideScreen] = useState(false);

  const location = useLocation();

  useEffect(() => {
    setOpen(false);
  }, [location]);

  useEffect(() => {
    const handleResize = () => {
      const screenWidth = window.innerWidth;
      setIsWideScreen(screenWidth > 1024);
    };

    window.addEventListener("resize", handleResize);
    handleResize();
    if (isWideScreen) {
      setOpen(false);
    }
    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, [isWideScreen]);

  return (
    <div className="">
      <header className="font-sans">
        <img
          className="lg:block hidden "
          src="https://bizweb.dktcdn.net/100/347/092/themes/708609/assets/banner.jpg?1688378513890"
          alt="banner"
        />
        <div className="xl:max-w-[1200px] mx-auto lg:max-w-[1024px] md:max-w-[768px] max-w-[640px] px-3 md:p-0 flex justify-between items-center my-4 ">
          <div className="block lg:hidden text-2xl">
            <div onClick={() => setOpen(!open)}>
              <AiOutlineBars />
            </div>
            <nav
              className={
                open
                  ? "fixed w-[50%] top-0 left-0 h-screen ease-in-out duration-500 bg-white z-50 shadow-2xl min-w-[205px] max-w-[300px]"
                  : "fixed w-[50%] top-0 left-[-55%] h-screen ease-in-out duration-500 bg-white z-50 min-w-[205px] max-w-[300px]"
              }
            >
              <div className="flex justify-center items-center p-4 bg-alizarin-crimson text-white text-sm">
                <Link to="/login" className="px-2">
                  Đăng nhập
                </Link>
                <Link to="/register" className="px-4">
                  Đăng ký
                </Link>
              </div>
              <ul className="lg:gap-4 flex flex-col text-sm">
                <li className=" py-[10px] px-[15px] border-b-2 border-gray-100">
                  <Link to="/">Trang chủ</Link>
                </li>
                <li className=" py-[10px] px-[15px] border-b-2 border-gray-100">
                  <Link to="">Về chúng tôi</Link>
                </li>
                <li className="r py-[10px] px-[15px] group border-b-2 border-gray-100">
                  <Link to="/product">Sản Phẩm</Link>
                </li>
                <li className="r py-[10px] px-[15px] border-b-2 border-gray-100">
                  <ModelMenuResponsive title="Tin tức" />
                </li>
                <li className=" py-[10px] px-[15px] border-b-2 border-gray-100">
                  <Link to="/contact">Liên hệ</Link>
                </li>
              </ul>
            </nav>
            {open && (
              <div
                onClick={() => setOpen(false)}
                className="fixed top-0 w-[100vw] h-[100vh] filter z-10"
              />
            )}
          </div>
          <img className="w-[160px]  cursor-pointer" src={Logo} alt="" />
          <div className="flex justify-center items-center gap-x-2 lg:w-[60%] w-auto">
            <div className="hidden lg:flex flex-1 justify-between items-center border rounded-3xl py-2">
              <input
                className="outline-none h-8 w-full ml-[24px]"
                type="text"
                placeholder="Tìm kiếm..."
              />
              <FaSearch className="w-[40px] text-alizarin-crimson mr-2 h-6 cursor-pointer" />
            </div>
            <div className="flex flex-1 justify-center items-center gap-x-2">
              <div className="hidden relative lg:flex border-alizarin-crimson border-2 w-[231px] h-[52px] rounded-full text-alizarin-crimson text-center hover:bg-red-300 hover:text-white cursor-pointer">
                <div className="w-[calc(100%-52px)]">
                  <p className="text-sm">Tư vấn bán hàng </p>
                  <span className="font-bold">gọi ngay 0333323</span>
                </div>
                <div className="rounded-full border-alizarin-crimson border-2 bg-alizarin-crimson text-white w-[52px] h-12 absolute -right-1">
                  <BsTelephone className="mx-auto my-[13.5px]" />
                </div>
              </div>
              <button className="lg:hidden sm:text-lg text-sm p-3 border border-alizarin-crimson rounded-full bg-alizarin-crimson text-white cursor-pointer">
                <AiOutlineSearch />
              </button>
              <div className="relative group">
                <div className="hidden lg:block lg:text-lg lg:p-4 border border-alizarin-crimson rounded-full bg-alizarin-crimson text-white cursor-pointer">
                  <BiUser />
                </div>
                <div className="absolute top-[52px] rounded-lg -left-[90px] z-20 hidden bg-white text-black w-60 group-hover:block hover:block">
                  <div className="grid grid-cols-1 w-full gap-y-3 py-5">
                    <Link to="/register" className="w-[80%] mx-auto">
                      <button className="w-full bg-alizarin-crimson text-white rounded-3xl h-12 border border-alizarin-crimson hover:bg-white hover:text-alizarin-crimson">
                        Đăng ký
                      </button>
                    </Link>
                    <Link to="/login" className="w-[80%] mx-auto">
                      <button className="w-full bg-alizarin-crimson text-white rounded-3xl h-12 border border-alizarin-crimson hover:bg-white hover:text-alizarin-crimson">
                        Đăng nhâp
                      </button>
                    </Link>
                  </div>
                </div>
              </div>
              <Link
                to="/cart"
                className="sm:text-lg p-3 lg:p-4 border border-alizarin-crimson rounded-full bg-alizarin-crimson text-white cursor-pointer"
              >
                <SlHandbag />
              </Link>
            </div>
          </div>
        </div>
        <div className="hidden text-sm lg:block mt-3 bg-alizarin-crimson text-white font-bold">
          <ul className="lg:gap-4 xl:max-w-[1200px] mx-auto lg:max-w-[1024px] md:max-w-[768px] max-w-[640px] px-3 md:p-0 uppercase flex items-center text-center ">
            <li className="flex items-center border-b-2 border-alizarin-crimson ease-in-out duration-300 hover:border-white p-4">
              <Link to="/">Trang chủ</Link>
            </li>
            <li className="flex items-center border-b-2 border-alizarin-crimson ease-in-out duration-300 hover:border-white p-4">
              <Link to="">Về chúng tôi</Link>
            </li>
            <li className="flex relative items-center border-b-2 border-alizarin-crimson ease-in-out duration-300 hover:border-white p-4 group cursor-pointer">
              <div className=" flex justify-between items-center">
                <Link to="/product">Sản Phẩm</Link>
                <IoIosArrowDown />
              </div>
              <ModelMenu />
            </li>
            <li className="flex relative items-center border-b-2 border-alizarin-crimson ease-in-out duration-300 hover:border-white p-4 group cursor-pointer">
              <div className="flex justify-between items-center">
                <p>Tin tức</p>
                <IoIosArrowDown />
              </div>
              <ModelMenu />
            </li>
            <li className="flex items-center border-b-2 border-alizarin-crimson ease-in-out duration-300 hover:border-white p-4">
              <Link to="/contact">Liên hệ</Link>
            </li>
          </ul>
        </div>
      </header>
    </div>
  );
};

export default HeaderBase;
