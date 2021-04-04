/* JavaScript - Project Etch a Sketch */
const body = document.querySelector("body");

const container = document.createElement("div");
container.setAttribute("id","container");
body.appendChild(container);

const title = document.createElement("h1");
title.textContent = "Etch-A-Sketch";
container.appendChild(title);

const box = document.createElement("div");
box.setAttribute("id","box");
box.style.background = "lightblue";
container.appendChild(box);


function createSquares(num){
    box.style.gridTemplateColumns = 'repeat(' + num + ', 1fr)';
    box.style.gridTemplateRows = 'repeat(' + num + ', 1fr)';
    let squareCount = num * num;
    for(var i = 1; i <= squareCount; i++){
        let square = document.createElement("div");
        square.classList.add("square");
        square.addEventListener("mouseover", function(){
            square.style.backgroundColor = getRandomColor();
        });
        box.appendChild(square);
    }
}

const btn = document.createElement("button");
btn.innerHTML = "Click";
btn.setAttribute("id", "btn");
container.appendChild(btn);
btn.addEventListener("click", function(){
    box.innerHTML = "";
    let input = prompt("Geben Sie die Anzahl Quadrate ein.");
    input = parseInt(input);
    createSquares(input);
}); 



function getRandomColor(){
    var letters = "0123456789ABCDEF";
    var color = "#";
    for (var j = 0; j < 6; j++){
        color += letters[Math.floor(Math.random() * 16)];
    }
    return color;
}

// Styling
title.style.padding = "0.5em 0 0 0";
btn.style.margin = "1em 0 1em 0";
