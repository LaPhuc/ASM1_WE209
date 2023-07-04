import Breadcrumb from "@/components/Breadcrumb";
import { useState } from "react";
import { Link } from "react-router-dom";

const ForgotPassword = () => {
  const user = [
    { id: 1, email: "user@example.com" },
    { id: 2, email: "user1@example.com" },
  ];
  const [email, setEmail] = useState("");
  const [errorMessage, setErrorMessage] = useState("");
  const handleSubmit = (e: { preventDefault: () => void; }) => {
    e.preventDefault();
    const existingUser = user.find((u) => u.email === email);
    if (!existingUser) {
      setErrorMessage("Không tìm thấy tài khoản tương ứng với email này.");
      return;
    }
  };
  return (
    <div className="xl:max-w-[1200px] mx-auto lg:max-w-[1024px] md:max-w-[768px] max-w-[640px] px-3 md:p-0">
      <Breadcrumb name="Lấy lại mật khẩu" />
      <h1 className="text-2xl font-bold font-sans text-alizarin-crimson text-center pt-2 pb-4">
        Lấy lại mật khẩu
      </h1>
      <form onSubmit={handleSubmit} className="font-sans w-[70%] mx-auto">
        <h1 className="text-2xl font-normal mb-6">Lấy lại mật khẩu</h1>
        <p className="text-sm mb-10">
        Bạn quên mật khẩu? Nhập địa chỉ email để lấy lại mật khẩu qua email.
        </p>
        <div className="mb-4">
          <p className="after:content-['*'] after:pl-1 mb-2">Email</p>
          <input
            className="w-full h-10 border border-bright-gray placeholder:text-bright-gray placeholder:text-sm pl-5 rounded-sm outline-none"
            type="email"
            placeholder="Email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
        </div>
        {errorMessage && <div className="text-red-500">{errorMessage}</div>}
        <div className="flex justify-start items-center gap-x-5 mt-7 mb-10">
          <button className="font-sans border border-alizarin-crimson text-sm text-white bg-alizarin-crimson px-5 py-3 rounded-full hover:bg-white hover:text-alizarin-crimson">
            Đặt lại mật khẩu
          </button>
          <Link
            className="font-sans text-sm underline text-davy-grey hover:text-alizarin-crimson"
            to="/login"
          >
            Đăng nhập
          </Link>
        </div>
      </form>
    </div>
  );
};

export default ForgotPassword;
