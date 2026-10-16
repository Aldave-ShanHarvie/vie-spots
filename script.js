
const guideName = "Vie Spots";
const currentYear = new Date().getFullYear();

let runningCount = 0;

// Display the guide name
const guideNameElement = document.getElementById("guide-name");

if (guideNameElement) {
  guideNameElement.textContent = guideName;
}

// Update the copyright year
const copyrightElement = document.getElementById("copyright");

if (copyrightElement) {
  copyrightElement.textContent = `\u00A9 ${currentYear} Vie-Spots`;
}

// Count the places displayed on the page
const places = document.querySelectorAll(".place-card");
runningCount = places.length;

const placeCountElement = document.getElementById("place-count");

if (placeCountElement) {
  placeCountElement.textContent = runningCount;
}

// DECISION 1: Rating label
const placeRating = 4.5;
let ratingLabel;

if (placeRating >= 4) {
  ratingLabel = "Highly recommended";
} else if (placeRating >= 2.5) {
  ratingLabel = "Worth a visit";
} else {
  ratingLabel = "Only if you're nearby";
}

// DECISION 2: Budget check
const priceLevel = 2;
const isOpen = true;

const isGoodOption = priceLevel <= 2 && isOpen === true;

const budgetMessage = isGoodOption
  ? "Good option right now"
  : "Maybe another time";

// DECISION 3: Distance note
const isWalkingDistance = true;

const distanceMessage = isWalkingDistance
  ? "Walking distance"
  : "Better to commute";

// Display the three decisions on the homepage
const placeGrid = document.querySelector(".place-grid");

if (placeGrid) {
  const decisionsSection = document.createElement("section");
  decisionsSection.className = "guide-decisions";

  const heading = document.createElement("h2");
  heading.textContent = "Guide Decisions";
  decisionsSection.appendChild(heading);

  const ratingResult = document.createElement("p");
  ratingResult.textContent =
    `Rating (${placeRating}/5): ${ratingLabel}`;
  decisionsSection.appendChild(ratingResult);

  const budgetResult = document.createElement("p");
  budgetResult.textContent = `Budget check: ${budgetMessage}`;
  decisionsSection.appendChild(budgetResult);

  const distanceResult = document.createElement("p");
  distanceResult.textContent = `Distance: ${distanceMessage}`;
  decisionsSection.appendChild(distanceResult);

  placeGrid.insertAdjacentElement("afterend", decisionsSection);
}

// Three labelled console messages
console.log("Guide name:", guideName);
console.log("Current year:", currentYear);
console.log("Number of places:", runningCount);
