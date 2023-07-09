function toggleBodyScroll(action) {
    const body = document.querySelector('body');
    
    if (action === 'no-scroll') {
        body.classList.add('no-scroll');
    } else {
        body.classList.remove('no-scroll');
    }
}

// top yellow bar
const topBannerButton = document.querySelector('.banner_top .banner-close');

function hideTopBanner() {
    const topBanner = document.querySelector('.banner_top');
    topBanner.classList.add('height-zero');
}

// regions
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

// catalog
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

    const catalogBlocks = document.querySelectorAll('.catalog .content-block');

    for (let block of catalogBlocks) {
        if (currentButton === block.childNodes[1].innerText) {
            block.style.display = 'block';
            break;
        }
    }
}

function hideCatalogBlocks() {
    const catalogBlocks = document.querySelectorAll('.catalog .content-block');
    catalogBlocks.forEach(block => block.style.display = 'none');
}

function displayInitialCatalogBlock() {
    const initialBlock = document.querySelector('.catalog .content-block.initial');
    initialBlock.style.display = 'block';

    catalogNavButtonOff();
}

// search
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

    clearSearch();
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

const clearSearchButton = document.getElementById('clear-search');

function manageClearSearchButton(event) {
    if (event.target.value === '') {
        hideClearSearchButton();
    } else {
        showClearSearchButton();
    }
}

function showClearSearchButton() {
    clearSearchButton.style.display = 'block';
}

function hideClearSearchButton() {
    clearSearchButton.style.display = 'none';
}

function clearSearch() {
    searchBar.value = '';

    hideClearSearchButton();
}

// login
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
    const chosenOption = event.currentTarget;

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

    autoFocusLoginInput();
}

const loginInputs = document.querySelectorAll('.login-forms input');
let phoneValue = '+7 ___ ___-__-__';
let loginValue = '';
let passwordValue = '';

function autoFocusLoginInput() {
    const firstLoginInputs = document.querySelectorAll('.login-forms input.first');

    firstLoginInputs.forEach((input, index) => {
        if (index < 2) {
            input.value = phoneValue;
            input.focus();

            if (phoneValue.startsWith('+7 _')) {
                setCaretPosition(input, 3);
            } else {
                setCaretPosition(input, findCharIndex('last-digit') + 1);
            }
        } else {
            input.value = loginValue;
            input.focus();
        }
    });
}

function focusLoginInput(event) {
    const input = event.target;
    const placeholder = event.target.placeholder;

    if (placeholder.includes('+7')) {
        input.value = phoneValue;
        input.focus();

        if (phoneValue.startsWith('+7 _')) {
            setCaretPosition(input, 3);
        } else {
            const firstDigitIndex = 3;
            const lastDigitIndex = findCharIndex('last-digit');
            const caretPosition = findCaretPosition(input);

            if (caretPosition < firstDigitIndex) {
                setCaretPosition(input, firstDigitIndex);
            } else if (caretPosition >= firstDigitIndex && caretPosition <= lastDigitIndex) {
                setCaretPosition(input, caretPosition);
            } else {
                setCaretPosition(input, findCharIndex('last-digit') + 1);
            }
        }
    } else if (placeholder.includes('Логин')) {
        input.value = loginValue;
    } else {
        input.value = passwordValue;
    }
}

function blurLoginInput() {
    const phoneLoginInputs = document.querySelectorAll('.login-forms input.num');

    phoneLoginInputs.forEach(input => {
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
    if (value === 'last-digit') {
        const isDigit = element => /\d/.test(element);
        return phoneValue.slice(3).split('').findLastIndex(isDigit) + 3;
    }
}

function setLoginValue(event) {
    if (event.target.placeholder.includes('+7')) {
        if (event.inputType === 'deleteContentBackward') {
            deleteNumValues(event);
        } else {
            setNumValues(event);
            activateSubmitLoginButton(event.target);
        }
    } else {
        setNumLetCharValues(event);
        activateSubmitLoginButton(event.target);
    }
}

function setNumValues(event) {
    const input = event.target;

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
    const input = event.target;

    if (phoneValue.startsWith('+7 _')) {
        input.value = phoneValue;
        setCaretPosition(input, 3);
    } else {
        let reversedPhone = phoneValue.split('').reverse().join('');

        for (let i = phoneValue.length - 1; i >= 3; i--) {
            if (/\d/.test(phoneValue[i])) {
                reversedPhone = reversedPhone.replace(reversedPhone[(phoneValue.length - 1) - i], '_');
                phoneValue = reversedPhone.split('').reverse().join('');
                input.value = phoneValue;

                setCaretPosition(input, findCharIndex('last-digit') + 1);
                break;
            }
        }
    }
}

function setNumLetCharValues(event) {
    const input = event.target;

    if (input.placeholder.includes('Логин')) {
        loginValue = input.value;
    } else {
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

function toggleEyeIcon(event) {
    const svgClosed = document.querySelector('.svg-wrapper.eye svg.closed');
    const svgOpened = document.querySelector('.svg-wrapper.eye svg.opened');
    const clickedEye = event.currentTarget;

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
    const type = passwordInput.getAttribute('type') === 'password' ? 'text' : 'password';
    passwordInput.setAttribute('type', type);
}

function manageKeyDown(event) {
    if (event.key === 'Escape') {
        closeOnEsc();
    } else if (event.key === 'ArrowLeft' || event.key === 'ArrowRight') {
        if (loginWrapper.style.display === 'flex') {
            handleArrowMoves(event);
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

function handleArrowMoves(event) {
    if (!event.target.placeholder.startsWith('+7')) return;

    if (phoneValue.startsWith('+7 _')) {
        event.preventDefault();
    } else if (/^\+7\s\d+/.test(phoneValue)) {
        const caretPosition = findCaretPosition(event.target) - 1;
        
        if (event.key === 'ArrowLeft') {
            if (caretPosition == 2) {
                event.preventDefault();
            }
        } else if (event.key === 'ArrowRight') {
            if (caretPosition == findCharIndex('last-digit')) {
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
    const y = window.scrollY;
    
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
searchBar.addEventListener('input', manageClearSearchButton);
clearSearchButton.addEventListener('click', clearSearch);

loginButton.addEventListener('click', showLogin);
loginWrapper.addEventListener('click', hideLogin);
loginOptions.forEach(option => option.addEventListener('click', changeLoginOption));
loginInputs.forEach(input => input.addEventListener('focus', focusLoginInput));
loginInputs.forEach(input => input.addEventListener('click', focusLoginInput));
loginInputs.forEach(input => input.addEventListener('blur', blurLoginInput));
loginInputs.forEach(input => input.addEventListener('input', setLoginValue));
eyeSVGs.forEach(svg => svg.addEventListener('click', toggleEyeIcon));

window.addEventListener('keydown', manageKeyDown);
window.addEventListener('scroll', toggleHeadersPosition);