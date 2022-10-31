// explore.js

window.addEventListener('DOMContentLoaded', init);

function init() {
  const syn = window.window.speechSynthesis;
  const img = document.querySelector('img');
  const button = document.querySelector('button');
  const selections = = document.getElementById('voice-select');
//-------------declarations-------------------------
  var voice_list = [];
  syn.addEventListener('voiceschanged', () => {
    voice_list = syn.getVoices();
    for (let i = 0; i < voice_list.length; i++) {
      const option = document.createElement('option');
      option.textContent = `${voice_list[i].name} (${voice_list[i].lang})`;
      option.setAttribute('voice_idx', i);
      voice_select.appendChild(option);
    }
  });
   button.addEventListener('click', () => {
    var txt = document.getElementById('text-to-speak').value;
    var say = new SpeechSynthesisUtterance(txt);
    const option = voice_select.selectedOptions[0].getAttribute('voice_idx');
    say.voice = voice_list[option];
    syn.speak(say);
    if (say.text != '') img.src = 'assets/images/smiling-open.png';
    say.addEventListener('end', (event) => {
      img.src = 'assets/images/smiling.png';
    });
  }) 
}
