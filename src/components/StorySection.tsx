
import { useState, useEffect } from 'react';
import { Button } from '@/components/ui/button';

const StorySection = () => {
  const [scrollY, setScrollY] = useState(0);

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
          {/* Left side - Image */}
          <div className="lg:sticky lg:top-32">
            <div className="relative">
              <img 
                src="https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?auto=format&fit=crop&w=800&q=80"
                alt="Business owner working"
                className="w-full h-[600px] object-cover rounded-3xl shadow-2xl"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-primary/20 to-transparent rounded-3xl"></div>
            </div>
          </div>

          {/* Right side - Content */}
          <div className="space-y-8">
            <div className="text-center mb-16">
              <h2 className="text-4xl lg:text-6xl font-satoshi font-bold text-gray-900 mb-8 leading-tight">
                The One Thing Every Business Needs to Stay Alive
              </h2>
              <div className="w-24 h-1 bg-primary mx-auto"></div>
            </div>

            {/* Notebook Effect */}
            <div className="relative bg-white p-12 rounded-2xl shadow-xl border-l-4 border-primary/20" 
                 style={{
                   backgroundImage: `
                     linear-gradient(to right, #f8fafc 0px, #f8fafc 40px, transparent 40px),
                     linear-gradient(to bottom, transparent 0px, transparent 31px, #e2e8f0 31px, #e2e8f0 32px, transparent 32px)
                   `,
                   backgroundSize: '100% 32px',
                   minHeight: '600px'
                 }}>
              
              <div className="space-y-6 text-lg lg:text-xl leading-relaxed pl-8">
                {textLines.map((line, index) => {
                  const shouldShow = scrollY > (index * 50 + 800);
                  
                  if (line === "") {
                    return <div key={index} className="h-4"></div>;
                  }
                  
                  if (line === "Customers.") {
                    return (
                      <p key={index} 
                         className={`font-satoshi font-bold text-primary text-3xl transition-all duration-1000 ${
                           shouldShow ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
                         }`}>
                        {line}
                      </p>
                    );
                  }
                  
                  if (line.includes("Rule #1")) {
                    return (
                      <div key={index} 
                           className={`bg-primary/10 p-6 rounded-xl transition-all duration-1000 ${
                             shouldShow ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
                           }`}>
                        <p className="font-satoshi font-bold text-2xl text-primary">{line}</p>
                      </div>
                    );
                  }
                  
                  return (
                    <p key={index} 
                       className={`text-gray-700 transition-all duration-1000 ${
                         shouldShow ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
                       }`}
                       style={{ transitionDelay: `${index * 100}ms` }}>
                      {line}
                    </p>
                  );
                })}
                
                <div className={`text-center pt-8 transition-all duration-1000 ${
                  scrollY > 1800 ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
                }`}>
                  <p className="font-satoshi font-bold text-primary text-2xl mb-6">
                    You don't have to be one of them.
                  </p>
                  <Button 
                    size="lg"
                    className="bg-primary hover:bg-primary/90 text-white font-satoshi font-bold px-8 py-4 text-lg"
                  >
                    Get My Solution Now
                  </Button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default StorySection;
