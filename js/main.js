var body = document.querySelector(".body");
var btn = document.querySelector(".btn");
var btnText = document.getElementById("btn-text")

btnText.innerHTML = "Dark-Mode";

function testFunc(){
    console.log("clicked!")

    if (btn.classList.contains('on') == true) {
        btn.classList.remove('on');
        btn.classList.add('off');
        body.classList.remove('light-mode');
        body.classList.add('dark-mode');
        btnText.innerHTML = "Light-Mode";
    } else if (btn.classList.contains('off') == true) {
        btn.classList.remove('off');
        btn.classList.add('on');
        body.classList.remove('dark-mode');
        body.classList.add('light-mode');
        btnText.innerHTML = "Dark-Mode";
    }

}