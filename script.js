let button = document.getElementsByName("btn");

function tryMe() {
    let id = null;
    const animation = document.getElementById("example");
    let pos = 0;
    clearInterval(id);
    id = setInterval(frame , 5);
    function frame () {
        if (pos == 350) {
            clearInterval(id);
        } else {
            pos++;
            animation.style.left = pos + "px";
        }
    }
}