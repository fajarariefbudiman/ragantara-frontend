import React, { useState } from "react";
import { Trophy, Users, Star, Filter, Search, User, Calendar, MapPin, Shield, TrendingUp } from "lucide-react";
import Navbar from "components/Navbar";
import Footer from "components/Footer";

const Rankings = () => {
  const [rankingType, setRankingType] = useState("teams");

  return (
    <div className="bg-emerald-50 min-h-screen">
      <Navbar />

      {/* Breadcrumb */}
      <div className="max-w-7xl mx-auto px-4 py-4">
        <div className="text-sm text-gray-600">Home / Rankings</div>
      </div>

      {/* Header */}
      <div className="max-w-7xl mx-auto px-4 mb-8">
        <h1 className="text-3xl font-serif text-gray-900">Rankings</h1>
        <p className="text-gray-600 mt-2">View rankings for teams and players</p>
      </div>

      {/* Toggle Switch */}
      <div className="max-w-7xl mx-auto px-4 mb-8">
        <div className="bg-white rounded-lg p-2 inline-flex gap-2 shadow-sm">
          <button
            onClick={() => setRankingType("teams")}
            className={`px-6 py-2 rounded-lg flex items-center gap-2 transition-colors ${rankingType === "teams" ? "bg-emerald-600 text-white" : "text-gray-600 hover:bg-gray-50"}`}
          >
            <Shield className="h-5 w-5" />
            Teams
          </button>
          <button
            onClick={() => setRankingType("players")}
            className={`px-6 py-2 rounded-lg flex items-center gap-2 transition-colors ${rankingType === "players" ? "bg-emerald-600 text-white" : "text-gray-600 hover:bg-gray-50"}`}
          >
            <User className="h-5 w-5" />
            Players
          </button>
        </div>
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

            {/* Search */}
            <div className="border-b pb-4 mb-4">
              <div className="relative">
                <input
                  type="text"
                  placeholder={`Search ${rankingType}...`}
                  className="w-full p-2 pl-8 border rounded text-sm"
                />
                <Search className="h-4 w-4 text-gray-400 absolute left-2 top-3" />
              </div>
            </div>

            {/* Dynamic Filters based on type */}
            {rankingType === "teams" ? (
              <>
                {/* Team-specific filters */}
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

                <div className="border-b pb-4 mb-4">
                  <h3 className="font-medium mb-2">Season</h3>
                  <div className="space-y-2">
                    {["2024", "2023", "2022", "2021"].map((season) => (
                      <label
                        key={season}
                        className="flex items-center"
                      >
                        <input
                          type="checkbox"
                          className="rounded text-emerald-600 mr-2"
                        />
                        <span className="text-gray-600">Season {season}</span>
                      </label>
                    ))}
                  </div>
                </div>
              </>
            ) : (
              <>
                {/* Player-specific filters */}
                <div className="border-b pb-4 mb-4">
                  <h3 className="font-medium mb-2">Position</h3>
                  <div className="space-y-2">
                    {["Goalkeeper", "Defender", "Winger", "Pivot"].map((position) => (
                      <label
                        key={position}
                        className="flex items-center"
                      >
                        <input
                          type="checkbox"
                          className="rounded text-emerald-600 mr-2"
                        />
                        <span className="text-gray-600">{position}</span>
                      </label>
                    ))}
                  </div>
                </div>

                <div className="border-b pb-4 mb-4">
                  <h3 className="font-medium mb-2">Statistics</h3>
                  <div className="space-y-2">
                    {["Goals", "Assists", "Clean Sheets", "MVP Awards"].map((stat) => (
                      <label
                        key={stat}
                        className="flex items-center"
                      >
                        <input
                          type="checkbox"
                          className="rounded text-emerald-600 mr-2"
                        />
                        <span className="text-gray-600">{stat}</span>
                      </label>
                    ))}
                  </div>
                </div>
              </>
            )}

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
          </div>

          {/* Rankings Content */}
          <div className="lg:col-span-3">
            {/* Rankings Header */}
            <div className="bg-white rounded-lg shadow-sm p-4 mb-6">
              <div className="flex items-center justify-between">
                <h2 className="text-xl font-medium">Current Rankings</h2>
                <div className="flex items-center gap-2">
                  <span className="text-sm text-gray-600">Last updated:</span>
                  <span className="text-sm font-medium">Jan 29, 2024</span>
                </div>
              </div>
            </div>

            {/* Rankings List */}
            <div className="space-y-4">
              {rankingType === "teams"
                ? // Team Rankings
                  [1, 2, 3, 4, 5].map((rank) => (
                    <div
                      key={rank}
                      className="bg-white rounded-lg shadow-sm p-4"
                    >
                      <div className="flex items-center gap-6">
                        <div className="text-2xl font-bold text-gray-400 w-8">#{rank}</div>
                        <img
                          src={`/api/placeholder/60/60`}
                          alt="Team Logo"
                          className="w-16 h-16 rounded-lg object-cover"
                        />
                        <div className="flex-1">
                          <div className="flex items-center justify-between">
                            <div>
                              <h3 className="font-medium">Thunder FC</h3>
                              <p className="text-sm text-emerald-600">Premier Division</p>
                            </div>
                            <div className="text-right">
                              <p className="font-medium">86 points</p>
                              <p className="text-sm text-gray-600">+32 GD</p>
                            </div>
                          </div>
                          <div className="mt-2 flex items-center gap-4 text-sm text-gray-600">
                            <span className="flex items-center gap-1">
                              <Trophy className="h-4 w-4" />
                              18W
                            </span>
                            <span className="flex items-center gap-1">
                              <TrendingUp className="h-4 w-4" />
                              4D
                            </span>
                            <span className="flex items-center gap-1">
                              <Users className="h-4 w-4" />
                              2L
                            </span>
                          </div>
                        </div>
                      </div>
                    </div>
                  ))
                : // Player Rankings
                  [1, 2, 3, 4, 5].map((rank) => (
                    <div
                      key={rank}
                      className="bg-white rounded-lg shadow-sm p-4"
                    >
                      <div className="flex items-center gap-6">
                        <div className="text-2xl font-bold text-gray-400 w-8">#{rank}</div>
                        <img
                          src={`/api/placeholder/60/60`}
                          alt="Player"
                          className="w-16 h-16 rounded-full object-cover"
                        />
                        <div className="flex-1">
                          <div className="flex items-center justify-between">
                            <div>
                              <h3 className="font-medium">Alex Johnson</h3>
                              <p className="text-sm text-emerald-600">Thunder FC</p>
                            </div>
                            <div className="text-right">
                              <p className="font-medium">32 Goals</p>
                              <p className="text-sm text-gray-600">15 Assists</p>
                            </div>
                          </div>
                          <div className="mt-2 flex items-center gap-4 text-sm text-gray-600">
                            <span className="flex items-center gap-1">
                              <User className="h-4 w-4" />
                              Pivot
                            </span>
                            <span className="flex items-center gap-1">
                              <Star className="h-4 w-4" />
                              4.8
                            </span>
                            <span className="flex items-center gap-1">
                              <Calendar className="h-4 w-4" />
                              24 Matches
                            </span>
                          </div>
                        </div>
                      </div>
                    </div>
                  ))}
            </div>

            {/* Pagination */}
            <div className="mt-6 flex items-center justify-center space-x-2">
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

export default Rankings;
