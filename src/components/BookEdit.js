import { useState } from "react";

const BookEdit = ({book, onSubmit, onUpdateEditStatus}) =>{

  const [bookName, setBookName] = useState(book.name);
  
  const handleInputChange = (event) =>{
    setBookName (event.target.value);
  }
 
  const handleSubmit = (event) =>{
    event.preventDefault();
    book.name = bookName;
    onSubmit();
  }
  return (
    <div className="book-edit">
      <form onSubmit={handleSubmit}>
        <label>Name</label>
        <input className="input" value={bookName} onChange={handleInputChange}/>
        <button className="button"> Create </button>
      </form>
    </div>
  )
}

export default BookEdit;
