var body = document.getElementById('body');
var btn = document.getElementById('color-theme-btn');

var colorThemeSwitch = function() {
    if (body.classList) {
        body.classList.toggle('dark-mode');
    } else {
        var bodyClasses = body.className.split(' ');
        var darkModeClassIndex = bodyClasses.indexOf('dark-mode');

        if (darkModeClassIndex >= 0) {
            bodyClasses.splice(darkModeClassIndex, 1);
        } else {
            bodyClasses.push('dark-mode');
            body.className = bodyClasses.join(' ')
        }
    }
}

btn.addEventListener('click', colorThemeSwitch)