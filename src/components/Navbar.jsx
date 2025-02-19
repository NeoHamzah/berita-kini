import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';

export default function Navbar() {
  const [navBg, setNavBg] = useState(false);

  const changeNavBg = () => {
    if (window.scrollY >= 80) {
      setNavBg(true);
    } else {
      setNavBg(false);
    }
  };

  useEffect(() => {
    window.addEventListener('scroll', changeNavBg);
    return () => {
      window.removeEventListener('scroll', changeNavBg);
    };
  }, []);

  return (
    <div className={`w-full fixed transition-colors duration-300 ${navBg ? 'bg-blue-500' : 'bg-transparent'}`}>
      <div className="py-8 px-20 flex items-center justify-between">
        <div>
          <img className='max-w-40' src={ navBg ? '/Logo_white.png' :'/Logo_wtxt.png'} alt="logo" />
        </div>

        <div className={`font-inter flex gap-8 transition-all duration-500 ${navBg ? 'text-white' : 'text-gray-400' } text-gray-500`}>
          <Link to={'/'}>Beranda</Link>
          <Link to={'/'}>Terbaru</Link>
          <Link to={'/'}>Hiburan</Link>
          <Link to={'/'}>Gaya Hidup</Link>
          <Link to={'/'}>Olahraga</Link>
          <Link to={'/'}>Nasional</Link>
          <Link to={'/'}>Internasional</Link>
        </div>
      </div>
    </div>
  );
}
