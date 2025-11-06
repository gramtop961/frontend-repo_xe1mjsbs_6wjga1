import React from 'react';
import { Star, Building2, Users, CalendarCheck } from 'lucide-react';

const features = [
  {
    icon: Building2,
    title: 'Ruang Serbaguna',
    desc: 'Hall luas dengan konfigurasi fleksibel untuk pernikahan, meeting, dan event lainnya.'
  },
  {
    icon: Users,
    title: 'Kapasitas Besar',
    desc: 'Mampu menampung hingga ratusan tamu dengan kenyamanan maksimal.'
  },
  {
    icon: CalendarCheck,
    title: 'Mudah Dipesan',
    desc: 'Proses reservasi cepat, jadwal transparan, dan dukungan tim on-site.'
  },
  {
    icon: Star,
    title: 'Layanan Premium',
    desc: 'Dekorasi, sound system, dan catering berkualitas untuk pengalaman terbaik.'
  },
];

const Features = () => {
  return (
    <section className="bg-gray-50 py-16" id="features">
      <div className="mx-auto max-w-7xl px-6">
        <h2 className="text-center text-3xl font-semibold">Kenapa Memilih Flosh Hall?</h2>
        <p className="mx-auto mt-2 max-w-2xl text-center text-gray-600">Kami menghadirkan kombinasi desain elegan, fasilitas lengkap, dan layanan profesional untuk memastikan acara Anda berjalan sempurna.</p>

        <div className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {features.map(({ icon: Icon, title, desc }, i) => (
            <div key={i} className="group rounded-2xl border border-gray-200 bg-white p-6 shadow-sm transition hover:shadow-md">
              <div className="mb-4 inline-flex rounded-xl bg-indigo-50 p-3 text-indigo-600">
                <Icon size={22} />
              </div>
              <h3 className="text-lg font-semibold">{title}</h3>
              <p className="mt-2 text-sm text-gray-600">{desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Features;
