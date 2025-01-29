// Get the Back to Top button
const backToTopButton = document.getElementById("back-to-top");

// Show the button after scrolling down 200px
window.addEventListener("scroll", function () {
  if (window.scrollY > 200) {
    backToTopButton.style.display = "flex"; // Show the button
  } else {
    backToTopButton.style.display = "none"; // Hide the button
  }
});