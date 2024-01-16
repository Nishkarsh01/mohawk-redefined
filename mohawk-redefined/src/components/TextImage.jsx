import PropTypes from "prop-types";

const TextImage = ({ title, description, imageUrl, imageOnLeft }) => {
  const textSideClass = imageOnLeft ? "md:order-2" : "";
  const imageSideClass = imageOnLeft ? "md:order-1" : "";
  return (
    <div
      className={`flex flex-col md:flex-row items-center mb-8 gap-3 ${textSideClass}`}
    >
      <div
        className={`md:w-1/2 sm:mx-0 p-6 mx-4 md:mx-20 my-20 ${textSideClass}`}
      >
        <h2 className="text-3xl font-bold mb-10">{title}</h2>
        <p className="text-gray-600 text-justify text-lg m-2">{description}</p>
      </div>

      <div
        className={`md:w-1/2 h-auto md:flex items-center justify-center mr-5 ml-10 ${imageSideClass}`}
      >
        <div className="md:max-h-full max-w-4/5 overflow-hidden">
          <img
            src={imageUrl}
            alt="Image Description"
            className="w-full h-auto md:h-full object-cover"
          />
        </div>
      </div>
    </div>
  );
};

TextImage.propTypes = {
  title: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
  imageUrl: PropTypes.string.isRequired,
  imageOnLeft: PropTypes.bool,
};

TextImage.defaultProps = {
  imageOnLeft: true,
};

export default TextImage;
