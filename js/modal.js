let burgerButton = document.querySelector('.burgerIcon')
let modal = document.querySelector('.modal')
let closeIcon = document.querySelector('.closeIcon')
let SpoticloneBody = document.querySelector('.main')

burgerButton.addEventListener('click', displayModal)
closeIcon.addEventListener('click', displayModal)

function displayModal() {
  modal.classList.toggle('block')
  closeIcon.classList.toggle('block')
  SpoticloneBody.classList.toggle('none')
}
