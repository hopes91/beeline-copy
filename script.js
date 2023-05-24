const productButton = document.querySelector('.relevant-product_top button');

const closeRelevantProduct = () => {
    const relevantProduct = document.querySelector('.relevant-product_top');
    
    relevantProduct.classList.add('height-zero');
};

productButton.addEventListener('click', closeRelevantProduct);