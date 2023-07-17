const aboutLink = document.getElementById("about-link");
const modal = document.getElementById("about-modal");
const closeBtn = document.getElementsByClassName("close")[0];
const contactLink = document.getElementById("contact-link");
const contactModal = document.getElementById("contact-modal");
const contactCloseBtn = contactModal.getElementsByClassName("close")[0];

aboutLink.addEventListener("click", function() {
  event.preventDefault();
  modal.style.display = "block";
});

closeBtn.addEventListener("click", function() {
  modal.style.display = "none";
});

window.addEventListener("click", function(event) {
  if (event.target == modal) {
    modal.style.display = "none";
  }
});

contactLink.addEventListener("click", function() {
    contactModal.style.display = "block";
  });

  contactLink.addEventListener("click", function(event) {
    event.preventDefault();
    contactModal.style.display = "block";
  }); 

  contactCloseBtn.addEventListener("click", function() {
    contactModal.style.display = "none";
  });
  
  window.addEventListener("click", function(event) {
    if (event.target == contactModal) {
      contactModal.style.display = "none";
    }
  });
