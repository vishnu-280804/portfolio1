import React from 'react';
// import connectlyImg from '../assets/connectly.png'; // Replace with your image path
// import skillbridgeImg from '../assets/skillbridge.png'; // Add respective image
// import spotifyImg from '../assets/spotify.png'; // Add respective image
import image from "../assets/image.png"
import image1 from "../assets/image1.png"
import image3 from "../assets/image3.png"
const projectList = [
  {
    title: 'Connectly',
    description:
      'A real-time chat application built with the MERN stack and Socket.io. Features include user authentication and dynamic messaging.',
    tech: ['React.js', 'Socket.io', 'MongoDB'],
    img: image,
    url:'https://connectly-yvmw.onrender.com/'
  },
  {
    title: 'SkillBridge',
    description:
      'An online course platform where users can sign up, browse, and access educational content. Built using MERN stack with JWT auth.',
    tech: ['React.js', 'Node.js', 'MongoDB'],
    img: image1,
    url:'https://github.com/vishnu-280804/SkillBridge'
  },
  {
    title: 'Spotify Clone',
    description:
      'Frontend clone of Spotify built using HTML, CSS, and JavaScript. Focused on layout, responsiveness, and music UI.',
    tech: ['HTML', 'CSS', 'JavaScript'],
    img: image3,
    url:'https://github.com/vishnu-280804/Spotify-Clone'
  },
];

const Projects = () => {
  return (
    <section id="projects" className="bg-[#e9f1ff] py-12">
      <h2 className="text-3xl font-bold text-center text-blue-800 mb-10">Projects</h2>
      <div className="flex flex-wrap justify-center gap-8 px-4">
        {projectList.map((project, idx) => (
          <div
            key={idx}
            className="bg-white rounded-xl shadow-md border border-blue-200 w-[320px] p-4 hover:shadow-lg transition"
          >
            <img
              src={project.img}
              alt={project.title}
              className="w-full h-48 object-cover rounded-md border border-blue-100"
            />
            <a href={project.url} target='_blank'>
            <h3 className="text-xl font-bold text-blue-700 mt-4">{project.title}</h3></a>
            <p className="text-gray-700 text-sm mt-2">{project.description}</p>
            <div className="mt-3 flex flex-wrap gap-2">
              {project.tech.map((tech, i) => (
                <span
                  key={i}
                  className="bg-blue-600 text-white text-xs font-medium px-2 py-1 rounded-md"
                >
                  {tech}
                </span>
              ))}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Projects;
