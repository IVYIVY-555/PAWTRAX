import React from 'react';
import { Heart, Phone, Mail, MapPin, Facebook, Twitter, Instagram } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="bg-gray-800 text-white pt-16 pb-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* About Us */}
          <div>
            <div className="flex items-center space-x-2 mb-6">
              <div className="w-10 h-10 bg-gradient-to-r from-teal-400 to-teal-600 rounded-full flex items-center justify-center">
                <Heart className="w-6 h-6 text-white" />
              </div>
              <span className="text-xl font-bold">PetCare</span>
            </div>
            <p className="text-gray-300 mb-6">
              Providing comprehensive care, expert advice, and a loving community for your furry friends. 
              Your pet's wellness journey starts here.
            </p>
            <div className="flex space-x-4">
              <a href="#" className="text-gray-400 hover:text-white transition-colors">
                <Facebook className="w-6 h-6" />
              </a>
              <a href="#" className="text-gray-400 hover:text-white transition-colors">
                <Twitter className="w-6 h-6" />
              </a>
              <a href="#" className="text-gray-400 hover:text-white transition-colors">
                <Instagram className="w-6 h-6" />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-lg font-semibold mb-6">Quick Links</h3>
            <div className="space-y-3">
              <a href="#" className="block text-gray-300 hover:text-white transition-colors">
                Book Appointment
              </a>
              <a href="#" className="block text-gray-300 hover:text-white transition-colors">
                Pet Registration
              </a>
              <a href="#" className="block text-gray-300 hover:text-white transition-colors">
                Emergency Care
              </a>
              <a href="#" className="block text-gray-300 hover:text-white transition-colors">
                Health Records
              </a>
              <a href="#" className="block text-gray-300 hover:text-white transition-colors">
                Community Forum
              </a>
              <a href="#" className="block text-gray-300 hover:text-white transition-colors">
                Pet Mall
              </a>
            </div>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="text-lg font-semibold mb-6">Contact Info</h3>
            <div className="space-y-4">
              <div className="flex items-center space-x-3">
                <Phone className="w-5 h-5 text-teal-400" />
                <span className="text-gray-300">+1 (555) 123-4567</span>
              </div>
              <div className="flex items-center space-x-3">
                <Mail className="w-5 h-5 text-teal-400" />
                <span className="text-gray-300">info@petcare.com</span>
              </div>
              <div className="flex items-center space-x-3">
                <MapPin className="w-5 h-5 text-teal-400" />
                <span className="text-gray-300">123 Pet Care Street<br />Animal City, AC 12345</span>
              </div>
            </div>
            <div className="mt-6">
              <h4 className="text-sm font-semibold mb-2">Emergency Hours</h4>
              <p className="text-gray-300 text-sm">
                24/7 Emergency Care Available<br />
                Call: +1 (555) 911-PETS
              </p>
            </div>
          </div>
        </div>

        <div className="border-t border-gray-700 mt-12 pt-8 text-center">
          <p className="text-gray-400">
            © 2024 PetCare. All rights reserved. | Privacy Policy | Terms of Service
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;