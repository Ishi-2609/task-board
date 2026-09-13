import TaskItem from './TaskItem'

function TaskList({ tasks, onToggle }) {
  if (tasks.length === 0) {
    return <p className="empty-message">タスクはありません</p>
  }

  return (
    <ul className="task-list">
      {tasks.map((task) => (
        <TaskItem key={task.id} task={task} onToggle={onToggle} />
      ))}
    </ul>
  )
}

export default TaskList
