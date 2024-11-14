// 카테고리별 제품 목록 표시 함수
function showCategory(categoryId) {
    const categories = document.querySelectorAll('.product-list');

    categories.forEach(category => {
        category.style.display = category.id === categoryId ? 'flex' : 'none';
    });
}

// 페이지 로드 시 제품 애니메이션 적용
document.querySelectorAll('.product').forEach(product => {
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

// 네비게이션 링크에 호버 효과 적용
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

// 모달 및 슬라이드 관련 변수 설정
const modal = document.getElementById("image-modal");
const slideContainer = document.querySelector(".slide-container");
let currentSlideIndex = 0;

// 모달 열기 함수
function openModal(images) {
    slideContainer.innerHTML = ""; // 모달 초기화
    currentSlideIndex = 0;
    
    // 이미지 슬라이드 추가
    images.forEach(src => {
        const img = document.createElement("img");
        img.src = src;
        img.classList.add('slide');
        slideContainer.appendChild(img);
    });

    updateSlide(); // 첫 번째 이미지 표시
    modal.style.display = "flex";
}

// 모달 닫기 함수
function closeModal() {
    modal.style.display = "none";
}

// 슬라이드 이동 함수
function changeSlide(step) {
    currentSlideIndex += step;
    updateSlide();
}

// 슬라이드 업데이트 함수 (수정 필요)
function updateSlide() {
    const totalSlides = slideContainer.children.length;
    if (currentSlideIndex < 0) currentSlideIndex = totalSlides - 1;
    if (currentSlideIndex >= totalSlides) currentSlideIndex = 0;
    slideContainer.style.transform = `translateX(-${currentSlideIndex * 87}%)`;
}

// 각 제품의 이미지 클릭 시 모달 열기
document.querySelectorAll(".product img").forEach(img => {
    img.addEventListener("click", (e) => {
        const altText = e.target.alt;
        let images = [];
        
        // 각 상품별 이미지 설정
        switch (altText) {
            case "item 1":
                images = ["/imgs/me8.jpg.jpg", "/imgs/me8_additional1.jpg", "/imgs/me8_additional2.jpg"];
                break;
            case "item 2":
                images = ["/imgs/me4.jpg.jpg", "/imgs/me4_additional1.jpg", "/imgs/me4_additional2.jpg"];
                break;
            // 추가 상품 이미지 설정...
        }

        openModal(images);
    });
});
