import { useState, useEffect } from 'react';
import { SearchBar, ImageList } from '../components/ImageSearch';
import searchImages from '../api/Unsplash';
import JsonServer from '../api/JsonServer';

function PicsPage() {
  const [term, setTerm] = useState('');
  const [images, setImages] = useState([]);

  const handleSubmit = async (newTerm) => {
    const result = await searchImages(newTerm);
    setImages (result);
    setTerm (newTerm);
    //console.log ('newTerm: '+ newTerm);
    await JsonServer ({type: 'edit-picturesearch', picture_search: newTerm});
  };

  const fetchSearch = async()=>{
    const res = await JsonServer ({type: 'get-picturesearch'});
    console.log (res);
    const result = await searchImages(res.picture_search);
    setTerm (res.picture_search);
    setImages (result);
  }

  useEffect (()=>{
    fetchSearch();
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