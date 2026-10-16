
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
  copyrightElement.textContent = `© ${currentYear} Vie-Spots`;
}

// Count the places displayed on the page
const places = document.querySelectorAll(".place-card");
runningCount = places.length;

// Display the computed place count
const placeCountElement = document.getElementById("place-count");

if (placeCountElement) {
  placeCountElement.textContent = runningCount;
}

// Three labelled console messages
console.log("Guide name:", guideName);
console.log("Current year:", currentYear);
console.log("Number of places:", runningCount);
