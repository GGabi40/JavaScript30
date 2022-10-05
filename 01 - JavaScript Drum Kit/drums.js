window.addEventListener('keydown', function(e) {
    const audio = document.querySelector(`audio[data-key="${e.keyCode}"`); // Selecciona los audios
    const key = document.querySelector(`.key[data-key="${e.keyCode}"`); // Selecciona la div con class key

    if(!audio) {
        return; // No deja que la función siga corriendo;   
    };
    audio.currentTime = 0;
    audio.play();
    key.classList.add('playing'); // Agg Class .playing, lo que lo cambia en css;
});

function quitarTransicion(e){
    if(e.propertyName !== 'transform') {
        return;
    };
    this.classList.remove('playing');
}

const keys = document.querySelectorAll('.key'); // Selecciono a todas las keys
keys.forEach(key => key.addEventListener('transitionend', quitarTransicion)); // Agg un loop para que se pueda eliminar todas las transiciones;