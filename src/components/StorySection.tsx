
import { useState, useEffect } from 'react';
import { Button } from '@/components/ui/button';
import { Mail, ArrowRight } from 'lucide-react';

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
        <div className="text-center mb-16">
          <h2 className="text-4xl lg:text-6xl font-black text-gray-900 mb-8 leading-tight">
            One Thing Every Business Needs to Stay Alive
          </h2>
          <div className="w-24 h-1 bg-primary mx-auto"></div>
        </div>

        {/* Full Width Green Envelope */}
        <div className="flex justify-center mb-16">
          <div className="w-full max-w-4xl">
            <div className="bg-gradient-to-br from-green-800 to-green-900 p-8 rounded-lg glow w-full h-64 border border-green-700 flex items-center justify-between">
              {/* Notification circle */}
              <div className="absolute top-4 right-4 w-6 h-6 bg-red-500 rounded-full flex items-center justify-center">
                <div className="w-2 h-2 bg-white rounded-full"></div>
              </div>
              
              {/* Left side - Address and sender info */}
              <div className="text-white flex-1">
                <div className="flex items-center gap-2 mb-6">
                  <Mail size={24} className="text-accent" />
                  <span className="text-accent font-black text-sm">1 NEW NOTIFICATION - JUN 25</span>
                </div>
                
                <div className="space-y-3 text-lg">
                  <div className="font-black text-xl">From: TDB Founder - King Edmund</div>
                  <div className="text-gray-300">To: Business Owners</div>
                  <div className="text-gray-300">Subject: The One Thing Every Business Needs</div>
                </div>
              </div>
              
              {/* Right side - Read Letter button with arrow */}
              <div className="flex-shrink-0 ml-8">
                <Button 
                  onClick={() => setIsLetterOpen(true)} 
                  className="bg-accent text-primary hover:bg-accent/90 font-black text-lg px-8 py-4 rounded-xl flex items-center gap-3"
                >
                  Read Letter
                  <ArrowRight size={20} />
                </Button>
              </div>
            </div>
          </div>
        </div>

        {/* Letter Content - Rolls down on same page */}
        {isLetterOpen && (
          <div className="animate-roll-down overflow-hidden">
            <div className="max-w-4xl mx-auto py-16">
              <div className="space-y-8 text-lg lg:text-xl leading-relaxed" style={{
                fontFamily: 'Satoshi, sans-serif'
              }}>
                <div className="mb-8">
                  <p className="font-black text-xl text-gray-700 mb-6">Dear Business Owner,</p>
                </div>
                
                {textLines.map((line, index) => {
                  const shouldShow = scrollY > index * 50 + 800 || isLetterOpen;
                  if (line === "") {
                    return <div key={index} className="h-6"></div>;
                  }
                  if (line === "Customers.") {
                    return (
                      <p key={index} className={`font-black text-primary text-3xl lg:text-4xl transition-all duration-1000 transform ${shouldShow ? 'opacity-100 translate-x-0' : 'opacity-0 translate-x-8'}`}>
                        {line}
                      </p>
                    );
                  }
                  if (line.includes("Rule #1")) {
                    return (
                      <div key={index} className={`bg-primary/10 p-8 rounded-xl glow transition-all duration-1000 transform ${shouldShow ? 'opacity-100 translate-x-0' : 'opacity-0 translate-x-8'}`}>
                        <p className="font-black text-2xl lg:text-3xl text-primary">{line}</p>
                      </div>
                    );
                  }
                  return (
                    <p key={index} className={`text-gray-700 transition-all duration-1000 transform ${shouldShow ? 'opacity-100 translate-x-0' : 'opacity-0 translate-x-8'}`} style={{
                      transitionDelay: `${index * 100}ms`,
                      lineHeight: '1.8'
                    }}>
                      {line}
                    </p>
                  );
                })}
                
                <div className={`text-center pt-12 transition-all duration-1000 transform ${scrollY > 1800 || isLetterOpen ? 'opacity-100 translate-x-0' : 'opacity-0 translate-x-8'}`}>
                  <p className="font-black text-primary text-2xl lg:text-3xl mb-8">
                    You don't have to be one of them.
                  </p>
                  <Button size="lg" className="bg-primary hover:bg-primary/90 text-white font-black px-12 py-4 text-lg glow">
                    Get My Solution Now
                  </Button>
                </div>
              </div>
            </div>
          </div>
        )}
      </div>
    </section>
  );
};

export default StorySection;
