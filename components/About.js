import Image from 'next/image'
import React from 'react'
import { Heading, Subheading } from './text'

const About = () => {
  return (
    <>
      <div className="overflow-hidden bg-white py-24 sm:py-32" id='About'>
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="mx-auto grid max-w-2xl grid-cols-1 gap-x-8 gap-y-16 sm:gap-y-20 lg:mx-0 lg:max-w-none lg:grid-cols-2">
            <div className="lg:pt-4 lg:pr-8">
              <div className="lg:max-w-lg">
                <Subheading>About us</Subheading>
                <Heading className="mt-2 ">We Make <span className='text-red-600'>Brands</span> Blow Up</Heading>
                <p className="mt-6 text-lg text-gray-600">Our campaigns are crafted to captivate every niche market we target — delivering viral impact and real results.</p>
                <dl className="mt-10 max-w-xl space-y-8 text-base text-gray-600 lg:max-w-none">
                  <div className="relative pl-9">
                    <dt className="inline font-semibold text-gray-900">
                      <svg className="absolute top-1 left-1 h-5 w-5 text-red-600" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true" data-slot="icon">
                        <path fillRule="evenodd" d="M5.5 17a4.5 4.5 0 0 1-1.44-8.765 4.5 4.5 0 0 1 8.302-3.046 3.5 3.5 0 0 1 4.504 4.272A4 4 0 0 1 15 17H5.5Zm3.75-2.75a.75.75 0 0 0 1.5 0V9.66l1.95 2.1a.75.75 0 1 0 1.1-1.02l-3.25-3.5a.75.75 0 0 0-1.1 0l-3.25 3.5a.75.75 0 1 0 1.1 1.02l1.95-2.1v4.59Z" clipRule="evenodd" />
                      </svg>
                      Viral marketing strategy:
                    </dt>
                    <dd className="inline">We create innovative, buzz-worthy campaigns that drive conversions, ROI, and brand awareness.</dd>
                  </div>
                  <div className="relative pl-9">
                    <dt className="inline font-semibold text-gray-900">
                      <svg className="absolute top-1 left-1 h-5 w-5 text-red-600" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true" data-slot="icon">
                        <path fillRule="evenodd" d="M10 1a4.5 4.5 0 0 0-4.5 4.5V9H5a2 2 0 0 0-2 2v6a2 2 0 0 0 2 2h10a2 2 0 0 0 2-2v-6a2 2 0 0 0-2-2h-.5V5.5A4.5 4.5 0 0 0 10 1Zm3 8V5.5a3 3 0 1 0-6 0V9h6Z" clipRule="evenodd" />
                      </svg>
                      Influencer-driven results:
                    </dt>
                    <dd className="inline">With 7+ years in the industry, Ahmad Mahmood (@1ahmad) taps into his personal network of influencers to secure top-tier content at the best rates.</dd>
                  </div>
                  <div className="relative pl-9">
                    <dt className="inline font-semibold text-gray-900">
                      <svg className="absolute top-1 left-1 h-5 w-5 text-red-600" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true" data-slot="icon">
                        <path d="M4.632 3.533A2 2 0 0 1 6.577 2h6.846a2 2 0 0 1 1.945 1.533l1.976 8.234A3.489 3.489 0 0 0 16 11.5H4c-.476 0-.93.095-1.344.267l1.976-8.234Z" />
                        <path fillRule="evenodd" d="M4 13a2 2 0 1 0 0 4h12a2 2 0 1 0 0-4H4Zm11.24 2a.75.75 0 0 1 .75-.75H16a.75.75 0 0 1 .75.75v.01a.75.75 0 0 1-.75.75h-.01a.75.75 0 0 1-.75-.75V15Zm-2.25-.75a.75.75 0 0 0-.75.75v.01c0 .414.336.75.75.75H13a.75.75 0 0 0 .75-.75V15a.75.75 0 0 0-.75-.75h-.01Z" clipRule="evenodd" />
                      </svg>
                      Startup launch specialists:
                    </dt>
                    <dd className="inline">We help new brands break into the social era with bold campaigns that make noise and get noticed.</dd>
                  </div>
                </dl>
              </div>
            </div>
            <div className="overflow-hidden">
      <video
        className="w-full h-full "
        autoPlay
        muted
        loop
        playsInline
      >
        <source src="/about.mp4" type="video/mp4" />
        Your browser does not support the video tag.
      </video>
    </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default About