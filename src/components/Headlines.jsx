import React, { useState, useEffect, useRef } from 'react';
import { useParams } from 'react-router-dom';
import { useFetchBerita } from '../hooks/useFetchBerita';

export default function Beranda() {
  const { slug_kategori } = useParams();
  const kategori = slug_kategori || 'teknologi';
  const { data, loading, error } = useFetchBerita(kategori);
  const [currentIndex, setCurrentIndex] = useState(0);
  const [limitedData, setLimitedData] = useState([]);
  const intervalRef = useRef(null);

  const formatDate = (dateString) => {
    const date = new Date(dateString);
    const options = { day: 'numeric', month: 'long', year: 'numeric' };
    return new Intl.DateTimeFormat('id-ID', options).format(date);
  };

  useEffect(() => {
    if (data && data.posts) {
      const limitedPosts = data.posts.slice(0, 5);
      setLimitedData(limitedPosts);
    }
  }, [data]);

  useEffect(() => {
    resetInterval();
    return () => clearInterval(intervalRef.current);
  }, [limitedData, currentIndex]);

  const resetInterval = () => {
    clearInterval(intervalRef.current);
    intervalRef.current = setInterval(() => {
      nextHeadline();
    }, 3000);
  };

  const nextHeadline = () => {
    if (limitedData.length > 0) {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % limitedData.length);
    }
  };

  const prevHeadline = () => {
    if (limitedData.length > 0) {
      setCurrentIndex((prevIndex) => (prevIndex - 1 + limitedData.length) % limitedData.length);
    }
  };

  const handleNext = () => {
    nextHeadline();
    resetInterval();
  };

  const handlePrev = () => {
    prevHeadline();
    resetInterval();
  };

  if (loading) {
    return <div>Loading...</div>;
  }

  if (error) {
    return <div>Error: {error}</div>;
  }

  if (limitedData.length === 0) {
    return <div>No data available</div>;
  }

  const currentPost = limitedData[currentIndex];

  return (
    <div className="w-full flex flex-col pt-60 pb-28 px-18">
      <div className="flex flex-row justify-between">
        <div className="max-w-[40%] flex flex-col gap-4">
          <div className="font-inter font-semibold text-xl">Headline</div>
          <div className="font-bold text-4xl">{currentPost.title}</div>
          <div className="font-inter text-lg font-normal">{currentPost.description}</div>
          <div className="flex flex-row items-center gap-2 font-normal text-sm">
            <img className='w-[14px] h-[14px]' src={'/calendar.png'} alt="calendar" />
            {formatDate(currentPost.pubDate)}
          </div>
          <div className='flex flex-row items-center gap-2 text-[#0090FF] font-medium text-lg'>
            Baca Selengkapnya
            <img className='w-[12px] h-[12px]' src={"/arrow_up.png"} alt="" />
            </div>
        </div>

        <div>
          <img src={currentPost.thumbnail} alt="Headline Image" className="w-[800px] rounded-[20px]" />
        </div>
      </div>

      <div className="mt-28 font-inter text-xl font-medium flex items-center justify-center gap-6">
        <button onClick={handlePrev} className="border-none p-2 cursor-pointer">
          &lt;
        </button>
        <span className="mx-2">
          {currentIndex + 1} dari {limitedData.length}
        </span>
        <button onClick={handleNext} className="border-none p-2 cursor-pointer">
          &gt;
        </button>
      </div>
    </div>
  );
}
