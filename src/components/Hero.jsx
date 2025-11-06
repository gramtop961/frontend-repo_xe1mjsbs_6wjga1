import React from 'react';

const Hero = () => {
  return (
    <section id="home" className="relative h-[90vh] w-full overflow-hidden rounded-b-3xl">
      <video
        className="absolute inset-0 h-full w-full object-cover"
        src="https://videos.pexels.com/video-files/3129974/3129974-uhd_2560_1440_25fps.mp4"
        autoPlay
        loop
        muted
        playsInline
      />
      <div className="absolute inset-0 bg-gradient-to-b from-black/60 via-black/30 to-black/70 pointer-events-none" />

      <div className="relative z-10 mx-auto flex h-full max-w-7xl flex-col items-center justify-center px-6 text-center text-white">
        <span className="mb-4 inline-flex items-center rounded-full bg-white/10 px-4 py-1 text-xs font-medium backdrop-blur">
          Flosh Hall • Wedding & Meeting Venue
        </span>
        <h1 className="font-display text-4xl font-semibold leading-tight sm:text-5xl md:text-6xl">
          Ruang Elegan untuk Momen Tak Terlupakan
        </h1>
        <p className="mt-4 max-w-2xl text-base text-white/90 sm:text-lg">
          Tempat serbaguna dengan desain modern dan layanan profesional untuk
          resepsi pernikahan, rapat bisnis, dan berbagai acara spesial Anda.
        </p>
        <div className="mt-8 flex flex-wrap items-center justify-center gap-4">
          <a
            href="#gallery"
            className="rounded-full bg-white px-6 py-3 text-sm font-semibold text-gray-900 shadow hover:bg-gray-100"
          >
            Lihat Galeri
          </a>
          <a
            href="#booking"
            className="rounded-full border border-white/70 px-6 py-3 text-sm font-semibold text-white hover:bg-white/10"
          >
            Cek Ketersediaan
          </a>
        </div>
      </div>
    </section>
  );
};

export default Hero;
