import { useState } from "react";
import { IoIosArrowDown } from "react-icons/io";

interface IModelMenuResponsive {
  title: string;
}

const ModelMenuResponsive = ({ title }: IModelMenuResponsive) => {
  const [openModel, setOpenModel] = useState<boolean>(false);
  return (
    <>
      <div
        onClick={() => setOpenModel(!openModel)}
        className="flex items-center justify-start "
      >
        <a className="" href="">
          <p>{title}</p>
        </a>
        <div className="ml-auto">
          <IoIosArrowDown
            className={
              openModel
                ? "origin-center rotate-180 ease-in-out duration-500"
                : "origin-center rotate-0 ease-in-out duration-500"
            }
          />
        </div>
      </div>
      <div
        className={
          openModel
            ? "h-[90px] overflow-hidden ease-in-out duration-500"
            : "h-0 overflow-hidden ease-in-out duration-500"
        }
      >
        <ul className="">
          <li className="border-b-2 border-gray-100 py-[5px]">
            <a
              href=""
              className="py-[10px] pl-[30px] pr-[10px] relative before:absolute before:top-[16px] before:left-[10px] before:w-[9px] before:h-[9px] before:border-2 before:border-[#d7d7d7] before:rounded-[50%]"
            >
              ADIDAS
            </a>
          </li>
          <li className="border-b-2 border-gray-100 py-[5px]">
            <a
              href=""
              className="py-[10px] pl-[30px] pr-[10px] relative before:absolute before:top-[16px] before:left-[10px] before:w-[9px] before:h-[9px] before:border-2 before:border-[#d7d7d7] before:rounded-[50%]"
            >
              NIKE
            </a>
          </li>
          <li className="border-b-2 border-gray-100 py-[5px]">
            <a
              href=""
              className="py-[10px] pl-[30px] pr-[10px] relative before:absolute before:top-[16px] before:left-[10px] before:w-[9px] before:h-[9px] before:border-2 before:border-[#d7d7d7] before:rounded-[50%]"
            >
              Đồng hồ - phụ kiện điện tử
            </a>
          </li>
        </ul>
      </div>
    </>
  );
};

export default ModelMenuResponsive;
