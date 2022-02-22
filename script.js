const teclas = document.querySelectorAll('.tecla');
const audioInstrumentos = document.querySelectorAll('audio');

for (let i = 0; i <teclas.length; i++) {

    teclas[i].onclick = function(){
        audioInstrumentos[i].play();
    }

    teclas[i].onkeydown = function(evento){
        if (evento.code === 'Space' || evento.code === 'Enter'){
            teclas[i].classList.add('ativa');
        }
        
    }
    teclas[i].onkeyup = function(){
        teclas[i].classList.remove('ativa');
    }
   
}

console.log(audioInstrumentos);
//template string `string$(elementodecodigo)`