import React from "react";
import { Trophy, Star, MapPin, Calendar, Users, Mail, Phone, Activity, Shield, ChevronLeft, Share2, Clock, User } from "lucide-react";
import Navbar from "components/Navbar";
import Footer from "components/Footer";

const TeamProfile = () => {
  return (
    <div className="bg-emerald-50 min-h-screen">
      <Navbar />

      {/* Breadcrumb */}
      <div className="max-w-7xl mx-auto px-4 py-4">
        <div className="flex items-center text-sm text-gray-600">
          <ChevronLeft className="h-4 w-4 mr-1" />
          <a
            href="#"
            className="hover:text-emerald-600"
          >
            Back to Teams
          </a>
        </div>
      </div>

      {/* Team Header */}
      <div className="bg-white border-b">
        <div className="max-w-7xl mx-auto px-4 py-8">
          <div className="flex flex-col md:flex-row items-start md:items-center gap-6">
            <div className="relative">
              <img
                src="/api/placeholder/200/200"
                alt="Team Logo"
                className="w-32 h-32 rounded-lg object-cover border-4 border-white shadow-lg"
              />
            </div>
            <div className="flex-1">
              <div className="flex items-center gap-4 mb-2">
                <h1 className="text-3xl font-bold text-gray-900">Thunder FC</h1>
                <span className="bg-emerald-100 text-emerald-600 px-3 py-1 rounded-full text-sm font-medium">Premier Division</span>
              </div>
              <p className="text-lg text-emerald-600 font-medium mb-2">Est. 2020</p>
              <div className="flex flex-wrap items-center gap-4 text-sm text-gray-600">
                <span className="flex items-center">
                  <MapPin className="h-4 w-4 mr-1" />
                  South Jakarta
                </span>
                <span className="flex items-center">
                  <Users className="h-4 w-4 mr-1" />
                  14 Active Players
                </span>
                <span className="flex items-center">
                  <Star className="h-4 w-4 mr-1" />
                  4.8/5.0 Rating
                </span>
              </div>
            </div>
            <div className="flex gap-3">
              <button className="px-6 py-2 bg-emerald-600 text-white rounded-full hover:bg-emerald-700 transition-colors">Join Team</button>
              <button className="px-6 py-2 border border-emerald-600 text-emerald-600 rounded-full hover:bg-emerald-50 transition-colors">Contact</button>
            </div>
          </div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 py-8">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Left Column - Info & Stats */}
          <div className="space-y-6">
            {/* Team Information */}
            <div className="bg-white rounded-lg shadow-sm p-6">
              <h2 className="text-lg font-medium mb-4">Team Information</h2>
              <div className="space-y-4">
                <div className="flex items-center text-gray-600">
                  <Mail className="h-5 w-5 mr-3" />
                  <div>
                    <p className="text-sm">Email</p>
                    <p className="font-medium">thunder.fc@email.com</p>
                  </div>
                </div>
                <div className="flex items-center text-gray-600">
                  <Phone className="h-5 w-5 mr-3" />
                  <div>
                    <p className="text-sm">Contact</p>
                    <p className="font-medium">+62 812-3456-7890</p>
                  </div>
                </div>
                <div className="flex items-center text-gray-600">
                  <Clock className="h-5 w-5 mr-3" />
                  <div>
                    <p className="text-sm">Training Schedule</p>
                    <p className="font-medium">Tue & Thu, 19:00 - 21:00</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Team Statistics */}
            <div className="bg-white rounded-lg shadow-sm p-6">
              <h2 className="text-lg font-medium mb-4">Season Statistics</h2>
              <div className="grid grid-cols-2 gap-4">
                <div className="text-center p-4 bg-emerald-50 rounded-lg">
                  <p className="text-2xl font-bold text-emerald-600">24</p>
                  <p className="text-sm text-gray-600">Matches</p>
                </div>
                <div className="text-center p-4 bg-emerald-50 rounded-lg">
                  <p className="text-2xl font-bold text-emerald-600">18</p>
                  <p className="text-sm text-gray-600">Wins</p>
                </div>
                <div className="text-center p-4 bg-emerald-50 rounded-lg">
                  <p className="text-2xl font-bold text-emerald-600">84</p>
                  <p className="text-sm text-gray-600">Goals For</p>
                </div>
                <div className="text-center p-4 bg-emerald-50 rounded-lg">
                  <p className="text-2xl font-bold text-emerald-600">32</p>
                  <p className="text-sm text-gray-600">Goals Against</p>
                </div>
              </div>
            </div>

            {/* Recent Results */}
            <div className="bg-white rounded-lg shadow-sm p-6">
              <h2 className="text-lg font-medium mb-4">Recent Results</h2>
              <div className="space-y-3">
                {[
                  { result: "W", score: "5-2", opponent: "Lightning FC" },
                  { result: "W", score: "3-1", opponent: "Storm United" },
                  { result: "D", score: "2-2", opponent: "Meteor FC" },
                  { result: "L", score: "1-3", opponent: "Galaxy FC" },
                  { result: "W", score: "4-0", opponent: "Nova FC" },
                ].map((match, idx) => (
                  <div
                    key={idx}
                    className="flex items-center justify-between p-3 bg-gray-50 rounded"
                  >
                    <div className="flex items-center gap-3">
                      <span className={`w-8 h-8 rounded-full flex items-center justify-center font-medium ${match.result === "W" ? "bg-green-100 text-green-600" : match.result === "L" ? "bg-red-100 text-red-600" : "bg-yellow-100 text-yellow-600"}`}>
                        {match.result}
                      </span>
                      <span className="font-medium">{match.score}</span>
                    </div>
                    <span className="text-gray-600">{match.opponent}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Right Column - Main Content */}
          <div className="lg:col-span-2 space-y-6">
            {/* About */}
            <div className="bg-white rounded-lg shadow-sm p-6">
              <h2 className="text-lg font-medium mb-4">About Team</h2>
              <p className="text-gray-600 leading-relaxed">
                Thunder FC is a premier division futsal team based in South Jakarta. Established in 2020, we've quickly risen through the ranks to become one of the most competitive teams in the region. Our team focuses on developing young talent while
                maintaining high performance standards in competitive play.
              </p>
            </div>

            {/* Team Roster */}
            <div className="bg-white rounded-lg shadow-sm p-6">
              <h2 className="text-lg font-medium mb-4">Team Roster</h2>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                {[1, 2, 3, 4, 5, 6].map((player) => (
                  <div
                    key={player}
                    className="flex items-center gap-4 p-4 bg-gray-50 rounded-lg"
                  >
                    <img
                      src={`/api/placeholder/100/100`}
                      alt="Player"
                      className="w-12 h-12 rounded-full object-cover"
                    />
                    <div>
                      <h3 className="font-medium">Alex Johnson</h3>
                      <p className="text-sm text-emerald-600">Pivot</p>
                      <p className="text-xs text-gray-500">Captain</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Achievements */}
            <div className="bg-white rounded-lg shadow-sm p-6">
              <h2 className="text-lg font-medium mb-4">Team Achievements</h2>
              <div className="space-y-4">
                {[1, 2, 3].map((achievement) => (
                  <div
                    key={achievement}
                    className="flex items-start gap-4 p-4 bg-gray-50 rounded-lg"
                  >
                    <div className="bg-emerald-100 p-3 rounded-lg">
                      <Trophy className="h-6 w-6 text-emerald-600" />
                    </div>
                    <div>
                      <h3 className="font-medium">Jakarta Futsal Championship 2023</h3>
                      <p className="text-sm text-gray-600 mt-1">Champions - Premier Division</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Upcoming Matches */}
            <div className="bg-white rounded-lg shadow-sm p-6">
              <h2 className="text-lg font-medium mb-4">Upcoming Matches</h2>
              <div className="space-y-4">
                {[1, 2, 3].map((match) => (
                  <div
                    key={match}
                    className="flex items-center justify-between p-4 bg-gray-50 rounded-lg"
                  >
                    <div className="flex items-center gap-4">
                      <div className="bg-emerald-100 p-2 rounded-lg">
                        <Activity className="h-5 w-5 text-emerald-600" />
                      </div>
                      <div>
                        <h3 className="font-medium">vs Nova FC</h3>
                        <p className="text-sm text-gray-600">League Match</p>
                      </div>
                    </div>
                    <div className="text-right">
                      <p className="font-medium text-emerald-600">19:00</p>
                      <p className="text-sm text-gray-600">Feb 1, 2024</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default TeamProfile;
