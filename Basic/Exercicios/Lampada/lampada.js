var lampada = document.getElementById('lamp');
var mensagem = document.getElementById('mensagem');
var body = document.getElementById("bodyy");

const quebrou = false;
const acender = function() {
    if (this.quebrou) {
        return;
    }
    body.style.backgroundColor = '#fffc96';
    lampada.src = './lampada_acessa.jpg';
}

const apagar = function() {
    if (this.quebrou) {
        console.log(lampada.src);
        return;
    }
    body.style.backgroundColor = 'gray';
    lampada.src = './lampada_apagada.jpg';
}

const quebrar = function() {
    lampada.src = './lampada_quebrada.jpg';
    body.style.backgroundColor = 'darkgray';
    mensagem.innerHTML = "Vish, deu ruim, uma vez quebrada, as ações são desativadas.";
    this.quebrou = true;
}

