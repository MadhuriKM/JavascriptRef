let firstLi = document.querySelector("li");

//console.log(firstLi); // <li>item-1</li>
//console.log(firstLi.parentElement); // ul
//console.log(firstLi.parentElement.parentElement); //body
//console.log(firstLi.parentElement.parentElement.parentElement); // html
//console.log(firstLi.parentElement.parentElement.parentElement.parentElement); // null

//let ul = document.querySelector("ul");

//console.log(ul.children);
//console.log(ul.children[0]);
//console.log(ul.children[1]);
//console.log(ul.children[2]);
//console.log(ul.children[2].innerText);
//ul.children[2].innerText = "Apple";

// Next Element Siblings
//console.log(firstLi.nextElementSibling.textContent); // item-2
//console.log(firstLi.nextElementSibling.nextElementSibling.textContent); // item-3
//console.log(firstLi.nextElementSibling.nextElementSibling.nextElementSibling.textContent); // item-4
//console.log(firstLi.nextElementSibling.nextElementSibling.nextElementSibling.nextElementSibling.textContent); //item-5

// Previous Element Sibling
let fourthLi = document.querySelector(".fourth");
console.log(fourthLi);
console.log(fourthLi.previousElementSibling.textContent); // item-3
console.log(fourthLi.previousElementSibling.previousElementSibling.textContent); // item-2
