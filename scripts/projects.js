document.addEventListener("DOMContentLoaded", () => {
  const projectCards = document.querySelectorAll(".project-card");

  projectCards.forEach((card) => {
    card.addEventListener("click", () => {
      card.classList.toggle("expanded");
      const projectDetails = card.querySelector(".project-details");

      if (card.classList.contains("expanded")) {
        projectDetails.style.display = "block";
      } else {
        projectDetails.style.display = "none";
      }
    });
  });

  const urlParams = new URLSearchParams(window.location.search);
  const projectId = urlParams.get("project");
  if (projectId) {
    const targetCard = document.getElementById(projectId);
    if (targetCard) {
      targetCard.classList.add("expanded");
      const projectDetails = targetCard.querySelector(".project-details");
      projectDetails.style.display = "block";
      window.scrollTo({
        top: targetCard.offsetTop,
        behavior: "smooth",
      });
    }
  }
});
