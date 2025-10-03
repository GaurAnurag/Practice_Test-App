import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { Categories } from "../../data/data";
import { motion } from "framer-motion";

const fadeUp = (delay = 0) => ({
  initial: { opacity: 0, y: 40 },
  animate: { opacity: 1, y: 0 },
  transition: { duration: 0.7, delay },
});

const Category = () => {
  const [categories, setCategories] = useState([]);

  useEffect(() => {
    setCategories(Categories);
  }, []);

  return (
  <div className="min-h-[calc(100vh-4rem)] w-full bg-gradient-to-br from-indigo-100 via-pink-50 via-60% to-purple-100 flex flex-col justify-center items-center py-12 px-4">
      <motion.div
        className="text-center mb-12 w-full max-w-3xl mx-auto"
        {...fadeUp(0)}
      >
        <h1 className="text-4xl font-extrabold mb-3 text-transparent bg-clip-text bg-gradient-to-r from-indigo-600 via-purple-500 to-pink-500 drop-shadow-lg">Browse Categories</h1>
        <p className="text-gray-700 text-lg max-w-2xl mx-auto">
          Explore subjects and dive into quizzes designed to sharpen your knowledge.
        </p>
      </motion.div>

      <motion.div
        className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-10 w-full max-w-6xl mx-auto"
        initial="hidden"
        animate="visible"
      >
        {categories.map((category, index) => (
          <motion.div
            key={category._id}
            className="bg-white/90 rounded-2xl shadow-2xl border border-indigo-100 overflow-hidden transition-transform transform hover:scale-105 hover:shadow-2xl"
            {...fadeUp(index * 0.2)}
            whileHover={{ y: -5 }}
          >
            <div className="p-6">

              <h3 className="text-2xl font-semibold text-red-700 mb-4 border-b pb-2">
                {category.SubjectName}
              </h3>


              <ul className="flex flex-col gap-3">
                {category.topics.map((topic) => (
                  <li key={topic._id}>
                    <Link
                      to={`/OnlineTest/${topic._id}/${topic.name}`}
                      className="block px-4 py-2 rounded-xl font-bold shadow-lg bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 text-white border-0 hover:from-indigo-600 hover:to-pink-600 transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-indigo-400"
                    >
                      {topic.name}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          </motion.div>
        ))}
      </motion.div>
    </div>
  );
};

export default Category;
