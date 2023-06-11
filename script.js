// hide the top yellow bar
const topBannerButton = document.querySelector('.banner_top .banner-close');

const closeTopBanner = () => {
    const topBanner = document.querySelector('.banner_top');
    
    topBanner.classList.add('height-zero');
};

// toggle regions popup
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

// toggle catalog info
const catalogButton = document.querySelector('.catalog-button');

const toggleCatalogInfo = () => {
    const catalogInfo = document.querySelector('.catalog-info-wrapper');

    if (catalogInfo.style.display === 'block') {
        catalogInfo.style.display = 'none';
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
};

const toggleCatalogButtonSVG = catalogInfo => {
    const svgClosed = document.querySelector('.catalog-button .button-closed');
    const svgOpened = document.querySelector('.catalog-button .button-opened');

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

// highlight catalog nav links
const catalogSectionLinks = document.querySelectorAll('.small-navbar button');

const highlightSectionLink = event => {
    catalogSectionLinks.forEach(link => link.classList.remove('chosen-section'));

    event.currentTarget.classList.add('chosen-section');
};

// toggle search bar's hidden content
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

topBannerButton.addEventListener('click', closeTopBanner);

chosenRegionButton.addEventListener('click', showRegionsPopup);
regionsWrapper.addEventListener('click', hideRegionsPopup);

catalogButton.addEventListener('click', toggleCatalogInfo);
catalogSectionLinks.forEach(link => link.addEventListener('mouseover', highlightSectionLink));

searchBar.addEventListener('focus', hideButtonsToTheRight);
searchBar.addEventListener('click', hideButtonsToTheRight);
closeButton.addEventListener('click', hideSearchInfo);

window.addEventListener('keydown', closeOnEsc);