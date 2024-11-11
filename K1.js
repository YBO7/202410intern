function showCategory(categoryId) {
    const categories = document.querySelectorAll('.product-list');
    categories.forEach(category => {
        category.style.display = (category.id === categoryId) ? 'flex' : 'none';
    });
}