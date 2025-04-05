import React from "react";
import { motion } from "framer-motion";
import resumePDF from "../../assets/Mohith.pdf";
import { useInView } from "react-intersection-observer";

const About = () => {
  const [ref, inView] = useInView({
    threshold: 0.3,
    triggerOnce: true,
  });

  return (
    <section id="about" className="py-24 bg-gray-50">
      <div className="container mx-auto px-6">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 50 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="flex flex-col md:flex-row items-center justify-between max-w-7xl mx-auto"
        >
          {/* Text Content */}
          <div className="w-full md:w-1/2 text-left space-y-6">
            <h2 className="text-4xl font-bold text-gray-800 mb-10">About Me</h2>
            <p className="text-xl text-gray-700 leading-relaxed">
              Hey there! I'm{" "}
              <span className="text-indigo-600 font-semibold">
                Mohith Reddy
              </span>
              , a passionate MERN Stack Developer who loves crafting seamless
              digital experiences. From designing eye-catching user interfaces
              to building powerful backends, I thrive on turning ideas into
              reality.
            </p>
            <ul className="space-y-3 text-lg text-gray-700">
              <li>
                💡 <span className="font-medium">Solving complex problems</span>{" "}
                with simple, elegant code.
              </li>
              <li>
                🎨{" "}
                <span className="font-medium">
                  Creating intuitive and engaging
                </span>{" "}
                UI/UX experiences.
              </li>
              <li>
                🤖{" "}
                <span className="font-medium">
                  Exploring AI-driven web applications
                </span>{" "}
                and emerging tech.
              </li>
            </ul>
            <div>
              <h3 className="text-xl font-semibold text-gray-900 mt-6 mb-3">
                ⚡ My Superpowers:
              </h3>
              <div className="flex flex-wrap gap-2">
                {[
                  "REACTJS",
                  "NODEJS",
                  "HTML5",
                  "CSS3",
                  "Bootstrap",
                  "JavaScript",
                ].map((tech) => (
                  <span
                    key={tech}
                    className="bg-indigo-100 text-indigo-700 px-3 py-1 rounded-full text-sm font-medium"
                  >
                    {tech}
                  </span>
                ))}
              </div>
            </div>
            <p className="text-lg text-gray-700 mt-6">
              When I'm not coding, you’ll find me experimenting with new tech,
              brainstorming innovative ideas, or maybe just enjoying a good cup
              of coffee ☕.
            </p>
            <a
              href={resumePDF}
              download="Mohith_Reddy_Resume.pdf"
              className="fixed bottom-6 right-6 z-50 bg-indigo-600 hover:bg-indigo-700 text-white font-semibold px-5 py-3 rounded-full shadow-lg transition duration-300"
            >
              Resume 📄
            </a>
          </div>

          {/* Image */}
          <div className="w-full md:w-[45%] mt-12 md:mt-0 md:pl-12 flex justify-end">
            <img
              src="https://images.unsplash.com/photo-1498050108023-c5249f4df085?auto=format&fit=crop&w=800&q=80"
              alt="Developer workspace"
              className="rounded-xl shadow-xl max-w-full md:max-w-[500px] object-cover"
            />
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default About;
