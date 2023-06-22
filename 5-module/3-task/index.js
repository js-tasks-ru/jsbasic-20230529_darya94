function initCarousel() {
  let btnLeft = document.querySelector('.carousel__arrow_left');
  let btnRight = document.querySelector('.carousel__arrow_right');
  let window = document.querySelector('.carousel__inner');
  let slideWidth = -window.offsetWidth;
  let slideNumber = 0;
  btnLeft.style.display = 'none';

  btnRight.addEventListener('click', () => {
    btnLeft.style.display = '';
    window.style.transform = `translateX(${(slideNumber+1)*slideWidth}px)`;
    slideNumber++;
    if (slideNumber == 3) btnRight.style.display = 'none';
  })

  btnLeft.addEventListener('click', () => {
    btnRight.style.display = '';
    window.style.transform = `translateX(${(slideNumber-1)*slideWidth}px)`;
    slideNumber--;
    if (slideNumber == 0) btnLeft.style.display = 'none';
    
  })
}
