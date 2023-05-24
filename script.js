const productButton = document.querySelector('.relevant-product_top button');

const closeRelevantProduct = () => {
    const relevantProduct = document.querySelector('.relevant-product_top');
    
    relevantProduct.style.display = 'none';
};

productButton.addEventListener('click', closeRelevantProduct);