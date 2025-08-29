import { folderList, addedTasksField } from "./render";

export const folderContainer = document.createElement("div");

export default function renderFolderButtons(folderList) {
  const filteredFolderList = [...new Set(folderList)];
  filteredFolderList.forEach((folder) => {
    const folderListContainer = document.createElement("ul");
    const folderItem = document.createElement("li");
    folderItem.textContent = folder;
    folderListContainer.classList.add("folder-list-container");
    folderContainer.classList.add("folder-container");
    folderListContainer.appendChild(folderItem);
    folderContainer.appendChild(folderListContainer);
    addedTasksField.appendChild(folderContainer);
  });
}
