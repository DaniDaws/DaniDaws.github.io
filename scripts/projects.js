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


var modal = document.getElementById("imageModal");
var modalImg = document.getElementById("modalImage");
var captionText = document.getElementById("modalCaption");
var closeBtn = document.getElementsByClassName("close")[0];


function openModal(imgSrc, imgAlt) {
  modal.style.display = "block";
  modalImg.src = imgSrc;
  captionText.innerHTML = imgAlt;
}


function closeModal() {
  modal.style.display = "none";
}


closeBtn.onclick = function () {
  closeModal();
};


document.querySelectorAll(".project-images img").forEach(function (img) {
  img.onclick = function () {
    openModal(this.src, this.alt);
  };
});


window.onclick = function (event) {
  if (event.target == modal) {
    closeModal();
  }
};
