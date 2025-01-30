import React from "react";
import { Calendar, Trophy, Clock, MapPin, Users } from "lucide-react";
import Navbar from "components/Navbar";
import Footer from "components/Footer";

const Schedule = () => {
  return (
    <div className="bg-emerald-50 min-h-screen">
    <Navbar />
      {/* Breadcrumb */}
      <div className="max-w-7xl mx-auto px-4 py-4">
        <div className="text-sm text-gray-600">Home / Match Schedule</div>
      </div>

      {/* Header */}
      <div className="max-w-7xl mx-auto px-4 mb-8">
        <h1 className="text-3xl font-serif text-gray-900">Match Schedule</h1>
        <p className="text-gray-600 mt-2">View upcoming matches and tournaments</p>
      </div>

      <div className="max-w-7xl mx-auto px-4">
        <div className="grid grid-cols-1 lg:grid-cols-4 gap-8">
          {/* Filter Sidebar */}
          <div className="bg-white p-6 rounded-lg shadow-sm h-fit">
            <div className="flex items-center justify-between mb-4">
              <span className="font-medium flex items-center">
                <Calendar className="h-5 w-5 mr-2" />
                Filter Events
              </span>
              <button className="text-emerald-600 text-sm">Reset</button>
            </div>

            {/* Date Range */}
            <div className="border-b pb-4 mb-4">
              <h3 className="font-medium mb-2">Date Range</h3>
              <div className="space-y-2">
                <input
                  type="date"
                  className="w-full p-2 border rounded text-sm"
                />
                <input
                  type="date"
                  className="w-full p-2 border rounded text-sm"
                />
              </div>
            </div>

            {/* Event Type */}
            <div className="border-b pb-4 mb-4">
              <h3 className="font-medium mb-2">Event Type</h3>
              <div className="space-y-2">
                {["Tournament", "Friendly Match", "League Match", "Training Session"].map((type) => (
                  <label key={type} className="flex items-center">
                    <input type="checkbox" className="rounded text-emerald-600 mr-2" />
                    <span className="text-gray-600">{type}</span>
                  </label>
                ))}
              </div>
            </div>

            {/* Location */}
            <div className="border-b pb-4 mb-4">
              <h3 className="font-medium mb-2">Location</h3>
              <div className="space-y-2">
                {["North Jakarta", "South Jakarta", "East Jakarta", "West Jakarta", "Central Jakarta"].map((area) => (
                  <label key={area} className="flex items-center">
                    <input type="checkbox" className="rounded text-emerald-600 mr-2" />
                    <span className="text-gray-600">{area}</span>
                  </label>
                ))}
              </div>
            </div>
          </div>

          {/* Schedule Content */}
          <div className="lg:col-span-3">
            {/* Today's Matches */}
            <div className="mb-8">
              <h2 className="text-xl font-medium mb-4">Today's Matches</h2>
              <div className="space-y-4">
                {[1, 2, 3].map((match) => (
                  <div key={match} className="bg-white rounded-lg shadow-sm p-4">
                    <div className="flex items-center justify-between">
                      <div className="flex items-center space-x-4">
                        <div className="bg-emerald-100 p-3 rounded-lg">
                          <Clock className="h-6 w-6 text-emerald-600" />
                        </div>
                        <div>
                          <h3 className="font-medium">Team A vs Team B</h3>
                          <p className="text-sm text-gray-600">Friendly Match</p>
                        </div>
                      </div>
                      <div className="text-right">
                        <p className="font-medium text-emerald-600">19:00 - 20:00</p>
                        <p className="text-sm text-gray-600">Court 2</p>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Upcoming Tournaments */}
            <div className="mb-8">
              <h2 className="text-xl font-medium mb-4">Upcoming Tournaments</h2>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {[1, 2, 3, 4].map((tournament) => (
                  <div key={tournament} className="bg-white rounded-lg shadow-sm overflow-hidden">
                    <div className="relative">
                      <img
                        src={`/api/placeholder/800/400`}
                        alt="Tournament"
                        className="w-full h-48 object-cover"
                      />
                      <div className="absolute top-4 left-4">
                        <span className="bg-emerald-600 text-white px-3 py-1 rounded-full text-sm flex items-center">
                          <Trophy className="h-4 w-4 mr-1" />
                          Tournament
                        </span>
                      </div>
                    </div>
                    <div className="p-4">
                      <h3 className="text-lg font-medium">Ragantara Cup 2024</h3>
                      <div className="mt-2 space-y-1">
                        <div className="flex items-center text-gray-600 text-sm">
                          <Calendar className="h-4 w-4 mr-2" />
                          <span>January 15 - January 20, 2024</span>
                        </div>
                        <div className="flex items-center text-gray-600 text-sm">
                          <MapPin className="h-4 w-4 mr-2" />
                          <span>Champion Futsal Arena</span>
                        </div>
                        <div className="flex items-center text-gray-600 text-sm">
                          <Users className="h-4 w-4 mr-2" />
                          <span>16 Teams</span>
                        </div>
                      </div>
                      <div className="mt-4 flex items-center justify-between">
                        <span className="text-sm font-medium px-2 py-1 bg-green-100 text-green-600 rounded">
                          Registration Open
                        </span>
                        <button className="px-4 py-2 bg-emerald-600 text-white rounded-full hover:bg-emerald-700 transition-colors text-sm">
                          View Details
                        </button>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Weekly Schedule */}
            <div className="mb-8">
              <h2 className="text-xl font-medium mb-4">Weekly Schedule</h2>
              <div className="bg-white rounded-lg shadow-sm p-6">
                <div className="grid grid-cols-7 gap-4">
                  {["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"].map((day) => (
                    <div key={day} className="text-center">
                      <div className="font-medium text-gray-600">{day}</div>
                      <div className="mt-2 w-10 h-10 rounded-full bg-emerald-100 text-emerald-600 flex items-center justify-center mx-auto cursor-pointer hover:bg-emerald-600 hover:text-white transition-colors">
                        {["15", "16", "17", "18", "19", "20", "21"][["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"].indexOf(day)]}
                      </div>
                    </div>
                  ))}
                </div>
                <div className="mt-6 space-y-3">
                  <div className="flex items-center p-3 bg-gray-50 rounded">
                    <div className="w-20 text-sm font-medium">09:00</div>
                    <div className="flex-1 px-4 py-2 bg-emerald-100 text-emerald-600 rounded">
                      Training Session - Court 1
                    </div>
                  </div>
                  <div className="flex items-center p-3 bg-gray-50 rounded">
                    <div className="w-20 text-sm font-medium">13:00</div>
                    <div className="flex-1 px-4 py-2 bg-orange-100 text-orange-600 rounded">
                      Tournament Match - Court 2
                    </div>
                  </div>
                  <div className="flex items-center p-3 bg-gray-50 rounded">
                    <div className="w-20 text-sm font-medium">16:00</div>
                    <div className="flex-1 px-4 py-2 bg-green-100 text-green-600 rounded">
                      Friendly Match - Court 1
                    </div>
                  </div>
                  <div className="flex items-center p-3 bg-gray-50 rounded">
                    <div className="w-20 text-sm font-medium">19:00</div>
                    <div className="flex-1 px-4 py-2 bg-purple-100 text-purple-600 rounded">
                      League Match - Court 3
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default Schedule;