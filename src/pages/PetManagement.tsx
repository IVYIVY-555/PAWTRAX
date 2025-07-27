import React, { useState } from 'react';
import { Plus, Dog, Cat, Heart, Calendar, Weight, Shield, TrendingUp, X } from 'lucide-react';

const PetManagement = () => {
  const [showAddPet, setShowAddPet] = useState(false);
  const [selectedPet, setSelectedPet] = useState(null);

  const pets = [
    {
      id: 1,
      name: 'Max',
      type: 'Golden Retriever',
      age: '3 years',
      weight: '32 kg',
      image: 'https://images.pexels.com/photos/1108099/pexels-photo-1108099.jpeg?auto=compress&cs=tinysrgb&w=400',
      lastVaccination: '2024-01-15',
      lastCheckup: '2024-02-20',
      healthStatus: 'Excellent'
    },
    {
      id: 2,
      name: 'Luna',
      type: 'Persian Cat',
      age: '2 years',
      weight: '4.5 kg',
      image: 'https://images.pexels.com/photos/1404819/pexels-photo-1404819.jpeg?auto=compress&cs=tinysrgb&w=400',
      lastVaccination: '2024-01-10',
      lastCheckup: '2024-02-25',
      healthStatus: 'Good'
    },
    {
      id: 3,
      name: 'Charlie',
      type: 'Beagle',
      age: '1 year',
      weight: '15 kg',
      image: 'https://images.pexels.com/photos/1254140/pexels-photo-1254140.jpeg?auto=compress&cs=tinysrgb&w=400',
      lastVaccination: '2024-02-01',
      lastCheckup: '2024-03-01',
      healthStatus: 'Excellent'
    }
  ];

  const weightData = [
    { month: 'Jan', weight: 30 },
    { month: 'Feb', weight: 31 },
    { month: 'Mar', weight: 32 },
    { month: 'Apr', weight: 32 },
    { month: 'May', weight: 33 },
    { month: 'Jun', weight: 32 }
  ];

  const PetCard = ({ pet }) => (
    <div className="bg-white rounded-xl shadow-md overflow-hidden hover:shadow-lg transition-shadow">
      <div className="aspect-square overflow-hidden">
        <img
          src={pet.image}
          alt={pet.name}
          className="w-full h-full object-cover"
        />
      </div>
      <div className="p-6">
        <div className="flex items-center justify-between mb-2">
          <h3 className="text-xl font-semibold text-gray-800">{pet.name}</h3>
          <div className={`px-2 py-1 rounded-full text-xs font-medium ${
            pet.healthStatus === 'Excellent' ? 'bg-green-100 text-green-800' :
            pet.healthStatus === 'Good' ? 'bg-yellow-100 text-yellow-800' :
            'bg-red-100 text-red-800'
          }`}>
            {pet.healthStatus}
          </div>
        </div>
        <p className="text-gray-600 mb-1">{pet.type}</p>
        <p className="text-gray-600 mb-4">{pet.age} • {pet.weight}</p>
        <div className="space-y-2 mb-4">
          <div className="flex items-center text-sm text-gray-600">
            <Shield className="w-4 h-4 mr-2" />
            Last vaccination: {pet.lastVaccination}
          </div>
          <div className="flex items-center text-sm text-gray-600">
            <Calendar className="w-4 h-4 mr-2" />
            Last checkup: {pet.lastCheckup}
          </div>
        </div>
        <button
          onClick={() => setSelectedPet(pet)}
          className="w-full bg-teal-600 text-white py-2 rounded-lg hover:bg-teal-700 transition-colors"
        >
          View Details
        </button>
      </div>
    </div>
  );

  const AddPetModal = () => (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center p-4 z-50">
      <div className="bg-white rounded-xl max-w-md w-full p-6">
        <div className="flex justify-between items-center mb-6">
          <h3 className="text-xl font-semibold">Add New Pet</h3>
          <button
            onClick={() => setShowAddPet(false)}
            className="text-gray-500 hover:text-gray-700"
          >
            <X className="w-6 h-6" />
          </button>
        </div>
        <form className="space-y-4">
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">Pet Name</label>
            <input
              type="text"
              className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-teal-500"
              placeholder="Enter pet name"
            />
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">Pet Type</label>
            <select className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-teal-500">
              <option value="">Select pet type</option>
              <option value="dog">Dog</option>
              <option value="cat">Cat</option>
              <option value="bird">Bird</option>
              <option value="rabbit">Rabbit</option>
              <option value="other">Other</option>
            </select>
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">Breed</label>
            <input
              type="text"
              className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-teal-500"
              placeholder="Enter breed"
            />
          </div>
          <div className="grid grid-cols-2 gap-4">
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">Age</label>
              <input
                type="text"
                className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-teal-500"
                placeholder="e.g., 2 years"
              />
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">Weight</label>
              <input
                type="text"
                className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-teal-500"
                placeholder="e.g., 25 kg"
              />
            </div>
          </div>
          <div className="flex space-x-3 pt-4">
            <button
              type="button"
              onClick={() => setShowAddPet(false)}
              className="flex-1 px-4 py-2 border border-gray-300 text-gray-700 rounded-lg hover:bg-gray-50 transition-colors"
            >
              Cancel
            </button>
            <button
              type="submit"
              className="flex-1 px-4 py-2 bg-teal-600 text-white rounded-lg hover:bg-teal-700 transition-colors"
            >
              Add Pet
            </button>
          </div>
        </form>
      </div>
    </div>
  );

  const PetDetailModal = ({ pet }) => (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center p-4 z-50">
      <div className="bg-white rounded-xl max-w-4xl w-full max-h-[90vh] overflow-y-auto">
        <div className="p-6">
          <div className="flex justify-between items-center mb-6">
            <h3 className="text-2xl font-semibold">{pet.name}'s Profile</h3>
            <button
              onClick={() => setSelectedPet(null)}
              className="text-gray-500 hover:text-gray-700"
            >
              <X className="w-6 h-6" />
            </button>
          </div>
          
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
            {/* Pet Photo and Basic Info */}
            <div className="lg:col-span-1">
              <div className="aspect-square rounded-xl overflow-hidden mb-4">
                <img
                  src={pet.image}
                  alt={pet.name}
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="bg-gray-50 rounded-lg p-4">
                <h4 className="font-semibold mb-3">Basic Information</h4>
                <div className="space-y-2">
                  <div className="flex justify-between">
                    <span className="text-gray-600">Type:</span>
                    <span className="font-medium">{pet.type}</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-gray-600">Age:</span>
                    <span className="font-medium">{pet.age}</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-gray-600">Weight:</span>
                    <span className="font-medium">{pet.weight}</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-gray-600">Health Status:</span>
                    <span className={`font-medium ${
                      pet.healthStatus === 'Excellent' ? 'text-green-600' :
                      pet.healthStatus === 'Good' ? 'text-yellow-600' :
                      'text-red-600'
                    }`}>
                      {pet.healthStatus}
                    </span>
                  </div>
                </div>
              </div>
            </div>

            {/* Tabbed Content */}
            <div className="lg:col-span-2">
              <div className="border-b border-gray-200 mb-6">
                <nav className="flex space-x-8">
                  <button className="py-2 px-1 border-b-2 border-teal-500 text-teal-600 font-medium">
                    Health Records
                  </button>
                  <button className="py-2 px-1 text-gray-500 hover:text-gray-700">
                    Vaccinations
                  </button>
                  <button className="py-2 px-1 text-gray-500 hover:text-gray-700">
                    Weight History
                  </button>
                </nav>
              </div>

              {/* Health Records */}
              <div className="space-y-4">
                <div className="bg-white border border-gray-200 rounded-lg p-4">
                  <div className="flex items-center justify-between mb-2">
                    <h5 className="font-semibold">Last Checkup</h5>
                    <span className="text-sm text-gray-500">{pet.lastCheckup}</span>
                  </div>
                  <p className="text-gray-600 mb-2">Regular health examination completed</p>
                  <div className="flex items-center text-sm text-green-600">
                    <Heart className="w-4 h-4 mr-1" />
                    All vitals normal
                  </div>
                </div>

                <div className="bg-white border border-gray-200 rounded-lg p-4">
                  <div className="flex items-center justify-between mb-2">
                    <h5 className="font-semibold">Vaccination Status</h5>
                    <span className="text-sm text-gray-500">{pet.lastVaccination}</span>
                  </div>
                  <p className="text-gray-600 mb-2">Annual vaccination completed</p>
                  <div className="flex items-center text-sm text-green-600">
                    <Shield className="w-4 h-4 mr-1" />
                    Up to date
                  </div>
                </div>

                <div className="bg-white border border-gray-200 rounded-lg p-4">
                  <div className="flex items-center justify-between mb-2">
                    <h5 className="font-semibold">Weight Monitoring</h5>
                    <span className="text-sm text-gray-500">Current: {pet.weight}</span>
                  </div>
                  <p className="text-gray-600 mb-2">Weight tracking over the past 6 months</p>
                  <div className="flex items-center text-sm text-green-600">
                    <TrendingUp className="w-4 h-4 mr-1" />
                    Healthy weight range
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );

  return (
    <div className="min-h-screen bg-gray-50 py-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="flex justify-between items-center mb-8">
          <h1 className="text-3xl font-bold text-gray-800">My Pets</h1>
          <button
            onClick={() => setShowAddPet(true)}
            className="bg-teal-600 text-white px-6 py-3 rounded-lg hover:bg-teal-700 transition-colors flex items-center space-x-2"
          >
            <Plus className="w-5 h-5" />
            <span>Add New Pet</span>
          </button>
        </div>

        {/* Pet Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {pets.map((pet) => (
            <PetCard key={pet.id} pet={pet} />
          ))}
        </div>

        {/* Stats Section */}
        <div className="mt-12 grid grid-cols-1 md:grid-cols-3 gap-6">
          <div className="bg-white rounded-xl shadow-md p-6">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm text-gray-600">Total Pets</p>
                <p className="text-2xl font-bold text-gray-800">{pets.length}</p>
              </div>
              <div className="w-12 h-12 bg-teal-100 rounded-lg flex items-center justify-center">
                <Heart className="w-6 h-6 text-teal-600" />
              </div>
            </div>
          </div>
          
          <div className="bg-white rounded-xl shadow-md p-6">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm text-gray-600">Upcoming Appointments</p>
                <p className="text-2xl font-bold text-gray-800">2</p>
              </div>
              <div className="w-12 h-12 bg-orange-100 rounded-lg flex items-center justify-center">
                <Calendar className="w-6 h-6 text-orange-600" />
              </div>
            </div>
          </div>
          
          <div className="bg-white rounded-xl shadow-md p-6">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm text-gray-600">Health Status</p>
                <p className="text-2xl font-bold text-green-600">Excellent</p>
              </div>
              <div className="w-12 h-12 bg-green-100 rounded-lg flex items-center justify-center">
                <Shield className="w-6 h-6 text-green-600" />
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Modals */}
      {showAddPet && <AddPetModal />}
      {selectedPet && <PetDetailModal pet={selectedPet} />}
    </div>
  );
};

export default PetManagement;