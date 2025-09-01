const noBtn = document.getElementById("noBtn");
const yesBtn = document.getElementById("yesBtn");
const surat = document.getElementById("surat"); // pake div surat

const teksRandom = [
  "Lah?",
  "Ngga bisa gitu dong",
  "Waduh?",
  "Hehe kabur~",
  "Eh salah klik ya?",
  "Klik Liat",
  "Eits ga kena",
  "Wleee"
];

// Klik "Liat"
yesBtn.addEventListener("click", () => {
  // Sembunyiin tombol & judul
  document.querySelector("h1").style.display = "none";
  yesBtn.style.display = "none";
  noBtn.style.display = "none";

  // Tampilkan surat + animasi
  surat.classList.remove("hidden"); 
  surat.classList.add("show");

  // Confetti animation
  confetti({
    particleCount: 200,
    spread: 120,
    origin: { y: 0.6 }
  });

  // Play backsound (kalau ada)
  const backsound = document.getElementById("backsound");
  if (backsound) backsound.play();
});

// Klik "Ngga"
noBtn.addEventListener("click", () => {
  noBtn.textContent = teksRandom[Math.floor(Math.random() * teksRandom.length)];

  const x = Math.random() * (window.innerWidth - noBtn.offsetWidth);
  const y = Math.random() * (window.innerHeight - noBtn.offsetHeight);

  noBtn.style.position = "absolute";
  noBtn.style.left = `${x}px`;
  noBtn.style.top = `${y}px`;
});
