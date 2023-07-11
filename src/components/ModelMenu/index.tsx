const ModelMenu = () => {
  return (
    <div className="absolute top-[50px] left-0 z-20 hidden bg-white text-black w-60 group-hover:block hover:block">
      <ul className="text-start normal-case font-normal">
        <li className="py-3 px-2 border-b-2 border-gray-100 hover:bg-alizarin-crimson hover:text-white cursor-pointer">
          <a href="">ADIDAS</a>
        </li>
        <li className="py-3 px-2 border-b-2 border-gray-100 hover:bg-alizarin-crimson hover:text-white cursor-pointer">
          <a href="">NIKE</a>
        </li>
        <li className="py-3 px-2 border-b-2 border-gray-100 hover:bg-alizarin-crimson hover:text-white cursor-pointer">
          <a href="">Đồng hồ - phụ kiện điện tử</a>
        </li>
      </ul>
    </div>
  );
};

export default ModelMenu;
