// RENDER ALL TEMPLATES FUNCTION
function getBookTemplate(book, index, heartClass) {
    return `
        <div id="book_card_${index}" class="book_card">
            <div class="book_header"><h2>${book.name}</h2></div>
            <hr>
            <div class="book_cover"><button type="button" aria-label="Zusammenfassung lesen" onclick="openSummary(${index})"><img src="${book.image}" alt="Buchcover von ${book.name}"></button></div>
            ${getStatsTemplate(book, index, heartClass)}
            ${getInfoTemplate(book)}
            ${getCommentsTemplate(book.comments, index)}
            ${getInputTemplate(index)}
            <div id="summary_${index}" class="summary_overlay d_none" tabindex="-1">${getSummaryTemplate(book, index)}</div>
        </div>
    `;
}

// BOOK SUMMARY TEMPLATE
function getSummaryTemplate(book, index) {
    return `
        <div class="book_summary">
            <div class="summaryHeader">
                <h3>Zusammenfassung</h3>
            </div>
            <p>${book.description}</p>
            <div class="closeSummaryBtn">
                <button type="button" onclick="closeSummary(${index})">schließen</button>
            </div>
        </div>
    `;
}

// BOOK STATS TEMPLATE
function getStatsTemplate(book, index, heartClass) {
    return `
    <hr>
        <div class="book_stats">
            <span>${book.price} €</span>
            <span id="likes_count_${index}">${book.likes}</span>
            <button aria-label="Buch liken" type="button" class="like_btn" onclick="toggleLike(${index})">
                <svg id="heart_icon_${index}" class="heart-icon ${heartClass}" viewBox="0 0 24 24" width="24" height="24">
                    <path d="M12 21.35l-1.45-1.32C5.4 15.36 2 12.28 2 8.5 2 5.42 4.42 3 7.5 3c1.74 0 3.41.81 4.5 2.09C13.09 3.81 14.76 3 16.5 3 19.58 3 22 5.42 22 8.5c0 3.78-3.4 6.86-8.55 11.54L12 21.35z"/>
                </svg>
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

// INPUT TEMPLATE
function getInputTemplate(index) {
    return `
        <div class="comments_input">
            <input aria-label="Kommentar schreiben" id="input_${index}" type="text" name="comment" placeholder="Schreibe dein Kommentar">
            <button id="send_btn_${index}" class="comment_btn" aria-label="Kommentar abgeben" type="button" onclick="handleSendBtn(${index})">
                <img src="./assets/icons/sendWhite.png" alt="Senden">
            </button>
        </div>   
    `;
}
