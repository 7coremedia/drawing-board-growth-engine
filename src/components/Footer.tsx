
import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Mail } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="bg-primary text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Brand */}
          <div className="col-span-1 md:col-span-2">
            <div className="flex items-center space-x-2 mb-4">
              <div className="w-8 h-8 bg-accent rounded-lg flex items-center justify-center">
                <span className="text-primary font-satoshi font-bold text-sm">TDB</span>
              </div>
              <span className="font-satoshi font-bold text-xl">TheDrawingBoard</span>
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
                  className="bg-accent text-primary hover:bg-accent/90 font-semibold"
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
                className="bg-accent text-primary hover:bg-accent/90 font-semibold"
              >
                <a href="https://wa.me/message" target="_blank" rel="noopener noreferrer">
                  Chat on WhatsApp
                </a>
              </Button>
            </div>
          </div>
        </div>

        <div className="border-t border-white/20 mt-8 pt-8 text-center text-gray-300">
          <p>&copy; 2025 TheDrawingBoard. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
