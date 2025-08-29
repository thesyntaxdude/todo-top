import { addedTasksField } from "./render";
import render from "./render";
import taskList from "./save";
import Todo from "./todo";
import renderFolders from "./renderFoldeFilter";
import { folderContainer } from "./renderFoldeFilter";

export default function deleteTodo() {
  addedTasksField.addEventListener("click", (e) => {
    if (e.target.classList.contains("delete-tasks")) {
      taskList.forEach((task) => {
        if (e.target.parentElement.getAttribute("data-uid") === task.uid) {
          const index = taskList.indexOf(task);
          const deleteTodo = new Todo();
          deleteTodo.deleteTask(taskList, index);
          localStorage.setItem("todoTasks", JSON.stringify(taskList));
          render();
          location.reload();
        }
      });
    }
  });
}

deleteTodo();
