document.addEventListener("DOMContentLoaded", () => {
  const lightboxLinks = document.querySelectorAll(".lightbox");
  const lightboxOverlay = document.createElement("div");
  lightboxOverlay.classList.add("lightbox-overlay");

  const lightboxImage = document.createElement("img");
  lightboxOverlay.appendChild(lightboxImage);
  document.body.appendChild(lightboxOverlay);

  lightboxLinks.forEach((link) => {
    link.addEventListener("click", (e) => {
      e.preventDefault();
      lightboxImage.src = link.href;
      lightboxOverlay.style.display = "flex";
    });
  });

  lightboxOverlay.addEventListener("click", () => {
    lightboxOverlay.style.display = "none";
  });
});
