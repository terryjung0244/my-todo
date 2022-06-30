import React from 'react'
import { MdCheckBox, MdCheckBoxOutlineBlank } from "react-icons/md";

const TodoItem = ({ todo }) => {

  const { id, checked, text } = todo;

  return (
    <div className='TodoItem'>
      <div className={`Content ${checked ? 'checked' : ''}`}>
        {checked ? <MdCheckBox/> : <MdCheckBoxOutlineBlank/>}
        <div>
          {text}
        </div>
      </div>
    </div>
  )
}

export default TodoItem
