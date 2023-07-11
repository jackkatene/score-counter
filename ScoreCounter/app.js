const p1 = {
    score: 0,
    button: document.querySelector('#p1Button'),
    display: document.querySelector('#p1Display')
}

const p2 = {
    score: 0,
    button: document.querySelector('#p2Button'),
    display: document.querySelector('#p2Display')
}

const resetButton = document.querySelector('#resetButton');
const winningScoreSelector = document.querySelector('#playToSelect');
let winningScore = 3;
let p1Score = 0;
let p2Score = 0;
let isGameOver = false;

function updateScore (player,opponent) {
    if (!isGameOver) {
        player.score += 1;
        if (player.score === winningScore) {
            isGameOver = true;
            player.display.classList.add('has-text-success')
            opponent.display.classList.add('has-text-danger')
            player.button.disabled = true;
            opponent.button.disabled = true;
        }
        player.display.textContent = player.score;
    }
} 


p1Button.addEventListener('click', function () {
    updateScore(p1,p2)
})
p2Button.addEventListener('click', function () {
    updateScore(p2,p1)
})

resetButton.addEventListener('click', reset)

function reset() {
    isGameOver = false;
    p1.score = 0;
    p2.score = 0;
    p1.display.textContent = p1Score;
    p2.display.textContent = p2Score;
    p1.display.classList.remove('has-text-success', 'has-text-danger')
    p2.display.classList.remove('has-text-success', 'has-text-danger')
    p1.button.disabled = false;
    p2.button.disabled = false;


}

winningScoreSelector.addEventListener('change', function () {
    winningScore = parseInt(winningScoreSelector.value);
    reset()
})