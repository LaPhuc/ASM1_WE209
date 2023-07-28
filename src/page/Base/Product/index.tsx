import Breadcrumb from "@/components/Breadcrumb";
import ModelCategory from "@/components/ModelCategory";
import CardProducts from "@/components/CardProducts";
import ModelProduct from "@/components/ModelSale";
import { IProduct } from "@/interface/Product";

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
const ProductPage = () => {
  return (
    <div className="xl:max-w-[1200px] lg:max-w-[1024px] md:max-w-[768px] max-w-[640px]  mx-auto xl:px-0  lg:px-3 md:px-3 px-3 md:p-0 font-sans mb-10">
      <Breadcrumb name={"Sản phẩm"} />
      <h1 className="text-center text-2xl font-bold text-[#ea2f38]">
        Sản Phẩm
      </h1>
      <div className="w-full lg:grid xl:grid lg:grid-cols-3 xl:grid-cols-3 flex flex-col-reverse gap-4 ">
        <div className=" xl:col-span-1 lg:col-span-1">
          <div>
            <ModelCategory />
          </div>
          <div>
            <h2 className="text-sm font-bold my-3">SIÊU BÃO VỀ GIÁ</h2>
            <ModelProduct />
          </div>
        </div>
        <div className="lg:col-span-2 xl:col-span-2 grid xl:grid-cols-4 lg:grid-cols-3 md:grid-cols-2  grid-cols-1 gap-5">
          {productItem.map((item) => (
            <CardProducts product={item} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default ProductPage;
