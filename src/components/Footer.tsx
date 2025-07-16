import Link from "next/link";
import Image from "next/image";

export default function Footer() {
  return (
    <footer className="bg-black text-white py-16 border-t border-white/40">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row justify-between">
          <div className="mb-8 md:mb-0">
            <div className="flex items-center gap-2 mb-4">
              <Image
                src="/logo-white.svg"
                alt="Spotlight Realty"
                width={40}
                height={40}
              />
              <h3 className="text-xl font-semibold font-serif">
                Spotlight Realty
              </h3>
            </div>
            <p className="mb-4 font-sans text-gray-300">
              © {new Date().getFullYear()} Spotlight Realty
            </p>
            <p className="font-sans text-gray-300 max-w-full md:max-w-1/2">
            Modernizing real estate with AI technology. Save on commissions with our full-service brokerage.
            </p>
          </div>

          <div className="grid grid-cols-3 gap-8">
            <div>
              <h4 className="text-lg font-medium mb-6 font-serif">App</h4>
              <ul className="space-y-4">
                <li><Link href="/" className="text-gray-300 hover:text-white transition-colors">Home</Link></li>
                <li><Link href="/sellers" className="text-gray-300 hover:text-white transition-colors">Sellers</Link></li>
                <li><Link href="/landlords" className="text-gray-300 hover:text-white transition-colors">Landlords</Link></li>
                <li><Link href="/about" className="text-gray-300 hover:text-white transition-colors">About Us</Link></li>
              </ul>
            </div>
            
            <div>
              <h4 className="text-lg font-medium mb-6 font-serif">Legal</h4>
              <ul className="space-y-4">
                <li><Link href="#" className="text-gray-300 hover:text-white transition-colors">Terms & Privacy</Link></li>
              </ul>
            </div>
            
            <div>
              <h4 className="text-lg font-medium mb-6 font-serif">Partners</h4>
              <ul className="space-y-4">
                <li><Link href="#" className="text-gray-300 hover:text-white transition-colors">Affiliate Program</Link></li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
