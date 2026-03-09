const rotatingLines = [
  "Mapping search intent into experimental interfaces.",
  "Tracking how entities become visible across platforms.",
  "Turning human signal into navigable systems.",
  "Building poetic prototypes for the algorithmic age.",
  "Exploring search, memory, metadata, and recognition."
];

let currentLine = 0;
const lineTarget = document.getElementById("rotatingLine");

function rotateSignal() {
  if (!lineTarget) return;

  lineTarget.style.opacity = "0";

  setTimeout(() => {
    currentLine = (currentLine + 1) % rotatingLines.length;
    lineTarget.textContent = rotatingLines[currentLine];
    lineTarget.style.opacity = "1";
  }, 220);
}

if (lineTarget) {
  lineTarget.style.transition = "opacity 0.22s ease";
  setInterval(rotateSignal, 3200);
}

document.querySelectorAll('a[href^="#"]').forEach((anchor) => {
  anchor.addEventListener("click", (event) => {
    const targetId = anchor.getAttribute("href");
    const target = document.querySelector(targetId);

    if (!target) return;

    event.preventDefault();
    target.scrollIntoView({
      behavior: "smooth",
      block: "start"
    });
  });
});

console.log("SXO Lab transmission active.");
