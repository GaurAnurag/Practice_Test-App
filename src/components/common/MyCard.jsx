import React from 'react';
import { FaBook, FaLaptopCode, FaUsers } from 'react-icons/fa';

const MyCard = () => {
  const features = [
    {
      icon: <FaBook />,
      title: 'Learning Resources',
      text: 'Access a wide variety of tutorials, guides, and structured courses.',
    },
    {
      icon: <FaLaptopCode />,
      title: 'Practice Tests',
      text: 'Sharpen your skills with mock exams, quizzes, and coding challenges.',
    },
    {
      icon: <FaUsers />,
      title: 'Community Support',
      text: 'Join a thriving community of learners and professionals.',
    },
  ];

  return (
    <div className="container mx-auto px-6 py-16">
      <h2 className="text-3xl md:text-4xl font-extrabold text-center mb-12 text-transparent bg-clip-text bg-gradient-to-r from-indigo-600 via-purple-500 to-pink-500 drop-shadow-lg">
        Our Features
      </h2>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        {features.map((feature, index) => (
          <div
            key={index}
            className="bg-white/90 p-8 rounded-2xl shadow-2xl text-center transition-all duration-300 hover:scale-105 hover:shadow-2xl"
          >
            <div className="w-16 h-16 flex items-center justify-center rounded-full mx-auto mb-4 text-white text-2xl bg-gradient-to-r from-indigo-500 to-purple-500">
              {feature.icon}
            </div>
            <h3 className="text-xl font-semibold mb-2 text-gray-900">{feature.title}</h3>
            <p className="text-gray-700">{feature.text}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default MyCard;