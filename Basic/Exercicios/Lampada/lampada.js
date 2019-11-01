var lampada = document.getElementById('lamp');
var mensagem = document.getElementById('mensagem');
var body = document.getElementById("bodyy");

const quebrou = false;
const acender = function() {
    if (this.quebrou) {
        return;
    }
    body.style.backgroundColor = '#fffc96';
    lampada.src = './images/lampada_acessa.jpg';
}

const apagar = function() {
    if (this.quebrou) {
        console.log(lampada.src);
        return;
    }
    body.style.backgroundColor = '#ddd';
    lampada.src = './images/lampada_apagada.jpg';
}

const quebrar = function() {
    lampada.src = './images/lampada_quebrada.jpg';
    body.style.backgroundColor = '#ddd';
    mensagem.innerHTML = "Vish, deu ruim, uma vez quebrada, as ações são desativadas.";
    this.quebrou = true;
}

