import React, { useState } from 'react'

const CreateTodoField = ({ setTodos }) => {
  const [title, setTitle] = useState('')

  const addTodo = (title) => {
    setTodos(prev => [...prev, {
      _id: new Date(),
      title,
      isCompleted: false
    }])
    setTitle('')
  }

  return (
    <div className="border-zinc-800 border-2 flex items-center justify-between mb-10 px-5 py-2 rounded-2xl">
      <input
        type="text"
        onChange={e => setTitle(e.target.value)}
        value={title}
        onKeyPress={e => e.key === 'Enter' && addTodo(title)}
        className="bg-transparent w-full border-none outline-none"
        placeholder='Add a task'
      />
    </div>
  )
}

export default CreateTodoField
