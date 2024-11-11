function showCategory(categoryId) {
    const categories = document.querySelectorAll('.product-list');
    categories.forEach(category => {
        if (category.id === categoryId) {
            category.style.display = 'flex';  // 선택한 카테고리는 표시
        } else {
            category.style.display = 'none';  // 다른 카테고리는 숨김
        }
    });
}
