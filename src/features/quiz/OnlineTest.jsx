import React from 'react';
import Header from '../../components/common/Header';
import Footer from '../../components/common/Footer';
import Category from './Category';

const OnlineTest = () => {
  const navLinks = [
    { to: '/', text: 'Home' },
    { to: '/OnlineTest', text: 'Quiz' },
    { to: '/About', text: 'About Us' },
    { to: '/Contact', text: 'Contact Us' },
  ];

  return (
    <div>
      <Header brand="Educap" navLinks={navLinks} />
      <div className="container mx-auto my-10">
        <Category />
      </div>
      <Footer />
    </div>
  );
};

export default OnlineTest;
