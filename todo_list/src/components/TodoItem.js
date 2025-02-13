import React from 'react';
import './TodoItem.css'

function Todoitem({ todo, onToggle, onDelete }) {
    return (
        <li className={`todo-item ${todo.completed ? 'completed' : ''}`}>
            <input
                type="checkbox"
                checked={todo.completed}
                onChange={() => onToggle(todo.id)}
            />
            <span className='todo-text'>{todo.text}</span>
            <button className='delete-button' onClick={() => onDelete(todo.id)}>Удалить</button>
        </li>
    );
}

export default Todoitem