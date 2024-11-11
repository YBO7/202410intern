function showCategory(categoryId) {
    const categories = document.querySelectorAll('.product-list');
    
    
    categories.forEach(category => {
        if (category.id === categoryId) {
            category.style.display = 'flex';

            
            category.querySelectorAll('.product').forEach(product => {
                product.addEventListener('mouseover', () => {
                    product.style.opacity = '0.8';
                    product.style.transform = 'scale(1.05)';
                    product.style.boxShadow = '0px 4px 8px rgba(0, 0, 0, 0.2)';
                });

                product.addEventListener('mouseout', () => {
                    product.style.opacity = '1';
                    product.style.transform = 'scale(1)';
                    product.style.boxShadow = 'none';
                });
            });
        } else {
            category.style.display = 'none';
        }
    });
}

document.querySelectorAll('nav ul li a').forEach(link => {
    link.addEventListener('mouseover', () => {
        link.style.cursor = 'pointer';
        link.style.opacity = '0.7';
        link.style.color = 'pink'; 
    });

    link.addEventListener('mouseout', () => {
        link.style.opacity = '1';
        link.style.color = '';
    });
});
