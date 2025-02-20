import React from 'react';
import Headlines from '../components/Headlines';
import BeritaTerbaru from '../components/BeritaTerbaru';
import Rekomendasi from '../components/Rekomendasi';
import CarouselSlider from '../components/CarouselSlider';
import 'react-responsive-carousel/lib/styles/carousel.min.css';

export default function Beranda() {
  return (
    <div>
      <Headlines />
      <BeritaTerbaru />
      <Rekomendasi />
      <CarouselSlider />
    </div>
  );
}
