const postTitles = document.querySelectorAll('.post h2 a');

postTitles.forEach(title => {
  title.addEventListener('click', function(e) {
    e.preventDefault();
    title.style.animation = 'enlarge 0.3s ease-in-out';
    setTimeout(() => {
      window.location.href = title.getAttribute('href');
    }, 300);
  });
});
