import taskList from "./save";
import dayjs from "dayjs";

export const addedTasksField = document.querySelector("#added-tasks-field");

export default function renderTasks() {
  addedTasksField.textContent = "";
  taskList.forEach((task) => {
    const taskContainer = document.createElement("ul");
    const taskName = document.createElement("li");
    const taskDueDate = document.createElement("li");
    const taskDueTime = document.createElement("li");
    const taskFolder = document.createElement("li");
    const deleteBtn = document.createElement("button");
    const editBtn = document.createElement("button");

    taskContainer.classList.add("task-item");
    taskContainer.setAttribute("data-uid", task.uid);
    deleteBtn.classList.add("delete-tasks");
    editBtn.classList.add("edit-tasks");

    taskName.innerHTML = `<span>TASK:</span> ${task.task}`;
    taskDueDate.innerHTML = `<span>DUE DATE:</span> ${new dayjs(
      task.dueDate
    ).format("ddd, DD MMM, YYYY")}`;
    taskDueTime.innerHTML = `<span>DUE TIME:</span> ${task.dueTime}`;
    taskFolder.innerHTML = `<span>FOLDER:</span> ${task.folder}`;
    deleteBtn.textContent = "✖";
    editBtn.textContent = "🖊";

    switch (task.priority) {
      case "low":
        taskContainer.style.borderLeft = "5px solid var(--low-priority)";
        break;
      case "medium":
        taskContainer.style.borderLeft = "5px solid var(--medium-priority)";
        break;
      case "high":
        taskContainer.style.borderLeft = "5px solid var(--high-priority)";
        break;
      default:
        taskContainer.style.borderLeft = "5px solid var(--low-priority)";
    }

    taskContainer.appendChild(taskName);
    taskContainer.appendChild(taskDueDate);
    taskContainer.appendChild(taskDueTime);
    taskContainer.appendChild(taskFolder);
    taskContainer.appendChild(deleteBtn);
    taskContainer.appendChild(editBtn);
    addedTasksField.appendChild(taskContainer);
  });
}
