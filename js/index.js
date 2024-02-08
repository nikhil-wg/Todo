let todo = document.querySelector("#todo");
let todo_des = document.querySelector("#todo-des");
let prior = document.querySelector("#prior");
let addtodo = document.querySelector("#addtodo");
let ul = document.querySelector("#ul");
let todoList = localStorage.getItem("todo");
function addtobo() {
  todoList = localStorage.getItem("todo");
  todoList = JSON.parse(todoList);
  let List = todoList.map((value) => {
    let color = "";
    let no = "";
    if (value.prior === "p1") {
      color = "red";
      no = "!";
    }
    if (value.prior === "p2") {
      color = "#367BF5";
      no = "!!";
    }
    if (value.prior === "p3") {
      color = "#EA3D2F";
      no = "!!!";
    }

    return `<li class="task">
    <h1>
    ${value.todo}
    <span style="background-color: ${color}">${no}</span>
    </h1>
    <p>${value.des}</p>
    <i class="fa fa-trash" aria-hidden="true" style="color: red"></i>
    </li>`;
  });
  ul.innerHTML = List.join(ul);
  console.log(List);
}
addtodo.addEventListener("click", function () {
  let newtodo = {
    todo: todo.value,
    des: todo_des.value,
    prio: prior.value,
  };
  let todoList = localStorage.getItem("todo");
  todoList = todoList === null ? [] : JSON.parse(todoList);
  todoList.push(newtodo);
  localStorage.setItem("todo", JSON.stringify(todoList));
  // find
  console.log(todoList);
  addtobo(todoList);
});

// let addtodo = document.querySelector("#addTodoButton");
// let popup = document.querySelector(".popupTODO");
// let save = document.querySelector("#saveBtn");
// let close = document.querySelector("#close");

// addtodo.addEventListener("click", () => {
//     popup.classList.add("showPopup");
//     popup.classList.remove("closePopup")
// })

// save.addEventListener("click", () => {
//     popup.classList.remove("showPopup");
//     popup.classList.add("closePopup");
// })

// close.addEventListener("click", () => {
//     popup.classList.remove("showPopup");
//     popup.classList.add("closePopup");
// })
