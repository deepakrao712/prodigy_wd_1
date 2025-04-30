const sections = document.querySelectorAll("section");
const body = document.body;

window.addEventListener("scroll", () => {
  let scrollY = window.scrollY;

  sections.forEach((section) => {
    const sectionTop = section.offsetTop;
    const sectionHeight = section.offsetHeight;

    if (scrollY >= sectionTop - sectionHeight / 2) {
      const id = section.getAttribute("id");

      switch (id) {
        case "home":
          body.style.backgroundColor = "#1a237e"; // Indigo
          break;
        case "about":
          body.style.backgroundColor = "#00695c"; // Teal
          break;
        case "services":
          body.style.backgroundColor = "#4e342e"; // Brown
          break;
        case "contact":
          body.style.backgroundColor = "#37474f"; // Blue Grey
          break;
      }
    }
  });
});
