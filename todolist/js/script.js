var input = document.querySelector("input");
var form = document.querySelector("form");
var button = document.querySelector("button");
var todo = document.querySelector(".todo");

form.addEventListener("submit", function (e) {
  e.preventDefault();
  var val = input.value.trim();
  if (val) {
    addTodoElement({
      text: val,
    });
  }
  input.value = "";
});

function addTodoElement(todos) {
  var li = document.createElement("li");
  li.innerHTML = `<span>${todos.text}</span><i class="fa-solid fa-trash"></i>`;
  if (todos.span === "completed") {
    li.setAttribute("class", "completed");
  }
  li.addEventListener("click", function () {
    this.classList.toggle("completed");
  });
  li.querySelector("i").addEventListener("click", function () {
    if (confirm("bạn có muốn xóa không?")) {
      this.parentElement.remove();
    }
  });

  todo.appendChild(li);
}
