import { Link } from "react-router-dom";

import Breadcrumb from "@/components/Breadcrumb";
import Button from "@/components/Button";

const Register = () => {
  return (
    <div className="xl:max-w-[1200px] mx-auto lg:max-w-[1024px] md:max-w-[768px] max-w-[640px] px-3 md:p-0">
      <Breadcrumb name="Đăng ký" />
      <h1 className="text-2xl font-bold font-sans text-alizarin-crimson text-center pt-2 pb-4">
        Đăng ký tài khoản
      </h1>
      <div className="px-4">
        <h1 className="text-2xl font-normal mb-3">Đăng ký tài khoản</h1>
        <p className="text-sm mb-10">
          Nếu chưa có tài khoản vui lòng đăng ký tại đây.
        </p>
        <form
          action=""
          className="font-sans w-[100%] mx-auto grid md:grid-cols-2 grid-cols-1 gap-x-10"
        >
          <div className="mb-4">
            <p className="after:content-['*'] after:pl-1 mb-2">Họ và tên</p>
            <input
              className="w-full h-10 border border-bright-gray placeholder:text-bright-gray placeholder:text-sm pl-5 rounded-sm outline-none"
              type="name"
              placeholder="Email"
            />
          </div>
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
          <div className="mb-4">
            <p className="after:content-['*'] after:pl-1 mb-2">
              Nhập lại mật khẩu
            </p>
            <input
              className="w-full h-10 border border-bright-gray placeholder:text-bright-gray placeholder:text-sm pl-5 rounded-sm outline-none"
              type="confirmPassword"
              placeholder="Nhập lại mật khẩu"
            />
          </div>
          <div className="flex justify-start items-center gap-x-5 mt-7 mb-10">
            <Button title="đăng ký" />
            <Link
              className="font-sans text-sm underline text-davy-grey hover:text-alizarin-crimson"
              to="/login"
            >
              Đăng nhập
            </Link>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Register;
