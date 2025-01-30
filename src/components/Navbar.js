import React, { useState } from "react";
import { Search, User, ShoppingCart, Heart, Phone, Mail, Menu, ChevronDown } from "lucide-react";
import { useUser } from "context/UserContext";
import { useLogout } from "hooks/UserAuth";
import { useLocation } from "react-router-dom";

const Navbar = () => {
  const handleLogout = useLogout();
  const location = useLocation();
  const { user } = useUser();
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);

  const isActive = (path) => location.pathname === path;

  const TopBar = () => (
    <div className="hidden sm:block bg-emerald-400 text-white py-2">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col sm:flex-row justify-between items-center text-sm">
          <div className="flex flex-col sm:flex-row items-center space-y-2 sm:space-y-0 sm:space-x-4 mb-2 sm:mb-0">
            <span className="flex items-center">
              <Phone className="h-4 w-4 mr-1" />
              +62 838 7363 0760
            </span>
            <span className="flex items-center">
              <Mail className="h-4 w-4 mr-1" />
              ragantara@gmail.com
            </span>
          </div>
          <div className="flex items-center space-x-4">
            <a
              href="#"
              className="hover:text-emerald-200"
            >
              Track Order
            </a>
            <a
              href="/about"
              className="hover:text-emerald-200"
            >
              About
            </a>
          </div>
        </div>
      </div>
    </div>
  );

  return (
    <>
      <TopBar />
      <nav className="bg-white shadow-sm relative">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            {/* Logo dan Menu Utama */}
            <div className="flex items-center">
              <a href="/">
                <div className="text-2xl font-serif text-emerald-600">Ragantara</div>
              </a>
              <button
                className="ml-4 md:hidden"
                onClick={() => setIsMenuOpen(!isMenuOpen)}
              >
                <Menu className="h-6 w-6 text-gray-600" />
              </button>
              <div className="hidden md:flex items-center space-x-4 ml-8">
                <a
                  href="/"
                  className={`text-gray-600 hover:text-emerald-600 ${isActive("/") ? "text-emerald-500" : ""} `}
                >
                  Beranda
                </a>
                <a
                  href="/products"
                  className={`text-gray-600 hover:text-emerald-600 ${isActive("/products") ? "text-emerald-500" : ""} `}
                >
                  Produk
                </a>
                <a
                  href="/courts"
                  className={`text-gray-600 hover:text-emerald-600 ${isActive("/courts") ? "text-emerald-500" : ""} `}
                >
                  Lapangan
                </a>
                <a
                  href="/players"
                  className={`text-gray-600 hover:text-emerald-600 ${isActive("/players") ? "text-emerald-500" : ""} `}
                >
                  Pemain
                </a>
                <a
                  href="/teams"
                  className={`text-gray-600 hover:text-emerald-600 ${isActive("/teams") ? "text-emerald-500" : ""} `}
                >
                  Tim
                </a>
                <a
                  href="/rankings"
                  className={`text-gray-600 hover:text-emerald-600 ${isActive("/rankings") ? "text-emerald-500" : ""} `}
                >
                  Peringkat
                </a>
              </div>
            </div>

            {/* Bagian Kanan: Pencarian, Akun, Wishlist, dan Keranjang */}
            <div className="flex items-center space-x-2 sm:space-x-4">
              {/* Input Pencarian */}
              <div className="hidden sm:block relative">
                <input
                  type="text"
                  placeholder="Cari produk atau lapangan..."
                  className="pl-8 pr-4 py-1 border border-gray-300 rounded-full text-sm focus:outline-none focus:border-emerald-500"
                />
                <Search className="absolute left-2 top-1/2 transform -translate-y-1/2 h-4 w-4 text-gray-400" />
              </div>

              {/* Dropdown User */}
              {user ? (
                <div className="relative">
                  <button
                    className="flex items-center text-gray-600"
                    onClick={() => setIsDropdownOpen(!isDropdownOpen)}
                  >
                    <span className="hidden sm:inline mr-2">Hello, {user.auth.firstname}!</span>
                    <ChevronDown className="h-5 w-5 text-gray-600" />
                  </button>
                  {isDropdownOpen && (
                    <div className="absolute right-0 mt-2 w-48 bg-white rounded-md shadow-lg z-50">
                      {user.auth.role == "admin" || user.auth.role == "owner" ? (
                        <a
                          href="/dashboard"
                          className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
                        >
                          Dashboard
                        </a>
                      ) : (
                        <a
                          href="/profile"
                          className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
                        >
                          Profile
                        </a>
                      )}
                      <button
                        onClick={handleLogout}
                        className="block w-full text-left px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
                      >
                        Logout
                      </button>
                    </div>
                  )}
                </div>
              ) : (
                <div className="flex items-center text-gray-600">
                  <User className="h-6 w-6 sm:hidden" />
                  <span className="hidden sm:inline">
                    <a
                      href="/login"
                      className="text-gray-600 mx-1 hover:text-emerald-600"
                    >
                      Login
                    </a>
                    <span>/</span>
                    <a
                      href="/register"
                      className="text-gray-600 mx-1 hover:text-emerald-600"
                    >
                      Register
                    </a>
                  </span>
                </div>
              )}

              {/* Wishlist */}
              <button className="p-2">
                <Heart className="h-6 w-6 text-gray-600 hover:text-emerald-600" />
              </button>

              {/* Keranjang Belanja */}
              <a href="/cart">
                <button className="p-2 relative">
                  <ShoppingCart className="h-6 w-6 text-gray-600 hover:text-emerald-600" />
                  <span className="absolute top-0 right-0 bg-emerald-600 text-white text-xs rounded-full h-4 w-4 flex items-center justify-center">0</span>
                </button>
              </a>
              
            </div>
          </div>

          {/* Mobile Menu */}
          {isMenuOpen && (
            <div className="md:hidden absolute top-full left-0 right-0 bg-white shadow-lg z-50">
              <div className="px-4 py-3 space-y-3">
                <a
                  href="/"
                  className="block text-gray-600 hover:text-emerald-600"
                >
                  Beranda
                </a>
                <a
                  href="/products"
                  className="block text-gray-600 hover:text-emerald-600"
                >
                  Produk
                </a>
                <a
                  href="/courts"
                  className="block text-gray-600 hover:text-emerald-600"
                >
                  Lapangan
                </a>
                <a
                  href="/players"
                  className="block text-gray-600 hover:text-emerald-600"
                >
                  Pemain
                </a>
                <a
                  href="/teams"
                  className="block text-gray-600 hover:text-emerald-600"
                >
                  Tim
                </a>
                <a
                  href="/rankings"
                  className="block text-gray-600 hover:text-emerald-600"
                >
                  Peringkat
                </a>
                <div className="relative">
                  <input
                    type="text"
                    placeholder="Cari produk atau lapangan..."
                    className="w-full pl-8 pr-4 py-1 border border-gray-300 rounded-full text-sm focus:outline-none focus:border-emerald-500"
                  />
                  <Search className="absolute left-2 top-1/2 transform -translate-y-1/2 h-4 w-4 text-gray-400" />
                </div>
              </div>
            </div>
          )}
        </div>
      </nav>
    </>
  );
};

export default Navbar;
