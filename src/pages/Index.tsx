import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { MagneticButton } from '@/components/ui/magnetic-button';
import Navigation from '@/components/Navigation';
import Footer from '@/components/Footer';
import PricingTable from '@/components/PricingTable';
import InteractiveEnginePopup from '@/components/InteractiveEnginePopup';
import StorySection from '@/components/StorySection';
import PainPointsSection from '@/components/PainPointsSection';
import ValuePitchSection from '@/components/ValuePitchSection';
import PricingRevealSection from '@/components/PricingRevealSection';
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
        <div className="relative left-1/2 right-1/2 -ml-[50vw] -mr-[50vw] w-screen h-96 overflow-hidden ">
          <div className="text-center mb-16">
            <h1 className="text-6xl lg:text-8xl font-black mb-8 leading-tight tracking-tight text-zinc-950">
              Struggling to Get{' '}
              <span className="font-black text-[#e76817]">Clients?</span>
            </h1>
            <p className="text-2xl lg:text-4xl text-gray-600 mb-12 font-bold max-w-5xl mx-auto leading-relaxed">
              We help small businesses get{' '}
              <span className="text-primary font-black">7 paying customers</span>{' '}
              a month. Or you don't pay.
            </p>
            
            {/* Magnetic Button */}
            <div className="flex justify-center mb-16">
              <MagneticButton>
                <button className="bg-[#2d4e39] hover:bg-[#234035] transition-colors px-10 text-lg text-[#d5e185] py-4 rounded-full font-bold">
                  Start With This Plan
                </button>
              </MagneticButton>
            </div>
          </div>
          
          {/* Hero Image - Edge to Edge */}
          <div className="w-screen relative w-full h-full object-cover ">
            <img alt="Business owner struggling with client acquisition" src="/lovable-uploads/1c077b17-f08b-43a5-a1d6-41d5b998ba47.png" className="w-full h-full object-cover " />
          </div>
          
          {/* From Overlooked to Overbooked - Moved Further Down */}
          <div className="max-w-4xl mx-auto">
            
          </div>
        </div>
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