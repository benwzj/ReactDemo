import { useState } from "react";
import { IoIosAdd } from "react-icons/io";

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
    <div>
      <form onSubmit={handleSubmit}>
        <div className="mt-4 flex justify-between gap-2 md:mt-8">
          <div className="relative flex flex-1 ">
            <label htmlFor="book-title" className="sr-only">Book Title</label>
            <input 
              id="book-title"
              className="peer block w-full rounded-md border border-gray-200 py-[9px] pl-10 text-sm outline-2 placeholder:text-gray-500"
              value={bookName} 
              onChange={handleInputChange}
            />
            <IoIosAdd className="absolute left-3 top-5 h-[18px] w-[18px] -translate-y-1/2 text-gray-500 peer-focus:text-gray-900" />
          </div>
        
          <div 
            className="flex h-10 items-center justify-center rounded-lg bg-blue-600 px-4 font-medium text-white transition-colors hover:bg-blue-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-blue-600"
          >
            <span className="hidden md:block">Add Book</span>{' '}
            <IoIosAdd className="md:ml-4" />
          </div>
        </div>
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