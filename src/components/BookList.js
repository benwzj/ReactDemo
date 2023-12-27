
import BookItem from './BookItem';

const tmpList = ['Read your mind', 'Understand this world', 'ten questions'];

function BookList(){
  const renderList = tmpList.map((ti, index)=>{
    return <BookItem key={index} t={ti.toUpperCase()} />
  })
  return (
    <div>
      {renderList}
    </div>
  )
}


export default BookList;