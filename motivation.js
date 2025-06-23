const track = document.getElementById("carouselTrack");
const prev = document.getElementById("prev");
const next = document.getElementById("next");

let cardWidth;
let visibleCards;
let index;
let fullCards = [];

const cardHTML = () => `
  <div class="motivationConBox">
    <div class="cardHeader">
      <figure>
        <img src="./assets/images/motivation.png" alt="">
      </figure>
    </div>
    <div class="cardMain">
      <p><span class="iconstar">
        <i class="fa-solid fa-star"></i><i class="fa-solid fa-star"></i>
        <i class="fa-solid fa-star"></i><i class="fa-solid fa-star"></i>
        <i class="fa-solid fa-star"></i></span></p>
      <h2>Strongly Advised</h2>
      <p>I recently bought a dining set, and I’m thrilled with its sturdiness. Moreover, the company’s dedication to excellent customer service is truly impressive.</p>
      <h3>Sivakumar</h3>
      <p>Dining Sets That Inspire Gathering</p>
    </div>
  </div>
`;

let allCards = [];
for (let i = 0; i < 6; i++) allCards.push(cardHTML());

function setupCarousel() {
  // 1. Detect screen size
  const screenWidth = window.innerWidth;
  if (screenWidth < 600) {
    visibleCards = 1;
    cardWidth = screenWidth - 40; // full width with padding
  } else if (screenWidth < 992) {
    visibleCards = 2;
    cardWidth = screenWidth / 2;
  } else {
    visibleCards = 3;
    cardWidth = 400; // default
  }

  // 2. Rebuild full card list with clones
  const clonesBefore = allCards.slice(-visibleCards);
  const clonesAfter = allCards.slice(0, visibleCards);
  fullCards = [...clonesBefore, ...allCards, ...clonesAfter];
  index = visibleCards;

  // 3. Render and apply transform
  track.innerHTML = fullCards.join("");
  track.style.transition = "none";
  updateTransform();
  requestAnimationFrame(() => {
    track.style.transition = "transform 0.5s ease-in-out";
  });
}

function updateTransform() {
  track.style.transform = `translateX(${-index * cardWidth}px)`;
}

function smoothReset(newIndex) {
  track.style.transition = "none";
  index = newIndex;
  updateTransform();
  requestAnimationFrame(() => {
    track.style.transition = "transform 0.5s ease-in-out";
  });
}

// 4. Button Events
next.addEventListener("click", () => {
  index++;
  updateTransform();
  if (index >= fullCards.length - visibleCards) {
    setTimeout(() => smoothReset(visibleCards), 500);
  }
});

prev.addEventListener("click", () => {
  index--;
  updateTransform();
  if (index < visibleCards) {
    setTimeout(() => smoothReset(fullCards.length - visibleCards * 2), 500);
  }
});

// 5. Auto-scroll
setInterval(() => {
  next.click();
}, 3000);

// 6. Handle resize
window.addEventListener("resize", setupCarousel);

// 7. Initial load
setupCarousel();


document.querySelectorAll(".motivationConBox").forEach(card => {
  card.style.width = `${cardWidth}px`;
});