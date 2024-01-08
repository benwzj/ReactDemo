import { useState, useEffect } from 'react';
import SearchBar from '../components/SearchBar';
import ImageList from '../components/ImageList';
import searchImages from '../api/Unsplash';
import JsonServer from '../api/JsonServer';

function PicsPage() {
  const [term, setTerm] = useState('');
  const [images, setImages] = useState([]);

  const handleSubmit = async (newTerm) => {
    const result = await searchImages(newTerm);
    setImages (result);
    setTerm (newTerm);
    console.log ('newTerm: '+ newTerm);
    await JsonServer ({type: 'update-picturesearch', term: newTerm});
  };

  const initSearch = async()=>{
    const search = await JsonServer ({type: 'get-picturesearch'});
    console.log ("initSearch: " + search.term);
    const result = await searchImages(search.term);
    setTerm (search.term);
    setImages (result);
  }

  useEffect (()=>{
    initSearch();
  },[]);

  return (
    <div>
     {/*       
      Here is a rule for Implementing Child to Parent Communication:
      pass a callback function as props to that child and 
      whenever it needs to update the state of parent, the function will be called. 
      Here is the example: PicsPage is parent component, and SearchBar is child.
      */}
      <SearchBar goGetIt={handleSubmit} term={term}/>
      <br/>
      <ImageList images={images} />
    </div>
  );
}

export default PicsPage;