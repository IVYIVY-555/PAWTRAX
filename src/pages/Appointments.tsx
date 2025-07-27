import React, { useState } from 'react';
import { Calendar, Clock, User, MapPin, CheckCircle, ArrowRight, ArrowLeft } from 'lucide-react';

const Appointments = () => {
  const [currentStep, setCurrentStep] = useState(1);
  const [selectedPet, setSelectedPet] = useState(null);
  const [selectedService, setSelectedService] = useState(null);
  const [selectedDoctor, setSelectedDoctor] = useState(null);
  const [selectedDate, setSelectedDate] = useState(null);
  const [selectedTime, setSelectedTime] = useState(null);

  const pets = [
    { id: 1, name: 'Max', type: 'Golden Retriever', image: 'https://images.pexels.com/photos/1108099/pexels-photo-1108099.jpeg?auto=compress&cs=tinysrgb&w=400' },
    { id: 2, name: 'Luna', type: 'Persian Cat', image: 'https://images.pexels.com/photos/1404819/pexels-photo-1404819.jpeg?auto=compress&cs=tinysrgb&w=400' },
    { id: 3, name: 'Charlie', type: 'Beagle', image: 'https://images.pexels.com/photos/1254140/pexels-photo-1254140.jpeg?auto=compress&cs=tinysrgb&w=400' }
  ];

  const services = [
    {
      id: 1,
      name: 'Vaccination',
      description: 'Annual vaccination package',
      duration: '30 minutes',
      price: '$120',
      options: ['Basic Package', 'Premium Package', 'Senior Pet Package']
    },
    {
      id: 2,
      name: 'Health Check',
      description: 'Comprehensive health examination',
      duration: '45 minutes',
      price: '$80',
      options: ['Basic Check', 'Premium Check', 'Senior Check']
    },
    {
      id: 3,
      name: 'Deworming',
      description: 'Parasite prevention treatment',
      duration: '20 minutes',
      price: '$60',
      options: ['Standard Treatment', 'Premium Treatment']
    },
    {
      id: 4,
      name: 'Grooming',
      description: 'Professional pet grooming',
      duration: '90 minutes',
      price: '$150',
      options: ['Basic Grooming', 'Deluxe Grooming', 'Full Spa']
    }
  ];

  const doctors = [
    {
      id: 1,
      name: 'Dr. Sarah Johnson',
      specialty: 'General Veterinarian',
      rating: 4.9,
      experience: '8 years',
      image: 'https://images.pexels.com/photos/5452201/pexels-photo-5452201.jpeg?auto=compress&cs=tinysrgb&w=400',
      available: true
    },
    {
      id: 2,
      name: 'Dr. Michael Chen',
      specialty: 'Exotic Animal Specialist',
      rating: 4.8,
      experience: '12 years',
      image: 'https://images.pexels.com/photos/6749778/pexels-photo-6749778.jpeg?auto=compress&cs=tinysrgb&w=400',
      available: true
    },
    {
      id: 3,
      name: 'Dr. Emily Rodriguez',
      specialty: 'Surgery Specialist',
      rating: 4.9,
      experience: '10 years',
      image: 'https://images.pexels.com/photos/6749816/pexels-photo-6749816.jpeg?auto=compress&cs=tinysrgb&w=400',
      available: false
    }
  ];

  const timeSlots = [
    '09:00 AM', '09:30 AM', '10:00 AM', '10:30 AM', '11:00 AM', '11:30 AM',
    '02:00 PM', '02:30 PM', '03:00 PM', '03:30 PM', '04:00 PM', '04:30 PM'
  ];

  const steps = [
    { number: 1, title: 'Select Pet', icon: User },
    { number: 2, title: 'Select Service', icon: CheckCircle },
    { number: 3, title: 'Choose Doctor', icon: User },
    { number: 4, title: 'Select Time', icon: Calendar },
    { number: 5, title: 'Confirm', icon: CheckCircle }
  ];

  const nextStep = () => {
    if (currentStep < 5) setCurrentStep(currentStep + 1);
  };

  const prevStep = () => {
    if (currentStep > 1) setCurrentStep(currentStep - 1);
  };

  const canProceed = () => {
    switch (currentStep) {
      case 1: return selectedPet !== null;
      case 2: return selectedService !== null;
      case 3: return selectedDoctor !== null;
      case 4: return selectedDate !== null && selectedTime !== null;
      default: return true;
    }
  };

  const StepIndicator = () => (
    <div className="flex items-center justify-center mb-8">
      {steps.map((step, index) => (
        <div key={step.number} className="flex items-center">
          <div className={`flex items-center justify-center w-10 h-10 rounded-full ${
            currentStep >= step.number ? 'bg-teal-600 text-white' : 'bg-gray-200 text-gray-500'
          }`}>
            {currentStep > step.number ? (
              <CheckCircle className="w-5 h-5" />
            ) : (
              <step.icon className="w-5 h-5" />
            )}
          </div>
          {index < steps.length - 1 && (
            <div className={`w-12 h-1 mx-2 ${
              currentStep > step.number ? 'bg-teal-600' : 'bg-gray-200'
            }`} />
          )}
        </div>
      ))}
    </div>
  );

  const SelectPetStep = () => (
    <div>
      <h2 className="text-2xl font-bold text-center mb-6">Select Your Pet</h2>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
        {pets.map((pet) => (
          <div
            key={pet.id}
            onClick={() => setSelectedPet(pet)}
            className={`p-4 border-2 rounded-lg cursor-pointer transition-all ${
              selectedPet?.id === pet.id
                ? 'border-teal-500 bg-teal-50'
                : 'border-gray-200 hover:border-gray-300'
            }`}
          >
            <div className="aspect-square rounded-lg overflow-hidden mb-3">
              <img
                src={pet.image}
                alt={pet.name}
                className="w-full h-full object-cover"
              />
            </div>
            <h3 className="font-semibold text-lg">{pet.name}</h3>
            <p className="text-gray-600">{pet.type}</p>
          </div>
        ))}
      </div>
    </div>
  );

  const SelectServiceStep = () => (
    <div>
      <h2 className="text-2xl font-bold text-center mb-6">Select Service</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        {services.map((service) => (
          <div
            key={service.id}
            onClick={() => setSelectedService(service)}
            className={`p-6 border-2 rounded-lg cursor-pointer transition-all ${
              selectedService?.id === service.id
                ? 'border-teal-500 bg-teal-50'
                : 'border-gray-200 hover:border-gray-300'
            }`}
          >
            <h3 className="font-semibold text-lg mb-2">{service.name}</h3>
            <p className="text-gray-600 mb-3">{service.description}</p>
            <div className="flex justify-between items-center">
              <div className="flex items-center space-x-4">
                <span className="flex items-center text-sm text-gray-500">
                  <Clock className="w-4 h-4 mr-1" />
                  {service.duration}
                </span>
                <span className="text-lg font-bold text-teal-600">{service.price}</span>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );

  const SelectDoctorStep = () => (
    <div>
      <h2 className="text-2xl font-bold text-center mb-6">Choose Doctor</h2>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
        {doctors.map((doctor) => (
          <div
            key={doctor.id}
            onClick={() => doctor.available && setSelectedDoctor(doctor)}
            className={`p-6 border-2 rounded-lg transition-all ${
              !doctor.available
                ? 'border-gray-200 opacity-50 cursor-not-allowed'
                : selectedDoctor?.id === doctor.id
                ? 'border-teal-500 bg-teal-50 cursor-pointer'
                : 'border-gray-200 hover:border-gray-300 cursor-pointer'
            }`}
          >
            <div className="aspect-square rounded-lg overflow-hidden mb-4">
              <img
                src={doctor.image}
                alt={doctor.name}
                className="w-full h-full object-cover"
              />
            </div>
            <h3 className="font-semibold text-lg">{doctor.name}</h3>
            <p className="text-gray-600 mb-2">{doctor.specialty}</p>
            <div className="flex items-center justify-between">
              <span className="text-sm text-gray-500">{doctor.experience}</span>
              <div className="flex items-center">
                <span className="text-yellow-500">★</span>
                <span className="text-sm ml-1">{doctor.rating}</span>
              </div>
            </div>
            {!doctor.available && (
              <p className="text-red-500 text-sm mt-2">Not available</p>
            )}
          </div>
        ))}
      </div>
    </div>
  );

  const SelectTimeStep = () => (
    <div>
      <h2 className="text-2xl font-bold text-center mb-6">Select Date & Time</h2>
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
        {/* Calendar */}
        <div>
          <h3 className="text-lg font-semibold mb-4">Select Date</h3>
          <div className="bg-white rounded-lg border p-4">
            <div className="grid grid-cols-7 gap-1 text-center">
              {['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'].map((day) => (
                <div key={day} className="p-2 text-sm font-medium text-gray-600">
                  {day}
                </div>
              ))}
              {Array.from({ length: 31 }, (_, i) => i + 1).map((date) => (
                <div
                  key={date}
                  onClick={() => setSelectedDate(date)}
                  className={`p-2 text-sm cursor-pointer rounded ${
                    selectedDate === date
                      ? 'bg-teal-600 text-white'
                      : 'hover:bg-gray-100'
                  }`}
                >
                  {date}
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Time Slots */}
        <div>
          <h3 className="text-lg font-semibold mb-4">Select Time</h3>
          <div className="grid grid-cols-3 gap-2">
            {timeSlots.map((time) => (
              <button
                key={time}
                onClick={() => setSelectedTime(time)}
                className={`p-3 text-sm rounded-lg border transition-all ${
                  selectedTime === time
                    ? 'bg-teal-600 text-white border-teal-600'
                    : 'bg-white border-gray-200 hover:border-teal-300'
                }`}
              >
                {time}
              </button>
            ))}
          </div>
        </div>
      </div>
    </div>
  );

  const ConfirmStep = () => (
    <div>
      <h2 className="text-2xl font-bold text-center mb-6">Confirm Appointment</h2>
      <div className="max-w-2xl mx-auto bg-white rounded-lg border p-6">
        <div className="space-y-4">
          <div className="flex items-center justify-between">
            <span className="text-gray-600">Pet:</span>
            <span className="font-medium">{selectedPet?.name} ({selectedPet?.type})</span>
          </div>
          <div className="flex items-center justify-between">
            <span className="text-gray-600">Service:</span>
            <span className="font-medium">{selectedService?.name}</span>
          </div>
          <div className="flex items-center justify-between">
            <span className="text-gray-600">Doctor:</span>
            <span className="font-medium">{selectedDoctor?.name}</span>
          </div>
          <div className="flex items-center justify-between">
            <span className="text-gray-600">Date & Time:</span>
            <span className="font-medium">March {selectedDate}, 2024 at {selectedTime}</span>
          </div>
          <div className="flex items-center justify-between">
            <span className="text-gray-600">Duration:</span>
            <span className="font-medium">{selectedService?.duration}</span>
          </div>
          <div className="flex items-center justify-between border-t pt-4">
            <span className="text-lg font-semibold">Total:</span>
            <span className="text-lg font-bold text-teal-600">{selectedService?.price}</span>
          </div>
        </div>
        <button className="w-full bg-teal-600 text-white py-3 rounded-lg hover:bg-teal-700 transition-colors mt-6">
          Confirm Appointment
        </button>
      </div>
    </div>
  );

  const renderCurrentStep = () => {
    switch (currentStep) {
      case 1: return <SelectPetStep />;
      case 2: return <SelectServiceStep />;
      case 3: return <SelectDoctorStep />;
      case 4: return <SelectTimeStep />;
      case 5: return <ConfirmStep />;
      default: return <SelectPetStep />;
    }
  };

  return (
    <div className="min-h-screen bg-gray-50 py-8">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <h1 className="text-3xl font-bold text-center mb-8">Book an Appointment</h1>
        
        <StepIndicator />
        
        <div className="bg-white rounded-xl shadow-lg p-8 mb-8">
          {renderCurrentStep()}
        </div>

        {/* Navigation Buttons */}
        <div className="flex justify-between">
          <button
            onClick={prevStep}
            disabled={currentStep === 1}
            className={`flex items-center space-x-2 px-6 py-3 rounded-lg ${
              currentStep === 1
                ? 'bg-gray-200 text-gray-500 cursor-not-allowed'
                : 'bg-gray-600 text-white hover:bg-gray-700'
            }`}
          >
            <ArrowLeft className="w-5 h-5" />
            <span>Previous</span>
          </button>
          
          <button
            onClick={nextStep}
            disabled={!canProceed() || currentStep === 5}
            className={`flex items-center space-x-2 px-6 py-3 rounded-lg ${
              !canProceed() || currentStep === 5
                ? 'bg-gray-200 text-gray-500 cursor-not-allowed'
                : 'bg-teal-600 text-white hover:bg-teal-700'
            }`}
          >
            <span>Next</span>
            <ArrowRight className="w-5 h-5" />
          </button>
        </div>
      </div>
    </div>
  );
};

export default Appointments;