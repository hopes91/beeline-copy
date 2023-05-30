// hide the top yellow bar
const productButton = document.querySelector('.relevant-product_top button');

const closeRelevantProduct = () => {
    const relevantProduct = document.querySelector('.relevant-product_top');
    
    relevantProduct.classList.add('height-zero');
};

// toggle search bar's hidden content
const searchBar = document.getElementById('search-bar');
const hiddenButtons = document.querySelector('.hidden-buttons');
const searchInfo = document.querySelector('.search-info-wrapper');

const showSearchInfo = () => {
    hiddenButtons.style.display = 'flex';
    searchInfo.style.display = 'block';
};

const closeButton = document.getElementById('close-search');

const closeSearchInfo = () => {
    hiddenButtons.style.display = 'none';
    searchInfo.style.display = 'none';
};

closeButton.addEventListener('click', closeSearchInfo);
searchBar.addEventListener('focus', showSearchInfo);
productButton.addEventListener('click', closeRelevantProduct);