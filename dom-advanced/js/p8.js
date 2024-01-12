var onBtn = document.querySelector('#on');
var offBtn = document.querySelector('#off');
var togBtn = document.querySelector("#toggle");
var blk = document.querySelector("#container");

onBtn.addEventListener('click', function(){
    blk.classList.add("yellow");
});
offBtn.addEventListener('click',function(){
    blk.classList.remove("yellow");
});
togBtn.addEventListener('click',function(){
    blk.classList.toggle('white');
});