let contentRef = document.getElementById('content');

// INIT FUNCTION
function init() {
    getFromLocalStorage();
    contentRef.innerHTML = '';
    for (let i = 0; i < books.length; i++) {
        const element = books[i];
        contentRef.innerHTML += getBookTemplate(element, i);
    }
    saveToLocalStorage();
}

// RENDER ALL TEMPLATES FUNCTION
function getBookTemplate(book, index) {
    return `
        <div class="book_card">
            <div class="book_header"><h2>${book.name}</h2></div>
            <hr>
            <div class="book_cover"><img src="${book.image}" alt="Buchcover von ${book.name}" onclick="openSummary(${index})"></div>
            ${getStatsTemplate(book, index)}
            ${getInfoTemplate(book)}
            ${getCommentsTemplate(book.comments)}
            ${getInputTemplate(index)}
            <div id="summary_${index}" class="summary_overlay d_none" style="background-image: linear-gradient(rgba(14, 44, 54, 0.64), rgba(14, 44, 54, 0.92)), url('${book.image}')">${getSummaryTemplate(book, index)}</div>
        </div>
    `;
}

// BOOK SUMMARY TEMPLATE
function getSummaryTemplate(book, index) {
    return `
        <div class="book_summary">
            <h3>Zusammenfassung</h3>
            <p>${book.description}</p>
            <button type="button" onclick="closeSummary(${index})">schliessen</button>
        </div>
    `;
}

// OPEN SUMMARY FUNCTION
function openSummary(index) {
    closeAllSummaries();
    document.getElementById(`summary_${index}`).classList.remove('d_none');
}

// CLOSE ALL SUMMARIES
function closeAllSummaries() {
    for (let i = 0; i < books.length; i++) {
        document.getElementById(`summary_${i}`).classList.add('d_none');
    }
}

// CLOSE SUMMARY FUNCTION
function closeSummary(index) {
    document.getElementById(`summary_${index}`).classList.add('d_none');
}

// CLOSE SUMMARY ON ESC OR OUTSIDE CLICK
['keydown', 'click'].forEach(type => {
    document.addEventListener(type, (event) => {
        if (event.key === 'Escape' || (type === 'click' && !event.target.closest('.summary_overlay, .book_cover img'))) {
            closeAllSummaries();
        }
    });
});

// BOOK STATS TEMPLATE
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

// LIKE FUNCTION
function toggleLike(index) {
    if (books[index].liked == false) {
        books[index].liked = true;
        books[index].likes++;
    } else {
        books[index].liked = false;
        books[index].likes--;
    }
    saveToLocalStorage();
    init();
}

// BOOK INFOS TEMPLATE
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

// BOOK COMMENTS FUNCTION
function getCommentsTemplate(comments) {
    let commentsHtml = `<hr><h3>Kommentare:</h3><div class="book_comments">`;
    for (let i = 0; i < comments.length; i++) {
        const currentComment = comments[i];
        commentsHtml += `<p><strong>${currentComment.name}</strong>${currentComment.comment}</p>`;
    }
    return commentsHtml + `</div>`;
}

// INPUT TEMPLATE
function getInputTemplate(index) {
    return `
        <div class="comments_input">
            <input aria-label="Kommentar schreiben" id="input_${index}" type="text" name="comment" placeholder="Schreibe dein Kommentar">
            <button aria-label="Kommentar abgeben" type="submit" onclick="addComment(${index})">
                <img src="./assets/icons/sendIcon2.png" alt="Senden">
            </button>
        </div>   
    `;
}

// ADD COMMENT FUNCTION
function addComment(index) {
    let inputRef = document.getElementById(`input_${index}`);
    let commentInput = inputRef.value.trim();
    if (inputRef.value !== "") {
        books[index].comments.unshift(
            {
                "name": "Du",
                "comment": commentInput
            }
        );
    }
    inputRef.value = "";
    saveToLocalStorage();
    init();
}
