import { useState } from "react";

export function BookList({books, onDelete, onEdit}){

  const renderList = books.map((book)=>{
    return <BookItem key={book.id} book={book} onDelete={onDelete} onEdit={onEdit}/>
  })
  return (
    <div className="book-list">
      {renderList}
    </div>
  )
}

export const BookCreate = ({onCreate}) =>{
  const [bookName, setBookName] = useState('');

  const handleInputChange = (event) => {
    setBookName (event.target.value);
  }

  const handleSubmit = (event) => {
    event.preventDefault();
    onCreate (bookName);
    setBookName ('');
  }
  return (
    <div className="book-create">
      <h3>Add a Book</h3>
      <form onSubmit={handleSubmit}>
        <label>Title</label>
        <input className="input" value={bookName} onChange={handleInputChange}/>
        <button className="button" disabled={bookName===''}> Create </button>
      </form>
    </div>
  )
}

const BookItem = ({book, onDelete, onEdit}) =>{
  
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
    onEdit(book.id, book.name, book.like);
    setLike (book.like);
  }

  const handleEdit = (newName)=>{
    book.name = newName; // change book name for the specific book here!
    onEdit(book.id, newName, book.like);
    setEditStatus (false);
  }
  const handleCancel = () =>{
    setEditStatus (false);
  }
  const displayContent = editStatus ? 
    <BookEdit onEdit={handleEdit} onCancel={handleCancel} book={book} /> : 
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

const BookEdit = ({book, onEdit, onCancel}) =>{

  const [bookName, setBookName] = useState(book.name);
  
  const handleInputChange = (event) =>{
    setBookName (event.target.value);
  }
 
  const handleSubmit = (event) =>{
    event.preventDefault();
    onEdit(bookName);
  }
  const handleCancel =()=>{
    onCancel();
  }
  return (
    <div className="book-edit">
      <form onSubmit={handleSubmit}>
        <label>Name</label>
        <input className="input" value={bookName} onChange={handleInputChange}/>
        <button type="submit" className="button"> Confirm </button> 
        <button type='button' className="button" onClick={handleCancel}> Cancel </button>
      </form>
    </div>
  )
}