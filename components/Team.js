"use client"


import { useState } from 'react';
import { Heading } from './text';

const people = [
  {
    name: 'Md Rashid',
    role: 'Developer',
    imageUrl:
      '/Team/Rashid.jpg',
    xUrl: '#',
    linkedinUrl: '#',
  },
  {
    name: 'Abdul Wasit',
    role: 'Graphic Designer',
    imageUrl:
      '/Team/Wasit.jpg',
    xUrl: '#',
    linkedinUrl: '#',
  },
  {
    name: 'Naziya',
    role: 'Hiring Manager',
    imageUrl:
      '/Team/Naziya.jpeg',
    xUrl: '#',
    linkedinUrl: '#',
  },
  {
    name: 'Wtney Francis',
    role: 'Copywriter',
    imageUrl:
      'https://images.unsplash.com/photo-1517365830460-955ce3ccd263?ixlib=rb-=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=8&w=1024&h=1024&q=80',
    xUrl: '#',
    linkedinUrl: '#',
  },
  // More people...
];

export default function Team() {
  return (
    <div className="relative overflow-hidden py-24 sm:py-32" id='Team'>
      {/* Dynamic geometric background - keeping this untouched as requested */}
      <div className="absolute inset-0 bg-gradient-to-br from-indigo-900 via-purple-800 to-pink-700"></div>
      
      {/* Abstract geometric patterns */}
      <div className="absolute inset-0 opacity-20">
        <svg className="h-full w-full" xmlns="http://www.w3.org/2000/svg">
          <defs>
            <pattern id="hexagons" width="50" height="43.4" patternUnits="userSpaceOnUse" patternTransform="scale(5) rotate(15)">
              <polygon points="24.8,22 37.3,29.2 37.3,43.7 24.8,50.9 12.4,43.7 12.4,29.2" fill="none" stroke="currentColor" strokeWidth="0.3" className="text-white" />
            </pattern>
          </defs>
          <rect width="100%" height="100%" fill="url(#hexagons)" />
        </svg>
      </div>
      
      {/* Floating particles */}
      <div className="absolute inset-0">
        <div className="absolute h-4 w-4 rounded-full bg-pink-300 opacity-70 top-1/4 left-1/4 animate-pulse"></div>
        <div className="absolute h-6 w-6 rounded-full bg-purple-300 opacity-60 top-1/3 right-1/3 animate-pulse"></div>
        <div className="absolute h-3 w-3 rounded-full bg-indigo-300 opacity-80 bottom-1/4 right-1/4 animate-pulse"></div>
        <div className="absolute h-5 w-5 rounded-full bg-pink-200 opacity-50 bottom-1/3 left-1/3 animate-pulse"></div>
        <div className="absolute h-8 w-8 rounded-full bg-indigo-400 opacity-30 top-1/2 right-1/2 animate-pulse"></div>
      </div>
      
      {/* Glowing accent lines */}
      <div className="absolute w-full h-full overflow-hidden">
        <div className="absolute top-1/4 left-0 w-full h-px bg-gradient-to-r from-transparent via-pink-300 to-transparent"></div>
        <div className="absolute top-2/3 left-0 w-full h-px bg-gradient-to-r from-transparent via-indigo-300 to-transparent"></div>
        <div className="absolute bottom-1/4 left-0 w-full h-px bg-gradient-to-r from-transparent via-purple-300 to-transparent"></div>
      </div>

      {/* Content */}
      <div className="relative mx-auto max-w-7xl px-6 lg:px-8">
        <div className="mx-auto max-w-2xl text-center mb-16">
         <Heading className="text-white"> Meet our leadership</Heading>

          <p className="mt-6 text-lg leading-8 text-purple-100">
            We're a dynamic group of individuals who are passionate about what we do and dedicated to delivering the
            best results for our clients.
          </p>
        </div>
        
        {/* Updated grid to show 4 members in one row on large screens */}
        <ul
          role="list"
          className="mx-auto grid grid-cols-2 gap-6 sm:gap-8 lg:grid-cols-4"
        >
          {people.map((person) => (
            <li key={person.name}>
              <div className="bg-white bg-opacity-15 backdrop-filter backdrop-blur-xl rounded-xl p-6 shadow-xl border border-white/20 shadow-pink-500/10 relative overflow-hidden">
                {/* Enhanced glass effect with light gradients */}
                <div className="absolute inset-0 bg-gradient-to-br from-white/30 via-white/5 to-transparent opacity-30"></div>
                <div className="absolute -inset-1/2 bg-gradient-to-tr from-pink-200/20 via-purple-200/10 to-blue-200/20 opacity-20 blur-3xl"></div>
                
                <div className="relative flex flex-col items-center">
                  {/* Simple rounded profile image with enhanced light border */}
                  <div className="relative h-32 w-32 mb-5">
                    <div className="absolute inset-0 rounded-full bg-gradient-to-r from-pink-300 via-purple-300 to-indigo-300 opacity-80"></div>
                    <img 
                      alt={person.name} 
                      src={person.imageUrl} 
                      className="relative rounded-full h-full w-full object-cover border-2 border-white/40" 
                      style={{ margin: '2px' }}
                    />
                    {/* Subtle light reflection */}
                    <div className="absolute top-0 left-1/4 w-1/2 h-1/6 bg-white opacity-20 rounded-full blur-sm"></div>
                  </div>
                  
                  <h3 className="text-lg font-medium text-black">{person.name}</h3>
                  <p className="text-sm text-blue-600">{person.role}</p>
                  
                  <ul role="list" className="mt-4 flex justify-center gap-x-4">
                    <li>
                      <a href={person.xUrl} className="text-black hover:text-black transition-colors">
                        <span className="sr-only">X</span>
                        <svg fill="currentColor" viewBox="0 0 20 20" aria-hidden="true" className="w-5 h-5">
                          <path d="M11.4678 8.77491L17.2961 2H15.915L10.8543 7.88256L6.81232 2H2.15039L8.26263 10.8955L2.15039 18H3.53159L8.87581 11.7878L13.1444 18H17.8063L11.4675 8.77491H11.4678ZM9.57608 10.9738L8.95678 10.0881L4.02925 3.03974H6.15068L10.1273 8.72795L10.7466 9.61374L15.9156 17.0075H13.7942L9.57608 10.9742V10.9738Z" />
                        </svg>
                      </a>
                    </li>
                    <li>
                      <a href={person.linkedinUrl} className="text-black hover:text-black transition-colors">
                        <span className="sr-only">LinkedIn</span>
                        <svg fill="currentColor" viewBox="0 0 20 20" aria-hidden="true" className="w-5 h-5">
                          <path
                            d="M16.338 16.338H13.67V12.16c0-.995-.017-2.277-1.387-2.277-1.39 0-1.601 1.086-1.601 2.207v4.248H8.014v-8.59h2.559v1.174h.037c.356-.675 1.227-1.387 2.526-1.387 2.703 0 3.203 1.778 3.203 4.092v4.711zM5.005 6.575a1.548 1.548 0 11-.003-3.096 1.548 1.548 0 01.003 3.096zm-1.337 9.763H6.34v-8.59H3.667v8.59zM17.668 1H2.328C1.595 1 1 1.581 1 2.298v15.403C1 18.418 1.595 19 2.328 19h15.34c.734 0 1.332-.582 1.332-1.299V2.298C19 1.581 18.402 1 17.668 1z"
                            clipRule="evenodd"
                            fillRule="evenodd"
                          />
                        </svg>
                      </a>
                    </li>
                  </ul>
                </div>
              </div>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}