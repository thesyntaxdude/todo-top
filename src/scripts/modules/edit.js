import taskList from "./save";
import { addedTasksField } from "./render";
import Todo from "./todo";
import dayjs from "dayjs";

const taskField = document.querySelector("#task-name");
const dueDateField = document.querySelector("#task-due-date");
const dueTimeField = document.querySelector("#task-due-time");
const priorityField = document.querySelector("#priority-level");
const folderField = document.querySelector("#folder-name");
const editBtn = document.querySelector("#submit");

addedTasksField.addEventListener("click", (e) => {
  if (e.target.classList.contains("edit-tasks")) {
    taskList.forEach((task) => {
      const index = taskList.indexOf(task);
      if (e.target.parentElement.getAttribute("data-uid") === task.uid) {
        const taskDate = new dayjs(`${task.dueDate} ${task.dueTime}`);
        const taskName = task.task;
        const dueDate = taskDate.format("YYYY-MM-DD");
        const dueTime = taskDate.format("hh:mm");
        const priority = task.priority;
        const folder = task.folder;

        editBtn.textContent = "Edit Task";
        const updateTodo = new Todo(
          taskName,
          dueDate,
          dueTime,
          priority,
          folder
        );
        updateTodo.deleteTask(taskList, index);
        updateTodo.updateTask(
          taskField,
          dueDateField,
          dueTimeField,
          priorityField,
          folderField
        );
      }
    });
  }
});

editBtn.addEventListener("click", () => (editBtn.textContent = "Add Task"));
