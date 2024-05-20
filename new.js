const adviceButton = document.getElementById("adviceButton");
const adviceText = document.getElementById("adviceText");
const adviceNumber = document.getElementById("adviceNumber");

const adviceUrl = "https://api.adviceslip.com/advice"; // Advice Slip API endpoint

function fetchAdvice() {
  fetch(adviceUrl)
    .then(response => response.json())
    .then(data => {
      const advice = data.slip.advice;
      const id = data.slip.id; // Extract advice from API response
      adviceText.textContent = advice;
      adviceNumber.textContent = id;
    })
    .catch(error => {
      console.error(error);
      adviceText.textContent = "Error fetching advice!";
    });
}

adviceButton.addEventListener("click", fetchAdvice);
fetchAdvice()