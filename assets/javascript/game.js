

// Declare Variables //
var numberArray = [19,20,21,22,23,24,25,26,27,28,29,30,31,32,33,34,35,36,37,38,39,40,41,42,43,44,45,46,47,48,49,50,51,52,53,54,55,56,57,58,59,60,61,62,63,64,65,66,67,68,69,70,71,72,73,74,75,76,77,78,79,80,81,82,83,84,85,86,87,88,89,90,91,92,93,94,95,96,97,98,99,100,101,102,103,104,105,106,107,108,109,110,111,112,113,114,115,116,117,118,119,120];
var crystalArray = [1,2,3,4,5,6,7,8,9,10,11,12];
var winCount = 0;
var lossCount= 0;
var currentValue = randomNumber + crystalValue;
var randomNumber = numberArray[Math.floor(random() * numberArray.length)];  
var crystal1 = crystalArray[Math.floor(random() * crystalArray.length)];  
var crystal2 = crystalArray[Math.floor(random() * crystalArray.length)];  
var crystal3 = crystalArray[Math.floor(random() * crystalArray.length)];  
var crystal4 = crystalArray[Math.floor(random() * crystalArray.length)];   
// functions //

// for loops //
for (var i=0; i< 101; i++){
    console.log(randomNumber);
    numberArray.push(randomNumber);
}
for (vari =0; i< 12; i++){
    console.log(crystal1, crystal2, crystal3, crystal4);
    crystalArray.push(crystal1, crystal2, crystal3, crystal4);
}
// If Statements //

    if (currentValue == randomNumber){
    $('#message').text('Winner! Perfect Match! You are a Genius!');
    winCount ++;
    $('#Wins').text(winCount);
    console.log(wins)
    // $('#crystals').empty();
    // newCrystals();
    // newGame();
    } 
    else if ( currentValue > numberToGuess){
        $('#message').text('Over Valuation! You Lose!');
      lossCount ++;
      $('#losses').text(lossCount);
      console.log(lossCount)
    }
    else{
        $('#message').text('Good Guess, but not a match! Chose another Crystal');
    }
    
    //   $('#crystals').empty();
    //   newCrystals();
    //   newGame();






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