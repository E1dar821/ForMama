import React, { useState } from 'react';
import { Heart, Menu, X } from 'lucide-react';

const Header: React.FC = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const closeMenu = () => {
    setIsMenuOpen(false);
  };

  return (
    <header className="fixed top-0 left-0 right-0 bg-white/80 backdrop-blur-sm z-50 shadow-sm">
      <nav className="container mx-auto px-4 py-3 sm:py-4">
        <div className="flex items-center justify-between">
          <a href="#" className="flex items-center text-pink-600 hover:text-pink-700 transition-colors">
            <Heart className="w-4 h-4 sm:w-5 sm:h-5 mr-1 sm:mr-2" />
            <span className="text-base sm:text-lg font-medium">С Днем Рождения</span>
          </a>
          
          {/* Desktop Navigation */}
          <div className="hidden sm:flex items-center space-x-6">
            <a href="#greeting" className="text-base text-gray-600 hover:text-pink-600 transition-colors">Поздравление</a>
            <a href="#gallery" className="text-base text-gray-600 hover:text-pink-600 transition-colors">Фотографии</a>
            <a href="#wishes" className="text-base text-gray-600 hover:text-pink-600 transition-colors">Пожелания</a>
          </div>

          {/* Mobile Menu Button */}
          <button 
            onClick={toggleMenu}
            className="sm:hidden p-2 text-gray-600 hover:text-pink-600 transition-colors"
            aria-label="Меню"
          >
            {isMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>

        {/* Mobile Navigation */}
        <div 
          className={`
            sm:hidden fixed right-0 top-[56px] bg-white/95 backdrop-blur-sm shadow-lg 
            w-48 py-2 transform transition-transform duration-300 ease-in-out
            ${isMenuOpen ? 'translate-x-0' : 'translate-x-full'}
          `}
        >
          <div className="flex flex-col space-y-2">
            <a 
              href="#greeting" 
              className="px-4 py-2 text-gray-600 hover:text-pink-600 hover:bg-pink-50 transition-colors"
              onClick={closeMenu}
            >
              Поздравление
            </a>
            <a 
              href="#gallery" 
              className="px-4 py-2 text-gray-600 hover:text-pink-600 hover:bg-pink-50 transition-colors"
              onClick={closeMenu}
            >
              Фотографии
            </a>
            <a 
              href="#wishes" 
              className="px-4 py-2 text-gray-600 hover:text-pink-600 hover:bg-pink-50 transition-colors"
              onClick={closeMenu}
            >
              Пожелания
            </a>
          </div>
        </div>
      </nav>
    </header>
  );
};

export default Header;