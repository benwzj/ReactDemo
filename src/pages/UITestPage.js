import { useState } from 'react';
import AnimalDemo from '../components/AnimalDemo';
import Accordion from '../components/Accordion';
import Dropdown from '../components/Dropdown';
import CoolerpadDemo from '../components/CoolerpadDemo';
import { LuListTodo } from "react-icons/lu";
import { AiOutlinePicture } from "react-icons/ai";
import { GiSecretBook } from "react-icons/gi";
import { GrTest } from "react-icons/gr";
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


function UITestPage() {
  
  const [selection, setSelection] = useState(null);

  const handleSelect = (option) => {
    setSelection(option);
  };

  return (
    <div>
      <div className="border border-orange-500 p-4 m-2">
        <div>Tailwind pseudo-class: </div>
        <button
          className='h-10 px-2 m-1 rounded-full font-bold text-white bg-violet-500 hover:bg-violet-600 active:bg-green-600 focus:outline-none focus:ring focus:ring-violet-300'  
        >
          Button Demo
        </button>
      </div>
      <div className='border border-orange-500 p-4 m-2'>
        <div>Accordion:</div>
        <Accordion items={items} />
      </div>
      <div className="flex flex-col border border-orange-500 p-4 m-2">
        <div>Dropdown: </div>
        <Dropdown options={options} value={selection} onChange={handleSelect} />
      </div>

      <div className='border border-orange-500 p-4 m-2'>
        <div>Font Awesome Icons: </div>
        <div className='flex gap-2'>
          <i className="fas fa-trash" />
          <i className="fas fa-pen" />
          <i className="fas fa-fire" />
          <i className="fas fa-home" />
        </div>
      </div>
      <div className='border border-orange-500 p-4 m-2'>
        <div>React Icons: </div>
        <div className='flex gap-2'>
          <LuListTodo />
          <AiOutlinePicture />
          <GiSecretBook />
          <GrTest />
        </div>
      </div>
      <div className='border border-orange-500 p-4 m-2'>
        <AnimalDemo/>
      </div>
      <div className='border border-orange-500 p-4 m-2'>
        <div>Cooler pads Demo:</div>
        <CoolerpadDemo/>
      </div>
    </div>
  );
}

export default UITestPage;
