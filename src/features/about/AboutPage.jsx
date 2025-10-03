import React from 'react';
import { motion } from 'framer-motion';
import Header from '../../components/common/Header';
import Footer from '../../components/common/Footer';
import teamImage from '../../assets/images/3684.jpg';

const AboutPage = () => {
  const navLinks = [
    { to: '/', text: 'Home' },
    { to: '/OnlineTest', text: 'Quiz' },
    { to: '/About', text: 'About Us' },
    { to: '/Contact', text: 'Contact Us' },
  ];

  const team = [
    { name: "Member 1", role: "System Designer", email: "member1@example.com", image: teamImage },
    { name: "Member 2", role: "Database Admin", email: "member2@example.com", image: teamImage },
    { name: "Member 3", role: "System Developer", email: "member3@example.com", image: teamImage },
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 via-purple-50 to-pink-50 flex flex-col">
      <Header brand="Educap" navLinks={navLinks} />
      <div className="container mx-auto my-10 px-4 flex-1">
        <motion.div className="text-center mb-10" initial={{ opacity: 0, y: 40 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.7 }}>
          <h1 className="text-4xl font-extrabold mb-4 text-transparent bg-clip-text bg-gradient-to-r from-indigo-600 via-purple-500 to-pink-500 drop-shadow-lg">About Educap</h1>
          <p className="text-gray-700 text-lg">Educap is an online education platform supporting technical students in their career journey.</p>
        </motion.div>
        <motion.div className="grid md:grid-cols-2 gap-10 mb-12" initial={{ opacity: 0, y: 40 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.7, delay: 0.2 }}>
          <div className="bg-white/90 rounded-2xl shadow-2xl p-8">
            <h2 className="text-2xl font-bold mb-4 text-indigo-700">🎯 Our Mission</h2>
            <p className="text-gray-700">Provide interactive courses, practice tests, and career opportunities to bridge education and industry.</p>
          </div>
          <div className="bg-white/90 rounded-2xl shadow-2xl p-8">
            <h2 className="text-2xl font-bold mb-4 text-indigo-700">🌍 Our Vision</h2>
            <p className="text-gray-700">Enable every technical student to access resources and support to excel in their career.</p>
          </div>
        </motion.div>

        <motion.div className="text-center mb-8" initial={{ opacity: 0, y: 40 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.7, delay: 0.4 }}>
          <h2 className="text-3xl font-extrabold mb-2 text-transparent bg-clip-text bg-gradient-to-r from-indigo-600 via-purple-500 to-pink-500 drop-shadow-lg">👩‍💻 Our Team</h2>
          <p className="text-gray-700 text-lg">Meet the dedicated team behind Educap.</p>
        </motion.div>
        <motion.div className="grid md:grid-cols-3 gap-10" initial={{ opacity: 0, y: 40 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.7, delay: 0.6 }}>
          {team.map((member, idx) => (
            <motion.div
              key={idx}
              className="bg-white/90 rounded-2xl shadow-2xl p-8 text-center transition-transform duration-200 hover:scale-105 hover:shadow-2xl"
              whileHover={{ scale: 1.05 }}
            >
              <img src={member.image} alt={member.name} className="w-36 h-36 rounded-full mx-auto mb-4 object-cover shadow-md" />
              <h3 className="text-xl font-bold text-indigo-700">{member.name}</h3>
              <p className="text-gray-500">{member.role}</p>
              <p className="text-blue-500">{member.email}</p>
            </motion.div>
          ))}
        </motion.div>
      </div>

      <Footer />
    </div>
  );
};

export default AboutPage;
