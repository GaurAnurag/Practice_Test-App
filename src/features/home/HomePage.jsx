import React, { useEffect } from "react";
import { motion } from "framer-motion";
import { FaBook, FaLaptopCode, FaClipboardList } from "react-icons/fa";
import Header from "../../components/common/Header";
import Footer from "../../components/common/Footer";
import Banner from "../../components/common/Banner";

const fadeUp = (delay = 0) => ({
  initial: { opacity: 0, y: 40 },
  animate: { opacity: 1, y: 0 },
  transition: { duration: 0.7, delay },
});

const services = [
  {
    icon: <FaBook />,
    title: "Featured Courses",
    topics: ["Data Structure", "JavaScript", "Python"],
  },
  {
    icon: <FaLaptopCode />,
    title: "Mock Test",
    topics: ["Data Science & ML", "Full-Stack Development", "App Development"],
  },
  {
    icon: <FaClipboardList />,
    title: "Topics",
    topics: ["Current Affairs", "General Knowledge", "Aptitude"],
  },
];

const testimonials = [
  {
    quote: "The quizzes helped me improve my problem-solving skills drastically!",
    name: "John Doe",
  },
  {
    quote: "Amazing platform with interactive content and real test simulations.",
    name: "Jane Smith",
  },
  {
    quote: "Highly recommend for anyone preparing for technical exams.",
    name: "Mike Lee",
  },
];

const HomePage = () => {
  const navLinks = [
    { to: "/", text: "Home" },
    { to: "/OnlineTest", text: "Quiz" },
    { to: "/About", text: "About Us" },
    { to: "/Contact", text: "Contact Us" },
  ];

  useEffect(() => {
    document.title = "Educap - Home";
    document.documentElement.classList.add("dark");
    localStorage.setItem("theme", "dark");
  }, []);

  return (
  <div className="min-h-screen bg-gradient-to-br from-blue-50 via-purple-50 to-pink-50 flex flex-col">
      <Header brand="Educap" navLinks={navLinks} />
    
  <section className="relative bg-gradient-to-r from-blue-100 via-purple-100 to-pink-100 py-24 border-b-2 border-indigo-100">
        <div className="container mx-auto px-6 flex flex-col md:flex-row items-center gap-8">
          <div className="flex-1 text-center md:text-left">
            <motion.h1
              className="text-4xl md:text-5xl font-extrabold mb-4 text-transparent bg-clip-text bg-gradient-to-r from-indigo-600 via-purple-500 to-pink-500 drop-shadow-lg"
              {...fadeUp(0)}
            >
              Kickstart Your Learning Journey
            </motion.h1>
            <motion.p
              className="text-gray-700 mb-6 max-w-lg"
              {...fadeUp(0.2)}
            >
              Access interactive quizzes, practice tests, and curated courses designed
              to help you excel in your technical career.
            </motion.p>
            <motion.div {...fadeUp(0.4)}>
              <a
                href="/OnlineTest"
                className="bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 hover:from-indigo-600 hover:to-pink-600 text-white font-bold py-3 px-8 rounded-xl shadow-lg transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-indigo-400"
              >
                Start Practicing
              </a>
            </motion.div>
          </div>
          <div className="flex-1">
            <Banner />
          </div>
        </div>
      </section>


  <section className="relative bg-gradient-to-br from-blue-100 via-purple-50 to-pink-100 py-24 border-b-2 border-indigo-100">
    <div className="w-full max-w-6xl mx-auto px-6">
      <motion.h2
        className="text-3xl md:text-4xl font-extrabold text-center mb-14 text-transparent bg-clip-text bg-gradient-to-r from-indigo-600 via-purple-500 to-pink-500 drop-shadow-lg"
        {...fadeUp(0.2)}
      >
        Our Services
      </motion.h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-12">
        {services.map((service, idx) => (
          <motion.div
            key={idx}
            className="bg-white/95 p-10 rounded-3xl shadow-2xl text-center border border-indigo-100 transition-all duration-300 hover:shadow-2xl hover:scale-105 hover:border-indigo-300"
            {...fadeUp(idx * 0.2)}
          >
            <div className="w-20 h-20 flex items-center justify-center rounded-full mx-auto mb-6 text-white text-3xl bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 shadow-lg">
              {service.icon}
            </div>
            <h3 className="text-2xl font-bold mb-3 text-indigo-700">{service.title}</h3>
            <ul className="space-y-2">
              {service.topics.map((topic, i) => (
                <li key={i} className="text-gray-700 text-base">{topic}</li>
              ))}
            </ul>
          </motion.div>
        ))}
      </div>
    </div>
  </section>


  <section className="py-16 bg-blue-50/90 border-b-2 border-indigo-100">
        <div className="container mx-auto px-6 text-center">
          <motion.h2
            className="text-3xl md:text-4xl font-extrabold mb-12 text-transparent bg-clip-text bg-gradient-to-r from-indigo-600 via-purple-500 to-pink-500 drop-shadow-lg"
            {...fadeUp(0)}
          >
            What Our Students Say
          </motion.h2>
          <motion.div className="grid md:grid-cols-3 gap-8" {...fadeUp(0.2)}>
            {testimonials.map((t, idx) => (
              <div key={idx} className="bg-white/90 p-8 rounded-2xl shadow-2xl transition-colors duration-300">
                <p className="text-gray-700 mb-4">"{t.quote}"</p>
                <p className="font-bold text-gray-900">— {t.name}</p>
              </div>
            ))}
          </motion.div>
        </div>
      </section>


  <section className="py-16 bg-gradient-to-r from-pink-50 via-blue-50 to-purple-50 text-gray-900 text-center transition-colors duration-300">
        <motion.h2 className="text-3xl md:text-4xl font-extrabold mb-4 text-transparent bg-clip-text bg-gradient-to-r from-indigo-600 via-purple-500 to-pink-500 drop-shadow-lg" {...fadeUp(0)}>
          Ready to test your skills?
        </motion.h2>
        <motion.p className="mb-6" {...fadeUp(0.2)}>
          Join thousands of learners and start practicing today.
        </motion.p>
        <motion.a
          href="/OnlineTest"
          className="bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 hover:from-indigo-600 hover:to-pink-600 text-white font-bold py-3 px-8 rounded-xl shadow-lg transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-indigo-400"
          {...fadeUp(0.4)}
        >
          Start Practicing
        </motion.a>
      </section>

      <Footer />
    </div>
  );
};

export default HomePage;
