import { useState } from 'react';
import SearchBar from '../components/SearchBar';
import ImageList from '../components/ImageList';
import searchImages from '../api/Unsplash';

function PicsPage() {
  const [images, setImages] = useState([]);

  const handleSubmit = async (term) => {
    const result = await searchImages(term);

    setImages(result);
  };

  return (
    <div>
     {/*       
      Here is a rule for Implementing Child to Parent Communication:
      pass a callback function as props to that child and 
      whenever it needs to update the state of parent, the function will be called. 
      Here is the example: PicsPage is parent component, and SearchBar is child.
      */}
      <SearchBar goGetIt={handleSubmit} />
      <br/>
      <ImageList images={images} />
    </div>
  );
}

export default PicsPage;