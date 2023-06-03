// hide the top yellow bar
const productButton = document.querySelector('.relevant-product_top button');

const closeRelevantProduct = () => {
    const relevantProduct = document.querySelector('.relevant-product_top');
    
    relevantProduct.classList.add('height-zero');
};

// toggle search bar's hidden content
const searchBar = document.getElementById('search-bar');

const hideCatalogButton = () => {
    const catalogButton = document.querySelector('.catalog-button');

    catalogButton.style.display = 'none';

    showHiddenButtons();
};

const showHiddenButtons = () => {
    const hiddenButtons = document.querySelector('.hidden-buttons');

    hiddenButtons.style.display = 'flex';

    showSearchInfo();
};

const showSearchInfo = () => {
    const searchInfo = document.querySelector('.search-info-wrapper');

    searchInfo.style.display = 'block';
};

const closeButton = document.getElementById('close-search');

const hideSearchInfo = () => {
    const searchInfo = document.querySelector('.search-info-wrapper');

    searchInfo.style.display = 'none';

    hideHiddenButtons();
};

const hideHiddenButtons = () => {
    const hiddenButtons = document.querySelector('.hidden-buttons');

    hiddenButtons.style.display = 'none';

    showCatalogButton();
};

const showCatalogButton = () => {
    const catalogButton = document.querySelector('.catalog-button');

    catalogButton.style.display = 'inline-block';
};

productButton.addEventListener('click', closeRelevantProduct);
searchBar.addEventListener('focus', hideCatalogButton);
closeButton.addEventListener('click', hideSearchInfo);