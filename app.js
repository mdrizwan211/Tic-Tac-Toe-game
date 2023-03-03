const xtext= document.getElementById("xtext");
const otext= document.getElementById("otext");
const block= document.querySelectorAll(".input");
const rematch= document.getElementById("rematch");
const reset= document.getElementById("reset");
 
let turn= "X";
let gameover= false;
let winner= "";
let xwins= 0;
let owins= 0;

const win = [
    [0, 1, 2],
	[3, 4, 5],
	[6, 7, 8],
	[0, 3, 6],
	[1, 4, 7],
	[2, 5, 8],
	[0, 4, 8],
	[2, 4, 6]
];

//Changing the turn

function changeturn(){
return turn=="X" ? "O" : "X";

}

//Start the game by adding event listener to all blocks
function startGame(){

    block.forEach(btn =>{
        btn.addEventListener("click",function takeInput(){
            if(btn.textContent==="")
            {
                btn.textContent= turn;
                turn= changeturn();
                btn.removeEventListener("click",takeInput)
                checkWin();
                if(gameover)
                {
                    endgame();
                }
            }
    })
})
}

//Checking if anyone won

function checkWin(){
    win.forEach(e =>{
        if((block[e[0]].textContent === block[e[1]].textContent) && (block[e[0]].textContent === block[e[2]].textContent) && (block[e[0]].textContent !== ""))   
        {
            winner= block[e[0]].textContent;
            gameover=true;
            if(winner==="X")
            {
                xwins++;
            }
            else
            {
                owins++;
            }
            // alert(winner + "wins")
            xtext.textContent=xwins;
            otext.textContent=owins;
            display();
        }   
    })
}
 
//displaying the winner ont he screen

function display(){
    document.getElementById("final").style.visibility= "visible";
    if(winner==="X")
        {
        document.getElementById("winner").textContent= "X Wins";
        }
    else
        {
        document.getElementById("winner").textContent= "O Wins";
        }
}

//rematch with no change in scores

rematch.addEventListener("click",()=>{
    document.getElementById("final").style.visibility= "hidden";
    endgame();
    
})

//rematch starting with scores=0

reset.addEventListener("click",()=>{
    document.getElementById("final").style.visibility= "hidden";
    xwins=0;
    owins=0;
    xtext.textContent=xwins;
    otext.textContent=owins;
    endgame();
    
})

// end game when winner is found

function endgame(){
    turn= "X";
    gameover= false;
    winner= "";
    block.forEach(e =>{
        e.textContent="";
    })
    startGame();
}

startGame();

