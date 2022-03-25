document.body.innerHTML += renderPage();

// event listeners

document.addEventListener("click", (e) => {
  if (e.target.className === "add-btn") {
    document.querySelector(".todo-list").innerHTML += renderItem();
  } else if (e.target.className === "sort-btn") {
    document.querySelector(".todo-list").innerHTML = renderSortedHtml();
  }
});

document.addEventListener("click", (e) => {
  if (e.target.className === "delete-btn") {
    e.target.parentNode.remove();
  }
});

document.addEventListener("click", (e) => {
  if (e.target.className === "sort-btn") {
    sorting();
  }
});

// functions

function renderPage() {
  return `
<div class="container">
<div class="app">
    <div class="input">
        <input id="todo-input" type="text"/>
        <button class="add-btn">Add</button>
        <button class="sort-btn">Sort</button>
    </div>
    <div class="todo-list"></div>
</div>
</div>
    
    `;
}

function renderItem() {
  const itemInput = document.querySelector("#todo-input");
  return `
  <div class="items">
    <p class="todo-item">${itemInput.value}</p>
    <button class="delete-btn">Remove</button>
</div>`;
}

function sorting() {
  const items = document.querySelectorAll(".todo-item");
  const sortArray = [];

  items.forEach((item) => {
    sortArray.push(item.textContent);
  });
  return sortArray.sort((a, b) => a.localeCompare(b));
}

function renderSortedHtml() {
  return sorting()
    .map((item) => {
      return `
      <div class="items">
        <p class="todo-item">${item}</p>
        <button class="delete-btn">Remove</button>
    </div>`;
    })
    .join("");
}
