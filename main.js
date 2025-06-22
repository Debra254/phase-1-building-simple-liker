const EMPTY_HEART = '♡';
const FULL_HEART = '♥';


document.addEventListener('DOMContentLoaded', () => {
 
  const likeButtons = document.querySelectorAll('.like-glyph');
  const modal = document.getElementById('modal');

 
  modal.classList.add('hidden');

  likeButtons.forEach(heart => {
    heart.addEventListener('click', () => {
      mimicServerCall()
        .then(() => {
          if (heart.textContent === EMPTY_HEART) {
            heart.textContent = FULL_HEART;
            heart.classList.add('activated-heart');
          } else {
            heart.textContent = EMPTY_HEART;
            heart.classList.remove('activated-heart');
          }
        })
        .catch(error => {
          modal.classList.remove('hidden');
          modal.querySelector('p').textContent = error;
          setTimeout(() => {
            modal.classList.add('hidden');
          }, 3000);
        });
    });
  });
});
