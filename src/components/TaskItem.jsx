function TaskItem({ task, onToggle }) {
  return (
    <li className={`task-item ${task.completed ? 'completed' : ''}`}>
      <label>
        <input
          type="checkbox"
          checked={task.completed}
          onChange={() => onToggle(task.id)}
        />
        <span className="task-text">{task.text}</span>
      </label>
      {task.dueDate && <span className="task-due">{task.dueDate}</span>}
    </li>
  )
}

export default TaskItem
