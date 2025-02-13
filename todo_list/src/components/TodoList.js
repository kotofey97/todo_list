import React from 'react';
import TodoItem from './TodoItem';
import './TodoList.css'

export default function TodoList({ todos, onToggle, onDelete }) {
    return (
        <ul className="todo-list">
            {todos.map(todo => (
                <TodoItem
                    key={todo.id}
                    todo={todo}
                    onToggle={onToggle}
                    onDelete={onDelete}
                />
            ))}
        </ul>
    );
}
