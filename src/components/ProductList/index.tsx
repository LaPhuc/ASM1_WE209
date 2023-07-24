import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Dispatch } from "redux";
import { fetchProducts } from "@/actions/product";
import Skeleton from "react-loading-skeleton";

const ProductList = () => {
  const dispatch: Dispatch<any> = useDispatch();
  const { products, isLoading, error } = useSelector(
    (state: any) => state.products
  );

  useEffect(() => {
    dispatch(fetchProducts());
  }, []);

  if (isLoading) return <Skeleton count={3} height={35} />;
  if (error) return <div>{error}</div>;
  return (
    <div>
      <button
        className="bg-green-400 mx-4 px-4 py-2 rounded-md text-white"
        onClick={() =>
          dispatch({
            type: "product/addProduct",
            payload: { id: 3, name: "Product C" },
          })
        }
      >
        Add Product
      </button>
      {products?.map((item: any) => (
        <>
          <div className="my-2 mx-4" key={item.id}>
            {item.name}
          </div>
          <button
            className="bg-yellow-400 mx-4 px-4 py-2 rounded-md text-white"
            onClick={() =>
              dispatch({
                type: "product/updateProduct",
                payload: { ...item, name: item.name + " update"},
              })
            }
          >
            Update Product
          </button>
          <button
            className="bg-red-600 mx-4 px-4 py-2 rounded-md text-white"
            onClick={() =>
              dispatch({ type: "product/deleteProduct", payload: { id: item.id } })
            }
          >
            Delete Product
          </button>
        </>
      ))}
    </div>
  );
};
export default ProductList;
