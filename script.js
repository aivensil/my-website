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
