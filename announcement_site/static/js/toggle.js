document.addEventListener('DOMContentLoaded', function() {
  var toggleBtn = document.getElementById('toggle-btn');
  var moreText = document.getElementById('more-text');
  if (toggleBtn && moreText) {
    toggleBtn.addEventListener('click', function() {
      if (moreText.style.display === 'none') {
        moreText.style.display = 'inline';
        toggleBtn.textContent = 'Show less';
      } else {
        moreText.style.display = 'none';
        toggleBtn.textContent = 'Read more';
      }
    });
  }
});
