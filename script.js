const main = document.getElementById("main");
const addBookBtn = document.getElementById("addBookBtn");
const form = document.getElementById("form");
const books = document.getElementById("books");
const closeForm = document.getElementById("close");

let isFormOpen = false;

main.removeChild(books);
main.removeChild(form);

books.addEventListener("click", editLibrary);

closeForm.addEventListener("click", () => {
  main.removeChild(form);
  isFormOpen = false;
});

addBookBtn.addEventListener("click", () => {
  main.appendChild(form);
  isFormOpen = true;
});

form.addEventListener("submit", function(e) {
  e.preventDefault();

  let title = e.target.children[1].value;
  let author = e.target.children[2].value;
  let pages = e.target.children[3].value;
  let hasRead = e.target.children[4].lastElementChild.checked;

  e.target.children[1].value = "";
  e.target.children[2].value = "";
  e.target.children[3].value = "";
  e.target.children[4].lastElementChild.checked = false;

  main.removeChild(form);
  isFormOpen = false;

  addBookToLibrary(title, author, pages, hasRead);
});

function addBookToLibrary(title, author, pages, hasRead) {
  main.appendChild(books);

  const div = document.createElement("div");
  div.classList.add("card");

  const p1 = document.createElement("p");
  p1.textContent = `"${title}"`;
  div.appendChild(p1);

  const p2 = document.createElement("p");
  p2.textContent = `${author}`;
  div.appendChild(p2);

  const p3 = document.createElement("p");
  p3.textContent = `${pages} pages`;
  div.appendChild(p3);

  const btn1 = document.createElement("button");
  if (hasRead) {
    btn1.textContent = "Read";
    btn1.style.backgroundColor = "lightgreen";
  } else {
    btn1.textContent = "Not read";
    btn1.style.backgroundColor = "lightcoral"
  }
  div.appendChild(btn1);

  const btn2 = document.createElement("button");
  btn2.textContent = "Remove";
  div.appendChild(btn2);

  books.appendChild(div);
}

function editLibrary(e) {
  if (e.target.textContent === "Remove" && !isFormOpen) {
    let card = e.target.parentElement;
    books.removeChild(card);
  } else if (e.target.textContent === "Read" && !isFormOpen) {
    let btn1 = e.target;
    btn1.textContent = "Not read";
    btn1.style.backgroundColor = "lightcoral"
  } else if (e.target.textContent === "Not read" && !isFormOpen) {
    let btn1 = e.target;
    btn1.textContent = "Read";
    btn1.style.backgroundColor = "lightgreen";
  }
}