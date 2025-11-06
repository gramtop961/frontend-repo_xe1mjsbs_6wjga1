import React from 'react'
import Navbar from './components/Navbar'
import Hero from './components/Hero'
import Features from './components/Features'
import Gallery from './components/Gallery'
import Booking from './components/Booking'

function App() {
  return (
    <div className="min-h-screen bg-white text-gray-900">
      <Navbar />
      <Hero />
      <Features />
      <Gallery />
      <Booking />

      <footer id="contact" className="border-t border-gray-200 bg-white">
        <div className="mx-auto max-w-7xl px-6 py-10">
          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            <div>
              <h4 className="font-semibold">Flosh Hall</h4>
              <p className="mt-2 text-sm text-gray-600">Venue premium untuk pernikahan, meeting, dan berbagai acara spesial Anda.</p>
            </div>
            <div>
              <h4 className="font-semibold">Alamat</h4>
              <p className="mt-2 text-sm text-gray-600">Jl. Contoh Raya No. 123, Jakarta</p>
            </div>
            <div>
              <h4 className="font-semibold">Kontak</h4>
              <p className="mt-2 text-sm text-gray-600">(+62) 812-3456-7890</p>
              <p className="text-sm text-gray-600">hello@floshhall.com</p>
            </div>
            <div>
              <h4 className="font-semibold">Ikuti Kami</h4>
              <div className="mt-2 flex gap-3 text-sm text-gray-600">
                <a href="#" className="hover:text-gray-900">Instagram</a>
                <a href="#" className="hover:text-gray-900">TikTok</a>
                <a href="#" className="hover:text-gray-900">YouTube</a>
              </div>
            </div>
          </div>
          <p className="mt-8 text-center text-xs text-gray-500">© {new Date().getFullYear()} Flosh Hall. All rights reserved.</p>
        </div>
      </footer>
    </div>
  )
}

export default App
