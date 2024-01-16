import PropTypes from "prop-types";
import { motion } from "framer-motion";

const Section = ({ title, description, image, extra }) => {
  return (
    <motion.section
      className="mb-8 bg-gray-200 p-6 rounded-lg shadow-md mx-2"
      initial={{ opacity: 0, y: 50 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 1 }}
    >
      <div className="flex flex-col md:flex-row items-center">
        <div className="md:w-1/2 mb-4 md:mb-0 md:mr-4 ">
          <img
            src={image}
            alt={title}
            className="w-full h-auto object-contain rounded-md max-h-80"
          />
        </div>
        <div className="md:w-1/2">
          <h2 className="text-3xl font-semibold mb-4">{title}</h2>
          <p className="text-gray-800 text-justify">{description}</p>
          {extra && <div className="mt-4">{extra}</div>}
        </div>
      </div>
    </motion.section>
  );
};

Section.propTypes = {
  title: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
  image: PropTypes.string.isRequired,
  extra: PropTypes.node,
};

const AboutClubSection = () => {
  return (
    <Section
      title="Mohawk Re-Defined Club: Shaping Student Careers Together"
      description="Mohawk Re-Defined Club, in collaboration with the Re-Defined non-profit, focuses on empowering students, especially students from marginalized communities like the BIPOC community and International Students. Our primary goal is to establish a nurturing community where students can collaborate and uplift one another. Our focus is on creating a space for mutual support rather than striving to be experts, emphasizing the power of students helping each other succeed."
      image="./assets/Redefined-logo-new.png"
    />
  );
};

const MissionSection = () => {
  return (
    <Section
      title="Our Mission"
      description="Our primary goal is to establish a nurturing community where students can collaborate and uplift one another. Our focus is on creating a space for mutual support rather than striving to be experts, emphasizing the power of students helping each other succeed."
      image="./assets/redefined-group2.jpg"
    />
  );
};

const ImpactInitiativesSection = () => {
  return (
    <Section
      title="Impact and Initiatives"
      description="Mohawk Re-Defined Club undertakes various initiatives to empower students and create a supportive community. Some of our key initiatives include:"
      image="./assets/redefined-group.jpg"
      extra={
        <ul className="list-disc ml-6">
          <li>
            <strong>Career Development Workshops:</strong> Tailored workshops
            that cover essential topics like resume building, interview skills,
            personal branding, and navigating the job market. These workshops
            are specifically designed to address the needs and aspirations of
            Mohawk students.
          </li>
          <li>
            <strong>Industry Insight Sessions:</strong> Regular events featuring
            professionals from various industries, offering students first-hand
            insights into different career paths and the skills required for
            success.
          </li>
          <li>
            <strong>Mentorship and Networking:</strong>Facilitating connections
            with industry mentors and creating networking opportunities,
            enabling students to build valuable professional relationships and
            gain practical advice.
          </li>
          <li>
            <strong>Skill Enhancement Programs:</strong>Focused sessions on
            leadership, entrepreneurship, and financial literacy to prepare
            students for diverse career paths and entrepreneurial ventures.
          </li>
        </ul>
      }
    />
  );
};

const About = () => {
  return (
    <div className="container mx-auto py-8">
      <AboutClubSection />
      <MissionSection />
      <ImpactInitiativesSection />
    </div>
  );
};

export default About;
