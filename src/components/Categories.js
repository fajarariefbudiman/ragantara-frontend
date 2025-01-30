import React, { useRef } from "react";
import { ChevronRight, ChevronLeft } from "lucide-react";
import { useCategory } from "context/CategoryContext";

const Categories = () => {
  const { categories } = useCategory();
  const scrollRef = useRef(null);

  const scroll = (direction) => {
    const scrollAmount = 300;
    scrollRef.current?.scrollBy({
      left: direction === "left" ? -scrollAmount : scrollAmount,
      behavior: "smooth",
    });
  };

  return (
    <div className="bg-white py-8">
      <div className="max-w-7xl mx-auto px-4 relative">
        <div className="text-center mb-6">
          <h2 className="text-2xl font-serif text-gray-900">Explore by Category</h2>
          <p className="text-sm text-gray-600">Temukan gaun impian Anda berdasarkan kategori acara spesial</p>
        </div>

        <div className="relative">
          <button
            onClick={() => scroll("left")}
            className="absolute -left-2 top-1/2 -translate-y-1/2 z-10 bg-white/80 p-2 rounded-full shadow-md hover:bg-white"
          >
            <ChevronLeft className="h-5 w-5" />
          </button>

          <div
            ref={scrollRef}
            className="flex overflow-x-auto gap-3 py-4 scrollbar-hide snap-x snap-mandatory"
            style={{ scrollbarWidth: "none", msOverflowStyle: "none" }}
          >
            {categories.map((category) => (
              <a key={category.slug} href={`/category/${category.slug}`}>
                <div
                  key={category.id}
                  className="flex-none w-[180px] aspect-square snap-start"
                >
                  <div className="relative h-full rounded-lg overflow-hidden group">
                    <img
                      src={category.image || `https://picsum.photos/900/500?${category.name}`}
                      alt={category.name}
                      className="w-full h-full object-cover transform group-hover:scale-105 transition-transform duration-500"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/30 to-transparent flex items-end p-3">
                      <div>
                        <h3 className="text-sm font-medium text-white">{category.name}</h3>
                        <span className="text-xs text-white/90">{category.slug} Items</span>
                      </div>
                    </div>
                  </div>
                </div>
              </a>
            ))}
          </div>

          <button
            onClick={() => scroll("right")}
            className="absolute -right-2 top-1/2 -translate-y-1/2 z-10 bg-white/80 p-2 rounded-full shadow-md hover:bg-white"
          >
            <ChevronRight className="h-5 w-5" />
          </button>
        </div>
      </div>
    </div>
  );
};

export default Categories;
