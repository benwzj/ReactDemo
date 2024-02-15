import { useState } from "react";

const BookCreate = ({onCreate}) =>{
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

export default BookCreate;
