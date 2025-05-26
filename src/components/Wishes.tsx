import React from 'react';
import { Heart, Star, Smile, Gift } from 'lucide-react';

interface WishCardProps {
  icon: React.ReactNode;
  title: string;
  text: string;
}

const WishCard: React.FC<WishCardProps> = ({ icon, title, text }) => {
  return (
    <div className="bg-white rounded-lg shadow-lg p-4 sm:p-5 md:p-6 transform hover:scale-105 transition-transform duration-300">
      <div className="text-pink-500 mb-3 sm:mb-4">{icon}</div>
      <h3 className="text-lg sm:text-xl font-semibold text-pink-700 mb-2 sm:mb-3">{title}</h3>
      <p className="text-pink-600 text-sm sm:text-base">{text}</p>
    </div>
  );
};

const Wishes: React.FC = () => {
  const wishes = [
    {
      icon: <Heart className="w-6 h-6 sm:w-8 sm:h-8" />,
      title: "Крепкого здоровья",
      text: "Желаю тебе, мамочка, крепкого здоровья, чтобы ты всегда была полна энергии и сил!"
    },
    {
      icon: <Star className="w-6 h-6 sm:w-8 sm:h-8" />,
      title: "Исполнения желаний",
      text: "Пусть все твои мечты и желания исполняются, а жизнь будет полна приятных сюрпризов!"
    },
    {
      icon: <Smile className="w-6 h-6 sm:w-8 sm:h-8" />,
      title: "Радости и счастья",
      text: "Радости, улыбок и безграничного счастья каждый день твоей жизни!"
    },
    {
      icon: <Gift className="w-6 h-6 sm:w-8 sm:h-8" />,
      title: "Любви и заботы",
      text: "Пусть тебя всегда окружают любящие люди, забота и внимание близких!"
    }
  ];

  return (
    <section id="wishes" className="py-12 sm:py-16 md:py-20 bg-gradient-to-b from-pink-100 to-white">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl sm:text-4xl md:text-5xl font-dancing text-center text-pink-600 mb-8 sm:mb-10 md:mb-12">Пожелания для тебя</h2>
        
        <p className="text-center text-pink-700 max-w-2xl mx-auto mb-10 sm:mb-12 md:mb-16 text-base sm:text-lg">
          Мама, ты самый дорогой человек в моей жизни. Вот несколько пожеланий в твой особенный день.
        </p>
        
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6 md:gap-8 mb-12 sm:mb-14 md:mb-16">
          {wishes.map((wish, index) => (
            <WishCard 
              key={index}
              icon={wish.icon}
              title={wish.title}
              text={wish.text}
            />
          ))}
        </div>
        
        <div className="bg-pink-50 p-4 sm:p-6 md:p-8 rounded-lg shadow-lg max-w-3xl mx-auto">
          <h3 className="text-xl sm:text-2xl font-dancing text-pink-600 mb-3 sm:mb-4 text-center">От всего сердца</h3>
          <p className="text-pink-700 text-base sm:text-lg mb-3 sm:mb-4">
            Дорогая мама, поздравляю тебя с 51-м днем рождения! Ты — мое вдохновение, моя опора и самый близкий человек.
          </p>
          <p className="text-pink-700 text-base sm:text-lg mb-3 sm:mb-4">
            Твоя любовь и забота дарят мне силы двигаться вперед. Спасибо за все, что ты делаешь для меня каждый день.
          </p>
          <p className="text-pink-700 text-base sm:text-lg mb-3 sm:mb-4">
            Пусть этот год принесет тебе много радости, улыбок и прекрасных моментов. Ты заслуживаешь всего самого лучшего!
          </p>
          <p className="text-pink-700 text-lg sm:text-xl text-right font-dancing">
            С любовью, Эльдар
          </p>
        </div>
      </div>
    </section>
  );
};

export default Wishes;