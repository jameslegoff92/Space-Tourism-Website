//Function to activate mobile menu.
const hamburgerIconElement = document.querySelector('.nav__openIcon');
hamburgerIconElement.addEventListener('click', (e) => {
  e.preventDefault();
  const navContainer = document.querySelector('.nav__container--off');
  navContainer.classList.remove('nav__container--off');
})

//Function to disable the mobile menu.
const closeIcon = document.querySelector('.nav__closeIcon');
closeIcon.addEventListener('click', (e) => {
  e.preventDefault();
  const navContainer = document.querySelector('.nav__container');
  navContainer.classList.add('nav__container--off');
})



