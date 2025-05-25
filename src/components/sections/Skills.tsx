import React from "react";
import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import {
  Database,
  Server,
  Layout,
  Code2,
  Github as Git,
  Terminal,
  Cloud,
  Settings,
} from "lucide-react";

const skills = [
  {
    name: "Frontend Development",
    icon: Layout,
    description: "React, HTML, CSS, BootStrap",
  },
  {
    name: "Backend Development",
    icon: Server,
    description: "Node.js, Express, Django",
  },
  { name: "Database", icon: Database, description: "MongoDB, MySQL " },
  { name: "Version Control", icon: Git, description: "Git, GitHub" },
  { name: "API Development", icon: Code2, description: "REST" },
  { name: "Hosting", icon: Cloud, description: "Render, Vercel " },
  { name: "Command Line", icon: Terminal, description: "Bash, Zsh" },
  { name: "Tools", icon: Settings, description: "VS Code, Postman" },
];

const Skills = () => {
  const [ref, inView] = useInView({
    threshold: 0.1,
    triggerOnce: true,
  });

  return (
    <section id="skills" className="py-20 bg-white">
      <div className="container mx-auto px-6">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 50 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
        >
          <h2 className="text-4xl font-bold text-center text-gray-800 mb-12">
            Skills & Technologies
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {skills.map((skill, index) => (
              <motion.div
                key={skill.name}
                initial={{ opacity: 0, y: 20 }}
                animate={inView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="bg-white p-6 rounded-xl shadow-lg hover:shadow-xl transition-shadow duration-300"
              >
                <div className="flex items-center mb-4">
                  <skill.icon className="w-8 h-8 text-indigo-600 mr-3" />
                  <h3 className="text-xl font-semibold text-gray-800">
                    {skill.name}
                  </h3>
                </div>
                <p className="text-gray-600">{skill.description}</p>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Skills;
