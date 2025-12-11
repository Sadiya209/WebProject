// js/script.js
// mobile menu toggle
function toggleMenu(){
  const nav = document.querySelector('.nav-links');
  nav.classList.toggle('show');
}

// close menu when clicking a link (mobile)
document.addEventListener('click', function(e){
  if(e.target.matches('.nav-links a') && window.innerWidth <= 640){
    document.querySelector('.nav-links').classList.remove('show');
  }
});




