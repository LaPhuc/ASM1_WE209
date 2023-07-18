import Breadcrumb from "@/components/Breadcrumb";
import ModelCategory from "@/components/ModelCategory";
import CardProducts from "@/components/CardProducts";
import ModelSale from "@/components/ModelSale";

const ProductPage = () => {
  return (
    <div className="xl:max-w-[1200px] mx-auto lg:max-w-[1024px] md:max-w-[768px] max-w-[640px] px-3 md:p-0 font-sans ">
      <Breadcrumb name="Sản Phẩm" />
      <h3 className="text-alizarin-crimson text-center pt-2 font-bold text-2xl py-4 cursor-pointer">
        GIÀY NIKE NAM
      </h3>
      <div className="xl:flex justify-around items-center pb-5">
        <div className="w-full xl:w-[28%] grid xl:grid-cols-1 flex flex-col-reverse gap-4">
          <div className=" xl:col-span-1 lg:col-span-1">
            <ModelCategory />
            <ModelSale />
          </div>
        </div>
        <CardProducts />
      </div>
    </div>
  );
};

export default ProductPage;
