// import React from 'react';
// import { motion } from 'framer-motion';
// import { useInView } from 'react-intersection-observer';
// import { Github, ExternalLink } from 'lucide-react';

// const projects = [
//   {
//     title: 'E-Commerce Platform',
//     description: 'A full-stack e-commerce platform built with React, Node.js, and MongoDB.',
//     image: 'https://images.unsplash.com/photo-1557821552-17105176677c?auto=format&fit=crop&w=800&q=80',
//     technologies: ['React', 'Node.js', 'MongoDB', 'Express'],
//     github: 'https://github.com',
//     live: 'https://example.com',
//   },
//   {
//     title: 'Task Management App',
//     description: 'A collaborative task management application with real-time updates.',
//     image: 'https://images.unsplash.com/photo-1507925921958-8a62f3d1a50d?auto=format&fit=crop&w=800&q=80',
//     technologies: ['React', 'Socket.io', 'PostgreSQL', 'Express'],
//     github: 'https://github.com',
//     live: 'https://example.com',
//   },
//   {
//     title: 'Social Media Dashboard',
//     description: 'Analytics dashboard for social media management and monitoring.',
//     image: 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&w=800&q=80',
//     technologies: ['React', 'D3.js', 'Node.js', 'MongoDB'],
//     github: 'https://github.com',
//     live: 'https://example.com',
//   },
// ];

// const Projects = () => {
//   const [ref, inView] = useInView({
//     threshold: 0.1,
//     triggerOnce: true,
//   });

//   return (
//     <section id="projects" className="py-20 bg-gray-50">
//       <div className="container mx-auto px-6">
//         <motion.div
//           ref={ref}
//           initial={{ opacity: 0, y: 50 }}
//           animate={inView ? { opacity: 1, y: 0 } : {}}
//           transition={{ duration: 0.8 }}
//         >
//           <h2 className="text-4xl font-bold text-center text-gray-800 mb-12">Featured Projects</h2>
//           <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
//             {projects.map((project, index) => (
//               <motion.div
//                 key={project.title}
//                 initial={{ opacity: 0, y: 20 }}
//                 animate={inView ? { opacity: 1, y: 0 } : {}}
//                 transition={{ duration: 0.5, delay: index * 0.1 }}
//                 className="bg-white rounded-xl overflow-hidden shadow-lg hover:shadow-xl transition-shadow duration-300"
//               >
//                 <img
//                   src={project.image}
//                   alt={project.title}
//                   className="w-full h-48 object-cover"
//                 />
//                 <div className="p-6">
//                   <h3 className="text-xl font-semibold text-gray-800 mb-2">{project.title}</h3>
//                   <p className="text-gray-600 mb-4">{project.description}</p>
//                   <div className="flex flex-wrap gap-2 mb-4">
//                     {project.technologies.map((tech) => (
//                       <span
//                         key={tech}
//                         className="px-3 py-1 bg-indigo-100 text-indigo-600 rounded-full text-sm"
//                       >
//                         {tech}
//                       </span>
//                     ))}
//                   </div>
//                   <div className="flex justify-between">
//                     <a
//                       href={project.github}
//                       target="_blank"
//                       rel="noopener noreferrer"
//                       className="flex items-center text-gray-600 hover:text-indigo-600 transition-colors duration-300"
//                     >
//                       <Github size={20} className="mr-2" />
//                       Code
//                     </a>
//                     <a
//                       href={project.live}
//                       target="_blank"
//                       rel="noopener noreferrer"
//                       className="flex items-center text-gray-600 hover:text-indigo-600 transition-colors duration-300"
//                     >
//                       <ExternalLink size={20} className="mr-2" />
//                       Live Demo
//                     </a>
//                   </div>
//                 </div>
//               </motion.div>
//             ))}
//           </div>
//         </motion.div>
//       </div>
//     </section>
//   );
// };

// export default Projects;

import React from "react";
import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { Github, ExternalLink } from "lucide-react";

const projects = [
  {
    emoji: "💰",
    title: "InvestBot (AI Finance Assistant)",
    description:
      "An AI-powered chatbot that helps users track expenses, ask financial queries, and receive smart investment tips.",
    image:
      "https://images.pexels.com/photos/534216/pexels-photo-534216.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1​",
    technologies: ["React", "Node.js", "OpenAI API", "Express"],
    github: "https://github.com",
    live: "https://example.com",
  },
  {
    emoji: "📦",
    title: "Task Management App",
    description:
      "A collaborative task management application with real-time updates.",
    image:
      "https://images.unsplash.com/photo-1507925921958-8a62f3d1a50d?auto=format&fit=crop&w=800&q=80",
    technologies: ["React", "Socket.io", "PostgreSQL", "Express"],
    github: "https://github.com",
    live: "https://example.com",
  },
  {
    emoji: "📱",
    title: "QR Code Generator",
    description:
      "A tool to generate QR codes instantly from text or files, with Cloudinary upload and secure PDF downloads.",
    image:
      "https://images.unsplash.com/photo-1626682561113-d1db402cc866?q=80&w=1974&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    technologies: ["React", "Cloudinary", "Express", "MongoDB"],
    github: "https://github.com",
    live: "https://example.com",
  },
];

const Projects = () => {
  const [ref, inView] = useInView({
    threshold: 0.1,
    triggerOnce: true,
  });

  return (
    <section id="projects" className="py-20 bg-gray-50">
      <div className="container mx-auto px-6">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 50 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
        >
          <h2 className="text-4xl font-bold text-center text-gray-800 mb-12">
            Featured Projects
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {projects.map((project, index) => (
              <motion.div
                key={project.title}
                initial={{ opacity: 0, y: 30 }}
                animate={inView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.6, delay: index * 0.2 }}
                className="bg-white rounded-xl overflow-hidden shadow-lg hover:shadow-xl transition-shadow duration-300"
              >
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-48 object-cover"
                />
                <div className="p-6">
                  <h3 className="text-xl font-semibold text-gray-800 mb-7">
                    {project.emoji} {project.title}
                  </h3>
                  <p className="text-gray-600 mb-6">{project.description}</p>
                  <div className="flex flex-wrap gap-2 mb-6">
                    {project.technologies.map((tech) => (
                      <span
                        key={tech}
                        className="px-3 py-1 bg-indigo-100 text-indigo-600 rounded-full text-sm"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                  <div className="flex justify-between">
                    <a
                      href={project.github}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center text-gray-600 hover:text-indigo-600 transition-colors duration-300"
                    >
                      <Github size={20} className="mr-2" />
                      Code
                    </a>
                    <a
                      href={project.live}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center text-gray-600 hover:text-indigo-600 transition-colors duration-300"
                    >
                      <ExternalLink size={20} className="mr-2" />
                      Live Demo
                    </a>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Projects;
