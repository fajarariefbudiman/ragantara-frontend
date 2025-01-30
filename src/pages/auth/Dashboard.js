import React, { useState } from "react";
import { Users, Calendar, MapPin, Trophy, ArrowUpRight, Home, Settings, LogOut, ClipboardList, User, ChevronLeft, ChevronRight } from "lucide-react";

// Shared Components
const Sidebar = ({ isAdmin, isOpen, toggleSidebar }) => {
  const adminMenuItems = [
    { icon: Home, label: "Dashboard", href: "#" },
    { icon: MapPin, label: "Fields", href: "#" },
    { icon: Users, label: "Teams", href: "#" },
    { icon: Calendar, label: "Bookings", href: "#" },
    { icon: Trophy, label: "Tournaments", href: "#" },
    { icon: ClipboardList, label: "Reports", href: "#" },
    { icon: Settings, label: "Settings", href: "#" },
    { icon: LogOut, label: "Logout", href: "#" },
  ];

  const userMenuItems = [
    { icon: Home, label: "Dashboard", href: "#" },
    { icon: Calendar, label: "My Bookings", href: "#" },
    { icon: Users, label: "My Team", href: "#" },
    { icon: Trophy, label: "Tournaments", href: "#" },
    { icon: User, label: "Profile", href: "#" },
    { icon: Settings, label: "Settings", href: "#" },
    { icon: LogOut, label: "Logout", href: "#" },
  ];

  const menuItems = isAdmin ? adminMenuItems : userMenuItems;

  return (
    <div className={`fixed inset-y-0 left-0 z-40 h-full bg-white border-r transition-all duration-300 ${isOpen ? "w-64" : "w-20"}`}>
      <div className="flex items-center justify-between h-16 border-b px-4">
        <span className={`text-xl font-bold text-emerald-600 ${!isOpen && "hidden"}`}>
          {isAdmin ? "Admin Portal" : "FutsalMatch"}
        </span>
        <button
          onClick={toggleSidebar}
          className="p-2 rounded-lg hover:bg-emerald-50 transition-colors"
        >
          {isOpen ? <ChevronLeft className="h-5 w-5" /> : <ChevronRight className="h-5 w-5" />}
        </button>
      </div>
      <nav className="mt-6">
        <div className="px-2 space-y-2">
          {menuItems.map((item, index) => (
            <a
              key={index}
              href={item.href}
              className="flex items-center px-4 py-3 text-gray-600 rounded-lg hover:bg-emerald-50 hover:text-emerald-600 transition-colors"
            >
              <item.icon className="h-5 w-5" />
              {isOpen && <span className="ml-3">{item.label}</span>}
            </a>
          ))}
        </div>
      </nav>
    </div>
  );
};

// Admin Dashboard Component
export const AdminDashboard = () => {
  const [sidebarOpen, setSidebarOpen] = useState(true);

  const recentBookings = [
    { id: "BK001", team: "FC Thunder", field: "Galaxy Arena", time: "19:00 - 20:00", status: "Confirmed" },
    { id: "BK002", team: "Real Madrid FC", field: "Champion Center", time: "20:00 - 21:00", status: "Pending" },
    { id: "BK003", team: "Lightning FC", field: "Elite Sport", time: "18:00 - 19:00", status: "Completed" },
  ];

  return (
    <div className="flex min-h-screen bg-gray-50">
      <Sidebar
        isAdmin={true}
        isOpen={sidebarOpen}
        toggleSidebar={() => setSidebarOpen(!sidebarOpen)}
      />
      <div className="flex-1 ml-20">
        <div className="p-6">
          {/* Stats Cards */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
            <div className="bg-white p-6 rounded-lg shadow-sm">
              <div className="flex justify-between">
                <div>
                  <p className="text-sm text-gray-600">Total Bookings</p>
                  <p className="text-2xl font-semibold text-gray-900">1,248</p>
                </div>
                <div className="h-12 w-12 bg-emerald-100 rounded-lg flex items-center justify-center">
                  <Calendar className="h-6 w-6 text-emerald-600" />
                </div>
              </div>
              <div className="flex items-center mt-4 text-sm">
                <ArrowUpRight className="h-4 w-4 text-green-500" />
                <span className="text-green-500 mr-1">12%</span>
                <span className="text-gray-600">vs last month</span>
              </div>
            </div>

            <div className="bg-white p-6 rounded-lg shadow-sm">
              <div className="flex justify-between">
                <div>
                  <p className="text-sm text-gray-600">Active Teams</p>
                  <p className="text-2xl font-semibold text-gray-900">156</p>
                </div>
                <div className="h-12 w-12 bg-blue-100 rounded-lg flex items-center justify-center">
                  <Users className="h-6 w-6 text-blue-600" />
                </div>
              </div>
              <div className="flex items-center mt-4 text-sm">
                <ArrowUpRight className="h-4 w-4 text-green-500" />
                <span className="text-green-500 mr-1">8%</span>
                <span className="text-gray-600">vs last month</span>
              </div>
            </div>

            <div className="bg-white p-6 rounded-lg shadow-sm">
              <div className="flex justify-between">
                <div>
                  <p className="text-sm text-gray-600">Available Fields</p>
                  <p className="text-2xl font-semibold text-gray-900">24</p>
                </div>
                <div className="h-12 w-12 bg-orange-100 rounded-lg flex items-center justify-center">
                  <MapPin className="h-6 w-6 text-orange-600" />
                </div>
              </div>
              <div className="flex items-center mt-4 text-sm">
                <ArrowUpRight className="h-4 w-4 text-green-500" />
                <span className="text-green-500 mr-1">2</span>
                <span className="text-gray-600">new this month</span>
              </div>
            </div>

            <div className="bg-white p-6 rounded-lg shadow-sm">
              <div className="flex justify-between">
                <div>
                  <p className="text-sm text-gray-600">Active Tournaments</p>
                  <p className="text-2xl font-semibold text-gray-900">5</p>
                </div>
                <div className="h-12 w-12 bg-purple-100 rounded-lg flex items-center justify-center">
                  <Trophy className="h-6 w-6 text-purple-600" />
                </div>
              </div>
              <div className="flex items-center mt-4 text-sm">
                <ArrowUpRight className="h-4 w-4 text-green-500" />
                <span className="text-green-500 mr-1">2</span>
                <span className="text-gray-600">upcoming</span>
              </div>
            </div>
          </div>

          {/* Recent Bookings */}
          <div className="bg-white rounded-lg shadow-sm p-6">
            <div className="flex justify-between items-center mb-6">
              <h2 className="text-lg font-medium text-gray-900">Recent Bookings</h2>
              <button className="text-sm text-emerald-600 hover:text-emerald-700">View All</button>
            </div>
            <div className="overflow-x-auto">
              <table className="w-full">
                <thead>
                  <tr className="text-left text-sm text-gray-500 border-b">
                    <th className="pb-3 font-medium">Booking ID</th>
                    <th className="pb-3 font-medium">Team</th>
                    <th className="pb-3 font-medium">Field</th>
                    <th className="pb-3 font-medium">Time</th>
                    <th className="pb-3 font-medium">Status</th>
                  </tr>
                </thead>
                <tbody className="divide-y">
                  {recentBookings.map((booking) => (
                    <tr key={booking.id} className="text-sm">
                      <td className="py-4 text-gray-900">{booking.id}</td>
                      <td className="py-4 text-gray-600">{booking.team}</td>
                      <td className="py-4 text-gray-600">{booking.field}</td>
                      <td className="py-4 text-gray-600">{booking.time}</td>
                      <td className="py-4">
                        <span className={`px-2 py-1 rounded-full text-xs ${
                          booking.status === 'Confirmed' ? 'bg-green-100 text-green-600' :
                          booking.status === 'Pending' ? 'bg-yellow-100 text-yellow-600' :
                          'bg-gray-100 text-gray-600'
                        }`}>
                          {booking.status}
                        </span>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AdminDashboard;