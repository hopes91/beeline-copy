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

    removeHighlightCatalogNavbarButton();
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

// login popup
const loginWrapper = document.querySelector('.login-wrapper');
const loginButton = document.getElementById('login-button');

const showLoginPopup = () => {
    loginWrapper.style.display = 'flex';
};

const hideLoginPopup = event => {
    if (event.target.classList.contains('close')) {
        loginWrapper.style.display = 'none';

        setInitialLoginOption();
    }
};

const loginOptions = document.querySelectorAll('.login-options-wrapper button');

const setInitialLoginOption = () => {
    loginOptions[0].className = 'chosen-option';
    loginOptions[1].className = 'login-option';
    loginOptions[2].className = 'login-option';

    setInitialLoginForm();
};

const setInitialLoginForm = () => {
    const loginForms = document.querySelectorAll('.login-forms-wrapper form');
    loginForms[0].className = 'chosen-form';
    loginForms[1].className = 'login-form';
    loginForms[2].className = 'login-form';
};

const changeLoginOption = event => {
    loginOptions.forEach(option => option.className = 'login-option');

    let loginOption = event.target.closest('button');

    if (loginOption.className === 'login-option') {
        loginOption.className = 'chosen-option';

        showChosenLoginForm(loginOption.id);
    }
};

const showChosenLoginForm = chosenLoginId => {
    const loginForms = document.querySelectorAll('.login-forms-wrapper form');
    loginForms.forEach(form => form.className = 'login-form');

    if (chosenLoginId.includes('id')) {
        loginForms[0].className = 'chosen-form';
    } else if (chosenLoginId.includes('sms')) {
        loginForms[1].className = 'chosen-form';
    } else {
        loginForms[2].className = 'chosen-form';
    }

    activateLoginFormInput();
};

const setInitialLoginForm = () => {
    const loginForms = document.querySelectorAll('.login-forms-wrapper form');
    loginForms[0].className = 'chosen-form';
    loginForms[1].className = 'login-form';
    loginForms[2].className = 'login-form';
};

const loginFormInputs = document.querySelectorAll('.login-forms-wrapper input');
let phoneLoginValue = '+7 ___ ___-__-__';
let loginValue = '';
let passwordValue = '';

const activateLoginFormInput = () => {
    loginFormInputs.forEach(input => {
        if (input.placeholder.includes('+7')) {
            input.value = loginValue;
            input.focus();

            setCaretPosition(input, findCaretPosition());
        } else if (input.placeholder.includes('Логин')) {
            input.focus();
        }
    });
};

const setCaretPosition = (input, position) => {
    input.setSelectionRange(position, position);
};

const findCaretPosition = inputType => {
    if (inputType === 'phone') {
        return phoneLoginValue.search(/_/);
    } else if (inputType === 'login') {
        return loginValue.length;
    } else if (inputType === 'password') {
        return passwordValue.length;
    }
};

const deactivateLoginFormInput = () => {
    loginFormInputs.forEach(input => {
        if (input.value === '+7 ___ ___-__-__') {
            input.value = '';
            input.blur();

            setCaretPosition(input, 3);
        } else if (input.placeholder.includes('Логин')) {
            input.blur();
        }
    });
};

const setLoginValue = event => {
    let input = event.target;

    if ((input.id.includes ? 'id' : 'sms') && /\d/.test(event.data)) {
        for (let i = 3; i < loginValue.length; i++) {
            if (/_/.test(loginValue[i])) {
                loginValue = loginValue.replace(loginValue[i], event.data);
                input.value = loginValue;

                setCaretPosition(input, i+1);
                break;
            } else if (i == loginValue.length - 1) {
                input.value = loginValue;
            }
        }

        activateSubmitLoginButton(input);
    }
};

const eyeSVGs = document.querySelectorAll('.svg-wrapper.eye svg');

const toggleEye = event => {
    let clickedEye = event.target.closest('svg');
    const svgClosed = document.querySelector('.svg-wrapper.eye svg.closed');
    const svgOpened = document.querySelector('.svg-wrapper.eye svg.opened');

    if (clickedEye.classList.value === 'closed') {
        svgClosed.style.display = 'none';
        svgOpened.style.display = 'block';
    } else {
        svgOpened.style.display = 'none';
        svgClosed.style.display = 'block';
    }
};

const activateSubmitLoginButton = input => {
    const submitButtons = document.querySelectorAll('.login-forms-wrapper form button');

    if (input.placeholder.includes('+7')) {
        submitButtons[0].removeAttribute('disabled');
        submitButtons[1].removeAttribute('disabled');
    } else if (input.placeholder.includes('Логин')) {
        submitButtons[2].removeAttribute('disabled');
    }
};

// close popups or additional info blocks
const closeOnEsc = event => {
    if (event.keyCode === 27) {
        const popups = document.querySelectorAll('.popup');
        popups.forEach(popup => popup.style.display = 'none');

        hideCatalogInfo();
        hideSearchInfo();
        setInitialLoginOption();
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

loginButton.addEventListener('click', showLoginPopup);
loginWrapper.addEventListener('click', hideLoginPopup);
loginOptions.forEach(option => option.addEventListener('click', changeLoginOption));
loginFormInputs.forEach(input => input.addEventListener('focus', activateLoginFormInput));
loginFormInputs.forEach(input => input.addEventListener('click', activateLoginFormInput));
loginFormInputs.forEach(input => input.addEventListener('blur', deactivateLoginFormInput));
loginFormInputs.forEach(input => input.addEventListener('input', setLoginValue));
eyeSVGs.forEach(svg => svg.addEventListener('click', toggleEye));

window.addEventListener('keydown', closeOnEsc);