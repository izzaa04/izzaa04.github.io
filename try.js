// Changing the text dynamically
const scrollingText = document.querySelector(".scrolling-text");
scrollingText.textContent = "New text dynamically changed!";

// Pausing the scrolling animation
scrollingText.style.animationPlayState = "paused";

// Resuming the scrolling animation
scrollingText.style.animationPlayState = "running";
