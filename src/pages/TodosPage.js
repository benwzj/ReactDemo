import { useEffect, useState } from "react";
import JsonServer from '../api/JsonServer';
import { RiCloseCircleLine } from 'react-icons/ri';
import { TiEdit } from 'react-icons/ti';
import '../css/TodosPage.css';

const TodosPage = () => {
  const [todos, setTodos] = useState([]);
  const [showActive, setShowActive] = useState(false);

  let activeTodos = todos.filter((todo)=>!todo.completed);
  let visibleTodos = showActive ? activeTodos : todos;
  let activeTodoCount = activeTodos.length;

  const fetchTodos = async() => {
    const data = {type: 'get-todos'};
    const ft = await JsonServer (data);
    setTodos (ft);
    // activeTodos = ft.filter((todo)=>!todo.completed);
    // visibleTodos = showActive ? activeTodos : todos;
    // activeTodoCount = visibleTodos.length;
  }
  const fetchShowActive = async()=> {
    const res = await JsonServer ({type: 'get-todos-showactive'});
    console.log (res);
    setShowActive (res.todos_showactive);
  }

  useEffect (()=>{
    fetchShowActive();
  }, []);
  useEffect (()=>{
    fetchTodos();
  }, []); 
  
  const handleAddTodo = async(newTodoText) =>{
    const todo = await JsonServer ({
      type: 'create-todo', 
      text: newTodoText, 
      completed: false
    });
    setTodos([...todos, todo]); 
  }

  const handleToggle = async(todo, completed) =>{
    await JsonServer({
      type: 'edit-todo',
      ...todo,
      completed
    });
    const newTodos = todos.map((t)=>t.id===todo.id? {...t,completed}: t);
    setTodos (newTodos);
  }

  const handleDelItem = async(id) =>{
    await JsonServer ({
      type: 'delete-todo', 
      id
    });
    setTodos(todos.filter(todo=>todo.id!==id)); 
  }

  const handleEditItem = async(todo) =>{
    await JsonServer ({
      type: 'edit-todo',
      ...todo
    })
    setTodos(todos.map(t=>t.id===todo.id? todo: t));
  }

  const handleShowActive = async(e)=> {
    setShowActive (e.target.checked);
    await JsonServer ({type: 'edit-todos-showactive', showactive: e.target.checked});
  }

  const displayList = visibleTodos.map((todo)=>{
    //return <li key={todo.id}>{todo.completed? <s>{todo.text}</s>: todo.text}</li>;
    return <TodoItem 
      todo={todo} 
      onToggle={handleToggle} 
      onDel={handleDelItem}
      onEdit={handleEditItem}
    />
  })

  const footer = `There are ${activeTodoCount} todos left!`;

  return (
    <div className="todo-page">
      <div>
        <label>
          <input
            type="checkbox"
            checked={showActive}
            onChange={handleShowActive}
          />
          &nbsp;Show only active todos
        </label>
      </div>
      <div>
        <NewTodo onAdd={handleAddTodo} />
      </div>
      <div>
        <ul>
          {displayList}
        </ul>
      </div>
      <br/>
      <div>
        <footer>{footer}</footer>
      </div>
    </div>
  );
}

const NewTodo = ({onAdd}) => {
  const [text, setText] = useState('');
  const handleAdd = () => {
    onAdd(text);
    setText('');
  }
  return (
    <div className="todo-new">
      <input className="todo-input" value={text} onChange={e => setText(e.target.value)} />
      <button className="todo-button" onClick={handleAdd} disabled={text===''}>
        Add Todo
      </button>
    </div>
  )
}

const TodoItem = ({todo, onToggle, onDel, onEdit}) => {

  return (
    <li key={todo.id}>
      <div className="todo-item">
        <div className="todo-label">
          <label>
            <input
              type="checkbox"
              checked={todo.completed}
              onChange={e => onToggle(todo, e.target.checked)}
            />
            &nbsp;&nbsp;{todo.completed? <s>{todo.text}</s>: todo.text}&nbsp;&nbsp;
          </label>
        </div>
        <div className="icons_hover">
          <RiCloseCircleLine
            onClick={() => onDel(todo.id)}
          />
          <TiEdit
            onClick={() => onEdit({ id: todo.id, text: todo.text, completed: todo.completed })}
          />
        </div>      
      </div>
    </li>
  )
}
export default TodosPage;
