import { CheckCircle, ArrowRight } from 'lucide-react';
import { Button } from '@/components/ui/button';

const ValuePitchSection = () => {
  const features = [
    "Content that actually converts",
    "Messaging that commands attention",
    "Lead capture that's frictionless",
    "Follow-ups that close deals",
    "Strategy tailored to your audience's psychology",
    "Offers so irresistible they feel unfair",
    "Landing pages engineered to convert, not just look pretty",
    "Email and WhatsApp follow-up sequences that revive cold leads",
    "Retargeting that keeps your brand top-of-mind",
    "Funnels built for momentum, not just clicks",
    "Optimization backed by data, not guesswork",
    "Sales angles crafted to bypass resistance and trigger desire",
    "Positioning that makes your offer the obvious choice",
    "Multi-channel campaigns that create omnipresence"
  ];

  const backingPoints = [
    "7Flow offer clarity",
    "Our conversion DNA",
    "TDB aggressive, emotional, data-rich marketing style"
  ];

  return (
    <section className="py-32 bg-white relative overflow-hidden">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-20">
          <div className="inline-flex items-center gap-1 mb-6">
            <p className="text-[18px] leading-tight">
              <span className="font-bold">The-DrawingBoard,</span>{' '}
              <span className="font-normal tracking-tight">Turn On</span>{' '}
              <span className="font-normal tracking-tight">#easy</span>{' '}
              <span className="font-bold tracking-tight" style={{ fontFamily: 'Brush Script MT, cursive' }}>mode*</span>
            </p>
          </div>
          <h2 className="text-[48px] font-black text-black mb-4 leading-tight">
            We Built a System That <span className="bg-[#E1F1A0] px-1.5 py-0.5 inline-block">Delivers</span><br />
            Customers Like Clockwork
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-10 max-w-5xl mx-auto">
          {/* Left Card */}
          <div className="flex flex-col gap-6">
            {/* Top colored section */}
            <div className="bg-[#E1F1A0] rounded-[32px] p-10 shadow-sm min-h-[200px] w-full">
              <h3 className="text-2xl font-normal mb-6">
                It's called the <span className="font-bold text-[#174229]">7Flow Engine<span className="text-black align-super text-sm">™</span></span>
              </h3>
              <p className="text-lg mb-5">
                And it's how we help businesses get <span className="font-semibold">7 paying customers every month</span> — or we work for free.
              </p>
              <p className="text-base opacity-90">
                This isn't an ad package. It's a full-growth engine:
              </p>
            </div>

            {/* Features section */}
            <div className="bg-[#f9fafb] rounded-[32px] p-10 shadow-sm flex-1">
              <div className="space-y-6">
                {features.map((feature, index) => (
                  <div key={index} className="flex items-start gap-5">
                    <CheckCircle className="text-[#22c55e] flex-shrink-0 mt-1" size={22} />
                    <span className="text-base leading-tight">{feature}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Right Card */}
          <div className="flex flex-col gap-6">
            {/* Image section - matching exact dimensions of text section */}
            <div className="rounded-[32px] overflow-hidden shadow-sm min-h-[200px] w-full">
              <img
                src="/7Flow Engine Side img_1tdb.png"
                alt="Engine visualization"
                className="w-full h-full object-cover"
              />
            </div>

            {/* Backing points section */}
            <div className="bg-[#f9fafb] rounded-[32px] p-10 shadow-sm flex-1">
              <h4 className="font-semibold text-xl mb-8">Backed by:</h4>
              <div className="space-y-8">
                {backingPoints.map((point, index) => (
                  <div key={index} className="flex items-center gap-5">
                    <CheckCircle className="text-[#22c55e] flex-shrink-0" size={24} />
                    <span className="text-base">{point}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>

        <div className="text-center mt-12">
          <Button
            variant="default"
            size="lg"
            className="bg-[#E1F1A0] text-[#174229] hover:bg-[#d3e38d] font-semibold rounded-2xl px-8 py-3 text-lg inline-flex items-center gap-2"
          >
            View Success Stories
            <svg 
              width="20" 
              height="20" 
              viewBox="0 0 24 24" 
              fill="currentColor"
              className="transform translate-y-[1px]"
            >
              <path d="M5 3l14 9-14 9V3z" />
            </svg>
          </Button>
        </div>
      </div>
    </section>
  );
};

export default ValuePitchSection;