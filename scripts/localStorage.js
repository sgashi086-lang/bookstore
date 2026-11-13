// localStorage.clear(); 

function saveToLocalStorage() {
    localStorage.setItem("books", JSON.stringify(books));
}

function getFromLocalStorage() {
    let savedBooks = JSON.parse(localStorage.getItem("books"));
    if (savedBooks !== null) {
        books = savedBooks;
    }
}