const todoListInput = document.querySelector("#todo-input");

document.body.innerHTML += renderPage();

// event listeners

document.addEventListener("click", (e) => {
  if (e.target.className === "btn") {
    document.querySelector(".todo-list").innerHTML += renderItem();
  }
});

document.addEventListener("click", (e) => {
  if (e.target.className === "delete-btn") {
    e.target.parentNode.remove();
  }
});

document.addEventListener("click", (e) => {
  if (e.target.className === "sort-btn") {
    sort();
  }
});

// functions

function renderPage() {
  return `
<div class="container">
<div class="app">
    <div class="input">
        <input id="todo-input" type="text"/>
        <button class="btn">Add</button>
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

function sort() {
  const items = document.querySelectorAll(".todo-item");
  const sortArray = [];

  items.forEach((item) => {
    sortArray.push(item.textContent);
  });
  sortArray.sort((a, b) => a.localeCompare(b));

  const sortedHtml = sortArray.map((item) => {
    return `
      <div class="items">
        <p class="todo-item">${item}</p>
        <button class="delete-btn">Remove</button>
    </div>`;
  });
  return sortedHtml
  
}
