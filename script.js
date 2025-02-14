const celebrationSound = document.getElementById('celebration-sound');
const yesButton = document.getElementById('yes-button');
const noButton = document.getElementById('no-button');

// Play celebration sound when "Yes" is clicked
yesButton.addEventListener('click', () => {
    celebrationSound.play();
    alert("Good decision Gng... One step closer to Pharaoh 💖");
    // Add more animations or effects here
});

// Fun interaction for "No" button
noButton.addEventListener('mouseover', () => {
    noButton.style.position = 'absolute';
    noButton.style.left = `${Math.random() * 80}%`;
    noButton.style.top = `${Math.random() * 80}%`;
});

noButton.addEventListener('click', () => {
    alert("Don't be shy! Click 'Yes' instead! 😉");
});