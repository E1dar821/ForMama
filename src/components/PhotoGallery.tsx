import React from 'react';
import photo1 from '../assets/images/photo1.jpg';
import photo2 from '../assets/images/photo2.jpg';
import photo3 from '../assets/images/photo3.jpg';
import photo4 from '../assets/images/photo4.jpg';
import photo5 from '../assets/images/photo5.jpg';
import photo6 from '../assets/images/photo6.jpg';

interface PhotoProps {
  src: string;
  index: number;
}

const Photo: React.FC<PhotoProps> = ({ src, index }) => {
  return (
    <div className="group relative overflow-hidden rounded-lg shadow-lg hover:shadow-xl transition-all duration-300 h-48 sm:h-56 md:h-64 lg:h-72">
      <img 
        src={src} 
        alt={`Фотография ${index}`} 
        className="w-full h-full object-cover transform group-hover:scale-105 transition-transform duration-300"
        loading="lazy"
      />
      <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
      <div className="absolute bottom-4 left-4 text-white opacity-0 group-hover:opacity-100 transition-opacity duration-300">
        <h3 className="text-base sm:text-lg font-medium">Фотография {index}</h3>
      </div>
    </div>
  );
};

const PhotoGallery: React.FC = () => {
  const photos = [photo1, photo2, photo3, photo4, photo5, photo6];

  return (
    <section id="gallery" className="py-12 sm:py-16 md:py-20 bg-pink-50">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl sm:text-4xl md:text-5xl font-dancing text-center text-pink-600 mb-8 sm:mb-10 md:mb-12">Воспоминания</h2>
        
        <p className="text-center text-pink-700 max-w-2xl mx-auto mb-10 sm:mb-12 md:mb-16 text-base sm:text-lg">
          Здесь собраны лучшие моменты.
        </p>
        
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6 md:gap-8">
          {photos.map((photo, index) => (
            <Photo key={index} src={photo} index={index + 1} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default PhotoGallery;
