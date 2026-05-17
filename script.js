const playBtn = document.getElementById('playBtn');

const videoModal = document.getElementById('videoModal');

const closeBtn = document.getElementById('closeBtn');

const birthdayVideo = document.getElementById('birthdayVideo');

playBtn.addEventListener('click', async () => {

  videoModal.style.display = 'flex';

  birthdayVideo.play();

  // AUTO FULLSCREEN

  if (birthdayVideo.requestFullscreen) {

    await birthdayVideo.requestFullscreen();

  } else if (birthdayVideo.webkitRequestFullscreen) {

    birthdayVideo.webkitRequestFullscreen();

  } else if (birthdayVideo.msRequestFullscreen) {

    birthdayVideo.msRequestFullscreen();

  }

});

closeBtn.addEventListener('click', () => {

  videoModal.style.display = 'none';

  birthdayVideo.pause();

});

window.addEventListener('click', (e) => {

  if(e.target === videoModal){

    videoModal.style.display = 'none';

    birthdayVideo.pause();

  }

});