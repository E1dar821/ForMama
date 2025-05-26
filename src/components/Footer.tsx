import React from 'react';
import { Heart } from 'lucide-react';

const Footer: React.FC = () => {
  return (
    <footer className="py-8 bg-pink-600 text-white">
      <div className="container mx-auto px-4 text-center">
        <div className="flex items-center justify-center mb-4">
          <Heart className="text-white mr-2 fill-current" size={20} />
          <p className="font-dancing text-xl">С любовью</p>
          <Heart className="text-white ml-2 fill-current" size={20} />
        </div>
        <p>С Днем Рождения, мамочка! Люблю тебя бесконечно.</p>
       
      </div>
    </footer>
  );
};

export default Footer;