const button = document.getElementById('cta-button');
  button.addEventListener('click', () => {
    confetti({
      particleCount: 120,
      spread: 70,
      origin: { y: 0.6 }
    });
  });
  button.addEventListener('mouseenter', () => {
    confetti({
      particleCount: 30,
      spread: 50,
      origin: { y: 0.8 },
      scalar: 0.7
    });
  });
  AOS.init({
    duration: 1200,
    once: true      
  });
  const canvas = document.getElementById('particles');
const ctx = canvas.getContext('2d');
let particles = [];

function resize() {
  canvas.width = window.innerWidth;
  canvas.height = window.innerHeight;
}
window.addEventListener('resize', resize);
resize();

for (let i = 0; i < 50; i++) {
  particles.push({
    x: Math.random() * canvas.width,
    y: Math.random() * canvas.height,
    r: Math.random() * 3 + 1,
    dx: (Math.random() - 0.5) * 0.3,
    dy: (Math.random() - 0.5) * 0.3
  });
}

function draw() {
  ctx.clearRect(0, 0, canvas.width, canvas.height);
  particles.forEach(p => {
    ctx.beginPath();
    ctx.arc(p.x, p.y, p.r, 0, Math.PI * 2);
    ctx.fillStyle = "rgba(255,180,220,0.7)";
    ctx.fill();
    p.x += p.dx;
    p.y += p.dy;

    if (p.x < 0 || p.x > canvas.width) p.dx *= -1;
    if (p.y < 0 || p.y > canvas.height) p.dy *= -1;
  });
  requestAnimationFrame(draw);
}
draw();
const carousel = document.getElementById('testimonial-carousel');
  let currentIndex = 0;

  function moveCarousel(index) {
    currentIndex = index;
    carousel.style.transform = `translateX(-${index * 100}%)`;
    updateDots();
  }

  function updateDots() {
    document.querySelectorAll('.testimonial-dot').forEach((dot, i) => {
      dot.classList.toggle('bg-pink-400', i === currentIndex);
      dot.classList.toggle('bg-gray-500', i !== currentIndex);
    });
  }

  setInterval(() => {
    currentIndex = (currentIndex + 1) % 3;
    moveCarousel(currentIndex);
  }, 5000);