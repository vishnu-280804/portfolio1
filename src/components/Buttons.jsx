import React from "react";
import "../index.css";

const Buttons = () => {
  const sections = [
    { label: "About", id: "about" },
    { label: "Education", id: "education" },
    { label: "Skills", id: "skills" },
    { label: "Projects", id: "projects" },
    { label: "Contact", id: "contact" },
  ];

  return (
    <div className="flex justify-center items-center gap-4 bg-blue-50 py-4">
      {sections.map(({ label, id }) => (
        <a href={`#${id}`} key={id}>
          <button
            className="px-6 py-2 bg-blue-600 hover:bg-blue-500 hover:cursor-pointer text-white font-medium rounded-lg shadow-md transition duration-300 ease-in-out transform hover:scale-105 focus:outline-none focus:ring-2 focus:ring-blue-300"
          >
            {label}
          </button>
        </a>
      ))}
    </div>
  );
};

export default Buttons;
