import { useEffect, useState } from "react";
import Breadcrumb from "@/components/Breadcrumb";
import { IProduct } from "@/interface/Product";
import { Link } from "react-router-dom";
const ProductPage = () => {
  const productItem: IProduct[] = [
    {
      id: 1,
      name: "giày NIKE 200",
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
      name: "giày NIKE 400",
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
      name: "giày NIKE 600",
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
      name: "giày NIKE 800",
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
      id: 4,
      name: "giày NIKE 800",
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
    <div className="xl:max-w-[1200px] mx-auto lg:max-w-[1024px] md:max-w-[768px] max-w-[640px] px-3 md:p-0 font-sans">
      <Breadcrumb name="Sản Phẩm" />
      <h3 className="text-alizarin-crimson text-center pt-2 font-bold text-2xl">
        GIÀY NIKE NAM
      </h3>
      <div className="grid lg:grid-cols-4 md:grid-cols-2 border">
        {products.map((product) => (
          <div key={product.id} className="p-2">
            <div className="border-2 border-dotted ">
              <img src={product.image} className="w-full h-auto mb-2" />
              <p className="text-lg font-semibold text-center p-2 hover:text-red-500">
                {product.name}
              </p>
            </div>
            <div className="flex justify-between items-center border-t-0 border-2 border-dotted p-2">
              <div>
                <p className="text-xl font-bold text-red-500">
                  {product.newPrice}
                </p>
                <p className="text-sm text-black line-through">
                  {product.oldPrice}
                </p>
              </div>
              <button className="border p-2 bg-red-500 text-white hover:text-red-500 hover:bg-white">
                Chi tiết
              </button>
            </div>
          </div>
        ))}
      </div>
      <div className="text-center border border-t-0 my-4 p-4 ">
        <Link
          to=""
          className="lg:text-black hover:text-red-500 text-xl md:text-3xl "
        >
          CÓ THỂ BẠN THÍCH
        </Link>
        <p className="text-sm my-4">Sản phẩm đang cập nhập</p>
      </div>
    </div>
  );
};

export default ProductPage;
