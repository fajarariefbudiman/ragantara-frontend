import React, { useState } from "react";
import { ShoppingBag, Search, Clock, Package, CreditCard, ChevronDown } from "lucide-react";
import Navbar from "components/Navbar";
import Footer from "components/Footer";
import { useUser } from "context/UserContext";

export default function MyOrders() {
  const { user } = useUser();
  const [selectedStatus, setSelectedStatus] = useState("all");
  
  const orders = [
    {
      id: "ORD123456",
      date: "2024-01-02",
      store: "Nike Official Store",
      status: "Dalam Pengiriman",
      items: [
        {
          name: "Nike Air Max 270",
          variant: "Black/White - 42",
          price: 1899000,
          quantity: 1,
          image: "/api/placeholder/80/80"
        }
      ],
      total: 1899000,
      tracking: "JNE - 12345678",
      estimatedArrival: "2024-01-05"
    },
    {
      id: "ORD123455",
      date: "2024-01-01",
      store: "Adidas Official",
      status: "Selesai",
      items: [
        {
          name: "Adidas Ultraboost",
          variant: "Grey/White - 43",
          price: 2499000,
          quantity: 1,
          image: "/api/placeholder/80/80"
        },
        {
          name: "Adidas Training Shorts",
          variant: "Black - L",
          price: 399000,
          quantity: 2,
          image: "/api/placeholder/80/80"
        }
      ],
      total: 3297000,
      tracking: "JNE - 12345677",
      estimatedArrival: "2024-01-03"
    },
    {
      id: "ORD123454",
      date: "2023-12-30",
      store: "Puma Store",
      status: "Dibatalkan",
      items: [
        {
          name: "Puma RS-X",
          variant: "White/Red - 42",
          price: 1599000,
          quantity: 1,
          image: "/api/placeholder/80/80"
        }
      ],
      total: 1599000,
      cancelReason: "Stok habis"
    }
  ];

  const getStatusColor = (status) => {
    switch (status) {
      case "Dalam Pengiriman":
        return "bg-blue-100 text-blue-600";
      case "Selesai":
        return "bg-green-100 text-green-600";
      case "Dibatalkan":
        return "bg-red-100 text-red-600";
      default:
        return "bg-gray-100 text-gray-600";
    }
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
              <ShoppingBag className="w-6 h-6 text-emerald-600" />
              <h1 className="text-2xl font-medium">Pesanan Saya</h1>
            </div>
            <div className="flex space-x-4">
              <div className="relative">
                <input
                  type="text"
                  placeholder="Cari pesanan..."
                  className="pl-10 pr-4 py-2 border rounded-lg w-64 focus:ring-2 focus:ring-emerald-500 focus:border-transparent"
                />
                <Search className="w-5 h-5 text-gray-400 absolute left-3 top-2.5" />
              </div>
              <select
                value={selectedStatus}
                onChange={(e) => setSelectedStatus(e.target.value)}
                className="px-4 py-2 border rounded-lg focus:ring-2 focus:ring-emerald-500 focus:border-transparent"
              >
                <option value="all">Semua Status</option>
                <option value="shipping">Dalam Pengiriman</option>
                <option value="completed">Selesai</option>
                <option value="cancelled">Dibatalkan</option>
              </select>
            </div>
          </div>
        </div>

        {/* Orders List */}
        <div className="space-y-4">
          {orders.map((order) => (
            <div key={order.id} className="bg-white rounded-lg p-6">
              {/* Order Header */}
              <div className="flex justify-between items-center pb-4 border-b">
                <div className="space-y-1">
                  <div className="flex items-center space-x-3">
                    <h3 className="font-medium">{order.store}</h3>
                    <span className={`px-3 py-1 rounded-full text-sm ${getStatusColor(order.status)}`}>
                      {order.status}
                    </span>
                  </div>
                  <p className="text-sm text-gray-600">
                    Order ID: {order.id} • {order.date}
                  </p>
                </div>
                <button className="text-emerald-600 hover:text-emerald-700">
                  Detail Pesanan
                </button>
              </div>

              {/* Order Items */}
              <div className="py-4 space-y-4">
                {order.items.map((item, idx) => (
                  <div key={idx} className="flex space-x-4">
                    <img
                      src={item.image}
                      alt={item.name}
                      className="w-20 h-20 object-cover rounded"
                    />
                    <div className="flex-1">
                      <h4 className="font-medium">{item.name}</h4>
                      <p className="text-sm text-gray-600">{item.variant}</p>
                      <div className="flex justify-between mt-2">
                        <p className="text-sm text-gray-600">{item.quantity} x Rp{item.price.toLocaleString()}</p>
                        <p className="font-medium">Rp{(item.quantity * item.price).toLocaleString()}</p>
                      </div>
                    </div>
                  </div>
                ))}
              </div>

              {/* Order Footer */}
              <div className="pt-4 border-t">
                <div className="flex justify-between items-center">
                  <div>
                    {order.status === "Dalam Pengiriman" && (
                      <div className="text-sm text-gray-600">
                        <p>No. Resi: {order.tracking}</p>
                        <p>Estimasi tiba: {order.estimatedArrival}</p>
                      </div>
                    )}
                    {order.status === "Dibatalkan" && (
                      <p className="text-sm text-gray-600">
                        Alasan: {order.cancelReason}
                      </p>
                    )}
                  </div>
                  <div className="text-right">
                    <p className="text-sm text-gray-600">Total Pesanan</p>
                    <p className="text-lg font-medium text-emerald-600">
                      Rp{order.total.toLocaleString()}
                    </p>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
      <Footer />
    </div>
  );
}