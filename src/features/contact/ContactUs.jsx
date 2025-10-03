import React, { useState } from 'react';
import { motion } from 'framer-motion';
import Header from '../../components/common/Header';
import Footer from '../../components/common/Footer';

import { FaMapMarkerAlt, FaPhone, FaEnvelope } from 'react-icons/fa';

const ContactUs = () => {
  const navLinks = [
    { to: '/', text: 'Home' },
    { to: '/OnlineTest', text: 'Quiz' },
    { to: '/About', text: 'About Us' },
    { to: '/Contact', text: 'Contact Us' },
  ];

  const [formData, setFormData] = useState({ name: '', email: '', subject: '', message: '' });
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleChange = (e) => setFormData({ ...formData, [e.target.name]: e.target.value });
  const validateEmail = (email) => /\S+@\S+\.\S+/.test(email);

  const handleSubmit = (e) => {
    e.preventDefault();
    const { name, email, subject, message } = formData;
    if (!name || !email || !subject || !message) {
      alert('❌ Please fill in all fields.');
      return;
    }
    if (!validateEmail(email)) {
      alert('📧 Please enter a valid email address.');
      return;
    }

    setIsSubmitting(true);
    setTimeout(() => {
      alert('✅ Message sent successfully!');
      setFormData({ name: '', email: '', subject: '', message: '' });
      setIsSubmitting(false);
    }, 1500);
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 via-purple-50 to-pink-50 flex flex-col">
      <Header brand="Educap" navLinks={navLinks} />
      <div className="container mx-auto my-10 px-4 flex-1">
        <motion.div className="text-center mb-10" initial={{ opacity: 0, y: 40 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.7 }}>
          <h1 className="text-4xl font-extrabold mb-4 text-transparent bg-clip-text bg-gradient-to-r from-indigo-600 via-purple-500 to-pink-500 drop-shadow-lg">Contact Us</h1>
          <p className="text-gray-700 text-lg">We'd love to hear from you! Fill out the form below.</p>
        </motion.div>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-10">

          <motion.div className="bg-white/90 rounded-2xl shadow-2xl p-8 md:p-12 w-full max-w-xl mx-auto" initial={{ opacity: 0, y: 40 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.7, delay: 0.2 }}>
            <h2 className="text-2xl font-bold mb-6 text-indigo-700">Send us a Message</h2>
            <form onSubmit={handleSubmit} className="space-y-6">
              {['name','email','subject'].map((field) => (
                <div key={field} className="mb-4">
                  <label className="block text-gray-700 font-semibold mb-2 capitalize" htmlFor={field}>{field}</label>
                  <input
                    type={field==='email'?'email':'text'}
                    name={field}
                    id={field}
                    value={formData[field]}
                    onChange={handleChange}
                    placeholder={`Enter your ${field}`}
                    className="w-full px-4 py-2 border border-gray-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-indigo-400 bg-gray-50 transition-all"
                  />
                </div>
              ))}
              <div className="mb-4">
                <label className="block text-gray-700 font-semibold mb-2" htmlFor="message">Message</label>
                <textarea
                  name="message"
                  id="message"
                  rows="4"
                  value={formData.message}
                  onChange={handleChange}
                  placeholder="Enter your message"
                  className="w-full px-4 py-2 border border-gray-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-indigo-400 bg-gray-50 transition-all"
                />
              </div>
              <button
                type="submit"
                disabled={isSubmitting}
                className="w-full bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 text-white py-3 rounded-xl font-bold shadow-lg hover:from-indigo-600 hover:to-pink-600 transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-indigo-400 flex items-center justify-center"
              >
                {isSubmitting ? (
                  <svg className="animate-spin h-5 w-5 mr-2 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                    <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                    <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8v8z"></path>
                  </svg>
                ) : null}
                {isSubmitting ? 'Sending...' : 'Send Message'}
              </button>
            </form>
          </motion.div>

          <motion.div className="space-y-6" initial={{ opacity: 0, y: 40 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.7, delay: 0.4 }}>
            <div className="bg-white/90 rounded-lg shadow-xl p-6">
              <h2 className="text-2xl font-bold mb-4">Contact Information</h2>
              <p className="flex items-center mb-2"><FaMapMarkerAlt className="mr-2"/> San Francisco, CA 94126, USA</p>
              <p className="flex items-center mb-2"><FaPhone className="mr-2"/> +01 234 567 89</p>
              <p className="flex items-center"><FaEnvelope className="mr-2"/> contact@educap.com</p>
            </div>
            <div className="bg-white rounded-lg shadow-lg p-6">
              <h2 className="text-2xl font-bold mb-4">Our Location</h2>
              <div className="overflow-hidden rounded-lg">
                <iframe
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3153.297023142559!2d-122.4194154846813!3d37.77492957975835!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x80858064d6b95f3d%3A0x4a501367f076adff!2sSan%20Francisco%2C%20CA%2C%20USA!5e0!3m2!1sen!2sin!4v1620049323434!5m2!1sen!2sin"
                  width="100%"
                  height="300"
                  className="border-0"
                  allowFullScreen
                  loading="lazy"
                  title="Google Maps"
                />
              </div>
            </div>
          </motion.div>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default ContactUs;
