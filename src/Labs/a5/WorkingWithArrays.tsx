import { useState } from "react";

function WorkingWithArrays() {
  const API = "http://localhost:4000/a5/todos";
  const [todo, setTodo] = useState({
    id: 1,
    title: "NodeJS Assignment",
    description: "Create a NodeJS server with ExpressJS",
    due: "2021-09-09",
    completed: false,
  });

  return (
    <div>
      <h3>Working with Arrays</h3>
      <h4>Retrieving Arrays</h4>
      <a href={API}>
        Get Todos
      </a>
      <h4>Retrieving an Item from an Array by ID</h4>
      <input value={todo.id}
        onChange={(e) => setTodo({ ...todo,
          id: Number(e.target.value) })}/>
      <input type="text" value={todo.title}
        onChange={(e) => setTodo({
          ...todo, title: e.target.value })}/>
      <h3>Updating an Item in an Array</h3>
      <a href={`${API}/${todo.id}/title/${todo.title}`} >
        Update Title to {todo.title}
      </a>
      <a href={`${API}/${todo.id}`}>
        Get Todo by ID
      </a>
      <a href={`${API}?completed=true`}>
        Get Completed Todos
      </a>
      <h3>Creating new Items in an Array</h3>
      <a href={`${API}/create`}>
        Create Todo
      </a>
      <h3>Deleting from an Array</h3>
      <a href={`${API}/${todo.id}/delete`}>
        Delete Todo with ID = {todo.id}
      </a>
      <a href={`http://localhost:4000/a5/todos/${todo.id}/description/${todo.description}`} className="btn btn-primary">
        Update Todo Description
      </a>
      <a href={`http://localhost:4000/a5/todos/${todo.id}/completed/${todo.completed}`} className="btn btn-primary">
        Update Todo Completed
      </a>
      <input type="text" 
        onChange={(e) => setTodo({ ...todo,
            description: e.target.value })}
        value={todo.description}/>
      <input type="checkbox" 
        onChange={(e) => setTodo({ ...todo,
            completed: !!e.target.value })}
        checked={todo.completed}/>
    </div>
  );
}
export default WorkingWithArrays;