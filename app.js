//////////////////////dom objects and variables////////////////////
const drums = document.querySelectorAll('.drums');

//////////////variable//////////////
const btn_len = drums.length;

///////////////////////function and event listeners/////////////////
for(let i=0; i<btn_len; i++) {
    drums[i].addEventListener('click', ()=>{
            playSound(drums[i].innerHTML);

            ///animation function call
            animation_btn(drums[i].innerHTML);
    });
}//click event listner


document.addEventListener('keypress', (evt) => {
    playSound(evt.key);

    //animation function call
    animation_btn(evt.key);

}); ///////////keypress event listner


/////////////////adding the animation when button is clicked////////////
function animation_btn(key) {
    document.querySelector('.' + key).classList.add('press');

    setTimeout(()=>{
        document.querySelector('.' + key).classList.remove('press');
    },200);
}


////////////////////////function for playing the drum audio//////////////////////////
function playSound(match) {
    if(match === 'a') {
        let drum_audio = new Audio('/sounds/crash.mp3');
        drum_audio.play();
    } 
    
    else if(match === 's') {
        let drum_audio = new Audio('/sounds/kick-bass.mp3');
        drum_audio.play();
    }
    
    else if(match === 'd') {
        let drum_audio = new Audio('/sounds/snare.mp3');
        drum_audio.play();
    }
    
    else if(match === 'f') {
        let drum_audio = new Audio('/sounds/tom-1.mp3');
        drum_audio.play();
    }
    
    else if(match === 'g') {
        let drum_audio = new Audio('/sounds/tom-2.mp3');
        drum_audio.play();
    }
    
    else if(match === 'h') {
        let drum_audio = new Audio('/sounds/tom-3.mp3');
        drum_audio.play();
    }
    
    else if(match === 'j') {
        let drum_audio = new Audio('/sounds/tom-4.mp3');
        drum_audio.play();
    }
} 