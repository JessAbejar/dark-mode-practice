var body = document.querySelector('body');
var btns = document.querySelectorAll('.btn');

function modeSwitch(){
    body.classList.toggle('dark-mode');
}

btns[0].addEventListener('click', modeSwitch);
btns[1].addEventListener('click', modeSwitch)