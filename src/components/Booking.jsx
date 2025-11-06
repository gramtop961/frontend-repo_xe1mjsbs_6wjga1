import React, { useState } from 'react';

const Booking = () => {
  const [form, setForm] = useState({ name: '', email: '', date: '', type: 'Wedding', message: '' });
  const [sent, setSent] = useState(false);

  const onChange = (e) => setForm({ ...form, [e.target.name]: e.target.value });

  const onSubmit = (e) => {
    e.preventDefault();
    // In a real app, send to backend. For now just simulate success.
    setTimeout(() => setSent(true), 600);
  };

  return (
    <section id="booking" className="bg-white py-16">
      <div className="mx-auto max-w-7xl px-6">
        <div className="mb-8">
          <h2 className="text-3xl font-semibold">Cek Ketersediaan & Reservasi</h2>
          <p className="mt-2 text-gray-600">Isi formulir singkat ini, tim kami akan menghubungi Anda dalam waktu singkat.</p>
        </div>

        <div className="grid gap-8 lg:grid-cols-2">
          <form onSubmit={onSubmit} className="rounded-2xl border border-gray-200 p-6 shadow-sm">
            <div className="grid gap-4 sm:grid-cols-2">
              <div>
                <label className="text-sm font-medium">Nama</label>
                <input name="name" value={form.name} onChange={onChange} required className="mt-1 w-full rounded-xl border border-gray-300 px-3 py-2 focus:border-indigo-500 focus:outline-none" />
              </div>
              <div>
                <label className="text-sm font-medium">Email</label>
                <input type="email" name="email" value={form.email} onChange={onChange} required className="mt-1 w-full rounded-xl border border-gray-300 px-3 py-2 focus:border-indigo-500 focus:outline-none" />
              </div>
              <div>
                <label className="text-sm font-medium">Tanggal Acara</label>
                <input type="date" name="date" value={form.date} onChange={onChange} required className="mt-1 w-full rounded-xl border border-gray-300 px-3 py-2 focus:border-indigo-500 focus:outline-none" />
              </div>
              <div>
                <label className="text-sm font-medium">Jenis Acara</label>
                <select name="type" value={form.type} onChange={onChange} className="mt-1 w-full rounded-xl border border-gray-300 px-3 py-2 focus:border-indigo-500 focus:outline-none">
                  <option>Wedding</option>
                  <option>Meeting</option>
                  <option>Seminar</option>
                  <option>Private Event</option>
                </select>
              </div>
              <div className="sm:col-span-2">
                <label className="text-sm font-medium">Pesan</label>
                <textarea name="message" value={form.message} onChange={onChange} rows={4} className="mt-1 w-full rounded-xl border border-gray-300 px-3 py-2 focus:border-indigo-500 focus:outline-none" placeholder="Ceritakan kebutuhan Anda..." />
              </div>
            </div>
            <button type="submit" className="mt-6 w-full rounded-xl bg-indigo-600 px-4 py-3 font-semibold text-white shadow hover:bg-indigo-700">Kirim Permintaan</button>
            {sent && (
              <p className="mt-3 text-sm text-green-600">Terima kasih! Kami akan menghubungi Anda segera.</p>
            )}
          </form>

          <div className="rounded-2xl bg-gray-50 p-6">
            <h3 className="text-lg font-semibold">Fasilitas Utama</h3>
            <ul className="mt-3 list-disc space-y-1 pl-5 text-gray-700">
              <li>Area hall luas dengan ceiling tinggi</li>
              <li>Lighting & sound system profesional</li>
              <li>Ruang VIP dan ruang ganti pengantin</li>
              <li>Parkir luas dan mudah diakses</li>
              <li>Tim dekorasi & koordinasi acara</li>
            </ul>

            <div className="mt-6 overflow-hidden rounded-xl">
              <video
                className="h-64 w-full object-cover"
                src="https://videos.pexels.com/video-files/856668/856668-uhd_2560_1440_25fps.mp4"
                autoPlay
                muted
                loop
                playsInline
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Booking;
