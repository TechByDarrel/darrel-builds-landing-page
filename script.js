document.querySelectorAll('a[href^="#"]').forEach(link => {
  link.addEventListener('click', function(e) {
    e.preventDefault();
    let target = document.querySelector(this.getAttribute('href'));
    if(target) {
      target.scrollIntoView({ behavior: 'smooth' });
    }
  });
});

document.querySelectorAll('#cta a').forEach(btn => {
  btn.addEventListener('click', function() {
    alert('Thanks for visiting Darrel Builds!');
  });
});
