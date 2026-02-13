const slides = document.querySelectorAll(".slide");
let current = 0;

function showSlide(index) {
  slides.forEach(slide => slide.classList.remove("active"));
  slides[index].classList.add("active");
}

document.addEventListener("click", () => {
  current++;

  if (current >= slides.length) {
    current = 0;
  }

  showSlide(current);
});
// Click hearts
document.addEventListener("click", function(e) {
  for (let i = 0; i < 5; i++) { // 5 hearts per click
    const heart = document.createElement("div");
    heart.className = "heart";
heart.textContent = "❤️";  // ❤️ heart emoji
heart.style.left = e.clientX + "px";
heart.style.top = e.clientY + "px";


    document.body.appendChild(heart);

    // Remove heart after animation
    heart.addEventListener("animationend", () => {
      heart.remove();
    });
  }
});
// Click hearts confetti
document.addEventListener("click", function(e) {
  const heartCount = 8; // number of hearts per click

  for (let i = 0; i < heartCount; i++) {
    const heart = document.createElement("div");
    heart.className = "heart";
    heart.textContent = "❤️";

    // Random position near cursor
    const offsetX = (Math.random() - 0.5) * 100; // horizontal scatter
    const offsetY = (Math.random() - 0.5) * 50; // slight vertical offset
    heart.style.left = e.clientX + offsetX + "px";
    heart.style.top = e.clientY + offsetY + "px";

    // Random rotation and scale
    heart.style.setProperty('--rotation', (Math.random() * 360 - 180) + "deg");
    heart.style.setProperty('--scale', 0.8 + Math.random() * 0.7);

    // Random font size
    heart.style.fontSize = 16 + Math.random() * 14 + "px";

    document.body.appendChild(heart);

    // Remove heart after animation
    heart.addEventListener("animationend", () => {
      heart.remove();
    });
  }
});
