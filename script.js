
let btn = document.querySelectorAll(".box");
let reset = document.querySelector(".reset");
let newBtn=document.querySelector(".new")
let msg=document.querySelector(".msg")
let msgcontainer=document.querySelector(".msg-container")
let turn0 = true; //playerX player Y
let moves=0;

const pattern = [
    [0, 1, 2],
    [0, 3, 6],
    [0, 4, 8],
    [1, 4, 7],
    [2, 5, 8],
    [2, 4, 6],
    [3, 4, 5],
    [6, 7, 8]
];

btn.forEach((box) => {
    box.addEventListener('click', () => {
        // console.log('button was clicked')
        if (turn0 == true) {
            box.innerText = "0"
            turn0 = false;
        } else {
            box.innerText = "X"
            turn0 = true
        }
        box.disabled = "true";
        moves++
        winner();
    })
});
const disable=()=>{
    for(let boxes of btn){
        boxes.disabled=true;
    }
}
const showWinner=(winner)=>{
    msg.innerText=`Congratulations Winner is ${winner}`;
    msgcontainer.classList.remove("hide")
    disable();
}
const noWinner=(winner)=>{
    if(moves===9){
        msg.innerText=`Oops! Draw Try again`
        msgcontainer.classList.remove("hide")
    }
}
const winner = () => {
    for (let i = 0; i < pattern.length; i++) {
        let pos1 = btn[pattern[i][0]].innerText;
        let pos2 = btn[pattern[i][1]].innerText;
        let pos3 = btn[pattern[i][2]].innerText;

        if (pos1 != "" && pos2 != "" && pos3 != "") {
            if (pos1 === pos2 && pos2 === pos3) {
                // console.log("winner", pos1);
                showWinner(pos1);
            }
        }
        noWinner(winner); 
    }
}
const enable=()=>{
    for(let boxes of btn){
        boxes.disabled=false;
        boxes.innerText="";
    }
}
const resetGame=()=>{
    turn0=true;
    enable();
    msgcontainer.classList.add("hide");
}
reset.addEventListener("click",resetGame);
newBtn.addEventListener("click",resetGame);