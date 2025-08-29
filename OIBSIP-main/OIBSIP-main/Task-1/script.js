const faders = document.querySelectorAll('.fade-in');
const observer = new IntersectionObserver((entries, obs) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.classList.add('visible');
      obs.unobserve(entry.target);
    }
  });
}, { threshold: 0.1 });

faders.forEach(el => observer.observe(el));

const text = "Frontend Developer | BTech KLH Student CSIT | CGPA 9.88";
const typingElement = document.getElementById('typing');
let index = 0;
function type() {
  if (index < text.length) {
    typingElement.textContent += text.charAt(index);
    index++;
    setTimeout(type, 100);
  }
}
window.onload = type;
