import { useState } from "react";
import Breadcrumb from "@/components/Breadcrumb";
import { Link } from "react-router-dom";
const NewsPage = () => {
  const [openModel, setOpenModel] = useState<boolean>(false);

  return (
    <div className="xl:max-w-[1200px] lg:max-w-[1024px] md:max-w-[768px] max-w-[640px]  mx-auto xl:px-0  lg:px-3 md:px-3 px-3 md:p-0 font-sans mb-5">
      <div className="">
        <div className="">
          <Breadcrumb name={"tin tức"} />
        </div>
        <h1 className="text-center text-2xl font-bold text-[#ea2f38]">
          Tin tức
        </h1>
      </div>

      <div className="w-full lg:grid xl:grid lg:grid-cols-4 xl:grid-cols-4 flex flex-col-reverse gap-4">
        <div className=" xl:col-span-1 lg:col-span-1">
          <div className="">
            <h2 className="text-sm font-bold my-3">DANH MỤC</h2>
            <div className="px-4 pb-4 border border-slate-200">
              <ul>
                <li className=" py-4 cursor-pointer">
                  <div className="flex justify-between items-center hover:text-red-500 text-sm">
                    <Link to={"#"}>Giày nam</Link>{" "}
                  </div>
                </li>
                <li className=" py-4 cursor-pointer">
                  <div className="flex justify-between items-center hover:text-red-500 text-sm">
                    <Link to={"#"}>Giày nữ</Link>{" "}
                  </div>
                </li>
                <li
                  onClick={() => {
                    setOpenModel(!openModel);
                    console.log(openModel);
                  }}
                  className=" py-4 cursor-pointer"
                >
                  <div className="flex justify-between items-center hover:text-red-500 text-sm">
                    <Link to={"#"}>Giày thể thao</Link>
                  </div>
                </li>
              </ul>
            </div>
          </div>
          <div className="">
            <h2 className="text-sm font-bold my-3">SIÊU BÃO VỀ GIÁ</h2>
            <div className="flex flex-col gap-4 ">
              <div className="p-2 border border-slate-200 border-dashed flex gap-2 cursor-pointer">
                <div className="lg:w-52 xl:w-52 w-20 ">
                  <img
                    className="w-full"
                    src="https://bizweb.dktcdn.net/thumb/medium/100/347/092/products/gx6632-s1.jpg?v=1672340542000"
                    alt=""
                  />
                </div>
                <div className=" ">
                  <p className="text-sm font-semibold h-[37px] overflow-hidden ">
                    Giày Adidas Chính Hãng - Ultraboost 4D FWD Nam - Đen |
                    JapanSport GX6632
                  </p>
                  <div>
                    <p className="font-bold text-red-500">3.200.000₫</p>
                    <p className="text-xs line-through">6.000.000₫</p>
                  </div>
                </div>
              </div>
              <div className="p-2 border border-slate-200 border-dashed flex gap-2 cursor-pointer">
                <div className="lg:w-52 xl:w-52 w-20 ">
                  <img
                    className="w-full"
                    src="https://bizweb.dktcdn.net/thumb/medium/100/347/092/products/gx6632-s1.jpg?v=1672340542000"
                    alt=""
                  />
                </div>
                <div className=" ">
                  <p className="text-sm font-semibold h-[37px] overflow-hidden ">
                    Giày Adidas Chính Hãng - Ultraboost 4D FWD Nam - Đen |
                    JapanSport GX6632
                  </p>
                  <div>
                    <p className="font-bold text-red-500">3.200.000₫</p>
                    <p className="text-xs line-through">6.000.000₫</p>
                  </div>
                </div>
              </div>
              <div className="p-2 border border-slate-200 border-dashed flex gap-2 cursor-pointer">
                <div className="lg:w-52 xl:w-52 w-20 ">
                  <img
                    className="w-full"
                    src="https://bizweb.dktcdn.net/thumb/medium/100/347/092/products/gx6632-s1.jpg?v=1672340542000"
                    alt=""
                  />
                </div>
                <div className=" ">
                  <p className="text-sm font-semibold h-[37px] overflow-hidden ">
                    Giày Adidas Chính Hãng - Ultraboost 4D FWD Nam - Đen |
                    JapanSport GX6632
                  </p>
                  <div>
                    <p className="font-bold text-red-500">3.200.000₫</p>
                    <p className="text-xs line-through">6.000.000₫</p>
                  </div>
                </div>
              </div>
              <div className="p-2 border border-slate-200 border-dashed flex gap-2 cursor-pointer">
                <div className="lg:w-52 xl:w-52 w-20 ">
                  <img
                    className="w-full"
                    src="https://bizweb.dktcdn.net/thumb/medium/100/347/092/products/gx6632-s1.jpg?v=1672340542000"
                    alt=""
                  />
                </div>
                <div className=" ">
                  <p className="text-sm font-semibold h-[37px] overflow-hidden ">
                    Giày Adidas Chính Hãng - Ultraboost 4D FWD Nam - Đen |
                    JapanSport GX6632
                  </p>
                  <div>
                    <p className="font-bold text-red-500">3.200.000₫</p>
                    <p className="text-xs line-through">6.000.000₫</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className=" lg:col-span-3 xl:col-span-3">
          <div className="grid lg:grid-cols-2 xl:grid-cols-2 grid-cols-1 gap-4">
            <div className="lg:flex xl:flex md:flex my-4 cursor-pointer">
              <div>
                <img
                  src="https://bizweb.dktcdn.net/thumb/large/100/347/092/articles/barcode-scanner.jpg?v=1665162268327"
                  alt=""
                />
              </div>
              <div className="lg:pl-4 xl:pl-4 md:pl-4">
                <h3 className="lg:text-base xl:text-base text-sm font-bold pb-1 pt-3 md:pt-0 lg:pt-0 xl:pt-0">
                  <Link to={""}>
                    Những lưu ý khi mua Surface đã qua sử dụng
                  </Link>
                </h3>
                <div className="lg:text-base xl:text-base text-sm font-normal">
                  Surface là dòng máy tính bảng kết hợp laptop của nhà
                  Microsoft, nổi bật với thiết kế sang trọng, ...
                </div>
              </div>
            </div>
            <div className="lg:flex xl:flex md:flex my-4 cursor-pointer">
              <div>
                <img
                  src="https://bizweb.dktcdn.net/thumb/large/100/347/092/articles/cach-giat-giay-adidas-1.jpg?v=1659517810827"
                  alt=""
                />
              </div>
              <div className="lg:pl-4 xl:pl-4 md:pl-4">
                <h3 className="lg:text-base xl:text-base text-sm font-bold pb-1 pt-3 md:pt-0 lg:pt-0 xl:pt-0">
                  <Link to={""}>
                    Những lưu ý khi mua Surface đã qua sử dụng
                  </Link>
                </h3>
                <div className="lg:text-base xl:text-base text-sm font-normal">
                  Surface là dòng máy tính bảng kết hợp laptop của nhà
                  Microsoft, nổi bật với thiết kế sang trọng, ...
                </div>
              </div>
            </div>
            <div className="lg:flex xl:flex md:flex my-4 cursor-pointer">
              <div>
                <img
                  src="https://bizweb.dktcdn.net/thumb/large/100/347/092/articles/size-giay-nike-2.jpg?v=1659517304383"
                  alt=""
                />
              </div>
              <div className="lg:pl-4 xl:pl-4 md:pl-4">
                <h3 className="lg:text-base xl:text-base text-sm font-bold pb-1 pt-3 md:pt-0 lg:pt-0 xl:pt-0">
                  <Link to={""}>
                    Những lưu ý khi mua Surface đã qua sử dụng
                  </Link>
                </h3>
                <div className="lg:text-base xl:text-base text-sm font-normal">
                  Surface là dòng máy tính bảng kết hợp laptop của nhà
                  Microsoft, nổi bật với thiết kế sang trọng, ...
                </div>
              </div>
            </div>
            <div className="lg:flex xl:flex md:flex my-4 cursor-pointer">
              <div>
                <img
                  src="https://bizweb.dktcdn.net/thumb/large/100/347/092/articles/giay-chay-bo-tot-nhat-10.jpg?v=1659516326677"
                  alt=""
                />
              </div>
              <div className="lg:pl-4 xl:pl-4 md:pl-4">
                <h3 className="lg:text-base xl:text-base text-sm font-bold pb-1 pt-3 md:pt-0 lg:pt-0 xl:pt-0">
                  <Link to={""}>
                    Những lưu ý khi mua Surface đã qua sử dụng
                  </Link>
                </h3>
                <div className="lg:text-base xl:text-base text-sm font-normal">
                  Surface là dòng máy tính bảng kết hợp laptop của nhà
                  Microsoft, nổi bật với thiết kế sang trọng, ...
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default NewsPage;
