var addBtn = document.getElementById('add');

var remBtn = document.querySelector("#remove");

var togBtn = document.querySelector("#toggle");

var blk = document.getElementById('container');
addBtn.addEventListener('click', function(){
    blk.classList.add('green');
});

remBtn.addEventListener('click', function(){
    blk.classList.remove('green');
});
togBtn.addEventListener('click', function(){
    blk.classList.toggle('red');
});


