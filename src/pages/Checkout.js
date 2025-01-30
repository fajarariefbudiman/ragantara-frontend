import React from "react";
import { MapPin, Clock, CreditCard, Truck } from "lucide-react";
import Navbar from "components/Navbar";
import Footer from "components/Footer";

const Checkout = () => {
  const orderItems = [
    { name: "Gasin Jeans", color: "Sky", size: "M", price: 299.99, qty: 1 },
    { name: "Summer Dress", color: "White", size: "S", price: 199.99, qty: 2 },
  ];

  return (
    <div className="bg-emerald-50 min-h-screen">
      <Navbar />
      <div className="max-w-7xl mx-auto px-4 py-8">
        <h1 className="text-3xl font-serif text-gray-900 mb-8">Checkout</h1>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Left Column - Forms */}
          <div className="lg:col-span-2 space-y-6">
            {/* Shipping Address */}
            <div className="bg-white rounded-lg shadow-sm p-6">
              <div className="flex items-center gap-2 mb-4">
                <MapPin className="h-5 w-5 text-emerald-600" />
                <h2 className="text-lg font-medium">Shipping Address</h2>
              </div>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <input
                  type="text"
                  placeholder="First Name"
                  className="p-2 border rounded focus:outline-none focus:border-emerald-600"
                />
                <input
                  type="text"
                  placeholder="Last Name"
                  className="p-2 border rounded focus:outline-none focus:border-emerald-600"
                />
                <input
                  type="email"
                  placeholder="Email"
                  className="p-2 border rounded focus:outline-none focus:border-emerald-600 md:col-span-2"
                />
                <input
                  type="tel"
                  placeholder="Phone"
                  className="p-2 border rounded focus:outline-none focus:border-emerald-600 md:col-span-2"
                />
                <input
                  type="text"
                  placeholder="Street Address"
                  className="p-2 border rounded focus:outline-none focus:border-emerald-600 md:col-span-2"
                />
                <input
                  type="text"
                  placeholder="City"
                  className="p-2 border rounded focus:outline-none focus:border-emerald-600"
                />
                <input
                  type="text"
                  placeholder="Postal Code"
                  className="p-2 border rounded focus:outline-none focus:border-emerald-600"
                />
              </div>
            </div>

            {/* Shipping Method */}
            <div className="bg-white rounded-lg shadow-sm p-6">
              <div className="flex items-center gap-2 mb-4">
                <Truck className="h-5 w-5 text-emerald-600" />
                <h2 className="text-lg font-medium">Shipping Method</h2>
              </div>
              <div className="space-y-3">
                {["Standard Shipping (2-3 days) - $10", "Express Shipping (1 day) - $20"].map((method) => (
                  <label
                    key={method}
                    className="flex items-center p-3 border rounded cursor-pointer hover:border-emerald-600"
                  >
                    <input
                      type="radio"
                      name="shipping"
                      className="mr-3"
                    />
                    <span>{method}</span>
                  </label>
                ))}
              </div>
            </div>

            {/* Order Notes */}
            <div className="bg-white rounded-lg shadow-sm p-6">
              <div className="flex items-center gap-2 mb-4">
                <Clock className="h-5 w-5 text-emerald-600" />
                <h2 className="text-lg font-medium">Order Notes</h2>
              </div>
              <textarea
                placeholder="Special instructions for delivery"
                className="w-full p-2 border rounded focus:outline-none focus:border-emerald-600 h-24"
              />
            </div>

            {/* Payment Method */}
            <div className="bg-white rounded-lg shadow-sm p-6">
              <div className="flex items-center gap-2 mb-4">
                <CreditCard className="h-5 w-5 text-emerald-600" />
                <h2 className="text-lg font-medium">Payment Method</h2>
              </div>
              <div className="space-y-3">
                {["Credit Card", "PayPal", "Bank Transfer"].map((method) => (
                  <label
                    key={method}
                    className="flex items-center p-3 border rounded cursor-pointer hover:border-emerald-600"
                  >
                    <input
                      type="radio"
                      name="payment"
                      className="mr-3"
                    />
                    <span>{method}</span>
                  </label>
                ))}
              </div>
            </div>
          </div>

          {/* Right Column - Order Summary */}
          <div className="space-y-6">
            {/* Order Items */}
            <div className="bg-white rounded-lg shadow-sm p-6">
              <h2 className="text-lg font-medium mb-4">Order Summary</h2>
              <div className="divide-y">
                {orderItems.map((item, idx) => (
                  <div
                    key={idx}
                    className="py-4 flex gap-4"
                  >
                    <img
                      src="/api/placeholder/80/100"
                      alt={item.name}
                      className="w-20 h-24 object-cover rounded"
                    />
                    <div className="flex-1">
                      <h3 className="font-medium">{item.name}</h3>
                      <p className="text-sm text-gray-600">Color: {item.color}</p>
                      <p className="text-sm text-gray-600">Size: {item.size}</p>
                      <div className="mt-2 flex justify-between">
                        <span className="text-gray-600">Qty: {item.qty}</span>
                        <span className="text-emerald-600">${item.price}</span>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Voucher */}
            <div className="bg-white rounded-lg shadow-sm p-6">
              <h2 className="text-lg font-medium mb-4">Voucher Code</h2>
              <div className="flex gap-2">
                <input
                  type="text"
                  placeholder="Enter code"
                  className="flex-1 p-2 border rounded focus:outline-none focus:border-emerald-600"
                />
                <button className="px-4 py-2 bg-emerald-600 text-white rounded hover:bg-emerald-700">Apply</button>
              </div>
            </div>

            {/* Total */}
            <div className="bg-white rounded-lg shadow-sm p-6">
              <div className="space-y-3">
                <div className="flex justify-between text-gray-600">
                  <span>Subtotal</span>
                  <span>$699.97</span>
                </div>
                <div className="flex justify-between text-gray-600">
                  <span>Shipping</span>
                  <span>$10.00</span>
                </div>
                <div className="flex justify-between text-gray-600">
                  <span>Tax</span>
                  <span>$70.00</span>
                </div>
                <div className="pt-3 border-t">
                  <div className="flex justify-between font-medium text-lg">
                    <span>Total</span>
                    <span className="text-emerald-600">$779.97</span>
                  </div>
                </div>
              </div>
              <button className="w-full mt-6 bg-emerald-600 text-white py-3 rounded-full hover:bg-emerald-700 transition-colors">Place Order</button>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default Checkout;
