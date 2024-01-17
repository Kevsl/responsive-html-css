let myFirstNumber = document.querySelector('.firstNumber')
let mySecondNumber = document.querySelector('.secondNumber')
let myOperator = document.querySelector('.select')
let result = document.querySelector('.result')
let calculButton = document.querySelector('.calcul')
calculButton.addEventListener('click', calculatrice)

result.innerText = 'Mon paragraphe'

function calculatrice() {
  let resultat = ''
  let a = Number(myFirstNumber.value)
  let b = Number(mySecondNumber.value)

  if (myOperator.value == '+') {
    resultat = a + b
  }
  if (myOperator.value == '-') {
    resultat = a - b
  }

  result.innerHTML = resultat
}
