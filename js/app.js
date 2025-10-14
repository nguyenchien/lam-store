// Loader
window.addEventListener("DOMContentLoaded", (event) => {
  const loader = document.querySelector(".loader-wrapper");
  setTimeout(() =>  {
    loader.classList.add("is-done");
  }, 1000);
});

// Scroll to top
window.addEventListener("DOMContentLoaded", (event) => {
  const scrollBtn = document.querySelector('.js-scroll-to-top');

  // Khi click vào nút -> scroll lên đầu
  scrollBtn.addEventListener("click", () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth" // Cuộn mượt
    });
  });
});