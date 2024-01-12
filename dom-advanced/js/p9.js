
  function changeLight(color) {
    document.getElementById('redLight').style.backgroundColor = 'transparent';
    document.getElementById('yellowLight').style.backgroundColor = 'transparent';
    document.getElementById('greenLight').style.backgroundColor = 'transparent';

    document.getElementById(color + 'Light').style.backgroundColor = color;
  }

  function simulateTrafficLight() {
    setInterval(function () {
      changeLight('red');
      setTimeout(function () {
        changeLight('yellow');
      }, 2000);
      setTimeout(function () {
        changeLight('green');
      }, 4000);
    }, 30000);
  }

  