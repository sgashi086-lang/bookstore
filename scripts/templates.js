// RENDER ALL TEMPLATES FUNCTION
function getBookTemplate(book, index) {
    return `
        <div class="book_card">
            <div class="book_header"><h2>${book.name}</h2></div>
            <hr>
            <div class="book_cover"><button type="button" aria-label="Zusammenfassung lesen" onclick="openSummary(${index})"><img src="${book.image}" alt="Buchcover von ${book.name}"></button></div>
            ${getStatsTemplate(book, index)}
            ${getInfoTemplate(book)}
            ${getCommentsTemplate(book.comments)}
            ${getInputTemplate(index)}
            <div id="summary_${index}" class="summary_overlay d_none" tabindex="-1" style="background-image: linear-gradient(rgba(14, 44, 54, 0.85), rgba(14, 44, 54, 0.86)), url('${book.image}')">${getSummaryTemplate(book, index)}</div>
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


