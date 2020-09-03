///////create a big square
let firstSquare = document.getElementById('c1');

//square datas
item1 = 400; // l
item2= 400; // L

function squareBig () { 
    //positioned randomly each time you reload
    let x = Math.floor(Math.random() * Math.floor(1000)) + "px"
    let y = Math.floor(Math.random() * Math.floor(400)) + "px"
    l = item1 + "px";
    L = item2 + "px";
    //attribute style
    document.getElementById('c1').style.width = L;
    document.getElementById('c1').style.height = l;
    document.getElementById('c1').style.marginLeft = x;
    document.getElementById('c1').style.marginTop = y;
    document.getElementById('c1').style.backgroundColor = "blue";
}

//display it
window.onload = function() {
         document.getElementById('firstSquare', squareBig())
      };


////////create 4 medium sqares
let secondSquares = document.getElementsByClassName('c2');
 
function squareMedium () { 
    for(let i = 0; i < secondSquares.length; i++) {

        //function to attribute random colors
        function randomColor() {
        let randomRed = Math.floor(Math.random() * 255);
        let randomGreen = Math.floor(Math.random() * 255);
        let randomBlue = Math.floor(Math.random() * 255);
        //create the string that is the random color’
        let randomColor = "rgb("+randomRed+","+randomGreen+","+randomBlue+")";
        return randomColor;
        }
        //"positioned randomly each time you reload
        let x4 = Math.floor(Math.random() * Math.floor(1500)) + "px"
        let y4 = Math.floor(Math.random() * Math.floor(50)) + "px"
        l4 = (item1/4) + "px";
        L4 = (item2/4) + "px";
        //attribute style
        secondSquares[i].style.width = l4;
        secondSquares[i].style.height = L4;
        secondSquares[i].style.marginLeft = x4;
        secondSquares[i].style.marginTop = y4;
        secondSquares[i].style.backgroundColor = randomColor();
        
        }   
}

//remove big square on click
 firstSquare.addEventListener('click', () => {
    if (getComputedStyle(firstSquare).display != "none") {
        firstSquare.style.display = "none";

        document.getElementsByClassName('secondSquares', squareMedium())
    }
} )   

///////create 4 small squares
let thirdSquares = document.getElementsByClassName('c3');

    function squareSmall() { 
        for(let i = 0; i <= thirdSquares.length; i++) {
            //function to attribute random colors
            function randomColor() {
                let randomRed = Math.floor(Math.random() * 255);
                let randomGreen = Math.floor(Math.random() * 255);
                let randomBlue = Math.floor(Math.random() * 255);
                //create the string that is the random color’
                let randomColor = "rgb("+randomRed+","+randomGreen+","+randomBlue+")";
                return randomColor;
                }
            //"positioned randomly each time you reload
             let x8 = Math.floor(Math.random() * Math.floor(1500)) + "px"
             let y8 = Math.floor(Math.random() * Math.floor(150)) + "px"
             l8 = (item1/8) + "px";
             L8 = (item2/8) + "px";
            //attribute style
            thirdSquares[i].style.width = l8;
            thirdSquares[i].style.height = L8;
            thirdSquares[i].style.marginLeft = x8;
            thirdSquares[i].style.marginTop = y8;
            thirdSquares[i].style.backgroundColor = randomColor();
        }        
}

//on click they split in 4 squares
     for(let i = 0; i < secondSquares.length; i++) {
          secondSquares[i].addEventListener('click', () => {  
            if (getComputedStyle(secondSquares[i]).display != "none") {
                secondSquares[i].style.display = "none";
                document.getElementsByClassName('thirdSquares', squareSmall())
            }
        }
    ) 
} 

///////Add crazy move with double click
const crazyMove = document.getElementById('container');

let numDoubleClicks = 0;

crazyMove.addEventListener('dblclick', () => {

    numDoubleClicks = numDoubleClicks +1
    if (numDoubleClicks === 1) {
        crazy =  setInterval(
        function(){
            for(let i = 0; i < thirdSquares.length; i++) {
            let x8 = Math.floor(Math.random() * Math.floor(1500)) + "px"
            let y8 = Math.floor(Math.random() * Math.floor(50)) + "px"
            thirdSquares[i].style.marginLeft = x8;
            thirdSquares[i].style.marginTop = y8;
            }}, 2000);
            return crazy
        }    
    if (numDoubleClicks === 2){
            clearInterval(crazy);
            numDoubleClicks = 0;
        }
    }
);
