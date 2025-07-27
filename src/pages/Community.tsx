import React, { useState } from 'react';
import { Heart, MessageCircle, Share2, Camera, Send, Smile, Hash } from 'lucide-react';

const Community = () => {
  const [newPost, setNewPost] = useState('');
  const [activeTab, setActiveTab] = useState('feed');

  const posts = [
    {
      id: 1,
      author: {
        name: 'Sarah Mitchell',
        avatar: 'https://images.pexels.com/photos/1130626/pexels-photo-1130626.jpeg?auto=compress&cs=tinysrgb&w=400',
        verified: true
      },
      content: 'Max learned a new trick today! He can now fetch his favorite toy and put it back in the basket. So proud of my golden boy! 🐕✨',
      image: 'https://images.pexels.com/photos/1108099/pexels-photo-1108099.jpeg?auto=compress&cs=tinysrgb&w=400',
      likes: 24,
      comments: 8,
      shares: 3,
      timestamp: '2 hours ago',
      tags: ['#GoldenRetriever', '#Training', '#ProudParent'],
      isLiked: false
    },
    {
      id: 2,
      author: {
        name: 'Mike Rodriguez',
        avatar: 'https://images.pexels.com/photos/1222271/pexels-photo-1222271.jpeg?auto=compress&cs=tinysrgb&w=400',
        verified: false
      },
      content: 'Luna found her favorite sunny spot by the window. She spends hours here just watching the world go by. Cats really know how to live! 😸',
      image: 'https://images.pexels.com/photos/1404819/pexels-photo-1404819.jpeg?auto=compress&cs=tinysrgb&w=400',
      likes: 18,
      comments: 5,
      shares: 2,
      timestamp: '4 hours ago',
      tags: ['#CatLife', '#Persian', '#Sunshine'],
      isLiked: true
    },
    {
      id: 3,
      author: {
        name: 'Emma Johnson',
        avatar: 'https://images.pexels.com/photos/415829/pexels-photo-415829.jpeg?auto=compress&cs=tinysrgb&w=400',
        verified: true
      },
      content: 'First day at the new dog park! Charlie made so many friends and had the time of his life. There\'s nothing better than seeing your pup happy and social! 🎾🐕',
      image: 'https://images.pexels.com/photos/1254140/pexels-photo-1254140.jpeg?auto=compress&cs=tinysrgb&w=400',
      likes: 31,
      comments: 12,
      shares: 6,
      timestamp: '6 hours ago',
      tags: ['#DogPark', '#Beagle', '#Socialization'],
      isLiked: false
    },
    {
      id: 4,
      author: {
        name: 'David Chen',
        avatar: 'https://images.pexels.com/photos/1043471/pexels-photo-1043471.jpeg?auto=compress&cs=tinysrgb&w=400',
        verified: false
      },
      content: 'Grooming day for Princess! She might not love the process, but she always struts around like royalty afterwards. Worth every bit of drama! 👑✨',
      image: 'https://images.pexels.com/photos/1404819/pexels-photo-1404819.jpeg?auto=compress&cs=tinysrgb&w=400',
      likes: 15,
      comments: 7,
      shares: 1,
      timestamp: '8 hours ago',
      tags: ['#Grooming', '#Princess', '#CatDrama'],
      isLiked: true
    }
  ];

  const popularTags = [
    { tag: '#DogTraining', count: 234 },
    { tag: '#CatLife', count: 189 },
    { tag: '#PetHealth', count: 156 },
    { tag: '#Puppies', count: 145 },
    { tag: '#Adoption', count: 134 },
    { tag: '#PetPhotography', count: 123 },
    { tag: '#VetTips', count: 98 },
    { tag: '#PetFood', count: 87 }
  ];

  const trendingTopics = [
    'Best dog training techniques',
    'Indoor plants safe for cats',
    'Puppy vaccination schedule',
    'Senior pet care tips',
    'DIY pet toy ideas'
  ];

  const PostCard = ({ post }) => (
    <div className="bg-white rounded-xl shadow-md overflow-hidden mb-6">
      {/* Post Header */}
      <div className="p-4 flex items-center space-x-3">
        <img
          src={post.author.avatar}
          alt={post.author.name}
          className="w-10 h-10 rounded-full object-cover"
        />
        <div className="flex-1">
          <div className="flex items-center space-x-2">
            <h3 className="font-semibold text-gray-800">{post.author.name}</h3>
            {post.author.verified && (
              <div className="w-4 h-4 bg-blue-500 rounded-full flex items-center justify-center">
                <span className="text-white text-xs">✓</span>
              </div>
            )}
          </div>
          <p className="text-sm text-gray-500">{post.timestamp}</p>
        </div>
      </div>

      {/* Post Content */}
      <div className="px-4 pb-3">
        <p className="text-gray-800 mb-3">{post.content}</p>
        <div className="flex flex-wrap gap-2">
          {post.tags.map((tag, index) => (
            <span key={index} className="text-teal-600 hover:text-teal-700 cursor-pointer text-sm">
              {tag}
            </span>
          ))}
        </div>
      </div>

      {/* Post Image */}
      {post.image && (
        <div className="aspect-video overflow-hidden">
          <img
            src={post.image}
            alt="Post content"
            className="w-full h-full object-cover"
          />
        </div>
      )}

      {/* Post Actions */}
      <div className="p-4 border-t border-gray-100">
        <div className="flex items-center justify-between">
          <div className="flex items-center space-x-6">
            <button className={`flex items-center space-x-2 ${post.isLiked ? 'text-red-500' : 'text-gray-500'} hover:text-red-500 transition-colors`}>
              <Heart className={`w-5 h-5 ${post.isLiked ? 'fill-current' : ''}`} />
              <span className="text-sm">{post.likes}</span>
            </button>
            <button className="flex items-center space-x-2 text-gray-500 hover:text-teal-500 transition-colors">
              <MessageCircle className="w-5 h-5" />
              <span className="text-sm">{post.comments}</span>
            </button>
            <button className="flex items-center space-x-2 text-gray-500 hover:text-blue-500 transition-colors">
              <Share2 className="w-5 h-5" />
              <span className="text-sm">{post.shares}</span>
            </button>
          </div>
        </div>
      </div>
    </div>
  );

  return (
    <div className="min-h-screen bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {/* Header */}
        <div className="mb-8">
          <h1 className="text-3xl font-bold text-gray-800 mb-4">Pet Community</h1>
          <div className="flex space-x-6">
            <button
              onClick={() => setActiveTab('feed')}
              className={`px-4 py-2 rounded-lg transition-colors ${
                activeTab === 'feed'
                  ? 'bg-teal-600 text-white'
                  : 'text-gray-600 hover:text-teal-600'
              }`}
            >
              Feed
            </button>
            <button
              onClick={() => setActiveTab('trending')}
              className={`px-4 py-2 rounded-lg transition-colors ${
                activeTab === 'trending'
                  ? 'bg-teal-600 text-white'
                  : 'text-gray-600 hover:text-teal-600'
              }`}
            >
              Trending
            </button>
            <button
              onClick={() => setActiveTab('following')}
              className={`px-4 py-2 rounded-lg transition-colors ${
                activeTab === 'following'
                  ? 'bg-teal-600 text-white'
                  : 'text-gray-600 hover:text-teal-600'
              }`}
            >
              Following
            </button>
          </div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-4 gap-8">
          {/* Main Content */}
          <div className="lg:col-span-3">
            {/* Post Creation */}
            <div className="bg-white rounded-xl shadow-md p-6 mb-6">
              <div className="flex items-start space-x-3">
                <img
                  src="https://images.pexels.com/photos/1130626/pexels-photo-1130626.jpeg?auto=compress&cs=tinysrgb&w=400"
                  alt="Your avatar"
                  className="w-10 h-10 rounded-full object-cover"
                />
                <div className="flex-1">
                  <textarea
                    value={newPost}
                    onChange={(e) => setNewPost(e.target.value)}
                    placeholder="What's happening with your pet today?"
                    className="w-full p-3 border border-gray-300 rounded-lg resize-none focus:outline-none focus:ring-2 focus:ring-teal-500"
                    rows={3}
                  />
                  <div className="flex items-center justify-between mt-4">
                    <div className="flex items-center space-x-4">
                      <button className="flex items-center space-x-2 text-gray-500 hover:text-teal-500 transition-colors">
                        <Camera className="w-5 h-5" />
                        <span className="text-sm">Photo</span>
                      </button>
                      <button className="flex items-center space-x-2 text-gray-500 hover:text-teal-500 transition-colors">
                        <Smile className="w-5 h-5" />
                        <span className="text-sm">Emoji</span>
                      </button>
                      <button className="flex items-center space-x-2 text-gray-500 hover:text-teal-500 transition-colors">
                        <Hash className="w-5 h-5" />
                        <span className="text-sm">Tag</span>
                      </button>
                    </div>
                    <button className="bg-teal-600 text-white px-6 py-2 rounded-lg hover:bg-teal-700 transition-colors flex items-center space-x-2">
                      <Send className="w-4 h-4" />
                      <span>Post</span>
                    </button>
                  </div>
                </div>
              </div>
            </div>

            {/* Posts Feed */}
            <div>
              {posts.map((post) => (
                <PostCard key={post.id} post={post} />
              ))}
            </div>
          </div>

          {/* Sidebar */}
          <div className="lg:col-span-1">
            {/* Popular Tags */}
            <div className="bg-white rounded-xl shadow-md p-6 mb-6">
              <h3 className="text-lg font-semibold mb-4">Popular Tags</h3>
              <div className="flex flex-wrap gap-2">
                {popularTags.map((item, index) => (
                  <button
                    key={index}
                    className="px-3 py-1 bg-teal-50 text-teal-700 rounded-full text-sm hover:bg-teal-100 transition-colors"
                  >
                    {item.tag}
                  </button>
                ))}
              </div>
            </div>

            {/* Trending Topics */}
            <div className="bg-white rounded-xl shadow-md p-6 mb-6">
              <h3 className="text-lg font-semibold mb-4">Trending Topics</h3>
              <div className="space-y-3">
                {trendingTopics.map((topic, index) => (
                  <button
                    key={index}
                    className="block w-full text-left p-3 rounded-lg hover:bg-gray-50 transition-colors"
                  >
                    <p className="text-sm font-medium text-gray-800">{topic}</p>
                    <p className="text-xs text-gray-500 mt-1">{Math.floor(Math.random() * 100) + 20} discussions</p>
                  </button>
                ))}
              </div>
            </div>

            {/* Community Guidelines */}
            <div className="bg-white rounded-xl shadow-md p-6">
              <h3 className="text-lg font-semibold mb-4">Community Guidelines</h3>
              <div className="space-y-3 text-sm text-gray-600">
                <p>• Be respectful and kind to all members</p>
                <p>• Share pet-related content only</p>
                <p>• No spam or promotional content</p>
                <p>• Report inappropriate behavior</p>
                <p>• Keep discussions constructive</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Community;