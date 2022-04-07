window.addEventListener('keydown', (e) => {
  const audio = document.querySelector(`audio[data-nam="${e.keyCode}"]`);
  if (!audio) return;
  audio.currentTime = 0;
  const key = document.querySelector(`span[nam-key="${e.keyCode}"`);
  key.classList.add('playing');
  audio.play();
});

const keys = document.querySelectorAll('.key');
keys.forEach((key) =>
  key.addEventListener('transitionend', (e) => {
    if (e.propertyName !== 'outline-color') {
      return;
    }
    key.classList.remove('playing');
  })
);
