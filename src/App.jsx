import { useState } from 'react';
import Header from './components/Header/Header';
import Hero from './components/Hero/Hero';
import About from './components/About/About';
import Gallery from './components/Gallery/Gallery';
import FAQ from './components/FAQ/FAQ';
import Footer from './components/Footer/Footer';

const App = () => {
  return (
    <div>
      <Header />
      <Hero />
      <About />
      <Gallery />
      <FAQ />
      <Footer />
    </div>
  );
};

export default App;