const clickers = document.querySelectorAll('#clicker');
const exitBtn = document.querySelector('.exit');
const backDrop = document.querySelector('.backdrop');
const popup = document.querySelector('.consultation');

clickers.forEach(clicker => {
    clicker.addEventListener('click', (e) => {
        e.preventDefault()
        popup.classList.remove('hidden')
    })
})

exitBtn.addEventListener('click', (e) => {
    e.preventDefault()
    popup.classList.add('hidden')
})

backDrop.addEventListener('click', (e) => {
    e.preventDefault()
    popup.classList.add('hidden')
})