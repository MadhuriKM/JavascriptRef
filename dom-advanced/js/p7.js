let random = document.querySelector("#random");
let image = document.querySelector("img");

let imgArr = [
    "https://picsum.photos/id/112/1400/1400",
    "https://picsum.photos/id/113/1400/1400",
    "https://picsum.photos/id/114/1400/1400",
    "https://picsum.photos/id/115/1400/1400",
    "https://picsum.photos/id/116/1400/1400",
    "https://picsum.photos/id/117/1400/1400",
    "https://picsum.photos/id/118/1400/1400",
    "https://picsum.photos/id/119/1400/1400",
    "https://picsum.photos/id/130/1400/1400",
    "https://picsum.photos/id/131/1400/1400",
    "https://picsum.photos/id/132/1400/1400",
    "https://picsum.photos/id/133/1400/1400",
    "https://picsum.photos/id/134/1400/1400",
    "https://picsum.photos/id/135/1400/1400"
];

//random.addEventListener('click', function(){
  //  let res = imgArr[Math.floor(Math.random() * imgArr.length)]
  //  image.setAttribute("src", res);
//});

setInterval(function(){
    let res = imgArr[Math.floor(Math.random() * imgArr.length)]
    image.setAttribute("src",res);
}, 2000);

