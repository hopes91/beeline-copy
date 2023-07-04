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

function toggleCatalog(action) {
    const catalogWrapper = document.querySelector('.catalog-wrapper');

    if (catalogWrapper.style.display === 'block' || action === 'close') {
        catalogWrapper.style.display = 'none';

        hideCatalogBlocks();
        displayInitialCatalogBlock();
        toggleBodyScroll();
    } else {
        catalogWrapper.style.display = 'block';

        toggleBodyScroll('no-scroll');
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

const catalogNavButtons = document.querySelectorAll('.catalog .small-navbar button');

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

    toggleBodyScroll('no-scroll');
}

const closeSearchBarButton = document.getElementById('close-search');

function hideSearchInfo() {
    const searchInfo = document.querySelector('.search-wrapper');
    searchInfo.style.display = 'none';

    hideHiddenButtons();
    toggleBodyScroll();
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

    toggleBodyScroll('no-scroll');
}

function hideLogin(event) {
    if (event.target.classList.contains('close')) {
        loginWrapper.style.display = 'none';

        setInitialLoginOption();
        toggleBodyScroll();
    }
}

function toggleBodyScroll(action) {
    const body = document.querySelector('body');
    
    if (action === 'no-scroll') {
        body.classList.add('no-scroll');
    } else {
        body.classList.remove('no-scroll');
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

            if (phoneValue.startsWith('+7 _')) {
                setCaretPosition(input, findCharIndex('underscore'));
            } else {
                setCaretPosition(input, findCharIndex('digit'));
            }
        } else {
            input.value = loginValue;
            input.focus();
        }
    });
}

function activateLoginInput(event) {
    let input = event.target;
    let placeholder = event.target.placeholder;

    if (placeholder.includes('+7')) {
        input.value = phoneValue;
        input.focus();

        if (phoneValue.startsWith('+7 _')) {
            setCaretPosition(input, findCharIndex('underscore'));
        } else {
            let startChar = 3;
            let endChar = findCharIndex('digit');
            let caretPosition = findCaretPosition(input);

            if (caretPosition >= startChar && caretPosition <= endChar) {
                setCaretPosition(input, caretPosition);
            } else if (caretPosition < startChar) {
                setCaretPosition(input, startChar);
            } else {
                setCaretPosition(input, findCharIndex('digit'));
            }
        }
    } else if (placeholder.includes('Логин')) {
        input.value = loginValue;
    } else {
        input.value = passwordValue;
    }
}

function deactivateLoginInput() {
    loginInputs.forEach(input => {
        if (phoneValue.startsWith('+7 _')) {
            input.value = '';
            input.blur();
        }
    });
}

function setCaretPosition(input, position) {
    input.setSelectionRange(position, position);
}

function findCharIndex(value) {
    if (value === 'underscore') {
        return phoneValue.search(/_/);
    } else {
        let reversedPhone = phoneValue.split('').reverse().join('');
        return phoneValue.length - reversedPhone.search(/\d/);
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

            setCaretPosition(input, findCharIndex('underscore'));
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

function activateSubmitLoginButton(input) {
    const submitButtons = document.querySelectorAll('.login-submit');

    if (input.placeholder.includes('+7')) {
        submitButtons[0].removeAttribute('disabled');
        submitButtons[1].removeAttribute('disabled');
    } else {
        submitButtons[2].removeAttribute('disabled');
    }
}

const eyeSVGs = document.querySelectorAll('.svg-wrapper.eye svg');

function toggleEye(event) {
    const svgClosed = document.querySelector('.svg-wrapper.eye svg.closed');
    const svgOpened = document.querySelector('.svg-wrapper.eye svg.opened');
    let clickedEye = event.currentTarget;

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

function manageKeyDown(event) {
    if (event.key === 'Escape') {
        closeOnEsc();
    } else if (event.key === 'ArrowLeft' || event.key === 'ArrowRight') {
        if (loginWrapper.style.display === 'flex') {
            handleArrowMovesInNumValue(event);
        }
    }
}

function closeOnEsc() {
    const popups = document.querySelectorAll('.popup');
    popups.forEach(popup => popup.style.display = 'none');

    toggleCatalog('close');
    hideSearchInfo();
    setInitialLoginOption();
}

function handleArrowMovesInNumValue(event) {
    if (phoneValue.startsWith('+7 _')) {
        event.preventDefault();
    } else if (/^\+7\s\d+/.test(phoneValue)) {
        if (event.key === 'ArrowLeft') {
            let caretPosition = findCaretPosition(event.target) - 1;
    
            if (caretPosition == 2) {
                event.preventDefault();
            }
        } else if (event.key === 'ArrowRight') {
            let caretPosition = findCaretPosition(event.target);
    
            if (caretPosition == findCharIndex('digit')) {
                event.preventDefault();
            }
        }
    }
}

function findCaretPosition(input) {
    return input.selectionStart;
}

function toggleHeadersPosition() {
    const header = document.querySelector('header');
    const barTop = document.querySelector('.bar_top');
    let y = window.scrollY;
    
    if (y > 0) {
        header.style.position = 'fixed';
        barTop.style.display = 'none';
    } else {
        header.style.position = 'relative';
        barTop.style.display = 'flex';
    }
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
window.addEventListener('scroll', toggleHeadersPosition);