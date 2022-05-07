// import functions and grab DOM elements
import { renderGoblin } from './utils.js';
const goblinArea = document.getElementById('goblinArea');
const resetButtonDiv = document.getElementById('resetButtonDiv');
const resetButton = document.getElementById('resetButton');
const formArea = document.getElementById('formArea');
const hpDiv = document.getElementById('hpDiv');
const goblinName = document.getElementById('goblinName');
const goldDiv = document.getElementById('goldDiv');

// let state
let goblinArr = [
    {
        name: 'Alvin',
        hp: 5,
        accuracy: 6,
        strength: 2
    },
    {
        name: 'Beatrice',
        hp: 3,
        accuracy: 4,
        strength: 1
    }
];
let accuracy = 7;
let strength = 1;
let hp = 10;
// set event listeners 
  // get user input
  // use user input to update state 
  // update DOM to reflect the new state

function displayGoblins() {
    goblinArea.textContent = '';
    for (let goblin of goblinArr) {
        const newGobbo = renderGoblin(goblin);
        newGobbo.addEventListener('click', () => {
            if (goblin.hp === 0) return;
            if (hp <= 0) return;

            const random = Math.ceil(Math.random() * 10);
            if (random < accuracy) {
                alert(`You hit ${goblin.name} for ${strength} damage!`);
                goblin.hp -= strength;
                if (goblin.hp <= 0) {
                    goblin.hp = 0;
                    alert(`You killed ${goblin.name}! Their gold is yours.`);
                    const gold = document.createElement('img');
                    gold.src = './assets/goldcoins.jpg';
                    gold.alt = 'bag of gold coins';
                    goldDiv.append(gold);
                    displayGoblins();
                    return;
                }
                displayGoblins();       
            } else {
                alert(`You missed ${goblin.name}!`);
            }
            const random2 = Math.ceil(Math.random() * 10);
            if (random2 < goblin.accuracy) {
                alert(`${goblin.name} strikes you for ${goblin.strength} damage!`);
                hp -= goblin.strength;
                hpDiv.textContent = hp;
                if (hp <= 0) {
                    alert(`The goblins have prevailed. You lose. Don't do drugs.`);
                    resetButtonDiv.classList.toggle('hide');
                    formArea.classList.toggle('hide');
                    hpDiv.classList.toggle('dead');
                }
            } else {
                alert(`${goblin.name} missed!`);
            }
        });
        goblinArea.append(newGobbo);
    }
    hpDiv.textContent = hp;
}

formArea.addEventListener('submit', (e) => {
    e.preventDefault();
    const dude = {
        name: goblinName.value,
        hp: Math.ceil(Math.random() * 5),
        accuracy: Math.ceil(Math.random() * 8),
        strength: Math.ceil(Math.random() * 2)
    };
    goblinArr.push(dude);
    formArea.reset();
    displayGoblins();
});

resetButton.addEventListener('click', () => {
    hp = 10;
    goblinArr = [
        {
            name: 'Alvin',
            hp: 5,
            accuracy: 6,
            strength: 2
        },
        {
            name: 'Beatrice',
            hp: 3,
            accuracy: 4,
            strength: 1
        }
    ];
    resetButtonDiv.classList.toggle('hide');
    goblinArea.classList.toggle('hide');
    formArea.classList.toggle('hide');
    hpDiv.classList.toggle('dead');
    goldDiv.textContent = '';
    displayGoblins();
});

displayGoblins();
