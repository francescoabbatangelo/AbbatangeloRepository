var i;
for (i = 1; i < 5; i++) {
    let str = "like" + i;
    document.getElementById(str).addEventListener("click", function () {
        if (document.getElementById(str).className === 'myclass_btn134') {
            document.getElementById(str).className = 'myclass_btn2';
        } else {
            document.getElementById(str).className = 'myclass_btn134';
        }
    });
}


var here = document.getElementById("here");
here.addEventListener("click", function () {
    document.getElementById("cookie_div").style.display = 'none';
});