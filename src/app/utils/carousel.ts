class Carousel {
  carousel: any;
  items: NodeList;
  btnPrev: any;
  btnNext: any;
  interval: any;
  activeIndex: number;
  nextIndex: number;
  options: any;

  constructor(element: Element, config = {}) {
    const defaults = {
      direction: 'left',
      timer: 2000,
      autoplay: true,
    };

    this.carousel = element;
    this.items = this.carousel.querySelectorAll('.carousel-item');
    this.btnPrev = this.carousel.querySelector('.btn-prev');
    this.btnNext = this.carousel.querySelector('.btn-next');
    this.activeIndex = 0;

    this.options = {
      ...defaults,
      ...config,
    };
  }

  getIndex(items: NodeList, element: Element) {
    return Array.prototype.slice.call(items).indexOf(element);
  }

  getNextIndex(items: NodeList, element: Element, direction: string, activeIndex: number) {
    if (element) {
      return this.getIndex(items, element);
    }

    if (direction === 'left') {
      return (activeIndex + 1) % items.length;
    }

    if (this.activeIndex - 1 === -1) {
      return this.items.length - 1;
    }

    return this.activeIndex - 1;
  }

  reflow(element: HTMLElement) {
    return element.offsetHeight;
  }

  checkDirection(className: string) {
    if (className.indexOf('next') > -1) {
      return 'left';
    }
    if (className.indexOf('prev') > -1) {
      return 'right';
    }
    return 'left';
  }

  slide(direction: string, element: Element) {
    const activeElement: Element = this.carousel.querySelector('.carousel-item.active');

    this.activeIndex = this.getIndex(this.items, activeElement);
    this.nextIndex = this.getNextIndex(this.items, element, direction, this.activeIndex);

    const nextElement: Element = element || this.items[this.nextIndex] as Element;
    const orderClass: string = direction === 'left' ? 'next' : 'prev';
    const directionClass: string = direction === 'left' ? 'left' : 'right';

    nextElement.classList.add(orderClass);

    this.reflow(activeElement as HTMLElement);

    activeElement.classList.add(directionClass);
    nextElement.classList.add(directionClass);

    function animate() {
      nextElement.classList.remove(directionClass);
      nextElement.classList.remove(orderClass);
      nextElement.classList.add('active');

      activeElement.classList.remove('active');
      activeElement.classList.remove(orderClass);
      activeElement.classList.remove(directionClass);

      activeElement.removeEventListener('transitionend', animate);
    }

    activeElement.addEventListener('transitionend', animate);

    this.clickIndicator();

    this.activeIndex = this.nextIndex;
  }

  autoplay() {
    this.interval = setInterval(() => {
      this.slide(this.options.direction, null);
    }, this.options.timer);
  }

  pause() {
    if (this.interval) {
      clearInterval(this.interval);
      this.interval = null;
    }
  }

  addIndicators(render) {
    const indicators = render.createElement('div');

    render.addClass(indicators, 'carousel-indicators');

    for (let i = 0; i < this.items.length; i += 1) {
      const indicatorItem = render.createElement('li');
      render.setAttribute(indicatorItem, 'data-index', i);
      render.appendChild(indicators, indicatorItem);
    }

    render.addClass((indicators.children)[this.activeIndex], 'active');
    render.appendChild(this.carousel, indicators);
  }

  clickIndicator() {
    const indicators = this.carousel.querySelector('.carousel-indicators').children;
    indicators[this.activeIndex].classList.remove('active');
    indicators[this.nextIndex].classList.add('active');
  }

  addBtnArrow(render) {
    const prevBtn = render.createElement('div');
    const nextBtn = render.createElement('div');
    render.addClass(prevBtn, 'carousel-control');
    render.addClass(prevBtn, 'btn-prev');
    render.addClass(nextBtn, 'carousel-control');
    render.addClass(nextBtn, 'btn-next');
    render.appendChild(this.carousel, prevBtn);
    render.appendChild(this.carousel, nextBtn);
  }

  destory() {
    this.pause();
    this.carousel.removeChild(this.carousel.querySelector('ol'));
  }

  init() {
    if (this.options.autoplay) {
      this.autoplay();
    }

    this.carousel.addEventListener('mouseenter', () => {
      this.pause();
    }, false);

    this.carousel.addEventListener('mouseleave', () => {
      if (this.options.autoplay) {
        this.autoplay();
      }
    }, false);

    this.carousel.addEventListener('click', (e) => {
      const dataIndex = parseInt(e.target.getAttribute('data-index'), 10);

      if (dataIndex >= 0) {
        if (dataIndex < 0 && dataIndex > this.items.length) {
          return;
        }

        if (this.activeIndex === dataIndex) {
          return;
        }

        this.slide(dataIndex > this.activeIndex ? 'left' : 'right', this.items[dataIndex] as Element);
      }

      if (e.target.className.indexOf('btn') > -1) {
        this.slide(this.checkDirection(e.target.className), null);
      }
    }, false);
  }
}

export default Carousel;
