import React from 'react';

const images = [
  'https://images.unsplash.com/photo-1551632436-cbf8dd35adfa?q=80&w=1600&auto=format&fit=crop',
  'https://images.unsplash.com/photo-1524234882166-5f72a006e8d6?q=80&w=1600&auto=format&fit=crop',
  'https://images.unsplash.com/photo-1537633552985-df8429e8048b?q=80&w=1600&auto=format&fit=crop',
  'https://images.unsplash.com/photo-1511795409834-ef04bbd61622?q=80&w=1600&auto=format&fit=crop',
  'https://images.unsplash.com/photo-1500530855697-b586d89ba3ee?q=80&w=1600&auto=format&fit=crop',
  'https://images.unsplash.com/photo-1511795409834-ef04bbd61622?q=80&w=1600&auto=format&fit=crop',
  'https://images.unsplash.com/photo-1519681393784-d120267933ba?q=80&w=1600&auto=format&fit=crop',
  'https://images.unsplash.com/photo-1514517220033-667a9464905c?q=80&w=1600&auto=format&fit=crop',
];

const Gallery = () => {
  return (
    <section id="gallery" className="mx-auto max-w-7xl px-6 py-16">
      <div className="mb-8 flex items-end justify-between">
        <div>
          <h2 className="text-3xl font-semibold">Galeri Flosh Hall</h2>
          <p className="mt-2 text-gray-600">Koleksi foto suasana, dekorasi, dan momen terbaik di venue kami.</p>
        </div>
        <a href="#booking" className="text-sm font-semibold text-indigo-600 hover:text-indigo-700">Pesan Sekarang →</a>
      </div>

      <div className="columns-1 gap-4 sm:columns-2 lg:columns-3 [column-fill:_balance]"><!-- masonary like grid -->
        {images.map((src, idx) => (
          <img
            key={idx}
            src={src}
            alt={`Galeri ${idx + 1}`}
            loading="lazy"
            className="mb-4 w-full break-inside-avoid rounded-xl object-cover shadow-md transition hover:scale-[1.01]"
          />
        ))}
      </div>

      <div className="mt-12 overflow-hidden rounded-2xl">
        <video
          className="h-[420px] w-full object-cover"
          src="https://videos.pexels.com/video-files/856666/856666-uhd_2560_1440_25fps.mp4"
          controls
        />
      </div>
    </section>
  );
};

export default Gallery;
