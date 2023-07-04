import { Link } from "react-router-dom";

import Breadcrumb from "@/components/Breadcrumb";

const Login = () => {
  return (
    <div className="xl:max-w-[1200px] mx-auto lg:max-w-[1024px] md:max-w-[768px] max-w-[640px] px-3 md:p-0">
      <Breadcrumb name="Đăng nhập" />
      <h1 className="text-2xl font-bold font-sans text-alizarin-crimson text-center pt-2 pb-4">
        Đăng nhập tài khoản
      </h1>
      <form action="" className="font-sans w-[70%] mx-auto">
        <h1 className="text-2xl font-normal mb-3">Đăng nhập tài khoản</h1>
        <p className="text-sm mb-10">
          Nếu bạn đã có tài khoản, đăng nhập tại đây.
        </p>
        <div className="mb-4">
          <p className="after:content-['*'] after:pl-1 mb-2">Email</p>
          <input
            className="w-full h-10 border border-bright-gray placeholder:text-bright-gray placeholder:text-sm pl-5 rounded-sm outline-none"
            type="email"
            placeholder="Email"
          />
        </div>
        <div className="mb-4">
          <p className="after:content-['*'] after:pl-1 mb-2">Mật khẩu</p>
          <input
            className="w-full h-10 border border-bright-gray placeholder:text-bright-gray placeholder:text-sm pl-5 rounded-sm outline-none"
            type="password"
            placeholder="Mật khẩu"
          />
        </div>
        <div className="flex justify-start items-center gap-x-5 mt-7 mb-10">
          <button className="font-sans border border-alizarin-crimson text-sm text-white bg-alizarin-crimson px-5 py-3 rounded-full hover:bg-white hover:text-alizarin-crimson">
            Đăng nhập
          </button>
          <Link
            className="font-sans text-sm underline text-davy-grey hover:text-alizarin-crimson"
            to="/"
          >
            Đăng ký
          </Link>
        </div>
        <span className="md:text-sm text-xs mr-1">
          Bạn quên mật khẩu? lấy lại mật khẩu
        </span>
        <Link className="md:text-sm text-xs underline hover:text-alizarin-crimson" to="">
          tại đây
        </Link>
      </form>
    </div>
  );
};

export default Login;
