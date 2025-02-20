import React from 'react';
import { Carousel } from 'react-responsive-carousel';

export default function CarouselSlider() {
  return (
    <div className='w-full px-18 mt-40 mb-60'>
      <Carousel autoPlay swipeable infiniteLoop showStatus={false} showThumbs={false}>
        <div>
          <img src={'/carou.png'} />
        </div>
        <div>
          <img src={'/carou.png'} />
        </div>
        <div>
          <img src={'/carou.png'} />
        </div>
      </Carousel>
    </div>
  );
}
