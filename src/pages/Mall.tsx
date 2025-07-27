import React, { useState } from 'react';
import { Search, Filter, ShoppingCart, Star, Heart, ChevronDown } from 'lucide-react';

const Mall = () => {
  const [selectedCategory, setSelectedCategory] = useState('all');
  const [priceRange, setPriceRange] = useState([0, 200]);
  const [sortBy, setSortBy] = useState('featured');
  const [showFilters, setShowFilters] = useState(false);

  const categories = [
    { id: 'all', name: 'All Products', count: 156 },
    { id: 'food', name: 'Food & Treats', count: 45 },
    { id: 'toys', name: 'Toys & Entertainment', count: 32 },
    { id: 'accessories', name: 'Accessories', count: 28 },
    { id: 'health', name: 'Health & Supplements', count: 24 },
    { id: 'grooming', name: 'Grooming', count: 18 },
    { id: 'beds', name: 'Beds & Furniture', count: 9 }
  ];

  const products = [
    {
      id: 1,
      name: 'Premium Dry Dog Food',
      category: 'food',
      price: 45.99,
      originalPrice: 55.99,
      rating: 4.8,
      reviews: 324,
      image: 'https://images.pexels.com/photos/1254140/pexels-photo-1254140.jpeg?auto=compress&cs=tinysrgb&w=400',
      isLiked: false,
      badge: 'Best Seller'
    },
    {
      id: 2,
      name: 'Interactive Cat Toy Set',
      category: 'toys',
      price: 19.99,
      originalPrice: null,
      rating: 4.6,
      reviews: 189,
      image: 'https://images.pexels.com/photos/1404819/pexels-photo-1404819.jpeg?auto=compress&cs=tinysrgb&w=400',
      isLiked: true,
      badge: null
    },
    {
      id: 3,
      name: 'Orthopedic Pet Bed',
      category: 'beds',
      price: 89.99,
      originalPrice: 109.99,
      rating: 4.9,
      reviews: 256,
      image: 'https://images.pexels.com/photos/1108099/pexels-photo-1108099.jpeg?auto=compress&cs=tinysrgb&w=400',
      isLiked: false,
      badge: 'Premium'
    },
    {
      id: 4,
      name: 'Joint Health Supplements',
      category: 'health',
      price: 32.99,
      originalPrice: null,
      rating: 4.7,
      reviews: 145,
      image: 'https://images.pexels.com/photos/3380736/pexels-photo-3380736.jpeg?auto=compress&cs=tinysrgb&w=400',
      isLiked: false,
      badge: null
    },
    {
      id: 5,
      name: 'Luxury Grooming Kit',
      category: 'grooming',
      price: 75.99,
      originalPrice: 89.99,
      rating: 4.5,
      reviews: 98,
      image: 'https://images.pexels.com/photos/1108099/pexels-photo-1108099.jpeg?auto=compress&cs=tinysrgb&w=400',
      isLiked: true,
      badge: 'New'
    },
    {
      id: 6,
      name: 'Adjustable Dog Collar',
      category: 'accessories',
      price: 24.99,
      originalPrice: null,
      rating: 4.4,
      reviews: 67,
      image: 'https://images.pexels.com/photos/1254140/pexels-photo-1254140.jpeg?auto=compress&cs=tinysrgb&w=400',
      isLiked: false,
      badge: null
    },
    {
      id: 7,
      name: 'Cat Scratching Post',
      category: 'toys',
      price: 54.99,
      originalPrice: 69.99,
      rating: 4.6,
      reviews: 112,
      image: 'https://images.pexels.com/photos/1404819/pexels-photo-1404819.jpeg?auto=compress&cs=tinysrgb&w=400',
      isLiked: false,
      badge: 'Popular'
    },
    {
      id: 8,
      name: 'Grain-Free Cat Food',
      category: 'food',
      price: 38.99,
      originalPrice: null,
      rating: 4.7,
      reviews: 203,
      image: 'https://images.pexels.com/photos/1404819/pexels-photo-1404819.jpeg?auto=compress&cs=tinysrgb&w=400',
      isLiked: true,
      badge: null
    }
  ];

  const filteredProducts = products.filter(product => 
    selectedCategory === 'all' || product.category === selectedCategory
  );

  const ProductCard = ({ product }) => (
    <div className="bg-white rounded-xl shadow-md overflow-hidden hover:shadow-lg transition-shadow">
      <div className="relative aspect-square overflow-hidden">
        <img
          src={product.image}
          alt={product.name}
          className="w-full h-full object-cover hover:scale-105 transition-transform duration-300"
        />
        <button className="absolute top-3 right-3 p-2 bg-white rounded-full shadow-md hover:bg-gray-50">
          <Heart className={`w-5 h-5 ${product.isLiked ? 'text-red-500 fill-current' : 'text-gray-400'}`} />
        </button>
        {product.badge && (
          <div className="absolute top-3 left-3 bg-orange-500 text-white px-2 py-1 rounded-full text-xs font-semibold">
            {product.badge}
          </div>
        )}
      </div>
      <div className="p-4">
        <h3 className="font-semibold text-lg mb-2">{product.name}</h3>
        <div className="flex items-center mb-2">
          <div className="flex items-center space-x-1">
            <Star className="w-4 h-4 text-yellow-400 fill-current" />
            <span className="text-sm font-medium">{product.rating}</span>
            <span className="text-sm text-gray-500">({product.reviews})</span>
          </div>
        </div>
        <div className="flex items-center justify-between">
          <div className="flex items-center space-x-2">
            <span className="text-lg font-bold text-teal-600">${product.price}</span>
            {product.originalPrice && (
              <span className="text-sm text-gray-500 line-through">${product.originalPrice}</span>
            )}
          </div>
          <button className="bg-teal-600 text-white px-4 py-2 rounded-lg hover:bg-teal-700 transition-colors flex items-center space-x-1">
            <ShoppingCart className="w-4 h-4" />
            <span>Add</span>
          </button>
        </div>
      </div>
    </div>
  );

  return (
    <div className="min-h-screen bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {/* Header */}
        <div className="mb-8">
          <h1 className="text-3xl font-bold text-gray-800 mb-4">Pet Mall</h1>
          <div className="flex flex-col lg:flex-row gap-4 items-center">
            {/* Search Bar */}
            <div className="flex-1 relative">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 w-5 h-5 text-gray-400" />
              <input
                type="text"
                placeholder="Search for products..."
                className="w-full pl-10 pr-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-teal-500"
              />
            </div>
            
            {/* Sort Dropdown */}
            <div className="relative">
              <select
                value={sortBy}
                onChange={(e) => setSortBy(e.target.value)}
                className="appearance-none bg-white border border-gray-300 rounded-lg px-4 py-3 pr-8 focus:outline-none focus:ring-2 focus:ring-teal-500"
              >
                <option value="featured">Featured</option>
                <option value="price-low">Price: Low to High</option>
                <option value="price-high">Price: High to Low</option>
                <option value="rating">Highest Rated</option>
                <option value="newest">Newest</option>
              </select>
              <ChevronDown className="absolute right-2 top-1/2 transform -translate-y-1/2 w-5 h-5 text-gray-400" />
            </div>
            
            {/* Mobile Filter Button */}
            <button
              onClick={() => setShowFilters(!showFilters)}
              className="lg:hidden bg-teal-600 text-white px-4 py-3 rounded-lg hover:bg-teal-700 transition-colors flex items-center space-x-2"
            >
              <Filter className="w-5 h-5" />
              <span>Filters</span>
            </button>
          </div>
        </div>

        <div className="flex flex-col lg:flex-row gap-8">
          {/* Sidebar Filters */}
          <div className={`lg:w-64 ${showFilters ? 'block' : 'hidden lg:block'}`}>
            <div className="bg-white rounded-xl shadow-md p-6">
              <h3 className="text-lg font-semibold mb-4">Categories</h3>
              <div className="space-y-2">
                {categories.map((category) => (
                  <button
                    key={category.id}
                    onClick={() => setSelectedCategory(category.id)}
                    className={`w-full text-left px-3 py-2 rounded-lg transition-colors ${
                      selectedCategory === category.id
                        ? 'bg-teal-50 text-teal-700'
                        : 'text-gray-600 hover:bg-gray-50'
                    }`}
                  >
                    <div className="flex justify-between items-center">
                      <span>{category.name}</span>
                      <span className="text-sm text-gray-500">{category.count}</span>
                    </div>
                  </button>
                ))}
              </div>

              <div className="mt-8">
                <h3 className="text-lg font-semibold mb-4">Price Range</h3>
                <div className="space-y-4">
                  <div className="flex items-center justify-between">
                    <span className="text-sm text-gray-600">$0</span>
                    <span className="text-sm text-gray-600">$200+</span>
                  </div>
                  <input
                    type="range"
                    min="0"
                    max="200"
                    className="w-full h-2 bg-gray-200 rounded-lg appearance-none cursor-pointer"
                  />
                  <div className="flex items-center space-x-2">
                    <input
                      type="number"
                      placeholder="Min"
                      className="w-full px-3 py-2 border border-gray-300 rounded-lg text-sm"
                    />
                    <span className="text-gray-500">-</span>
                    <input
                      type="number"
                      placeholder="Max"
                      className="w-full px-3 py-2 border border-gray-300 rounded-lg text-sm"
                    />
                  </div>
                </div>
              </div>

              <div className="mt-8">
                <h3 className="text-lg font-semibold mb-4">Rating</h3>
                <div className="space-y-2">
                  {[5, 4, 3, 2, 1].map((rating) => (
                    <label key={rating} className="flex items-center space-x-2 cursor-pointer">
                      <input type="checkbox" className="text-teal-600" />
                      <div className="flex items-center space-x-1">
                        {Array.from({ length: rating }, (_, i) => (
                          <Star key={i} className="w-4 h-4 text-yellow-400 fill-current" />
                        ))}
                        <span className="text-sm text-gray-600">& up</span>
                      </div>
                    </label>
                  ))}
                </div>
              </div>
            </div>
          </div>

          {/* Product Grid */}
          <div className="flex-1">
            <div className="mb-6">
              <p className="text-gray-600">
                Showing {filteredProducts.length} of {products.length} products
              </p>
            </div>
            
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
              {filteredProducts.map((product) => (
                <ProductCard key={product.id} product={product} />
              ))}
            </div>

            {/* Load More Button */}
            <div className="text-center mt-12">
              <button className="bg-teal-600 text-white px-8 py-3 rounded-lg hover:bg-teal-700 transition-colors">
                Load More Products
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Mall;