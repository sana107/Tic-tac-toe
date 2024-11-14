let boxes = document.querySelectorAll(".box");
let reset = document.querySelector("#reset")
let newgamebtn = document.querySelector("#new_game")
let msgcontainer = document.querySelector(".msg-container")
let msg = document.querySelector("#msg")

let turnO = true;

const winning = [
    [0, 1, 2],
    [0, 3, 6],
    [0, 4, 8],
    [1, 4, 7],
    [2, 5, 8],
    [2, 4, 6],
    [3, 4, 5],
    [6, 7, 8],
];

const resetGame = () => {
    turnO = true;
    enableBoxes();
    msgcontainer.classList.add("hide");
}


boxes.forEach((box => {
    box.addEventListener("click", () => {
        console.log("box was clicked");
        console.log(turnO)
        if (turnO) {//player O turn
            box.innerHTML = "O";
            turnO = false;
            console.log(turnO)
        } else {//player X turn
            box.innerHTML = "X";
            turnO = true;
        }
        box.disabled = true;

        checkwinner();
    });

}))

const disableBoxes = () => {
    for (let box of boxes) {
        box.disabled = true;
    }
};

const enableBoxes = () => {
    for (let box of boxes) {
        box.disabled = false;
        box.innerText = "";
    }
};

const showWinner = (winner) => {
    msg.innerHTML = `Congratulations,Winner is ${winner}`;
    msgcontainer.classList.remove("hide");
    disableBoxes();
};

const checkwinner = () => {

    for (let pattern of winning) {

        let pos1 = boxes[pattern[0]].innerText;
        let pos2 = boxes[pattern[1]].innerText;
        let pos3 = boxes[pattern[2]].innerText;


        if (pos1 != "" && pos2 != "" && pos3 != "") {
            if (pos1 === pos2 && pos2 === pos3) {
                console.log("winner", pos1)
                showWinner(pos1);
                // return true;
            }

        }

    }

};

newgamebtn.addEventListener("click", resetGame);

reset.addEventListener("click", resetGame);



