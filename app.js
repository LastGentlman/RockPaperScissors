const paperBtn = document.getElementById('paper-el')
                .addEventListener('click', () => {
                    playGround('Paper', aiPlay());
                });
const scissorsBtn = document.getElementById('scissors-el')
                .addEventListener('click', () => {
                    playGround('Scissors', aiPlay());
                });
const rockBtn = document.getElementById('rock-el')
                .addEventListener('click', () => {
                    playGround('Rock', aiPlay());
                });

const iaSelection = document.querySelector('.ia-sel');

const scoreEl = document.querySelector('.score');

const choice = document.createElement('p');

function aiPlay() {
    const choicesImgs = new Array();

        choicesImgs[0] = new Image();
        choicesImgs[0].src = './imgs/rock.png';

        choicesImgs[1] = new Image();
        choicesImgs[1].src = './imgs/paper.png';

        choicesImgs[2] = new Image();
        choicesImgs[2].src = './imgs/scissors.png';

    iaSelection.appendChild(choice);
    choice.textContent = `${choicesImgs[Math.floor(Math.random() * choicesImgs.length)]}`;

    console.log('ai: ' + choice);
    return choice;
}

function playGround(pla, ai) {
    if (pla === 'Rock' && ai === 'Paper') {
        console.log('Player Lose!');
    } else if (pla === 'Rock' && ai === 'Scissors') {
        console.log('Player Wins!');
    } else if (pla === 'Paper' && ai === 'Scissors') {
        console.log('Player Lose!');
    } else if (pla === 'Paper' && ai === 'Rock') {
        console.log('Player Wins!');
    } else if (pla === 'Scissors' && ai === 'Rock') {
        console.log('Player Loss!');
    } else if (pla === 'Scissors' && ai === 'Paper') {
        console.log('Player Wins!');
    }
    console.log('Player:' + pla)
}

function game() {
    let score = 0;
    for (let i = 0; i < 5; i++) {
        playGround(0, aiPlay());
        score = i;
    }
}