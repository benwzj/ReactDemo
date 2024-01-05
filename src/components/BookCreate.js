import { useState } from "react";

const BookCreate = ({create}) =>{
  const [bookName, setBookName] = useState('');
  const getUniqueID = () =>{
    const date = Date.now().toString(32);
    const ran = Math.floor(Math.random()*9999)
    return date + ran;
  }
  const handleInputChange = (event) => {
    setBookName (event.target.value)
  }
  const handleSubmit = (event) => {
    event.preventDefault();
    create ({name: bookName, id: getUniqueID(), like: 0});
    setBookName ('');
  }
  return (
    <div className="book-create">
      <h3>Add a Book</h3>
      <form onSubmit={handleSubmit}>
        <label>Title</label>
        <input className="input" value={bookName} onChange={handleInputChange}/>
        <button className="button"> Create </button>
      </form>
    </div>
  )
}

export default BookCreate;
