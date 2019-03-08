// Variables
var body = document.querySelector('body');
var btns = document.querySelectorAll('.btn');

function modeSwitch(){
    body.classList.toggle('dark-mode');

}

for (let btn of btns) {
    btn.addEventListener('click', modeSwitch)
}