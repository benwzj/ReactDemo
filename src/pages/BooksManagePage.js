import { useState } from 'react';
import BookList from '../components/BookList';
import BookCreate from '../components/BookCreate';

const BooksManagePage = () => {
  const [books, setBooks] = useState ([]);
  const createHandler = (book) => {
    setBooks ([...books, book]);
  };
  const handleDeleteBook = (id)=>{
    setBooks ((bs)=>{
      return bs.filter((b)=> b.id !== id)
    })
  }

  return (
    <div className="app">
      <BookCreate create={createHandler}/>      
      <BookList books={books} onDelete={handleDeleteBook}/>
    </div>
  )
}

export default BooksManagePage;