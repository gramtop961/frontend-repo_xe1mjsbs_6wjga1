import React from 'react';

const Navbar = () => {
  return (
    <header className="sticky top-0 z-50 bg-white/80 backdrop-blur">
      <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-4">
        <a href="#home" className="font-display text-xl font-semibold">Flosh Hall</a>
        <nav className="hidden items-center gap-6 text-sm font-medium text-gray-700 md:flex">
          <a href="#features" className="hover:text-gray-900">Fasilitas</a>
          <a href="#gallery" className="hover:text-gray-900">Galeri</a>
          <a href="#booking" className="hover:text-gray-900">Reservasi</a>
          <a href="#contact" className="rounded-full bg-gray-900 px-4 py-2 text-white hover:bg-black">Kontak</a>
        </nav>
      </div>
    </header>
  );
};

export default Navbar;
