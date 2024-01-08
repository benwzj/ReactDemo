import { useState } from "react";

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

export default BookEdit;
