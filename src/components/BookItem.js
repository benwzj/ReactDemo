import { useState } from "react";
import BookEdit from './BookEdit';

const BookItem = ({book, onDelete}) =>{
  
  const [editStatus, setEditStatus] = useState(false);
  const [like, setLike] = useState(book.like);

  const handleDelete = () =>{
    onDelete (book.id);
  }
  const handleEditClick = ()=>{
    setEditStatus (true);
  }
  const handleFavorite = ()=>{
    book.like = like + 1;
    setLike (book.like);
  }
  const handleUpdateEditStatus = ()=>{
    setEditStatus (false);
  }
  const displayContent = editStatus ? 
    <BookEdit onSubmit={handleUpdateEditStatus} book={book} /> : 
    <><h3>{book.name}</h3> <label>Like: {book.like}</label></>

  return (
    <div className="book-show">
      <img alt="books" src={`https://picsum.photos/seed/${book.id}/300/200`} />
      <div>{displayContent}</div>
      <div className="actions">
        <button className="edit" onClick={handleEditClick} >
          Edit
        </button>
        <button className="delete" onClick={handleDelete}>
          Delete
        </button>
        <button className="like" onClick={handleFavorite}>
          Like
        </button>
      </div>
    </div>
  )
}


export default BookItem;