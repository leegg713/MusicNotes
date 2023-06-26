window.addEventListener('keydown', function(e){

    const audio = document.querySelector(`audio[data-key="${e.keyCode}"]`);
    const key = document.querySelector(`.key[data-key="${e.keyCode}"]`);
    if(!audio) return; // Stops the function from running all together
    audio.currentTime = 0 ; //Rewind to Start
    audio.play(); // Plays the note
    key.classList.add('playing'); // Adds yellow box around key
    

});

function removeTransition(e){
    if(e.propertyName != 'transform') return; // skip if it is not a transform
    this.classList.remove('playing');
}

const keys = document.querySelectorAll('.key');
keys.forEach(key => key.addEventListener('transitionend', removeTransition));