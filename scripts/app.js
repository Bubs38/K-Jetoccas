// Navbar

const hamburgerToggler = document.querySelector(".hamburger");
const navLinksContainer = document.querySelector(".navlinks-container");

const toggleNav = () => {
  hamburgerToggler.classList.toggle("open");

  const ariaToggle = hamburgerToggler.getAttribute('aria-extended') === "true" ? "false" : "true";
  hamburgerToggler.setAttribute("aria-entended", ariaToggle);

  navLinksContainer.classList.toggle("open");
}

hamburgerToggler.addEventListener("click", toggleNav);

new ResizeObserver(entries => {
  if(entries[0].contentRect.width <= 900) {
    navLinksContainer.style.transition = "transform 0.3s ease-out"
  } else {
    navLinksContainer.style.transition = "none";
  }
}).observe(document.body);


// --------- Slider -------------

const itemsSlide = document.querySelectorAll('.container-slides img');
const nbSlide = itemsSlide.length;
const suivant = document.querySelector('.right');
const precedent = document.querySelector('.left');
let count = 0;



suivant.addEventListener('click', slideSuivante);

function slideSuivante(){
  itemsSlide[count].classList.remove('active');

  if(count < nbSlide - 1){
    count++;
  }
  else {
    count = 0;
  }
  itemsSlide[count].classList.add('active');
}

precedent.addEventListener('click', slidePrecedente);

function slidePrecedente(){
  itemsSlide[count].classList.remove('active');

  if(count > 0){
    count--;
  }
  else {
    count = nbSlide - 1;
  }
  itemsSlide[count].classList.add('active');
}
