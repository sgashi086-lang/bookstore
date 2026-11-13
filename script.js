let contentRef = document.getElementById('content');
const scrollBtn = document.getElementById('srollToTop');

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

// OPEN SUMMARY FUNCTION
function openSummary(index) {
    closeAllSummaries();
    const summary = document.getElementById(`summary_${index}`);
    summary.classList.remove('d_none');
    summary.scrollTop = 0;
    summary.focus();
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
        if (event.key === 'Escape' || (type === 'click' && !event.target.closest('.summary_overlay, .book_cover button'))) {
            closeAllSummaries();
        }
    });
});

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

// ADD COMMENT FUNCTION
function addComment(index) {
    let inputRef = document.getElementById(`input_${index}`);
    let commentInput = inputRef.value.trim();
    if (inputRef.value !== "") {
        books[index].comments.unshift(
            {"name": "Du", "comment": commentInput}
        );
    }
    inputRef.value = "";
    saveToLocalStorage();
    init();
}

// CHECK SCROLL POSITION
function checkScrollPos() {
    if (!scrollBtn) return;
    if (window.scrollY > 300) {
        scrollBtn.classList.add("visible");
    } else {
        scrollBtn.classList.remove("visible");
    }
}

window.addEventListener("scroll", checkScrollPos);

if (scrollBtn) {
    scrollBtn.addEventListener("click", () => {
        window.scrollTo({
            top: 0,
            behavior: "smooth"
        });
    });
}
