let set = document.querySelector("#set");
let get = document.querySelector("#get");

let blk = document.querySelector("div");
let image = document.querySelector("img");

set.addEventListener("click", function(){
    blk.setAttribute("class", "circle");
    image.setAttribute("src", "https://picsum.photos/id/434/500/500");
});

get.addEventListener("click", ()=> {
    let res = image.getAttribute("src");
    console.log(`res =`, res);
});