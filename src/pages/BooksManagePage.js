import { useState, useEffect } from 'react';
import BookList from '../components/BookList';
import BookCreate from '../components/BookCreate';
import JsonServer from '../api/JsonServer';

const BooksManagePage = () => {
  const [books, setBooks] = useState ([]);
  const createHandler = (book) => {
    setBooks ([...books, book]);
  };
  
  const fetchBooks = async()=>{
    const data = {type: 'get'};
    console.log('fatchBooks...');
    const books = await JsonServer (data);
    console.log(books);
    setBooks (books);
  }
  
  useEffect(()=>{
    fetchBooks();
    console.log('this is useEffect()')
  },[]);

  const handleDeleteBook = (id)=>{
    setBooks ((bs)=>{
      return bs.filter((b)=> b.id !== id)
    })
    console.log('handleDeleteBook...');
  }

  return (
    <div className="app">
      <BookCreate create={createHandler}/>      
      <BookList books={books} onDelete={handleDeleteBook}/>
    </div>
  )
}

export default BooksManagePage;