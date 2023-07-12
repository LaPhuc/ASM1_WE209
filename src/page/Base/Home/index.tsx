import Carousel from "@/components/Carousel";

const slide = [
  "https://bizweb.dktcdn.net/100/347/092/themes/708609/assets/slider_1.jpg?1688378513890",
  "https://bizweb.dktcdn.net/100/347/092/themes/708609/assets/slider_2.jpg?1688378513890",
  "https://bizweb.dktcdn.net/100/347/092/themes/708609/assets/slider_3.jpg?1688378513890",
  "https://bizweb.dktcdn.net/100/347/092/themes/708609/assets/slider_5.jpg?1688378513890",
];

const HomePage = () => {
  return (
    <div>
      <div>
        <Carousel autoSlide={true} slides={slide} />
      </div>
      HomePage
    </div>
  );
};

export default HomePage;
