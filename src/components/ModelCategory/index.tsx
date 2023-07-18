import { Link } from "react-router-dom";

const ModelCategory = () => {
  return (
    <div className="">
      <h2 className="text-sm font-bold my-3">DANH MỤC</h2>
      <div className="px-4 pb-4 border border-slate-200 ">
        <ul className="">
          <li className=" py-4 ">
            <div className=" hover:text-red-500 text-sm">
              <Link to={"#"}>Phụ kiện, Quần áo</Link>{" "}
            </div>
          </li>
          <li className=" py-4 ">
            <div className=" hover:text-red-500 text-sm">
              <Link to={"#"}>Giày nam</Link>{" "}
            </div>
          </li>
          <li className=" py-4 ">
            <div className="hover:text-red-500 text-sm">
              <Link to={"#"}>Giày nữ</Link>{" "}
            </div>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default ModelCategory;
