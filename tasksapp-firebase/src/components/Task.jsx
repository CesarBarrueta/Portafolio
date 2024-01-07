import React from 'react'

export default function Task(props) {
    const handleDelete = () => {
        props.deleteTask(props.id)
    } 

  return (
    <div className='task-container'>
        <p id='task-title'>{props.task}</p>
        <span className="material-symbols-outlined" id='task-close' onClick={handleDelete}>close</span>
        <p id='task-description'>{props.description}</p>
    </div>
  )
}
