interface PropertyCardProps {
  image: string;
  price: string;
  address: string;
  bedrooms?: number;
  bathrooms?: number;
  sqft?: number;
}

export default function PropertyCard({
  image,
  price,
  address,
  bedrooms,
  bathrooms,
  sqft
}: PropertyCardProps) {
  return (
    <div className="group cursor-pointer overflow-hidden rounded-lg bg-white shadow-lg transition-transform duration-300 hover:-translate-y-1">
      <div className="relative h-64 overflow-hidden">
        <img 
          src={image} 
          alt={address} 
          className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-110"
        />
        <div className="absolute bottom-0 left-0 bg-[#7C1E49] px-4 py-2 text-spotlight-maroon">
          <span className="text-lg font-semibold">{price}</span>
        </div>
      </div>

      <div className="p-4">
        <h3 className="text-lg font-serif font-semibold text-gray-900">{address}</h3>
        
        {(bedrooms || bathrooms || sqft) && (
          <div className="mt-2 flex justify-between text-sm text-gray-600">
            {bedrooms && (
              <div className="flex items-center">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 mr-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6" />
                </svg>
                <span>{bedrooms} {bedrooms === 1 ? 'Bed' : 'Beds'}</span>
              </div>
            )}
            
            {bathrooms && (
              <div className="flex items-center">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 mr-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M8 14v3m4-3v3m4-3v3M3 21h18M3 10h18M3 7l9-4 9 4M4 10h16v11H4V10z" />
                </svg>
                <span>{bathrooms} {bathrooms === 1 ? 'Bath' : 'Baths'}</span>
              </div>
            )}
            
            {sqft && (
              <div className="flex items-center">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 mr-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M4 8V4m0 0h4M4 4l5 5m11-1V4m0 0h-4m4 0l-5 5M4 16v4m0 0h4m-4 0l5-5m11 5v-4m0 4h-4m4 0l-5-5" />
                </svg>
                <span>{sqft} sqft</span>
              </div>
            )}
          </div>
        )}
      </div>
    </div>
  );
} 