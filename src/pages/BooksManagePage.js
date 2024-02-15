import { useState, useEffect } from 'react';
import BookList from '../components/BookList';
import BookCreate from '../components/BookCreate';
import JsonServer from '../api/JsonServer';

const BooksManagePage = () => {
  const [books, setBooks] = useState ([]);

  const createHandler = async(name) => {
    const book = await JsonServer({type:'create-book', name});
    setBooks ([...books, book]);
  };
  
  const fetchBooks = async()=>{
    const data = {type: 'get-books'};
    const books = await JsonServer (data);
    console.log(books);
    setBooks (books);
  }
  
  useEffect (()=>{
    fetchBooks();
  },[]);

  const handleDeleteBook = async(id)=>{
    await JsonServer({type: 'delete-book', id});
    setBooks ((bs)=>{
      return bs.filter((b)=> b.id !== id)
    })
    console.log('handleDeleteBook...');
  }
  
  const handleEdit = async(id, name, like)=>{
    await JsonServer({type: 'edit-book', id, name, like});
    // change book name at BookList component.
  }
  return (
    <div className="app">
      <BookCreate onCreate={createHandler}/>      
      <BookList books={books} onDelete={handleDeleteBook} onEdit={handleEdit}/>
    </div>
  )
}

export default BooksManagePage;