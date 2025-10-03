import React, { useEffect, useState } from 'react';
import Header from '../../components/common/Header';
import Footer from '../../components/common/Footer';

const MyResults = () => {
  const [history, setHistory] = useState([]);

  useEffect(() => {
    const data = JSON.parse(localStorage.getItem('quizHistory') || '[]');
    setHistory(data.reverse());
  }, []);

  return (
    <div className="bg-white dark:bg-gray-900 min-h-screen transition-colors duration-300">
      <Header brand="Educap" navLinks={[
        { to: '/', text: 'Home' },
        { to: '/OnlineTest', text: 'Quiz' },
        { to: '/About', text: 'About Us' },
        { to: '/Contact', text: 'Contact Us' },
        { to: '/MyResults', text: 'My Results' },
      ]} />
      <div className="container mx-auto my-10 px-4">
        <h1 className="text-3xl font-bold mb-6 text-center text-gray-900 dark:text-white">My Quiz Results</h1>
        {history.length === 0 ? (
          <div className="text-center text-gray-500 dark:text-gray-300">No quiz attempts found.</div>
        ) : (
          <div className="overflow-x-auto">
            <table className="min-w-full bg-white dark:bg-gray-800 rounded-lg shadow-md">
              <thead className="bg-blue-500 text-white">
                <tr>
                  <th className="py-2 px-4">Date</th>
                  <th className="py-2 px-4">Category</th>
                  <th className="py-2 px-4">Score</th>
                  <th className="py-2 px-4">Flagged</th>
                </tr>
              </thead>
              <tbody>
                {history.map((item, idx) => (
                  <tr key={idx} className="border-b hover:bg-blue-50 dark:hover:bg-gray-700">
                    <td className="py-2 px-4 text-gray-900 dark:text-white">{item.date}</td>
                    <td className="py-2 px-4 text-gray-900 dark:text-white">{item.category}</td>
                    <td className="py-2 px-4 text-gray-900 dark:text-white">{item.score} / {item.total}</td>
                    <td className="py-2 px-4 text-gray-900 dark:text-white">{item.flagged}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        )}
      </div>
      <Footer />
    </div>
  );
};

export default MyResults;
