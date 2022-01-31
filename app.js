const paperBtn = document.getElementById('1')
                .addEventListener('click', playGround('paper'));
const scissorsBtn = document.getElementById('2')
                .addEventListener('click', playGround('scissors'));
const rockBtn = document.getElementById('3')
                .addEventListener('click', playGround('rock'));

const iaSelection = document.querySelector('ia-sel');

function aiPlay() {
    let choices = ['Rock', 'Paper', 'Scissors'];
    let choice = choices[Math.floor(Math.random() * choices.length)];

    console.log('ai: ' + choice);
    return choice;
}

function playGround(pla) {
   console.log(`${pla} clicked!`);
}

function game() {
    let score = 0;
    for (let i = 0; i < 5; i++) {
        playGround(0, aiPlay());
        score = i;
    }
}