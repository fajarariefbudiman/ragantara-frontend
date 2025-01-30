import React from "react";
import { Trophy, Star, MapPin, Calendar, User, Mail, Phone, Activity, Award, Clock, ChevronLeft, Share2, Heart } from "lucide-react";
import Navbar from "components/Navbar";
import Footer from "components/Footer";

const PlayerProfile = () => {
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
            Back to Players
          </a>
        </div>
      </div>

      {/* Player Header */}
      <div className="bg-white border-b">
        <div className="max-w-7xl mx-auto px-4 py-8">
          <div className="flex flex-col md:flex-row items-start md:items-center gap-6">
            <div className="relative">
              <img
                src="/api/placeholder/200/200"
                alt="Player"
                className="w-32 h-32 rounded-full object-cover border-4 border-white shadow-lg"
              />
              <div className="absolute -bottom-1 -right-1 bg-green-500 w-4 h-4 rounded-full border-2 border-white"></div>
            </div>
            <div className="flex-1">
              <div className="flex items-center gap-4 mb-2">
                <h1 className="text-3xl font-bold text-gray-900">Alex Johnson</h1>
                <span className="bg-emerald-100 text-emerald-600 px-3 py-1 rounded-full text-sm font-medium">Professional</span>
              </div>
              <p className="text-lg text-emerald-600 font-medium mb-2">Pivot / Forward</p>
              <div className="flex flex-wrap items-center gap-4 text-sm text-gray-600">
                <span className="flex items-center">
                  <MapPin className="h-4 w-4 mr-1" />
                  Jakarta Selatan
                </span>
                <span className="flex items-center">
                  <Calendar className="h-4 w-4 mr-1" />5 Years Experience
                </span>
                <span className="flex items-center">
                  <Star className="h-4 w-4 mr-1" />
                  4.9/5.0 (120 reviews)
                </span>
              </div>
            </div>
            <div className="flex gap-3">
              <button className="px-6 py-2 bg-emerald-600 text-white rounded-full hover:bg-emerald-700 transition-colors">Contact Player</button>
              <button className="p-2 border rounded-full hover:bg-gray-50">
                <Share2 className="h-5 w-5 text-gray-600" />
              </button>
              <button className="p-2 border rounded-full hover:bg-gray-50">
                <Heart className="h-5 w-5 text-gray-600" />
              </button>
            </div>
          </div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 py-8">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Left Column - Info & Stats */}
          <div className="space-y-6">
            {/* Personal Information */}
            <div className="bg-white rounded-lg shadow-sm p-6">
              <h2 className="text-lg font-medium mb-4">Personal Information</h2>
              <div className="space-y-4">
                <div className="flex items-center text-gray-600">
                  <User className="h-5 w-5 mr-3" />
                  <div>
                    <p className="text-sm">Age</p>
                    <p className="font-medium">24 years</p>
                  </div>
                </div>
                <div className="flex items-center text-gray-600">
                  <Mail className="h-5 w-5 mr-3" />
                  <div>
                    <p className="text-sm">Email</p>
                    <p className="font-medium">alex.johnson@email.com</p>
                  </div>
                </div>
                <div className="flex items-center text-gray-600">
                  <Phone className="h-5 w-5 mr-3" />
                  <div>
                    <p className="text-sm">Phone</p>
                    <p className="font-medium">+62 812-3456-7890</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Statistics */}
            <div className="bg-white rounded-lg shadow-sm p-6">
              <h2 className="text-lg font-medium mb-4">Career Statistics</h2>
              <div className="grid grid-cols-2 gap-4">
                <div className="text-center p-4 bg-emerald-50 rounded-lg">
                  <p className="text-2xl font-bold text-emerald-600">156</p>
                  <p className="text-sm text-gray-600">Matches</p>
                </div>
                <div className="text-center p-4 bg-emerald-50 rounded-lg">
                  <p className="text-2xl font-bold text-emerald-600">89</p>
                  <p className="text-sm text-gray-600">Goals</p>
                </div>
                <div className="text-center p-4 bg-emerald-50 rounded-lg">
                  <p className="text-2xl font-bold text-emerald-600">67</p>
                  <p className="text-sm text-gray-600">Assists</p>
                </div>
                <div className="text-center p-4 bg-emerald-50 rounded-lg">
                  <p className="text-2xl font-bold text-emerald-600">15</p>
                  <p className="text-sm text-gray-600">Tournaments</p>
                </div>
              </div>
            </div>

            {/* Availability */}
            <div className="bg-white rounded-lg shadow-sm p-6">
              <h2 className="text-lg font-medium mb-4">Weekly Availability</h2>
              <div className="space-y-3">
                {[
                  { day: "Monday", time: "18:00 - 22:00", available: true },
                  { day: "Tuesday", time: "19:00 - 21:00", available: true },
                  { day: "Wednesday", time: "Not Available", available: false },
                  { day: "Thursday", time: "18:00 - 22:00", available: true },
                  { day: "Friday", time: "20:00 - 22:00", available: true },
                  { day: "Saturday", time: "15:00 - 20:00", available: true },
                  { day: "Sunday", time: "Not Available", available: false },
                ].map((schedule) => (
                  <div
                    key={schedule.day}
                    className="flex items-center justify-between p-2 rounded bg-gray-50"
                  >
                    <span className="font-medium">{schedule.day}</span>
                    <span className={`text-sm ${schedule.available ? "text-emerald-600" : "text-gray-500"}`}>{schedule.time}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Right Column - Main Content */}
          <div className="lg:col-span-2 space-y-6">
            {/* About */}
            <div className="bg-white rounded-lg shadow-sm p-6">
              <h2 className="text-lg font-medium mb-4">About</h2>
              <p className="text-gray-600 leading-relaxed">
                Professional futsal player with 5 years of competitive experience. Specialized in pivot position with strong scoring abilities and team coordination. Currently playing in the Jakarta Premier Futsal League and available for friendly matches
                and tournaments.
              </p>
            </div>

            {/* Skills */}
            <div className="bg-white rounded-lg shadow-sm p-6">
              <h2 className="text-lg font-medium mb-4">Skills Assessment</h2>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                {[
                  { skill: "Ball Control", rating: 95 },
                  { skill: "Shooting", rating: 90 },
                  { skill: "Passing", rating: 88 },
                  { skill: "Speed", rating: 85 },
                  { skill: "Stamina", rating: 87 },
                  { skill: "Team Play", rating: 92 },
                ].map((item) => (
                  <div
                    key={item.skill}
                    className="space-y-2"
                  >
                    <div className="flex justify-between">
                      <span className="text-gray-600">{item.skill}</span>
                      <span className="font-medium">{item.rating}%</span>
                    </div>
                    <div className="h-2 bg-gray-200 rounded-full">
                      <div
                        className="h-full bg-emerald-600 rounded-full"
                        style={{ width: `${item.rating}%` }}
                      ></div>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Achievements */}
            <div className="bg-white rounded-lg shadow-sm p-6">
              <h2 className="text-lg font-medium mb-4">Achievements</h2>
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
                      <p className="text-sm text-gray-600 mt-1">Winner - Top Scorer with 12 goals</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Recent Matches */}
            <div className="bg-white rounded-lg shadow-sm p-6">
              <h2 className="text-lg font-medium mb-4">Recent Matches</h2>
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
                        <h3 className="font-medium">Team A vs Team B</h3>
                        <p className="text-sm text-gray-600">League Match</p>
                      </div>
                    </div>
                    <div className="text-right">
                      <p className="font-medium text-emerald-600">3 Goals, 2 Assists</p>
                      <p className="text-sm text-gray-600">January 15, 2024</p>
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

export default PlayerProfile;
