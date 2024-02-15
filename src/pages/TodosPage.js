import { useEffect, useState } from "react";
import JsonServer from '../api/JsonServer';

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
  const displayList = visibleTodos.map((todo)=>{
    //return <li key={todo.id}>{todo.completed? <s>{todo.text}</s>: todo.text}</li>;
    return <TodoItem todo={todo} onToggle={handleToggle} />
  })
  const footer = `There are ${activeTodoCount} todos left!`;

  return (
    <>
      <label>
        <input
          type="checkbox"
          checked={showActive}
          onChange={e => setShowActive(e.target.checked)}
        />
        Show only active todos
      </label>
      <NewTodo onAdd={handleAddTodo} />
      <ul>
        {displayList}
      </ul>
      <br/>
      <footer>{footer}</footer>
    </>
  );
}

const NewTodo = ({onAdd}) => {
  const [text, setText] = useState('');
  const handleAdd = () => {
    onAdd(text);
    setText('');
  }
  return (
    <>
      <input className="input" value={text} onChange={e => setText(e.target.value)} />
      <button className="button" onClick={handleAdd} disabled={text===''}>
        Add Todo
      </button>
    </>
  )
}
const TodoItem = ({todo, onToggle}) => {
  return (
    <li key={todo.id}>
      <label>
        <input
          type="checkbox"
          checked={todo.completed}
          onChange={e => onToggle(todo, e.target.checked)}
        />
        {todo.completed? <s>{todo.text}</s>: todo.text}
      </label>
    </li>
  )
}
export default TodosPage;
