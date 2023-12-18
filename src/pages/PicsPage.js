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
      <SearchBar onSubmit={handleSubmit} />
      <br/>
      <ImageList images={images} />
    </div>
  );
}

export default PicsPage;