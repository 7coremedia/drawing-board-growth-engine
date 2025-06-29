import { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { Menu, X } from 'lucide-react';
const Navigation = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isVisible, setIsVisible] = useState(true);
  const [lastScrollY, setLastScrollY] = useState(0);
  const location = useLocation();
  const navItems = [{
    name: 'Home',
    path: '/'
  }, {
    name: 'About',
    path: '/about'
  }, {
    name: 'The Business Blueprint',
    path: '/blog'
  }, {
    name: 'Success Stories',
    path: '/success-stories'
  }, {
    name: 'Contact',
    path: '/contact'
  }];
  useEffect(() => {
    const controlNavbar = () => {
      if (typeof window !== 'undefined') {
        if (window.scrollY > lastScrollY && window.scrollY > 100) {
          // If scrolling down and past 100px, hide navbar
          setIsVisible(false);
        } else {
          // If scrolling up, show navbar
          setIsVisible(true);
        }
        setLastScrollY(window.scrollY);
      }
    };
    if (typeof window !== 'undefined') {
      window.addEventListener('scroll', controlNavbar);
      return () => {
        window.removeEventListener('scroll', controlNavbar);
      };
    }
  }, [lastScrollY]);
  return <nav className={`bg-white/95 backdrop-blur-sm border-b border-gray-100 sticky top-0 z-50 transition-transform duration-300 ${isVisible ? 'transform translate-y-0' : 'transform -translate-y-full'}`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Logo */}
          <Link to="/" className="flex items-center space-x-2">
            <div className="w-8 h-8 bg-primary flex items-center justify-center mx-0 my-0 rounded-xl py-[18px] px-[20px]">
              <span className="font-satoshi text-[#d5e185] font-extrabold text-sm text-center">TDB</span>
            </div>
            <span className="font-satoshi text-xl text-[#143f26] text-left py-0 px-0 my-0 font-extrabold tracking-tighter mx-[9px] bg-lime-200 rounded-br-lg ">Hey, Business owner!</span>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            {navItems.map(item => <Link key={item.name} to={item.path} className={`text-sm font-medium transition-colors hover:text-primary ${location.pathname === item.path ? 'text-primary border-b-2 border-primary pb-1' : 'text-gray-600'}`}>
                {item.name}
              </Link>)}
            <Button asChild className="bg-primary hover:bg-primary/90 text-white font-semibold">
              <a href="https://wa.me/message" target="_blank" rel="noopener noreferrer" className="text-[#bebebe] bg-[#606060] px-[15px] rounded-">I'm Not Ready
            </a>
            </Button>
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden">
            <button onClick={() => setIsOpen(!isOpen)} className="text-gray-600 hover:text-primary">
              {isOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>

        {/* Mobile Navigation */}
        {isOpen && <div className="md:hidden border-t border-gray-100 py-4">
            <div className="flex flex-col space-y-3">
              {navItems.map(item => <Link key={item.name} to={item.path} onClick={() => setIsOpen(false)} className={`text-sm font-medium px-3 py-2 rounded-lg transition-colors ${location.pathname === item.path ? 'text-primary bg-accent/20' : 'text-gray-600 hover:text-primary hover:bg-gray-50'}`}>
                  {item.name}
                </Link>)}
              <Button asChild className="bg-primary hover:bg-primary/90 text-white font-semibold mx-3">
                <a href="https://wa.me/message" target="_blank" rel="noopener noreferrer">
                  Start With This Plan
                </a>
              </Button>
            </div>
          </div>}
      </div>
    </nav>;
};
export default Navigation;