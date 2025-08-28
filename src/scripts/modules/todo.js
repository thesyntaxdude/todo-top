export default class Todo {
  constructor(task, dueDate, dueTime, priority, folder) {
    this.task = task;
    this.dueDate = dueDate;
    this.dueTime = dueTime;
    this.priority = priority;
    this.folder = folder;
    this.uid = crypto.randomUUID();
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
    taskField.value = this.task;
    dueDateField.value = this.dueDate;
    dueTimeField.value = this.dueTime;
    priorityField.value = this.priority;
    folderField.value = this.folder;
  }
}
