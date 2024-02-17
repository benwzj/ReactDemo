
import { useState, useEffect } from 'react';
import '../css/ImageList.css';
import '../css/SearchBar.css';


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

export function SearchBar({ goGetIt, term }) {
  const [newTerm, setNewTerm] = useState(term);
  const [displayedTerm, setDisplayedTerm] = useState(term);

  useEffect(()=>{
    setDisplayedTerm (term);
  },[term]); 

  const handleFormSubmit = (event) => {
    event.preventDefault();

    goGetIt(newTerm);
    setDisplayedTerm (newTerm);
    setNewTerm ('');
  };

  const handleChange = (event) => {
    setNewTerm(event.target.value);
  };

  const labelContent = displayedTerm ?
    `Display Photos for term "${displayedTerm}"`: '' 

  return (
    <div className="search-bar">
      <form onSubmit={handleFormSubmit}>
        <label>Enter Search Term</label>
        <input className="input" value={newTerm} onChange={handleChange} />
        <button disabled={newTerm===''}>Search</button>
      </form>
      <h3>{labelContent}</h3>
    </div>
  );
}

