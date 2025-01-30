import React from "react";
import { useNavigate } from "react-router-dom";

const HeroSection = () => {
  const navigate = useNavigate();
  const schedule = () => navigate("/schedule");
  return (
    <div className="relative min-h-screen bg-gradient-to-r from-emerald-100 to-cyan-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center py-12 md:py-20 lg:py-28">
          {/* Text Section */}
          <div className="text-center md:text-left space-y-6">
            <span className="text-emerald-500 font-semibold text-sm tracking-wider uppercase">Platform Futsal #1 di Indonesia</span>
            <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-serif tracking-tight text-gray-900">
              Temukan Tim Futsal
              <span className="block text-emerald-500 mt-3">Main Kapan Saja</span>
            </h1>
            <p className="text-base sm:text-lg text-gray-600 max-w-md mx-auto md:mx-0">Booking lapangan, cari tim lawan, dan beli perlengkapan futsal. Semua dalam satu platform untuk pengalaman bermain yang lebih seru.</p>
            <div className="flex flex-col sm:flex-row justify-center md:justify-start space-y-4 sm:space-y-0 sm:space-x-4">
              <button
                onClick={schedule}
                className="px-6 sm:px-8 py-3 bg-emerald-500 text-white rounded-full hover:bg-emerald-600 transition shadow-lg hover:shadow-xl transform hover:translate-y-0.5"
              >
                Cari Pertandingan
              </button>
              <button className="px-6 sm:px-8 py-3 border-2 border-emerald-500 text-emerald-500 rounded-full hover:bg-emerald-100 transition">Buka Toko</button>
            </div>
            <div className="grid grid-cols-3 gap-4 pt-6">
              <div>
                <span className="block text-2xl sm:text-3xl font-bold text-gray-900">500+</span>
                <span className="text-sm text-gray-600">Lapangan Futsal</span>
              </div>
              <div>
                <span className="block text-2xl sm:text-3xl font-bold text-gray-900">1000+</span>
                <span className="text-sm text-gray-600">Tim Terdaftar</span>
              </div>
              <div>
                <span className="block text-2xl sm:text-3xl font-bold text-gray-900">50k+</span>
                <span className="text-sm text-gray-600">Produk Futsal</span>
              </div>
            </div>
          </div>

          {/* Image Section */}
          <div className="relative mt-8 md:mt-0">
            <img
              src="/api/placeholder/600/400"
              alt="Futsal Match"
              className="rounded-lg shadow-2xl w-full object-cover"
            />
            <div className="absolute -bottom-6 -left-6 bg-white p-4 rounded-lg shadow-lg hidden sm:block">
              <div className="flex items-center space-x-2">
                <svg
                  className="h-5 w-5 text-yellow-400 fill-current"
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 16 16"
                >
                  <path d="M3.612 15.443c-.396.198-.848-.149-.756-.592l.83-4.73-3.522-3.356c-.328-.31-.158-.888.283-.95l4.898-.696 2.104-4.221c.197-.396.73-.396.927 0l2.104 4.221 4.898.696c.441.062.611.64.283.95l-3.522 3.356.83 4.73c.092.443-.36.79-.756.592l-4.186-2.195-4.186 2.195z" />
                </svg>
                <span className="font-medium text-gray-800">4.8/5.0</span>
              </div>
              <p className="text-sm text-gray-600 mt-1">2,000+ ulasan pengguna</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HeroSection;
