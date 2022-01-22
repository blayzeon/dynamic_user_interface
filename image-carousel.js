/*
    Adds an image carousel to the HTML.
    * Add images by providing an array with paths
        * Example: ['www.myimage.com', 'img.png']
    * The second arguement should be where you would like to insert the carousel
        * Default is document.body
    * You can have multiple carousels in one html
    * Add your animations to the class .img-carousel-ease
        * default is:
    .img-carousel-ease{
        opacity: 0;
        animation: img-carousel-fade 5s ease-in-out infinite;
    }
    @keyframes img-carousel-fade{
        0% {opacity: 0;}
        15% {opacity: 1;}
        90% {opacity: 1;}
        98% {opacity: 0;}
    }

*/
export default function imageCarousel(imgArray, container = document.body) {
  const uiContainer = document.createElement('div');
  uiContainer.classList.add('img-carousel');

  // Image Display
  const uiImgContainer = document.createElement('div');
  uiContainer.appendChild(uiImgContainer);
  const uiImg = document.createElement('img');
  uiImg.classList.add('img-carousel-img');
  uiContainer.appendChild(uiImg);
  uiImg.classList.add('img-carousel-ease');

  const updateImg = function updateElmImg(index) {
    uiImg.setAttribute('src', imgArray[index]);
  };

  let index = 0;
  updateImg(index);
  container.appendChild(uiContainer);

  const updateElm = function updateImgCarouselDisplay(control = 'next') {
    if (control === 'next') {
      index += 1;
      if ((index) > imgArray.length - 1) {
        index = 0;
      }
    } else if (control === 'reverse') {
      index -= 1;
      if ((index) <= 0) {
        index = imgArray.length - 1;
      }
    }
    updateImg(index);
  };

  // Controls
  const uiControlContainer = document.createElement('div');
  uiControlContainer.classList.add('img-carousel-controls');
  uiContainer.appendChild(uiControlContainer);

  let dots = '';
  for (let i = 0; i < imgArray.length; i += 1) {
    dots += `<button data-control='${i}'>⏺</button>`;
  }

  uiControlContainer.innerHTML = `<button id="reverse">⏮</button>${dots}<button id="forward">⏭</button>`;

  document.querySelectorAll('[data-control]').forEach((btn) => {
    btn.addEventListener('click', () => {
      updateImg(btn.dataset.control);
    });
  });

  document.getElementById('reverse').addEventListener('click', () => {
    updateElm('reverse');
  });

  document.getElementById('forward').addEventListener('click', () => {
    updateElm('next');
  });
  setInterval(() => {
    updateElm();
  }, 5000);
}
