
import { CheckCircle } from 'lucide-react';
import { Button } from '@/components/ui/button';

const ValuePitchSection = () => {
  const features = [
    "Content that actually converts",
    "Messaging that commands attention", 
    "Lead capture that's frictionless",
    "Follow-ups that close",
    "Strategy tailored to your audience's psychology"
  ];

  const backingPoints = [
    "7Flow offer clarity",
    "Our conversion DNA", 
    "TDB aggressive, emotional, data-rich marketing style"
  ];

  return (
    <section className="py-20 bg-white relative overflow-hidden">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl lg:text-6xl font-satoshi font-bold text-gray-900 mb-8 leading-tight">
            We Built a System That Delivers<br />
            <span className="text-primary">Customers Like Clockwork</span>
          </h2>
          <div className="w-24 h-1 bg-primary mx-auto mb-8"></div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div>
            <div className="bg-primary text-white p-8 rounded-3xl mb-8">
              <h3 className="text-3xl font-satoshi font-bold mb-4">
                It's called the <span className="text-accent">7Flow Engine™</span>
              </h3>
              <p className="text-xl mb-6">
                And it's how we help businesses get <span className="font-satoshi font-bold text-accent">7 paying customers every month — or we work for free.</span>
              </p>
              <p className="text-lg opacity-90">
                This isn't an ad package. It's a full-growth engine:
              </p>
            </div>

            <div className="space-y-4 mb-8">
              {features.map((feature, index) => (
                <div key={index} className="flex items-center space-x-4 p-4 bg-gray-50 rounded-xl hover:bg-gray-100 transition-colors">
                  <CheckCircle className="text-primary flex-shrink-0" size={24} />
                  <span className="text-lg">{feature}</span>
                </div>
              ))}
            </div>
          </div>

          <div className="space-y-6">
            <div className="bg-accent/20 p-8 rounded-2xl">
              <h4 className="text-2xl font-satoshi font-bold text-primary mb-6">Backed by:</h4>
              <div className="space-y-4">
                {backingPoints.map((point, index) => (
                  <div key={index} className="flex items-start space-x-3">
                    <div className="w-3 h-3 bg-primary rounded-full mt-2 flex-shrink-0"></div>
                    <span className="text-lg">{point}</span>
                  </div>
                ))}
              </div>
            </div>

            <div className="text-center bg-primary text-white p-8 rounded-2xl">
              <h4 className="text-2xl font-satoshi font-bold mb-4">Ready to Get Started?</h4>
              <Button 
                size="lg"
                className="bg-accent text-primary hover:bg-accent/90 font-satoshi font-bold px-8 py-4 text-lg"
              >
                Get My 7 Customers Now
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ValuePitchSection;
