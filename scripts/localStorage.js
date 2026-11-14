// localStorage.clear(); 

// SAFE TO LOCALSTORAGE
function saveToLocalStorage() {
    localStorage.setItem("books", JSON.stringify(books));
}

// GET FROM LOCALSTORAGE
function getFromLocalStorage() {
    let savedBooks = JSON.parse(localStorage.getItem("books"));
    if (savedBooks !== null) {
        books = savedBooks;
    }
}
