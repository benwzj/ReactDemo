import '../css/ImageList.css';
import ImageItem from './ImageItem';

function ImageList({ images }) {
  const renderedImages = images.map((image) => {
    return <ImageItem key={image.id} image={image} />;
  });

  return <div className="image-list">{renderedImages}</div>;
}

export default ImageList;
