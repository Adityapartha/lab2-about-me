var user = prompt('what is your name');
console.log(user);

alert('Hi there I\m going to ask you few question');

var dog = prompt('Do you have any dogs ' + user + ' please answer with yes or no');
if(dog.toUpperCase() === 'YES') {
    alert('dogs are the coolest animal');
}else {
    alert('sorry wrong answer');
}
console.log(dog);

var running = prompt('Is running your favorite?');
if(running.toLowerCase() === 'yes'){
    alert('great')
} else {
    alert('wrong answer')
}
console.log(running);

var water = prompt ('Do you like drinking water ' + user );
if (water.toUpperCase() === 'NO'){
     alert('Its is healthly for you');
}else {
    alert('sorry wrong answer');
    console.log(water);
}
var coding = prompt('Do like coding '+  user + ' ?' );
if(coding.toUpperCase() === 'yes'){
    alert('great');
}else {
    alert('great');
}
console.log(coding);

var walking = prompt(user + ' do you walk every day to work?');
if (walking.toLowerCase() === 'YES'){
    alert('nice!');
}else {
    alert('sorry wrong answer');
}
console.log(walking);