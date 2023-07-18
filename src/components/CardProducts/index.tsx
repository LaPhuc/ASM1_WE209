import { IProduct } from "@/interface/Product";
import { useEffect, useState } from "react";

const CardProducts = () => {
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
    <div className="w-full xl:w-[69%] grid lg:grid-cols-4 md:grid-cols-2 border p-4 mx-2 text-sm font-family-[Roboto] ">
      {products.map((product) => (
        <div key={product.id} className="p-2">
          <div className="relative border-2 border-dotted ">
            <img
              src={product.image}
              className="w-full h-auto mb-2 cursor-pointer"
            />
            <div className="absolute top-0 left-0 w-[125px] h-[65px]">
              <img
                src="https://bizweb.dktcdn.net/100/347/092/themes/708609/assets/hot.png?1688367658721"
                alt=""
              />
            </div>
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
  );
};

export default CardProducts;
