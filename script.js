// top yellow bar
const topBannerButton = document.querySelector('.banner_top .banner-close');

function hideTopBanner() {
    const topBanner = document.querySelector('.banner_top');
    topBanner.classList.add('height-zero');
}

// regions popup
const chosenRegionButton = document.querySelector('.chosen-region');
const regionsWrapper = document.querySelector('.regions-wrapper');

function showRegions() {
    regionsWrapper.style.display = 'block';
}

function hideRegions(event) {
    if (event.target.classList.contains('close')) {
        regionsWrapper.style.display = 'none';
    }
}

// catalog content
const catalogButton = document.querySelector('.catalog-button');

function toggleCatalog(additionalInfo) {
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
}

function toggleCatalogButtonSVG(catalogWrapper) {
    const svgClosed = document.querySelector('.catalog-button svg.closed');
    const svgOpened = document.querySelector('.catalog-button svg.opened');

    if (catalogWrapper.style.display === 'block') {
        svgClosed.style.opacity = '0';
        svgOpened.style.opacity = '1';
    } else {
        svgClosed.style.opacity = '1';
        svgOpened.style.opacity = '0';
    }
}

function toggleCatalogBackground(catalogWrapper) {
    const catalogBackground = document.querySelector('.catalog-background');

    if (catalogWrapper.style.display === 'block') {
        catalogBackground.style.display = 'block';
        catalogBackground.style.opacity = '0.3';
    } else {
        catalogBackground.style.display = 'none';
        catalogBackground.style.opacity = '0';
    }
}

const catalogNavButtons = document.querySelectorAll('.small-navbar button');

function catalogNavButtonOff() {
    catalogNavButtons.forEach(button => button.classList.remove('chosen-section'));
}

function catalogNavButtonOn(event) {
    catalogNavButtonOff();

    event.currentTarget.classList.add('chosen-section');

    showCatalogBlock(event.currentTarget.innerText);
}

function showCatalogBlock(currentButton) {
    hideCatalogBlocks();

    const catalogBlocks = document.querySelectorAll('.big-navbar .content-block');

    for (let block of catalogBlocks) {
        if (currentButton === block.childNodes[1].innerText) {
            block.style.display = 'block';
            break;
        }
    }
}

function hideCatalogBlocks() {
    const catalogBlocks = document.querySelectorAll('.big-navbar .content-block');
    catalogBlocks.forEach(block => block.style.display = 'none');
}

function displayInitialCatalogBlock() {
    const initialBlock = document.querySelector('.content-block.initial');
    initialBlock.style.display = 'block';

    catalogNavButtonOff();
}

// search bar content
const searchBar = document.getElementById('search-bar');

function hideCatalogButton() {
    catalogButton.style.display = 'none';

    toggleCatalog('close');
    hideButtonsToTheRight();
}

function hideButtonsToTheRight() {
    const buttonsToTheRight = document.querySelector('.bar_bottom .right');
    buttonsToTheRight.style.display = 'none';

    showHiddenButtons();
}

function showHiddenButtons() {
    const hiddenButtons = document.querySelector('.hidden-buttons');
    hiddenButtons.style.display = 'flex';

    showSearchInfo();
}

function showSearchInfo() {
    const searchInfo = document.querySelector('.search-wrapper');
    searchInfo.style.display = 'block';
}

const closeSearchBarButton = document.getElementById('close-search');

function hideSearchInfo() {
    const searchInfo = document.querySelector('.search-wrapper');
    searchInfo.style.display = 'none';

    hideHiddenButtons();
}

function hideHiddenButtons() {
    const hiddenButtons = document.querySelector('.hidden-buttons');
    hiddenButtons.style.display = 'none';

    showCatalogButton();
}

function showCatalogButton() {
    catalogButton.style.display = 'inline-block';

    showButtonsToTheRight();
}

function showButtonsToTheRight() {
    const buttonsToTheRight = document.querySelector('.bar_bottom .right');
    buttonsToTheRight.style.display = 'flex';
}

// login popup
const loginWrapper = document.querySelector('.login-wrapper');
const loginButton = document.getElementById('login-button');

function showLogin() {
    loginWrapper.style.display = 'flex';
}

function hideLogin(event) {
    if (event.target.classList.contains('close')) {
        loginWrapper.style.display = 'none';

        setInitialLoginOption();
    }
}

const loginOptions = document.querySelectorAll('.login-options button');

function setInitialLoginOption() {
    loginOptions.forEach((option, index) => {
        if (index == 0) {
            option.className = 'chosen-option';
        } else {
            option.className = 'login-option';
        }
    });

    setInitialLoginForm();
}

function setInitialLoginForm() {
    const loginForms = document.querySelectorAll('.login-forms form');
    
    loginForms.forEach((form, index) => {
        if (index == 0) {
            form.className = 'chosen-form';
        } else {
            form.className = 'login-form';
        }
    });
}

function changeLoginOption(event) {
    let chosenOption = event.currentTarget;

    loginOptions.forEach(option => option.className = 'login-option');

    if (chosenOption.className === 'login-option') {
        chosenOption.className = 'chosen-option';

        showChosenLoginForm(chosenOption.id);
    }
}

function showChosenLoginForm(chosenLoginID) {
    const loginForms = document.querySelectorAll('.login-forms form');
    loginForms.forEach(form => form.className = 'login-form');

    if (chosenLoginID.includes('id')) {
        loginForms[0].className = 'chosen-form';
    } else if (chosenLoginID.includes('sms')) {
        loginForms[1].className = 'chosen-form';
    } else {
        loginForms[2].className = 'chosen-form';
    }

    autoActivateLoginInput();
}

const loginInputs = document.querySelectorAll('.login-forms input');
let phoneValue = '+7 ___ ___-__-__';
let loginValue = '';
let passwordValue = '';

function autoActivateLoginInput() {
    const firstLoginInputs = document.querySelectorAll('.login-forms input.first')

    firstLoginInputs.forEach((input, index) => {
        if (index < 2) {
            input.value = phoneValue;

            input.focus();
            setCaretPosition(input, findCaretPosition('phone'));
        } else {
            input.value = loginValue;

            input.focus();
            setCaretPosition(input, findCaretPosition('login'));
        }
    });
}

function activateLoginInput(event) {
    let input = event.target;
    let placeholder = event.target.placeholder;

    if (placeholder.includes('+7')) {
        input.value = phoneValue;

        input.focus();
        setCaretPosition(input, findCaretPosition('phone'));
    } else if (placeholder.includes('Логин')) {
        input.value = loginValue;
    } else {
        input.value = passwordValue;
    }
}

function deactivateLoginInput() {
    loginInputs.forEach(input => {
        if (input.value === '+7 ___ ___-__-__') {
            input.value = '';

            input.blur();
            setCaretPosition(input, 3);
        }
    });
}

function setCaretPosition(input, position) {
    input.setSelectionRange(position, position);
}

function findCaretPosition(inputType) {
    if (inputType === 'phone') {
        return phoneValue.search(/_/);
    } else if (inputType === 'login') {
        return loginValue.length;
    } else if (inputType === 'password') {
        return passwordValue.length;
    }
}

function setLoginValue(event) {
    if (event.target.placeholder.includes('+7')) {
        if (event.inputType === 'deleteContentBackward') {
            deleteNumValues(event);
        }

        setNumValues(event);
    } else {
        setNumLetCharValues(event);
    }
    
    activateSubmitLoginButton(event.target);
}

function setNumValues(event) {
    let input = event.target;

    if (!/\d/.test(event.data)) return;

    for (let i = 3; i < phoneValue.length; i++) {
        if (/_/.test(phoneValue[i])) {
            phoneValue = phoneValue.replace(phoneValue[i], event.data);
            input.value = phoneValue;

            setCaretPosition(input, i+1);
            break;
        } else if (i == phoneValue.length - 1) {
            input.value = phoneValue;
        }
    }
}

function deleteNumValues(event) {
    let input = event.target;
    let reversedPhone = phoneValue.split('').reverse().join('');

    for (let i = phoneValue.length - 1; i >= 3; i--) {
        if (phoneValue.startsWith('+7 _')) {
            input.value = phoneValue;

            setCaretPosition(input, 3);
        } else if (/\d/.test(phoneValue[i])) {
            reversedPhone = reversedPhone.replace(reversedPhone[(phoneValue.length - 1) - i], '_');
            phoneValue = reversedPhone.split('').reverse().join('');
            input.value = phoneValue;

            setCaretPosition(input, i);
            break;
        }
    }
}

function setNumLetCharValues(event) {
    let input = event.target;

    if (input.placeholder.includes('Логин')) {
        loginValue = input.value;
    } else if (input.placeholder.includes('Пароль')) {
        passwordValue = input.value;
    }
}

const eyeSVGs = document.querySelectorAll('.svg-wrapper.eye svg');

function toggleEye(event) {
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

    togglePassword();
}

function togglePassword() {
    const passwordInput = document.getElementById('password');
    let type = passwordInput.getAttribute('type') === 'password' ? 'text' : 'password';
    passwordInput.setAttribute('type', type);
}

function activateSubmitLoginButton(input) {
    const submitButtons = document.querySelectorAll('.login-submit');

    if (input.placeholder.includes('+7')) {
        submitButtons[0].removeAttribute('disabled');
        submitButtons[1].removeAttribute('disabled');
    } else if (input.placeholder.includes('Логин')) {
        submitButtons[2].removeAttribute('disabled');
    }
}

function manageKeyDown(event) {
    if (event.key === 'Escape') {
        closeOnEsc();
    }
}

function closeOnEsc() {
    const popups = document.querySelectorAll('.popup');
    popups.forEach(popup => popup.style.display = 'none');

    toggleCatalog('close');
    hideSearchInfo();
    setInitialLoginOption();
}


topBannerButton.addEventListener('click', hideTopBanner);

chosenRegionButton.addEventListener('click', showRegions);
regionsWrapper.addEventListener('click', hideRegions);

catalogButton.addEventListener('click', toggleCatalog);
catalogNavButtons.forEach(button => button.addEventListener('mouseover', catalogNavButtonOn));

searchBar.addEventListener('focus', hideCatalogButton);
searchBar.addEventListener('click', hideCatalogButton);
closeSearchBarButton.addEventListener('click', hideSearchInfo);

loginButton.addEventListener('click', showLogin);
loginWrapper.addEventListener('click', hideLogin);
loginOptions.forEach(option => option.addEventListener('click', changeLoginOption));
loginInputs.forEach(input => input.addEventListener('focus', activateLoginInput));
loginInputs.forEach(input => input.addEventListener('click', activateLoginInput));
loginInputs.forEach(input => input.addEventListener('blur', deactivateLoginInput));
loginInputs.forEach(input => input.addEventListener('input', setLoginValue));
eyeSVGs.forEach(svg => svg.addEventListener('click', toggleEye));

window.addEventListener('keydown', manageKeyDown);