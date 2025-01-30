import React, { useState } from "react";
import { CreditCard, Plus, Trash2, Edit, CheckCircle2 } from "lucide-react";
import Navbar from "components/Navbar";
import Footer from "components/Footer";
import { useUser } from "context/UserContext";

export default function BankCards() {
  const { user } = useUser();
  const [showAddForm, setShowAddForm] = useState(false);
  const [formType, setFormType] = useState("card"); // "card" or "bank"

  const bankAccounts = [
    {
      id: 1,
      bankName: "Bank Central Asia",
      accountNumber: "1234567890",
      accountHolder: "JOHN DOE",
      isDefault: true
    },
    {
      id: 2,
      bankName: "Bank Mandiri",
      accountNumber: "0987654321",
      accountHolder: "JOHN DOE",
      isDefault: false
    }
  ];

  const cards = [
    {
      id: 1,
      type: "Visa",
      number: "•••• •••• •••• 4242",
      expiry: "12/25",
      holder: "JOHN DOE",
      isDefault: true
    },
    {
      id: 2,
      type: "Mastercard",
      number: "•••• •••• •••• 5555",
      expiry: "09/24",
      holder: "JOHN DOE",
      isDefault: false
    }
  ];

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
              <CreditCard className="w-6 h-6 text-emerald-600" />
              <h1 className="text-2xl font-medium">Bank & Kartu</h1>
            </div>
            <div className="flex space-x-4">
              <button
                onClick={() => {
                  setFormType("bank");
                  setShowAddForm(true);
                }}
                className="flex items-center space-x-2 bg-emerald-600 text-white px-4 py-2 rounded-lg hover:bg-emerald-700"
              >
                <Plus className="w-4 h-4" />
                <span>Tambah Rekening</span>
              </button>
              <button
                onClick={() => {
                  setFormType("card");
                  setShowAddForm(true);
                }}
                className="flex items-center space-x-2 bg-emerald-600 text-white px-4 py-2 rounded-lg hover:bg-emerald-700"
              >
                <Plus className="w-4 h-4" />
                <span>Tambah Kartu</span>
              </button>
            </div>
          </div>
        </div>

        {/* Add Form */}
        {showAddForm && (
          <div className="bg-white rounded-lg p-6">
            <h2 className="text-lg font-medium mb-4">
              {formType === "card" ? "Tambah Kartu Baru" : "Tambah Rekening Bank"}
            </h2>
            <form className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {formType === "card" ? (
                <>
                  <div className="md:col-span-2">
                    <label className="block text-sm font-medium text-gray-700 mb-1">Nomor Kartu</label>
                    <input
                      type="text"
                      className="w-full p-2 border rounded-lg focus:ring-2 focus:ring-emerald-500 focus:border-transparent"
                      placeholder="Nomor kartu 16 digit"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1">Masa Berlaku</label>
                    <input
                      type="text"
                      className="w-full p-2 border rounded-lg focus:ring-2 focus:ring-emerald-500 focus:border-transparent"
                      placeholder="MM/YY"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1">CVV</label>
                    <input
                      type="text"
                      className="w-full p-2 border rounded-lg focus:ring-2 focus:ring-emerald-500 focus:border-transparent"
                      placeholder="3 digit CVV"
                    />
                  </div>
                </>
              ) : (
                <>
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1">Bank</label>
                    <select className="w-full p-2 border rounded-lg focus:ring-2 focus:ring-emerald-500 focus:border-transparent">
                      <option>Bank Central Asia</option>
                      <option>Bank Mandiri</option>
                      <option>Bank BNI</option>
                      <option>Bank BRI</option>
                    </select>
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1">Nomor Rekening</label>
                    <input
                      type="text"
                      className="w-full p-2 border rounded-lg focus:ring-2 focus:ring-emerald-500 focus:border-transparent"
                      placeholder="Nomor rekening"
                    />
                  </div>
                </>
              )}
              <div className="md:col-span-2">
                <label className="block text-sm font-medium text-gray-700 mb-1">Nama Pemilik</label>
                <input
                  type="text"
                  className="w-full p-2 border rounded-lg focus:ring-2 focus:ring-emerald-500 focus:border-transparent"
                  placeholder="Nama sesuai kartu/rekening"
                />
              </div>
              <div className="md:col-span-2">
                <label className="flex items-center space-x-2">
                  <input type="checkbox" className="rounded text-emerald-600" />
                  <span className="text-sm text-gray-700">Jadikan sebagai {formType === "card" ? "kartu" : "rekening"} utama</span>
                </label>
              </div>
              <div className="md:col-span-2 flex space-x-4">
                <button
                  type="submit"
                  className="flex-1 bg-emerald-600 text-white py-2 rounded-lg hover:bg-emerald-700"
                >
                  Simpan
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

        {/* Saved Cards */}
        <div>
          <h2 className="text-lg font-medium mb-4">Kartu Tersimpan</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {cards.map((card) => (
              <div
                key={card.id}
                className="bg-white rounded-lg p-6 relative hover:shadow-md transition-shadow"
              >
                {card.isDefault && (
                  <div className="absolute top-4 right-4 flex items-center text-emerald-600 text-sm">
                    <CheckCircle2 className="w-4 h-4 mr-1" />
                    Utama
                  </div>
                )}
                <div className="flex items-center space-x-4">
                  <div className="w-12 h-12 bg-gray-100 rounded-lg flex items-center justify-center">
                    <CreditCard className="w-6 h-6 text-gray-600" />
                  </div>
                  <div className="flex-1">
                    <p className="font-medium">{card.type}</p>
                    <p className="text-gray-600">{card.number}</p>
                    <div className="mt-1 text-sm text-gray-500">
                      {card.holder} • Exp: {card.expiry}
                    </div>
                  </div>
                </div>
                <div className="mt-4 flex space-x-4 text-sm">
                  <button className="text-gray-600 hover:text-emerald-600 flex items-center">
                    <Edit className="w-4 h-4 mr-1" />
                    Edit
                  </button>
                  <button className="text-gray-600 hover:text-red-600 flex items-center">
                    <Trash2 className="w-4 h-4 mr-1" />
                    Hapus
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Saved Bank Accounts */}
        <div>
          <h2 className="text-lg font-medium mb-4">Rekening Bank</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {bankAccounts.map((account) => (
              <div
                key={account.id}
                className="bg-white rounded-lg p-6 relative hover:shadow-md transition-shadow"
              >
                {account.isDefault && (
                  <div className="absolute top-4 right-4 flex items-center text-emerald-600 text-sm">
                    <CheckCircle2 className="w-4 h-4 mr-1" />
                    Utama
                  </div>
                )}
                <div className="flex items-center space-x-4">
                  <div className="w-12 h-12 bg-gray-100 rounded-lg flex items-center justify-center">
                    {/* <Bank className="w-6 h-6 text-gray-600" /> */}
                  </div>
                  <div className="flex-1">
                    <p className="font-medium">{account.bankName}</p>
                    <p className="text-gray-600">{account.accountNumber}</p>
                    <p className="text-sm text-gray-500 mt-1">{account.accountHolder}</p>
                  </div>
                </div>
                <div className="mt-4 flex space-x-4 text-sm">
                  <button className="text-gray-600 hover:text-emerald-600 flex items-center">
                    <Edit className="w-4 h-4 mr-1" />
                    Edit
                  </button>
                  <button className="text-gray-600 hover:text-red-600 flex items-center">
                    <Trash2 className="w-4 h-4 mr-1" />
                    Hapus
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
}