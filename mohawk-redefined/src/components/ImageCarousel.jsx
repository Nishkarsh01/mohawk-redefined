import PropTypes from "prop-types";
import { Carousel } from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css";

const ImageCarousel = ({ images }) => {
  return (
    <Carousel
      showArrows={true}
      autoPlay={true}
      infiniteLoop={true}
      interval={2000}
      showThumbs={false}
    >
      {images.map((image, index) => (
        <div key={index} className="w-full max-w-3xl mx-auto items-center">
          <img
            src={`./assets/${image}`}
            alt={`Slide ${index + 1}`}
            className="w-full h-auto object-fill"
          />
        </div>
      ))}
    </Carousel>
  );
};

ImageCarousel.propTypes = {
  images: PropTypes.array.isRequired,
};

export default ImageCarousel;
