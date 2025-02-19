import React from 'react';
import { Link } from 'react-router-dom';

export default function Footer() {
  return (
    <div className="w-full bg-[#2C3C4D] px-18 py-16">
      <div>
        <div className="flex flex-row gap-18 justify-between">
          <div>
            <div className="text-white font-normal text-lg">
              <img className="w-62" src="/Logo_white.png" alt="logo" />
              <div className="mt-6">© 2023 Berita Kini. All Rights Reserved.</div>
            </div>
            <div>
              <div className="text-white font-semibold text-2xl mt-11">Ikuti Kami</div>
              <div className="flex flex-row mt-6 gap-6">
                <img src="/yt.png" alt="" />
                <img src="/ig.png" alt="" />
                <img src="/fb.png" alt="" />
              </div>
            </div>
          </div>

          <div className="text-white">
            <div className="font-semibold text-2xl">Telusuri</div>
            <div className="font-inter font-light text-lg flex flex-col gap-4 mt-6">
              <Link to={'/'}>Beranda</Link>
              <Link to={'/kesehatan'}>Kesehatan</Link>
              <Link to={'/otomotif'}>Otomotif</Link>
              <Link to={'/politik'}>Politik</Link>
              <Link to={'/olahraga'}>Olahraga</Link>
              <Link to={'/nasional'}>Nasional</Link>
              <Link to={'/internasional'}>Internasional</Link>
            </div>
          </div>
          <div className="text-white">
            <div className="font-semibold text-2xl">Bantuan</div>
            <div className="font-inter font-light text-lg flex flex-col gap-4 mt-6">
              <Link>Kontak Kami</Link>
              <Link>Laporan Pembajakan</Link>
              <Link>Kebijakan</Link>
            </div>
          </div>

          <div className="text-white">
            <div className="font-semibold text-2xl">Berlangganan Berita Terbaru</div>
            <div className="w-fit h-fit mt-6 p-2 bg-white rounded-lg flex flex-row items-center">
              <input type="text" placeholder="Masukkan Email" className="text-black outline-none w-80" />
              <button className='cursor-pointer'>
                <img src="/send.png" alt="kirim" />
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
