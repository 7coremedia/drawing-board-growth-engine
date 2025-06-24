
import { useState, useEffect } from 'react';
import { X, ArrowDown } from 'lucide-react';
import { Button } from '@/components/ui/button';

interface EngineData {
  id: string;
  title: string;
  icon: string;
  description: string;
  content: {
    headline: string;
    details: string[];
    cta: string;
  };
}

interface InteractiveEnginePopupProps {
  engines: EngineData[];
  activeEngine: string | null;
  onEngineHover: (id: string | null) => void;
  onEngineClick: (id: string) => void;
  expandedEngine: string | null;
  onCloseExpanded: () => void;
}

const InteractiveEnginePopup = ({ 
  engines, 
  activeEngine, 
  onEngineHover, 
  onEngineClick,
  expandedEngine,
  onCloseExpanded 
}: InteractiveEnginePopupProps) => {
  const [scrollProgress, setScrollProgress] = useState(0);

  useEffect(() => {
    if (!expandedEngine) return;

    const handleScroll = () => {
      const popup = document.getElementById('expanded-popup');
      if (!popup) return;

      const scrollTop = popup.scrollTop;
      const scrollHeight = popup.scrollHeight - popup.clientHeight;
      const progress = scrollTop / scrollHeight;
      setScrollProgress(progress);
    };

    const popup = document.getElementById('expanded-popup');
    popup?.addEventListener('scroll', handleScroll);
    return () => popup?.removeEventListener('scroll', handleScroll);
  }, [expandedEngine]);

  const getEngineContent = (id: string) => {
    switch (id) {
      case 'flow':
        return {
          headline: "The 7Flow Engine™ - Your Customer Acquisition Machine",
          details: [
            "Content that actually converts and commands attention in crowded feeds",
            "Lead capture systems that feel frictionless but capture everything",
            "Follow-up sequences that close deals while you sleep",
            "Psychology-based messaging that triggers buying decisions",
            "7 qualified customers delivered every 30 days, guaranteed"
          ],
          cta: "Get Your 7 Customers Free"
        };
      case 'godfather':
        return {
          headline: "The Godfather Offer System™ - Offers They Can't Refuse",
          details: [
            "Create irresistible offers that make competitors look amateur",
            "Psychological triggers that bypass price objections completely",
            "Value stacking that makes saying 'no' feel impossible",
            "Risk reversal strategies that eliminate buyer hesitation",
            "Offer positioning that has customers begging to buy"
          ],
          cta: "Build My Godfather Offer"
        };
      case 'magnet':
        return {
          headline: "The Client Magnet Blueprint™ - 24/7 Customer Attraction",
          details: [
            "Turn your business into a customer attraction machine",
            "Reputation systems that build trust before you even speak",
            "Referral engines that create exponential growth",
            "Retention strategies that turn customers into evangelists",
            "Positioning that makes you the obvious choice in your market"
          ],
          cta: "Activate My Client Magnet"
        };
      case 'growth':
        return {
          headline: "TDB Growth Engine™ - Scale Beyond Your Wildest Dreams",
          details: [
            "Proven frameworks that scale from struggling to thriving",
            "Systems that work while you focus on what you love",
            "Growth strategies tailored to your specific industry",
            "Revenue optimization that maximizes every customer",
            "Business transformation that creates lasting success"
          ],
          cta: "Ignite My Growth Engine"
        };
      default:
        return { headline: "", details: [], cta: "" };
    }
  };

  if (expandedEngine) {
    const content = getEngineContent(expandedEngine);
    return (
      <div className="fixed inset-0 z-50 bg-black/90 backdrop-blur-sm">
        <div 
          id="expanded-popup"
          className="h-full overflow-y-auto scrollbar-hide"
          style={{
            background: `linear-gradient(135deg, 
              hsl(var(--primary)) 0%, 
              hsl(var(--primary) / 0.9) 50%, 
              hsl(var(--accent) / 0.1) 100%)`
          }}
        >
          {/* Progress Bar */}
          <div className="fixed top-0 left-0 right-0 h-1 bg-white/20 z-50">
            <div 
              className="h-full bg-accent transition-all duration-300"
              style={{ width: `${scrollProgress * 100}%` }}
            />
          </div>

          {/* Close Button */}
          <button
            onClick={onCloseExpanded}
            className="fixed top-6 right-6 z-50 bg-white/10 hover:bg-white/20 text-white p-3 rounded-full transition-all duration-300 backdrop-blur-sm"
          >
            <X size={24} />
          </button>

          <div className="min-h-screen px-6 py-20">
            <div className="max-w-4xl mx-auto text-white">
              {/* Hero Section */}
              <div className="text-center mb-16 animate-fade-in">
                <div className="text-8xl mb-8">
                  {engines.find(e => e.id === expandedEngine)?.icon}
                </div>
                <h1 className="text-5xl lg:text-7xl font-satoshi font-bold mb-8 leading-tight">
                  {content.headline}
                </h1>
                <div className="w-24 h-1 bg-accent mx-auto mb-8"></div>
              </div>

              {/* Content Sections */}
              <div className="space-y-16 mb-20">
                {content.details.map((detail, index) => (
                  <div 
                    key={index}
                    className="bg-white/10 backdrop-blur-sm rounded-2xl p-8 hover:bg-white/15 transition-all duration-500"
                    style={{ animationDelay: `${index * 200}ms` }}
                  >
                    <div className="flex items-start space-x-6">
                      <div className="bg-accent text-primary w-12 h-12 rounded-full flex items-center justify-center font-satoshi font-bold text-xl">
                        {index + 1}
                      </div>
                      <p className="text-xl leading-relaxed flex-1">
                        {detail}
                      </p>
                    </div>
                  </div>
                ))}
              </div>

              {/* CTA Section */}
              <div className="text-center bg-accent/20 backdrop-blur-sm rounded-3xl p-12">
                <h3 className="text-3xl font-satoshi font-bold mb-6">
                  Ready to Transform Your Business?
                </h3>
                <Button 
                  size="lg"
                  className="bg-accent text-primary hover:bg-accent/90 font-satoshi font-bold px-12 py-6 text-xl rounded-full"
                >
                  {content.cta}
                </Button>
              </div>

              {/* Scroll Indicator */}
              <div className="text-center mt-16">
                <ArrowDown className="animate-bounce mx-auto text-accent" size={32} />
                <p className="text-accent mt-4">Scroll to explore more</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
      {engines.map((engine, index) => (
        <div
          key={engine.id}
          className={`relative overflow-hidden cursor-pointer transition-all duration-700 ${
            activeEngine === engine.id 
              ? 'scale-105 z-20' 
              : activeEngine && activeEngine !== engine.id 
                ? 'scale-95 opacity-50' 
                : 'scale-100'
          }`}
          onMouseEnter={() => onEngineHover(engine.id)}
          onMouseLeave={() => onEngineHover(null)}
          onClick={() => onEngineClick(engine.id)}
        >
          {/* Base Card */}
          <div className={`bg-white rounded-2xl p-8 shadow-lg border-2 transition-all duration-500 ${
            activeEngine === engine.id 
              ? 'border-primary shadow-2xl' 
              : 'border-gray-100 hover:border-primary/30'
          }`}>
            <div className="text-4xl mb-4">{engine.icon}</div>
            <h3 className="text-xl font-satoshi font-bold text-primary mb-3">
              {engine.title}
            </h3>
            <p className="text-gray-600">{engine.description}</p>
          </div>

          {/* Hover Popup */}
          {activeEngine === engine.id && (
            <div className="absolute inset-0 bg-primary text-white rounded-2xl p-8 animate-scale-in shadow-2xl border-2 border-accent">
              <div className="text-4xl mb-4">{engine.icon}</div>
              <h3 className="text-xl font-satoshi font-bold mb-4">
                {engine.title}
              </h3>
              <div className="space-y-3 mb-6">
                {getEngineContent(engine.id).details.slice(0, 3).map((detail, i) => (
                  <div key={i} className="flex items-start space-x-3">
                    <div className="w-2 h-2 bg-accent rounded-full mt-2 flex-shrink-0"></div>
                    <p className="text-sm">{detail}</p>
                  </div>
                ))}
              </div>
              <Button 
                size="sm"
                className="bg-accent text-primary hover:bg-accent/90 font-satoshi font-semibold w-full"
              >
                Learn More
              </Button>
              <p className="text-xs text-center mt-3 text-accent">
                Click to expand • Scroll to explore
              </p>
            </div>
          )}
        </div>
      ))}
    </div>
  );
};

export default InteractiveEnginePopup;
