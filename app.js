let boxes = document.querySelectorAll(".box"); // Changed to querySelectorAll
let resetBtn = document.querySelector("#reset-btn"); // Fixed the typo in 'document'
let newGameBtn = document.querySelector("#new-btn");
let msgContainer =document.querySelector(".msg-container");
let msg = document.querySelector("#msg");


let turno = true; // player0 is '0', player1 is 'X'


// Win patterns for checking the winner
const winPatterns = [
    [0, 1, 2],
    [0, 3, 6],
    [0, 4, 8],
    [1, 4, 7],
    [2, 5, 8],
    [2, 4, 6],
    [3, 4, 5],
    [6, 7, 8],
];


const resetGame = () =>{
    trueo = true;
    enablesBoxes();
    msgContainer.classList.add("hide");

    
};


boxes.forEach((box) =>{
    box.addEventListener("click", () =>{
        console.log("box was clicked");
        if(turno){
            //player0
            box.innerText ="o";
            turno = false;  //agle baar o print na ho
        } else {
            //playerx
            box.innerText ="x";
            turno =true; ////agle baar x print na ho
        }
        box.disabled =true; //dubara click karne pe add na ho x and o

        checkWinner();
    });
});


const disableBoxes = () =>{
    for(let box of boxes){
        box.disabled =true;
    }
};

const enablesBoxes = () =>{
    for(let box of boxes){
        box.disabled =false;
        box.innerText=""; 
    }
};


const showWinner =(winner) =>{
    msg.innerText =`Congratulation, Winner is ${winner}`;
    msgContainer.classList.remove("hide");
    disableBoxes();
}

const checkWinner = () =>{
    for(let pattern of winPatterns){
        let pos1Val =boxes[pattern[0]].innerText;
        let pos2Val =boxes[pattern[1]].innerText;
        let pos3Val =boxes[pattern[2]].innerText;

        if(pos1Val !="" && pos2Val !="" && pos3Val !=""){
            if(pos1Val ===pos2Val && pos2Val ===pos3Val){
                 console.log("winner", pos1Val);

                 showWinner(pos1Val);
            }
        }
    }
};


newGameBtn.addEventListener("click" , resetGame);
resetBtn.addEventListener("click" , resetGame);
