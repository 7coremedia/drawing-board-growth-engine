
import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { CheckCircle, Gift } from 'lucide-react';

const PricingRevealSection = () => {
  const [showFreeOffer, setShowFreeOffer] = useState(false);

  return (
    <section className="py-20 bg-gradient-to-br from-primary to-primary/80 text-white relative overflow-hidden">
      {/* Background Animation */}
      <div className="absolute inset-0">
        <div className="absolute inset-0 opacity-10">
          {[...Array(30)].map((_, i) => (
            <div
              key={i}
              className="absolute bg-accent rounded-full animate-ping"
              style={{
                width: Math.random() * 6 + 2 + 'px',
                height: Math.random() * 6 + 2 + 'px',
                left: Math.random() * 100 + '%',
                top: Math.random() * 100 + '%',
                animationDelay: Math.random() * 5 + 's',
                animationDuration: Math.random() * 3 + 4 + 's'
              }}
            />
          ))}
        </div>
      </div>

      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 relative">
        <div className="text-center mb-16">
          <h2 className="text-4xl lg:text-6xl font-satoshi font-bold mb-8 leading-tight">
            So What's the Cost?
          </h2>
        </div>

        {!showFreeOffer ? (
          <div className="max-w-4xl mx-auto text-center">
            <div className="bg-white/10 backdrop-blur-sm p-12 rounded-3xl border border-accent/30 mb-8">
              <h3 className="text-3xl lg:text-4xl font-satoshi font-bold mb-6">
                It Doesn't Cost ₦100,000… Not Even ₦50,000
              </h3>
              
              <div className="text-center mb-8">
                <div className="text-6xl lg:text-8xl font-satoshi font-bold text-accent mb-4">
                  ₦35,000
                </div>
                <p className="text-xl mb-6">
                  You can have <span className="font-satoshi font-bold text-accent">7 new customers this month</span> for just ₦35,000.
                </p>
                <p className="text-lg opacity-90 mb-8">
                  That's about ₦1,666 per client.
                </p>
                <p className="text-xl font-satoshi font-semibold">
                  If you sell anything over ₦20,000 — this is the best investment you'll make all year.
                </p>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-8">
                {["Real People", "Real Customers", "Real Sales"].map((item, index) => (
                  <div key={index} className="flex items-center justify-center space-x-2 bg-accent/20 p-4 rounded-xl">
                    <CheckCircle className="text-accent" size={20} />
                    <span className="font-satoshi font-semibold">{item}</span>
                  </div>
                ))}
              </div>

              <p className="text-sm opacity-75 mb-8">Terms & Conditions Apply.</p>

              <Button 
                onClick={() => setShowFreeOffer(true)}
                size="lg"
                className="bg-accent text-primary hover:bg-accent/90 font-satoshi font-bold px-12 py-6 text-xl"
              >
                Get Started Now
              </Button>
            </div>
          </div>
        ) : (
          <div className="max-w-4xl mx-auto text-center animate-fade-in">
            <div className="bg-accent/20 backdrop-blur-sm p-12 rounded-3xl border-2 border-accent">
              <Gift className="mx-auto text-accent mb-6" size={80} />
              <h3 className="text-4xl lg:text-5xl font-satoshi font-bold mb-8">
                Actually, You Don't Even Have to Pay the ₦35,000...
              </h3>
              
              <div className="space-y-6 mb-8">
                <p className="text-2xl">We're giving this away for <span className="font-satoshi font-bold text-accent text-4xl">free.</span></p>
                <p className="text-xl">No gimmicks. No hidden fees.</p>
                <p className="text-xl">
                  You get 7 customers this month, and <span className="font-satoshi font-bold text-accent">then you decide</span> if we're worth paying.
                </p>
              </div>

              <Button 
                size="lg"
                className="bg-accent text-primary hover:bg-accent/90 font-satoshi font-bold px-12 py-6 text-xl animate-pulse"
              >
                🔘 I Want 7 Free Clients
              </Button>
            </div>
          </div>
        )}
      </div>
    </section>
  );
};

export default PricingRevealSection;
