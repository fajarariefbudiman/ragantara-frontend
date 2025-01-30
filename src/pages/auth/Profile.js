import React, { useState } from "react";
import { User, Settings, ShoppingBag, Heart, MapPin, Clock, Package, CreditCard, Trophy, Users, Lock } from "lucide-react";
// import { Switch } from '@/components/ui/switch';
import Navbar from "components/Navbar";
import Footer from "components/Footer";
import { useUser } from "context/UserContext";
import { useLocation, useNavigate } from "react-router-dom";

const CustomerProfile = () => {
  const [isPlayerProfile, setIsPlayerProfile] = useState(false);
  const { user } = useUser();
  const location = useLocation();
  const navigate = useNavigate();
  const navItems = [
    { label: "Akun Saya", icon: User, path: "/profile" },
    { label: "Pesanan Saya", icon: ShoppingBag, path: "/my-orders" },
    { label: "Alamat", icon: MapPin, path: "/addresses" },
    { label: "Ubah Password", icon: Lock, path: "/change-password" },
    { label: "Bank & Kartu", icon: CreditCard, path: "/bank-card" },
  ];

  const redirectPath = (path) => {
    navigate(path);
  };

  const playerData = {
    username: "striker_99",
    position: "Forward",
    team: "Garuda FC",
    skillLevel: "Advanced",
    matches: 48,
    goals: 32,
    assists: 15,
    rating: 4.8,
  };
  if (!user) {
    return (
      <div className="flex justify-center items-center min-h-screen">
        <p>Loading...</p>
      </div>
    );
  }
  return (
    <div className="bg-emerald-50 min-h-screen">
      <Navbar />
      {/* Customer */}
      <div className="max-w-7xl mx-auto p-4 space-y-6">
        {/* Profile Header */}
        <div className="bg-white rounded-lg p-6">
          <div className="flex items-center space-x-4">
            <div className="w-20 h-20 bg-emerald-100 rounded-full flex items-center justify-center">
              <User className="w-10 h-10 text-emerald-600" />
            </div>
            <div className="flex-1">
              <h1 className="text-2xl font-medium">{user.auth.firstname}</h1>
              <p className="text-gray-600">{user.auth.email}</p>
              <div className="flex items-center space-x-4 mt-2 text-sm text-gray-500">
                <span>Member since 2023</span>
                <span>•</span>
                <span>24 Orders</span>
                <span>•</span>
                <span>Jakarta Barat</span>
              </div>
            </div>
            <button className="p-2 hover:bg-gray-100 rounded-full">
              <Settings className="w-5 h-5" />
            </button>
          </div>
        </div>

        {/* Player Profile Toggle */}
        {user.auth.role == "player" && (
          <div className="bg-white rounded-lg p-6">
            <div className="flex items-center justify-between">
              <div className="flex items-center space-x-2">
                <Trophy className="w-5 h-5 text-emerald-600" />
                <span className="font-medium">Player Profile</span>
              </div>
              <button
                onClick={() => setIsPlayerProfile(!isPlayerProfile)}
                className={`
                  w-14 h-7 rounded-full p-1 transition-colors duration-200 ease-in-out
                  ${isPlayerProfile ? "bg-emerald-600" : "bg-gray-200"}
                `}
              >
                <div
                  className={`
                    bg-white h-5 w-5 rounded-full shadow-sm transform transition-transform duration-200 ease-in-out
                    ${isPlayerProfile ? "translate-x-7" : "translate-x-0"}
                  `}
                />
              </button>
            </div>
          </div>
        )}

        {/* Player Profile Section */}
        {isPlayerProfile && (
          <div className="bg-white rounded-lg p-6">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {/* Player Info */}
              <div className="space-y-4">
                <div className="flex items-center space-x-4">
                  <div className="w-24 h-24 bg-emerald-100 rounded-lg flex items-center justify-center">
                    <User className="w-12 h-12 text-emerald-600" />
                  </div>
                  <div>
                    <h2 className="text-xl font-medium">{playerData.username}</h2>
                    <p className="text-emerald-600 font-medium">{playerData.position}</p>
                    <p className="text-gray-600">{playerData.team}</p>
                  </div>
                </div>
                <div className="grid grid-cols-2 gap-4">
                  <div className="p-4 bg-gray-50 rounded-lg">
                    <div className="text-sm text-gray-600">Skill Level</div>
                    <div className="font-medium">{playerData.skillLevel}</div>
                  </div>
                  <div className="p-4 bg-gray-50 rounded-lg">
                    <div className="text-sm text-gray-600">Rating</div>
                    <div className="font-medium">{playerData.rating}/5.0</div>
                  </div>
                </div>
              </div>

              {/* Stats */}
              <div className="grid grid-cols-3 gap-4">
                <div className="p-4 bg-emerald-50 rounded-lg text-center">
                  <div className="text-2xl font-bold text-emerald-600">{playerData.matches}</div>
                  <div className="text-sm text-gray-600">Matches</div>
                </div>
                <div className="p-4 bg-emerald-50 rounded-lg text-center">
                  <div className="text-2xl font-bold text-emerald-600">{playerData.goals}</div>
                  <div className="text-sm text-gray-600">Goals</div>
                </div>
                <div className="p-4 bg-emerald-50 rounded-lg text-center">
                  <div className="text-2xl font-bold text-emerald-600">{playerData.assists}</div>
                  <div className="text-sm text-gray-600">Assists</div>
                </div>
              </div>
            </div>
          </div>
        )}

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {/* Quick Stats */}
          <div className="grid grid-cols-3 md:col-span-3 gap-4">
            {[
              { icon: ShoppingBag, label: "Orders", value: 23 },
              { icon: Heart, label: "Wishlist", value: 22 },
              { icon: MapPin, label: "Addresses", value: 2 },
            ].map((stat) => (
              <div
                key={stat.label}
                className="bg-white p-4 rounded-lg text-center"
              >
                <stat.icon className="w-6 h-6 mx-auto mb-2 text-emerald-600" />
                <div className="font-medium">{stat.value}</div>
                <div className="text-sm text-gray-600">{stat.label}</div>
              </div>
            ))}
          </div>

          {/* Recent Orders */}
          <div className="md:col-span-2 bg-white rounded-lg p-6">
            <h2 className="font-medium mb-4">Recent Orders</h2>
            <div className="space-y-4">
              {[
                {
                  id: "ORD001",
                  status: "Delivered",
                  date: "2024-12-01",
                  items: 3,
                  total: 250000,
                },
                {
                  id: "ORD002",
                  status: "In Progress",
                  date: "2024-12-05",
                  items: 2,
                  total: 150000,
                },
                {
                  id: "ORD003",
                  status: "Canceled",
                  date: "2024-12-10",
                  items: 1,
                  total: 50000,
                },
              ].map((order) => (
                <div
                  key={order.id}
                  className="border rounded-lg p-4"
                >
                  <div className="flex justify-between mb-2">
                    <span className="font-medium">{order.id}</span>
                    <span className={`px-2 py-1 rounded-full text-xs ${order.status === "Delivered" ? "bg-green-100 text-green-600" : order.status === "In Progress" ? "bg-blue-100 text-blue-600" : "bg-red-100 text-red-600"}`}>{order.status}</span>
                  </div>
                  <div className="grid grid-cols-3 text-sm text-gray-600">
                    <div>
                      <Clock className="w-4 h-4 inline mr-1" />
                      {order.date}
                    </div>
                    <div>
                      <Package className="w-4 h-4 inline mr-1" />
                      {order.items} items
                    </div>
                    <div>
                      <CreditCard className="w-4 h-4 inline mr-1" />
                      Rp{order.total.toLocaleString()}
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Account Menu */}
          <div className="bg-white rounded-lg p-6 h-fit">
            <h2 className="font-medium mb-4">Account Settings</h2>
            <nav className="space-y-2">
              {navItems.map((item) => (
                <button
                  key={item.label}
                  onClick={() => redirectPath(item.path)}
                  className={`flex items-center space-x-3 w-full p-2 rounded-lg text-left ${location.pathname === item.path ? "bg-emerald-50" : "hover:bg-emerald-50"}`}
                >
                  <item.icon className="w-5 h-5 text-emerald-600" />
                  <span>{item.label}</span>
                </button>
              ))}
            </nav>
          </div>
        </div>
      </div>

      {/* Player */}
      {/* {user.auth.role == "player"()} */}
      <Footer />
    </div>
  );
};

export default CustomerProfile;
