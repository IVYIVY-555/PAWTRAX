import React, { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Heart, Menu, X, User, ShoppingCart, ChevronDown } from 'lucide-react';

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [activeDropdown, setActiveDropdown] = useState(null);
  const location = useLocation();

  const navItems = [
    { path: '/', label: 'Home' },
    {
      label: 'Pet Care',
      dropdown: [
        { path: '/pets', label: 'My Pets', description: 'Manage your pet profiles' },
        { path: '/appointments', label: 'Book Appointment', description: 'Schedule vet visits' },
        { path: '/dashboard', label: 'Health Dashboard', description: 'Track pet health' },
        { path: '/emergency', label: 'Emergency Care', description: '24/7 urgent care' }
      ]
    },
    {
      label: 'Services',
      dropdown: [
        { path: '/services/checkup', label: 'Health Check-ups', description: 'Regular examinations' },
        { path: '/services/vaccination', label: 'Vaccinations', description: 'Immunization services' },
        { path: '/services/grooming', label: 'Grooming', description: 'Professional pet grooming' },
        { path: '/services/surgery', label: 'Surgery', description: 'Surgical procedures' },
        { path: '/services/dental', label: 'Dental Care', description: 'Oral health services' }
      ]
    },
    {
      label: 'Shop',
      dropdown: [
        { path: '/mall', label: 'Pet Mall', description: 'All pet products' },
        { path: '/mall?category=food', label: 'Food & Treats', description: 'Nutrition essentials' },
        { path: '/mall?category=toys', label: 'Toys & Games', description: 'Entertainment items' },
        { path: '/mall?category=accessories', label: 'Accessories', description: 'Collars, leashes & more' },
        { path: '/mall?category=health', label: 'Health Products', description: 'Supplements & medicine' }
      ]
    },
    { path: '/community', label: 'Community' },
    {
      label: 'Resources',
      dropdown: [
        { path: '/resources/guides', label: 'Pet Care Guides', description: 'Expert advice & tips' },
        { path: '/resources/nutrition', label: 'Nutrition Guide', description: 'Feeding recommendations' },
        { path: '/resources/training', label: 'Training Tips', description: 'Behavior & training' },
        { path: '/resources/faq', label: 'FAQ', description: 'Common questions' },
        { path: '/resources/blog', label: 'Pet Blog', description: 'Latest articles' }
      ]
    }
  ];

  const isActive = (path: string) => location.pathname === path;

  const handleDropdownToggle = (index) => {
    setActiveDropdown(activeDropdown === index ? null : index);
  };

  const closeDropdowns = () => {
    setActiveDropdown(null);
  };

  return (
    <nav className="fixed top-0 left-0 right-0 bg-white shadow-lg z-50" onMouseLeave={closeDropdowns}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Logo */}
          <Link to="/" className="flex items-center space-x-2">
            <div className="w-10 h-10 bg-gradient-to-r from-teal-400 to-teal-600 rounded-full flex items-center justify-center">
              <Heart className="w-6 h-6 text-white" />
            </div>
            <span className="text-xl font-bold text-gray-800">PetCare</span>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            {navItems.map((item, index) => (
              <div key={index} className="relative">
                {item.dropdown ? (
                  <div
                    className="relative"
                    onMouseEnter={() => setActiveDropdown(index)}
                  >
                    <button
                      className="flex items-center space-x-1 px-3 py-2 text-sm font-medium text-gray-700 hover:text-teal-600 transition-colors duration-200"
                    >
                      <span>{item.label}</span>
                      <ChevronDown className={`w-4 h-4 transition-transform duration-200 ${
                        activeDropdown === index ? 'rotate-180' : ''
                      }`} />
                    </button>
                    
                    {/* Dropdown Menu */}
                    {activeDropdown === index && (
                      <div className="absolute top-full left-0 mt-1 w-80 bg-white rounded-lg shadow-xl border border-gray-100 py-2 z-50">
                        {item.dropdown.map((dropdownItem, dropdownIndex) => (
                          <Link
                            key={dropdownIndex}
                            to={dropdownItem.path}
                            onClick={closeDropdowns}
                            className="block px-4 py-3 hover:bg-gray-50 transition-colors group"
                          >
                            <div className="flex items-start space-x-3">
                              <div className="flex-1">
                                <h4 className="text-sm font-semibold text-gray-800 group-hover:text-teal-600">
                                  {dropdownItem.label}
                                </h4>
                                <p className="text-xs text-gray-500 mt-1">
                                  {dropdownItem.description}
                                </p>
                              </div>
                            </div>
                          </Link>
                        ))}
                      </div>
                    )}
                  </div>
                ) : (
                  <Link
                    to={item.path}
                    className={`px-3 py-2 text-sm font-medium transition-colors duration-200 ${
                      isActive(item.path)
                        ? 'text-teal-600 border-b-2 border-teal-600'
                        : 'text-gray-700 hover:text-teal-600'
                    }`}
                  >
                    {item.label}
                  </Link>
                )}
              </div>
            ))}
          </div>

          {/* Desktop Actions */}
          <div className="hidden md:flex items-center space-x-4">
            <button className="relative p-2 text-gray-700 hover:text-teal-600 transition-colors">
              <ShoppingCart className="w-6 h-6" />
              <span className="absolute -top-1 -right-1 bg-orange-500 text-white text-xs rounded-full w-5 h-5 flex items-center justify-center">
                3
              </span>
            </button>
            <button className="bg-teal-600 text-white px-4 py-2 rounded-full hover:bg-teal-700 transition-colors flex items-center space-x-2">
              <User className="w-4 h-4" />
              <span>Login</span>
            </button>
          </div>

          {/* Mobile Menu Button */}
          <div className="md:hidden">
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="text-gray-700 hover:text-teal-600 p-2"
            >
              {isMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      {isMenuOpen && (
        <div className="md:hidden bg-white border-t">
          <div className="px-2 pt-2 pb-3 space-y-1">
            {navItems.map((item, index) => (
              <div key={index}>
                {item.dropdown ? (
                  <div>
                    <button
                      onClick={() => handleDropdownToggle(index)}
                      className="w-full flex items-center justify-between px-3 py-2 text-base font-medium text-gray-700 hover:text-teal-600 hover:bg-gray-50 rounded-md transition-colors"
                    >
                      <span>{item.label}</span>
                      <ChevronDown className={`w-4 h-4 transition-transform duration-200 ${
                        activeDropdown === index ? 'rotate-180' : ''
                      }`} />
                    </button>
                    {activeDropdown === index && (
                      <div className="ml-4 mt-1 space-y-1">
                        {item.dropdown.map((dropdownItem, dropdownIndex) => (
                          <Link
                            key={dropdownIndex}
                            to={dropdownItem.path}
                            onClick={() => setIsMenuOpen(false)}
                            className="block px-3 py-2 text-sm text-gray-600 hover:text-teal-600 hover:bg-gray-50 rounded-md transition-colors"
                          >
                            {dropdownItem.label}
                          </Link>
                        ))}
                      </div>
                    )}
                  </div>
                ) : (
                  <Link
                    to={item.path}
                    onClick={() => setIsMenuOpen(false)}
                    className={`block px-3 py-2 text-base font-medium rounded-md transition-colors ${
                      isActive(item.path)
                        ? 'text-teal-600 bg-teal-50'
                        : 'text-gray-700 hover:text-teal-600 hover:bg-gray-50'
                    }`}
                  >
                    {item.label}
                  </Link>
                )}
              </div>
            ))}
            <div className="pt-4 border-t">
              <button className="w-full bg-teal-600 text-white px-4 py-2 rounded-full hover:bg-teal-700 transition-colors">
                Login / Register
              </button>
            </div>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;