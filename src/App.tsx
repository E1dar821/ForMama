import React, { useEffect } from 'react';
import Header from './components/Header';
import Hero from './components/Hero';
import PhotoGallery from './components/PhotoGallery';
import Wishes from './components/Wishes';
import Footer from './components/Footer';
import './animations.css';

function App() {
  useEffect(() => {
    // Update page title
    document.title = 'С Днем Рождения, Мама!';
    
    // Scroll animation for elements
    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('show');
        }
      });
    }, { threshold: 0.1 });
    
    const hiddenElements = document.querySelectorAll('.hidden-element');
    hiddenElements.forEach(el => observer.observe(el));
    
    return () => {
      hiddenElements.forEach(el => observer.unobserve(el));
    };
  }, []);

  return (
    <div className="font-sans text-gray-800">
      <Header />
      <main>
        <Hero />
        <div className="hidden-element">
          <PhotoGallery />
        </div>
        <div className="hidden-element">
          <Wishes />
        </div>
      </main>
      <Footer />
    </div>
  );
}

export default App;