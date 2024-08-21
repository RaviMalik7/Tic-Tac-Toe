let boxes = document.querySelectorAll(".box");
let reset = document.querySelector(".reset");
let message = document.querySelector(".msg");
let mescontainer = document.querySelector(".afterwin");
let newg = document.querySelector(".newg");

let playero = true;

function disableboxes() {
    for (let box of boxes) {
        box.disabled = true;
    }
}

const patterns = [[0, 1, 2], [3, 4, 5], [6, 7, 8], [0, 3, 6], [1, 4, 7], [2, 5, 8], [0, 4, 8], [2, 4, 6]]

function showwinner(winner) {
    message.innerText = `Congratulations, Winner is ${winner}`;
    mescontainer.classList.remove("hide");
    newg.classList.remove("hide");
    reset.classList.add("hide");
    disableboxes();
}

function checkwinner() {
    for (let pattern of patterns) {
        let pos1 = boxes[pattern[0]].innerText;
        let pos2 = boxes[pattern[1]].innerText;
        let pos3 = boxes[pattern[2]].innerText;
        if (pos1 != "" && pos2 != "" && pos3 != "") {
            if (pos1 == pos2 && pos2 == pos3) {
                showwinner(pos1);
                return true;
            }
        }
    }
}

for (const box of boxes) {
    box.addEventListener("click", () => {
        if (playero) {
            box.innerText = "o";
            playero = false;
        }
        else {
            box.innerText = "x";
            playero = true;
        }
        box.disabled = true;
        checkwinner();

    })
}


reset.addEventListener("click", () => {
    for (const box of boxes) {
        playero = true;
        box.disabled = false;
        box.innerText = "";
        mescontainer.classList.add("hide");
        newg.classList.add("hide");
    }
})

newg.addEventListener("click", () => {
    for (const box of boxes) {
        playero = true;
        box.disabled = false;
        box.innerText = "";
        mescontainer.classList.add("hide");
        reset.classList.remove("hide");
        newg.classList.add("hide");
    }
})