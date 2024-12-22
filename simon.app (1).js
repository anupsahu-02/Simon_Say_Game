

let gameSeq = [];
let userseq = [];

let started = false;
let level = 0;

let h3 = document.querySelector('h3');
let btns = ["yellow", "red", "purple", "green"];

let body = document.querySelector('body');
let h4 = document.querySelector('h4');

document.addEventListener('keypress', function() {
    if (started == false) {
        console.log("Game started");
        started = true;
    };

    levelUp();
});

 function btnFlash(btn) {
    btn.classList.add("flash");
    setTimeout(function() {
        btn.classList.remove("flash")
    }, 250);

};

function userFlash(btn) {
    btn.classList.add("userFlash");
    setTimeout(function() {
        btn.classList.remove("userFlash");
    }, 250);

};

function levelUp() {
    level++;
    h3.innerText =(`level ${level}`);

    let randInx = Math.floor( Math.random() * 3 );
    let randColor = btns[randInx];
    let randBtn = document.querySelector(`.${randColor}`)
    gameSeq.push(randColor);

    btnFlash(randBtn);
};

let highLevel = 0;

function checkAns(indx) {
    if ( ( userseq[indx] === gameSeq[indx])) {
        if ( (gameSeq.length == userseq.length) ) {
            levelUp();
            userseq = [];
        };
        
    } else {
        h3.innerHTML = `Game Over! Your Score was <b> ${level} <b/> <br> Press any Keys to re-start.`;
        if(highLevel < level) {
            highLevel = level;
        }
        h4.innerText = `Highest Level = ${highLevel}`;
        gameOver();
        reset();
    };
};

function btnPress() {
    let btn = this;
    
    userColor = btn.getAttribute("id");
    userseq.push(userColor);
    userFlash(btn);

    checkAns(userseq.length - 1 );

};

let allBtns = document.querySelectorAll('.box');
for (btn of allBtns) {
    btn.addEventListener('click', btnPress);
};

if (gameSeq == userseq) {
    console.log("Yes");
};

function reset() {
    started = false;
    gameSeq = [];
    userseq = [];
    level = 0;
};

function gameOver() {
    body.classList.add('overred');
    setTimeout(function() {
        body.classList.remove('overred');
    }, 200 );
};
