// Typing Effect cho tiêu đề
const typingName = document.getElementById('typing-name');
const nameText = "Dương Bảo Huy";
let index = 0;

function typeEffect() {
    if (index < nameText.length) {
        typingName.textContent += nameText.charAt(index);
        index++;
        setTimeout(typeEffect, 150); // Tốc độ gõ (ms)
    }
}

// Reset và chạy lại hiệu ứng khi tải trang
window.onload = function() {
    typingName.textContent = "";
    typeEffect();
};

// Fade-in on Scroll
const fadeElements = document.querySelectorAll('.fade-in');

function checkFade() {
    fadeElements.forEach(element => {
        const elementTop = element.getBoundingClientRect().top;
        const windowHeight = window.innerHeight;

        if (elementTop < windowHeight - 100) {
            element.classList.add('visible');
        }
    });
}

// Gọi hàm khi cuộn và khi tải trang
window.addEventListener('scroll', checkFade);
window.addEventListener('load', checkFade);