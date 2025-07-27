import React from 'react';
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer, BarChart, Bar } from 'recharts';
import { Heart, Calendar, TrendingUp, Award, Bell, Activity, Users, ShoppingBag } from 'lucide-react';

const Dashboard = () => {
  const weightData = [
    { month: 'Jan', weight: 30 },
    { month: 'Feb', weight: 31 },
    { month: 'Mar', weight: 32 },
    { month: 'Apr', weight: 32 },
    { month: 'May', weight: 33 },
    { month: 'Jun', weight: 32 }
  ];

  const activityData = [
    { day: 'Mon', posts: 3, likes: 12 },
    { day: 'Tue', posts: 2, likes: 8 },
    { day: 'Wed', posts: 5, likes: 24 },
    { day: 'Thu', posts: 1, likes: 6 },
    { day: 'Fri', posts: 4, likes: 18 },
    { day: 'Sat', posts: 6, likes: 32 },
    { day: 'Sun', posts: 3, likes: 15 }
  ];

  const upcomingAppointments = [
    {
      id: 1,
      pet: 'Max',
      service: 'Vaccination',
      doctor: 'Dr. Sarah Johnson',
      date: 'March 15, 2024',
      time: '10:00 AM'
    },
    {
      id: 2,
      pet: 'Luna',
      service: 'Health Check',
      doctor: 'Dr. Michael Chen',
      date: 'March 20, 2024',
      time: '2:30 PM'
    }
  ];

  const recommendedDoctors = [
    {
      id: 1,
      name: 'Dr. Sarah Johnson',
      specialty: 'General Veterinarian',
      rating: 4.9,
      image: 'https://images.pexels.com/photos/5452201/pexels-photo-5452201.jpeg?auto=compress&cs=tinysrgb&w=400'
    },
    {
      id: 2,
      name: 'Dr. Michael Chen',
      specialty: 'Exotic Animal Specialist',
      rating: 4.8,
      image: 'https://images.pexels.com/photos/6749778/pexels-photo-6749778.jpeg?auto=compress&cs=tinysrgb&w=400'
    },
    {
      id: 3,
      name: 'Dr. Emily Rodriguez',
      specialty: 'Surgery Specialist',
      rating: 4.9,
      image: 'https://images.pexels.com/photos/6749816/pexels-photo-6749816.jpeg?auto=compress&cs=tinysrgb&w=400'
    }
  ];

  const recommendedProducts = [
    {
      id: 1,
      name: 'Premium Dog Food',
      price: '$45.99',
      image: 'https://images.pexels.com/photos/1254140/pexels-photo-1254140.jpeg?auto=compress&cs=tinysrgb&w=400',
      rating: 4.8
    },
    {
      id: 2,
      name: 'Interactive Cat Toy',
      price: '$19.99',
      image: 'https://images.pexels.com/photos/1404819/pexels-photo-1404819.jpeg?auto=compress&cs=tinysrgb&w=400',
      rating: 4.6
    },
    {
      id: 3,
      name: 'Comfort Pet Bed',
      price: '$89.99',
      image: 'https://images.pexels.com/photos/1108099/pexels-photo-1108099.jpeg?auto=compress&cs=tinysrgb&w=400',
      rating: 4.9
    }
  ];

  return (
    <div className="min-h-screen bg-gray-50 py-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="mb-8">
          <h1 className="text-3xl font-bold text-gray-800">Dashboard</h1>
          <p className="text-gray-600 mt-2">Welcome back! Here's what's happening with your pets.</p>
        </div>

        {/* Stats Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
          <div className="bg-white rounded-xl shadow-md p-6">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm text-gray-600">Total Pets</p>
                <p className="text-2xl font-bold text-gray-800">3</p>
                <p className="text-sm text-green-600">All healthy</p>
              </div>
              <div className="w-12 h-12 bg-teal-100 rounded-lg flex items-center justify-center">
                <Heart className="w-6 h-6 text-teal-600" />
              </div>
            </div>
          </div>

          <div className="bg-white rounded-xl shadow-md p-6">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm text-gray-600">Appointments</p>
                <p className="text-2xl font-bold text-gray-800">2</p>
                <p className="text-sm text-orange-600">Upcoming</p>
              </div>
              <div className="w-12 h-12 bg-orange-100 rounded-lg flex items-center justify-center">
                <Calendar className="w-6 h-6 text-orange-600" />
              </div>
            </div>
          </div>

          <div className="bg-white rounded-xl shadow-md p-6">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm text-gray-600">Community Posts</p>
                <p className="text-2xl font-bold text-gray-800">15</p>
                <p className="text-sm text-blue-600">This month</p>
              </div>
              <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center">
                <Users className="w-6 h-6 text-blue-600" />
              </div>
            </div>
          </div>

          <div className="bg-white rounded-xl shadow-md p-6">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm text-gray-600">Orders</p>
                <p className="text-2xl font-bold text-gray-800">$234</p>
                <p className="text-sm text-purple-600">This month</p>
              </div>
              <div className="w-12 h-12 bg-purple-100 rounded-lg flex items-center justify-center">
                <ShoppingBag className="w-6 h-6 text-purple-600" />
              </div>
            </div>
          </div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Left Column */}
          <div className="lg:col-span-2 space-y-6">
            {/* Health Summary */}
            <div className="bg-white rounded-xl shadow-md p-6">
              <div className="flex items-center justify-between mb-6">
                <h3 className="text-lg font-semibold">Health Summary</h3>
                <div className="flex items-center space-x-4">
                  <button className="px-3 py-1 bg-teal-100 text-teal-700 rounded-full text-sm">7d</button>
                  <button className="px-3 py-1 text-gray-600 rounded-full text-sm">30d</button>
                  <button className="px-3 py-1 text-gray-600 rounded-full text-sm">90d</button>
                </div>
              </div>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-6">
                <div className="bg-green-50 rounded-lg p-4">
                  <div className="flex items-center justify-between">
                    <div>
                      <p className="text-sm text-green-600">Current Weight</p>
                      <p className="text-xl font-bold text-green-800">32 kg</p>
                    </div>
                    <TrendingUp className="w-6 h-6 text-green-600" />
                  </div>
                </div>
                <div className="bg-blue-50 rounded-lg p-4">
                  <div className="flex items-center justify-between">
                    <div>
                      <p className="text-sm text-blue-600">Last Checkup</p>
                      <p className="text-xl font-bold text-blue-800">Feb 20</p>
                    </div>
                    <Calendar className="w-6 h-6 text-blue-600" />
                  </div>
                </div>
                <div className="bg-purple-50 rounded-lg p-4">
                  <div className="flex items-center justify-between">
                    <div>
                      <p className="text-sm text-purple-600">Health Score</p>
                      <p className="text-xl font-bold text-purple-800">95%</p>
                    </div>
                    <Award className="w-6 h-6 text-purple-600" />
                  </div>
                </div>
              </div>
              <div className="h-64">
                <ResponsiveContainer width="100%" height="100%">
                  <LineChart data={weightData}>
                    <CartesianGrid strokeDasharray="3 3" />
                    <XAxis dataKey="month" />
                    <YAxis />
                    <Tooltip />
                    <Line type="monotone" dataKey="weight" stroke="#2CB9B0" strokeWidth={2} />
                  </LineChart>
                </ResponsiveContainer>
              </div>
            </div>

            {/* Community Activity */}
            <div className="bg-white rounded-xl shadow-md p-6">
              <h3 className="text-lg font-semibold mb-6">Community Activity</h3>
              <div className="h-64">
                <ResponsiveContainer width="100%" height="100%">
                  <BarChart data={activityData}>
                    <CartesianGrid strokeDasharray="3 3" />
                    <XAxis dataKey="day" />
                    <YAxis />
                    <Tooltip />
                    <Bar dataKey="posts" fill="#2CB9B0" />
                    <Bar dataKey="likes" fill="#FFA827" />
                  </BarChart>
                </ResponsiveContainer>
              </div>
            </div>
          </div>

          {/* Right Column */}
          <div className="space-y-6">
            {/* Upcoming Appointments */}
            <div className="bg-white rounded-xl shadow-md p-6">
              <h3 className="text-lg font-semibold mb-4">Upcoming Appointments</h3>
              <div className="space-y-4">
                {upcomingAppointments.map((appointment) => (
                  <div key={appointment.id} className="border border-gray-200 rounded-lg p-4">
                    <div className="flex items-center justify-between mb-2">
                      <h4 className="font-semibold">{appointment.pet}</h4>
                      <span className="text-sm text-gray-500">{appointment.time}</span>
                    </div>
                    <p className="text-sm text-gray-600 mb-1">{appointment.service}</p>
                    <p className="text-sm text-gray-600">{appointment.doctor}</p>
                    <p className="text-sm font-medium text-teal-600 mt-2">{appointment.date}</p>
                  </div>
                ))}
              </div>
            </div>

            {/* Quick Actions */}
            <div className="bg-white rounded-xl shadow-md p-6">
              <h3 className="text-lg font-semibold mb-4">Quick Actions</h3>
              <div className="space-y-3">
                <button className="w-full bg-teal-600 text-white px-4 py-3 rounded-lg hover:bg-teal-700 transition-colors flex items-center justify-center space-x-2">
                  <Calendar className="w-5 h-5" />
                  <span>Book Appointment</span>
                </button>
                <button className="w-full bg-orange-600 text-white px-4 py-3 rounded-lg hover:bg-orange-700 transition-colors flex items-center justify-center space-x-2">
                  <Bell className="w-5 h-5" />
                  <span>Set Reminder</span>
                </button>
                <button className="w-full bg-purple-600 text-white px-4 py-3 rounded-lg hover:bg-purple-700 transition-colors flex items-center justify-center space-x-2">
                  <Activity className="w-5 h-5" />
                  <span>Log Activity</span>
                </button>
              </div>
            </div>

            {/* Recommended Doctors */}
            <div className="bg-white rounded-xl shadow-md p-6">
              <h3 className="text-lg font-semibold mb-4">Recommended Doctors</h3>
              <div className="space-y-4">
                {recommendedDoctors.map((doctor) => (
                  <div key={doctor.id} className="flex items-center space-x-3">
                    <img
                      src={doctor.image}
                      alt={doctor.name}
                      className="w-10 h-10 rounded-full object-cover"
                    />
                    <div className="flex-1">
                      <h4 className="font-semibold text-sm">{doctor.name}</h4>
                      <p className="text-xs text-gray-600">{doctor.specialty}</p>
                      <div className="flex items-center space-x-1">
                        <span className="text-yellow-400 text-sm">★</span>
                        <span className="text-xs text-gray-600">{doctor.rating}</span>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Recommended Products */}
            <div className="bg-white rounded-xl shadow-md p-6">
              <h3 className="text-lg font-semibold mb-4">Products For Your Pets</h3>
              <div className="space-y-4">
                {recommendedProducts.map((product) => (
                  <div key={product.id} className="flex items-center space-x-3">
                    <img
                      src={product.image}
                      alt={product.name}
                      className="w-12 h-12 rounded-lg object-cover"
                    />
                    <div className="flex-1">
                      <h4 className="font-semibold text-sm">{product.name}</h4>
                      <p className="text-sm text-teal-600 font-medium">{product.price}</p>
                      <div className="flex items-center space-x-1">
                        <span className="text-yellow-400 text-sm">★</span>
                        <span className="text-xs text-gray-600">{product.rating}</span>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;