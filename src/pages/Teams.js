import React from "react";
import { Search, Users, Trophy, Star, Filter, MapPin, Calendar, Shield, Activity, Check } from "lucide-react";
import Navbar from "components/Navbar";
import Footer from "components/Footer";

const Teams = () => {
  return (
    <div className="bg-emerald-50 min-h-screen">
      <Navbar />
      {/* Breadcrumb */}
      <div className="max-w-7xl mx-auto px-4 py-4">
        <div className="text-sm text-gray-600">Home / Teams Directory</div>
      </div>

      {/* Header */}
      <div className="max-w-7xl mx-auto px-4 mb-8">
        <h1 className="text-3xl font-serif text-gray-900">Teams Directory</h1>
        <p className="text-gray-600 mt-2">Discover and join futsal teams in your area</p>
      </div>

      <div className="max-w-7xl mx-auto px-4">
        <div className="grid grid-cols-1 lg:grid-cols-4 gap-8">
          {/* Filter Sidebar */}
          <div className="bg-white p-6 rounded-lg shadow-sm h-fit">
            <div className="flex items-center justify-between mb-4">
              <span className="font-medium flex items-center">
                <Filter className="h-5 w-5 mr-2" />
                Filter Teams
              </span>
              <button className="text-emerald-600 text-sm">Reset</button>
            </div>

            {/* Search */}
            <div className="border-b pb-4 mb-4">
              <div className="relative">
                <input
                  type="text"
                  placeholder="Search teams..."
                  className="w-full p-2 pl-8 border rounded text-sm"
                />
                <Search className="h-4 w-4 text-gray-400 absolute left-2 top-3" />
              </div>
            </div>

            {/* Division */}
            <div className="border-b pb-4 mb-4">
              <h3 className="font-medium mb-2">Division</h3>
              <div className="space-y-2">
                {["Premier Division", "Division 1", "Division 2", "Amateur"].map((division) => (
                  <label
                    key={division}
                    className="flex items-center"
                  >
                    <input
                      type="checkbox"
                      className="rounded text-emerald-600 mr-2"
                    />
                    <span className="text-gray-600">{division}</span>
                  </label>
                ))}
              </div>
            </div>

            {/* Location */}
            <div className="border-b pb-4 mb-4">
              <h3 className="font-medium mb-2">Location</h3>
              <div className="space-y-2">
                {["North Jakarta", "South Jakarta", "East Jakarta", "West Jakarta", "Central Jakarta"].map((location) => (
                  <label
                    key={location}
                    className="flex items-center"
                  >
                    <input
                      type="checkbox"
                      className="rounded text-emerald-600 mr-2"
                    />
                    <span className="text-gray-600">{location}</span>
                  </label>
                ))}
              </div>
            </div>

            {/* Team Status */}
            <div className="border-b pb-4 mb-4">
              <h3 className="font-medium mb-2">Team Status</h3>
              <div className="space-y-2">
                {["Recruiting", "Full Squad", "New Team", "Established"].map((status) => (
                  <label
                    key={status}
                    className="flex items-center"
                  >
                    <input
                      type="checkbox"
                      className="rounded text-emerald-600 mr-2"
                    />
                    <span className="text-gray-600">{status}</span>
                  </label>
                ))}
              </div>
            </div>
          </div>

          {/* Teams Content */}
          <div className="lg:col-span-3">
            {/* Featured Teams */}
            <div className="mb-8">
              <h2 className="text-xl font-medium mb-4">Featured Teams</h2>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {[1, 2].map((team) => (
                  <div
                    key={team}
                    className="bg-white rounded-lg shadow-sm overflow-hidden"
                  >
                    <div className="relative">
                      <img
                        src={`/api/placeholder/400/200`}
                        alt="Team"
                        className="w-full h-48 object-cover"
                      />
                      <div className="absolute top-4 left-4">
                        <span className="bg-emerald-600 text-white px-3 py-1 rounded-full text-sm flex items-center">
                          <Star className="h-4 w-4 mr-1" />
                          Premier Division
                        </span>
                      </div>
                    </div>
                    <div className="p-4">
                      <div className="flex items-center gap-4">
                        <img
                          src={`/api/placeholder/60/60`}
                          alt="Team Logo"
                          className="w-16 h-16 rounded-full border-4 border-white shadow-lg"
                        />
                        <div>
                          <h3 className="text-lg font-medium">Thunder FC</h3>
                          <p className="text-emerald-600 text-sm">Est. 2020</p>
                        </div>
                      </div>
                      <div className="mt-4 space-y-2">
                        <div className="flex items-center text-gray-600 text-sm">
                          <Trophy className="h-4 w-4 mr-2" />
                          <span>15 Tournament Wins</span>
                        </div>
                        <div className="flex items-center text-gray-600 text-sm">
                          <Users className="h-4 w-4 mr-2" />
                          <span>12 Active Players</span>
                        </div>
                        <div className="flex items-center text-gray-600 text-sm">
                          <MapPin className="h-4 w-4 mr-2" />
                          <span>South Jakarta</span>
                        </div>
                      </div>
                      <div className="mt-4 flex items-center justify-between">
                        <span className="px-3 py-1 bg-green-100 text-green-600 rounded-full text-sm">Recruiting</span>
                        <button className="px-4 py-2 bg-emerald-600 text-white rounded-full hover:bg-emerald-700 transition-colors text-sm">View Team</button>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* All Teams */}
            <div className="mb-8">
              <h2 className="text-xl font-medium mb-4">All Teams</h2>
              <div className="grid grid-cols-1 gap-4">
                {[1, 2, 3, 4, 5].map((team) => (
                  <div
                    key={team}
                    className="bg-white rounded-lg shadow-sm p-4"
                  >
                    <div className="flex items-center gap-4">
                      <img
                        src={`/api/placeholder/80/80`}
                        alt="Team Logo"
                        className="w-20 h-20 rounded-lg object-cover"
                      />
                      <div className="flex-1">
                        <div className="flex items-center justify-between">
                          <div>
                            <h3 className="font-medium">Lightning Strikers</h3>
                            <p className="text-sm text-emerald-600">Division 1</p>
                          </div>
                          <button className="px-4 py-2 bg-emerald-600 text-white rounded-full hover:bg-emerald-700 transition-colors text-sm">Join Team</button>
                        </div>
                        <div className="mt-2 flex flex-wrap gap-4">
                          <span className="text-sm text-gray-600 flex items-center">
                            <Users className="h-4 w-4 mr-1" />
                            14 Players
                          </span>
                          <span className="text-sm text-gray-600 flex items-center">
                            <Trophy className="h-4 w-4 mr-1" />8 Trophies
                          </span>
                          <span className="text-sm text-gray-600 flex items-center">
                            <Activity className="h-4 w-4 mr-1" />
                            Won last match
                          </span>
                          <span className="text-sm text-gray-600 flex items-center">
                            <MapPin className="h-4 w-4 mr-1" />
                            East Jakarta
                          </span>
                        </div>
                        <div className="mt-2 flex gap-2">
                          <span className="px-2 py-1 bg-blue-100 text-blue-600 rounded text-xs">Active</span>
                          <span className="px-2 py-1 bg-green-100 text-green-600 rounded text-xs">Recruiting</span>
                        </div>
                      </div>
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

export default Teams;
