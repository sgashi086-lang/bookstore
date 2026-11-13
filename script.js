let contentRef = document.getElementById('content');

function init() {
    contentRef.innerHTML = '';
    for (let i = 0; i < books.length; i++) {
        const element = books[i];
        contentRef.innerHTML += getBookTemplate(element, i);
    }
}

function getBookTemplate(book, index) {
    return `
        <div class="book_card">
            <div class="book_header"><h2>${book.name}</h2></div>
            <hr>
            <div class="book_cover"><img src=${book.image} alt="Buchcover von ${book.name}"></div>
            ${getStatsTemplate(book, index)}
            ${getInfoTemplate(book)}
            ${getCommentsTemplate(book.comments)}
            ${getInputTemplate(index)}
        </div>
    `;
}

// BOOK STATS
function getStatsTemplate(book, index) {
    let heartClass = book.liked ? 'liked-heart' : '';
    return `
    <hr>
        <div class="book_stats">
            <span>${book.price} €</span>
            <span>${book.likes}</span>
            <button aria-label="Buch liken" type="button" class="like_btn" onclick="toggleLike(${index})">
                <span aria-hidden="true" class="material-symbols-outlined ${heartClass}">favorite</span>
            </button>
        </div>   
    `;
}

function toggleLike(index) {
    if (books[index].liked == false) {
        books[index].liked = true;
        books[index].likes++;
    } else {
        books[index].liked = false;
        books[index].likes--;
    }

    init();
}

// BOOK INFOS
function getInfoTemplate(book) {
    return `
        <div class="book_infos">
            <table>
                <tr><th>Author:</th><td>${book.author}</td></tr>
                <tr><th>Erscheinungsjahr:</th><td>${book.publishedYear}</td></tr>
                <tr><th>Genre:</th><td>${book.genre}</td></tr>
            </table>
        </div>   
    `;
}

// BOOK COMMENTS
function getCommentsTemplate(comments) {
    let commentsHtml = `<hr><h3>Kommentare:</h3><div class="book_comments">`;
    for (let i = 0; i < comments.length; i++) {
        const currentComment = comments[i];
        commentsHtml += `<p><strong>${currentComment.name}</strong>${currentComment.comment}</p>`;
    }
    return commentsHtml + `</div>`;
}

function getInputTemplate(index) {
    return `
        <div class="comments_input">
            <input aria-label="Kommentar schreiben" id="input_${index}" type="text" name="comment" placeholder="Schreibe dein Kommentar">
            <button ariaria-label="Kommentar abgeben" type="submit" onclick="addComment(${index})">
                <img src="./assets/icons/sendIcon2.png" alt="Senden">
            </button>
        </div>   
    `;
}

function addComment(index) {
    let inputRef = document.getElementById(`input_${index}`);
    let commentInput = inputRef.value;
    if (inputRef.value !== "") {
        books[index].comments.unshift(
            {
                "name": "Du",
                "comment": commentInput
            }
        );
    }
    inputRef.value = "";
    init();
}
