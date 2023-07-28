import { Link } from "react-router-dom";

const listProduct = [
  {
    id: 1,
    name: "Giày Adidas Chính Hãng - Ultraboost 4D FWD Nam - Đen | JapanSport GX6632",
    image:
      "https://bizweb.dktcdn.net/thumb/medium/100/347/092/products/gx6632-s1.jpg?v=1672340542000",
    price: 3200000,
    oldPrice: 6000000,
  },
  {
    id: 2,
    name: "Giày Adidas Chính Hãng - Ultraboost 4D FWD Nam - Đen | JapanSport GX6632",
    image:
      "https://bizweb.dktcdn.net/thumb/medium/100/347/092/products/gx6632-s1.jpg?v=1672340542000",
    price: 3200000,
    oldPrice: 6000000,
  },
  {
    id: 3,
    name: "Giày Adidas Chính Hãng - Ultraboost 4D FWD Nam - Đen | JapanSport GX6632",
    image:
      "https://bizweb.dktcdn.net/thumb/medium/100/347/092/products/gx6632-s1.jpg?v=1672340542000",
    price: 3200000,
    oldPrice: 6000000,
  },
];

const ModelProduct = () => {
  return (
    <div className="flex flex-col gap-4 ">
      {listProduct.map((item) => {
        return (
          <Link
            to=""
            className="p-2 border border-slate-200 border-dashed flex gap-2 cursor-pointer"
            key={item.id}
          >
            <div className="lg:w-52 xl:w-52 w-20 ">
              <img className="w-full" src={item.image} alt="" />
            </div>

            <div className=" ">
              <p className="text-sm font-semibold h-[37px] overflow-hidden hover:text-alizarin-crimson ">
                {item.name}
              </p>
              <div>
                <p className="font-bold text-red-500">
                  {item.price.toLocaleString("vi-VN", {
                    style: "currency",
                    currency: "VND",
                  })}
                </p>
                <p className="text-xs line-through">
                  {item.oldPrice.toLocaleString("vi-VN", {
                    style: "currency",
                    currency: "VND",
                  })}
                </p>
              </div>
            </div>
          </Link>
        );
      })}
    </div>
  );
};

export default ModelProduct;
