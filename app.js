const navSlide = () => {
  const burger = document.querySelector('.burger');
  const navLinks = document.querySelector('.nav-links');
  const navIndividualLinks = document.querySelectorAll('.nav-links li');

  burger.addEventListener('click', () => {
    /* Toggle nav */
    navLinks.classList.toggle('nav-active');

    /* Animate links */
    navIndividualLinks.forEach((link, index) => {
      if (link.style.animation) {
        link.style.animation = '';
      } else {
        link.style.animation = `navLinkFade 0.5s ease forwards ${index / 7}s`;
      }    
    });

    /* Burger animation */
    burger.classList.toggle('toggle');
  });
}

const app = () => {
  navSlide();
}

app();