// top yellow bar
const topBannerButton = document.querySelector('.banner_top .banner-close');

const hideTopBanner = () => {
    const topBanner = document.querySelector('.banner_top');
    
    topBanner.classList.add('height-zero');
};

// regions popup
const chosenRegionButton = document.querySelector('.chosen-region');
const regionsWrapper = document.querySelector('.regions-wrapper');

const showRegionsPopup = () => {
    regionsWrapper.style.display = 'block';
};

const hideRegionsPopup = event => {
    if (event.target.classList.contains('close')) {
        regionsWrapper.style.display = 'none';
    }
};

// catalog content
const catalogButton = document.querySelector('.catalog-button');

const toggleCatalogInfo = () => {
    const catalogInfo = document.querySelector('.catalog-info-wrapper');

    if (catalogInfo.style.display === 'block') {
        catalogInfo.style.display = 'none';

        hideCatalogBlocks();
        displayInitialCatalogBlock();
    } else {
        catalogInfo.style.display = 'block';
    }

    toggleCatalogButtonSVG(catalogInfo);
    changeCatalogBackColor(catalogInfo);
};

const hideCatalogInfo = () => {
    const catalogInfo = document.querySelector('.catalog-info-wrapper');

    catalogInfo.style.display = 'none';

    toggleCatalogButtonSVG(catalogInfo);
    changeCatalogBackColor(catalogInfo);
    hideCatalogBlocks();
    displayInitialCatalogBlock();
};

const displayInitialCatalogBlock = () => {
    const initialBlock = document.querySelector('.content-block.initial');

    initialBlock.style.display = 'block';
};

const toggleCatalogButtonSVG = catalogInfo => {
    const svgClosed = document.querySelector('.catalog-button svg.closed');
    const svgOpened = document.querySelector('.catalog-button svg.opened');

    if (catalogInfo.style.display === 'block') {
        svgClosed.style.opacity = '0';
        svgOpened.style.opacity = '1';
    } else {
        svgClosed.style.opacity = '1';
        svgOpened.style.opacity = '0';
    }
};

const changeCatalogBackColor = catalogInfo => {
    const catalogBackground = document.querySelector('.catalog-info-background');

    if (catalogInfo.style.display === 'block') {
        catalogBackground.style.display = 'block';
        catalogBackground.style.opacity = '0.3';
    } else {
        catalogBackground.style.display = 'none';
        catalogBackground.style.opacity = '0';
    }
};

const catalogButtons = document.querySelectorAll('.small-navbar button');

const addHighlightCatalogNavbarButton = event => {
    removeHighlightCatalogNavbarButton();

    event.currentTarget.classList.add('chosen-section');

    showCatalogBlock(event.currentTarget.innerText);
};

const removeHighlightCatalogNavbarButton = () => {
    catalogButtons.forEach(button => button.classList.remove('chosen-section'));
};

const showCatalogBlock = currentButton => {
    hideCatalogBlocks();

    const catalogBlocks = document.querySelectorAll('.big-navbar .content-block');

    for (let block of catalogBlocks) {
        if (block.childNodes[1].innerText === currentButton) {
            block.style.display = 'block';
            break;
        }
    }
    console.log(catalogBlocks);
};

const hideCatalogBlocks = () => {
    const catalogBlocks = document.querySelectorAll('.big-navbar .content-block');

    catalogBlocks.forEach(block => block.style.display = 'none');
};

// search bar content
const searchBar = document.getElementById('search-bar');

const hideButtonsToTheRight = () => {
    const buttonsToTheRight = document.querySelector('.bar_bottom .right');

    buttonsToTheRight.style.display = 'none';

    hideCatalogButton();
};

const hideCatalogButton = () => {
    catalogButton.style.display = 'none';

    hideCatalogInfo();
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

const closeSearchBarButton = document.getElementById('close-search');

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
    catalogButton.style.display = 'inline-block';

    showButtonsToTheRight();
};

const showButtonsToTheRight = () => {
    const buttonsToTheRight = document.querySelector('.bar_bottom .right');

    buttonsToTheRight.style.display = 'flex';
};

// close popups or additional info blocks
const closeOnEsc = event => {
    if (event.keyCode === 27) {
        const popups = document.querySelectorAll('.popup');

        popups.forEach(popup => popup.style.display = 'none');

        hideSearchInfo();
        hideCatalogInfo();
    }
};

topBannerButton.addEventListener('click', hideTopBanner);

chosenRegionButton.addEventListener('click', showRegionsPopup);
regionsWrapper.addEventListener('click', hideRegionsPopup);

catalogButton.addEventListener('click', toggleCatalogInfo);
catalogButtons.forEach(button => button.addEventListener('mouseover', addHighlightCatalogNavbarButton));

searchBar.addEventListener('focus', hideButtonsToTheRight);
searchBar.addEventListener('click', hideButtonsToTheRight);
closeSearchBarButton.addEventListener('click', hideSearchInfo);

window.addEventListener('keydown', closeOnEsc);