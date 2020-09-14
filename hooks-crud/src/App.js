import React, { useState } from 'react';
import './App.css';

function App() {
  const [todos, setTodos] = useState([
    {
      id: Math.random(),
      text: 'teste',
    },
    {
      id: Math.random(),
      text: 'teste 2',
    },
    {
      id: Math.random(),
      text: 'teste 3',
    },
  ]);
  const [value, setValue] = useState('');

  const handleAddTodo = (e) => {
    e.preventDefault();
    const newTodos = [...todos, { id: Math.random(), text: value }];
    setTodos(newTodos);
    setValue('');
  };

  return (
    <div className="App">
      <ul>
        {todos.map((todo) => (
          <li key={todo.id}>{todo.text}</li>
        ))}
      </ul>
      <form onSubmit={handleAddTodo}>
        <input type="text" value={value} onChange={(e) => setValue(e.target.value)} />
        <button type="submit" onClick={handleAddTodo}>
          Add Todo
        </button>
      </form>
    </div>
  );
}

export default App;
