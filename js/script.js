function menuShow() {
    let menuMobile = document.querySelector('.mobile-menu');
    if (menuMobile.classList.contains('open')) {
        menuMobile.classList.remove('open');
        document.querySelector('.icon').src = "./img/menu_white_36dp.svg";
    } else {
        menuMobile.classList.add('open');
        document.querySelector('.icon').src = "./img/close_white_36dp.svg";
    }
}

document.getElementById("downloadBtn").addEventListener("click", function() {
    const link = document.createElement("a");
    link.href = "curriculo.pdf"; //
    link.download = "curriculo.pdf";
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
});


window.addEventListener("scroll", function () {
    document.querySelectorAll('.imagem_sobre').forEach(element => {
        let position = element.getBoundingClientRect().top;
        let screenHeight = window.innerHeight;

        if (position < screenHeight * 0.8) {
            element.classList.add("show");
        }
    });
});

window.addEventListener("scroll", function () {
    document.querySelectorAll('.linguanges_tipo').forEach(element => {
        let position = element.getBoundingClientRect().top;
        let screenHeight = window.innerHeight;

        if (position < screenHeight * 0.8) {
            element.classList.add("show");
        }
    });
});
