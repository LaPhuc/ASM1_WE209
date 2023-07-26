import { useEffect, useState } from "react";
import { Link, useLocation } from "react-router-dom";

import Breadcrumb from "@/components/Breadcrumb";

interface IUser {
  id: string;
  name: string;
  password: string;
}

const users: IUser[] = [
  {
    id: "123",
    name: "LaPhuc",
    password: "12345678",
  },
  {
    id: "124",
    name: "Hai",
    password: "12345678",
  },
];

const use = {
  id: "123",
  name: "LaPhuc",
  password: "12345678",
};

const ResetPassword = () => {
  const [confirmPassword, setConfirmPassword] = useState<string>("");
  const [oldPassword, setOldPassword] = useState<string>("");
  const [newPassword, setNewPassword] = useState<string>("");
  const [url, setUrl] = useState<boolean>();
  const [user, setUser] = useState<IUser>();

  const location = useLocation();
  const id = location.pathname.split("/").pop();

  const onSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (!url) {
      if (newPassword !== "" && confirmPassword === newPassword) {
        const userNew = {
          id: user?.id,
          name: user?.name,
          password: newPassword,
        };
        console.log(userNew);
      }
    } else if (oldPassword === use?.password) {
      if (newPassword !== "" && confirmPassword === newPassword) {
        const userNew = {
          id: use?.id,
          name: use?.name,
          password: newPassword,
        };
        console.log(userNew);
      }
    }
  };

  useEffect(() => {
    const filteredUser = users.find((user) => user.id === id);
    setUser(filteredUser);
  }, [id]);

  useEffect(() => {
    if (location.pathname === "/resetPassword") {
      setUrl(true);
    } else {
      setUrl(false);
    }
  }, [location.pathname]);

  return (
    <div className="xl:max-w-[1200px] mx-auto lg:max-w-[1024px] md:max-w-[768px] max-w-[640px] px-3 md:p-0">
      <Breadcrumb name="Thay đổi mật khẩu" />
      <h1 className="text-2xl font-bold font-sans text-alizarin-crimson text-center pt-2 pb-4">
        Thay đổi mật khẩu
      </h1>
      <form onSubmit={onSubmit} action="" className="font-sans w-[70%] mx-auto">
        <div className={url ? "p-4" : "hidden"}>
          <p className="after:content-['*'] after:text-alizarin-crimson after:pl-1 mb-2">
            Mật khẩu cũ
          </p>
          <input
            className="w-full h-10 border border-bright-gray placeholder:text-bright-gray placeholder:text-sm pl-5 rounded-sm outline-none"
            type="password"
            placeholder="mật khẩu cũ"
            value={oldPassword}
            onChange={(e) => setOldPassword(e.target.value)}
          />
        </div>
        <div className="p-4">
          <p className="after:content-['*'] after:text-alizarin-crimson after:pl-1 mb-2">
            Mật khẩu mới
          </p>
          <input
            className="w-full h-10 border border-bright-gray placeholder:text-bright-gray placeholder:text-sm pl-5 rounded-sm outline-none"
            type="password"
            placeholder="mật khẩu mới"
            value={newPassword}
            onChange={(e) => setNewPassword(e.target.value)}
          />
        </div>
        <div className="p-4">
          <p className="after:content-['*'] after:text-alizarin-crimson after:pl-1 mb-2">
            Xác nhận mật khẩu mới
          </p>
          <input
            className="w-full h-10 border border-bright-gray placeholder:text-bright-gray placeholder:text-sm pl-5 rounded-sm outline-none"
            type="password"
            placeholder="xác nhận lại mật khẩu mới "
            value={confirmPassword}
            onChange={(e) => setConfirmPassword(e.target.value)}
          />
        </div>
        <div className="flex justify-start items-center gap-x-5 mt-7 mb-10">
          <button className="font-sans border border-alizarin-crimson text-sm text-white bg-alizarin-crimson px-5 py-3 rounded-full hover:bg-white hover:text-alizarin-crimson">
            Đặt lại mật khẩu
          </button>
          <Link
            className={
              url
                ? "font-sans text-sm underline text-davy-grey hover:text-alizarin-crimson"
                : "hidden"
            }
            to="/login"
          >
            Đăng nhập
          </Link>
        </div>
      </form>
    </div>
  );
};

export default ResetPassword;
