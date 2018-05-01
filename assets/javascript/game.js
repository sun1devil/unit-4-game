
 //This is broken    //
// Declare Variables //

var numberArray = [19, 20, 21, 22, 23, 24, 25, 26, 27, 28, 29, 30, 31, 32, 33, 34, 35, 36, 37, 38, 39, 40, 41, 42, 43, 44, 45, 46, 47, 48, 49, 50, 51, 52, 53, 54, 55, 56, 57, 58, 59, 60, 61, 62, 63, 64, 65, 66, 67, 68, 69, 70, 71, 72, 73, 74, 75, 76, 77, 78, 79, 80, 81, 82, 83, 84, 85, 86, 87, 88, 89, 90, 91, 92, 93, 94, 95, 96, 97, 98, 99, 100, 101, 102, 103, 104, 105, 106, 107, 108, 109, 110, 111, 112, 113, 114, 115, 116, 117, 118, 119, 120];
var crystalArray = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12];
var winCount = 0;
var lossCount = 0;
var currentValue = 0;
var randomNumber = Math.floor(Math.random() * numberArray.length);
var crystal1 = Math.floor(Math.random() * crystalArray.length);
var crystal2 = Math.floor(Math.random() * crystalArray.length);
var crystal3 = Math.floor(Math.random() * crystalArray.length);
var crystal4 = Math.floor(Math.random() * crystalArray.length);

function start(){
   
    currentValue = 0;
    randomNumber = Math.floor(Math.random() * numberArray.length);
    crystal1 = Math.floor(Math.random() * crystalArray.length);
    crystal2 = Math.floor(Math.random() * crystalArray.length);
    crystal3 = Math.floor(Math.random() * crystalArray.length);
    crystal4 = Math.floor(Math.random() * crystalArray.length);
}

function checkWin(){
    if(currentValue === randomNumber){
        winCount++
        start()
        $('#message').html('Winner! Perfect Match! You are a Genius!');
        displayStats()
    }else if(currentValue > randomNumber){
        lossCount++
        start()
        $('#message').html('Over Valuation! You Lose!');
        displayStats()
    }
}

function displayStats(){
    $('#Wins').html('Wins: ' + winCount);
    $('#losses').html('Losses: ' +  lossCount);
    $('#Current').html('Current score: ' +currentValue);
}

// functions //
$('#begin').on('click', function () {
    start()
    console.log("Target Value=" + randomNumber);
    console.log('Current Score:' + "" + currentValue);
    $('#Start').html('Random Value:' + "" + randomNumber);
})

$('#Crystal1').on('click', function () {
        currentValue += crystal1;
        console.log('Current Score:' + "" + currentValue);
        displayStats()
        checkWin();
    })

    $('#Crystal2').on('click', function () {
        currentValue += crystal2;
        console.log('Current Score:' + "" + currentValue);
        displayStats()
        checkWin();
    })           
        $('#Crystal3').on('click', function () {
            currentValue += crystal3;
            console.log('Current Score:' + "" + currentValue);
            displayStats()
            checkWin();
    })
        $('#Crystal4').on('click', function () {
            currentValue += crystal4;
            console.log('Current Score:' + "" + currentValue);
             displayStats()
            checkWin();
    })
                // Create function for reset game //
                // add timeout method to randomNumber // 
                // link to portfolio page //

                // for loops not used //
                // for (var i=0; i< 101; i++){
                //     console.log(randomNumber);
                //     numberArray.push(randomNumber);
                // }
                // for (vari =0; i< 12; i++){
                //     console.log(crystal1, crystal2, crystal3, crystal4);
                //     crystalArray.push(crystal1, crystal2, crystal3, crystal4);
     
                // If Statements //

                if (currentValue === randomNumber) {
                    
                    winCount++;
                    
                    console.log(wins)
                    // Resetgame //
                } else if (currentValue > randomNumber) {
                   
                  
                    console.log(lossCount)
                    // Resetgame //
                } else {
                    $('#message').html('Good Guess, but not a match! Chose another Crystal');
                }

    //   reset //




//     IGNORE This was my old starting point before starting over will delete after fixing bugs. 
// {/* <script src="https://cdnjs.cloudflare.com/ajax/libs/jquery/3.2.1/jquery.min.js" script type="text/Javascript">
// // <script src= "assets/Javascript.js" script type="text/Javascript">
//     $(document).ready(function)()
// // Javascript here //
// // <!--Declare variables  -->
// var numberArray = [];
// console.log(numberArray)
// var crystalArray = [1,2,3,4,5,6,7,8,9,10,11,12];
// var winCount = 0;
// var lossCount= 0;
// var crystalValue = ["crystalone", "crystaltwo", "crystalthree", "crystalfour"];
// var crystal1 = 3;
// var crystal2 = 5;
// var crystal3 = 12;
// var crystal4 = 10;
// var crystalNumber = crystalArray[Math.floor(Math.random()* crystalArray.length)];                           
// var randomNumber = numberArray[Math.floor(random() * numberArray.length)];
// console.log(randomNumber);
// // var currentTotal = function(randomNumber);
//     console.log(randomNumber);


// // <!-- Functions -->
//     function resetGame(){
//     var randomNumber = numberArray[Math.floor(random() * numberArray.length)];
//     console.log(randomNumber);

// }
// function resetCrystalValue() {
//     var crystalNumber = crystalArray[Math.floor(Math.random()* crystalArray.length)];
//     console.log(crystalNumber)
// }

// for (var i; i< crystalValue.length; i++) {
//     function crystalNumber()
//     console.log(crystalNumber)
// }
// randomNumber()
// //     // logic //
// //     // 
// //     listen for image click
// $("crystal1").click(function())
// console.log(hello)
// //     on key create start value
// //     create crystal value
// //     display for x time and disappear
// //     display message to click crystal
// //     listen for which crystal click
// //     if crystal clicked, sum crystal value and start
// //     if < secret, display guess again
// //     if match secret, display winner, adjust winCount, reset.
// //     if > secret, display loser, adjust lossCount

// // // <!-- jquery --> */}