document.addEventListener('DOMContentLoaded', function () {
  const toggleBtn = document.getElementById('toggle-details-btn');
  const moreDetails = document.getElementById('more-details');
  const modal = document.getElementById('call-modal');
  const callBtn = document.getElementById('call-now-btn');
  const closeBtn = document.querySelector('.close-btn');

  // Read More / Read Less
  toggleBtn.addEventListener('click', function() {
    const isHidden = moreDetails.style.display === 'none' || moreDetails.style.display === '';
    if (isHidden) {
      moreDetails.style.display = 'block';
      toggleBtn.textContent = 'Read Less';
    } else {
      moreDetails.style.display = 'none';
      toggleBtn.textContent = 'Read More';
    }
  });

  // Floor Plan modal
const floorPlanBtn = document.querySelector(".btn-floor-plan");
const floorPlanModal = document.getElementById("floorplan-modal");

floorPlanBtn.addEventListener("click", (e) => {
  e.preventDefault();
  floorPlanModal.style.display = "block";
});

// Close when clicking the X
document.querySelectorAll(".modal .close-btn").forEach(btn => {
  btn.addEventListener("click", () => {
    btn.closest(".modal").style.display = "none";
  });
});



// Close when clicking outside modal
window.addEventListener("click", (e) => {
  if (e.target.classList.contains("modal")) {
    e.target.style.display = "none";
  }
});


  // Call Now Modal
  callBtn.addEventListener('click', function() {
    modal.style.display = 'block';
  });

  closeBtn.addEventListener('click', function() {
    modal.style.display = 'none';
  });

  window.addEventListener('click', function(event) {
    if (event.target == modal) {
      modal.style.display = 'none';
    }
  });
});
