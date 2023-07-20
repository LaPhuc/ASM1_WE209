import Breadcrumb from "@/components/Breadcrumb";
import ModelCategory from "@/components/ModelCategory";
import ModelProduct from "@/components/ModelSale";
import CardNews from "@/components/CardNews";

interface IPosts {
  id?: number;
  image: string;
  content: string;
  title: string;
}

const listPosts: IPosts[] = [
  {
    image:
      "https://bizweb.dktcdn.net/thumb/large/100/347/092/articles/barcode-scanner.jpg?v=1665162268327",
    title: "Những lưu ý khi mua Surface đã qua sử dụng",
    content:
      "Surface là dòng máy tính bảng kết hợp laptop của nhà Microsoft, nổi bật với thiết kế sang trọng, ...",
  },
  {
    image:
      "https://bizweb.dktcdn.net/thumb/large/100/347/092/articles/barcode-scanner.jpg?v=1665162268327",
    title: "Những lưu ý khi mua Surface đã qua sử dụng",
    content:
      "Surface là dòng máy tính bảng kết hợp laptop của nhà Microsoft, nổi bật với thiết kế sang trọng, ...",
  },
  {
    image:
      "https://bizweb.dktcdn.net/thumb/large/100/347/092/articles/barcode-scanner.jpg?v=1665162268327",
    title: "Những lưu ý khi mua Surface đã qua sử dụng",
    content:
      "Surface là dòng máy tính bảng kết hợp laptop của nhà Microsoft, nổi bật với thiết kế sang trọng, ...",
  },
  {
    image:
      "https://bizweb.dktcdn.net/thumb/large/100/347/092/articles/barcode-scanner.jpg?v=1665162268327",
    title: "Những lưu ý khi mua Surface đã qua sử dụng",
    content:
      "Surface là dòng máy tính bảng kết hợp laptop của nhà Microsoft, nổi bật với thiết kế sang trọng, ...",
  },
];

const NewsPage = () => {
  return (
    <div className="xl:max-w-[1200px] lg:max-w-[1024px] md:max-w-[768px] max-w-[640px]  mx-auto xl:px-0  lg:px-3 md:px-3 px-3 md:p-0 font-sans mb-10">
      <Breadcrumb name={"tin tức"} />
      <h1 className="text-center text-2xl font-bold text-[#ea2f38]">Tin tức</h1>
      <div className="w-full lg:grid xl:grid lg:grid-cols-4 xl:grid-cols-4 flex flex-col-reverse gap-4">
        <div className=" xl:col-span-1 lg:col-span-1">
          <div>
            <h2 className="text-sm font-bold my-3">DANH MỤC</h2>
            <ModelCategory />
          </div>
          <div>
            <h2 className="text-sm font-bold my-3">SIÊU BÃO VỀ GIÁ</h2>
            <ModelProduct />
          </div>
        </div>
        <div className="lg:col-span-3 xl:col-span-3 grid lg:grid-cols-2 xl:grid-cols-2 grid-cols-1 gap-5">
          {listPosts.map((item) => (
            <CardNews news={item} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default NewsPage;
