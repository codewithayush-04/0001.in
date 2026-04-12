import React from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Services from './components/Services';
import Gallery from './components/Gallery';
import Testimonials from './components/Testimonials';
import About from './components/About';
import BookingForm from './components/BookingForm';
import Contact from './components/Contact';
import Footer from './components/Footer';
import CallButton from './components/CallButton';

function App() {
  return (
    <div className="bg-[#09090b] min-h-screen text-white font-sans selection:bg-blue-500/30 selection:text-white">
      <Navbar />
      <Hero />
      <Services />
      <Gallery />
      <Testimonials />
      <About />
      <BookingForm />
      <Contact />
      <Footer />
      <CallButton />
    </div>
  );
}

export default App;
