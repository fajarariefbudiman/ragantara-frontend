import React, { useEffect, useState } from "react";
import { Trash2, Plus, Minus } from "lucide-react";
import Navbar from "components/Navbar";
import Footer from "components/Footer";
import { useNavigate } from "react-router-dom";

export default function Cart() {
  const navigate = useNavigate();
  useEffect(() => {
    const user = localStorage.getItem("user");
    if (!user) {
      navigate("/login");
    }
  });
  const redirectCheckout = () => {
    navigate("/checkout");
  };
  const initialItems = [
    {
      id: 1,
      name: "Gassin Jeans",
      store: "Fashion Store",
      price: 299.99,
      color: "emerald",
      size: "M",
      quantity: 1,
    },
    {
      id: 2,
      name: "Casual Shirt",
      store: "Fashion Store",
      price: 299.99,
      color: "blue",
      size: "L",
      quantity: 1,
    },
    {
      id: 3,
      name: "Running Shoes",
      store: "Sports Hub",
      price: 299.99,
      color: "black",
      size: "42",
      quantity: 1,
    },
  ];

  const [items, setItems] = useState(initialItems);
  const [selected, setSelected] = useState(new Set());

  // Get unique stores
  const stores = [...new Set(items.map((item) => item.store))];

  // Check if all items are selected
  const isAllSelected = items.length === selected.size;

  // Check if all items in a store are selected
  const isStoreSelected = (store) => {
    const storeItems = items.filter((item) => item.store === store);
    return storeItems.every((item) => selected.has(item.id));
  };

  // Toggle selection for all items
  const toggleAll = () => {
    if (isAllSelected) {
      setSelected(new Set());
    } else {
      setSelected(new Set(items.map((item) => item.id)));
    }
  };

  // Toggle selection for all items in a store
  const toggleStore = (store) => {
    const storeItems = items.filter((item) => item.store === store);
    const newSelected = new Set(selected);

    if (isStoreSelected(store)) {
      storeItems.forEach((item) => newSelected.delete(item.id));
    } else {
      storeItems.forEach((item) => newSelected.add(item.id));
    }

    setSelected(newSelected);
  };

  // Toggle selection for a single item
  const toggleItem = (id) => {
    const newSelected = new Set(selected);
    if (selected.has(id)) {
      newSelected.delete(id);
    } else {
      newSelected.add(id);
    }
    setSelected(newSelected);
  };

  return (
    <div className="bg-emerald-50 min-h-screen">
      <Navbar />
      <div className="max-w-7xl mx-auto px-4 my-8">
        <h1 className="text-3xl font-serif text-gray-900 mb-8">Shopping Cart</h1>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Cart Items */}
          <div className="lg:col-span-2">
            <div className="bg-white rounded-lg shadow-sm divide-y">
              {/* Main checkbox */}
              <div className="p-4 flex items-center">
                <input
                  type="checkbox"
                  checked={isAllSelected}
                  onChange={toggleAll}
                  className="h-4 w-4 text-emerald-600 rounded border-gray-300"
                />
                <span className="ml-2 text-gray-700">Select All Items</span>
              </div>

              {/* Group items by store */}
              {stores.map((store) => (
                <div key={store}>
                  {/* Store header with checkbox */}
                  <div className="p-4 flex items-center">
                    <input
                      type="checkbox"
                      checked={isStoreSelected(store)}
                      onChange={() => toggleStore(store)}
                      className="h-4 w-4 text-emerald-600 rounded border-gray-300"
                    />
                    <span className="ml-2 font-medium text-gray-700">{store}</span>
                  </div>

                  {/* Store items */}
                  {items
                    .filter((item) => item.store === store)
                    .map((item) => (
                      <div
                        key={item.id}
                        className="p-6 flex space-x-6"
                      >
                        <input
                          type="checkbox"
                          checked={selected.has(item.id)}
                          onChange={() => toggleItem(item.id)}
                          className="h-4 w-4 text-emerald-600 rounded border-gray-300 mt-16"
                        />
                        <img
                          src={`https://picsum.photos/500/500?${item.name}`}
                          alt="Product"
                          className="w-32 h-40 object-cover rounded"
                        />
                        <div className="flex-1">
                          <div className="flex justify-between">
                            <div>
                              <h3 className="text-lg font-medium text-gray-900">{item.name}</h3>
                              <p className="text-sm text-gray-600 mt-1">Color: {item.color}</p>
                              <p className="text-sm text-gray-600">Size: {item.size}</p>
                            </div>
                            <button className="text-gray-400 hover:text-red-500">
                              <Trash2 className="h-5 w-5" />
                            </button>
                          </div>
                          <div className="mt-4 flex justify-between items-center">
                            <div className="flex items-center border rounded">
                              <button className="p-2 hover:bg-gray-50">
                                <Minus className="h-4 w-4" />
                              </button>
                              <span className="px-4 py-2 border-x">{item.quantity}</span>
                              <button className="p-2 hover:bg-gray-50">
                                <Plus className="h-4 w-4" />
                              </button>
                            </div>
                            <span className="font-medium text-emerald-600">${item.price}</span>
                          </div>
                        </div>
                      </div>
                    ))}
                </div>
              ))}
            </div>
          </div>

          {/* Order Summary */}
          <div className="bg-white rounded-lg shadow-sm p-6 h-fit">
            <h2 className="text-lg font-medium text-gray-900 mb-4">Order Summary</h2>
            <div className="space-y-4">
              <div className="flex justify-between text-gray-600">
                <span>Subtotal</span>
                <span>$899.97</span>
              </div>
              <div className="flex justify-between text-gray-600">
                <span>Shipping</span>
                <span>$10.00</span>
              </div>
              <div className="flex justify-between text-gray-600">
                <span>Tax</span>
                <span>$90.00</span>
              </div>
              <div className="pt-4 border-t">
                <div className="flex justify-between font-medium text-lg">
                  <span>Total</span>
                  <span className="text-emerald-600">$999.97</span>
                </div>
              </div>
              <button
                className="w-full bg-emerald-600 text-white py-3 rounded-full hover:bg-emerald-700 transition-colors"
                onClick={redirectCheckout}
              >
                Proceed to Checkout
              </button>
              <button className="w-full border border-emerald-600 text-emerald-600 py-3 rounded-full hover:bg-emerald-50 transition-colors">Continue Shopping</button>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
}
