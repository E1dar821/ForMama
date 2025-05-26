import React from 'react';
import { Heart } from 'lucide-react';

const Footer: React.FC = () => {
  return (
    <footer className="py-6 sm:py-8 bg-pink-600 text-white">
      <div className="container mx-auto px-4 text-center">
        <div className="flex items-center justify-center mb-3 sm:mb-4">
          <Heart className="text-white mr-2 w-4 h-4 sm:w-5 sm:h-5 fill-current" />
          <p className="font-dancing text-lg sm:text-xl">С любовью</p>
          <Heart className="text-white ml-2 w-4 h-4 sm:w-5 sm:h-5 fill-current" />
        </div>
        <p className="text-sm sm:text-base">С Днем Рождения, мамочка! Люблю тебя бесконечно.</p>
      </div>
    </footer>
  );
};

export default Footer;