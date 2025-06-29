import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { MagneticButton } from '@/components/ui/magnetic-button';
import { Case } from '@/components/ui/cases-with-infinite-scroll';
import { MagicText } from '@/components/ui/magic-text';
import Navigation from '@/components/Navigation';
import Footer from '@/components/Footer';
import PricingTable from '@/components/PricingTable';
import InteractiveEnginePopup from '@/components/InteractiveEnginePopup';
import StorySection from '@/components/StorySection';
import PainPointsSection from '@/components/PainPointsSection';
import ValuePitchSection from '@/components/ValuePitchSection';
import PricingRevealSection from '@/components/PricingRevealSection';
import AnimatedHero from '@/components/ui/animated-hero';
import BusinessLetter from '@/components/BusinessLetter';
import BusinessBlueprintSection from '@/components/BusinessBlueprintSection';

const Index = () => {
  const [activeEngine, setActiveEngine] = useState<string | null>(null);
  const [expandedEngine, setExpandedEngine] = useState<string | null>(null);

  const engines = [{
    id: 'flow',
    title: 'The 7Flow Engine™',
    description: 'Our proprietary system that guarantees 7 new customers every month or your money back.',
    icon: '🎯',
    content: {
      headline: 'The 7Flow Engine™ - Customer Acquisition System',
      details: ['Content that actually converts and drives action', 'Messaging that commands attention and builds trust', 'Lead capture systems that are completely frictionless', 'Follow-up sequences that close deals automatically', 'Strategy tailored to your audience psychology', 'Real-time optimization based on performance data'],
      cta: 'Get My 7 Customers Now'
    }
  }, {
    id: 'godfather',
    title: 'The Godfather Offer System™',
    description: 'Create irresistible offers that make customers say yes before you even finish talking.',
    icon: '💰',
    content: {
      headline: 'The Godfather Offer System™ - Irresistible Proposals',
      details: ['Psychological triggers that create instant desire', 'Value stacking that makes price irrelevant', 'Risk reversal that eliminates customer hesitation', 'Urgency mechanisms that drive immediate action', 'Bonus structures that increase perceived value', 'Guarantee frameworks that build complete trust'],
      cta: 'Create My Godfather Offer'
    }
  }, {
    id: 'magnet',
    title: 'The Client Magnet Blueprint™',
    description: 'Turn your business into a customer attraction machine that works 24/7.',
    icon: '🧲',
    content: {
      headline: 'The Client Magnet Blueprint™ - Attraction System',
      details: ['Brand positioning that makes you the obvious choice', 'Content strategies that build authority and trust', 'Social proof systems that validate your expertise', 'Referral programs that turn customers into advocates', 'Reputation management that protects your image', 'Community building that creates loyal followers'],
      cta: 'Build My Client Magnet'
    }
  }, {
    id: 'growth',
    title: 'TDB Growth Engine™',
    description: 'Scale from struggling to thriving with our proven business growth framework.',
    icon: '📈',
    content: {
      headline: 'TDB Growth Engine™ - Business Scaling System',
      details: ['Revenue optimization strategies that maximize profit', 'Systems automation that saves time and money', 'Team building frameworks for sustainable growth', 'Market expansion tactics for new opportunities', 'Operational efficiency improvements', 'Long-term sustainability planning and execution'],
      cta: 'Scale My Business Now'
    }
  }];
  const targetAudience = [{
    title: 'Fashion & Beauty Brands',
    icon: '💄',
    description: 'Scale your style empire'
  }, {
    title: 'Gym/Fitness Owners',
    icon: '💪',
    description: 'Build your fitness community'
  }, {
    title: 'Coaches & Experts',
    icon: '🎓',
    description: 'Monetize your expertise'
  }, {
    title: 'Local Service Providers',
    icon: '🔧',
    description: 'Dominate your local market'
  }, {
    title: 'Online Course Creators',
    icon: '📚',
    description: 'Turn knowledge into profit'
  }];
  const handleEngineClick = (engineId: string) => {
    setExpandedEngine(engineId);
  };
  return <div className="min-h-screen bg-white">
      <Navigation />
      
      {/* Hero Section */}
      <section className="hero-gradient tdb-pattern lg:py-32 py-0">
        <div className="relative w-screen min-h-[384px] overflow-hidden ">
          <AnimatedHero />
          
          {/* Hero Image - Edge to Edge */}
          <div className="w-screen relative w-full h-full object-cover ">
            <img alt="Business owner struggling with client acquisition" className="w-full h-full object-cover " src="/lovable-uploads/aac2356b-358c-4113-a38d-4c5b91c4b5a5.png" />
          </div>
          
          {/* From Overlooked to Overbooked - Moved Further Down */}
          <div className="max-w-4xl mx-auto">
            
          </div>
        </div>
      </section>

      {/* Cases Section - Added between hero and story */}
      <Case />

      {/* Magic Text Section - Letter */}
      <section className="py-20 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <MagicText text="Dear Business Owner, Running a business isn't just about the logo, your Instagram grid, or some motivational quote on your wall. It's about staying in business. That means one thing above all else: Customers. You can survive poor branding. You can survive bad ads. You might even survive a bad month. But the moment you run out of customers — it's game over. Rule #1 of Business: Don't go out of business. And yet every day, thousands of businesses shut their doors. Not because they're not talented. Not because they're not good at what they do. But because they couldn't get customers. You don't have to be one of them." />
        </div>
      </section>

      {/* Story Section */}
      <StorySection />

      {/* Business Letter Section - Added after StorySection */}
      <BusinessLetter />

      {/* Business Blueprint Section - New section */}
      <BusinessBlueprintSection />

      {/* Pain Points Section */}
      <PainPointsSection />

      {/* Value Pitch Section */}
      <ValuePitchSection />

      {/* What We Do - Interactive Engines */}
      <section className="py-32 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-20">
            <h2 className="text-4xl lg:text-6xl font-black text-gray-900 mb-8 leading-tight">
              We Bring Brands Back From The Dead
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              From overlooked to overbooked. Our proven systems transform struggling businesses 
              into customer-attracting machines.
            </p>
          </div>

          <InteractiveEnginePopup engines={engines} activeEngine={activeEngine} onEngineHover={setActiveEngine} onEngineClick={handleEngineClick} expandedEngine={expandedEngine} onCloseExpanded={() => setExpandedEngine(null)} />
        </div>
      </section>

      {/* Pricing Reveal Section */}
      <PricingRevealSection />

      {/* Who This Is For */}
      <section className="py-32 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-20">
            <h2 className="text-4xl lg:text-6xl font-black text-gray-900 mb-8 leading-tight">
              Who This Is For
            </h2>
            <p className="text-xl text-gray-600">
              We specialize in helping these types of businesses get more customers
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-5 gap-8">
            {targetAudience.map((audience, index) => <Card key={index} className="text-center hover:shadow-xl transition-all duration-300 hover:scale-105 border-0 shadow-lg">
                <CardContent className="pt-8 pb-8">
                  <div className="text-5xl mb-6">{audience.icon}</div>
                  <h3 className="font-black text-gray-900 mb-4 text-lg">{audience.title}</h3>
                  <p className="text-gray-600">{audience.description}</p>
                </CardContent>
              </Card>)}
          </div>
        </div>
      </section>

      {/* Pricing Table */}
      <section id="pricing">
        <PricingTable />
      </section>

      {/* Newsletter Signup */}
      <section className="py-32 bg-primary text-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-4xl lg:text-6xl font-black mb-8 leading-tight">
            Want to grow your brand and get 7 customers every month?
          </h2>
          <p className="text-xl mb-12 text-gray-200">
            Get weekly customer acquisition strategies & brand growth playbooks delivered to your inbox.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-6 max-w-lg mx-auto">
            <Input type="email" placeholder="Enter your email address" className="bg-white/10 border-white/20 text-white placeholder:text-gray-300 flex-1 h-14 px-6 text-lg" />
            <Button size="lg" className="bg-accent text-primary hover:bg-accent/90 font-black px-8 h-14 text-lg">
              Get Growth Emails
            </Button>
          </div>
          
          <p className="text-gray-300 mt-8 text-lg">
            Join 2,500+ business owners getting our weekly insights
          </p>
        </div>
      </section>

      <Footer />
    </div>;
};

export default Index;
