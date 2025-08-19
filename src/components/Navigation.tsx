import { useState, useEffect } from 'react';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { Menu, X, Search, MessageCircle, Star, ChevronRight, ChevronDown } from 'lucide-react';
import { Input } from '@/components/ui/input';
import { motion } from 'framer-motion';

const Navigation = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isVisible, setIsVisible] = useState(true);
  const [lastScrollY, setLastScrollY] = useState(0);
  const location = useLocation();
  const navigate = useNavigate();
  const isBlogPage = location.pathname === '/blog';

  // Menu items for the hamburger menu
  const menuItems = [
    { 
      name: 'Blog', 
      color: 'text-[#8B5CF6]', 
      hasSubmenu: true,
      submenu: [
        'Growth Strategies',
        'Business Psychology',
        'Funnel Building',
        'Offer Design',
        'Marketing Tactics'
      ]
    },
    { 
      name: 'Tools', 
      color: 'text-white', 
      hasSubmenu: true,
      submenu: [
        'Free Templates',
        'Swipe Files',
        'Offer Builders',
        'Customer Avatar Worksheets',
        'Funnel Scorecards'
      ]
    },
    { 
      name: 'Start Here', 
      color: 'text-[#F97316]', 
      hasSubmenu: true,
      submenu: [
        'Business Assessment',
        'Growth Roadmap',
        'Resource Library',
        'Quick Win Guides'
      ]
    },
    { 
      name: 'Community', 
      color: 'text-white', 
      hasSubmenu: false, 
      comingSoon: true 
    }
  ];

  const [activeSubmenu, setActiveSubmenu] = useState<number | null>(null);

  useEffect(() => {
    const controlNavbar = () => {
      if (typeof window !== 'undefined') {
        if (window.scrollY > lastScrollY && window.scrollY > 100) {
          setIsVisible(false);
        } else {
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

  // Special navigation for blog page
  if (isBlogPage) {
    return (
      <nav className={`bg-black border-b border-gray-800 sticky top-0 z-50 transition-transform duration-300 ${isVisible ? 'transform translate-y-0' : 'transform -translate-y-full'}`}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            {/* Left section with menu and logo */}
            <div className="flex items-center space-x-4">
              <button onClick={() => setIsOpen(!isOpen)} className="text-gray-400 hover:text-white">
                <Menu size={24} />
              </button>
              <Link to="/" className="flex items-center space-x-2">
                <div className="flex items-center">
                  <div className="w-6 h-6 bg-[#15803d] flex items-center justify-center rounded-l-md">
                    <div className="w-0 h-0 border-t-[6px] border-t-transparent border-r-[10px] border-r-white border-b-[6px] border-b-transparent" />
                  </div>
                  <div className="bg-[#15803d] h-6 flex items-center px-1 rounded-r-md">
                    <img 
                      src="/website logo favtdb.png" 
                      alt="TDB Logo" 
                      className="w-4 h-4 object-contain"
                    />
                  </div>
                </div>
                <span className="text-white font-medium">TheDrawingBoard</span>
              </Link>
            </div>

            {/* Center section with search */}
            <div className="flex-1 max-w-2xl mx-8">
              <div className="relative">
                <Input 
                  type="text"
                  placeholder="Enter keyword to search"
                  className="w-full bg-gray-900/50 border-gray-800 text-gray-300 placeholder:text-gray-500 pl-10 rounded-full"
                />
                <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-500" size={18} />
              </div>
            </div>

            {/* Right section with buttons */}
            <div className="flex items-center space-x-2">
              <div className="bg-[#4c2a85] rounded-full px-3 py-1.5 flex items-center space-x-2">
                <span className="text-white text-sm">Social</span>
                <div className="flex items-center space-x-1">
                  <button className="p-1 rounded-full bg-white/10 hover:bg-white/20">
                    <MessageCircle size={16} className="text-white" />
                  </button>
                  <button className="p-1 rounded-full bg-white/10 hover:bg-white/20">
                    <Star size={16} className="text-white" />
                  </button>
                  <button className="p-1 rounded-full bg-white/10 hover:bg-white/20">
                    <img src="/website logo favtdb.png" alt="Icon" className="w-4 h-4" />
                  </button>
                </div>
              </div>
              <Button 
                variant="ghost" 
                className="bg-[#4c2a85] text-white hover:bg-[#4c2a85]/80 rounded-full px-4"
              >
                Account
              </Button>
            </div>
          </div>

          {/* Mobile Menu for Blog */}
          {isOpen && (
            <>
              {/* Half screen overlay */}
              <div 
                className="fixed top-0 left-0 w-[50%] h-screen bg-[#0f0f0f] z-[100] shadow-2xl"
              >
                {/* Close button */}
                <button 
                  onClick={() => setIsOpen(false)} 
                  className="absolute top-6 right-6 text-gray-400 hover:text-white"
                >
                  <X size={24} />
                </button>

                {/* Menu content */}
                <div className="h-full w-full overflow-y-auto">
                  <div className="px-12 py-20">
                    <nav className="space-y-8">
                      {menuItems.map((item, index) => (
                        <div 
                          key={index} 
                          className="group"
                          onMouseLeave={() => setActiveSubmenu(null)}
                        >
                          <div 
                            className="flex items-center justify-between cursor-pointer group"
                            onClick={() => setActiveSubmenu(activeSubmenu === index ? null : index)}
                            onMouseEnter={() => setActiveSubmenu(index)}
                          >
                            <button 
                              className={`text-[35px] font-medium ${item.color} group-hover:opacity-80 transition-all duration-300`}
                            >
                              {item.name}
                            </button>
                            <div className="pl-4">
                              {item.hasSubmenu && (
                                <ChevronDown 
                                  className={`${item.color} w-6 h-6 opacity-50 group-hover:opacity-100 transition-all duration-300 transform ${activeSubmenu === index ? 'rotate-180' : ''}`} 
                                />
                              )}
                              {!item.hasSubmenu && (
                                <ChevronRight 
                                  className={`${item.color} w-6 h-6 opacity-50 group-hover:opacity-100 transition-all duration-300`} 
                                />
                              )}
                            </div>
                          </div>
                          
                          {item.comingSoon && (
                            <div className="text-gray-500 text-sm mt-1">coming soon</div>
                          )}
                          
                          {/* Submenu */}
                          {item.hasSubmenu && activeSubmenu === index && (
                            <div 
                              className="mt-4 ml-6 space-y-3"
                              onMouseEnter={() => setActiveSubmenu(index)}
                            >
                              {item.submenu?.map((subItem, subIndex) => (
                                <motion.div
                                  key={subIndex}
                                  initial={{ x: -20, opacity: 0 }}
                                  animate={{ x: 0, opacity: 1 }}
                                  transition={{ duration: 0.2, delay: subIndex * 0.05 }}
                                  className="group cursor-pointer"
                                >
                                  <div className="flex items-center space-x-3 group py-1">
                                    <div className={`w-1.5 h-1.5 rounded-full ${item.color} opacity-0 group-hover:opacity-100 transition-all duration-300`}></div>
                                    <span className={`text-lg text-gray-400 group-hover:${item.color} transition-all duration-300`}>
                                      {subItem}
                                    </span>
                                  </div>
                                </motion.div>
                              ))}
                            </div>
                          )}
                        </div>
                      ))}
                    </nav>
                  </div>
                </div>
              </div>
              {/* Backdrop for closing menu when clicking outside */}
              <div 
                className="fixed inset-0 bg-black/50 z-[99]"
                onClick={() => setIsOpen(false)}
              />
            </>
          )}
        </div>
      </nav>
    );
  }

  // Regular navigation for other pages
  const navItems = [
    { name: 'Home', path: '/' },
    { name: 'About', path: '/about' },
    { name: 'The Business Blueprint', path: '/blog' },
    { name: 'Success Stories', path: '/success-stories' },
    { name: 'Contact', path: '/contact' }
  ];

  return (
    <nav className={`bg-white/95 backdrop-blur-sm border-b border-gray-100 sticky top-0 z-50 transition-transform duration-300 ${isVisible ? 'transform translate-y-0' : 'transform -translate-y-full'}`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Logo */}
          <Link to="/" className="flex items-center space-x-2">
            <img 
              src="/website logo favtdb.png" 
              alt="TDB Logo" 
              className="w-8 h-8 object-contain"
            />
            <span className="font-satoshi text-xl text-[#143f26] text-left py-0 px-0 my-0 font-extrabold tracking-tighter mx-[9px] bg-lime-200 rounded-br-lg">
              Hey, Business owner!
            </span>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            {navItems.map(item => (
              <Link 
                key={item.name} 
                to={item.path} 
                className={`text-sm font-medium transition-colors hover:text-primary ${
                  location.pathname === item.path ? 'text-primary border-b-2 border-primary pb-1' : 'text-gray-600'
                }`}
              >
                {item.name}
              </Link>
            ))}
            <Button asChild className="bg-primary hover:bg-primary/90 text-white font-semibold">
              <a 
                href="https://wa.me/message" 
                target="_blank" 
                rel="noopener noreferrer" 
                className="text-[#bebebe] bg-[#606060] px-[15px] rounded-"
              >
                I'm Not Ready
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
        {isOpen && (
          <div className="md:hidden border-t border-gray-100 py-4">
            <div className="flex flex-col space-y-3">
              {navItems.map(item => (
                <Link
                  key={item.name}
                  to={item.path}
                  onClick={() => setIsOpen(false)}
                  className={`text-sm font-medium px-3 py-2 rounded-lg transition-colors ${
                    location.pathname === item.path ? 'text-primary bg-accent/20' : 'text-gray-600 hover:text-primary hover:bg-gray-50'
                  }`}
                >
                  {item.name}
                </Link>
              ))}
              <Button asChild className="bg-primary hover:bg-primary/90 text-white font-semibold mx-3">
                <a href="https://wa.me/message" target="_blank" rel="noopener noreferrer">
                  Start With This Plan
                </a>
              </Button>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navigation;