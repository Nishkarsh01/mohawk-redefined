import PropTypes from "prop-types";

const About = () => {
  return (
    <div className="container mx-auto py-8">
      <AboutClubSection />
      <MissionSection />
      <HistorySection />
      <TeamSection />
      <CollaborationSection />
      <SuccessStoriesSection />
      <TestimonialsSection />
    </div>
  );
};

const Section = ({ title, description, image, isOdd }) => {
  const isWhiteBackground = !isOdd;

  return (
    <section
      className={`mb-8 ${
        isWhiteBackground ? "bg-white" : "bg-gray-200"
      } p-6 rounded-lg shadow-md`}
    >
      <div className="flex flex-col md:flex-row items-center">
        <div
          className={`order-${
            isWhiteBackground ? "1" : "2"
          } md:w-1/2 mb-4 md:mb-0 md:mr-${isWhiteBackground ? "0" : "4"}`}
        >
          <img
            src={image}
            alt={title}
            className="w-full h-auto object-contain rounded-md max-h-40"
          />
        </div>
        <div className={`order-${isWhiteBackground ? "2" : "1"} md:w-1/2`}>
          <h2 className="text-3xl font-semibold mb-4">{title}</h2>
          <p className="text-gray-800 text-justify">{description}</p>
        </div>
      </div>
    </section>
  );
};

Section.propTypes = {
  title: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
  image: PropTypes.string.isRequired,
  isOdd: PropTypes.bool.isRequired,
};

const AboutClubSection = () => {
  return (
    <Section
      title="About Mohawk Re-Defined Club"
      description="Re-Defined is non-profit started in January, 2022 with the goal of empowering people from marginalized communities especially BIPOC community and international students. The main ways in which we hope to empower the youth is via provision of access to education, opportunities and necessary resources. Our education comes in the form of workshops which cater to topics raging from social issues like menstrual and sexual education, awareness around sexual abuse, climate and sustainability to skill/career based topics like entrepreneurship, leadership, marketing and financial literacy more to also topics such as health literary and more. We couple these with provisions of access to opportunities in the form of events, mentorship programs, networking, fellowship opportunities and community engagement and provision for access to resources such as those of menstrual products, school supplies and more. 
      Through this work we have been able to impact around 20,000 people in the last 1.5 years across 4 countries: India (Pune, Mumbai, Delhi & Karnataka), Canada (Vancouver Halifax & Toronto), and Uganda and Ghana. We have also conducted 25+ events in the last 6 months for more than 1000 students in Canada and India to further building of skills and confidence among the youth and thus, empowering them to become write-off their own story and get the access to role models that guide them to do so."
      image="./assets/redefined-logo.png"
      isOdd={true}
    />
  );
};

const MissionSection = () => {
  return (
    <Section
      title="Our Mission"
      description="Your mission content here."
      image="/path/to/your/image2.jpg"
      isOdd={false}
    />
  );
};

const HistorySection = () => {
  return (
    <Section
      title="About Mohawk Re-Defined Club"
      description="Your about content here."
      image="/path/to/your/image1.jpg"
      isOdd={true}
    />
  );
};

const TeamSection = () => {
  return (
    <Section
      title="About Mohawk Re-Defined Club"
      description="Your about content here."
      image="/path/to/your/image1.jpg"
      isOdd={true}
    />
  );
};

const CollaborationSection = () => {
  return (
    <Section
      title="About Mohawk Re-Defined Club"
      description="Your about content here."
      image="/path/to/your/image1.jpg"
      isOdd={true}
    />
  );
};

const SuccessStoriesSection = () => {
  return (
    <Section
      title="About Mohawk Re-Defined Club"
      description="Your about content here."
      image="/path/to/your/image1.jpg"
      isOdd={true}
    />
  );
};

const TestimonialsSection = () => {
  return (
    <Section
      title="About Mohawk Re-Defined Club"
      description="Your about content here."
      image="/path/to/your/image1.jpg"
      isOdd={true}
    />
  );
};

export default About;
