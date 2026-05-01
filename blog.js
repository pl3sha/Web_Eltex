const STORAGE_KEY = 'blog-articles';
const DEFAULT_IMAGE = 'image/nature.jpg';
const INITIAL_LOAD_DELAY_MS = 1000;
const SUBMIT_DELAY_MS = 800;

const articlesGrid = document.getElementById('articles-grid');
const emptyState = document.getElementById('empty-state');
const loader = document.getElementById('loader');
const pagination = document.getElementById('pagination');
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

let articles = [];
let isBusy = false;

function loadArticles() {
    try {
        const raw = localStorage.getItem(STORAGE_KEY);
        if (!raw) return [];
        const parsed = JSON.parse(raw);
        return Array.isArray(parsed) ? parsed : [];
    } catch {
        return [];
    }
}

function saveArticles() {
    localStorage.setItem(STORAGE_KEY, JSON.stringify(articles));
}

function generateId() {
    if (typeof crypto !== 'undefined' && crypto.randomUUID) {
        return crypto.randomUUID();
    }
    return `${Date.now()}-${Math.random().toString(16).slice(2)}`;
}

function formatRuDate(isoDate) {
    const d = new Date(isoDate);
    return `${d.getDate()} ${monthsRu[d.getMonth()]} ${d.getFullYear()}`;
}

function createArticleElement(data) {
    const article = template.content.firstElementChild.cloneNode(true);
    article.dataset.id = data.id;

    article.querySelector('h3').textContent = data.title;
    article.querySelector('p').textContent = data.text;

    const timeEl = article.querySelector('time');
    if (timeEl) {
        timeEl.setAttribute('datetime', data.date);
        timeEl.textContent = formatRuDate(data.date);
    }

    const img = article.querySelector('img');
    if (img) {
        img.src = data.image || DEFAULT_IMAGE;
        img.alt = data.title;
    }

    const btn = document.createElement('button');
    btn.type = 'button';
    btn.className = 'btn-delete';
    btn.title = 'Удалить статью';
    btn.setAttribute('aria-label', 'Удалить статью');
    btn.textContent = '×';
    btn.addEventListener('click', () => removeArticle(data.id));
    article.prepend(btn);

    return article;
}

function render() {
    articlesGrid.replaceChildren();
    for (const data of articles) {
        articlesGrid.append(createArticleElement(data));
    }
    const isEmpty = articles.length === 0;
    articlesGrid.hidden = isEmpty;
    emptyState.hidden = !isEmpty;
    if (pagination) pagination.hidden = isEmpty;
}

function showLoader() {
    loader.hidden = false;
    articlesGrid.hidden = true;
    emptyState.hidden = true;
    if (pagination) pagination.hidden = true;
}

function hideLoader() {
    loader.hidden = true;
}

function setFormDisabled(disabled) {
    isBusy = disabled;
    for (const el of articleForm.elements) {
        el.disabled = disabled;
    }
    btnCreate.disabled = disabled;
}

function addArticle(data) {
    articles.unshift(data);
    saveArticles();
    render();
}

function removeArticle(id) {
    if (isBusy) return;
    articles = articles.filter((a) => a.id !== id);
    saveArticles();
    render();
}

function init() {
    showLoader();
    setFormDisabled(true);
    setTimeout(() => {
        articles = loadArticles();
        hideLoader();
        render();
        setFormDisabled(false);
    }, INITIAL_LOAD_DELAY_MS);
}

init();

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
    postCountEl.textContent = articles.length;
    statsDialog.showModal();
});

dialogClose.addEventListener('click', () => statsDialog.close());

statsDialog.addEventListener('click', (e) => {
    if (e.target === statsDialog) statsDialog.close();
});

const submitBtn = articleForm.querySelector('button[type="submit"]');

articleForm.addEventListener('submit', (e) => {
    e.preventDefault();
    if (isBusy) return;

    const title = titleInput.value.trim();
    const text = textInput.value.trim();
    if (!title || !text) return;

    const newArticle = {
        id: generateId(),
        title,
        text,
        date: new Date().toISOString().split('T')[0],
        image: DEFAULT_IMAGE
    };

    const originalLabel = submitBtn.textContent;
    submitBtn.textContent = 'Сохранение...';
    setFormDisabled(true);

    setTimeout(() => {
        addArticle(newArticle);
        articleForm.reset();
        formSection.classList.remove('visible');
        setFormDisabled(false);
        submitBtn.textContent = originalLabel;
    }, SUBMIT_DELAY_MS);
});
