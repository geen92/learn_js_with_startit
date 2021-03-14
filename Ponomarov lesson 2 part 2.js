// Ex.1

let a = 1;
let b = 1;

let c = ++a;
let d = b++;

// Try to guess what is the value should returned inside the a, b, c, d variables below
console.log(a); // = я подумал что 1, но правильно 2
console.log(b); // = я подумал что 1, но правильно 2
console.log(c); // = 2 тут правильно
console.log(d); // = 1 тут правильно

// Ex.2

/* Use a switch statement to log the following string for the given 'language': chinese or mandarin: 'MOST number of native speakers!'
spanish: '2nd place in number of native speakers'
english: '3rd place'
hindi: 'Number 4'
arabic: '5th most spoken language'
for all other simply log 'Great language too :D' */

let language = "hindi";
switch (language) {
    case 'chinese':
    case 'mandarin':
        console.log('MOST number of native speakers!');
        break;
    case 'spanish':
        console.log('2nd place in number of native speakers');
        break;
    case 'english':
        console.log('3rd place');
        break;
    case 'hindi':
        console.log('Number 4');
        break;
     case 'arabic':
        console.log('5th most spoken language');
        break;
    default:
        console.log('Great language too :D');
}
