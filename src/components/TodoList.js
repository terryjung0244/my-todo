import React from 'react'
import TodoItem from './TodoItem'

const TodoList = ({todos}) => {
  return (
    <div className='TodoList'>
      {todos.map((todo, index) => {
        return (
          <div key={todo.id}>
            <TodoItem todo={todo}/>
          </div>
        )
      })}
    </div>
  )
}

export default TodoList
