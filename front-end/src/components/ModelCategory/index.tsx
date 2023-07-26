import { Link } from "react-router-dom";
interface ICategory {
  id?: number;
  name: string;
}
const ModelCategory = () => {

  const listCategory: ICategory[] = [
    {
      id: 1,
      name: "Giày nam",
    },
    {
      id: 2,
      name: "Giày nữ",
    },
    {
      id: 3,
      name: "Giày thể thao",
    },
  ];
  
  return (
    <div className="px-4 pb-4 border border-slate-200">
      <ul>
        {listCategory.map((item) => {
          return (
            <li className=" py-4 cursor-pointer" key={item.id}>
              <div className="flex justify-between items-center hover:text-red-500 text-sm">
                <Link to="">{item.name}</Link>
              </div>
            </li>
          );
        })}
      </ul>
    </div>
  );
};

export default ModelCategory;
