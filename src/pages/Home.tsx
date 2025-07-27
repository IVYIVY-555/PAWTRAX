import React from 'react';
import { Link } from 'react-router-dom';
import { Calendar, Plus, ShoppingBag, MessageCircle, Star, Heart, Shield, Award, ChevronDown, ChevronUp } from 'lucide-react';

const Home = () => {
  const [openFaq, setOpenFaq] = React.useState(null);

  const quickAccessItems = [
    {
      icon: Calendar,
      title: 'Book a Doctor',
      description: 'Schedule an appointment with our veterinarians',
      link: '/appointments',
      color: 'bg-teal-500'
    },
    {
      icon: Plus,
      title: 'Add a Pet',
      description: 'Register your new furry friend',
      link: '/pets',
      color: 'bg-orange-500'
    },
    {
      icon: ShoppingBag,
      title: 'Pet Mall',
      description: 'Shop for food, toys, and accessories',
      link: '/mall',
      color: 'bg-purple-500'
    },
    {
      icon: MessageCircle,
      title: 'Community',
      description: 'Connect with other pet owners',
      link: '/community',
      color: 'bg-pink-500'
    }
  ];

  const popularProducts = [
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
    },
    {
      id: 4,
      name: 'Health Supplements',
      price: '$32.99',
      image: 'https://images.pexels.com/photos/3380736/pexels-photo-3380736.jpeg?auto=compress&cs=tinysrgb&w=400',
      rating: 4.7
    }
  ];

  const communityPosts = [
    {
      id: 1,
      author: 'Sarah M.',
      pet: 'Golden Retriever',
      content: 'Max learned a new trick today! So proud of my boy 🐕',
      image: 'https://images.pexels.com/photos/1108099/pexels-photo-1108099.jpeg?auto=compress&cs=tinysrgb&w=400',
      likes: 24,
      comments: 8
    },
    {
      id: 2,
      author: 'Mike R.',
      pet: 'Persian Cat',
      content: 'Luna enjoying her new favorite spot by the window',
      image: 'https://images.pexels.com/photos/1404819/pexels-photo-1404819.jpeg?auto=compress&cs=tinysrgb&w=400',
      likes: 18,
      comments: 5
    },
    {
      id: 3,
      author: 'Emma L.',
      pet: 'Beagle',
      content: 'First day at the park - Charlie is having a blast!',
      image: 'https://images.pexels.com/photos/1254140/pexels-photo-1254140.jpeg?auto=compress&cs=tinysrgb&w=400',
      likes: 31,
      comments: 12
    }
  ];

  const customerReviews = [
    {
      id: 1,
      name: 'Sarah Johnson',
      location: 'San Francisco, CA',
      rating: 5,
      review: 'PetCare has been absolutely amazing for my Golden Retriever, Max. The veterinarians are so knowledgeable and caring, and the online booking system makes scheduling appointments a breeze. The community feature has also helped me connect with other dog owners in my area!',
      petName: 'Max',
      petType: 'Golden Retriever',
      avatar: 'https://images.pexels.com/photos/1130626/pexels-photo-1130626.jpeg?auto=compress&cs=tinysrgb&w=400',
      petImage: 'https://images.pexels.com/photos/1108099/pexels-photo-1108099.jpeg?auto=compress&cs=tinysrgb&w=400',
      date: '2 weeks ago'
    },
    {
      id: 2,
      name: 'Michael Chen',
      location: 'Austin, TX',
      rating: 5,
      review: 'I was worried about finding a good vet for my Persian cat, Luna, but PetCare exceeded all my expectations. Dr. Rodriguez was gentle and thorough during Luna\'s check-up. The pet mall also has everything I need, and the delivery is super fast!',
      petName: 'Luna',
      petType: 'Persian Cat',
      avatar: 'https://images.pexels.com/photos/1222271/pexels-photo-1222271.jpeg?auto=compress&cs=tinysrgb&w=400',
      petImage: 'https://images.pexels.com/photos/1404819/pexels-photo-1404819.jpeg?auto=compress&cs=tinysrgb&w=400',
      date: '1 month ago'
    },
    {
      id: 3,
      name: 'Emma Rodriguez',
      location: 'Denver, CO',
      rating: 5,
      review: 'The emergency care service saved my Beagle Charlie\'s life! When he got into some chocolate, I called their 24/7 line and they guided me through everything. The staff was professional, caring, and made sure Charlie was completely healthy before we left.',
      petName: 'Charlie',
      petType: 'Beagle',
      avatar: 'https://images.pexels.com/photos/415829/pexels-photo-415829.jpeg?auto=compress&cs=tinysrgb&w=400',
      petImage: 'https://images.pexels.com/photos/1254140/pexels-photo-1254140.jpeg?auto=compress&cs=tinysrgb&w=400',
      date: '3 weeks ago'
    },
    {
      id: 4,
      name: 'David Thompson',
      location: 'Seattle, WA',
      rating: 5,
      review: 'As a first-time pet owner, I was nervous about everything. PetCare\'s team has been incredibly patient and educational. They helped me understand my puppy\'s vaccination schedule and even recommended the best food. Couldn\'t be happier!',
      petName: 'Buddy',
      petType: 'Labrador Mix',
      avatar: 'https://images.pexels.com/photos/1043471/pexels-photo-1043471.jpeg?auto=compress&cs=tinysrgb&w=400',
      petImage: 'https://images.pexels.com/photos/1108099/pexels-photo-1108099.jpeg?auto=compress&cs=tinysrgb&w=400',
      date: '1 week ago'
    },
    {
      id: 5,
      name: 'Lisa Park',
      location: 'Miami, FL',
      rating: 5,
      review: 'The grooming services are top-notch! My Poodle, Princess, always comes back looking and smelling amazing. The groomers are so gentle and patient with her. Plus, the online community has been great for getting grooming tips from other Poodle owners.',
      petName: 'Princess',
      petType: 'Standard Poodle',
      avatar: 'https://images.pexels.com/photos/1181686/pexels-photo-1181686.jpeg?auto=compress&cs=tinysrgb&w=400',
      petImage: 'https://images.pexels.com/photos/1404819/pexels-photo-1404819.jpeg?auto=compress&cs=tinysrgb&w=400',
      date: '2 months ago'
    },
    {
      id: 6,
      name: 'James Wilson',
      location: 'Chicago, IL',
      rating: 5,
      review: 'PetCare\'s dashboard feature is incredible! I can track all of my cat\'s health records, schedule appointments, and even order food all in one place. The veterinarians are knowledgeable and always take time to answer my questions thoroughly.',
      petName: 'Whiskers',
      petType: 'Maine Coon',
      avatar: 'https://images.pexels.com/photos/1212984/pexels-photo-1212984.jpeg?auto=compress&cs=tinysrgb&w=400',
      petImage: 'https://images.pexels.com/photos/1404819/pexels-photo-1404819.jpeg?auto=compress&cs=tinysrgb&w=400',
      date: '3 weeks ago'
    }
  ];

  const faqs = [
    {
      id: 1,
      question: "How often should I bring my pet for check-ups?",
      answer: "We recommend annual check-ups for healthy adult pets, and bi-annual visits for senior pets (7+ years for dogs, 10+ years for cats). Puppies and kittens need more frequent visits during their first year for vaccinations and monitoring."
    },
    {
      id: 2,
      question: "What should I do in case of a pet emergency?",
      answer: "For immediate emergencies, call our 24/7 emergency line at +1 (555) 911-PETS. If your pet is unconscious, bleeding heavily, or showing signs of severe distress, bring them in immediately. For less urgent concerns, you can book an urgent care appointment through our platform."
    },
    {
      id: 3,
      question: "How do I prepare my pet for their first visit?",
      answer: "Bring any previous medical records, a list of current medications, and your pet's favorite treats. For cats, use a secure carrier. For dogs, ensure they're on a leash. Try to keep your pet calm and arrive 15 minutes early for paperwork."
    },
    {
      id: 4,
      question: "What vaccinations does my pet need?",
      answer: "Core vaccines for dogs include rabies, DHPP (distemper, hepatitis, parvovirus, parainfluenza). For cats: rabies, FVRCP (feline viral rhinotracheitis, calicivirus, panleukopenia). Our veterinarians will create a customized vaccination schedule based on your pet's age, lifestyle, and risk factors."
    },
    {
      id: 5,
      question: "Do you offer grooming services?",
      answer: "Yes! We provide comprehensive grooming services including baths, nail trims, ear cleaning, and full grooming packages. You can book grooming appointments through our platform, and we offer both basic and premium grooming options."
    },
    {
      id: 6,
      question: "Can I get prescription pet food and medications through your platform?",
      answer: "Absolutely! Our Pet Mall features prescription diets and medications that can be ordered online after a veterinary consultation. We also carry a wide selection of premium pet foods, supplements, and health products."
    },
    {
      id: 7,
      question: "How does the community feature work?",
      answer: "Our community platform allows pet owners to share experiences, ask questions, and connect with other pet lovers. You can post photos, share tips, participate in discussions, and get advice from both fellow pet owners and our veterinary team."
    },
    {
      id: 8,
      question: "What payment methods do you accept?",
      answer: "We accept all major credit cards, debit cards, pet insurance, and offer flexible payment plans for larger procedures. Many pet insurance providers can be billed directly - just bring your insurance information to your appointment."
    }
  ];

  const toggleFaq = (id) => {
    setOpenFaq(openFaq === id ? null : id);
  };

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative bg-gradient-to-r from-teal-600 to-teal-400 text-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-4xl md:text-6xl font-bold mb-6">
              Your Pet's Wellness Journey
              <br />
              <span className="text-orange-300">Starts Here</span>
            </h1>
            <p className="text-xl md:text-2xl mb-8 max-w-3xl mx-auto">
              Comprehensive care, expert advice, and a loving community for your furry friends
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                to="/appointments"
                className="bg-orange-500 text-white px-8 py-4 rounded-full text-lg font-semibold hover:bg-orange-600 transition-colors"
              >
                Book an Appointment
              </Link>
              <Link
                to="/pets"
                className="bg-white text-teal-600 px-8 py-4 rounded-full text-lg font-semibold hover:bg-gray-100 transition-colors"
              >
                Add Your Pet
              </Link>
            </div>
          </div>
        </div>
        <div className="absolute bottom-0 left-0 right-0 h-16 bg-gradient-to-t from-white to-transparent"></div>
      </section>

      {/* Quick Access Grid */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-center mb-12 text-gray-800">
            Quick Access
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {quickAccessItems.map((item, index) => (
              <Link
                key={index}
                to={item.link}
                className="group p-6 bg-white rounded-xl shadow-md hover:shadow-lg transition-all duration-300 border border-gray-100"
              >
                <div className={`w-12 h-12 ${item.color} rounded-lg flex items-center justify-center mb-4 group-hover:scale-110 transition-transform`}>
                  <item.icon className="w-6 h-6 text-white" />
                </div>
                <h3 className="text-xl font-semibold mb-2 text-gray-800">{item.title}</h3>
                <p className="text-gray-600">{item.description}</p>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Popular Products */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center mb-12">
            <h2 className="text-3xl font-bold text-gray-800">Popular Products</h2>
            <Link
              to="/mall"
              className="text-teal-600 hover:text-teal-700 font-semibold"
            >
              View All →
            </Link>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {popularProducts.map((product) => (
              <div key={product.id} className="bg-white rounded-xl shadow-md overflow-hidden hover:shadow-lg transition-shadow">
                <div className="aspect-square overflow-hidden">
                  <img
                    src={product.image}
                    alt={product.name}
                    className="w-full h-full object-cover hover:scale-105 transition-transform duration-300"
                  />
                </div>
                <div className="p-4">
                  <h3 className="font-semibold mb-2">{product.name}</h3>
                  <div className="flex items-center justify-between">
                    <span className="text-lg font-bold text-teal-600">{product.price}</span>
                    <div className="flex items-center space-x-1">
                      <Star className="w-4 h-4 text-yellow-400 fill-current" />
                      <span className="text-sm text-gray-600">{product.rating}</span>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Community Highlights */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center mb-12">
            <h2 className="text-3xl font-bold text-gray-800">Community Highlights</h2>
            <Link
              to="/community"
              className="text-teal-600 hover:text-teal-700 font-semibold"
            >
              Join Community →
            </Link>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {communityPosts.map((post) => (
              <div key={post.id} className="bg-white rounded-xl shadow-md overflow-hidden hover:shadow-lg transition-shadow">
                <div className="aspect-video overflow-hidden">
                  <img
                    src={post.image}
                    alt={post.pet}
                    className="w-full h-full object-cover"
                  />
                </div>
                <div className="p-4">
                  <div className="flex items-center mb-2">
                    <div className="w-8 h-8 bg-teal-500 rounded-full flex items-center justify-center">
                      <span className="text-white text-sm font-semibold">
                        {post.author.charAt(0)}
                      </span>
                    </div>
                    <div className="ml-3">
                      <p className="font-semibold text-sm">{post.author}</p>
                      <p className="text-gray-600 text-xs">{post.pet}</p>
                    </div>
                  </div>
                  <p className="text-gray-800 mb-3">{post.content}</p>
                  <div className="flex items-center space-x-4 text-sm text-gray-600">
                    <div className="flex items-center space-x-1">
                      <Heart className="w-4 h-4" />
                      <span>{post.likes}</span>
                    </div>
                    <div className="flex items-center space-x-1">
                      <MessageCircle className="w-4 h-4" />
                      <span>{post.comments}</span>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-800 mb-4">Why Choose PetCare?</h2>
            <p className="text-xl text-gray-600">Comprehensive care for your beloved pets</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="text-center">
              <div className="w-16 h-16 bg-teal-500 rounded-full flex items-center justify-center mx-auto mb-4">
                <Shield className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-xl font-semibold mb-2">Expert Veterinarians</h3>
              <p className="text-gray-600">Certified professionals with years of experience caring for pets</p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 bg-orange-500 rounded-full flex items-center justify-center mx-auto mb-4">
                <Heart className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-xl font-semibold mb-2">Comprehensive Care</h3>
              <p className="text-gray-600">From routine check-ups to emergency care, we've got you covered</p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 bg-purple-500 rounded-full flex items-center justify-center mx-auto mb-4">
                <Award className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-xl font-semibold mb-2">Premium Products</h3>
              <p className="text-gray-600">Curated selection of the best food, toys, and accessories</p>
            </div>
          </div>
        </div>
      </section>

      {/* Customer Reviews Section */}
      <section className="py-16 bg-gradient-to-br from-teal-50 to-blue-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-800 mb-4">What Pet Parents Say</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Join thousands of satisfied pet owners who trust PetCare for their furry friends' health and happiness
            </p>
            <div className="flex items-center justify-center mt-6 space-x-2">
              <div className="flex items-center">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="w-6 h-6 text-yellow-400 fill-current" />
                ))}
              </div>
              <span className="text-lg font-semibold text-gray-700">4.9/5</span>
              <span className="text-gray-600">from 2,847+ reviews</span>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {customerReviews.map((review) => (
              <div key={review.id} className="bg-white rounded-2xl shadow-lg p-6 hover:shadow-xl transition-shadow duration-300">
                {/* Rating Stars */}
                <div className="flex items-center mb-4">
                  {[...Array(review.rating)].map((_, i) => (
                    <Star key={i} className="w-5 h-5 text-yellow-400 fill-current" />
                  ))}
                </div>

                {/* Review Text */}
                <p className="text-gray-700 mb-6 leading-relaxed">"{review.review}"</p>

                {/* Customer Info */}
                <div className="flex items-center space-x-4">
                  <div className="flex-shrink-0">
                    <img
                      src={review.avatar}
                      alt={review.name}
                      className="w-12 h-12 rounded-full object-cover"
                    />
                  </div>
                  <div className="flex-1 min-w-0">
                    <h4 className="text-lg font-semibold text-gray-800">{review.name}</h4>
                    <p className="text-sm text-gray-600">{review.location}</p>
                    <p className="text-sm text-teal-600 font-medium">
                      {review.petName} • {review.petType}
                    </p>
                  </div>
                  <div className="flex-shrink-0">
                    <img
                      src={review.petImage}
                      alt={review.petName}
                      className="w-12 h-12 rounded-full object-cover border-2 border-teal-200"
                    />
                  </div>
                </div>

                {/* Date */}
                <div className="mt-4 pt-4 border-t border-gray-100">
                  <p className="text-xs text-gray-500">{review.date}</p>
                </div>
              </div>
            ))}
          </div>

          {/* Call to Action */}
          <div className="text-center mt-12">
            <div className="bg-white rounded-2xl shadow-lg p-8 max-w-2xl mx-auto">
              <h3 className="text-2xl font-bold text-gray-800 mb-4">Ready to Join Our Happy Pet Family?</h3>
              <p className="text-gray-600 mb-6">
                Experience the same exceptional care that thousands of pet owners trust every day.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Link
                  to="/appointments"
                  className="bg-teal-600 text-white px-8 py-3 rounded-lg hover:bg-teal-700 transition-colors font-semibold"
                >
                  Book Your First Visit
                </Link>
                <Link
                  to="/pets"
                  className="bg-orange-500 text-white px-8 py-3 rounded-lg hover:bg-orange-600 transition-colors font-semibold"
                >
                  Add Your Pet
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-16 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-800 mb-4">Frequently Asked Questions</h2>
            <p className="text-xl text-gray-600">Get answers to common questions about pet care and our services</p>
          </div>
          <div className="space-y-4">
            {faqs.map((faq) => (
              <div key={faq.id} className="bg-gray-50 rounded-xl overflow-hidden">
                <button
                  onClick={() => toggleFaq(faq.id)}
                  className="w-full px-6 py-4 text-left flex items-center justify-between hover:bg-gray-100 transition-colors"
                >
                  <h3 className="text-lg font-semibold text-gray-800 pr-4">{faq.question}</h3>
                  {openFaq === faq.id ? (
                    <ChevronUp className="w-5 h-5 text-teal-600 flex-shrink-0" />
                  ) : (
                    <ChevronDown className="w-5 h-5 text-teal-600 flex-shrink-0" />
                  )}
                </button>
                {openFaq === faq.id && (
                  <div className="px-6 pb-4">
                    <p className="text-gray-600 leading-relaxed">{faq.answer}</p>
                  </div>
                )}
              </div>
            ))}
          </div>
          <div className="text-center mt-8">
            <p className="text-gray-600 mb-4">Still have questions?</p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                to="/appointments"
                className="bg-teal-600 text-white px-6 py-3 rounded-lg hover:bg-teal-700 transition-colors"
              >
                Book a Consultation
              </Link>
              <Link
                to="/community"
                className="bg-gray-600 text-white px-6 py-3 rounded-lg hover:bg-gray-700 transition-colors"
              >
                Ask the Community
              </Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;