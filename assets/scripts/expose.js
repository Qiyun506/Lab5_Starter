// expose.js

window.addEventListener('DOMContentLoaded', init);

function init() {
  const sound = document.querySelector('audio');
  const but = document.querySelector('button');
  const horn = document.getElementById('horn-select');
  const vol = document.getElementById('volume-controls');
  const pic = document.querySelector('img[alt="No image selected"]');
  const VC = document.getElementById('volume-controls');
//-------------------------------declare----------------------------------------
  const JC = new JSConfetti();
  horn.addEventListener('change', (event) => {
    pic.src = `assets/images/${event.target.value}.svg`;
    sound.src = `assets/audio/${event.target.value}.mp3`;
  });
  but.addEventListener('click', (event) => {
    if (horn.value == 'party-horn'){
      JC.addConfetti();
    }
    aud.play();
  });
  VC.addEventListener('change', (event) => {
    let curr = event.target.value;
    let vol_lv = 0;
    if (curr  == 0) vol_lv = 0
    else if (curr  < 34) vol_lv = 1
    else if (curr  < 66) vol_lv = 2
    else vol_lv = 3;
    const icon = vol_control.querySelector('img');
    icon.src = `assets/icons/volume-level-${vol_lv}.svg`
    aud.volume = curr  / 100.0;
  })
}
