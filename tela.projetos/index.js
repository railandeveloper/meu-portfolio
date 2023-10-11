let radio = document.querySelector('.manual__btn');
let contador = 1;

document.getElementById('radio1').checked = true;// quero que seka verdadeira a possibilidade desse radio1 estar marcado

setInterval(() => {
    proximaImg();
}, 5000);

function proximaImg() {
    contador++

    if (contador > 4) {
        contador = 1
    }

    document.getElementById('radio'+contador).checked = true;
}