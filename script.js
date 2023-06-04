// hide the top yellow bar
const productButton = document.querySelector('.relevant-product_top button');

const closeRelevantProduct = () => {
    const relevantProduct = document.querySelector('.relevant-product_top');
    
    relevantProduct.classList.add('height-zero');
};

// toggle regions popup
const chosenRegionButton = document.querySelector('.chosen-region button');
const regionsPopupWrapper = document.querySelector('.regions-popup-wrapper');

const showRegionsPopup = () => {
    regionsPopupWrapper.style.display = 'block';
};

const hideRegionsPopup = event => {
    if (event.target.classList.contains('close')) {
        regionsPopupWrapper.style.display = 'none';
    }
};

// toggle search bar's hidden content
const searchBar = document.getElementById('search-bar');

const hideButtonsToTheRight = () => {
    const buttonsToTheRight = document.querySelector('.bar_bottom .right');

    buttonsToTheRight.style.display = 'none';

    hideCatalogButton();
};

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

    showButtonsToTheRight();
};

const showButtonsToTheRight = () => {
    const buttonsToTheRight = document.querySelector('.bar_bottom .right');

    buttonsToTheRight.style.display = 'flex';
};

productButton.addEventListener('click', closeRelevantProduct);
chosenRegionButton.addEventListener('click', showRegionsPopup);
regionsPopupWrapper.addEventListener('click', hideRegionsPopup);
searchBar.addEventListener('focus', hideButtonsToTheRight);
closeButton.addEventListener('click', hideSearchInfo);