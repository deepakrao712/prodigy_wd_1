// Auto day/night theme
window.addEventListener('DOMContentLoaded', () => {
  const hour = new Date().getHours();
  const isDay = hour >= 6 && hour < 18;
  document.body.classList.add(isDay ? 'day-theme' : 'night-theme');
  document.getElementById("themeToggle").textContent = isDay ? '🌙' : '☀️';
});

// Manual toggle theme
document.getElementById("themeToggle").addEventListener("click", () => {
  document.body.classList.toggle("day-theme");
  document.body.classList.toggle("night-theme");
  const isDay = document.body.classList.contains("day-theme");
  document.getElementById("themeToggle").textContent = isDay ? '🌙' : '☀️';
});

//Scroll navbar+active links
window.addEventListener('scroll', () => {
  const navbar = document.getElementById('navbar');
  const navItems = document.querySelectorAll('.nav-item');

  navbar.classList.toggle('scrolled', window.scrollY > 50);

  navItems.forEach(link => {
    const section = document.querySelector(link.getAttribute('href'));
    const top = section.offsetTop - 120;
    const bottom = top + section.offsetHeight;
    const scroll = window.scrollY;

    if (scroll >= top && scroll <= bottom) {
      link.classList.add('active');
    } else {
      link.classList.remove('active');
    }
  });
});
