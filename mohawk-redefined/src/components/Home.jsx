import ImageCarousel from "./ImageCarousel";
import TextImage from "./TextImage";
import { motion } from "framer-motion";

const Home = () => {
  const recentActivityImages = [
    "anchor-2.jpg",
    "hackathon-og.jpg",
    "redefined-group.jpg",
  ];

  const aboutUsContent = {
    title: "About Us",
    description: `
      Mohawk Re-Defined Club, in collaboration with the Re-Defined non-profit,
      focuses on empowering students, especially students from marginalized communities
      like the BIPOC community and International Students. Our primary goal is to
      establish a nurturing community where students can collaborate and uplift one another.
      Our focus is on creating a space for mutual support rather than striving to be experts,
      emphasizing the power of students helping each other succeed.
    `,
    imageUrl: "./assets/Redefined-logo-new.png",
    imageOnLeft: true,
  };

  const eventsContent = {
    title: "Events",
    description: `
    Embark on a transformative journey with Mohawk Redefined, where we strive to empower individuals
    through education, opportunities, and community engagement. Stay tuned for our upcoming events
    that are meticulously crafted to inspire and foster growth. Join us on this exciting venture,
    as we collectively redefine our future. Be part of a community that values inclusivity, learning,
    and making a positive impact. Together, let's shape a future where everyone has the chance to thrive.
    Join Mohawk Redefined and be part of something extraordinary!
    `,
    imageUrl: "./assets/og-group.jpg",
    imageOnLeft: false,
  };

  return (
    <>
      <div>
        <section className="container mx-auto mb-8 h-auto">
          <div className="max-w-3xl mx-auto mt-2">
            <motion.div
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 1 }}
            >
              <ImageCarousel images={recentActivityImages} />
            </motion.div>
          </div>
        </section>
        <section className="mb-10">
          <a href="/About">
            <motion.div
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 1 }}
            >
              <TextImage {...aboutUsContent} />
            </motion.div>
          </a>
        </section>
        <section className="mr-10 mb-10">
          <a href="/Events">
            <motion.div
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 1 }}
            >
              <TextImage {...eventsContent} />
            </motion.div>
          </a>
        </section>
      </div>
    </>
  );
};

export default Home;
