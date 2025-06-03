"use client"
import { useState, useEffect } from 'react';
import { 
  UserCircleIcon, // for Instagram
  VideoCameraIcon, // for YouTube
  PlayCircleIcon, // for TikTok
  ChatBubbleLeftRightIcon, // for Facebook
  ChatBubbleOvalLeftIcon // for Twitter
} from '@heroicons/react/24/outline';
import { Heading } from './text';

export default function InfluencerShowcase() {
  const [activeTab, setActiveTab] = useState('INSTAGRAM');
  const [isVisible, setIsVisible] = useState(false);
  
  useEffect(() => {
    // Add scroll event listener for animations
    const handleScroll = () => {
      if (window.scrollY > 100) {
        setIsVisible(true);
      }
    };
    
    window.addEventListener('scroll', handleScroll);
    // Trigger initial animation
    setTimeout(() => setIsVisible(true), 300);
    
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);
  
  const tabs = [
    { id: 'INSTAGRAM', label: 'INSTAGRAM', icon: <UserCircleIcon className="w-5 h-5" /> },
    { id: 'YOUTUBE', label: 'YOUTUBE', icon: <VideoCameraIcon className="w-5 h-5" /> },
    { id: 'TIKTOK', label: 'TIKTOK', icon: <PlayCircleIcon className="w-5 h-5" /> },
    { id: 'FACEBOOK', label: 'FACEBOOK', icon: <ChatBubbleLeftRightIcon className="w-5 h-5" /> },
    { id: 'TWITTER', label: 'TWITTER', icon: <ChatBubbleOvalLeftIcon className="w-5 h-5" /> },
  ];
  
  // New influencers data structure with categories
  const allInfluencers = [
    {
      id: 1,
      name: 'Floyd Mayweather',
      image: '/influencer/may.jpg',
      categories: ['INSTAGRAM', 'TIKTOK', 'FACEBOOK', 'TWITTER'],
      social: ['instagram', 'tiktok', 'facebook', 'twitter'],
      followers: '23.5M'
    },
    {
      id: 2,
      name: 'Mr. Faisu',
      image: '/influencer/faisu.jpg',
      categories: ['INSTAGRAM', 'YOUTUBE', 'TIKTOK', 'FACEBOOK', 'TWITTER'],
      social: ['instagram', 'youtube', 'tiktok', 'facebook', 'twitter'],
      followers: '16.2M'
    },
    {
      id: 3,
      name: 'KSI',
      image: '/influencer/ksi.jpg',
      categories: ['INSTAGRAM', 'YOUTUBE', 'TIKTOK', 'FACEBOOK', 'TWITTER'],
      social: ['instagram', 'youtube', 'tiktok', 'facebook', 'twitter'],
      followers: '12.8M'
    },
    {
      id: 4,
      name: 'Aboflah',
      image: '/influencer/Aboflah.jpg',
      categories: ['INSTAGRAM', 'YOUTUBE', 'TIKTOK'],
      social: ['instagram', 'youtube', 'tiktok'],
      followers: '9.5M'
    },
    {
      id: 5,
      name: 'SuperCarBlondie',
      image: '/influencer/SuperCarBlondie.jpg',
      categories: ['INSTAGRAM', 'YOUTUBE', 'TIKTOK'],
      social: ['instagram', 'youtube', 'tiktok'],
      followers: '8.7M'
    },
    {
      id: 6,
      name: 'Narins Beauty',
      image: '/influencer/Narins.jpg',
      categories: ['INSTAGRAM', 'YOUTUBE', 'TIKTOK'],
      social: ['instagram', 'youtube', 'tiktok'],
      followers: '7.2M'
    },
    {
      id: 7,
      name: 'MoVlogs',
      image: '/influencer/Movlog.jpg',
      categories: ['INSTAGRAM', 'YOUTUBE', 'TIKTOK'],
      social: ['instagram', 'youtube', 'tiktok'],
      followers: '6.5M'
    },
    {
      id: 8,
      name: 'Esha Gupta',
      image: '/influencer/Esha.jpg',
      categories: ['INSTAGRAM', 'YOUTUBE', 'TIKTOK'],
      social: ['instagram', 'youtube', 'tiktok'],
      followers: '5.3M'
    }
  ];
  
  // Filter influencers based on active tab
  const filteredInfluencers = allInfluencers.filter(influencer => 
    influencer.categories.includes(activeTab)
  );
  
  // Social media icons component with hover colors
  const SocialIcon = ({ platform }) => {
    const hoverColors = {
      instagram: 'hover:text-pink-600',
      youtube: 'hover:text-red-600',
      tiktok: 'hover:text-black',
      facebook: 'hover:text-blue-600',
      twitter: 'hover:text-blue-400'
    };
    
    switch(platform) {
      case 'instagram':
        return <UserCircleIcon className={`w-5 h-5 text-gray-600 transition-colors ${hoverColors[platform]}`} />;
      case 'youtube':
        return <VideoCameraIcon className={`w-5 h-5 text-gray-600 transition-colors ${hoverColors[platform]}`} />;
      case 'tiktok':
        return <PlayCircleIcon className={`w-5 h-5 text-gray-600 transition-colors ${hoverColors[platform]}`} />;
      case 'facebook':
        return <ChatBubbleLeftRightIcon className={`w-5 h-5 text-gray-600 transition-colors ${hoverColors[platform]}`} />;
      case 'twitter':
        return <ChatBubbleOvalLeftIcon className={`w-5 h-5 text-gray-600 transition-colors ${hoverColors[platform]}`} />;
      default:
        return null;
    }
  };

  // Influencer card component
  const InfluencerCard = ({ influencer, index }) => {
    return (
      <div 
        className={`border border-gray-200 rounded-lg overflow-hidden bg-white flex flex-col shadow-lg hover:shadow-xl transition-all duration-300 transform ${isVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'}`}
        style={{ transitionDelay: `${index * 100}ms` }}
      >
        <div className="h-64 overflow-hidden relative group">
          <img 
            src={influencer.image} 
            alt={influencer.name} 
            className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end justify-start p-4">
            <span className="text-white font-medium">{influencer.followers} Followers</span>
          </div>
        </div>
        <div className="p-4 flex flex-col items-center">
          <h3 className="text-xl font-medium text-gray-800 mb-2">{influencer.name}</h3>
          <div className="flex justify-center space-x-4 my-3 border-t border-b border-gray-200 py-4 w-full">
            {influencer.social.map((platform) => (
              <a key={platform} href="#" className="transform hover:scale-110 transition-transform">
                <SocialIcon platform={platform} />
              </a>
            ))}
          </div>
          <button className="mt-2 px-6 py-2 bg-red-500 text-white rounded-full text-sm font-medium hover:bg-red-600 transition-colors shadow-md hover:shadow-lg transform hover:-translate-y-1 active:translate-y-0 duration-300">
            View Profile
          </button>
        </div>
      </div>
    );
  };

  return (
    <section className="relative bg-gradient-to-b from-white to-gray-100 py-16 px-4 overflow-hidden" id='Influencers'>
      {/* Decorative elements */}
      <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-red-500 via-red-400 to-red-500"></div>
      <div className="absolute -top-32 -right-32 w-64 h-64 bg-red-50 rounded-full blur-3xl opacity-50"></div>
      <div className="absolute -bottom-32 -left-32 w-64 h-64 bg-red-50 rounded-full blur-3xl opacity-50"></div>
      
      <div className="container mx-auto max-w-7xl relative z-10">
        {/* Header with animation */}
        <div className={`text-center mb-12 transition-all duration-700 ${isVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'}`}>

          <h2 className="text-sm font-bold text-red-500 tracking-widest mb-3">OUR NETWORK</h2>
          <Heading className="text-4xl md:text-5xl mb-3">INFLUENCERS</Heading>
          
          <p className="text-gray-600 max-w-2xl mx-auto">Connect with our network of premier social media influencers who are making waves across various platforms</p>
        </div>
        
        {/* Tabs with animation */}
        <div className={`flex flex-wrap justify-center mb-12 gap-2 transition-all duration-700 delay-100 ${isVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'}`}>
          {tabs.map((tab) => (
            <button
              key={tab.id}
              onClick={() => setActiveTab(tab.id)}
              className={`
                px-6 py-3 rounded-full flex items-center gap-2 font-medium text-sm transition-all duration-300
                ${activeTab === tab.id 
                  ? 'bg-red-500 text-white shadow-md transform -translate-y-1' 
                  : 'bg-white text-gray-800 border border-gray-300 hover:bg-gray-50 hover:shadow'}
              `}
            >
              {tab.icon}
              {tab.label}
            </button>
          ))}
        </div>
        
        {/* Influencer Grid */}
        <div className="px-4 md:px-6">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 md:gap-8">
            {filteredInfluencers.map((influencer, index) => (
              <InfluencerCard key={influencer.id} influencer={influencer} index={index} />
            ))}
          </div>
        </div>
        
        {/* View All Button */}
        <div className="text-center mt-12">
          <button className="px-8 py-3 bg-white text-red-500 border-2 border-red-500 rounded-full font-medium hover:bg-red-500 hover:text-white transition-colors duration-300 shadow-md hover:shadow-lg">
            View All Influencers
          </button>
        </div>
      </div>
      
      {/* Scroll to top button */}
      
    </section>
  );
}