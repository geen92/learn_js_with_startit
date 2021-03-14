// Ponomarov lesson 2 part 2 (Fix bug)

//Ex.2

let language = prompt("Enter the language").toLowerCase();;
switch (language) {
    case 'chinese':
    case 'mandarin':
        alert('MOST number of native speakers!');
        break;
    case 'spanish':
        alert('2nd place in number of native speakers');
        break;
    case 'english':
        alert('3rd place');
        break;
    case 'hindi':
        alert('Number 4');
        break;
     case 'arabic':
        alert('5th most spoken language');
        break;
    default:
        alert('Great language too :D');
}
