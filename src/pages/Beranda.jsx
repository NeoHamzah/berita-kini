import React from 'react';
import Headlines from '../components/Headlines';
import BeritaTerbaru from '../components/BeritaTerbaru';
import Rekomendasi from '../components/Rekomendasi';

export default function Beranda() {
  return (
    <div>
      <Headlines />
      <BeritaTerbaru />
      <Rekomendasi />
    </div>
  );
}
