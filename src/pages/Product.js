import React, { useEffect } from "react";
import { Star, Store, MapPin, Clock, Package, ShieldCheck, Minus, Plus } from "lucide-react";
import Navbar from "components/Navbar";
import Footer from "components/Footer";
import { useNavigate } from "react-router-dom";

const ProductDetail = () => {
  const [activeTab, setActiveTab] = React.useState("description");
  const [selectedImage, setSelectedImage] = React.useState(0);
  const navigate = useNavigate();
  useEffect(() => {
    const user = localStorage.getItem("user");
    if (!user) {
      navigate("/login");
    }
  }, [navigate]);

  const redirectCart = () => {
    navigate("/cart");
  };
  const product = {
    name: "SUTU 66W Super Fast Charging Power Bank LED Display",
    description: "20000mAh Dual Output Port USB & Type-C",
    price: 88140,
    originalPrice: 110000,
    discount: "20%",
    rating: 4.8,
    reviews: "2.9RB",
    sales: "5.1RB",
    images: ["/api/placeholder/800/800", "/api/placeholder/800/800", "/api/placeholder/800/800", "/api/placeholder/800/800"],
    specs: {
      brand: "SUTU",
      capacity: "> 20000 mAh",
      ports: 3,
      weight: "350g",
      dimensions: "15 x 7.5 x 2.5 cm",
      input: "Type-C PD 60W",
      output: "USB-A QC3.0, Type-C PD",
    },
    store: {
      name: "SUTU Official Store",
      rating: 4.9,
      followers: "12.5K",
      products: 156,
      joinDate: "2 tahun yang lalu",
      responseTime: "± 1 jam",
      location: "Jakarta Barat",
    },
    quantityAvailable: 150,
    shippingCost: 15000,
    shippingCities: ["Jakarta", "Bandung", "Surabaya", "Medan"],
  };
  return (
    <div className="bg-emerald-50 min-h-screen">
      <Navbar />
      <div className="max-w-7xl mx-auto p-4 space-y-6">
        {/* Breadcrumb */}
        <div className="text-sm text-gray-600">Home / Powerbank / {product.name}</div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
          {/* Image Gallery */}
          <div className="space-y-4">
            <div className="bg-white rounded-lg p-4">
              <img
                src={`https://picsum.photos/300/300?${product.images[selectedImage]}`}
                className="w-full h-[500px] object-cover rounded-lg"
                alt={product.name}
              />
            </div>
            <div className="grid grid-cols-4 gap-4">
              {product.images.map((img, idx) => (
                <button
                  key={idx}
                  className={`bg-white p-2 rounded-lg ${selectedImage === idx ? "ring-2 ring-emerald-500" : ""}`}
                  onClick={() => setSelectedImage(idx)}
                >
                  <img
                    src={`https://picsum.photos/300/300?${img}`}
                    className="w-full aspect-square object-cover rounded"
                    alt=""
                  />
                </button>
              ))}
            </div>
          </div>

          {/* Product Info */}
          <div className="space-y-6">
            <div className="bg-white rounded-lg p-6">
              <h1 className="text-xl font-medium mb-2">{product.name}</h1>
              <p className="text-gray-600">{product.description}</p>

              <div className="flex items-center space-x-4 mt-4 text-sm">
                <div className="flex items-center">
                  <Star className="h-4 w-4 text-yellow-400 fill-yellow-400" />
                  <span className="ml-1">{product.rating}</span>
                </div>
                <span className="text-gray-300">|</span>
                <span>{product.reviews} Ulasan</span>
                <span className="text-gray-300">|</span>
                <span>{product.sales} Terjual</span>
              </div>

              <div className="mt-4">
                <div className="text-2xl font-bold text-red-600">Rp{product.price.toLocaleString()}</div>
                <div className="flex items-center space-x-2 mt-1">
                  <span className="line-through text-gray-400">Rp{product.originalPrice.toLocaleString()}</span>
                  <span className="bg-red-100 text-red-600 px-2 py-1 rounded text-sm">-{product.discount}</span>
                </div>
              </div>
            </div>

            {/* Store Info */}
            <div className="bg-white rounded-lg p-6">
              <div className="flex items-center space-x-4">
                <div className="bg-emerald-100 p-3 rounded-full">
                  <Store className="h-6 w-6 text-emerald-600" />
                </div>
                <div>
                  <h3 className="font-medium">{product.store.name}</h3>
                  <div className="flex items-center space-x-2 text-sm mt-1">
                    <Star className="h-4 w-4 text-yellow-400 fill-yellow-400" />
                    <span>{product.store.rating}</span>
                    <span>•</span>
                    <span>{product.store.followers} Followers</span>
                  </div>
                </div>
                <button className="ml-auto px-4 py-2 border border-emerald-600 text-emerald-600 rounded-lg">Follow</button>
              </div>
              <div className="grid grid-cols-2 gap-4 mt-4 text-sm">
                <div className="flex items-center space-x-2">
                  <MapPin className="h-4 w-4 text-gray-400" />
                  <span>{product.store.location}</span>
                </div>
                <div className="flex items-center space-x-2">
                  <Clock className="h-4 w-4 text-gray-400" />
                  <span>Response {product.store.responseTime}</span>
                </div>
                <div className="flex items-center space-x-2">
                  <Package className="h-4 w-4 text-gray-400" />
                  <div className="flex items-center border rounded">
                    <button className="p-2 hover:bg-gray-50">
                      <Minus className="h-4 w-4" />
                    </button>
                    <span className="px-4 py-2 border-x">1</span>
                    <button className="p-2 hover:bg-gray-50">
                      <Plus className="h-4 w-4" />
                    </button>
                  </div>
                </div>
                <div className="flex items-center space-x-2">
                  <ShieldCheck className="h-4 w-4 text-gray-400" />
                  <span>Joined {product.store.joinDate}</span>
                </div>
              </div>
            </div>

            {/* Product Availability and Shipping */}
            <div className="bg-white rounded-lg p-6">
              <div className="flex justify-between items-center">
                <div className="text-sm">
                  <span className="font-medium">Stok Tersedia: </span>
                  <span>{product.quantityAvailable} unit</span>
                </div>
                <div className="text-sm">
                  <span className="font-medium">Ongkos Kirim: </span>
                  <span>Rp{product.shippingCost.toLocaleString()}</span>
                </div>
              </div>
              <div className="mt-4">
                <label
                  htmlFor="shippingCity"
                  className="block text-sm font-medium"
                >
                  Pilih Kota Pengiriman
                </label>
                <select
                  id="shippingCity"
                  className="mt-1 block w-full py-2 px-3 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-emerald-500 focus:border-emerald-500"
                >
                  {product.shippingCities.map((city, idx) => (
                    <option
                      key={idx}
                      value={city}
                    >
                      {city}
                    </option>
                  ))}
                </select>
              </div>
            </div>

            {/* Action Buttons */}
            <div className="flex space-x-4">
              <button className="flex-1 py-3 border border-emerald-600 text-emerald-600 rounded-lg hover:bg-emerald-50">Add to Cart</button>
              <button
                className="flex-1 py-3 bg-emerald-600 text-white rounded-lg hover:bg-emerald-700"
                onClick={redirectCart}
              >
                Buy Now
              </button>
            </div>
          </div>
        </div>

        {/* Product Details Tabs */}
        <div className="bg-white rounded-lg p-6">
          <div className="flex space-x-6 border-b">
            {["description", "specification", "reviews"].map((tab) => (
              <button
                key={tab}
                className={`pb-4 px-2 capitalize ${activeTab === tab ? "border-b-2 border-emerald-600 text-emerald-600" : "text-gray-500"}`}
                onClick={() => setActiveTab(tab)}
              >
                {tab}
              </button>
            ))}
          </div>

          <div className="mt-6">
            {activeTab === "specification" && (
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {Object.entries(product.specs).map(([key, value]) => (
                  <div
                    key={key}
                    className="flex justify-between py-2 border-b"
                  >
                    <span className="text-gray-600 capitalize">{key}</span>
                    <span>{value}</span>
                  </div>
                ))}
              </div>
            )}
          </div>
        </div>

        {/* Similar Products */}
        <div className="bg-white rounded-lg p-6">
          <h2 className="text-lg font-medium mb-4">Similar Products</h2>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            {[1, 2, 3, 4].map((i) => (
              <div
                key={i}
                className="space-y-2"
              >
                <img
                  src="/api/placeholder/200/200"
                  className="w-full rounded-lg"
                  alt=""
                />
                <h3 className="text-sm font-medium">Similar Powerbank Product {i}</h3>
                <div className="text-red-600 font-medium">Rp75.000</div>
              </div>
            ))}
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default ProductDetail;
