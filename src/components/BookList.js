
import BookItem from './BookItem';

function BookList({books, onDelete, onEdit}){

  const renderList = books.map((book)=>{
    return <BookItem key={book.id} book={book} onDelete={onDelete} onEdit={onEdit}/>
  })
  return (
    <div className="book-list">
      {renderList}
    </div>
  )
}


export default BookList;
