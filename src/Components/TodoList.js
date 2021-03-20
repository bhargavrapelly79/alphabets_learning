import React from 'react';
import Todo from './Todo';

export default function TodoList(){
    return(
        <div className="todo-list">
        <Todo />
        <Todo />
        <Todo />
        </div>
    );
}