import '../css/SearchBar.css';
import { useState, useEffect } from 'react';

function SearchBar({ goGetIt, term }) {
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
        <button>Search</button>
      </form>
      <h3>{labelContent}</h3>
    </div>
  );
}

export default SearchBar;
