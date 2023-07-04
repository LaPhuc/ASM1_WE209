import Breadcrumb from "@/components/Breadcrumb"
import { Link } from "react-router-dom"

const ForgotPassword = () => {
  return (
    <div className="xl:max-w-[1200px] mx-auto lg:max-w-[1024px] md:max-w-[768px] max-w-[640px] px-3 md:p-0">
    <Breadcrumb name="Lấy lại mật khẩu" />
    <h1 className="text-2xl font-bold font-sans text-alizarin-crimson text-center pt-2 pb-4">
    Lấy lại mật khẩu
    </h1>
    <form action="" className="font-sans w-[70%] mx-auto">
      <h1 className="text-2xl font-normal mb-6">Lấy lại mật khẩu</h1>
      <div className="mb-4">
        <p className="after:content-['*'] after:pl-1 mb-2">Email</p>
        <input
          className="w-full h-10 border border-bright-gray placeholder:text-bright-gray placeholder:text-sm pl-5 rounded-sm outline-none"
          type="email"
          placeholder="Email"
        />
      </div>
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
  )
}

export default ForgotPassword