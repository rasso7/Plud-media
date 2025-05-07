import { BuildingOffice2Icon, EnvelopeIcon, PhoneIcon } from '@heroicons/react/24/outline'
import { Heading } from './text'

export default function Contact() {
  return (
    <div className="bg-white mx-auto max-w-7xl my-16" id="Contact">
      <div className="flex w-full rounded-lg overflow-hidden shadow-xl">
            
            {/* Left side - Image and Contact Info */}
            <div className="relative w-1/2 bg-white p-4">
      {/* Container with padding */}
      <div className="relative h-full w-full overflow-hidden rounded-xl">
        {/* Background image (city skyline) with padding */}
        <div className="absolute inset-0 bg-navy-900">
          <div className="h-full w-full bg-[url('/dubai.jpg')] bg-cover bg-center"></div>
        </div>
      </div>
    </div>
            
            {/* Right side - Form */}
            <div className="w-1/2 bg-white p-12">
              <div className="mx-auto max-w-lg">
                <h3 className="text-2xl font-bold text-gray-900 mb-2">Get in touch</h3>
                <p className="text-gray-600 mb-8">
                  Let's connect and discover how we can support your business journey! We're excited to share ideas with you!
                </p>
                
                <form action="#" method="POST" className="space-y-6">
                  <div>
                    <label htmlFor="first-name" className="block text-sm font-medium text-gray-700">
                      First Name <span className="text-red-500">*</span>
                    </label>
                    <div className="mt-1">
                      <input
                        id="first-name"
                        name="first-name"
                        type="text"
                        required
                        placeholder="Enter your first name"
                        className="block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm py-3 px-4 border"
                      />
                    </div>
                  </div>
                  
                  <div>
                    <label htmlFor="email" className="block text-sm font-medium text-gray-700">
                      Email <span className="text-red-500">*</span>
                    </label>
                    <div className="mt-1">
                      <input
                        id="email"
                        name="email"
                        type="email"
                        autoComplete="email"
                        required
                        placeholder="Enter your Email Address"
                        className="block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm py-3 px-4 border"
                      />
                    </div>
                  </div>
                  
                  <div>
                    <label htmlFor="phone-number" className="block text-sm font-medium text-gray-700">
                      Phone Number <span className="text-red-500">*</span>
                    </label>
                    <div className="mt-1">
                      <input
                        id="phone-number"
                        name="phone-number"
                        type="tel"
                        autoComplete="tel"
                        required
                        placeholder="Enter your Phone Number"
                        className="block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm py-3 px-4 border"
                      />
                    </div>
                  </div>
                  
                  <div>
                    <label htmlFor="message" className="block text-sm font-medium text-gray-700">
                      Message
                    </label>
                    <div className="mt-1">
                      <textarea
                        id="message"
                        name="message"
                        rows={4}
                        placeholder="A brief Description here"
                        className="block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm py-3 px-4 border"
                      />
                    </div>
                  </div>
                  
                  <div>
                    <button
                      type="submit"
                      className="w-full rounded-md bg-red-600 py-3 px-4 text-base font-medium text-white shadow-sm hover:bg-red-700 focus:outline-none focus:ring-2 focus:ring-red-500 focus:ring-offset-2"
                    >
                      Submit
                    </button>
                  </div>
                </form>
              </div>
            </div>
          </div>
    </div>
  )
}