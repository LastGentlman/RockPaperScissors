const paperBtn = document.getElementById('paper-el');
     paperBtn.addEventListener('click', () => {
        paperBtn.classList.add('player-border');
        disapear(paperBtn, 'player-border')
        playGround('Paper', aiPlay());
    });
const scissorsBtn = document.getElementById('scissors-el');
    scissorsBtn.addEventListener('click', () => {
        scissorsBtn.classList.add('player-border');
        disapear(scissorsBtn, 'player-border')
        playGround('Scissors', aiPlay());
    });
const rockBtn = document.getElementById('rock-el')
    rockBtn.addEventListener('click', () => {
        rockBtn.classList.add('player-border');
        disapear(rockBtn, 'player-border')
        playGround('Rock', aiPlay());
    });

let playerHp = document.querySelector('#player-hp');
let aiHp = document.querySelector('#ai-hp');

const iaSelection = document.querySelector('.ia-sel');

const scoreEl = document.querySelector('.score');

function disapear(el, cls) {
    setTimeout(() => {
        el.classList.remove(`${cls}`);
    }, 600);
}

function aiPlay() {
    const paperAi = document.getElementById('paper-ai');
    const scissorsAi = document.getElementById('scissors-ai');
    const rockAi = document.getElementById('rock-ai');
    
    const items = ["Rock", "Scissors", "Paper"];

    let choise = items[Math.floor(Math.random() * items.length)];

    if (choise === "Rock") {
        rockAi.classList.add('ai-border');
        disapear(rockAi, 'ai-border')
    } else if (choise === "Scissors") {
        scissorsAi.classList.add('ai-border');
        disapear(scissorsAi, 'ai-border')
    } else if (choise === "Paper") {
        paperAi.classList.add('ai-border');
        disapear(paperAi, 'ai-border')
    }

    console.log('Ai: ' + choise);
    
    return choise;
}

function playGround(pla, ai) {
    let resetBtn = document.createElement('button');
    resetBtn.textContent = "Replay!";
    resetBtn.addEventListener('click', () => {
        aiHp.value = 5;
        playerHp.value = 5;
        scoreEl.innerHTML = "";
        scoreEl.style.cssText ="color:black; font-weight: normal;"
    })

    if(aiHp.value === 0) {
        scoreEl.textContent = "You Win!";
        scoreEl.style.cssText = "color: Green; font-weight: bold;";
        scoreEl.appendChild(resetBtn);
    } else if(playerHp.value === 0) {
        scoreEl.textContent = "Ai Win!";
        scoreEl.style.cssText = "color: Red; font-weight: bold;";
        scoreEl.appendChild(resetBtn);
    } else if (pla === 'Rock' && ai === 'Paper') {
        playerHp.value--;
        scoreEl.textContent = "Paper beats rock!";
        console.log('Player Lose!');
    } else if (pla === 'Rock' && ai === 'Scissors') {
        aiHp.value--;
        scoreEl.textContent = "Rock beats Scissors!";
        console.log('Player Wins!');
    } else if (pla === 'Paper' && ai === 'Scissors') {
        playerHp.value--;
        scoreEl.textContent = "Scissors beats Paper!";
        console.log('Player Lose!');
    } else if (pla === 'Paper' && ai === 'Rock') {
        aiHp.value--;
        console.log('Player Wins!');
    } else if (pla === 'Scissors' && ai === 'Rock') {
        playerHp.value--;
        scoreEl.textContent = "Rock beats Scissors!";
        console.log('Player Loss!');
    } else if (pla === 'Scissors' && ai === 'Paper') {
        aiHp.value--;
        scoreEl.textContent = "Scissors beats Paper!";
        console.log('Player Wins!');
    } else if (pla === ai) {
        scoreEl.textContent = "Its a tie!";
        console.log('Its a Tie!');
    }
    console.log('Player:' + pla);
}

// function game() {
//     let score = 0;
//     for (let i = 0; i < 5; i++) {
//         playGround(0, aiPlay());
//         score = i;
//     }
// }