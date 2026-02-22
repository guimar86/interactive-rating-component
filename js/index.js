const submitBtn = document.querySelector("#submit");
const selectedRatingEl = document.querySelector("#selected-rating");
const ratingButtons = document.querySelectorAll(".rating-btn");
const thankYouCard = document.querySelector("#thank-you-card");
const submitCard = document.querySelector("#submit-card");

const totalStars = 5;
let selectedRating = 0;

ratingButtons.forEach((button, index) => {
  button.addEventListener("click", () => {
    selectedRating = Number(button.textContent);
    ratingButtons.forEach((btn) => btn.classList.remove("selected"));
    button.classList.add("selected");
  });
});

submitBtn.addEventListener("click", () => {
  thankYouCard.style.display = "grid";
  submitCard.style.display = "none";
  selectedRatingEl.textContent = selectedRating;
});
