'use client';

import { useState } from 'react';
import TodoForm from '../../components/TodoForm';
import TodoItem from '../../components/TodoItem';

interface Todo {
  id: number;
  text: string;
  completed: boolean;

}

export default function Home() {
  const [todos, setTodos] = useState<Todo[]>([]);
  const addTodo = (text: string) => {
    const newTodo: Todo = {
      id: Date.now(),
      text,
      completed: false,
    };
    setTodos([...todos, newTodo]);
  };


  const toggleTodo = (id: number) => {
    setTodos(todos.map(todo =>
      todo.id === id ? { ...todo, completed: !todo.completed } : todo
    ));
  };

  const deleteTodo = (id: number) => {
    setTodos(todos.filter(todo => todo.id !== id));
  };

  return (
    <div className="max-w-md mx-auto mt-8 p-6 bg-white rounded-lg shadow-lg">
      <h1 className="text-2xl font-bold text-center mb-6">Todo List</h1>
      
      <TodoForm onAdd={addTodo} />
      
      <div className="space-y-2">
        {todos.map(todo => (
          <TodoItem
            key={todo.id}
            id={todo.id}
            text={todo.text}
            completed={todo.completed}
            onToggle={toggleTodo}
            onDelete={deleteTodo}
          />
        ))}
      </div>
      
      {todos.length === 0 && (
        <p className="text-center text-gray-500 mt-6">No todos yet. Add one above!</p>
      )}
    </div>
  );
}