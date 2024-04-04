import { useEffect, useRef, useState, memo } from 'react';
import { RiCloseCircleLine } from 'react-icons/ri';
import { TiEdit } from 'react-icons/ti';
import '../css/TodosPage.css';


export const TodoItem = memo(function TI({todo, onUpdateCompleted, onDel, onUpdate}) {
  const [editing, setEditing] = useState(false);
  const [editText, setEditText] = useState(todo.text);
  const [editCompleted, setEditCompleted] = useState(todo.completed);
  const renderCount = useRef(0);
  
  useEffect (()=>{
    renderCount.current = renderCount.current + 1;
  });
  const handleUpdate = () => {
    setEditing (false);
    onUpdate({id: todo.id, text: editText, completed: editCompleted });
  };
  const handleCancelUpdate = () =>{
    setEditing (false);
    setEditCompleted (todo.completed);
  }
  const completedlabel = () =>{
    if (todo.completed){
      return editCompleted ? 'Have been Completed!' : 'You Mark it as Uncompleted!';
    }else{
      return editCompleted ? 'You Mark it as Completed!' : 'Not completed Yet!';
    }
  }
  const editStateTodoItem = (
    <li>
      <div className="todo-edit-item">
        <div className="todo-edit-label">
          <label>
            <input
              type="checkbox"
              checked={editCompleted}
              onChange={e => setEditCompleted(e.target.checked)}
            />
            &nbsp;&nbsp;{completedlabel()}
          </label>
        </div>
        <input 
          value={editText} 
          className="todo-edit-input-text"
          onChange={e => setEditText(e.target.value)} 
        />
        <div className='todo-edit-button-group'>
          <button className="todo-edit-button" onClick={handleUpdate} disabled={editText===''}>
            Save
          </button>
          <button className="todo-edit-button" onClick={handleCancelUpdate} disabled={editText===''}>
            Cancel  
          </button>
        </div>
      </div>
    </li>
  )

  const normalStateTodoItem = (
    <li>
      <div className="todo-item">
        <div>
          <label 
            className={todo.completed ? "todo-item-label completed" : "todo-item-label"}
          >
            <input
              type="checkbox"
              checked={todo.completed}
              onChange={e => onUpdateCompleted(todo, e.target.checked)}
            />
            {/* &nbsp;&nbsp;{todo.completed? <s>{todo.text}</s>: todo.text}&nbsp;&nbsp; */}
            &nbsp;&nbsp;{todo.text+ ' ('+renderCount.current+')'}
          </label>
        </div>
        <div className="icons_hover">
          <RiCloseCircleLine
            onClick={() => onDel(todo.id)}
          />
          <TiEdit
            onClick={()=>setEditing (true)}
            // onClick={() => onEdit({ id: todo.id, text: todo.text, completed: todo.completed })}
          />
        </div>      
      </div>
    </li>
  )
  return editing ? editStateTodoItem : normalStateTodoItem;
})

export const NewTodo = ({onAdd}) => {
  const [text, setText] = useState('');
  const handleAdd = () => {
    onAdd(text);
    setText('');
  }
  return (
    <div className="todo-new">
      <input className="todo-input" value={text} onChange={e => setText(e.target.value)} />
      <button className="todo-addnew-button" onClick={handleAdd} disabled={text===''}>
        Add Todo
      </button>
    </div>
  )
}
