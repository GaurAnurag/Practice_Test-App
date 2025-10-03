import React from 'react';
import { FaFacebookF, FaTwitter, FaInstagram, FaLinkedin, FaGithub } from 'react-icons/fa';

const Footer = () => {
  const year = new Date().getFullYear();

  return (
    <footer className="bg-gray-800 text-white mt-10">
      <div className="container mx-auto px-4 py-10 grid md:grid-cols-3 gap-8">
        {/* About */}
        <div>
          <h5 className="font-bold mb-2 text-lg">Educap</h5>
          <p>
            Empowering technical students with practice tests, resources, and career opportunities to succeed.
          </p>
        </div>

        {/* Quick Links */}
        <div>
          <h5 className="font-bold mb-2 text-lg">Quick Links</h5>
          <ul className="space-y-1">
            <li><a href="/" className="hover:underline">Home</a></li>
            <li><a href="/Online Test" className="hover:underline">Quiz</a></li>
            <li><a href="/About" className="hover:underline">About Us</a></li>
            <li><a href="/Contact" className="hover:underline">Contact Us</a></li>
          </ul>
        </div>

        {/* Social */}
        <div>
          <h5 className="font-bold mb-2 text-lg">Follow Us</h5>
          <div className="flex space-x-3">
            <a href="https://facebook.com" className="p-2 bg-white text-gray-800 rounded-full hover:bg-blue-600 hover:text-white transition-colors"><FaFacebookF /></a>
            <a href="https://twitter.com" className="p-2 bg-white text-gray-800 rounded-full hover:bg-blue-400 hover:text-white transition-colors"><FaTwitter /></a>
            <a href="https://instagram.com" className="p-2 bg-white text-gray-800 rounded-full hover:bg-pink-500 hover:text-white transition-colors"><FaInstagram /></a>
            <a href="https://linkedin.com" className="p-2 bg-white text-gray-800 rounded-full hover:bg-blue-700 hover:text-white transition-colors"><FaLinkedin /></a>
            <a href="https://github.com" className="p-2 bg-white text-gray-800 rounded-full hover:bg-gray-900 hover:text-white transition-colors"><FaGithub /></a>
          </div>
        </div>
      </div>

      <div className="bg-black bg-opacity-20 text-center py-4">
        © {year} <a href="/" className="hover:underline">Educap.com</a>
      </div>
    </footer>
  );
};

export default Footer;
