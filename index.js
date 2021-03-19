// Write your code here!

// Removing main with id of 'main' from the DOM
const main = document.querySelector('#main');
main.remove();

//Adding h1 element to the DOM and assigning it to 'newHeader' variable
const newHeader = document.createElement('h1');
//assigning id of victory to newHeader
newHeader.id = "victory";

//Adding content to newHeader using innerHTML
newHeader.innerHTML = "Calvin is the champion";
document.body.append(newHeader);