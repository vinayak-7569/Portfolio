// Menu Toggle Functionality
document.addEventListener("DOMContentLoaded", () => {
    const menuToggle = document.querySelector("#click");
    const navMenu = document.querySelector("nav");

    menuToggle.addEventListener("change", () => {
        if (menuToggle.checked) {v 
            navMenu.style.left = "0%";
        } else {
            navMenu.style.left = "-100%";
        }
    });
});
document.addEventListener("DOMContentLoaded", function () {
    const nameElement = document.querySelector(".typing-name");
    const nameText = "VINAYAK";
    let index = 0;

    function typeEffect() {
        nameElement.classList.add("typing"); // Add cursor effect
        if (index < nameText.length) {
            nameElement.textContent += nameText[index];
            index++;
            setTimeout(typeEffect, 200); // Typing speed
        } else {
            nameElement.classList.remove("typing"); // Remove cursor after typing
            setTimeout(() => {
                nameElement.textContent = ""; // Clear text after delay
                index = 0;
                typeEffect();
            }, 4000); // 4-second pause before retyping
        }
    }

    typeEffect();
});


// Smooth Scroll (Future Enhancement Placeholder)
// Add smooth scrolling to section links if needed
document.querySelectorAll('nav a').forEach(link => {
    link.addEventListener("click", (e) => {
        e.preventDefault();
        const targetId = e.target.getAttribute("href").slice(1);
        const targetSection = document.getElementById(targetId);

        if (targetSection) {
            window.scrollTo({
                top: targetSection.offsetTop,
                behavior: "smooth",
            });
        }
    });
});

// Social Media Hover Effects (Optional Enhancements)
// Add dynamic effects or analytics tracking for social links
const socialLinks = document.querySelectorAll('.social a');
socialLinks.forEach(link => {
    link.addEventListener("mouseenter", () => {
        console.log(`Hovered on ${link.href}`);
    });
});
