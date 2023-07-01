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

const toggleCatalog = additionalInfo => {
    const catalogWrapper = document.querySelector('.catalog-wrapper');

    if (catalogWrapper.style.display === 'block' || additionalInfo === 'close') {
        catalogWrapper.style.display = 'none';

        hideCatalogBlocks();
        displayInitialCatalogBlock();
    } else {
        catalogWrapper.style.display = 'block';
    }

    toggleCatalogButtonSVG(catalogWrapper);
    toggleCatalogBackground(catalogWrapper);
};

const toggleCatalogButtonSVG = catalogWrapper => {
    const svgClosed = document.querySelector('.catalog-button svg.closed');
    const svgOpened = document.querySelector('.catalog-button svg.opened');

    if (catalogWrapper.style.display === 'block') {
        svgClosed.style.opacity = '0';
        svgOpened.style.opacity = '1';
    } else {
        svgClosed.style.opacity = '1';
        svgOpened.style.opacity = '0';
    }
};

const toggleCatalogBackground = catalogWrapper => {
    const catalogBackground = document.querySelector('.catalog-background');

    if (catalogWrapper.style.display === 'block') {
        catalogBackground.style.display = 'block';
        catalogBackground.style.opacity = '0.3';
    } else {
        catalogBackground.style.display = 'none';
        catalogBackground.style.opacity = '0';
    }
};

const displayInitialCatalogBlock = () => {
    const initialBlock = document.querySelector('.content-block.initial');
    initialBlock.style.display = 'block';

    catalogNavButtonOff();
};

const catalogNavButtons = document.querySelectorAll('.small-navbar button');

const catalogNavButtonOff = () => {
    catalogNavButtons.forEach(button => button.classList.remove('chosen-section'));
};

const catalogNavButtonOn = event => {
    catalogNavButtonOff();

    event.currentTarget.classList.add('chosen-section');

    showCatalogBlock(event.currentTarget.innerText);
};

const showCatalogBlock = currentButton => {
    hideCatalogBlocks();

    const catalogBlocks = document.querySelectorAll('.big-navbar .content-block');

    for (let block of catalogBlocks) {
        if (currentButton === block.childNodes[1].innerText) {
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

const hideCatalogButton = () => {
    catalogButton.style.display = 'none';

    toggleCatalog('close');
    hideButtonsToTheRight();
};

const hideButtonsToTheRight = () => {
    const buttonsToTheRight = document.querySelector('.bar_bottom .right');
    buttonsToTheRight.style.display = 'none';

    showHiddenButtons();
};

const showHiddenButtons = () => {
    const hiddenButtons = document.querySelector('.hidden-buttons');
    hiddenButtons.style.display = 'flex';

    showSearchInfo();
};

const showSearchInfo = () => {
    const searchInfo = document.querySelector('.search-wrapper');
    searchInfo.style.display = 'block';
};

const closeSearchBarButton = document.getElementById('close-search');

const hideSearchInfo = () => {
    const searchInfo = document.querySelector('.search-wrapper');
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

const loginOptions = document.querySelectorAll('.login-options button');

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

const showChosenLoginForm = chosenLoginID => {
    const loginForms = document.querySelectorAll('.login-forms-wrapper form');
    loginForms.forEach(form => form.className = 'login-form');

    if (chosenLoginID.includes('id')) {
        loginForms[0].className = 'chosen-form';
    } else if (chosenLoginID.includes('sms')) {
        loginForms[1].className = 'chosen-form';
    } else {
        loginForms[2].className = 'chosen-form';
    }

    autoActivateLoginFormInput();
};

const loginFormInputs = document.querySelectorAll('.login-forms-wrapper input');
let phoneLoginValue = '+7 ___ ___-__-__';
let loginValue = '';
let passwordValue = '';

const autoActivateLoginFormInput = () => {
    const firstLoginFormInputs = document.querySelectorAll('.login-forms-wrapper input.first')

    firstLoginFormInputs.forEach((input, index) => {
        if (index < 2) {
            input.value = phoneLoginValue;

            input.focus();
            setCaretPosition(input, findCaretPosition('phone'));
        } else if (index == 2) {
            input.value = loginValue;

            input.focus();
            setCaretPosition(input, findCaretPosition('login'));
        }
    });
};

const activateLoginFormInput = event => {
    let input = event.target;
    let placeholder = event.target.placeholder;

    if (placeholder.includes('+7')) {
        input.value = phoneLoginValue;

        input.focus();
        setCaretPosition(input, findCaretPosition('phone'));
    } else if (placeholder.includes('Логин')) {
        input.value = loginValue;
    } else if (placeholder.includes('Пароль')) {
        input.value = passwordValue;
    }
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
        }
    });
};

const setLoginValue = event => {
    if (event.target.placeholder.includes('+7')) {
        if (event.inputType === 'deleteContentBackward') {
            deleteNumValues(event);
        }
        
        setNumValues(event);
    } else {
        setNumLetCharValues(event);
    }
    
    activateSubmitLoginButton(event.target);
};

const setNumValues = event => {
    let input = event.target;

    if (!/\d/.test(event.data)) return;

    for (let i = 3; i < phoneLoginValue.length; i++) {
        if (/_/.test(phoneLoginValue[i])) {
            phoneLoginValue = phoneLoginValue.replace(phoneLoginValue[i], event.data);
            input.value = phoneLoginValue;

            setCaretPosition(input, i+1);
            break;
        } else if (i == phoneLoginValue.length - 1) {
            input.value = phoneLoginValue;
        }
    }
};

const deleteNumValues = event => {
    let input = event.target;
    let reversedPhone = phoneLoginValue.split('').reverse().join('');

    for (let i = phoneLoginValue.length - 1; i >= 3; i--) {
        if (phoneLoginValue.startsWith('+7 _')) {
            input.value = phoneLoginValue;

            setCaretPosition(input, 3);
        } else if (/\d/.test(phoneLoginValue[i])) {
            reversedPhone = reversedPhone.replace(reversedPhone[(phoneLoginValue.length - 1) - i], '_');
            phoneLoginValue = reversedPhone.split('').reverse().join('');
            input.value = phoneLoginValue;

            setCaretPosition(input, i);
            break;
        }
    }
};

const setNumLetCharValues = event => {
    let input = event.target;

    if (input.placeholder.includes('Логин')) {
        loginValue = input.value;
    } else if (input.placeholder.includes('Пароль')) {
        passwordValue = input.value;
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

const manageKeyDown = event => {
    if (event.key === 'Escape') {
        closeOnEsc();
    }
};

const closeOnEsc = () => {
    const popups = document.querySelectorAll('.popup');
    popups.forEach(popup => popup.style.display = 'none');

    toggleCatalog('close');
    hideSearchInfo();
    setInitialLoginOption();
};

topBannerButton.addEventListener('click', hideTopBanner);

chosenRegionButton.addEventListener('click', showRegionsPopup);
regionsWrapper.addEventListener('click', hideRegionsPopup);

catalogButton.addEventListener('click', toggleCatalog);
catalogNavButtons.forEach(button => button.addEventListener('mouseover', catalogNavButtonOn));

searchBar.addEventListener('focus', hideCatalogButton);
searchBar.addEventListener('click', hideCatalogButton);
closeSearchBarButton.addEventListener('click', hideSearchInfo);

loginButton.addEventListener('click', showLoginPopup);
loginWrapper.addEventListener('click', hideLoginPopup);
loginOptions.forEach(option => option.addEventListener('click', changeLoginOption));
loginFormInputs.forEach(input => input.addEventListener('focus', activateLoginFormInput));
loginFormInputs.forEach(input => input.addEventListener('click', activateLoginFormInput));
loginFormInputs.forEach(input => input.addEventListener('blur', deactivateLoginFormInput));
loginFormInputs.forEach(input => input.addEventListener('input', setLoginValue));
eyeSVGs.forEach(svg => svg.addEventListener('click', toggleEye));

window.addEventListener('keydown', manageKeyDown);