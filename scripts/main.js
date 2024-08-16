document.addEventListener("DOMContentLoaded", () => {
  const infoBox = document.querySelector(".item4");
  const additionalInfo = document.querySelector(".additional-info");

  infoBox.addEventListener("click", () => {
    infoBox.classList.toggle("expanded");

    const isExpanded = infoBox.classList.contains("expanded");

    additionalInfo.style.display = isExpanded ? "block" : "none";
  });
});
