function getCurrentTime() {
    const now = new Date();
    return now.toLocaleString();
}

function addTask() {
    const input = document.getElementById("taskInput");
    const text = input.value.trim();

    if (text === "") return;

    const task = createTaskElement(text, getCurrentTime(), false);
    document.getElementById("pendingList").appendChild(task);

    input.value = "";
}

function createTaskElement(text, time, isCompleted) {
    const li = document.createElement("li");

    const taskText = document.createElement("span");
    taskText.innerText = `${text} (${time})`;

    if (isCompleted) {
        li.classList.add("completed");
    }

    const btnDiv = document.createElement("div");
    btnDiv.className = "task-buttons";

    // Complete Button
    const completeBtn = document.createElement("button");
    completeBtn.innerText = "✔";
    completeBtn.onclick = function () {
        markComplete(li, text);
    };

    // Edit Button
    const editBtn = document.createElement("button");
    editBtn.innerText = "Edit";
    editBtn.onclick = function () {
        const newText = prompt("Edit task:", text);
        if (newText) {
            taskText.innerText = `${newText} (${getCurrentTime()})`;
        }
    };

    // Delete Button
    const deleteBtn = document.createElement("button");
    deleteBtn.innerText = "Delete";
    deleteBtn.onclick = function () {
        li.remove();
    };

    btnDiv.appendChild(completeBtn);
    btnDiv.appendChild(editBtn);
    btnDiv.appendChild(deleteBtn);

    li.appendChild(taskText);
    li.appendChild(btnDiv);

    return li;
}

function markComplete(taskElement, text) {
    taskElement.remove();

    const completedTask = createTaskElement(
        text,
        "Completed: " + getCurrentTime(),
        true
    );

    document.getElementById("completedList").appendChild(completedTask);
}