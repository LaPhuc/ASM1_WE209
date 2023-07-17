import { useEffect, useState } from "react";
import Breadcrumb from "@/components/Breadcrumb";
import { IProduct } from "@/interface/Product";
import { Link } from "react-router-dom";

const ProductPage = () => {
  const productItem: IProduct[] = [
    {
      id: 1,
      name: "Giày Nike Chính hãng - Jordan 1 Low Nam - Đen",
      image:
        "https://bizweb.dktcdn.net/thumb/medium/100/347/092/products/nike-pegasus-40-dv3854-102-01.jpg?v=1689055194000",
      oldPrice: (2000000).toLocaleString("vi-VN", {
        style: "currency",
        currency: "VND",
      }),
      newPrice: (1599999).toLocaleString("vi-VN", {
        style: "currency",
        currency: "VND",
      }),
    },
    {
      id: 2,
      name: "Giày Nike Chính hãng - Jordan 1 Low Nam - Đen",
      image:
        "https://bizweb.dktcdn.net/thumb/medium/100/347/092/products/nike-pegasus-40-dv3854-102-01.jpg?v=1689055194000",
      oldPrice: (2000000).toLocaleString("vi-VN", {
        style: "currency",
        currency: "VND",
      }),
      newPrice: (1599999).toLocaleString("vi-VN", {
        style: "currency",
        currency: "VND",
      }),
    },
    {
      id: 3,
      name: "Giày Nike Chính hãng - Jordan 1 Low Nam - Đen",
      image:
        "https://bizweb.dktcdn.net/thumb/medium/100/347/092/products/nike-air-max-excee-cd4165-003-01.jpg?v=1689054555000",
      oldPrice: (2000000).toLocaleString("vi-VN", {
        style: "currency",
        currency: "VND",
      }),
      newPrice: (1599999).toLocaleString("vi-VN", {
        style: "currency",
        currency: "VND",
      }),
    },
    {
      id: 4,
      name: "Giày Nike Chính hãng - Jordan 1 Low Nam - Đen ",
      image:
        "https://bizweb.dktcdn.net/thumb/medium/100/347/092/products/nike-pegasus-40-dv3854-102-01.jpg?v=1689055194000",
      oldPrice: (2000000).toLocaleString("vi-VN", {
        style: "currency",
        currency: "VND",
      }),
      newPrice: (1599999).toLocaleString("vi-VN", {
        style: "currency",
        currency: "VND",
      }),
    },
    {
      id: 5,
      name: "Giày Nike Chính hãng - Jordan 1 Low Nam - Đen ",
      image:
        "https://bizweb.dktcdn.net/thumb/medium/100/347/092/products/nike-pegasus-40-dv3854-102-01.jpg?v=1689055194000",
      oldPrice: (200000).toLocaleString("vi-VN", {
        style: "currency",
        currency: "VND",
      }),
      newPrice: (160000).toLocaleString("vi-VN", {
        style: "currency",
        currency: "VND",
      }),
    },
  ];
  const [products, setProducts] = useState<IProduct[]>(productItem);

  useEffect(() => {
    setProducts(products);
  }, [products]);

  return (
    <div className="xl:max-w-[1200px] mx-auto lg:max-w-[1024px] md:max-w-[768px] max-w-[640px] px-3 md:p-0 font-sans ">
      <Breadcrumb name="Sản Phẩm" />
      <h3 className="text-alizarin-crimson text-center pt-2 font-bold text-2xl py-4 cursor-pointer">
        GIÀY NIKE NAM
      </h3>
      <div className="xl:flex justify-around items-center pb-5">
        <div className="w-full xl:w-[30%] grid xl:grid-cols-1 flex flex-col-reverse gap-4">
          <div className=" xl:col-span-1 lg:col-span-1">
            <div className="">
              <h2 className="text-sm font-bold my-3">DANH MỤC</h2>
              <div className="px-4 pb-4 border border-slate-200 ">
                <ul className="text-center">
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
            <div className="">
              <h2 className="text-sm font-bold my-3">DANH MỤC</h2>
              <div className="flex flex-col gap-4">
                <div className="flex p-2 border border-slate-200 border-dashed lg:justify-around gap-2 cursor-pointer">
                  <div className="lg:w-52 xl:w-52 w-20 ">
                    <img
                      className="w-full"
                      src="https://bizweb.dktcdn.net/thumb/medium/100/347/092/products/gx6632-s1.jpg?v=1672340542000"
                      alt=""
                    />
                  </div>
                  <div className=" ">
                    <p className="text-sm font-semibold h-[37px] overflow-hidden cursor-pointer">
                      Giày Adidas Chính Hãng - Ultraboost 4D FWD Nam - Đen |
                      JapanSport GX6632
                    </p>
                    <div>
                      <p className="font-bold text-red-500">3.200.000₫</p>
                      <p className="text-xs line-through">6.000.000₫</p>
                    </div>
                  </div>
                </div>
                <div className="flex p-2 border border-slate-200 border-dashed lg:justify-around gap-2 cursor-pointer">
                  <div className="lg:w-52 xl:w-52 w-20 ">
                    <img
                      className="w-full"
                      src="https://bizweb.dktcdn.net/thumb/medium/100/347/092/products/gx6632-s1.jpg?v=1672340542000"
                      alt=""
                    />
                  </div>
                  <div className=" ">
                    <p className="text-sm font-semibold h-[37px] overflow-hidden cursor-pointer">
                      Giày Adidas Chính Hãng - Ultraboost 4D FWD Nam - Đen |
                      JapanSport GX6632
                    </p>
                    <div>
                      <p className="font-bold text-red-500">3.200.000₫</p>
                      <p className="text-xs line-through">6.000.000₫</p>
                    </div>
                  </div>
                </div>
                <div className="flex p-2 border border-slate-200 border-dashed lg:justify-around gap-2 cursor-pointer">
                  <div className="lg:w-52 xl:w-52 w-20 ">
                    <img
                      className="w-full"
                      src="https://bizweb.dktcdn.net/thumb/medium/100/347/092/products/gx6632-s1.jpg?v=1672340542000"
                      alt=""
                    />
                  </div>
                  <div className=" ">
                    <p className="text-sm font-semibold h-[37px] overflow-hidden cursor-pointer">
                      Giày Adidas Chính Hãng - Ultraboost 4D FWD Nam - Đen |
                      JapanSport GX6632
                    </p>
                    <div>
                      <p className="font-bold text-red-500">3.200.000₫</p>
                      <p className="text-xs line-through">6.000.000₫</p>
                    </div>
                  </div>
                </div>
                <div className="flex p-2 border border-slate-200 border-dashed lg:justify-around gap-2 cursor-pointer">
                  <div className="lg:w-52 xl:w-52 w-20 ">
                    <img
                      className="w-full"
                      src="https://bizweb.dktcdn.net/thumb/medium/100/347/092/products/gx6632-s1.jpg?v=1672340542000"
                      alt=""
                    />
                  </div>
                  <div className=" ">
                    <p className="text-sm font-semibold h-[37px] overflow-hidden cursor-pointer">
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
        </div>

        <div className="w-full xl:w-[69%] grid lg:grid-cols-4 md:grid-cols-2 border p-4 mx-2 text-sm font-family-[Roboto] ">
          {products.map((product) => (
            <div key={product.id} className="p-2">
              <div className="border-2 border-dotted ">
                <img
                  src={product.image}
                  className="w-full h-auto mb-2 cursor-pointer"
                />
                <p className=" font-semibold text-center p-2 hover:text-red-500 cursor-pointer">
                  {product.name}
                </p>
              </div>
              <div className="flex justify-between items-center border-t-0 border-2 border-dotted p-2">
                <div>
                  <p className="text-sm font-bold text-red-500 cursor-pointer">
                    {product.newPrice}
                  </p>
                  <p className="text-xs text-black line-through cursor-pointer">
                    {product.oldPrice}
                  </p>
                </div>
                <button className="border p-0.5  bg-red-500 text-white hover:text-red-500 hover:bg-white cursor-pointer">
                  Chi tiết
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default ProductPage;
