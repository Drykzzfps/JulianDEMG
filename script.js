const symbols = ['🍒', '🍊', '🍇', '🔔', '💎'];

function spinReels() {
  const reels = document.querySelectorAll('.reel');
  
  reels.forEach((reel) => {
    reel.innerHTML = getRandomSymbol();
  });
}

function getRandomSymbol() {
  const randomIndex = Math.floor(Math.random() * symbols.length);
  return symbols[randomIndex];
}

const spinButton = document.getElementById('spin-button');
spinButton.addEventListener('click', spinReels);
