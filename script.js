// Initialize frontend behavior once the DOM is ready

document.addEventListener('DOMContentLoaded', () => {
  // Set current year in footer if present
  const yearEl = document.getElementById('year');
  if (yearEl) {
    yearEl.textContent = new Date().getFullYear();
  }
  // Future interactive hooks can be added here
});
