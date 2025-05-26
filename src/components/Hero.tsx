import React, { useEffect, useRef } from 'react';

const Hero: React.FC = () => {
  const particlesRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const createParticle = () => {
      if (!particlesRef.current) return;
      
      const particle = document.createElement('div');
      particle.classList.add('particle');
      
      // Random position
      const x = Math.random() * 100;
      const y = Math.random() * 100;
      
      // Random size
      const size = Math.random() * 10 + 5;
      
      // Random color
      const colors = ['#FFD700', '#FF69B4', '#FF6347', '#FFB6C1', '#FFC0CB'];
      const color = colors[Math.floor(Math.random() * colors.length)];
      
      // Apply styles
      particle.style.left = `${x}%`;
      particle.style.top = `${y}%`;
      particle.style.width = `${size}px`;
      particle.style.height = `${size}px`;
      particle.style.backgroundColor = color;
      particle.style.borderRadius = '50%';
      particle.style.position = 'absolute';
      particle.style.opacity = '0';
      particle.style.animation = `floatParticle ${Math.random() * 5 + 5}s linear infinite`;
      
      particlesRef.current.appendChild(particle);
      
      // Remove particle after animation
      setTimeout(() => {
        if (particlesRef.current && particlesRef.current.contains(particle)) {
          particlesRef.current.removeChild(particle);
        }
      }, 10000);
    };
    
    // Create particles periodically
    const interval = setInterval(createParticle, 300);
    
    return () => clearInterval(interval);
  }, []);

  return (
    <section id="greeting" className="relative min-h-screen flex items-center justify-center overflow-hidden bg-gradient-to-b from-pink-50 to-pink-100">
      <div ref={particlesRef} className="particles absolute inset-0 z-0"></div>
      
      <div className="container mx-auto px-4 py-12 z-10">
        <div className="text-center max-w-4xl mx-auto">
          <h1 className="font-dancing text-5xl md:text-7xl text-pink-600 mb-6 animate-fadeIn">
            С 51-м Днем Рождения, Мама!
          </h1>
          
          <div className="text-xl md:text-2xl text-pink-700 mb-12 animate-fadeInUp opacity-0" style={{ animationDelay: '0.5s' }}>
            <p>Сегодня особенный день для особенной женщины.</p>
            <p>Спасибо за твою любовь, заботу и поддержку все эти годы!</p>
          </div>
          
          <div className="mt-8 animate-fadeInUp opacity-0" style={{ animationDelay: '1s' }}>
            <a href="#gallery" className="inline-block bg-pink-500 text-white px-8 py-3 rounded-full hover:bg-pink-600 transition-colors duration-300 shadow-lg">
              Смотреть фотографии
            </a>
          </div>
        </div>
      </div>
      
      <div className="absolute bottom-8 left-0 right-0 flex justify-center animate-bounce">
        <a href="#gallery" className="text-pink-500">
          <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 14l-7 7m0 0l-7-7m7 7V3" />
          </svg>
        </a>
      </div>
    </section>
  );
};

export default Hero;