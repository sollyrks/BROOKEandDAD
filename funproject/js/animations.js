class Animations {
    static createShootingStar() {
        const star = document.createElement('div');
        star.className = 'shooting-star';
        document.body.appendChild(star);

        const startX = Math.random() * window.innerWidth;
        const startY = 0;
        const endX = startX + (Math.random() * 400 - 200);
        const endY = window.innerHeight;

        star.style.left = startX + 'px';
        star.style.top = startY + 'px';
        
        // Add trail effect
        star.style.boxShadow = '0 0 10px 2px white';
        star.style.transition = 'all 1s linear';

        setTimeout(() => {
            star.style.left = endX + 'px';
            star.style.top = endY + 'px';
        }, 10);

        setTimeout(() => star.remove(), 1000);
    }

    static pulseEffect(element) {
        element.style.transform = 'scale(1.1)';
        setTimeout(() => {
            element.style.transform = 'scale(1)';
        }, 200);
    }
}

// Audio management
const audio = new Audio('audio/background.mp3');
audio.loop = true;

function toggleMusic() {
    const musicControl = document.getElementById('musicControl');
    if (audio.paused) {
        audio.play();
        musicControl.textContent = '🔊';
    } else {
        audio.pause();
        musicControl.textContent = '🎵';
    }
}

// Date management
function updateStarMap() {
    const date = document.getElementById('datePicker').value;
    // Update star positions based on date
    starField.createStars();
}

// Window resize handling
window.addEventListener('resize', () => {
    starField.init();
});

// Create occasional shooting stars
setInterval(() => {
    if (Math.random() < 0.3) { // 30% chance every interval
        Animations.createShootingStar();
    }
}, 5000);
