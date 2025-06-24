
import { useState, useEffect } from 'react';
import { Button } from '@/components/ui/button';
import { Mail, X } from 'lucide-react';

const StorySection = () => {
  const [scrollY, setScrollY] = useState(0);
  const [isLetterOpen, setIsLetterOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrollY(window.scrollY);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const textLines = [
    "Running a business isn't just about the logo, your Instagram grid, or some motivational quote on your wall.",
    "",
    "It's about staying in business.",
    "",
    "That means one thing above all else:",
    "Customers.",
    "",
    "You can survive poor branding. You can survive bad ads. You might even survive a bad month.",
    "",
    "But the moment you run out of customers — it's game over.",
    "",
    "Rule #1 of Business: Don't go out of business.",
    "",
    "And yet every day, thousands of businesses shut their doors. Not because they're not talented.",
    "Not because they're not good at what they do.",
    "",
    "But because they couldn't get customers.",
    "",
    "You don't have to be one of them."
  ];

  return (
    <section className="py-32 bg-gradient-to-br from-gray-50 to-white relative overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute inset-0" style={{
          backgroundImage: `radial-gradient(circle at 25px 25px, hsl(var(--primary)) 2px, transparent 0)`,
          backgroundSize: '50px 50px'
        }} />
      </div>
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">
          {/* Left side - Image with Envelope */}
          <div className="lg:sticky lg:top-32">
            <div className="relative">
              <img 
                src="https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?auto=format&fit=crop&w=800&q=80"
                alt="Business owner working"
                className="w-full h-[600px] object-cover rounded-3xl shadow-2xl"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-primary/20 to-transparent rounded-3xl"></div>
              
              {/* Envelope with Tilt */}
              <div className="absolute top-8 left-8 transform -rotate-12">
                <div className="relative bg-gradient-to-br from-green-800 to-green-900 p-6 rounded-lg shadow-2xl w-72 h-48 border border-green-700">
                  {/* Envelope styling */}
                  <div className="absolute inset-0 bg-gradient-to-br from-green-800/90 to-green-900/90 rounded-lg"></div>
                  
                  {/* Notification circle */}
                  <div className="absolute -top-2 -right-2 w-6 h-6 bg-red-500 rounded-full flex items-center justify-center">
                    <div className="w-3 h-3 bg-white rounded-full"></div>
                  </div>
                  
                  {/* Envelope content */}
                  <div className="relative z-10 text-white">
                    <div className="flex items-center gap-2 mb-3">
                      <Mail size={20} className="text-accent" />
                      <span className="text-accent font-black text-sm">NEW MESSAGE</span>
                    </div>
                    
                    <div className="space-y-2 text-sm">
                      <div className="font-black">From: TDB Founder - King Edmund</div>
                      <div>To: Business Owners</div>
                      <div className="text-gray-300">Date: June 2025</div>
                    </div>
                    
                    <Button 
                      onClick={() => setIsLetterOpen(true)}
                      className="mt-4 bg-accent text-primary hover:bg-accent/90 font-black text-sm px-4 py-2"
                    >
                      Read Letter
                    </Button>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Right side - Content */}
          <div className="space-y-8">
            <div className="text-center mb-16">
              <h2 className="text-4xl lg:text-6xl font-black text-gray-900 mb-8 leading-tight">
                The One Thing Every Business Needs to Stay Alive
              </h2>
              <div className="w-24 h-1 bg-primary mx-auto"></div>
            </div>

            {/* Notebook Effect - Only show when letter is opened */}
            {isLetterOpen && (
              <div className="relative bg-white rounded-2xl shadow-xl border-l-4 border-primary/20 min-h-[800px]" 
                   style={{
                     backgroundImage: `
                       linear-gradient(to right, #f8fafc 0px, #f8fafc 60px, transparent 60px),
                       linear-gradient(to bottom, transparent 0px, transparent 31px, #e2e8f0 31px, #e2e8f0 32px, transparent 32px)
                     `,
                     backgroundSize: '100% 32px'
                   }}>
                
                <div className="p-16 space-y-6 leading-relaxed">
                  <div className="mb-8">
                    <p className="font-black text-lg text-gray-700 mb-6 pl-8">Dear Business Owner,</p>
                  </div>
                  
                  <div className="space-y-6 text-lg lg:text-xl leading-relaxed pl-8" style={{ fontFamily: 'Kalam, cursive' }}>
                    {textLines.map((line, index) => {
                      const shouldShow = scrollY > (index * 50 + 800) || isLetterOpen;
                      
                      if (line === "") {
                        return <div key={index} className="h-4"></div>;
                      }
                      
                      if (line === "Customers.") {
                        return (
                          <p key={index} 
                             className={`font-black text-primary text-3xl transition-all duration-1000 transform ${
                               shouldShow ? 'opacity-100 translate-x-0' : 'opacity-0 translate-x-8'
                             }`}>
                            {line}
                          </p>
                        );
                      }
                      
                      if (line.includes("Rule #1")) {
                        return (
                          <div key={index} 
                               className={`bg-primary/10 p-6 rounded-xl transition-all duration-1000 transform ${
                                 shouldShow ? 'opacity-100 translate-x-0' : 'opacity-0 translate-x-8'
                               }`}>
                            <p className="font-black text-2xl text-primary">{line}</p>
                          </div>
                        );
                      }
                      
                      return (
                        <p key={index} 
                           className={`text-gray-700 transition-all duration-1000 transform ${
                             shouldShow ? 'opacity-100 translate-x-0' : 'opacity-0 translate-x-8'
                           }`}
                           style={{ 
                             transitionDelay: `${index * 100}ms`,
                             lineHeight: '1.8'
                           }}>
                          {line}
                        </p>
                      );
                    })}
                    
                    <div className={`text-center pt-8 transition-all duration-1000 transform ${
                      scrollY > 1800 || isLetterOpen ? 'opacity-100 translate-x-0' : 'opacity-0 translate-x-8'
                    }`}>
                      <p className="font-black text-primary text-2xl mb-6">
                        You don't have to be one of them.
                      </p>
                      <Button 
                        size="lg"
                        className="bg-primary hover:bg-primary/90 text-white font-black px-8 py-4 text-lg"
                      >
                        Get My Solution Now
                      </Button>
                    </div>
                  </div>
                </div>
              </div>
            )}
          </div>
        </div>
      </div>

      {/* Letter Modal Overlay */}
      {isLetterOpen && (
        <div className="fixed inset-0 bg-black/50 z-50 flex items-center justify-center p-4">
          <div className="bg-white rounded-2xl max-w-4xl w-full max-h-[90vh] overflow-y-auto relative">
            <button 
              onClick={() => setIsLetterOpen(false)}
              className="absolute top-4 right-4 z-10 bg-red-500 text-white rounded-full p-2 hover:bg-red-600 transition-colors"
            >
              <X size={20} />
            </button>
            
            <div className="p-8">
              <div className="text-center mb-8">
                <h3 className="text-3xl font-black text-gray-900 mb-4">A Letter From King Edmund</h3>
                <p className="text-gray-600">TDB Founder</p>
              </div>
              
              <div className="prose max-w-none" style={{ fontFamily: 'Kalam, cursive' }}>
                <div className="space-y-6 text-lg leading-relaxed">
                  <p className="font-black text-xl text-gray-700 mb-6">Dear Business Owner,</p>
                  
                  {textLines.map((line, index) => {
                    if (line === "") {
                      return <div key={index} className="h-4"></div>;
                    }
                    
                    if (line === "Customers.") {
                      return (
                        <p key={index} className="font-black text-primary text-3xl">
                          {line}
                        </p>
                      );
                    }
                    
                    if (line.includes("Rule #1")) {
                      return (
                        <div key={index} className="bg-primary/10 p-6 rounded-xl">
                          <p className="font-black text-2xl text-primary">{line}</p>
                        </div>
                      );
                    }
                    
                    return (
                      <p key={index} className="text-gray-700" style={{ lineHeight: '1.8' }}>
                        {line}
                      </p>
                    );
                  })}
                  
                  <div className="text-center pt-8">
                    <p className="font-black text-primary text-2xl mb-6">
                      You don't have to be one of them.
                    </p>
                    <Button 
                      size="lg"
                      className="bg-primary hover:bg-primary/90 text-white font-black px-8 py-4 text-lg"
                      onClick={() => setIsLetterOpen(false)}
                    >
                      Get My Solution Now
                    </Button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </section>
  );
};

export default StorySection;
