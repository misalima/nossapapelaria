//Botao Menu Dropdown
function ativarMenu() {
    let menu = document.querySelector("#dropMenu");
    menu.classList.add("show");
}
window.onclick = function(event) {
    if (!event.target.matches('.dropbtn')) {
        let menu = document.querySelector("#dropMenu");
          if (menu.classList.contains('show')) {}
            menu.classList.remove('show');
        }
}
      
//Pop-Up Code
window.onload = function(event) {
    setTimeout(() => {
        let popup = document.querySelector(".popup")
        popup.classList.add('showPopup')
    }, 3000)

}
function closePopup() {
    popup.classList.remove('showPopup')
}


//Slides Novidades

let tempo = 3000;
let imagem1 = document.querySelector("#img1");
let imagem2 = document.querySelector("#img2");

function slide() {
    imagem1.setAttribute("src", "images/happy.jpg");
    imagem2.setAttribute("src", "images/kori.jpg");
}
function slide2() {
    imagem1.setAttribute("src", "images/marca-texto.jpg")
    imagem2.setAttribute("src", "images/lapis.webp")
}
function start () {
    setInterval(() => {
        slide();
    }, tempo);
    setInterval(() => {
        slide2();
    }, (tempo*2));
    
    
}

window.addEventListener("load", start);

