import React from "react";
import { Filter, ChevronDown, Star } from "lucide-react";
import Navbar from "components/Navbar";
import Footer from "components/Footer";
import useProducts from "hooks/Product";
import { useCategory } from "context/CategoryContext";

export default function ProductCollection() {
  const { products, currentPage, setCurrentPage, totalPages, totalItems } = useProducts();
  const { categories } = useCategory();
  return (
    <div className="bg-emerald-50 min-h-screen">
      <Navbar />

      {/* Breadcrumb */}
      <div className="max-w-7xl mx-auto px-4 py-4">
        <div className="text-sm text-gray-600">Home / All Products</div>
      </div>

      {/* Header */}
      <div className="max-w-7xl mx-auto px-4 mb-8">
        <h1 className="text-3xl font-serif text-gray-900">Our Collection</h1>
        <p className="text-gray-600 mt-2">Discover our exclusive products</p>
      </div>

      <div className="max-w-7xl mx-auto px-4">
        <div className="grid grid-cols-1 lg:grid-cols-4 gap-8">
          {/* Filter Sidebar */}
          <div className="bg-white p-6 rounded-lg shadow-sm h-fit">
            <div className="flex items-center justify-between mb-4">
              <span className="font-medium flex items-center">
                <Filter className="h-5 w-5 mr-2" />
                Filters
              </span>
              <button className="text-emerald-600 text-sm">Reset All</button>
            </div>

            {/* Categories */}
            <div className="border-b pb-4 mb-4">
              <h3 className="font-medium mb-2">Categories</h3>
              <div className="space-y-2">
                {categories.map((category) => (
                  <label
                    key={category.id}
                    className="flex items-center"
                  >
                    <input
                      type="checkbox"
                      className="rounded text-emerald-600 mr-2"
                    />
                    <span className="text-gray-600">{category.name}</span>
                  </label>
                ))}
              </div>
            </div>

            {/* Price Range */}
            <div className="border-b pb-4 mb-4">
              <h3 className="font-medium mb-2">Price Range</h3>
              <div className="grid grid-cols-2 gap-2">
                <input
                  type="number"
                  placeholder="Min"
                  className="p-2 border rounded text-sm"
                />
                <input
                  type="number"
                  placeholder="Max"
                  className="p-2 border rounded text-sm"
                />
              </div>
            </div>

            {/* Colors */}
            <div className="border-b pb-4 mb-4">
              <h3 className="font-medium mb-2">Colors</h3>
              <div className="flex flex-wrap gap-2">
                {["red", "emerald", "purple", "blue", "black", "white"].map((color) => (
                  <button
                    key={color}
                    className={`w-6 h-6 rounded-full border-2 border-gray-200 bg-${color}-500`}
                  />
                ))}
              </div>
            </div>

            {/* Size */}
            <div>
              <h3 className="font-medium mb-2">Size</h3>
              <div className="grid grid-cols-3 gap-2">
                {["XS", "S", "M", "L", "XL", "XXL"].map((size) => (
                  <button
                    key={size}
                    className="p-2 border rounded hover:bg-emerald-50 hover:border-emerald-300"
                  >
                    {size}
                  </button>
                ))}
              </div>
            </div>
          </div>

          {/* Product Grid */}
          <div className="lg:col-span-3">
            <div className="bg-white p-4 rounded-lg shadow-sm mb-6">
              <div className="flex justify-between items-center">
                <div className="flex items-center space-x-4">
                  <span className="text-gray-600">
                    Showing {products.length} of {totalItems} products
                  </span>
                </div>
                {/* <div className="flex items-center space-x-4">
                  <button className="flex items-center text-gray-600">
                    Sort by
                    <ChevronDown className="h-4 w-4 ml-1" />
                  </button>
                  <select className="border rounded p-1">
                    <option>24 per page</option>
                    <option>48 per page</option>
                    <option>96 per page</option>
                  </select>
                </div> */}
              </div>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
              {products.map((product) => (
                <a href={`/product/${product.slug}`}>
                  <div
                    key={product.id}
                    className="bg-white rounded-lg shadow overflow-hidden"
                  >
                    <div className="relative">
                      <img
                        src={`https://picsum.photos/500/600?${product.category.id}`}
                        alt={product.name}
                        className="w-full h-48 object-cover"
                      />
                      <div className="absolute top-2 left-2">
                        <span className="bg-white/90 text-xs px-2 py-1 rounded">MULTIPLE PORT</span>
                      </div>
                    </div>

                    <div className="p-3">
                      <h3 className="text-sm font-medium">
                        {product.name} {product.description}
                      </h3>

                      <div className="mt-2 flex items-center space-x-1">
                        <span className="text-red-600 text-lg font-bold">Rp{product.price}</span>
                        <span className="text-red-600 text-sm">-{product.discount}</span>
                      </div>

                      <div className="mt-2 flex items-center space-x-2 text-sm text-gray-600">
                        <div className="flex items-center">
                          <Star className="h-4 w-4 text-yellow-400 fill-yellow-400" />
                          <span className="ml-1">{product.rating}</span>
                        </div>
                        <span>|</span>
                        <span>{product.sales} Terjual</span>
                      </div>

                      <div className="mt-2 flex items-center text-xs text-gray-500">
                        <span className="mr-2">{product.delivery}</span>
                        <span>{product.location}</span>
                      </div>
                    </div>
                  </div>
                </a>
              ))}
            </div>

            {/* Pagination */}
            <div className="my-8 flex justify-center">
              <div className="flex space-x-2">
                <button
                  className="px-4 py-2 border rounded hover:bg-emerald-50"
                  disabled={currentPage === 1}
                  onClick={() => setCurrentPage((prev) => Math.max(prev - 1, 1))}
                >
                  Previous
                </button>

                {Array.from({ length: totalPages }, (_, index) => index + 1).map((page) => (
                  <button
                    key={page}
                    className={`w-10 h-10 rounded ${page === currentPage ? "bg-emerald-600 text-white" : "border hover:bg-emerald-50"}`}
                    onClick={() => setCurrentPage(page)}
                  >
                    {page}
                  </button>
                ))}

                <button
                  className="px-4 py-2 border rounded hover:bg-emerald-50"
                  disabled={currentPage === totalPages}
                  onClick={() => setCurrentPage((prev) => Math.min(prev + 1, totalPages))}
                >
                  Next
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
}
