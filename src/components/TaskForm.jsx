import { useState } from 'react'

function TaskForm({ onAdd }) {
  const [text, setText] = useState('')
  const [dueDate, setDueDate] = useState('')

  const handleSubmit = (e) => {
    e.preventDefault()
    const trimmed = text.trim()
    if (!trimmed) return

    onAdd(trimmed, dueDate)
    setText('')
    setDueDate('')
  }

  return (
    <form className="task-form" onSubmit={handleSubmit}>
      <input
        type="text"
        value={text}
        onChange={(e) => setText(e.target.value)}
        placeholder="新しいタスクを入力"
        aria-label="タスク内容"
      />
      <input
        type="date"
        value={dueDate}
        onChange={(e) => setDueDate(e.target.value)}
        aria-label="期限"
      />
      <button type="submit">追加</button>
    </form>
  )
}

export default TaskForm
