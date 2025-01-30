import React, { useEffect, useState } from "react";
import { MapPin, Plus, Edit, Trash2, User, ShoppingBag, Lock, CreditCard } from "lucide-react";
import Navbar from "components/Navbar";
import Footer from "components/Footer";
import { useUser } from "context/UserContext";
import { useLocation, useNavigate } from "react-router-dom";
import { useAddress, useCreateAddress } from "hooks/Address";

export default function CustomerAddresses() {
  const { user } = useUser();
  // console.log("user id now", user);
  const { handleAddress, error } = useCreateAddress();
  const navigate = useNavigate();
  const { addresses } = useAddress();
  const location = useLocation();
  const [formData, setFormData] = useState({
    user_id: "",
    address_type: "",
    recipient_name: "",
    phone_number: "",
    full_address: "",
    district: "",
    city: "",
    province: "",
    postal_code: "",
    is_primary: "",
  });
  useEffect(() => {
    if (user?.auth?.id) {
      setFormData((prev) => ({
        ...prev,
        user_id: user.auth.id,
      }));
    }
  }, [user]);
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };
  const handleSubmit = async (e) => {
    e.preventDefault();

    // if (validateForm()) {
    try {
      await handleAddress(formData);
      setFormData({
        user_id: user.auth.id,
        address_type: "",
        recipient_name: "",
        phone_number: "",
        full_address: "",
        district: "",
        city: "",
        province: "",
        postal_code: "",
        is_primary: "",
      });
    } catch (err) {
      console.error("Submit error:", err);
    }
    // }
    await handleAddress(formData);
  };
  const [showAddForm, setShowAddForm] = useState(false);
  const navItems = [
    { label: "Akun Saya", icon: User, path: "/profile" },
    { label: "Pesanan Saya", icon: ShoppingBag, path: "my-orders" },
    { label: "Alamat", icon: MapPin, path: "/addresses" },
    { label: "Ubah Password", icon: Lock, path: "/change-password" },
    { label: "Bank & Kartu", icon: CreditCard, path: "/bank-card" },
  ];
  const redirectPath = (path) => {
    navigate(path);
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
      <div className="max-w-7xl mx-auto p-4 space-y-6">
        {/* Header */}
        <div className="bg-white rounded-lg p-6">
          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-3">
              <MapPin className="w-6 h-6 text-emerald-600" />
              <h1 className="text-2xl font-medium">Alamat Saya</h1>
            </div>
            <button
              onClick={() => setShowAddForm(!showAddForm)}
              className="flex items-center space-x-2 bg-emerald-600 text-white px-4 py-2 rounded-lg hover:bg-emerald-700"
            >
              <Plus className="w-4 h-4" />
              <span>Tambah Alamat</span>
            </button>
          </div>
        </div>

        {/* Add Address Form */}
        {showAddForm && (
          <div className="bg-white rounded-lg p-6">
            <h2 className="text-lg font-medium mb-4">Tambah Alamat Baru</h2>
            <form
              className="grid grid-cols-1 md:grid-cols-2 gap-4"
              onSubmit={handleSubmit}
            >
              <div className="">
                <label
                  htmlFor="type"
                  className="block text-sm font-medium text-gray-700 mb-1"
                >
                  Type
                </label>
                <select
                  id="type"
                  onChange={handleChange}
                  value={formData.address_type}
                  name="address_type"
                  className="mt-1 block w-full py-2 px-3 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-emerald-500 focus:border-emerald-500"
                >
                  <option value="Rumah">Rumah</option>
                  <option value="Kantor">Kantor</option>
                </select>
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">Nama Penerima</label>
                <input
                  type="text"
                  onChange={handleChange}
                  value={formData.recipient_name}
                  name="recipient_name"
                  className="w-full p-2 border rounded-lg focus:ring-2 focus:ring-emerald-500 focus:border-transparent"
                  placeholder="Nama lengkap penerima"
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">Nomor Telepon</label>
                <input
                  type="tel"
                  onChange={handleChange}
                  value={formData.phone_number}
                  name="phone_number"
                  className="w-full p-2 border rounded-lg focus:ring-2 focus:ring-emerald-500 focus:border-transparent"
                  placeholder="Nomor telepon penerima"
                />
              </div>
              <div className="md:col-span-2">
                <label className="block text-sm font-medium text-gray-700 mb-1">Alamat Lengkap</label>
                <textarea
                  className="w-full p-2 border rounded-lg focus:ring-2 focus:ring-emerald-500 focus:border-transparent"
                  rows="3"
                  onChange={handleChange}
                  value={formData.full_address}
                  name="full_address"
                  placeholder="Nama jalan, nomor rumah, RT/RW"
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">Kecamatan</label>
                <input
                  type="text"
                  onChange={handleChange}
                  value={formData.district}
                  name="district"
                  className="w-full p-2 border rounded-lg focus:ring-2 focus:ring-emerald-500 focus:border-transparent"
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">Kota/Kabupaten</label>
                <input
                  type="text"
                  onChange={handleChange}
                  value={formData.city}
                  name="city"
                  className="w-full p-2 border rounded-lg focus:ring-2 focus:ring-emerald-500 focus:border-transparent"
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">Provinsi</label>
                <input
                  type="text"
                  onChange={handleChange}
                  value={formData.province}
                  name="province"
                  className="w-full p-2 border rounded-lg focus:ring-2 focus:ring-emerald-500 focus:border-transparent"
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">Kode Pos</label>
                <input
                  type="text"
                  onChange={handleChange}
                  value={formData.postal_code}
                  name="postal_code"
                  className="w-full p-2 border rounded-lg focus:ring-2 focus:ring-emerald-500 focus:border-transparent"
                />
              </div>
              <div className="md:col-span-2">
                <label className="flex items-center space-x-2">
                  <input
                    type="checkbox"
                    onChange={handleChange}
                    name="is_primary"
                    value={formData.is_primary}
                    className="rounded text-emerald-600"
                  />
                  <span className="text-sm text-gray-700">Jadikan sebagai alamat utama</span>
                </label>
              </div>
              <div className="md:col-span-2 flex space-x-4">
                <button
                  type="submit"
                  className="flex-1 bg-emerald-600 text-white py-2 rounded-lg hover:bg-emerald-700"
                >
                  Simpan Alamat
                </button>
                <button
                  type="button"
                  onClick={() => setShowAddForm(false)}
                  className="flex-1 border border-emerald-600 text-emerald-600 py-2 rounded-lg hover:bg-emerald-50"
                >
                  Batal
                </button>
              </div>
            </form>
          </div>
        )}

        {/* Address List */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          {addresses.map((address) => (
            <div
              key={address.id}
              className="bg-white rounded-lg p-6 relative"
            >
              {address.is_primary && <span className="absolute top-4 right-4 bg-emerald-100 text-emerald-600 text-xs px-2 py-1 rounded-full">Utama</span>}
              <div className="flex justify-between items-start mb-4">
                <div>
                  <h3 className="font-medium">{address.address_type}</h3>
                  <p className="text-sm text-gray-600 mt-1">{address.recipient_name}</p>
                  <p className="text-sm text-gray-600">{address.phone_number}</p>
                </div>
              </div>
              <p className="text-gray-600 text-sm mb-4">
                {address.full_address}, {address.district}, {address.city}, {address.province} {address.postal_code}
              </p>
              <div className="flex space-x-4">
                <button className="flex items-center space-x-2 text-gray-600 hover:text-emerald-600">
                  <Edit className="w-4 h-4" />
                  <span>Edit</span>
                </button>
                <button className="flex items-center space-x-2 text-gray-600 hover:text-red-600">
                  <Trash2 className="w-4 h-4" />
                  <span>Hapus</span>
                </button>
              </div>
            </div>
          ))}
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
      <Footer />
    </div>
  );
}
