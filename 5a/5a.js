const swapLeft = () => {
  const images = document.getElementsByClassName('slider-item');

  let prevIndex = null;
  for (let i = 0; i < images.length; i += 1) {
    if (images[i].classList.contains('selected')) {
      prevIndex = i - 1;
    }
  }

  const [selectedImage] = document.getElementsByClassName('selected');
  selectedImage.classList.toggle('selected');

  if (prevIndex == -1) {
    images[images.length - 1].classList.toggle('selected');
  } else {
    images[prevIndex].classList.toggle('selected');
  }
};

const swapRight = () => {
  const images = document.getElementsByClassName('slider-item');

  let nextIndex = null;
  for (let i = 0; i < images.length; i += 1) {
    if (images[i].classList.contains('selected')) {
      nextIndex = i - 1;
    }
  }

  const [selectedImage] = document.getElementsByClassName('selected');
  selectedImage.classList.toggle('selected');

  if (nextIndex == -1) {
    images[images.length - 1].classList.toggle('selected');
  } else {
    images[nextIndex].classList.toggle('selected');
  }
};



document.getElementById('left').addEventListener('click', swapLeft);
document.getElementById('right').addEventListener('click', swapRight);;