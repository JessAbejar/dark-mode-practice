// Variables
var body = document.querySelector("body");
var btn = document.querySelector(".btn");
var btnText = document.getElementById("btn-text")

// Initial Button Text
btnText.innerHTML = '<i class="fas fa-moon">&nbsp;</i>Dark-Mode';

function modeSwitch(){
    // Light-Mode to Dark-Mode
    if (btn.classList.contains('on') == true) {
        btn.classList.remove('on');
        btn.classList.add('off');
        body.classList.remove('light-mode');
        body.classList.add('dark-mode');
        btnText.innerHTML = '<i class="fas fa-sun">&nbsp;</i>Light-Mode';
    } 
    // Dark-Mode to Light-Mode
    else if (btn.classList.contains('off') == true) {
        btn.classList.remove('off');
        btn.classList.add('on');
        body.classList.remove('dark-mode');
        body.classList.add('light-mode');
        btnText.innerHTML = '<i class="fas fa-moon">&nbsp;</i>Dark-Mode';
    }

}

btn.addEventListener('click', modeSwitch)