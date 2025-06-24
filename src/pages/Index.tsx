
import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import Navigation from '@/components/Navigation';
import Footer from '@/components/Footer';
import PricingTable from '@/components/PricingTable';
import InteractiveEnginePopup from '@/components/InteractiveEnginePopup';
import StorySection from '@/components/StorySection';
import PainPointsSection from '@/components/PainPointsSection';
import ValuePitchSection from '@/components/ValuePitchSection';
import PricingRevealSection from '@/components/PricingRevealSection';
import { Mail, X } from 'lucide-react';

const Index = () => {
  const [activeEngine, setActiveEngine] = useState<string | null>(null);
  const [expandedEngine, setExpandedEngine] = useState<string | null>(null);
  const [isLetterOpen, setIsLetterOpen] = useState(false);

  const engines = [
    {
      id: 'flow',
      title: 'The 7Flow Engine™',
      description: 'Our proprietary system that guarantees 7 new customers every month or your money back.',
      icon: '🎯',
      content: {
        headline: 'The 7Flow Engine™ - Customer Acquisition System',
        details: [
          'Content that actually converts and drives action',
          'Messaging that commands attention and builds trust',
          'Lead capture systems that are completely frictionless',
          'Follow-up sequences that close deals automatically',
          'Strategy tailored to your audience psychology',
          'Real-time optimization based on performance data'
        ],
        cta: 'Get My 7 Customers Now'
      }
    },
    {
      id: 'godfather',
      title: 'The Godfather Offer System™',
      description: 'Create irresistible offers that make customers say yes before you even finish talking.',
      icon: '💰',
      content: {
        headline: 'The Godfather Offer System™ - Irresistible Proposals',
        details: [
          'Psychological triggers that create instant desire',
          'Value stacking that makes price irrelevant',
          'Risk reversal that eliminates customer hesitation',
          'Urgency mechanisms that drive immediate action',
          'Bonus structures that increase perceived value',
          'Guarantee frameworks that build complete trust'
        ],
        cta: 'Create My Godfather Offer'
      }
    },
    {
      id: 'magnet',
      title: 'The Client Magnet Blueprint™',
      description: 'Turn your business into a customer attraction machine that works 24/7.',
      icon: '🧲',
      content: {
        headline: 'The Client Magnet Blueprint™ - Attraction System',
        details: [
          'Brand positioning that makes you the obvious choice',
          'Content strategies that build authority and trust',
          'Social proof systems that validate your expertise',
          'Referral programs that turn customers into advocates',
          'Reputation management that protects your image',
          'Community building that creates loyal followers'
        ],
        cta: 'Build My Client Magnet'
      }
    },
    {
      id: 'growth',
      title: 'TDB Growth Engine™',
      description: 'Scale from struggling to thriving with our proven business growth framework.',
      icon: '📈',
      content: {
        headline: 'TDB Growth Engine™ - Business Scaling System',
        details: [
          'Revenue optimization strategies that maximize profit',
          'Systems automation that saves time and money',
          'Team building frameworks for sustainable growth',
          'Market expansion tactics for new opportunities',
          'Operational efficiency improvements',
          'Long-term sustainability planning and execution'
        ],
        cta: 'Scale My Business Now'
      }
    },
  ];

  const targetAudience = [
    { title: 'Fashion & Beauty Brands', icon: '💄', description: 'Scale your style empire' },
    { title: 'Gym/Fitness Owners', icon: '💪', description: 'Build your fitness community' },
    { title: 'Coaches & Experts', icon: '🎓', description: 'Monetize your expertise' },  
    { title: 'Local Service Providers', icon: '🔧', description: 'Dominate your local market' },
    { title: 'Online Course Creators', icon: '📚', description: 'Turn knowledge into profit' },
  ];

  const handleEngineClick = (engineId: string) => {
    setExpandedEngine(engineId);
  };

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
    <div className="min-h-screen bg-white">
      <Navigation />
      
      {/* Hero Section with Full Screen Letter */}
      <section className="hero-gradient tdb-pattern min-h-screen flex items-center justify-center relative">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-20 items-center min-h-[80vh]">
            <div className="space-y-12">
              <h1 className="text-5xl lg:text-7xl font-black text-gray-900 mb-8 leading-[0.9] tracking-tight">
                Struggling to Get{' '}
                <span className="text-primary font-black">Clients?</span>
              </h1>
              <p className="text-2xl lg:text-3xl text-gray-600 mb-12 font-bold leading-tight">
                We help small businesses get{' '}
                <span className="text-primary font-black">7 paying customers</span>{' '}
                a month. Or you don't pay.
              </p>
              <div className="flex flex-col sm:flex-row gap-6">
                <Button 
                  size="lg" 
                  className="bg-primary hover:bg-primary/90 text-white font-black px-10 py-6 text-xl glow-element"
                  asChild
                >
                  <a href="#pricing">Start With This Plan</a>
                </Button>
                <Button 
                  size="lg" 
                  variant="outline" 
                  className="border-primary text-primary hover:bg-primary hover:text-white font-black px-10 py-6 text-xl glow-element"
                  asChild
                >
                  <a href="https://wa.me/message" target="_blank" rel="noopener noreferrer">
                    Chat on WhatsApp
                  </a>
                </Button>
              </div>
            </div>
            
            {/* Full Screen Letter */}
            <div className="relative flex items-center justify-center">
              <div className="relative w-full max-w-lg transform rotate-12 hover:rotate-6 transition-transform duration-500">
                <div className="relative bg-gradient-to-br from-green-800 to-green-900 p-8 rounded-lg glow-element w-full h-80 border border-green-700">
                  {/* Envelope styling */}
                  <div className="absolute inset-0 bg-gradient-to-br from-green-800/90 to-green-900/90 rounded-lg"></div>
                  
                  {/* Notification circle */}
                  <div className="absolute -top-3 -right-3 w-8 h-8 bg-red-500 rounded-full flex items-center justify-center">
                    <div className="w-4 h-4 bg-white rounded-full"></div>
                  </div>
                  
                  {/* Envelope content */}
                  <div className="relative z-10 text-white h-full flex flex-col justify-between">
                    <div>
                      <div className="flex items-center gap-3 mb-6">
                        <Mail size={24} className="text-accent" />
                        <span className="text-accent font-black text-lg">NEW MESSAGE</span>
                      </div>
                      
                      <div className="space-y-4 text-lg">
                        <div className="font-black">From: TDB Founder - King Edmund</div>
                        <div>To: Business Owners</div>
                        <div className="text-gray-300">Date: June 2025</div>
                      </div>
                    </div>
                    
                    <Button 
                      onClick={() => setIsLetterOpen(true)}
                      className="bg-accent text-primary hover:bg-accent/90 font-black text-lg px-6 py-3 w-full"
                    >
                      Read Letter
                    </Button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Letter Modal */}
        {isLetterOpen && (
          <div className="fixed inset-0 bg-black/60 z-50 flex items-center justify-center p-4">
            <div className="bg-white rounded-2xl max-w-6xl w-full max-h-[95vh] overflow-y-auto relative glow-element">
              <button 
                onClick={() => setIsLetterOpen(false)}
                className="absolute top-6 right-6 z-10 bg-red-500 text-white rounded-full p-3 hover:bg-red-600 transition-colors"
              >
                <X size={24} />
              </button>
              
              <div className="p-12">
                <div className="text-center mb-12">
                  <h3 className="text-4xl font-black text-gray-900 mb-6">A Letter From King Edmund</h3>
                  <p className="text-xl text-gray-600">TDB Founder</p>
                </div>
                
                <div className="max-w-4xl mx-auto" style={{ fontFamily: 'Kalam, cursive' }}>
                  <div className="space-y-8 text-xl leading-relaxed">
                    <p className="font-black text-2xl text-gray-700 mb-8">Dear Business Owner,</p>
                    
                    {textLines.map((line, index) => {
                      if (line === "") {
                        return <div key={index} className="h-6"></div>;
                      }
                      
                      if (line === "Customers.") {
                        return (
                          <p key={index} className="font-black text-primary text-4xl text-center my-8">
                            {line}
                          </p>
                        );
                      }
                      
                      if (line.includes("Rule #1")) {
                        return (
                          <div key={index} className="bg-primary/10 p-8 rounded-xl glow-element">
                            <p className="font-black text-3xl text-primary text-center">{line}</p>
                          </div>
                        );
                      }
                      
                      return (
                        <p key={index} className="text-gray-700" style={{ lineHeight: '1.8' }}>
                          {line}
                        </p>
                      );
                    })}
                    
                    <div className="text-center pt-12">
                      <p className="font-black text-primary text-3xl mb-8">
                        You don't have to be one of them.
                      </p>
                      <Button 
                        size="lg"
                        className="bg-primary hover:bg-primary/90 text-white font-black px-10 py-6 text-xl glow-element"
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

      {/* Story Section */}
      <StorySection />

      {/* Pain Points Section */}
      <PainPointsSection />

      {/* Value Pitch Section */}
      <ValuePitchSection />

      {/* What We Do - Interactive Engines */}
      <section className="py-32 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-20">
            <h2 className="text-5xl lg:text-7xl font-black text-gray-900 mb-8 leading-[0.9]">
              We Bring Brands Back From The Dead
            </h2>
            <p className="text-2xl text-gray-600 max-w-4xl mx-auto font-medium leading-relaxed">
              From overlooked to overbooked. Our proven systems transform struggling businesses 
              into customer-attracting machines.
            </p>
          </div>

          <InteractiveEnginePopup 
            engines={engines}
            activeEngine={activeEngine}
            onEngineHover={setActiveEngine}
            onEngineClick={handleEngineClick}
            expandedEngine={expandedEngine}
            onCloseExpanded={() => setExpandedEngine(null)}
          />
        </div>
      </section>

      {/* Pricing Reveal Section */}
      <PricingRevealSection />

      {/* Who This Is For */}
      <section className="py-32 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-20">
            <h2 className="text-5xl lg:text-7xl font-black text-gray-900 mb-8 leading-[0.9]">
              Who This Is For
            </h2>
            <p className="text-2xl text-gray-600 font-medium">
              We specialize in helping these types of businesses get more customers
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-5 gap-8">
            {targetAudience.map((audience, index) => (
              <Card key={index} className="text-center hover:scale-105 transition-all duration-300 border-0 glow-element">
                <CardContent className="pt-8 pb-8">
                  <div className="text-6xl mb-6">{audience.icon}</div>
                  <h3 className="font-black text-gray-900 mb-4 text-xl">{audience.title}</h3>
                  <p className="text-gray-600 text-lg">{audience.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Pricing Table */}
      <section id="pricing">
        <PricingTable />
      </section>

      {/* Newsletter Signup */}
      <section className="py-32 bg-primary text-white">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-5xl lg:text-7xl font-black mb-8 leading-[0.9]">
            Want to grow your brand and get 7 customers every month?
          </h2>
          <p className="text-2xl mb-12 text-gray-200 font-medium leading-relaxed">
            Get weekly customer acquisition strategies & brand growth playbooks delivered to your inbox.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-8 max-w-2xl mx-auto">
            <Input 
              type="email"
              placeholder="Enter your email address"
              className="bg-white/10 border-white/20 text-white placeholder:text-gray-300 flex-1 h-16 px-8 text-xl glow-element"
            />
            <Button 
              size="lg"
              className="bg-accent text-primary hover:bg-accent/90 font-black px-10 h-16 text-xl glow-element"
            >
              Get Growth Emails
            </Button>
          </div>
          
          <p className="text-gray-300 mt-10 text-xl font-medium">
            Join 2,500+ business owners getting our weekly insights
          </p>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Index;
