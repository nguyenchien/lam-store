// Loader
window.addEventListener("DOMContentLoaded", () => {
  const loader = document.querySelector(".loader-wrapper");
  setTimeout(() =>  {
    loader.classList.add("is-done");
  }, 1000);
});

// Scroll to top
window.addEventListener("DOMContentLoaded", () => {
  const scrollBtn = document.querySelector('.js-scroll-to-top');

  // Khi click vào nút -> scroll lên đầu
  scrollBtn.addEventListener("click", () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth" // Cuộn mượt
    });
  });
});

// Click js-menu-button
document.addEventListener("DOMContentLoaded", () => {
  const menuNav = document.querySelector(".js-menu");
  const menuButton = document.querySelector(".js-menu-button");
  const menuOverlay = document.querySelector(".l-menu-overlay");

  if (menuNav && menuButton && menuOverlay) {
    menuButton.addEventListener("click", () => {
      menuNav.classList.toggle("is-open");
      menuButton.classList.toggle("is-open");
      menuOverlay.classList.toggle("is-open");
    });

    // Khi click vào overlay thì đóng menu
    menuOverlay.addEventListener("click", () => {
      menuNav.classList.remove("is-open");
      menuButton.classList.remove("is-open");
      menuOverlay.classList.remove("is-open");
    });
  }
});