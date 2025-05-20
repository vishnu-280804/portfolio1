import React from 'react';

const skills = ["MongoDB", "JavaScript", "Express.js", "Node.js", "Java"];

const Skills = () => {
  return (
    <div className="bg-[#F0F4FF] py-10 px-6">
      <h2 className="text-2xl font-bold text-[#1E3A8A] mb-6 text-center">Skills</h2>
      <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 max-w-4xl mx-auto hover:text-white">
        {skills.map((skill, index) => (
          <div
            key={index}
            className="bg-white shadow-md hover:bg-blue-600 text-[#1A202C]  hover:text-white hover:font-bold hover:cursor-pointer transition-shadow duration-300 rounded-lg p-4 flex items-center justify-center"
          >
            <h3 className="text-lg font-semibold ">{skill}</h3>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Skills;
