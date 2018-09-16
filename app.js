
               'use strict';
               function myFirstName(){
               var myname =prompt('what is your name?');
               var realName=myname.toUpperCase();
               console.log('name ' + realName);
               alert('Hi ' + myname + ' good to have you');
             alert('we are going to play a guessing game yes or no.');
               }
               myFirstName();
               function TraveledBefore()
               {
              var Traveled = prompt('have i traveled before?');
              var haveTraveled = Traveled.toUpperCase();
              if(haveTraveled === 'YES' || haveTraveled === 'Y')
              {
                  console.log('have Traveled ' + haveTraveled);
                  alert('you are right i have Traveled');
              }else if( haveTraveled === 'NO' ||  haveTraveled === 'N'){
              console.log('have not traveled ' +  haveTraveled);
              alert('you are not right this time');
              }
              else{
                  alert('not a valid response ,yes or no');
              }
               }
              TraveledBefore();
                
              function ridder(){
          var horseRider = prompt('have i ridden on a horse');
              var haveRidden = horseRider.toUpperCase();
              if(haveRidden === 'YES' || haveRidden === 'Y')
              {
                  console.log('have Ridden ' + haveRidden);
                  alert('you are right i have Ridden');
              }else if( haveRidden === 'NO' ||  haveRidden === 'N'){
              console.log('have not traveled ' +  haveRidden);
              alert('this time you are not right');
              }
              else{
                  alert('not a valid response ,yes or no');
              }
              
              var dogsName = prompt('is my Dogs name Gulliver');
              var petName = dogsName.toUpperCase();
              if(petName === 'YES' || petName === 'Y')
              {
                  console.log('PetName ' + petName);
                  alert('you are right about his name');
              }else if( petName === 'NO' ||  petName === 'N'){
              console.log('about name ' +  petName);
              alert('this time you are not right');
              }
              else{
                  alert('not a valid response ,yes or no');
              }
          }
          ridder();
          function realPilot(){
                  var pilot = prompt('is my Dogs name Gulliver');
              var amPilot = pilot.toUpperCase();
              if(amPilot === 'YES' || amPilot === 'Y')
              {
                  console.log('pilot ' + amPilot);
                  alert('you are right about his name');
              }else if( amPilot === 'NO' ||  amPilot === 'N'){
              console.log('about career ' +  amPilot);
              alert('this time you are not right');
              }
              else{
                  alert('not a valid response ,yes or no');
              }
          }
                realPilot();
             
                function realGuess(){
           var AnswerTotal=0;
  var maxGuess=0;
  while( maxGuess<=3){
    console.log(maxGuess);
    var numGuess =prompt('enter my number');
    numGuess =parseInt(numGuess);
    console.log(numGuess);
    if(numGuess ===3){
        alert('correct ' + numGuess);
        
            console.log('corrected' + numGuess);
    }
    else if(numGuess<3){
        console.log('low' + numGuess);
        alert('you guessed too low');
    }
      else if(numGuess>3){
        console.log('High' + numGuess);
        alert('you guessed too high');
    }
    else{
        alert('we are done');
    }
    maxGuess++;
  }
                }
                realGuess();
           
           
         
    
     