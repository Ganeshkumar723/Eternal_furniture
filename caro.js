const tracks = document.querySelector('.favoritesConBlock');
const cardss = document.querySelectorAll('.favoritesConBox');

let indexx = 0;
let cardWidths = cardss[0].offsetWidth + 10;

function updateWidth() {
  cardWidths = cardss[0].offsetWidth + 10;
}

window.addEventListener('resize', updateWidth);

setInterval(() => {
  indexx++;
  if (indexx >= cardss.length) {
    // Loop back
    tracks.style.transition = 'none';
    tracks.style.transform = 'translateX(0)';
    indexx = 1;
    setTimeout(() => {
      tracks.style.transition = 'transform 0.5s ease-in-out';
      tracks.style.transform = `translateX(-${cardWidths * indexx}px)`;
    }, 50);
  } else {
    tracks.style.transition = 'transform 0.5s ease-in-out';
    tracks.style.transform = `translateX(-${cardWidths * indexx}px)`;
  }
}, 3000);



  let currentSlide = 0;
  const slides = document.querySelector('.heroSlides');
  const totalSlides = slides.children.length;

  setInterval(() => {
    currentSlide = (currentSlide + 1) % totalSlides;
    slides.style.transform = `translateX(-${currentSlide * 100}vw)`;
  }, 5000); // 5 seconds




 
  const navToggleBtn = document.getElementById('navToggleBtn');
  const navLinks = document.getElementById('navLinks');

  navToggleBtn.addEventListener('click', function () {
    navLinks.classList.toggle('active');
    navToggleBtn.classList.toggle('open');
  });



  const scrollToTopBtn = document.getElementById("scrollToTopBtn");

window.addEventListener("scroll", () => {
  if (window.scrollY > 300) {
    scrollToTopBtn.style.display = "block";
  } else {
    scrollToTopBtn.style.display = "none";
  }
});

scrollToTopBtn.addEventListener("click", () => {
  window.scrollTo({
    top: 0,
    behavior: "smooth"
  });
});
