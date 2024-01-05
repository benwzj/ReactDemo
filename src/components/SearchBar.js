import '../css/SearchBar.css';
import { useState } from 'react';

// This is the classic Controlled Input example

function SearchBar({ goGetIt }) {
  const [term, setTerm] = useState('');
  const [displayedTerm, setDisplayedTerm] = useState('');

  const handleFormSubmit = (event) => {
    event.preventDefault();

    goGetIt(term);
    setDisplayedTerm (term);
    setTerm ('');
  };

  const handleChange = (event) => {
    setTerm(event.target.value);
  };

  const labelContent = displayedTerm ?
    'Display Photos for term \"'+displayedTerm +'\"': '' 

  return (
    <div className="search-bar">
      <form onSubmit={handleFormSubmit}>
        <label>Enter Search Term</label>
        <input className="input" value={term} onChange={handleChange} />
        <button>Search</button>
      </form>
      <h3>{labelContent}</h3>
    </div>
  );
}

export default SearchBar;
