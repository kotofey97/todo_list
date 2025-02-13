import React, { useState } from 'react';
import TodoList from './components/TodoList';
import './App.css';

function App() {
    const [todos, setTodos] = useState([]);
    const [newTodo, setNewTodo] = useState('');

    const addTodo = () => {
        if (newTodo.trim() !== '') {
            setTodos([...todos, { id: Date.now(), text: newTodo, completed: false }]);
            setNewTodo('');
        }
    };

    const toggleTodo = (id) => {
        setTodos(todos.map(todo =>
            todo.id === id ? { ...todo, completed: !todo.completed } : todo
        ));
    };

    const deleteTodo = (id) => {
        setTodos(todos.filter(todo => todo.id !== id));
    };

    return (
        <div className="app-container">
            <h1>Список дел</h1>
            <div className="add-todo-container">
                <input
                    type="text"
                    value={newTodo}
                    onChange={e => setNewTodo(e.target.value)}
                    placeholder="Введите новое дело"
                    className="todo-input"
                />
                <button onClick={addTodo} className="add-button">Добавить</button>
            </div>
            <TodoList
                todos={todos}
                onToggle={toggleTodo}
                onDelete={deleteTodo}
            />
        </div>
    );
}

export default App;