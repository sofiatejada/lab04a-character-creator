// import functions
import { setCharge, setMood, setPoki, setImage } from './functions.js';

// grab DOM elements for forms
const chargeMenu = document.getElementById('charge-menu');
const moodMenu = document.getElementById('mood-menu');
const pokiMenu = document.getElementById('poki-menu');


// grab DOM elements for placeholders
const charge = document.getElementById('charge');
const mood = document.getElementById('mood');
const poki = document.getElementById('pokemon');
const robotName = document.getElementById('robot-name');
const bodyBack = document.getElementById('body-back');


//grab DOM elements for input
const nameInput = document.getElementById('name-input');


//grab DOM elements for button
const submit = document.getElementById('submit');


// set event listener for submit button
submit.addEventListener('click', () => {
    robotName.textContent = nameInput.value;
    charge.src = setCharge(chargeMenu.value);
    mood.src = setMood(moodMenu.value);
    poki.src = setPoki(pokiMenu.value);

    //create change in background depending on what pokemon was chosen
    let green = '#38A3A5';
    let blue = '#00B4D8';
    let orange = '#ff9b42';
    if (setImage(setPoki(pokiMenu.value)) === 'bulbasaur') {
        bodyBack.style.background = green;
    } else if (setImage(setPoki(pokiMenu.value)) === 'squirtle') {
        bodyBack.style.background = blue;
    } else if (setImage(setPoki(pokiMenu.value)) === 'charmander') {
        bodyBack.style.background = orange;
    }
});


