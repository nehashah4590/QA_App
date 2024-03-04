"useState"
import React, { useState, useEffect } from 'react';

const facts: string[] = [
    "  The diversity of trekking trails in Nepal ranges from the lowest point at 59m above sea-level in the Tarai region to the highest point at Everest, 8,848m above sea-level, only 200 kilometers apart. ",
    " Nepal is home to Mount Everest, the highest peak in the world with an altitude of 8,848 meters(29,029 feet) above sea level. Not only Mount Everest but Nepal is home to 8 out of top 10 highest mountain peaks of the world. ",
    " Nepal is the only country in the world having non-rectangular flag. The Nepali flag is combination of two single traingles, symbolizing Himalayas i.e. the greatest treasure that Nepal have. ",
    " The birth place of Lord Buddha founder of Buddhism is located in Lumbini, Nepal. ",
    " Nepal is also home to some of the famous trekking routes in the world i.e. Annapurna Base Camp, Everest Base camp, Makalu Base Camp and many more. ",
    " The glacial lake situated at the highest altitude in the world is also situated in Nepal i.e. Tilicho lake located in Manang district, Nepal. ",
    " Nepal is the only country in the world where a living Goddess i.e Kumari exists whom people worships as well and the chariot of kumari is brought once a time every year which is celebrated along with the Indra Jatra.",
    " The natural habitat of one-horned rhinoceros is also unique to Nepal. "
  ];

const Typewriter: React.FC = () => {
  const [currentFactIndex, setCurrentFactIndex] = useState(0);
  const [currentText, setCurrentText] = useState('');
  const [isTyping, setIsTyping] = useState(true);
  const [showCursor, setShowCursor] = useState(true);

  useEffect(() => {
    const fact = facts[currentFactIndex];
    let currentIndex = 0;

    if (isTyping) {
      const interval = setInterval(() => {
        setCurrentText(prevText => {
          if (currentIndex < fact.length-1) {
            return prevText + fact[currentIndex];
          } else {
            setIsTyping(false);
            return prevText;
          }
        });
        setShowCursor(prevShowCursor => !prevShowCursor);
        currentIndex++;
      }, 40);

      return () => clearInterval(interval);
    } else {
      const timeout = setTimeout(() => {
        setCurrentText('');
        setCurrentFactIndex(prevIndex => (prevIndex + 1) % facts.length);
        setIsTyping(true);
      }, 900);

      return () => clearTimeout(timeout);
    }
  }, [currentFactIndex, isTyping]);

  return (
    <div className="text-sm text-center relative">
      <p className='pt-2 font-normal text-justify text-sm '>
        {currentText}
        {showCursor && <span className="">|</span>}
      </p>
    </div>
  );
};

export default Typewriter;

