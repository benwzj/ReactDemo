import { useState } from 'react';
import { RiCloseCircleLine } from 'react-icons/ri';
import { TiEdit } from 'react-icons/ti';
import '../css/TodosPage.css';

export const TodoItem = ({todo, onCompleted, onDel, onUpdate}) => {
  const [editing, setEditing] = useState(false);
  const [text, setText] = useState(todo.text)
  const [completed, setCompleted] = useState(todo.completed)

  const handleUpdate = () => {
    setEditing (false);
    onUpdate({id: todo.id, text, completed });
  }
  const completedlabel = () =>{
    if (todo.completed){
      return completed? 'Have been Completed!' : 'You Mark it as Uncompleted!';
    }else{
      return completed? 'You Mark it as Completed!' : 'Not completed Yet!';
    }
  }
  const editStateTodoItem = (
    <li>
      <div className="todo-edit-item">
        <div className="todo-edit-label">
          <label>
            <input
              type="checkbox"
              checked={completed}
              onChange={e => setCompleted(e.target.checked)}
            />
            &nbsp;&nbsp;{completedlabel()}
          </label>
        </div>
        <input 
          value={text} 
          className="todo-edit-input-text"
          onChange={e => setText(e.target.value)} 
        />
        <div className='todo-edit-button-group'>
          <button className="todo-edit-button" onClick={handleUpdate} disabled={text===''}>
            Save
          </button>
          <button className="todo-edit-button" onClick={()=>setEditing (false)} disabled={text===''}>
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
          <label className={todo.completed ? "todo-item-label completed" : "todo-item-label"}>
            <input
              type="checkbox"
              checked={todo.completed}
              onChange={e => onCompleted(todo, e.target.checked)}
            />
            {/* &nbsp;&nbsp;{todo.completed? <s>{todo.text}</s>: todo.text}&nbsp;&nbsp; */}
            &nbsp;&nbsp;{todo.text}
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
}

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
