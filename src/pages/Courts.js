import React from "react";
import { Filter, Clock, MapPin, Star } from "lucide-react";
import Navbar from "components/Navbar";
import Footer from "components/Footer";
import useCourts from "hooks/Courts";

const Courts = () => {
  const { courts, currentPage, totalItems, totalPages, setCurrentPage, facilities, locations } = useCourts();
  return (
    <div className="bg-emerald-50 min-h-screen">
      <Navbar />
      {/* Breadcrumb */}
      <div className="max-w-7xl mx-auto px-4 py-4">
        <div className="text-sm text-gray-600">Home / Court Booking</div>
      </div>

      {/* Header */}
      <div className="max-w-7xl mx-auto px-4 mb-8">
        <h1 className="text-3xl font-serif text-gray-900">Book a Court</h1>
        <p className="text-gray-600 mt-2">Find and book the perfect futsal court for your game</p>
      </div>

      <div className="max-w-7xl mx-auto px-4">
        <div className="grid grid-cols-1 lg:grid-cols-4 gap-8">
          {/* Filter Sidebar */}
          <div className="bg-white p-6 rounded-lg shadow-sm h-fit">
            <div className="flex items-center justify-between mb-4">
              <span className="font-medium flex items-center">
                <Filter className="h-5 w-5 mr-2" />
                Filters
              </span>
              <button className="text-emerald-600 text-sm">Reset</button>
            </div>

            {/* Area/Location */}
            <div className="border-b pb-4 mb-4">
              <h3 className="font-medium mb-2">Location</h3>
              <div className="space-y-2">
                {locations.map((area) => (
                  <label
                    key={area.id}
                    className="flex items-center"
                  >
                    <input
                      type="checkbox"
                      className="rounded text-emerald-600 mr-2"
                    />
                    <span className="text-gray-600">{area.name}</span>
                  </label>
                ))}
              </div>
            </div>

            {/* Facilities */}
            <div className="border-b pb-4 mb-4">
              <h3 className="font-medium mb-2">Facilities</h3>
              <div className="space-y-2">
                {facilities.map((facility) => (
                  <label
                    key={facility.id}
                    className="flex items-center"
                  >
                    <input
                      type="checkbox"
                      className="rounded text-emerald-600 mr-2"
                    />
                    <span className="text-gray-600">{facility.name}</span>
                  </label>
                ))}
              </div>
            </div>

            {/* Price Range */}
            <div className="border-b pb-4 mb-4">
              <h3 className="font-medium mb-2">Price Range (per hour)</h3>
              <div className="grid grid-cols-2 gap-2">
                <input
                  type="number"
                  placeholder="Min"
                  className="p-2 border rounded text-sm"
                />
                <input
                  type="number"
                  placeholder="Max"
                  className="p-2 border rounded text-sm"
                />
              </div>
            </div>

            {/* Court Type */}
            <div>
              <h3 className="font-medium mb-2">Court Type</h3>
              <div className="space-y-2">
                {["Indoor", "Outdoor", "Vinyl", "Rubber", "Synthetic Grass"].map((type) => (
                  <label
                    key={type}
                    className="flex items-center"
                  >
                    <input
                      type="checkbox"
                      className="rounded text-emerald-600 mr-2"
                    />
                    <span className="text-gray-600">{type}</span>
                  </label>
                ))}
              </div>
            </div>
          </div>

          {/* Courts Grid */}
          <div className="lg:col-span-3">
            <div className="bg-white p-4 rounded-lg shadow-sm mb-6">
              <div className="flex justify-between items-center">
                <span className="text-gray-600">Showing {courts.length} courts available</span>
              </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {courts.map((court) => (
                <div
                  key={court.id}
                  className="bg-white rounded-lg shadow-sm overflow-hidden hover:shadow-md transition-shadow"
                >
                  <div className="relative">
                    <img
                      src={`/api/placeholder/800/400`}
                      alt="Futsal Court"
                      className="w-full h-48 object-cover"
                    />
                    <div className="absolute top-4 left-4">
                      <span className="bg-emerald-600 text-white px-3 py-1 rounded-full text-sm">Indoor</span>
                    </div>
                  </div>
                  <div className="p-4">
                    <h3 className="text-lg font-medium text-gray-900">Champion Futsal Arena {court.name}</h3>
                    <div className="flex items-center text-gray-600 text-sm mt-2">
                      <MapPin className="h-4 w-4 mr-1" />
                      <span>South Jakarta</span>
                    </div>
                    <div className="flex items-center text-gray-600 text-sm mt-1">
                      <Clock className="h-4 w-4 mr-1" />
                      <span>
                        Open {court.opening_hours} - {court.closing_hours}
                      </span>
                    </div>
                    <div className="mt-2 flex items-center">
                      <Star className="h-4 w-4 text-yellow-400 fill-current" />
                      <span className="ml-1 text-sm text-gray-600">4.5 (128 reviews)</span>
                    </div>
                    <div className="mt-4 flex items-center justify-between">
                      <div>
                        <span className="text-lg font-semibold text-emerald-600">Rp {court.price_per_hour}</span>
                        <span className="text-sm text-gray-600">/hour</span>
                      </div>
                      <button className="px-4 py-2 bg-emerald-600 text-white rounded-full hover:bg-emerald-700 transition-colors text-sm">Book Now</button>
                    </div>
                  </div>
                </div>
              ))}
            </div>

            {/* Pagination */}
            <div className="my-8 flex justify-center">
              <div className="flex space-x-2">
                <button
                  className="px-4 py-2 border rounded hover:bg-emerald-50"
                  disabled={currentPage === 1}
                  onClick={() => setCurrentPage((prev) => Math.max(prev - 1, 1))}
                >
                  Previous
                </button>
                {Array.from({ length: totalPages }, (_, index) => index + 1).map((page) => (
                  <button
                    key={page}
                    className={`w-10 h-10 rounded ${page === currentPage ? "bg-emerald-600 text-white" : "border hover:bg-emerald-50"}`}
                    onClick={() => setCurrentPage(page)}
                  >
                    {page}
                  </button>
                ))}
                <button
                  className="px-4 py-2 border rounded hover:bg-emerald-50"
                  disabled={currentPage === totalPages}
                  onClick={() => setCurrentPage((prev) => Math.min(prev + 1, totalPages))}
                >
                  Next
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default Courts;
