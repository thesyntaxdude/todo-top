import Todo from "./todo";
import renderTasks from "./render";

const taskList = [];
export default taskList;

const addTaskBtn = document.querySelector("#submit");
addTaskBtn.addEventListener("click", (e) => {
  e.preventDefault();
  const task = document.querySelector("#task-name").value;
  const dueDate = document.querySelector("#task-due-date").value;
  const dueTime = document.querySelector("#task-due-time").value;
  const priority = document.querySelector("#priority-level").value;
  const folder = document.querySelector("#folder-name").value || "inbox";

  const todoTask = new Todo(task, dueDate, dueTime, priority, folder);
  todoTask.addTask(taskList);

  renderTasks();

  document.querySelector("#task-name").value = "";
  document.querySelector("#task-due-date").value = "";
  document.querySelector("#task-due-time").value = "";
  document.querySelector("#priority-level").value = "";
  document.querySelector("#folder-name").value = "";
});
