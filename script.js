let header=document.querySelector('header');
document.addEventListener(
    'scroll',
    () => {
        if (window.scrollY > 0) {
            console.log(window.scrollY);
            header.classList.add("scrolled");
        }else{
            header.classList.remove("scrolled");
        }
    }
);