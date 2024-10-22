const horas = document.getElementById('horas');
const minutos = document.getElementById('minutos');
const segundos = document.getElementById('segundos');

const horaAlarmeInput = document.getElementById('horaAlarme');
const minutoAlarmeInput = document.getElementById('minutoAlarme');
const definirAlarmeBtn = document.getElementById('definirAlarme');
const mensagemAlarme = document.getElementById('mensagemAlarme');
const somAlarme = document.getElementById('somAlarme');

let alarmeHora = null;
let alarmeMinuto = null;
let alarmeAtivado = false;

// Relógio digital
const relogio = setInterval(function time() {
    let dateToday = new Date();
    let hr = dateToday.getHours();
    let min = dateToday.getMinutes();
    let s = dateToday.getSeconds();

    if (hr < 10) hr = '0' + hr;
    if (min < 10) min = '0' + min;
    if (s < 10) s = '0' + s;

    horas.textContent = hr;
    minutos.textContent = min;
    segundos.textContent = s;

    // Checa se o alarme deve tocar
    if (alarmeAtivado && hr == alarmeHora && min == alarmeMinuto) {
        tocarAlarme();
    }
}, 1000);

// Configurar alarme
definirAlarmeBtn.addEventListener('click', function() {
    alarmeHora = horaAlarmeInput.value.padStart(2, '0');
    alarmeMinuto = minutoAlarmeInput.value.padStart(2, '0');
    alarmeAtivado = true;
    mensagemAlarme.textContent = `Alarme definido para ${alarmeHora}:${alarmeMinuto}`;
    mensagemAlarme.style.color = 'green';
});

// Função para tocar alarme
function tocarAlarme() {
    somAlarme.play();
    alarmeAtivado = false; // Desativa o alarme após tocar
    mensagemAlarme.textContent = `Alarme tocando!`;
    mensagemAlarme.style.color = 'red';
}
