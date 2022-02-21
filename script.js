const teclas = document.querySelectorAll('.tecla');
const audioInstrumentos = document.querySelectorAll('audio');

for (let i = 0; i <teclas.length; i++) {
    function tocaAudio(){
        audioInstrumentos[i].play();
     }
    teclas[i].onclick = tocaAudio;
}

console.log(audioInstrumentos);