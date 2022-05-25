window.onload = () => {
  const surface = document.querySelector('.surface');
  const car = document.querySelector('.car');
  const img = document.querySelector('.car img');
  let flag = false;

  const cars = ['./assets/Img_06.png', './assets/Img_05.png'];

  document.addEventListener('keypress', e => {
    if (e.code === 'KeyD') {
      if (flag) {
        surface.classList.toggle('moveRight');
        car.classList.toggle('suspension');
      } else {
        alert('운전하기 전에 잊으신 게 없나요?');
      }
    }

    if (e.code === 'KeyL') {
      if (flag) {
        flag = false;
        img.setAttribute('src', cars[1]);
        surface.classList.remove('moveRight');
        car.classList.remove('suspension');
      } else {
        flag = true;
        img.setAttribute('src', cars[0]);
      }
    }
  });
};
