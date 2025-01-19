const emojiDetails = [
    {
        description : "Smiling face with sunglases",
        emoji : "😎",
    },
    {
        description : "Thumbs up",
        emoji : "👍",
    },
    {
        description : "Heart eyes",
        emoji : "😍",
    },
    {
        description : "Crying face",
        emoji : "😥",
    },
    {
        description : "Party popper",
        emoji : "🥳",
    },
]

let currentEmojiIndex = 0;
let score = 0;
let seconds = 30;
let timer;

const timer_element = document.getElementById('timer');
const guess_input = document.getElementById('guess-input');
const result_element = document.getElementById('result');
const score_element = document.getElementById('score');

function displayEmoji(){
    const description_element = document.getElementById('description');
    description_element.textContent = emojiDetails[currentEmojiIndex].emoji;
    timer_element.textContent = `Time: ${seconds}s`;
}

function checkGuess(){
    const guess = guess_input.value.trim().toLowerCase();
    const correctEmoji = emojiDetails[currentEmojiIndex].description.trim().toLowerCase();
    if(guess == correctEmoji){
        score++;
        result_element.textContent = "Correct!";
        result_element.style.color = "green";
    }
    else{
        result_element.textContent = "Incorrect!";
        result_element.style.color = "red";
    }
    score_element.textContent = `Score: ${score}`;
    guess_input.value = '';
    guess_input.focus();
    nextEmoji();
}

function nextEmoji(){
    setTimeout(()=>{
    result_element.textContent = "";
    },1000);
    currentEmojiIndex++;
    if(currentEmojiIndex == emojiDetails.length){
        currentEmojiIndex = 0;
    }
    displayEmoji();
}

document.getElementById('guess-input').addEventListener('keydown', (event) => {
    if (event.key === 'Enter') {
        checkGuess();
    }
});

document.addEventListener('DOMContentLoaded',()=>{
    displayEmoji();
    startTimer();
});

function startTimer(){
    timer = setInterval(() => {
        seconds--;
        timer_element.textContent = `Time: ${seconds}s`;
        if(seconds <= 0){
            endGame();
        }
    },1000);
}

function endGame(){
    clearInterval(timer);
    guess_input.disabled = true;
    timer_element.textContent="";    
}