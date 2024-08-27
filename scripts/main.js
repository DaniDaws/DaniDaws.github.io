document.addEventListener("DOMContentLoaded", () => {
  // Handle the info box expansion
  const infoBox = document.querySelector(".item4");
  const additionalInfo = document.querySelector(".additional-info");

  if (infoBox && additionalInfo) {
    infoBox.addEventListener("click", () => {
      infoBox.classList.toggle("expanded");
      additionalInfo.style.display = infoBox.classList.contains("expanded")
        ? "block"
        : "none";
    });
  }

  // Handle the projects link expansion
  const projectsLink = document.getElementById("projects-link");
  const projectPreview = projectsLink
    ? projectsLink.querySelector(".project-preview")
    : null;

  if (projectsLink && projectPreview) {
    projectsLink.addEventListener("click", (e) => {
      if (e.target.tagName !== "A") {
        e.preventDefault();
        projectsLink.classList.toggle("expanded");
        projectPreview.classList.toggle("visible");
      }
    });

    projectPreview.addEventListener("click", (e) => {
      if (e.target.tagName === "A") {
        return;
      }
    });
  }

  // Initialize dark mode toggle
  const initDarkModeToggle = () => {
    const toggleButton = document.getElementById("theme-toggle");
    const currentTheme = localStorage.getItem("theme") || "light";

    if (currentTheme === "dark") {
      document.body.classList.add("dark-mode");
    }

    if (toggleButton) {
      toggleButton.addEventListener("click", () => {
        document.body.classList.toggle("dark-mode");

        if (document.body.classList.contains("dark-mode")) {
          localStorage.setItem("theme", "dark");
        } else {
          localStorage.setItem("theme", "light");
        }
      });
    }
  };

  const checkHeaderLoaded = setInterval(() => {
    const toggleButton = document.getElementById("theme-toggle");
    if (toggleButton) {
      initDarkModeToggle();
      clearInterval(checkHeaderLoaded);
    }
  }, 100);

  // Modal functionality for Kickstarter certificate
  const modal = document.getElementById("certificateModal");
  const certificateThumbnail = document.querySelector(".certificate-thumbnail");
  const modalImg = document.getElementById("certificateImage");
  const closeModal = document.getElementsByClassName("close")[0];

  if (certificateThumbnail && modal && modalImg && closeModal) {
    certificateThumbnail.onclick = function () {
      modal.style.display = "block";
      modalImg.src = this.src;
    };

    closeModal.onclick = function () {
      modal.style.display = "none";
    };

    window.onclick = function (event) {
      if (event.target === modal) {
        modal.style.display = "none";
      }
    };
  }
});
