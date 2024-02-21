import { useEffect, useState } from "react";
import { TodoItem, NewTodo } from "../components/Todos";
import JsonServer from '../api/JsonServer';
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

  const handleCompleted = async(todo, completed) =>{
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

  const handleUpdateItem = async(todo) =>{
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
      onCompleted={handleCompleted} 
      onDel={handleDelItem}
      onUpdate={handleUpdateItem}
      key={todo.id}
    />
  })

  const footer = `There are ${activeTodoCount} todos left!`;

  return (
    <div className="todo-page">
      <div className="todo-showactive">
        <input
          type="checkbox"
          checked={showActive}
          onChange={handleShowActive}
        />
        <label>
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
      <div className="todo-footer">
        <footer>{footer}</footer>
      </div>
    </div>
  );
}

export default TodosPage;
