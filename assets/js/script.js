function scrolltop() {
  if (window.scrollY === 0) {
    document.querySelector('.nav-bar').classList.add('nav-bar-off');
    document.getElementById('scrollUp').style.display = "none";
  }
  else {
    document.querySelector('.nav-bar').classList.remove('nav-bar-off');
    document.getElementById('scrollUp').style.display = "block";
  }
}
window.addEventListener('scroll', scrolltop);
scrolltop();

function subir() {
  window.scrollTo({
    top: 0,
    behavior: "smooth"
  })
}

