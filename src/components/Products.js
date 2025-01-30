import React from "react";
import { Star, Heart, ChevronRight } from "lucide-react";
import { useProduct } from "context/ProductContext";

const Products = () => {
  const { products } = useProduct();
  const productLimited = products.slice(0, 4);

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 sm:py-16">
      <div className="text-center mb-8 sm:mb-12">
        <h2 className="text-2xl sm:text-3xl font-serif text-gray-900 mb-2 sm:mb-4">Best Selling Product</h2>
        <p className="text-sm sm:text-base text-gray-600 max-w-2xl mx-auto px-4">Peralatan Olahraga Terpopuler</p>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6 lg:gap-8 mb-8 sm:mb-12">
        {productLimited.map((product) => (
          <a href={`/product/${product.slug}`}>
            <div
              key={product.id}
              className="bg-white rounded-xl shadow-sm overflow-hidden group hover:shadow-lg transition-all"
            >
              <div className="relative">
                <img
                  src={product.image || `https://picsum.photos/900/500?${product.category.name}`}
                  alt={product.name}
                  className="w-full h-[300px] sm:h-[350px] lg:h-[400px] object-cover"
                />
                <span className="absolute top-4 left-4 bg-emerald-600 text-white px-3 py-1 rounded-full text-xs sm:text-sm">{product.label}</span>
                <button
                  className="absolute top-4 right-4 p-2 bg-white rounded-full shadow hover:bg-emerald-50 transition-colors"
                  aria-label="Add to wishlist"
                >
                  <Heart className="h-4 w-4 sm:h-5 sm:w-5 text-emerald-600" />
                </button>
              </div>

              <div className="p-3 sm:p-4">
                <h3 className="text-base sm:text-lg font-medium text-gray-900 line-clamp-1">{product.name}</h3>
                <p className="text-xs sm:text-sm text-gray-600 mt-1 line-clamp-2">{product.description}</p>
                <div className="mt-2 flex items-center">
                  <Star className="h-4 w-4 sm:h-5 sm:w-5 text-yellow-400 fill-current" />
                  <span className="ml-1 text-xs sm:text-sm text-gray-600">
                    {product.rating} ({product.reviews} reviews)
                  </span>
                </div>
                <div className="mt-3 sm:mt-4 flex items-center justify-between">
                  <span className="text-base sm:text-lg font-semibold text-emerald-600">{product.price}</span>
                  <button className="px-3 sm:px-4 py-1.5 sm:py-2 bg-emerald-600 text-white rounded-full hover:bg-emerald-700 transition-colors text-xs sm:text-sm">Add to Cart</button>
                </div>
              </div>
            </div>
          </a>
        ))}
      </div>

      <div className="text-center">
        <a
          href="/products"
          className="inline-flex items-center justify-center space-x-2 px-6 py-3 border-2 border-emerald-600 text-emerald-600 rounded-full hover:bg-emerald-50 transition-colors group"
        >
          <span className="text-sm sm:text-base font-medium">More Products</span>
          <ChevronRight className="h-4 w-4 sm:h-5 sm:w-5 transform group-hover:translate-x-1 transition-transform" />
        </a>
      </div>
    </div>
  );
};

export default Products;
