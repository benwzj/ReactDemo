import { useState } from "react";
import { IoIosAdd } from "react-icons/io";
import { MdOutlineEdit } from "react-icons/md";
import { RiDeleteBinLine } from "react-icons/ri";
import { BiLike } from "react-icons/bi";

export function BookList({books, onDelete, onEdit}){

  const renderList = books.map((book)=>{
    return <BookItem key={book.id} book={book} onDelete={onDelete} onEdit={onEdit}/>
  })
  return (
    <div className="flex flex-wrap">
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
            <MdOutlineEdit className="absolute left-3 top-5 h-[18px] w-[18px] -translate-y-1/2 text-gray-500 peer-focus:text-gray-900" />
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

  const bookEditPanel = <BookEdit onEdit={handleEdit} onCancel={handleCancel} book={book} />;
  const bookInfoPanel = <><h3>{book.name}</h3> <label>Like: {book.like}</label></>;
  const displayingPanel = editStatus ? bookEditPanel : bookInfoPanel;

  return (
    <div className="relative border border-gray-300 rounded-md px-3 w-56 m-2 pt-8">
      <img alt="books" src={`https://picsum.photos/seed/${book.id}/300/200`} />
      <div>{displayingPanel}</div>
      <div className="absolute pl-4 right-1 top-1 flex gap-1">
        <div 
          className="relative border-0 rounded-full w-5 h-5 text-white bg-gray-400/70 hover:bg-gray-700/70 focus:opacity-[0.85] focus:shadow-none active:opacity-[0.85] active:shadow-none" 
          onClick={handleEditClick} 
        >
          <MdOutlineEdit className="absolute top-0.5 left-0.5 " />
        </div>
        <div 
          className="relative border-0 rounded-full w-5 h-5 text-white bg-gray-400/70 hover:bg-gray-700/70 focus:opacity-[0.85] focus:shadow-none active:opacity-[0.85] active:shadow-none" 
          onClick={handleDelete} 
        >
          <RiDeleteBinLine className="absolute top-0.5 left-0.5 " />
        </div>
        <div 
          className="relative border-0 rounded-full w-5 h-5 text-white bg-gray-400/70 hover:bg-gray-700/70 focus:opacity-[0.85] focus:shadow-none active:opacity-[0.85] active:shadow-none" 
          onClick={handleFavorite} 
        >
          <BiLike className="absolute top-0.5 left-0.5 " />
        </div>
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
    <div className="flex flex-col ">
      <form onSubmit={handleSubmit}>
        <label className="pl-2" htmlFor="edit-book-name">Name:</label>
        <input 
          id="edit-book-name" 
          className="block w-full rounded-md border border-gray-200 py-[9px] pl-2 text-sm outline-1 m-1" 
          value={bookName} 
          onChange={handleInputChange}
        />
        <div className="flex gap-1 p-1">
          <button 
            type="submit" 
            className="h-10 w-20 rounded-lg bg-blue-600 px-2 text-sm font-medium text-white transition-colors hover:bg-blue-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-blue-600"
          > 
            Confirm 
          </button> 
          <button 
            type="button"
            className="h-10 w-20 rounded-lg bg-blue-600 px-2 text-sm font-medium text-white transition-colors hover:bg-blue-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-blue-600" 
            onClick={handleCancel}
          > 
            Cancel 
          </button>
        </div>
      </form>
    </div>
  )
}