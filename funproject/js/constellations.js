const constellations = {
    heart: {
        name: "Our Love Story",
        points: [
            { x: 400, y: 300, message: "Where we first met..." },
            { x: 450, y: 250, message: "Our first smile..." },
            { x: 500, y: 300, message: "Our first laugh..." },
            { x: 450, y: 350, message: "Our first date..." },
            { x: 400, y: 300, message: "Where our story began..." }
        ],
        story: "Every beat of my heart reminds me of you..."
    },
    firstDate: {
        name: "Our First Date",
        points: [
            { x: 300, y: 200, message: "When I first saw you..." },
            { x: 350, y: 250, message: "That nervous excitement..." },
            { x: 400, y: 200, message: "Your beautiful smile..." },
            { x: 350, y: 150, message: "Time stood still..." }
        ],
        story: "The stars aligned when I met you..."
    },
    future: {
        name: "Our Future Together",
        points: [
            { x: 600, y: 400, message: "Adventures ahead..." },
            { x: 650, y: 350, message: "Dreams to share..." },
            { x: 700, y: 400, message: "Memories to make..." },
            { x: 650, y: 450, message: "A lifetime together..." }
        ],
        story: "Every star in the sky is a dream we'll share..."
    }
};

class ConstellationManager {
    constructor(ctx) {
        this.ctx = ctx;
        this.activeConstellation = null;
        this.alpha = 0;
        this.messageBox = document.getElementById('messageBox');
    }

    showConstellation(name) {
        this.activeConstellation = name;
        this.alpha = 0;
        this.fadeIn();
        this.showMessage(constellations[name].story);
    }

    showMessage(message) {
        this.messageBox.style.display = 'block';
        this.messageBox.textContent = message;
        this.messageBox.style.opacity = 0;
        
        setTimeout(() => {
            this.messageBox.style.opacity = 1;
        }, 100);
    }

    fadeIn() {
        if (this.alpha < 1) {
            this.alpha += 0.02;
            requestAnimationFrame(() => this.fadeIn());
        }
    }

    draw() {
        if (!this.activeConstellation) return;

        const constellation = constellations[this.activeConstellation];
        const points = constellation.points;

        this.ctx.strokeStyle = `rgba(255, 255, 255, ${this.alpha})`;
        this.ctx.lineWidth = 1;
        this.ctx.beginPath();
        this.ctx.moveTo(points[0].x, points[0].y);

        for (let i = 1; i < points.length; i++) {
            this.ctx.lineTo(points[i].x, points[i].y);
        }

        this.ctx.stroke();

        points.forEach(point => {
            this.ctx.beginPath();
            this.ctx.arc(point.x, point.y, 3, 0, Math.PI * 2);
            this.ctx.fillStyle = `rgba(255, 215, 0, ${this.alpha})`;
            this.ctx.fill();
        });
    }
}

const constellationManager = new ConstellationManager(starField.ctx);

function showConstellation(name) {
    constellationManager.showConstellation(name);
}
