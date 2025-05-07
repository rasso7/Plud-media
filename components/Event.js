import { Heading, Subheading } from "./text";

// Using inline SVG for calendar icon instead of importing from a library
const CalendarIcon = () => (
    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" viewBox="0 0 16 16">
      <path d="M3.5 0a.5.5 0 0 1 .5.5V1h8V.5a.5.5 0 0 1 1 0V1h1a2 2 0 0 1 2 2v11a2 2 0 0 1-2 2H2a2 2 0 0 1-2-2V3a2 2 0 0 1 2-2h1V.5a.5.5 0 0 1 .5-.5zM1 4v10a1 1 0 0 0 1 1h12a1 1 0 0 0 1-1V4H1z"/>
    </svg>
  );
  
  const events = [
    {
      id: 1,
      title: "Entomology International Congress of Vancouver",
      date: "Fri, 15 Sep 2023",
      organizer: "Set Your Vendor",
      imageUrl: "/events/1.jpeg",
      category: "science"
    },
    {
      id: 2,
      title: "Success Free Career & Meditation Classes",
      date: "Fri, 10 Nov 2023",
      organizer: "Set Your Vendor",
      imageUrl: "/events/2.jpg",
      category: "wellness"
    },
    {
      id: 3,
      title: "Career Fair: Exclusive Hiring Event-New",
      date: "Thu, 26 Oct 2023",
      organizer: "Set Your Vendor",
      imageUrl: "/events/3.jpg",
      category: "career"
    },
    {
      id: 4,
      title: "Symposiums Chemotherapy Foundation Symposiums",
      date: "Mon, 02 Dec 2024",
      organizer: "Set Your Vendor",
      imageUrl: "/events/4.jpg",
      category: "medical"
    },
    {
      id: 5,
      title: "Vancouver International Congress of Entomology",
      date: "Fri, 27 Oct 2023",
      organizer: "Set Your Vendor",
      imageUrl: "/events/5.jpg",
      category: "science"
    },
    {
      id: 6,
      title: "Modern Marketing Expo in for the Business Owner",
      date: "Fri, 15 Sep 2023",
      organizer: "Set Your Vendor",
      imageUrl: "/events/6.jpg",
      category: "business"
    }
  ];
  
  export default function Events() {
    return (
      <div className="relative overflow-hidden py-16 px-4 sm:py-24" id="Event">
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
        <div className="relative mx-auto max-w-7xl">
          <div className="text-center">
            <Subheading className="text-gray-200">Upcoming Event</Subheading>
           <Heading className='text-white'>Featured Events</Heading>
          </div>
          
          <div className="mt-12 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {events.map((event) => (
              <div 
                key={event.id} 
                className="overflow-hidden rounded-lg bg-white/90 backdrop-blur-sm shadow-lg shadow-purple-900/20 border border-white/20 transition-all hover:shadow-xl hover:shadow-indigo-500/30 hover:transform hover:scale-105"
              >
                <div className="h-48 overflow-hidden">
                  <img 
                    src={event.imageUrl} 
                    alt={event.title} 
                    className="h-full w-full object-cover"
                  />
                </div>
                <div className="p-5">
                  <h3 className="text-sm font-bold text-gray-800 line-clamp-2 h-10">
                    {event.title}
                  </h3>
                  
                  <div className="mt-3 flex items-center gap-1 text-gray-600">
                    <CalendarIcon />
                    <span className="text-xs">{event.date}</span>
                  </div>
                  
                  <div className="mt-4 border-t border-gray-100 pt-4">
                    <div className="flex justify-between items-center">
                      <div>
                        <p className="text-xs text-gray-600">Organized By</p>
                        <p className="text-xs font-bold text-blue-600">{event.organizer}</p>
                      </div>
                      <a  href="#"  className="text-white bg-red-600 rounded border-2   px-3 py-1 text-xs font-bold hover:bg-white hover:text-red-600 hover:border-red-600 transition-colors shadow-sm">
                        More Info
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
          
          <div className="mt-12 text-center">
            <a 
              href="#" 
              className="text-white border-red-600 bg-red-600 rounded border-2  hover:bg-white hover:text-red-600 hover:border-red-600 inline-flex items-center justify-center    px-5 py-2 text-sm font-semibold "
            >
              SEE MORE EVENT
              <span className="ml-2">→</span>
            </a>
          </div>
        </div>
      </div>
    );
  }