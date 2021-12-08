function aiPlay() {
    let choices = ['Rock', 'Paper', 'Scissors'];
    let choice = choices[Math.floor(Math.random() * choices.length)];

    console.log('ai: ' + choice);
    return choice;
}

function playGround(pla, ai) {
    pla = prompt("What's ur choise?");
    if (pla === 'Rock' && ai === 'Paper') {
        console.log('You have lost :(');
    } else if (pla === 'Paper' && ai === 'Scissors') {
        console.log('You have lost :(');
    } else if (pla === 'Scissors' && ai === 'Rock') {
        console.log('You have lost :(');
    } else if (pla === 'Rock' && ai === 'Rock'){
        console.log('Its a Draw :/');
    } else if (pla === 'Paper' && ai === 'Paper') {
        console.log('Its a Draw :/');
    } else if (pla === 'Scissors' && ai === 'Scissors') {
        console.log('Its a Draw :/');
    } else if (pla === 'Rock' && ai === 'Scissors'){
        console.log('U Win!! :)');
    }  else if (pla === 'Paper' && ai === 'Rock'){
        console.log('U Win!! :)');
    }  else if (pla === 'Scissors' && ai === 'Paper'){
        console.log('U Win!! :)');
    } else {
        console.log('Unespected Error');
    }
}

function game() {
    let score = 0;
    for (let i = 0; i < 5; i++) {
        playGround(0, aiPlay());
        score = i;
    }
}
game()