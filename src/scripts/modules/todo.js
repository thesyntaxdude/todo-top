export default class Todo {
  constructor(task, dueDate, dueTime, priority, folder) {
    this.task = task;
    this.dueDate = dueDate;
    this.dueTime = dueTime;
    this.priority = priority;
    this.folder = folder;
  }

  addTask(taskList) {
    taskList.push(this);
  }

  deleteTask(taskList, index) {
    taskList.splice(index, 1);
  }

  updateTask(
    taskField,
    dueDateField,
    dueTimeField,
    priorityField,
    folderField
  ) {
    taskField.textContent = this.task;
    dueDateField.textContent = this.dueDate;
    dueTimeField.textContent = this.dueTime;
    priorityField.textContent = this.priority;
    folderField.textContent = this.folder;
  }
}
