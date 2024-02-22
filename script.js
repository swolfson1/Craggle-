// a rule setting out that the main card will place in '0th' place
let mainCard = 0;

function onLoad() {
  // get the buttons from the page
  const backArrow = document.querySelector("#back-arrow");
  const forwardArrow = document.querySelector("#forward-arrow");

  // look out for the user clicking
  backArrow.addEventListener("click", backClick);
  forwardArrow.addEventListener("click", forwardClick);

  // make a list of all the climbers and assign them values 0,1,2,3...etc
  const climberCards = document.querySelectorAll(".climber-card");

  // add the css class 'main-card' to the mainCard
  climberCards[mainCard].classList.add("main-card");

  // only show arrow buttons if they can be clicked
  if (mainCard === 0) {
    backArrow.classList.add("arrow-disabled");
  }

  function backClick() {
    if (mainCard - 1 >= 0) {
      climberCards[mainCard].classList.remove("main-card");
      mainCard = mainCard - 1;
      climberCards[mainCard].classList.add("main-card");
    }
    if (mainCard === 0) {
      backArrow.classList.add("arrow-disabled");
    }
    forwardArrow.classList.remove("arrow-disabled");
  }

  function forwardClick() {
    if (mainCard + 1 < climberCards.length) {
      climberCards[mainCard].classList.remove("main-card");
      mainCard = mainCard + 1;
      climberCards[mainCard].classList.add("main-card");
    }

    if (mainCard === climberCards.length - 1) {
      forwardArrow.classList.add("arrow-disabled");
    }
    backArrow.classList.remove("arrow-disabled");
  }
}

document.addEventListener("DOMContentLoaded", () => {
  const modal = document.getElementById("climber-modal");
  const modalTitle = document.querySelector(".modal-title");
  const modalGrade = document.querySelector(".modal-grade");
  const modalBio = document.querySelector(".modal-bio");
  const modalImage = document.querySelector(".modal-image");
  const experienceLevelElement = document.querySelector(
    ".modal-content .experience-level-Advanced"
  );
  const closeBtn = document.querySelector(".close-button");
  const climberCards = document.querySelectorAll(".climber-card");

  
  function openModal(name, grade, bio, imageSrc, experience, experienceClass) {
    modalTitle.textContent = name;
    modalGrade.textContent = grade;
    modalBio.textContent = bio;
    modalImage.src = imageSrc;
    modalImage.alt = `Image of ${name}`;
    experienceLevelElement.className = ""; 
    experienceLevelElement.classList.add(experienceClass); 
    experienceLevelElement.textContent = experience; 
    modal.style.display = "block";
  }

  // Loop through each climber
  climberCards.forEach((card) => {
    card.addEventListener("click", () => {
      const name = card.querySelector(".climber-name").textContent;
      const grade = card.querySelector(".climber-grade").textContent;
      const bio = card.querySelector(".bio").textContent;
      const imageSrc = card.querySelector(".climber-image").src;
      const experienceElement = card.querySelector(
        ".experience-level-Advanced, .experience-level-Intermediate, .experience-level-Beginner"
      );
      const experience = experienceElement.textContent;
      const experienceClass = experienceElement.classList.item(0); 
      openModal(name, grade, bio, imageSrc, experience, experienceClass);
    });
  });

  
  closeBtn.onclick = function () {
    modal.style.display = "none";
  };

  window.onclick = function (event) {
    if (event.target == modal) {
      modal.style.display = "none";
    }
  };
});
document.addEventListener("DOMContentLoaded", onLoad);
