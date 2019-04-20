var body = document.getElementById('body');
var btn = document.getElementById('color-theme-btn');

function colorThemeSwitch(){
    body.classList.toggle('dark-mode');
}

btn.addEventListener('click', colorThemeSwitch)