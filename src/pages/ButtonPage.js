import { GoBell, GoCloudDownload, GoDatabase } from 'react-icons/go';
import Button from '../components/Button';
import AnimalItem from '../components/AnimalItem';
import { useState } from 'react';
import './ButtonPage.css';

function getRandomAnimal() {
  const animals = ['bird', 'cat', 'cow', 'dog', 'gator', 'horse'];
  return animals[Math.floor(Math.random() * animals.length)];
}

function ButtonPage() {
  
  const [animals, setAnimals] = useState ([])
  console.log(...animals)
  const handleClick = () => {
    setAnimals ([...animals, getRandomAnimal()])
  };

  const renderedAnimals = animals.map((animal, index) => {
    return <AnimalItem key={index} type={animal} />;
  });

  return (
    <div>
      <div>
        <Button
          secondary
          outline
          rounded
          className="mb-5"
        >
          <GoBell />
          Click me!!
        </Button>
      </div>
      <div>
        <Button danger outline>
          <GoCloudDownload />
          Buy Now!
        </Button>
      </div>
      <div>
        <Button warning>
          <GoDatabase />
          See Deal!
        </Button>
      </div>
      <div>
        <Button secondary outline>
          Hide Ads!
        </Button>
      </div>
      <div>
        <Button primary rounded onClick={handleClick}>
          Add Animial
        </Button>
      </div>
      <div>
        <div className="animal-list">{renderedAnimals}</div>
      </div>
    </div>

  );
}

export default ButtonPage;
