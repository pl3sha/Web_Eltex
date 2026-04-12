const articlesGrid = document.querySelector('.articles-grid');
const formSection = document.getElementById('article-form-section');
const articleForm = document.getElementById('article-form');
const btnCreate = document.getElementById('btn-create');
const btnCancel = document.getElementById('btn-cancel');
const btnStats = document.getElementById('btn-stats');
const statsDialog = document.getElementById('stats-dialog');
const dialogClose = document.getElementById('dialog-close');
const postCountEl = document.getElementById('post-count');
const template = document.getElementById('article-template');

let postCount = articlesGrid.querySelectorAll('article').length;

// показать/скрыть форму
btnCreate.addEventListener('click', () => {
    formSection.classList.add('visible');
    formSection.scrollIntoView({ behavior: 'smooth', block: 'start' });
});

btnCancel.addEventListener('click', () => {
    formSection.classList.remove('visible');
});

// диалог статистики
btnStats.addEventListener('click', () => {
    postCountEl.textContent = postCount;
    statsDialog.showModal();
});

dialogClose.addEventListener('click', () => {
    statsDialog.close();
});

statsDialog.addEventListener('click', (e) => {
    if (e.target === statsDialog) {
        statsDialog.close();
    }
});

// добавление поста с mock-данными
articleForm.addEventListener('submit', (e) => {
    e.preventDefault();
    const clone = template.content.cloneNode(true);
    articlesGrid.prepend(clone);
    postCount++;
    formSection.classList.remove('visible');
    articleForm.reset();
});
