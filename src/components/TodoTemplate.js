import React from 'react'

const TodoTemplate = ({todoLength}) => {
  return (
    <div className='TodoTemplate'>
      <div className='Title'>
        오늘의 할일 ({todoLength})
      </div>
    </div>
  )
}

export default TodoTemplate
