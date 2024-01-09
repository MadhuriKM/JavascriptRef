var btn = document.getElementById('btn');
var tags = document.getElementsByTagName('h1'); //return as collection

btn.addEventListener("click", (event) => {
    event.preventDefault();
    console.log(tags);
    console.log(tags.length);
});