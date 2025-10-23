/*
console.log('this works!');

// Make a list of words for each variable:
let nouns = ["dog", "cat", "fish", "bird", "lizard"];
let verbs = ["see", "chase", "catch", "watch", "admire"];
let adjectives = ["quickly", "silently", "gracefully", "happily", "eagerly"];

// Pick a random element from each array:
// https://css-tricks.com/snippets/javascript/select-random-item-array/

let noun = nouns[Math.floor(Math.random() * nouns.length)];
let verb = verbs[Math.floor(Math.random() * verbs.length)];
let adjective = adjectives[Math.floor(Math.random() * adjectives.length)];

let sentence = `My ${noun} leaps ${adjective} when I ${verb} a rainbow in the sky.`

document.write(sentence);

*/

let myElement = document.getElementById('special')
myElement.style.color = 'blue'
myElement.innerText = 'This text is blue and special!'
// console.log(myElement);