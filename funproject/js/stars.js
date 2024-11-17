class Star {
    constructor(x, y, size) {
        this.x = x;
        this.y = y;
        this.size = size;
        this.originalSize = size;
        this.twinkleSpeed = Math.random() * 0.1;
        this.twinkleTime = Math.random() * Math.PI * 2;
    }

    update() {
        this.twinkleTime += this.twinkleSpeed;
        this.size = this.originalSize * (1 + Math.sin(this.twinkleTime) * 0.5);
    }

    draw(ctx) {
        ctx.beginPath();
        ctx.arc(this.x, this.y, this.size, 0, Math.PI * 2);
        ctx.fillStyle = 'white';
        ctx.fill();
    }
}

class StarField {
    constructor(canvas) {
        this.canvas = canvas;
        this.ctx = canvas.getContext('2d');
        this.stars = [];
        this.init();
    }

    init() {
        this.canvas.width = window.innerWidth;
        this.canvas.height = window.innerHeight;
        this.createStars();
    }

    createStars() {
        this.stars = [];
        for (let i = 0; i < 200; i++) {
            this.stars.push(new Star(
                Math.random() * this.canvas.width,
                Math.random() * this.canvas.height,
                Math.random() * 2
            ));
        }
    }

    animate() {
        this.ctx.fillStyle = 'rgba(0, 0, 0, 0.1)';
        this.ctx.fillRect(0, 0, this.canvas.width, this.canvas.height);

        this.stars.forEach(star => {
            star.update();
            star.draw(this.ctx);
        });

        requestAnimationFrame(() => this.animate());
    }
}

// Initialize star field
const starField = new StarField(document.getElementById('starCanvas'));
starField.animate();
