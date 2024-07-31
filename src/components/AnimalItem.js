import { useState } from 'react';
import bird from '../svg/bird.svg';
import cat from '../svg/cat.svg';
import cow from '../svg/cow.svg';
import dog from '../svg/dog.svg';
import gator from '../svg/gator.svg';
import heart from '../svg/heart.svg';
import horse from '../svg/horse.svg';

const svgMap = {
  bird,
  cat,
  cow,
  dog,
  gator, 
  horse,
};

function AnimalItem({ type }) {
  const [clicks, setClicks] = useState(0);
  const handleClick = () => {
    setClicks(clicks + 1);
  };

  return (
    <div className="relative p-3 m-3 border rounded-full border-cyan-300 shadow-lg shadow-cyan-300" onClick={handleClick}>
      <img className="h-24" alt="animal" src={svgMap[type]} />
      <img
        className="absolute bottom-2 right-2"
        alt="heart"
        src={heart}
        style={{ width: 10 + 10 * clicks + 'px' }}
      />
    </div>
  );
}

export default AnimalItem;
