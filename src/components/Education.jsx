import React from 'react';

const Education = () => {
  return (
    <div className='bg-gray-100 m-0 p-10'>
<section className="bg-white p-6 rounded-lg shadow-md max-w-3xl mx-auto">
  <h2 className="text-2xl font-bold mb-4 text-center text-blue-700">Education</h2>
  <table className="w-full text-left bg-gray-50 shadow-md rounded-lg overflow-hidden">
    <thead className="bg-blue-600 text-white">

          <tr>
            <th className="py-3 px-4 font-extrabold">Institution</th>
            <th className="py-3 px-4 font-extrabold">Year</th>
            <th className="py-3 px-4 font-extrabold">Details</th>
          </tr>
        </thead>
        <tbody>
          <tr className="border-b hover:bg-gray-50">
            <td className="py-3 px-4 font-bold">CVR College of Engineering</td>
            <td className="py-3 px-4 font-bold">2022 - 2026</td>
            <td className="py-3 px-4 font-bold">B.Tech in Data Science, CGPA: 9.1</td>
          </tr>
          <tr className="border-b hover:bg-gray-50">
            <td className="py-3 px-4 font-bold">Sri Chaitanya Junior Kalasala</td>
            <td className="py-3 px-4 font-bold">2020 - 2022</td>
            <td className="py-3 px-4 font-bold">Intermediate, 97.7%</td>
          </tr>
          <tr className="hover:bg-gray-50">
            <td className="py-3 px-4 font-bold">St. Joseph School</td>
            <td className="py-3 px-4 font-bold">2020</td>
            <td className="py-3 px-4 font-bold">10th Grade, 75%</td>
          </tr>
        </tbody>
      </table>
    </section>
    </div>
  );
};

export default Education;
