document.getElementById("clickMe").addEventListener("click", function() {
  alert("Hello! This is your first interactive website 🎉");
});

// Tambahkan efek fade-in saat halaman selesai dimuat
window.addEventListener("load", () => {
  document.body.classList.add("loaded");
});


// 🌗 DARK MODE FEATURE
const toggleButton = document.getElementById("themeToggle");
const body = document.body;

// Periksa apakah user sudah pilih tema sebelumnya
if (localStorage.getItem("theme") === "dark") {
  body.classList.add("dark-mode");
  toggleButton.textContent = "☀️ Light Mode";
}

toggleButton.addEventListener("click", () => {
  body.classList.toggle("dark-mode");

  if (body.classList.contains("dark-mode")) {
    toggleButton.textContent = "☀️ Light Mode";
    localStorage.setItem("theme", "dark");
  } else {
    toggleButton.textContent = "🌙 Dark Mode";
    localStorage.setItem("theme", "light");
  }
});


// 📬 FORM INTERAKTIF
const form = document.getElementById("contactForm");
if (form) {
  form.addEventListener("submit", (e) => {
    e.preventDefault(); // cegah reload halaman
    document.getElementById("formStatus").textContent = "⏳ Sending...";

    setTimeout(() => {
      document.getElementById("formStatus").textContent = "✅ Message sent successfully!";
      form.reset();
    }, 1500);
  });
}

// 🌌 Efek Partikel Latar Belakang
const canvas = document.getElementById("particleCanvas");
if (canvas) {
  const ctx = canvas.getContext("2d");
  canvas.width = window.innerWidth;
  canvas.height = window.innerHeight;

  let particles = [];

  class Particle {
    constructor(x, y) {
      this.x = x;
      this.y = y;
      this.size = Math.random() * 2 + 1;
      this.speedX = Math.random() * 0.6 - 0.3;
      this.speedY = Math.random() * 0.6 - 0.3;
    }

    update() {
      this.x += this.speedX;
      this.y += this.speedY;
      if (this.size > 0.2) this.size -= 0.01;
    }

    draw() {
      ctx.fillStyle = "rgba(255, 255, 255, 0.8)";
      ctx.beginPath();
      ctx.arc(this.x, this.y, this.size, 0, Math.PI * 2);
      ctx.fill();
    }
  }

  function handleParticles() {
    for (let i = 0; i < particles.length; i++) {
      particles[i].update();
      particles[i].draw();

      if (particles[i].size <= 0.2) {
        particles.splice(i, 1);
        i--;
      }
    }
  }

  canvas.addEventListener("mousemove", (event) => {
    for (let i = 0; i < 3; i++) {
      particles.push(new Particle(event.x, event.y));
    }
  });

  function animate() {
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    handleParticles();
    requestAnimationFrame(animate);
  }

  animate();

  window.addEventListener("resize", () => {
    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;
  });
}
