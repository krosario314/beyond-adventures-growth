(() => {
  const hero = document.querySelector('.hero-animated');
  const button = hero?.querySelector('.swing-motion-toggle');
  if (!hero || !button) return;
  const reducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)');
  // Respect the device preference by default, but allow an explicit Play choice.
  let choice = 'auto';
  function wantsMotion() {
    return choice === 'play' || (choice === 'auto' && !reducedMotion.matches);
  }
  function updateMotion() {
    const requested = wantsMotion();
    hero.dataset.motionChoice = choice;
    hero.dataset.motion = requested && !document.hidden ? 'playing' : 'paused';
    button.hidden = false;
    button.textContent = requested ? 'Pause animation' : 'Play animation';
  }
  button.addEventListener('click', () => {
    choice = wantsMotion() ? 'pause' : 'play';
    updateMotion();
  });
  if (reducedMotion.addEventListener) reducedMotion.addEventListener('change', updateMotion);
  else if (reducedMotion.addListener) reducedMotion.addListener(updateMotion);
  document.addEventListener('visibilitychange', updateMotion);
  updateMotion();
})();
