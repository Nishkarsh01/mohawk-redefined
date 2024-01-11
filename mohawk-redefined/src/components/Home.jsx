import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import TextImage from "./TextImage";

const Home = () => {
  const sliderSettings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 2000,
  };

  return (
    <div>
      <section className="mb-8">
        <h2 className="text-3xl font-bold mb-4 text-center mt-4">
          Recent Activity
        </h2>
        <div className="max-w-3xl mx-auto">
          <Slider {...sliderSettings}>
            <div className="w-full h-800">
              <img
                src="./assets/college-friends.jpg"
                alt="Slide 1"
                className="w-full h-full object-cover"
              />
            </div>
            <div className="w-full h-800">
              <img
                src="./assets/resume-building.jpg"
                alt="Slide 2"
                className="w-full h-full object-cover"
              />
            </div>
            <div className="w-full h-800">
              <img
                src="./assets/group-discussion.jpg"
                alt="Slide 2"
                className="w-full h-full object-cover"
              />
            </div>
          </Slider>
        </div>
      </section>
      <section>
        <TextImage />
      </section>
    </div>
  );
};

export default Home;
