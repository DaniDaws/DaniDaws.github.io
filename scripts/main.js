document.addEventListener("DOMContentLoaded", () => {
  const infoBox = document.querySelector(".item4");
  const additionalInfo = document.querySelector(".additional-info");

  infoBox.addEventListener("click", () => {
    infoBox.classList.toggle("expanded");

    additionalInfo.style.display = infoBox.classList.contains("expanded")
      ? "block"
      : "none";
  });

  const projectsLink = document.getElementById("projects-link");
  const projectPreview = projectsLink.querySelector(".project-preview");

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
});
