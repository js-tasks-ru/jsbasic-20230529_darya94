import createElement from '../../assets/lib/create-element.js';

export default class Carousel {
  constructor(slides) {
    this.slides = slides;
    this.render();
  }

  render(){
    this.elem = document.createElement('DIV');
    this.elem.classList.add('carousel');

    this.elem.innerHTML = `
    <div class="carousel__arrow carousel__arrow_right">
      <img src="/assets/images/icons/angle-icon.svg" alt="icon">
    </div>
    <div class="carousel__arrow carousel__arrow_left">
      <img src="/assets/images/icons/angle-left-icon.svg" alt="icon">
    </div>
    <div class="carousel__inner"></div>
    `;

    let carouselInner = this.elem.querySelector('.carousel__inner');

    carouselInner.innerHTML = this.slides 
      .map(({name, price, image, id}) => `
      <div class="carousel__slide" data-id="${id}">
      <img src="/assets/images/carousel/${image}" class="carousel__img" alt="slide">
      <div class="carousel__caption">
        <span class="carousel__price">€${price.toFixed(2)}</span>
        <div class="carousel__title">${name}</div>
        <button type="button" class="carousel__button">
          <img src="/assets/images/icons/plus-icon.svg" alt="icon">
        </button>
      </div>
      </div>
      `)
      .join(' ');

    // перекоючение стрелок
    let btnLeft = this.elem.querySelector('.carousel__arrow_left');
    let btnRight = this.elem.querySelector('.carousel__arrow_right');
    let slideNumber = 0;
    let slideQuantity = this.elem.querySelectorAll('.carousel__slide');
    btnLeft.style.display = 'none';

    btnRight.addEventListener('click', () => {
      let window = this.elem.querySelector('.carousel__inner');
      let slideWidth = -window.offsetWidth;
      btnLeft.style.display = '';
      window.style.transform = `translateX(${(slideNumber+1)*slideWidth}px)`;
      slideNumber++;
      if (slideNumber == slideQuantity.length-1) btnRight.style.display = 'none';
    })

    btnLeft.addEventListener('click', () => {
      let window = this.elem.querySelector('.carousel__inner');
      let slideWidth = -window.offsetWidth;
      btnRight.style.display = '';
      window.style.transform = `translateX(${(slideNumber-1)*slideWidth}px)`;
      slideNumber--;
      if (slideNumber == 0) btnLeft.style.display = 'none';
      
    })

    //событие по клику на плюс
    this.slides.forEach((slide) => {
      this.elem.querySelector(`[data-id=${slide.id}]`).onclick = () => {
        this.elem.dispatchEvent( new CustomEvent( "product-add", { 
          detail: slide.id, 
          bubbles: true 
        } ) );
        }
    })
    
  }
}
