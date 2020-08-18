var colors = generateRandomColors(6);

var squares = document.querySelectorAll(".square");
var pickedColor = pickedColors();
var messageDisplay = document.querySelector("#message");
var h1 = document.querySelector("h1");
var switchColor = document.querySelector("#switchColor");

document.querySelector("#colorDisplay").textContent = pickedColor;

for (var i = 0; i < squares.length; i++){
    //add initial colors to squares
    squares[i].style.backgroundColor = colors[i];

    //add click listeners to squares 
    squares[i].addEventListener("click", function(){
        if (this.style.backgroundColor === pickedColor){
            messageDisplay.textContent = "Correct!";
            h1.style.backgroundColor = pickedColor;
            changeColors(pickedColor);
            switchColor.textContent = "Play Again?"
        }
        else{
            this.style.backgroundColor = "#232323"
            messageDisplay.textContent = "Try Again";
        }
    });
}

function pickedColors(){
    return colors[Math.floor(Math.random() * colors.length)];
}

switchColor.addEventListener("click", function(){
    colors = generateRandomColors(6);
    pickedColor = pickedColors();
    document.querySelector("#colorDisplay").textContent = pickedColor;
    messageDisplay.textContent = "";
    for (var i = 0; i < squares.length; i++){
        //add initial colors to squares
        squares[i].style.backgroundColor = colors[i];
    }
    switchColor.textContent = "New Colors"
    h1.style.backgroundColor = "#232323";
})

function changeColors(color){
    for (var i = 0; i < colors.length; i++){
        squares[i].style.backgroundColor = color;
    }
}



function generateRandomColors(num){
    var arr = [];

    for (var i = 0; i < num; i++){
        arr.push(generateRandomColor())
    }

    return arr;
}

function generateRandomColor(){
    return "rgb(" + Math.floor(Math.random() * 256) + ", " + Math.floor(Math.random() * 256) + ", " + Math.floor(Math.random() * 256) + ")";
}