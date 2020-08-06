'use strict';

function newName(){
  var askName =prompt('What is your name?');
  console.log('Getting user name ' + askName);
  alert('Welcome ' + askName + ', so nice you joined me today!');
}
newName()

function playGame(){
  var wantToPlayAGame = prompt('Do you want to play a game ' + askName + '?' + ' Please answer yes or no.');
  console.log('Do you want to play a game' + wantToPlayAGame + '?' + 'Please answer yes or no');
}
playGame()

if(wantToPlayAGame.toLowerCase() === 'yes' || wantToPlayAGame === 'y'){
  alert('Awesome, let me ask you a few questions!');
}else if(wantToPlayAGame.toLowerCase() === 'no' || wantToPlayAGame === 'n'){
  alert('Ok, I will just ask a few questions.');
} else {
  alert('Please enter yes or no');
}

var famousRelative = prompt('Is James Swift related to Taylor Swift?');
console.log('Famous relative question' + famousRelative + '?');

if(famousRelative.toLowerCase() === 'yes' || famousRelative === 'y'){
  alert('Nope, I actually don\'t like her music');
}else if(famousRelative.toLowerCase() === 'no' || famousRelative === 'n'){
  alert('You are correct! Way to go!');
} else {
  alert('Please enter yes or no');
}

var movieQuestion = prompt('Has James Swift stared in a movie?');
console.log('find out if staring in movie' + movieQuestion + '?');

if(movieQuestion.toLowerCase() === 'yes' || movieQuestion === 'y'){
  alert('Thank you, wish that was true, but I have been an extra - no words or special parts just hanging out in the background.');
}else if(movieQuestion.toLowerCase() === 'no' || movieQuestion === 'n'){
  alert('We must be freinds already, you are correct.');
} else {
  alert('Please enter yes or no');
}

var longestJob = prompt('Did James work at a job for over 8 years?');
console.log('what was my longest job' + longestJob + '?');

if(longestJob.toLowerCase() === 'yes' || longestJob === 'y'){
  alert('Correct! He worked for Verizon Wireless for almost 9 years (that is how he paid to complete college too).');
}else if(longestJob.toLowerCase() === 'no' || longestJob === 'n'){
  alert('So close, but actually almost 9 years at Verizon Wireless.');
} else {
  alert('Please enter yes or no');
}

var onlineSchooling = prompt('Did James study online before?');
console.log('ever took online learning classes before' + onlineSchooling + '?');

if(onlineSchooling.toLowerCase() === 'yes' || onlineSchooling === 'y'){
  alert('Correct! Some of the classes he took were online since he worked full time and attended school at the same time.');
}else if(onlineSchooling.toLowerCase() === 'no' || onlineSchooling === 'n'){
  alert('Actually yes, he had too, worked full time and went to night school same time.');
} else {
  alert('Please enter yes or no');
}

var number = 2;
for(var i=0; i < 4; i++){
  var tattoo = parseInt(prompt('How many tattoos does James have?'));
  if (tattoo < number){
    alert('You are so close, just a little higher.');
  } else if (tattoo > number){
    alert('Maybe someday, but guess again lower this time.');
  } else if (tattoo === number){
    alert('That is correct! (for now)');
    break;
  }
  if (i === 3){
    alert('You are out of guesses, the correct answer is 2');
  }
}

var futureCountries = ['Brazil', 'Sweden', 'Croatia', 'Cuba'];
for (var i = 0; i < 6; i++){
  var whereIsCarmenSanDiego = prompt('Can you guess a country I would like to visit?');
  var answeredCorrect = false;
  // This loop only checks for correct answers.
  for (var j = 0; j < futureCountries.length; j++){
    if (futureCountries[j].toLowerCase() === whereIsCarmenSanDiego){
      alert('You are correct! I want to visit Brazil, Croatia, Cuba, and even Sweden.');
      answeredCorrect = true;
    }
  }
  if (answeredCorrect === true){
    break;
  } else {
    alert('You are incorrect. Please try again.');
  }
}
alert('Thank you ' + askName + ', hope you learned a little about me.');

