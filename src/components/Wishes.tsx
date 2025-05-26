import React from 'react';
import { Heart, Star, Smile, Gift } from 'lucide-react';

interface WishCardProps {
  icon: React.ReactNode;
  title: string;
  text: string;
}

const WishCard: React.FC<WishCardProps> = ({ icon, title, text }) => {
  return (
    <div className="bg-white rounded-lg shadow-lg p-6 transform hover:scale-105 transition-transform duration-300">
      <div className="text-pink-500 mb-4">{icon}</div>
      <h3 className="text-xl font-semibold text-pink-700 mb-3">{title}</h3>
      <p className="text-pink-600">{text}</p>
    </div>
  );
};

const Wishes: React.FC = () => {
  const wishes = [
    {
      icon: <Heart size={32} />,
      title: "Крепкого здоровья",
      text: "Желаю тебе, мамочка, крепкого здоровья, чтобы ты всегда была полна энергии и сил!"
    },
    {
      icon: <Star size={32} />,
      title: "Исполнения желаний",
      text: "Пусть все твои мечты и желания исполняются, а жизнь будет полна приятных сюрпризов!"
    },
    {
      icon: <Smile size={32} />,
      title: "Радости и счастья",
      text: "Радости, улыбок и безграничного счастья каждый день твоей жизни!"
    },
    {
      icon: <Gift size={32} />,
      title: "Любви и заботы",
      text: "Пусть тебя всегда окружают любящие люди, забота и внимание близких!"
    }
  ];

  return (
    <section id="wishes" className="py-20 bg-gradient-to-b from-pink-100 to-white">
      <div className="container mx-auto px-4">
        <h2 className="text-4xl md:text-5xl font-dancing text-center text-pink-600 mb-12">Пожелания для тебя</h2>
        
        <p className="text-center text-pink-700 max-w-2xl mx-auto mb-16">
          Мама, ты самый дорогой человек в моей жизни. Вот несколько пожеланий в твой особенный день.
        </p>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {wishes.map((wish, index) => (
            <WishCard 
              key={index}
              icon={wish.icon}
              title={wish.title}
              text={wish.text}
            />
          ))}
        </div>
        
        <div className="mt-16 bg-pink-50 p-8 rounded-lg shadow-lg max-w-3xl mx-auto">
          <h3 className="text-2xl font-dancing text-pink-600 mb-4 text-center">От всего сердца</h3>
          <p className="text-pink-700 text-lg mb-4">
            Дорогая мама, поздравляю тебя с 51-м днем рождения! Ты — мое вдохновение, моя опора и самый близкий человек.
          </p>
          <p className="text-pink-700 text-lg mb-4">
            Твоя любовь и забота дарят мне силы двигаться вперед. Спасибо за все, что ты делаешь для меня каждый день.
          </p>
          <p className="text-pink-700 text-lg mb-4">
            Пусть этот год принесет тебе много радости, улыбок и прекрасных моментов. Ты заслуживаешь всего самого лучшего!
          </p>
          <p className="text-pink-700 text-lg text-right font-dancing text-xl">
            С любовью, твой ребенок
          </p>
        </div>
      </div>
    </section>
  );
};

export default Wishes;