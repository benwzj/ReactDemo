import { useState } from 'react';
import { GoBell, GoCloudDownload, GoDatabase } from 'react-icons/go';
import Button from '../components/Button';
import AnimalItem from '../components/AnimalItem';
import Accordion from '../components/Accordion';
import Dropdown from '../components/Dropdown';
import '../css/UITestPage.css';

const items = [
  {
    id: 'l2kj5',
    label: 'Can I use React on a project?',
    content:
      'You can use React on any project you want. You can use React on any project you want. You can use React on any project you want. You can use React on any project you want.',
  },
  {
    id: 'lk2j35lkj',
    label: 'Can I use Javascript on a project?',
    content:
      'You can use React on any project you want. You can use React on any project you want. You can use React on any project you want. You can use React on any project you want.',
  },
  {
    id: 'l1kj2i0g',
    label: 'Can I use CSS on a project?',
    content:
      'You can use React on any project you want. You can use React on any project you want. You can use React on any project you want. You can use React on any project you want.',
  },
];
const options = [
  { label: 'Red', value: 'red' },
  { label: 'Green', value: 'green' },
  { label: 'Blue', value: 'blue' },
];
function getRandomAnimal() {
  const animals = ['bird', 'cat', 'cow', 'dog', 'gator', 'horse'];
  return animals[Math.floor(Math.random() * animals.length)];
}

function UITestPage() {
  
  const [selection, setSelection] = useState(null);
  const [animals, setAnimals] = useState ([])
  const handleClick = () => {
    setAnimals ([...animals, getRandomAnimal()])
  };

  const renderedAnimals = animals.map((animal, index) => {
    return <AnimalItem key={index} type={animal} />;
  });

  const handleSelect = (option) => {
    setSelection(option);
  };

  return (
    <div>
      <div className='test-panel'>
        Accordion Test
        <Accordion items={items} />
      </div>
      <div className="flex, test-panel">
        Dropdown Test
        <Dropdown options={options} value={selection} onChange={handleSelect} />
      </div>
      <div className='test-panel'>
        Button Test
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
    </div>

  );
}

export default UITestPage;
