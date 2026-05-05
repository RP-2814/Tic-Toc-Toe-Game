let boxes = document.querySelectorAll('.Box');
let resetBtn = document.querySelector('#reset-btn');
let playAgainBtn = document.querySelector('#play-again-btn');
let msgContainer = document.querySelector('.msg-container');
let message = document.querySelector('#message');

let turnO = true; 

const winCombos = [
    [0, 1, 2], 
    [3, 4, 5], 
    [6, 7, 8], 
    [0, 3, 6], 
    [1, 4, 7], 
    [2, 5, 8], 
    [0, 4, 8], 
    [2, 4, 6] 
];

boxes.forEach(box => {
    box.addEventListener('click', () => {
        console.log('Box clicked');
       if(turnO){ 
        box.textContent = 'O';
        turnO = false;
       } else {
        box.textContent = 'X';
        turnO = true;
       }
       box.disabled = true; 

       checkWiner(); 
    });
});
const winnerMsg = (winner) => {
    message.innerText = `${winner} Congratulations! You are the winner.`;
    msgContainer.classList.remove('hidden');
}

const checkWiner = () => {
    let winnerFound = false;

      for(let pattern of winCombos){
        let box1 = boxes[pattern[0]].innerText;
        let box2 = boxes[pattern[1]].innerText;
        let box3 = boxes[pattern[2]].innerText;
    
        if(box1 !== ''  && box2 !== '' && box3 !== ''){
            if(box1 === box2 && box2 === box3){
                console.log('Winner found!', box1);
                winnerMsg(box1);
                winnerFound = true;
                break;
            }
        }
    }

    if(!winnerFound){
        let draw = true;

        boxes.forEach(box => {
            if(box.innerText === ''){
                draw = false;
            }
        });
        if(draw){
            message.innerText = "It's a draw!";
            msgContainer.classList.remove('hidden');
            helperMsg.classList.add('hidden');
        }

        // msgContainer.classList.remove('hidden');
    }
};

// Reset button click handler
resetBtn.addEventListener('click', () => {
    boxes.forEach(box => {
        box.textContent = '';
        box.disabled = false;
    });
    turnO = true;
    // msgContainer.classList.add('hidden');
});

// Play again button click handler
playAgainBtn.addEventListener('click', () => {
    boxes.forEach(box => {
        box.textContent = '';
        box.disabled = false;
    });
    turnO = true;
    msgContainer.classList.add('hidden');
    helperMsg.classList.add('hidden');
});