let myTodoList = JSON.parse(localStorage.getItem("mylist")) || [];

function addTodo() {
  const todoName = document.getElementById("name").value.trim();
  if (todoName === "") {
    alert("Please enter a todo name.");
    return;
  }
  const newTodo = { name: todoName, isComplete: false };
  myTodoList.push(newTodo);
  localStorage.setItem("mylist", JSON.stringify(myTodoList));
  document.getElementById("name").value = "";
  renderTodos();
}

function renderTodos() {
  const todoListElement = document.getElementById("all");
  todoListElement.innerHTML = ""; // Clear existing todos
  myTodoList.forEach((todo, index) => {
    const li = document.createElement("li");
    li.innerHTML = `
              <span class="${
                todo.isComplete ? "completed" : ""
              }" onclick="toggleComplete(${index})">${todo.name}</span>
              <button class="delete-btn" onclick="deleteTodo(${index})">Delete</button>
          `;
    todoListElement.appendChild(li);
  });
}

function toggleComplete(index) {
  myTodoList[index].isComplete = !myTodoList[index].isComplete;
  localStorage.setItem("mylist", JSON.stringify(myTodoList));
  renderTodos();
}

function deleteTodo(index) {
  myTodoList.splice(index, 1);
  localStorage.setItem("mylist", JSON.stringify(myTodoList));
  renderTodos();
}
renderTodos();
