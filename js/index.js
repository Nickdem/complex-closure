const clickers = document.querySelectorAll('#clicker');
const exitBtn = document.querySelector('.exit');
const backDrop = document.querySelector('.backdrop');
const popup = document.querySelector('.consultation');
const menuBtn = document.querySelector('.header__menu-toggle');
const menu = document.querySelector('.menu ul');

clickers.forEach(clicker => {
  clicker.addEventListener('click', (e) => {
    e.preventDefault()
    popup.classList.remove('hidden')
  })
})

menuBtn.addEventListener('click', () => {
  menuBtn.classList.toggle('show')
})

exitBtn.addEventListener('click', (e) => {
  e.preventDefault()
  popup.classList.add('hidden')
})

backDrop.addEventListener('click', (e) => {
  e.preventDefault()
  popup.classList.add('hidden')
})