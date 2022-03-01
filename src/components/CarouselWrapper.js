import Content from './content';

const CarouselWrapper = () => {
  return (
    <div
      id='carouselExampleFade'
      class='carousel slide carousel-fade position-relative'
      data-bs-ride='carousel'
    >
      <div class='carousel-inner pb-4'>
        <div class='carousel-item active'>
          <Content />
        </div>
        <div class='carousel-item'>
          <Content />
        </div>
        <div class='carousel-item'>
          <Content />
        </div>
      </div>
      <button
        class='carousel-control-prev position-absolute top-100'
        type='button'
        data-bs-target='#carouselExampleFade'
        data-bs-slide='prev'
      >
        <span class='carousel-control-prev-icon' aria-hidden='true'></span>
      </button>
      <button
        class='carousel-control-next position-absolute top-100'
        type='button'
        data-bs-target='#carouselExampleFade'
        data-bs-slide='next'
      >
        <span class='carousel-control-next-icon' aria-hidden='true'></span>
      </button>
    </div>
  );
};

export default CarouselWrapper;
