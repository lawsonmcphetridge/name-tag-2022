const myName = document.getElementById('myName')

const buttonPress = document.getElementById('bestButton')

const inputName = document.getElementById('yourName')

const secondButton = document.getElementById('secondButton')

buttonPress.addEventListener ('click', () => {
  const value = yourName.value;
  myName.textContent = value;
});

secondButton.addEventListener ('click', function(){
let colors = ['blue', 'yellow', 'black', 'red', 'brown', 'orange'];
const randomColor = colors[Math.floor(Math.random() * colors.length)]
let topNameTag = document.getElementById('topNameTag');
topNameTag.style.background = randomColor;
let bottomNameTag = document.getElementById('bottomNameTag');
bottomNameTag.style.background = randomColor;

});
