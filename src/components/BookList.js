
import BookItem from './BookItem';

function BookList({books, onDelete}){

  const renderList = books.map((book)=>{
    return <BookItem key={book.id} book={book} onDelete={onDelete}/>
  })
  return (
    <div className="book-list">
      {renderList}
    </div>
  )
}


export default BookList;
