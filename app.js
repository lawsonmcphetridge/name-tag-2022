const myName = document.getElementById('myName');

const buttonPress = document.getElementById('bestButton');

const inputName = document.getElementById('yourName');

const secondButton = document.getElementById('secondButton');

const nameForm = document.getElementById('nameForm');

function submitForm(e) {
    e.preventDefault();
}

function changeColor() {
    let colors = ['blue', 'yellow', 'black', 'red', 'brown', 'orange'];

    const randomColor = colors[Math.floor(Math.random() * colors.length)];

    let topNameTag = document.getElementById('topNameTag');
    topNameTag.style.background = randomColor;

    let bottomNameTag = document.getElementById('bottomNameTag');
    bottomNameTag.style.background = randomColor;
}

const changeName = () => {
    const value = yourName.value;
    myName.textContent = value;
};


buttonPress.addEventListener('click', changeName);

secondButton.addEventListener('click', changeColor);

nameForm.addEventListener('submit', submitForm);

console.log('fd')


