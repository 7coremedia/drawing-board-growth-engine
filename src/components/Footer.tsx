import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Mail } from 'lucide-react';

interface FooterProps {
  customBg?: string;
  accentColor?: string;
  textColor?: string;
}

const Footer = ({ customBg = "#163b24", accentColor = "#b9d486", textColor = "white" }: FooterProps) => {
  return (
    <footer className={`${customBg === "black" ? "bg-black" : "bg-primary"} text-${textColor}`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Brand */}
          <div className="col-span-1 md:col-span-2">
            <div className="flex items-center space-x-2 mb-4">
              <img 
                src="/Website logo for green bgtdb.png" 
                alt="TDB Logo" 
                className="w-8 h-8 object-contain"
              />
              <span className={`font-satoshi text-xl text-left py-0 px-0 my-0 font-extrabold tracking-tighter mx-[9px] rounded-br-lg`} style={{ backgroundColor: accentColor, color: textColor }}>Hey, Business owner!</span>
            </div>
            <p className="text-gray-300 mb-6 max-w-md">
              We help small businesses get 7 paying customers a month. Or you don't pay.
              From overlooked to overbooked.
            </p>
            
            {/* Newsletter Signup */}
            <div className="mb-6">
              <h4 className="font-semibold mb-3">Get weekly customer acquisition strategies</h4>
              <div className="flex gap-2 max-w-sm">
                <Input
                  type="email"
                  placeholder="Your email address"
                  className="bg-white/10 border-white/20 text-white placeholder:text-gray-300"
                />
                <Button 
                  size="sm" 
                  className="font-semibold"
                  style={{ backgroundColor: accentColor, color: textColor }}
                >
                  <Mail size={16} />
                </Button>
              </div>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-semibold mb-4">Quick Links</h4>
            <ul className="space-y-2">
              <li>
                <Link to="/about" className="text-gray-300 hover:text-white transition-colors">
                  About
                </Link>
              </li>
              <li>
                <Link to="/blog" className="text-gray-300 hover:text-white transition-colors">
                  The Business Blueprint
                </Link>
              </li>
              <li>
                <Link to="/success-stories" className="text-gray-300 hover:text-white transition-colors">
                  Success Stories
                </Link>
              </li>
              <li>
                <Link to="/contact" className="text-gray-300 hover:text-white transition-colors">
                  Contact
                </Link>
              </li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="font-semibold mb-4">Get In Touch</h4>
            <div className="space-y-3">
              <a 
                href="mailto:thedrawingboad.news@gmail.com"
                className="text-gray-300 hover:text-white transition-colors block"
              >
                thedrawingboad.news@gmail.com
              </a>
              <Button 
                asChild
                size="sm"
                className="font-semibold"
                style={{ backgroundColor: accentColor, color: textColor }}
              >
                <a href="https://wa.me/message" target="_blank" rel="noopener noreferrer">
                  Chat on WhatsApp
                </a>
              </Button>
            </div>
          </div>
        </div>

        <div className={`border-t border-white/20 mt-8 pt-8 text-center text-gray-300`}>
          <p>&copy; 2025 TheDrawingBoard. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
