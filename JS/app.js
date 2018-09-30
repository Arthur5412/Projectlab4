'use strict';

var correctAnswers = 0;

var game = prompt('Lets play a game! Whats your name?');
console.log(game.toUpperCase());
var gameresponse = ' Awesome ' + game + ' lets start! ';
alert(gameresponse);



var color = prompt('Is my favourite color bule?');
console.log(color.toUpperCase());
var colorYes = 'My favourite color is black';
var colorNo = 'you are not right';

if (color.toUpperCase() === 'YES') {
  alert(colorYes);
} else {
  correctAnswers++;
  alert(colorNo);
}


var pet = prompt('Do I have a pet?');
console.log(pet.toUpperCase());
var petYes = 'Yes! I got a pet and his name is gulliver';
var petNo = 'I actually you are not right';

if (pet.toUpperCase() === 'YES') {
  correctAnswers++;
  alert(petYes);
} else {
  alert(petNo);
}


var skydived = prompt('Have I ever skydived?');
console.log(skydived.toUpperCase());
var skydivedyes = 'i have never skydived';
var skydivedno = 'this time i dont agree with you ';

if (skydived.toUpperCase() === 'yes') {
  correctAnswers++;
  alert(skydivedyes);
} else {
  alert(skydivedno);
}

var run = prompt('Have i ever run 11 miles in 1 hours?');
console.log(run.toUpperCase());
var runYes = 'I have run those miles';
var runNo = 'You are close but ,i disagree.';

if (run.toUpperCase() === 'YES') {
  correctAnswers++;
  alert(runYes);
} else {
  alert(runNo);
}


var tries = 0;
var myFavoriteNumber = 3;
while (tries < 4) {
  var myFavoriteNumberAnswer = prompt('What is my favorite number?');
  tries = tries + 1;

  if(myFavoriteNumberAnswer < myFavoriteNumber){
    alert('That guess is too low!');
  }else if (myFavoriteNumberAnswer > myFavoriteNumber) {
    alert('that guess is too high!');
  }else{
    correctAnswers++;
    alert('That guess is correct! My favority number is ' + myFavoriteNumber);
    break;
  }

}



var favmusic = ['hip hop', 'country', 'electronic', 'house'];


var tries = 0;
while (tries < 6) {
  var fav = prompt('What is my favorite music?');
  tries = tries + 1;
  var correctAnswer = false;
  for(var i=0;i<favmusic.length;i++){
    if (fav === favmusic[i]) {
      correctAnswer = true;
      break;
    }
  }

  if(correctAnswer){
    correctAnswers++;
    alert('That is right! ' + favmusic.join(', ') + ' these are all my choices and you guessed right!');
    break;
  }

  alert('oops, that is wrong');


}
alert(game + ' you got ' + correctAnswers + ' correct answers out of 7! Thanks for playing! ');
