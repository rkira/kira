var dialogue = document.getElementById('dialogue');
var menuIcon = document.querySelector('.menu-icon');

function toggleDialogue() {
  menuIcon.classList.toggle('active');
  if (dialogue.style.display === 'none' || dialogue.style.display === '') {
    dialogue.style.display = 'block';
  } else {
    dialogue.style.display = 'none';
  }
}

function openPage(url) {
  window.location.href = url;
}
