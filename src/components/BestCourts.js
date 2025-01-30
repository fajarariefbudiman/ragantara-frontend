import React from "react";
import { Star, Clock, Users, MapPin } from "lucide-react";

const bestFields = [
  {
    id: 1,
    name: "Galaxy Futsal Arena",
    location: "Kebayoran Baru, Jakarta Selatan",
    description: "Indoor court with premium facilities",
    image: "/api/placeholder/900/500",
    type: "Indoor",
    rating: 4.9,
    reviews: 128,
    price: "Rp 250.000",
    capacity: "5v5",
    openHours: "07:00 - 23:00",
  },
  {
    id: 2,
    name: "Champion Futsal Center",
    location: "Menteng, Jakarta Pusat",
    description: "Professional synthetic grass field",
    image: "/api/placeholder/900/500",
    type: "Outdoor",
    rating: 4.8,
    reviews: 95,
    price: "Rp 200.000",
    capacity: "5v5/7v7",
    openHours: "06:00 - 22:00",
  },
  {
    id: 3,
    name: "Elite Sport Center",
    location: "BSD, Tangerang Selatan",
    description: "FIFA standard lighting system",
    image: "/api/placeholder/900/500",
    type: "Indoor",
    rating: 4.7,
    reviews: 84,
    price: "Rp 300.000",
    capacity: "5v5",
    openHours: "08:00 - 22:00",
  },
  {
    id: 4,
    name: "Victory Futsal Ground",
    location: "Kelapa Gading, Jakarta Utara",
    description: "Multi-purpose sports facility",
    image: "/api/placeholder/900/500",
    type: "Outdoor",
    rating: 4.6,
    reviews: 73,
    price: "Rp 180.000",
    capacity: "5v5/7v7",
    openHours: "06:00 - 23:00",
  },
];

export default function BestFields() {
  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
      <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-12">
        <div>
          <h2 className="text-3xl font-bold text-gray-900">Top Rated Courts</h2>
          <p className="mt-2 text-gray-600">Book the best futsal experience in your area</p>
        </div>
        <div className="mt-4 md:mt-0 flex space-x-3">
          <button className="px-4 py-2 bg-emerald-500 text-white rounded-lg hover:bg-emerald-600 transition-colors">All Fields</button>
          <button className="px-4 py-2 bg-gray-100 text-gray-700 rounded-lg hover:bg-gray-200 transition-colors">Indoor</button>
          <button className="px-4 py-2 bg-gray-100 text-gray-700 rounded-lg hover:bg-gray-200 transition-colors">Outdoor</button>
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        {bestFields.map((field) => (
          <div
            key={field.id}
            className="group bg-white rounded-2xl overflow-hidden hover:shadow-xl transition-all duration-300 border border-gray-100"
          >
            <div className="relative">
              <img
                src={field.image}
                alt={field.name}
                className="w-full h-48 object-cover group-hover:scale-105 transition-transform duration-300"
              />
              <div className="absolute top-4 right-4 bg-white/90 backdrop-blur-sm px-3 py-1 rounded-full">
                <div className="flex items-center space-x-1">
                  <Star className="w-4 h-4 text-yellow-400 fill-current" />
                  <span className="text-sm font-medium">{field.rating}</span>
                </div>
              </div>
              <div className="absolute bottom-4 left-4 bg-emerald-500 text-white px-3 py-1 rounded-full text-sm">{field.type}</div>
            </div>

            <div className="p-5">
              <div className="mb-3">
                <h3 className="text-lg font-semibold text-gray-900 mb-1">{field.name}</h3>
                <div className="flex items-center text-gray-500 text-sm">
                  <MapPin className="w-4 h-4 mr-1" />
                  {field.location}
                </div>
              </div>

              <div className="flex items-center justify-between mb-4">
                <div className="flex items-center space-x-4 text-sm text-gray-600">
                  <div className="flex items-center">
                    <Users className="w-4 h-4 mr-1" />
                    {field.capacity}
                  </div>
                  <div className="flex items-center">
                    <Clock className="w-4 h-4 mr-1" />
                    {field.openHours}
                  </div>
                </div>
              </div>

              <div className="flex items-center justify-between pt-3 border-t">
                <div>
                  <span className="text-lg font-bold text-emerald-600">{field.price}</span>
                  <span className="text-sm text-gray-500">/hour</span>
                </div>
                <button className="px-4 py-2 bg-emerald-500 text-white rounded-lg hover:bg-emerald-600 transition-colors">Book Now</button>
              </div>
            </div>
          </div>
        ))}
      </div>

      <div className="mt-12 text-center">
        <a
          href="/booking"
          className="inline-block px-6 py-3 bg-emerald-900 text-white rounded-lg hover:bg-emerald-800 transition-colors"
        >
          Explore All Fields
        </a>
      </div>
    </div>
  );
}
