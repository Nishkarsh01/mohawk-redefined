const TextImage = () => {
  return (
    <div className="flex flex-col md:flex-row items-center mb-8 gap-3">
      {/* Left Side: Text */}
      <div className="md:w-1/2 p-6 mx-20 my-20">
        <h2 className="text-3xl font-bold mb-10">About Us</h2>
        <p className="text-gray-600 text-justify text-lg">
          Re-Defined is a non-profit started in January 2022 with the goal of
          empowering people from marginalized communities, especially the BIPOC
          community and international students. The main ways in which we hope
          to empower the youth is via the provision of access to education,
          opportunities, and necessary resources. Our education comes in the
          form of workshops covering a wide range of topics.
        </p>
      </div>

      {/* Right Side: Image Container */}
      <div className="md:w-1/2 md:flex items-center justify-center mr-4">
        <div className="md:max-h-full overflow-hidden">
          <img
            src="./assets/resume-building.jpg"
            alt="Image Description"
            className="w-full h-auto md:h-full object-cover"
          />
        </div>
      </div>
    </div>
  );
};

export default TextImage;
