import React, { useState } from 'react';
import AddTodo from '../AddTodo/AddTodo';

export default function TodoList() {
  const [todos, setTodos] = useState([
    { id: '123', text: 'shopping', status: 'active' },
    { id: '124', text: 'playing games', status: 'active' },
  ]);

  const handleAdd = (todo) => {
    // 새로운 투두 업데이트 해야 함
    //console.log(todo);
    setTodos([...todos, todo]);
  };
  return (
    <section>
      <ul>
        {todos.map((item) => (
          <li key={item.id}>{item.text}</li>
        ))}
      </ul>
      <AddTodo onAdd={handleAdd} />
    </section>
  );
}

// todo list 보여주는 기능만 있음
