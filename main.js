var numSquares = 6;
var colors = [];
var colors = generator(numSquares);
var pickedColor;
var squares = document.querySelectorAll(".square");
var reminder = document.querySelector("#message");
var h1s = document.querySelector("#h1");
var bodyBackground = document.getElementById("body");
var rgbColor = document.querySelector(".spn");
var restart =  document.getElementById("btn");
var hidden =  document.getElementById("#hide");
var modeButton = document.querySelectorAll(".mode");//this gives us two classes.


init();

function init(){
    //set mode
    setMode();
    //add event listeners to the squares
    squareButtons();
    //run reset
    reset();
};


function reset(){
    //
    colors = generator(numSquares); 
    pickedColor =pickColor();
    rgbColor.textContent = pickedColor; 
    for(var i=0;i<squares.length;i++){
        if(colors[i]){
            squares[i].style.display = "block";
            squares[i].style.background = colors[i];   
        }
        else{
            squares[i].style.display = "none";
        }
    }
    h1s.style.background =  "steelblue";
    restart.textContent = "New Color";
    reminder.textContent = "";
}

function setMode(){
    //mode buttons event listener
    for(var i = 0; i<modeButton.length; i++){ 
        modeButton[i].addEventListener("click", function(){
            modeButton[0].classList.remove("selected"); 
            modeButton[1].classList.remove("selected");
            this.classList.add("selected")
            this.textContent ==="Easy"? numSquares =3: numSquares =6; 
            reset();
        });
    }
};

function squareButtons(){
        //adding an event listner to every square
    for(var i=0;i<squares.length;i++){
        squares[i].addEventListener("click", function (){
            var clickedColor = this.style.background;
            if(clickedColor ===  pickedColor){
            reminder.textContent = "correct";
            changeColor(squares);
            h1s.style.background = clickedColor;
            restart.textContent = "New Game?";
            } 
            else if(clickedColor !== pickedColor){
                this.style.background = "#232323";
                reminder.textContent = "try again";
            }
        });
    }
};

//writing a single function to change the background of the colors once we select the correct color
function changeColor(color){
    for(var i=0;i<color.length;i++){
        color[i].style.background = pickedColor;
       }
}

function pickColor(){
    var random = Math.floor(Math.random()*colors.length);//this function is meant to pick a random item(color) from the color list
    return colors[random];
}
//how to generate a random list of colors all within strings
function generator(num){//how many colors you want to generate
    var loadColors = []; // for storing the values passed by the number of times entered by user
    for(i=0;i<num;i++){
        loadColors.push(colorMaker());
    }
    return loadColors;
}

function colorMaker(){
    var r = Math.floor(Math.random()*266);//generate random values of red
    var g = Math.floor(Math.random()*266);//generate random values of green
    var b = Math.floor(Math.random()*266);//generate random values of blue
    var toString = "rgb" + "(" + r + ","+" " + g + ","+ " " + b + ")"
    return toString;
}

restart.addEventListener("click", function(){// don't replace the function but rather pass it to the function
    reset();
});

