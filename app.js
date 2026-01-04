
// Make entire cards clickable and optionally open in new tab
document.addEventListener('click', function(e){
  const card = e.target.closest('.card');
  if(!card) return;
  if(e.target.closest('a')) return; // let buttons/links work as is
  const url = card.dataset.url;
  if(!url) return;
  const blank = card.dataset.blank === 'true';
  if(blank){
    window.open(url, '_blank', 'noopener,noreferrer');
  }else{
    window.location.href = url;
  }
});



// Mobile nav toggle
document.addEventListener('DOMContentLoaded', function(){
  const header = document.querySelector('header.nav');
  const toggle = document.querySelector('.nav-toggle');
  if(!header || !toggle) return;
  toggle.addEventListener('click', function(){
    header.classList.toggle('open');
  });
  // Close menu when a nav link is clicked (mobile)
  header.querySelectorAll('.nav-links a').forEach(function(link){
    link.addEventListener('click', function(){
      header.classList.remove('open');
    });
  });
});
