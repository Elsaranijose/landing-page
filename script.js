// Toggle Read More / Read Less
function toggleDetails() {
  const details = document.getElementById("more-details");
  const btn = document.getElementById("readBtn");

  if (details.classList.contains("hidden")) {
    details.classList.remove("hidden");
    btn.textContent = "Read Less";
  } else {
    details.classList.add("hidden");
    btn.textContent = "Read More";
  }
}

// Floor Plan Modal
function openFloorPlan() {
  document.getElementById("floorPlanModal").style.display = "block";
}
function closeFloorPlan() {
  document.getElementById("floorPlanModal").style.display = "none";
}

// Call Now Modal
function showNumbers() {
  document.getElementById("callModal").style.display = "block";
}
function closeNumbers() {
  document.getElementById("callModal").style.display = "none";
}

// Close modal on outside click
window.onclick = function(event) {
  const floorModal = document.getElementById("floorPlanModal");
  const callModal = document.getElementById("callModal");
  if (event.target === floorModal) {
    floorModal.style.display = "none";
  }
  if (event.target === callModal) {
    callModal.style.display = "none";
  }
}
