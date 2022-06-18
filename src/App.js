import React, { useState } from 'react';

import Form from './components/form';

const App = () => {
  const [todos, setTodos] = useState([]);

  const toggleComplete = index => {
    setTodos(
      todos.map((todo, currentValue) =>
        currentValue === index
          ? {
              ...todo,
              complete: !todo.complete,
            }
          : todo
      )
    );
  };
  return (
    <div className="App">
      <h1>Todo list</h1>
      <Form 
      onSubmit={text => setTodos([{ text, complete: false }, ...todos])}
      />
      {
        todos.map(({text, complete}, index) => {
          return (
            <div key={index} onClick={() => toggleComplete(index)}
            style={{
              textDecoration: complete ? "line-through" : ""
            }}
            >{text}</div>
          )
        })
      }
      <button onClick={() => setTodos([])}>Reset</button>
    </div>
  );
}

export default App;