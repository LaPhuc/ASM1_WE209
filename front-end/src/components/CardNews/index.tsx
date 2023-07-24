import { Link } from "react-router-dom";

type TCardNews = {
  news: any;
};

const CardNews = ({ news }: TCardNews) => {
  return (
    <Link
      to=""
      className="lg:flex xl:flex md:flex my-4 cursor-pointer"
      key={news.id}
    >
      <div>
        <img src={news.image} alt="" />
      </div>
      <div className="lg:pl-4 xl:pl-4 md:pl-4">
        <h3 className="lg:text-base xl:text-base text-sm font-bold pb-1 pt-3 md:pt-0 lg:pt-0 xl:pt-0 hover:text-alizarin-crimson">
          {news.title}
        </h3>
        <div className="lg:text-base xl:text-base text-sm font-normal">
          {news.content}
        </div>
      </div>
    </Link>
  );
};

export default CardNews;
