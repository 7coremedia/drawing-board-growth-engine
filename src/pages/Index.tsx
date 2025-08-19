import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Case } from '@/components/ui/cases-with-infinite-scroll';
import { MagicText } from '@/components/ui/magic-text';
import { Check } from 'lucide-react';
import Navigation from '@/components/Navigation';
import Footer from '@/components/Footer';
import PricingTable from '@/components/PricingTable';
import StorySection from '@/components/StorySection';
import ValuePitchSection from '@/components/ValuePitchSection';
import PricingRevealSection from '@/components/PricingRevealSection';
import AnimatedHero from '@/components/ui/animated-hero';
import BusinessLetter from '@/components/BusinessLetter';
import BusinessBlueprintSection from '@/components/BusinessBlueprintSection';
import OfferFinderWizard from '@/components/OfferFinderWizard';
import ReviewsCarousel from '@/components/ReviewsCarousel';

const Index = () => {
  const [isFinderOpen, setIsFinderOpen] = useState(false);

  const engines = [{
    id: 'flow',
    title: 'The 7Flow Engine™',
    description: 'Our proprietary system that guarantees 7 new customers every month or your money back.',
    icon: '🎯',
    steps: {
      overview: {
        title: "7Flow Engine™ Configuration",
        price: "1997",
        discount: {
          isEnabled: true,
          amount: "500"
        }
      },
      details: {
        title: "Engine Details",
        fields: [
          {
            label: "Business Name",
            type: "text",
            value: ""
          },
          {
            label: "Industry",
            type: "select",
            value: ""
          },
          {
            label: "Current Monthly Revenue",
            type: "number",
            value: ""
          }
        ]
      },
      confirmation: {
        title: "Review Your Engine Setup",
        summary: [
          {
            label: "Selected Plan",
            value: "7Flow Engine™"
          },
          {
            label: "Price",
            value: "$1,497 (after discount)"
          },
          {
            label: "Setup Time",
            value: "2-3 business days"
          }
        ]
      }
    }
  }, {
    id: 'godfather',
    title: 'The Godfather Offer System™',
    description: 'Create irresistible offers that make customers say yes before you even finish talking.',
    icon: '💰',
    steps: {
      overview: {
        title: "Godfather Offer System™ Setup",
        price: "997",
        discount: {
          isEnabled: true,
          amount: "200"
        }
      },
      details: {
        title: "Offer Details",
        fields: [
          {
            label: "Product/Service Name",
            type: "text",
            value: ""
          },
          {
            label: "Current Price Point",
            type: "number",
            value: ""
          },
          {
            label: "Target Market",
            type: "text",
            value: ""
          }
        ]
      },
      confirmation: {
        title: "Review Your Offer Setup",
        summary: [
          {
            label: "Selected System",
            value: "Godfather Offer System™"
          },
          {
            label: "Price",
            value: "$797 (after discount)"
          },
          {
            label: "Implementation",
            value: "5-7 business days"
          }
        ]
      }
    }
  }, {
    id: 'magnet',
    title: 'The Client Magnet Blueprint™',
    description: 'Turn your business into a customer attraction machine that works 24/7.',
    icon: '🧲',
    steps: {
      overview: {
        title: "Client Magnet Blueprint™ Setup",
        price: "1497",
        discount: {
          isEnabled: true,
          amount: "300"
        }
      },
      details: {
        title: "Magnet Details",
        fields: [
          {
            label: "Target Client Profile",
            type: "text",
            value: ""
          },
          {
            label: "Current Lead Cost",
            type: "number",
            value: ""
          },
          {
            label: "Marketing Channels",
            type: "multiselect",
            value: ""
          }
        ]
      },
      confirmation: {
        title: "Review Your Magnet Setup",
        summary: [
          {
            label: "Selected System",
            value: "Client Magnet Blueprint™"
          },
          {
            label: "Price",
            value: "$1,197 (after discount)"
          },
          {
            label: "Activation Time",
            value: "3-5 business days"
          }
        ]
      }
    }
  }, {
    id: 'growth',
    title: 'TDB Growth Engine™',
    description: 'Scale from struggling to thriving with our proven business growth framework.',
    icon: '📈',
    steps: {
      overview: {
        title: "TDB Growth Engine™ Setup",
        price: "2997",
        discount: {
          isEnabled: true,
          amount: "800"
        }
      },
      details: {
        title: "Growth Engine Details",
        fields: [
          {
            label: "Company Size",
            type: "select",
            value: ""
          },
          {
            label: "Growth Goals",
            type: "textarea",
            value: ""
          },
          {
            label: "Current Systems",
            type: "multiselect",
            value: ""
          }
        ]
      },
      confirmation: {
        title: "Review Your Growth Engine",
        summary: [
          {
            label: "Selected Engine",
            value: "TDB Growth Engine™"
          },
          {
            label: "Price",
            value: "$2,197 (after discount)"
          },
          {
            label: "Implementation",
            value: "7-10 business days"
          }
        ]
      }
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

      {/* Reviews Carousel - New section */}
      <ReviewsCarousel />

      {/* Value Pitch Section */}
      <ValuePitchSection />

      {/* What We Do - Interactive Engines */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl lg:text-6xl font-black text-gray-900 mb-8 leading-tight">
              Our Offers
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Proven systems that transform struggling businesses into customer-attracting machines.
            </p>
          </div>

          {/* Non-clickable offer boxes */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-16">
            <div className="bg-white rounded-[32px] p-8 border-2 border-gray-100 transition-all duration-500">
              <div className="text-4xl mb-4">🎯</div>
              <h3 className="text-xl font-satoshi font-bold text-primary mb-3">
                The 7Flow Engine™
              </h3>
              <p className="text-gray-600">
                Our proprietary system that guarantees 7 new customers every month or your money back.
              </p>
              <div className="mt-6 space-y-2">
                <div className="flex items-center text-sm text-gray-600">
                  <Check size={16} className="text-primary mr-2" />
                  Content that converts
                </div>
                <div className="flex items-center text-sm text-gray-600">
                  <Check size={16} className="text-primary mr-2" />
                  Lead capture systems
                </div>
                <div className="flex items-center text-sm text-gray-600">
                  <Check size={16} className="text-primary mr-2" />
                  Automated follow-up
                </div>
              </div>
            </div>

            <div className="bg-white rounded-[32px] p-8 border-2 border-gray-100 transition-all duration-500">
              <div className="text-4xl mb-4">💰</div>
              <h3 className="text-xl font-satoshi font-bold text-primary mb-3">
                The Godfather Offer™
              </h3>
              <p className="text-gray-600">
                Create irresistible offers that make customers say yes before you even finish talking.
              </p>
              <div className="mt-6 space-y-2">
                <div className="flex items-center text-sm text-gray-600">
                  <Check size={16} className="text-primary mr-2" />
                  Psychological triggers
                </div>
                <div className="flex items-center text-sm text-gray-600">
                  <Check size={16} className="text-primary mr-2" />
                  Value stacking
                </div>
                <div className="flex items-center text-sm text-gray-600">
                  <Check size={16} className="text-primary mr-2" />
                  Risk reversal
                </div>
              </div>
            </div>

            <div className="bg-white rounded-[32px] p-8 border-2 border-gray-100 transition-all duration-500">
              <div className="text-4xl mb-4">🧲</div>
              <h3 className="text-xl font-satoshi font-bold text-primary mb-3">
                The Client Magnet™
              </h3>
              <p className="text-gray-600">
                Turn your business into a customer attraction machine that works 24/7.
              </p>
              <div className="mt-6 space-y-2">
                <div className="flex items-center text-sm text-gray-600">
                  <Check size={16} className="text-primary mr-2" />
                  Brand positioning
                </div>
                <div className="flex items-center text-sm text-gray-600">
                  <Check size={16} className="text-primary mr-2" />
                  Content strategies
                </div>
                <div className="flex items-center text-sm text-gray-600">
                  <Check size={16} className="text-primary mr-2" />
                  Social proof systems
                </div>
              </div>
            </div>

            <div className="bg-white rounded-[32px] p-8 border-2 border-gray-100 transition-all duration-500">
              <div className="text-4xl mb-4">📈</div>
              <h3 className="text-xl font-satoshi font-bold text-primary mb-3">
                TDB Growth Engine™
              </h3>
              <p className="text-gray-600">
                Scale from struggling to thriving with our proven business growth framework.
              </p>
              <div className="mt-6 space-y-2">
                <div className="flex items-center text-sm text-gray-600">
                  <Check size={16} className="text-primary mr-2" />
                  Revenue optimization
                </div>
                <div className="flex items-center text-sm text-gray-600">
                  <Check size={16} className="text-primary mr-2" />
                  Systems automation
                </div>
                <div className="flex items-center text-sm text-gray-600">
                  <Check size={16} className="text-primary mr-2" />
                  Team building
                </div>
              </div>
            </div>
          </div>

          {/* Finder Card */}
          <div className="max-w-2xl mx-auto">
            <div className="bg-white rounded-[32px] p-12 border-2 border-gray-100 hover:border-primary/30 transition-all duration-500 w-full text-center cursor-pointer group shadow-lg hover:shadow-xl"
                 onClick={() => setIsFinderOpen(true)}>
              <div className="text-6xl mb-6">🎯</div>
              <h3 className="text-2xl font-satoshi font-bold text-primary mb-4">
                Find Your Perfect Growth Engine
              </h3>
              <p className="text-gray-600 mb-8">
                Answer a few questions about your business and we'll match you with the 
                perfect growth engine for your stage and goals.
              </p>
              <Button 
                size="lg"
                className="bg-[#163b24] hover:bg-[#163b24]/90 text-white rounded-2xl px-8 py-3 text-lg group-hover:scale-105 transition-transform duration-500"
              >
                Find My Offer
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Offer Finder Wizard */}
      <OfferFinderWizard 
        isOpen={isFinderOpen}
        onClose={() => setIsFinderOpen(false)}
      />

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
