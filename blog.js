const articlesGrid = document.querySelector('.articles-grid');
const featuredArticle = document.querySelector('article.featured');
const formSection = document.getElementById('article-form-section');
const articleForm = document.getElementById('article-form');
const titleInput = document.getElementById('article-title');
const textInput = document.getElementById('article-text');
const btnCreate = document.getElementById('btn-create');
const btnCancel = document.getElementById('btn-cancel');
const btnStats = document.getElementById('btn-stats');
const statsDialog = document.getElementById('stats-dialog');
const dialogClose = document.getElementById('dialog-close');
const postCountEl = document.getElementById('post-count');
const template = document.getElementById('article-template');

const monthsRu = [
    'января', 'февраля', 'марта', 'апреля', 'мая', 'июня',
    'июля', 'августа', 'сентября', 'октября', 'ноября', 'декабря'
];

let postCount = articlesGrid.querySelectorAll('article').length
    + (featuredArticle ? 1 : 0);

function formatRuDate(date) {
    return `${date.getDate()} ${monthsRu[date.getMonth()]} ${date.getFullYear()}`;
}

function attachDeleteButton(article) {
    if (article.querySelector(':scope > .btn-delete')) return;

    const btn = document.createElement('button');
    btn.type = 'button';
    btn.className = 'btn-delete';
    btn.title = 'Удалить статью';
    btn.setAttribute('aria-label', 'Удалить статью');
    btn.textContent = '×';

    btn.addEventListener('click', (e) => {
        e.stopPropagation();
        article.remove();
        postCount = Math.max(0, postCount - 1);
    });

    article.prepend(btn);
}

document.querySelectorAll('main article').forEach(attachDeleteButton);

btnCreate.addEventListener('click', () => {
    formSection.classList.add('visible');
    formSection.scrollIntoView({ behavior: 'smooth', block: 'start' });
    titleInput.focus();
});

btnCancel.addEventListener('click', () => {
    articleForm.reset();
    formSection.classList.remove('visible');
});

btnStats.addEventListener('click', () => {
    postCountEl.textContent = postCount;
    statsDialog.showModal();
});

dialogClose.addEventListener('click', () => statsDialog.close());

statsDialog.addEventListener('click', (e) => {
    if (e.target === statsDialog) statsDialog.close();
});

articleForm.addEventListener('submit', (e) => {
    e.preventDefault();

    const title = titleInput.value.trim();
    const text = textInput.value.trim();
    if (!title || !text) return;

    const article = template.content.firstElementChild.cloneNode(true);

    article.querySelector('h3').textContent = title;
    article.querySelector('p').textContent = text;

    const now = new Date();
    const timeEl = article.querySelector('time');
    if (timeEl) {
        timeEl.setAttribute('datetime', now.toISOString().split('T')[0]);
        timeEl.textContent = formatRuDate(now);
    }

    const img = article.querySelector('img');
    if (img) img.alt = title;

    attachDeleteButton(article);
    articlesGrid.prepend(article);
    postCount++;

    articleForm.reset();
    formSection.classList.remove('visible');
});
