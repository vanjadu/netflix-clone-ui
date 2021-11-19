import React from 'react';
import Navbar from '../components/Navbar';
import Billboard from '../components/Billboard';
import Titles from '../components/Titles';
import Footer from '../components/Footer';

const Home = () => {
  return (
    <div>
      <Navbar />
      <Billboard />
      <Titles />
      <Footer />
    </div>
  );
};

export default Home;
