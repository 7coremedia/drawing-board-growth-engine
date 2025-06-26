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
  const textLines = ["Running a business isn't just about the logo, your Instagram grid, or some motivational quote on your wall.", "", "It's about staying in business.", "", "That means one thing above all else:", "Customers.", "", "You can survive poor branding. You can survive bad ads. You might even survive a bad month.", "", "But the moment you run out of customers — it's game over.", "", "Rule #1 of Business: Don't go out of business.", "", "And yet every day, thousands of businesses shut their doors. Not because they're not talented.", "Not because they're not good at what they do.", "", "But because they couldn't get customers.", "", "You don't have to be one of them."];
  return <section className="bg-gradient-to-br from-gray-50 to-white relative overflow-hidden py-[3px]">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-5">
        <div style={{
        backgroundImage: `radial-gradient(circle at 25px 25px, hsl(var(--primary)) 2px, transparent 0)`,
        backgroundSize: '50px 50px'
      }} className="absolute inset-0 py-[184px] px-0" />
      </div>
      
      
    </section>;
};
export default StorySection;