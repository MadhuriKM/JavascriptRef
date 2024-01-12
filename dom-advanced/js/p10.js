        var signal1 = document.getElementById('red-light');
        var signal2 = document.getElementById('yellow-light');
        var signal3 = document.getElementById('green-light');

        setTimeout(()=>{
            signal1.style.backgroundColor= "white";
        },2000);
        
        setTimeout(()=>{
            signal2.style.backgroundColor= "white";
        },5000);

        setTimeout(()=>{
            signal3.style.backgroundColor= "white";
        },30000);