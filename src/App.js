import React, { useState } from 'react'
import TodoList from './components/TodoList';
import TodoTemplate from './components/TodoTemplate';
import { nanoid } from 'nanoid';
import TodoItem from './components/TodoItem';
import './App.css'
import { MdAddCircle} from "react-icons/md";

const App = () => {

  const [todos, setTodos] = useState([
    {
      id: 1,
      text: '할일1',
      checked: true,
    },
    {
      id: 2,
      text: '할일2',
      checked: true,
    },
    {
      id: 3,
      text: '할일3',
      checked: false,
    },
  ]);

  return (
    <div>
      <TodoTemplate todoLength={todos.length}/>
      <TodoList todos={todos}/>
      <div className='add-todo-button'>
        <MdAddCircle />
      </div>
    </div>
  )
}

export default App
