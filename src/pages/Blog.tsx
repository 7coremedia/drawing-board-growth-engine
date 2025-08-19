import Navigation from '@/components/Navigation';
import Footer from '@/components/Footer';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { ChevronRight } from 'lucide-react';
import { useEffect, useState, useRef } from 'react';

const Blog = () => {
  const [scale, setScale] = useState(0.5);
  const videoContainerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleScroll = () => {
      if (videoContainerRef.current) {
        const rect = videoContainerRef.current.getBoundingClientRect();
        const viewportHeight = window.innerHeight;
        const elementTop = rect.top;
        
        // Calculate how far the element is from the top of the viewport
        const distanceFromTop = elementTop / viewportHeight;
        
        // Scale from 0.5 to 0.8 as the element approaches the center of the viewport
        const newScale = Math.min(0.8, Math.max(0.5, 0.8 - (distanceFromTop * 0.3)));
        setScale(newScale);
      }
    };

    window.addEventListener('scroll', handleScroll);
    handleScroll(); // Initial check

    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <div className="flex flex-col min-h-screen" style={{ backgroundColor: '#ffffff' }}>
      <Navigation />
      
      {/* Hero Section */}
      <section className="w-full py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center flex justify-center items-center gap-2 mb-8">
            <a href="/blog" className="text-[48px] lg:text-[64px] font-satoshi font-black text-black leading-tight hover:underline">Blog</a>
            <span className="text-[48px] lg:text-[64px] font-satoshi font-black text-black leading-tight">(</span>
            <a href="/blueprints" className="text-[48px] lg:text-[64px] font-satoshi font-black text-[#8B5CF6] leading-tight hover:underline">Blueprint</a>
            <span className="text-[48px] lg:text-[64px] font-satoshi font-black text-black leading-tight">)</span>
          </div>
          <div className="text-center">
            <h1 className="text-[90px] lg:text-[120px] font-satoshi font-black mb-2 text-black leading-tight">
              If you have the<br />
              <span className="text-[#8B5CF6] font-black block">Blueprint?</span>
            </h1>
            <p className="text-[25px] lg:text-[25px] text-gray-600 max-w-3xl mx-auto font-light mb-6">
              How fast would you build?
            </p>
            <Button 
              className="bg-[#8B5CF6] hover:bg-[#7C3AED] text-white font-medium px-8 py-3 rounded-full text-lg transition-all duration-300"
            >
              See all Blueprints
            </Button>
          </div>
        </div>
      </section>

      {/* Video Container */}
      <section className="w-full pb-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div 
            ref={videoContainerRef}
            className="w-full transition-transform duration-300 ease-out"
            style={{ 
              transform: `scale(${scale})`,
              transformOrigin: 'center center'
            }}
          >
            <div className="aspect-video bg-gray-900 rounded-[32px] overflow-hidden">
              {/* Replace this with your actual video component */}
              <div className="w-full h-full flex items-center justify-center">
                <div className="w-16 h-16 bg-white/10 rounded-full flex items-center justify-center">
                  <div className="w-12 h-12 bg-white rounded-full flex items-center justify-center cursor-pointer hover:scale-105 transition-transform">
                    <svg 
                      className="w-6 h-6 text-black" 
                      fill="currentColor" 
                      viewBox="0 0 20 20"
                    >
                      <path d="M6.3 2.841A1.5 1.5 0 004 4.11v11.78a1.5 1.5 0 002.3 1.269l9.344-5.89a1.5 1.5 0 000-2.538L6.3 2.84z" />
                    </svg>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Latest Episodes Section */}
      <section className="w-full pb-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Header with Live Badge */}
          <div className="flex items-start justify-between mb-12">
            <div className="space-y-2">
              <h2 className="text-[40px] font-bold text-black leading-tight">
                Latest: On The Business Blueprint
              </h2>
              <h3 className="text-[32px] font-bold text-black/90">
                Brand: Eddie Hamilton
              </h3>
            </div>
            <div className="flex items-center gap-2">
              <span className="text-black text-sm font-medium uppercase">LIVE</span>
              <div className="w-2.5 h-2.5 rounded-full bg-red-600 animate-pulse"></div>
            </div>
          </div>

          {/* Episodes Grid */}
          <div className="w-full">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-x-8 gap-y-8 mb-12">
              {/* Episode 1 */}
              <div className="space-y-3">
                {/* Thumbnail */}
                <div className="bg-[#5F3696] rounded-3xl aspect-[16/9] overflow-hidden">
                  {/* Replace with actual thumbnail image */}
                  <div className="w-full h-full flex items-center justify-center">
                    <div className="w-14 h-14 bg-white/10 rounded-full flex items-center justify-center">
                      <div className="w-10 h-10 bg-white rounded-full flex items-center justify-center">
                        <svg className="w-5 h-5 text-black" fill="currentColor" viewBox="0 0 20 20">
                          <path d="M6.3 2.841A1.5 1.5 0 004 4.11v11.78a1.5 1.5 0 002.3 1.269l9.344-5.89a1.5 1.5 0 000-2.538L6.3 2.84z" />
                        </svg>
                      </div>
                    </div>
                  </div>
                </div>
                {/* Title and Author */}
                <div className="space-y-2">
                  <h3 className="text-[18px] text-black font-medium leading-relaxed hover:text-black/90 cursor-pointer">
                    Phycology of Progressive disclosure For brand vitality. (Episode 3)
                  </h3>
                  <div className="flex items-center gap-3">
                    <div className="w-8 h-8 bg-[#1E1E1E] rounded-lg flex items-center justify-center">
                      <img src="/website logo favtdb.png" alt="InsideTheBrand" className="w-5 h-5" />
                    </div>
                    <span className="text-black/70 text-[14px]">InsideTheBrand.</span>
                  </div>
                </div>
              </div>

              {/* Episode 2 */}
              <div className="space-y-3">
                {/* Thumbnail */}
                <div className="bg-[#5F3696] rounded-3xl aspect-[16/9] overflow-hidden">
                  {/* Replace with actual thumbnail image */}
                  <div className="w-full h-full flex items-center justify-center">
                    <div className="w-14 h-14 bg-white/10 rounded-full flex items-center justify-center">
                      <div className="w-10 h-10 bg-white rounded-full flex items-center justify-center">
                        <svg className="w-5 h-5 text-black" fill="currentColor" viewBox="0 0 20 20">
                          <path d="M6.3 2.841A1.5 1.5 0 004 4.11v11.78a1.5 1.5 0 002.3 1.269l9.344-5.89a1.5 1.5 0 000-2.538L6.3 2.84z" />
                        </svg>
                      </div>
                    </div>
                  </div>
                </div>
                {/* Title and Author */}
                <div className="space-y-2">
                  <h3 className="text-[18px] text-black font-medium leading-relaxed hover:text-black/90 cursor-pointer">
                    System vs People: The one way that thing that keeps a brand. (Episode 2)
                  </h3>
                  <div className="flex items-center gap-3">
                    <div className="w-8 h-8 bg-[#1E1E1E] rounded-lg flex items-center justify-center">
                      <img src="/website logo favtdb.png" alt="InsideTheBrand" className="w-5 h-5" />
                    </div>
                    <span className="text-black/70 text-[14px]">InsideTheBrand.</span>
                  </div>
                </div>
              </div>
            </div>

            {/* Action Buttons */}
            <div className="flex flex-col items-center gap-6 max-w-xl mx-auto">
              <Button 
                variant="secondary"
                className="bg-white text-black rounded-[12px] px-8 py-3 text-[16px] font-medium hover:bg-white/90 transition-colors w-full max-w-[280px]"
              >
                View full episode
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Communities Section */}
      <section className="w-full pb-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-left mb-12">
            <h2 className="text-4xl lg:text-[64px] font-satoshi font-bold text-black leading-tight">
              Coming soon!
            </h2>
            <p className="text-2xl lg:text-4xl text-black font-light">
              TDB Communities
            </p>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-7 gap-4">
            {[...Array(7)].map((_, index) => (
              <div 
                key={index} 
                className="bg-white/5 rounded-3xl aspect-square flex items-center justify-center p-4 hover:bg-white/10 transition-all duration-300"
              >
                <div className="w-12 h-12 bg-white/10 rounded-full flex items-center justify-center">
                  <img 
                    src="/website logo favtdb.png" 
                    alt={`Logo ${index + 1}`} 
                    className="w-6 h-6 object-contain"
                  />
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <Footer customBg="black" accentColor="#563188" textColor="white" />
    </div>
  );
};

export default Blog;
