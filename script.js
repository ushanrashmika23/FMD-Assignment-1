let header = document.querySelector('header');
document.addEventListener(
    'scroll',
    () => {
        if (window.scrollY > 0) {
            console.log(window.scrollY);
            header.classList.add("scrolled");
        } else {
            header.classList.remove("scrolled");
        }
    }
);

function active(cls) {

    let btns = document.querySelectorAll('#btn1, #btn2, #btn3, #btn4');

    if (btns[cls].classList.contains('btn-on')) {
        btns[cls].classList.remove('btn-on');
    } else {
        btns[cls].classList.add('btn-on');
    }


}