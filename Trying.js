//Exercises//
let exercise = '';

if(exercise.length === 0) {
  exercise = prompt('Please input a workout you would like to try.');
}
console.log(name);

//Age For Classes//
let kid = '5';
if (kid <= 12) {
  alert('Welcome to the Kids Section! Feel free to grab those apple slices and start jamming!');
}

let teen = '15';
if (teen <= 17) {
  alert('Hello everyone! Ready to get fit and learn the secrets to living healthy?');
}

let adult = '30';
if (adult <= 50) {
  alert('Need to take a break from working? Join here to relax and stay healthy with out classes.');
}
else if(adult === 50 && adult <= 79) {
  alert('You get a special Seniors discount! Congratulations.');
}
else {
  alert('How old are you then?');
}

//Planets//
switch(planets.toLowerCase()) {
  case 'Mercury':
    break;
    
  case 'Mars':
    break;
    
  case 'Venus':
    break;
    
  case 'Earth':
    alert("That's where I live!");
    break;
    
  case 'Neptune':
    alert("Love the color of this planet!");
  default:
  alert('What kind of planet is that? Are you an alien?!');
}  

//Age//
const age = 20;
const canAttendConcert = age > 19 ? true : false;
