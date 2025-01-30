import React from "react";
import { Search, Users, Trophy, Star, Filter, User, MapPin, Calendar } from "lucide-react";
import Navbar from "components/Navbar";
import Footer from "components/Footer";

const Players = () => {
  return (
    <div className="bg-emerald-50 min-h-screen">
      <Navbar />
      {/* Breadcrumb */}
      <div className="max-w-7xl mx-auto px-4 py-4">
        <div className="text-sm text-gray-600">Home / Players Directory</div>
      </div>

      {/* Header */}
      <div className="max-w-7xl mx-auto px-4 mb-8">
        <h1 className="text-3xl font-serif text-gray-900">Player Directory</h1>
        <p className="text-gray-600 mt-2">Browse and discover our talented futsal players</p>
      </div>

      <div className="max-w-7xl mx-auto px-4">
        <div className="grid grid-cols-1 lg:grid-cols-4 gap-8">
          {/* Filter Sidebar */}
          <div className="bg-white p-6 rounded-lg shadow-sm h-fit">
            <div className="flex items-center justify-between mb-4">
              <span className="font-medium flex items-center">
                <Filter className="h-5 w-5 mr-2" />
                Filter Players
              </span>
              <button className="text-emerald-600 text-sm">Reset</button>
            </div>

            {/* Search */}
            <div className="border-b pb-4 mb-4">
              <div className="relative">
                <input
                  type="text"
                  placeholder="Search players..."
                  className="w-full p-2 pl-8 border rounded text-sm"
                />
                <Search className="h-4 w-4 text-gray-400 absolute left-2 top-3" />
              </div>
            </div>

            {/* Position */}
            <div className="border-b pb-4 mb-4">
              <h3 className="font-medium mb-2">Position</h3>
              <div className="space-y-2">
                {["Goalkeeper", "Defender", "Winger", "Pivot"].map((position) => (
                  <label key={position} className="flex items-center">
                    <input type="checkbox" className="rounded text-emerald-600 mr-2" />
                    <span className="text-gray-600">{position}</span>
                  </label>
                ))}
              </div>
            </div>

            {/* Experience Level */}
            <div className="border-b pb-4 mb-4">
              <h3 className="font-medium mb-2">Experience Level</h3>
              <div className="space-y-2">
                {["Beginner", "Intermediate", "Advanced", "Professional"].map((level) => (
                  <label key={level} className="flex items-center">
                    <input type="checkbox" className="rounded text-emerald-600 mr-2" />
                    <span className="text-gray-600">{level}</span>
                  </label>
                ))}
              </div>
            </div>

            {/* Age Range */}
            <div className="border-b pb-4 mb-4">
              <h3 className="font-medium mb-2">Age Range</h3>
              <div className="space-y-2">
                {["Under 18", "18-24", "25-30", "Over 30"].map((age) => (
                  <label key={age} className="flex items-center">
                    <input type="checkbox" className="rounded text-emerald-600 mr-2" />
                    <span className="text-gray-600">{age}</span>
                  </label>
                ))}
              </div>
            </div>
          </div>

          {/* Players Content */}
          <div className="lg:col-span-3">
            {/* Featured Players */}
            <div className="mb-8">
              <h2 className="text-xl font-medium mb-4">Featured Players</h2>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {[1, 2].map((player) => (
                  <div key={player} className="bg-white rounded-lg shadow-sm overflow-hidden">
                    <div className="relative">
                      <img
                        src={`/api/placeholder/400/300`}
                        alt="Player"
                        className="w-full h-48 object-cover"
                      />
                      <div className="absolute top-4 left-4">
                        <span className="bg-emerald-600 text-white px-3 py-1 rounded-full text-sm flex items-center">
                          <Star className="h-4 w-4 mr-1" />
                          Featured
                        </span>
                      </div>
                    </div>
                    <div className="p-4">
                      <h3 className="text-lg font-medium">Alex Johnson</h3>
                      <p className="text-emerald-600 text-sm">Pivot / Forward</p>
                      <div className="mt-2 space-y-1">
                        <div className="flex items-center text-gray-600 text-sm">
                          <Trophy className="h-4 w-4 mr-2" />
                          <span>15 Tournament Wins</span>
                        </div>
                        <div className="flex items-center text-gray-600 text-sm">
                          <Calendar className="h-4 w-4 mr-2" />
                          <span>5 Years Experience</span>
                        </div>
                        <div className="flex items-center text-gray-600 text-sm">
                          <MapPin className="h-4 w-4 mr-2" />
                          <span>Jakarta Selatan</span>
                        </div>
                      </div>
                      <button className="mt-4 w-full px-4 py-2 bg-emerald-600 text-white rounded-full hover:bg-emerald-700 transition-colors text-sm">
                        View Profile
                      </button>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* All Players */}
            <div className="mb-8">
              <h2 className="text-xl font-medium mb-4">All Players</h2>
              <div className="grid grid-cols-1 gap-4">
                {[1, 2, 3, 4, 5].map((player) => (
                  <div key={player} className="bg-white rounded-lg shadow-sm p-4">
                    <div className="flex items-center space-x-4">
                      <div className="relative">
                        <img
                          src={`/api/placeholder/100/100`}
                          alt="Player"
                          className="w-16 h-16 rounded-full object-cover"
                        />
                        <div className="absolute -bottom-1 -right-1 bg-green-500 w-4 h-4 rounded-full border-2 border-white"></div>
                      </div>
                      <div className="flex-1">
                        <div className="flex items-center justify-between">
                          <h3 className="font-medium">Michael Smith</h3>
                          <span className="text-sm text-emerald-600">Available</span>
                        </div>
                        <p className="text-sm text-gray-600">Defender</p>
                        <div className="mt-1 flex items-center space-x-4">
                          <span className="text-sm text-gray-500">Age: 24</span>
                          <span className="text-sm text-gray-500">⭐ 4.8/5.0</span>
                          <span className="text-sm text-gray-500">120 Matches</span>
                        </div>
                      </div>
                      <button className="px-4 py-2 bg-emerald-600 text-white rounded-full hover:bg-emerald-700 transition-colors text-sm">
                        Contact
                      </button>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Pagination */}
            <div className="flex items-center justify-center space-x-2">
              <button className="px-4 py-2 border rounded-lg text-gray-600 hover:bg-gray-50">Previous</button>
              <button className="px-4 py-2 bg-emerald-600 text-white rounded-lg">1</button>
              <button className="px-4 py-2 border rounded-lg text-gray-600 hover:bg-gray-50">2</button>
              <button className="px-4 py-2 border rounded-lg text-gray-600 hover:bg-gray-50">3</button>
              <button className="px-4 py-2 border rounded-lg text-gray-600 hover:bg-gray-50">Next</button>
            </div>
          </div>
        </div>
      </div>
      <div className="h-20"></div>
      <Footer />
    </div>
  );
};

export default Players;