import { useState } from 'react';
import AnimalItem from '../components/AnimalItem';
import Accordion from '../components/Accordion';
import Dropdown from '../components/Dropdown';
import CoolerpadDemo from '../components/CoolerpadDemo';
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
      <div className='border border-orange-500 p-4 m-2'>
        <div>Accordion Test:</div>
        <Accordion items={items} />
      </div>
      <div className="flex flex-col border border-orange-500 p-4 m-2">
        <div>Dropdown Test: </div>
        <Dropdown options={options} value={selection} onChange={handleSelect} />
      </div>
      <div className='border border-orange-500 p-4 m-2'>
        <div>Display svg images: </div>
        <div>
          <button className="rounded-lg w-32 border-blue-500 bg-blue-500 text-white"  onClick={handleClick}>
            Add Animial
          </button>
        </div>
        <div>
          <div className="flex flex-wrap">{renderedAnimals}</div>
        </div>
      </div>
      <div className='border border-orange-500 p-4 m-2'>
        <div>Use Font Awesome Icons: </div>
        <i className="fas fa-trash" />
        <i className="fas fa-pen" />
      </div>
      <div className='border border-orange-500 p-4 m-2'>
        <div>Cooler pads Demo:</div>
        <CoolerpadDemo/>
      </div>
    </div>

  );
}


export default UITestPage;
