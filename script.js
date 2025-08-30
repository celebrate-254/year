function releasePetals() {
  const msg = document.getElementById('hiddenMessage');
  msg.classList.remove('hidden');

  for (let i = 0; i < 30; i++) {
    const petal = document.createElement('div');
    petal.className = 'petal';
    petal.style.left = Math.random() * 100 + 'vw';
    petal.style.animationDuration = (5 + Math.random() * 5) + 's';
    document.body.appendChild(petal);
    setTimeout(() => petal.remove(), 10000);
  }
}

// Sparkle background (canvas stars)
const canvas = document.getElementById("sparkleCanvas");
const ctx = canvas.getContext("2d");
canvas.width = window.innerWidth;
canvas.height = window.innerHeight;

let sparkles = [];

for (let i = 0; i < 150; i++) {
  sparkles.push({
    x: Math.random() * canvas.width,
    y: Math.random() * canvas.height,
    r: Math.random() * 1.5,
    d: Math.random() * 100
  });
}

function drawSparkles() {
  ctx.clearRect(0, 0, canvas.width, canvas.height);
  ctx.fillStyle = "#ffffff80";
  ctx.beginPath();
  for (let i = 0; i < sparkles.length; i++) {
    const s = sparkles[i];
    ctx.moveTo(s.x, s.y);
    ctx.arc(s.x, s.y, s.r, 0, Math.PI * 2, true);
  }
  ctx.fill();
  moveSparkles();
}

function moveSparkles() {
  for (let i = 0; i < sparkles.length; i++) {
    sparkles[i].y += 0.3;
    if (sparkles[i].y > canvas.height) {
      sparkles[i].y = 0;
      sparkles[i].x = Math.random() * canvas.width;
    }
  }
}

setInterval(drawSparkles, 50);
