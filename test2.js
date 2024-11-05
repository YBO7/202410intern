const images = document.querySelectorAll('.');

images.forEach((image) => {
    function aaa(opacity)
        image.addEventListener("mouseover", () => { 
            image.style.opacity = "1";
            image.style.cursor = "pointer";
            image.style.transform = "rotate(2deg) scale(1.03)";  
        })
        
    });

    image.addEventListener('mouseout', () => {
        image.style.opacity = "0.2";
        image.style.cursor = "default";
        image.style.transform = "rotate(0deg) scale(1)";
    });




