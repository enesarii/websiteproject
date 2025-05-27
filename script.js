const hamburger = document.getElementById('hamburger');
const navLinks = document.getElementById('nav-links');

hamburger.addEventListener('click', () => {
  navLinks.classList.toggle('active');
  hamburger.classList.toggle('active');
});


document.addEventListener("DOMContentLoaded", () => {
  const sozler = [
    "“Birlikte başarırız.”",
    "“İnsana değer veren geleceğe yön verir.”",
    "“Gelişim, bizim DNA’mızda var.”",
    "“Değerlerimizle iz bırakırız.”"
  ];

  let index = 0;

  setInterval(() => {
    index = (index + 1) % sozler.length;
    document.getElementById("motivasyonSozu").innerText = sozler[index];
  }, 2000);
});
