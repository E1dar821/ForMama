import React from 'react';
import { Heart } from 'lucide-react';

const Header: React.FC = () => {
  return (
    <header className="relative py-6 px-4 z-10">
      <div className="container mx-auto flex justify-between items-center">
        <div className="flex items-center">
          <Heart className="text-pink-500 mr-2" size={24} />
          <h2 className="text-2xl font-dancing text-pink-600">С Днем Рождения</h2>
        </div>
        <nav>
          <ul className="flex space-x-6">
            <li>
              <a href="#greeting" className="text-pink-700 hover:text-pink-500 transition-colors duration-300">
                Поздравление
              </a>
            </li>
            <li>
              <a href="#gallery" className="text-pink-700 hover:text-pink-500 transition-colors duration-300">
                Фотографии
              </a>
            </li>
            <li>
              <a href="#wishes" className="text-pink-700 hover:text-pink-500 transition-colors duration-300">
                Пожелания
              </a>
            </li>
          </ul>
        </nav>
      </div>
    </header>
  );
};

export default Header;