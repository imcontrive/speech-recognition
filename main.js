
window.SpeechRecognition = window.SpeechRecognition || window.webkitSpeechRecognition;

const recognition = new SpeechRecognition();
recognition.interinResults = true;
recognition.lang = 'en-US';

var p = document.createElement('p');
const content = document.querySelector('.content');
content.appendChild(p);

recognition.addEventListener('result', e => {
console.log('speech recognition event')
const transcript = Array.from(e.results)
  .map(result => result[0])
  .map(result => result.transcript)
  .join('');

  const poopScript = transcript.replace(/poop|poo|shit|dump/gi, '💩');
  p.textContent = transcript;

  console.log(p,p.textContent);

  if (e.results[0].isFinal) {
    p = document.createElement('p');
    content.appendChild(p);
  }
});

recognition.addEventListener('end', recognition.start);

recognition.start();