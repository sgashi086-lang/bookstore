const CONTENT_REF = document.getElementById('content');
const SCROLL_BTN = document.getElementById('scrollToTop');

// INIT FUNCTION
function init() {
    getFromLocalStorage();
    renderBooks();
    handleScrollToTop();
    closeSummaryByEsc();
    saveToLocalStorage();
}

function renderBooks() {
    CONTENT_REF.innerHTML = '';
    for (let i = 0; i < books.length; i++) {
        const ELEMENT = books[i];
        const HEART_CLASS = ELEMENT.liked ? 'liked-heart' : '';
        CONTENT_REF.innerHTML += getBookTemplate(ELEMENT, i, HEART_CLASS);
    }
}

// OPEN SUMMARY FUNCTION
function openSummary(index) {
    closeAllSummaries();
    const SUMMARY = document.getElementById(`summary_${index}`);
    const BOOK_CARD = document.getElementById(`book_card_${index}`);
    SUMMARY.classList.remove('d_none');
    SUMMARY.scrollTop = 0;
    SUMMARY.focus({ preventScroll: true });
    if (BOOK_CARD) {
        BOOK_CARD.scrollIntoView({
            behavior: 'smooth',
            block: 'center'
        });
    }
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

// CLOSE BY ESCAPE-KEY
function closeSummaryByEsc() {
    ['keydown', 'click'].forEach(type => {
        document.addEventListener(type, (event) => {
            if (event.key === 'Escape' || (type === 'click' && !event.target.closest('.summary_overlay, .book_cover button'))) {
                closeAllSummaries();
            }
        });
    });
}

// LIKE FUNCTION
function toggleLike(index) {
    if (books[index].liked === false) {
        books[index].liked = true;
        books[index].likes++;
    } else {
        books[index].liked = false;
        books[index].likes--;
    }
    document.getElementById(`heart_icon_${index}`).classList.toggle('liked-heart');
    document.getElementById(`likes_count_${index}`).innerText = books[index].likes;
    saveToLocalStorage();
}

// BOOK COMMENTS FUNCTION
function getCommentsTemplate(comments, index) {
    let commentsHtml = `<hr><h3>Kommentare:</h3><div id="comments_list_${index}" class="book_comments">`;
    for (let i = 0; i < comments.length; i++) {
        const CURRENT_COMMENT = comments[i];
        commentsHtml += `<p><strong>${CURRENT_COMMENT.name}</strong>${CURRENT_COMMENT.comment}</p>`;
    }
    return commentsHtml + '</div>';
}

// ADD COMMENT FUNCTION
function addComment(index) {
    const INPUT_REF = document.getElementById(`input_${index}`);
    const COMMENT_INPUT = INPUT_REF.value.trim();
    if (COMMENT_INPUT !== '') {
        books[index].comments.unshift({ 'name': 'Marco', 'comment': COMMENT_INPUT });
        renderComments(index);
        saveToLocalStorage();
    }
    INPUT_REF.value = '';
}

// RENDER COMMENTS
function renderComments(index) {
    const COMMENTS_LIST_REF = document.getElementById(`comments_list_${index}`);
    COMMENTS_LIST_REF.innerHTML = '';
    for (let i = 0; i < books[index].comments.length; i++) {
        const COMMENT = books[index].comments[i];
        COMMENTS_LIST_REF.innerHTML += `<p><strong>${COMMENT.name}</strong>${COMMENT.comment}</p>`;
    }
}

// HANDLE SEND BUTTON
function handleSendBtn(index) {
    const INPUT_REF = document.getElementById(`input_${index}`);
    const INPUT_BTN = document.getElementById(`send_btn_${index}`);
    if (!INPUT_REF || INPUT_REF.value.trim() === '') return;
    if (INPUT_BTN) INPUT_BTN.classList.add('animate');
    setTimeout(() => {
        addComment(index);
        if (INPUT_BTN) INPUT_BTN.classList.remove('animate');
    }, 500);
}

// CHECK SCROLL POSITION
function checkScrollPos() {
    if (!SCROLL_BTN) return;
    if (window.scrollY > 300) {
        SCROLL_BTN.classList.add('visible');
    } else {
        SCROLL_BTN.classList.remove('visible');
    }
}

// SCROLL TO TOP
function handleScrollToTop() {
    window.addEventListener('scroll', checkScrollPos);
    if (SCROLL_BTN) {
        SCROLL_BTN.addEventListener('click', () => {
            window.scrollTo({
                top: 0,
                behavior: 'smooth'
            });
        });
    }
}
