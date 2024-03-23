var botao = document.querySelector('button:nth-child(2)');

botao.addEventListener('mouseover', function () {
    var vertical = Math.floor(Math.random() * 400);
    var horizontal = Math.floor(Math.random() * 400);

    botao.style.position = "absolute";
    botao.style.left = vertical + 'px';
    botao.style.top = horizontal + 'px';
});

function sim() {
    alert("Que ótimo! Mal posso esperar para começarmos essa jornada juntos. Te amo!");   
}