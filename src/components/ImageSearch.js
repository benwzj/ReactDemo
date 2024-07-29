import { useState } from 'react';
import '../css/ImageList.css';
import '../css/SearchBar.css';
import { RxMagnifyingGlass } from "react-icons/rx";


export function ImageList({ images }) {
  const renderedImages = images.map((image) => {
    return <ImageItem key={image.id} image={image} />;
  });

  return <div className="image-list">{renderedImages}</div>;
}

function ImageItem({ image }) {
  return (
    <div>
      <img src={image.urls.small} alt={image.alt_description} />
    </div>
  );
}

export function SearchBar({ onSubmit, term }) {
  const [Input, setInput] = useState(term);

  const handleFormSubmit = (event) => {
    event.preventDefault();

    onSubmit(Input);
    setInput ('');
  };

  const handleChange = (event) => {
    setInput(event.target.value);
  };

  return (
    
      <form onSubmit={handleFormSubmit}>
        <div className="mt-4 flex items-center justify-between gap-2 md:mt-8">
          <div className="relative flex flex-1 ">
            <label htmlFor="search" className="sr-only">
              Search
            </label>
            <input 
              className="peer block w-full rounded-md border border-gray-200 py-[9px] pl-10 text-sm outline-2 placeholder:text-gray-500"
              placeholder={term} 
              value={Input} 
              onChange={handleChange} 
              id="search"
            />
            {/* <RxMagnifyingGlass className="absolute left-3 top-5 h-[18px] w-[18px] -translate-y-1/2 text-gray-500 peer-focus:text-gray-900" /> */}
          </div> 
          
          <button 
            className="w-64 h-10 rounded-lg bg-blue-600 px-4 text-sm font-medium text-white transition-colors hover:bg-blue-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-blue-600"
            disabled={Input===''}
          >
              Search Picture
          </button>
          
        </div>
      </form>
    
  );
}

