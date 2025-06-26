import { CheckCircle } from 'lucide-react';
import { Button } from '@/components/ui/button';
const ValuePitchSection = () => {
  const features = ["Content that actually converts", "Messaging that commands attention", "Lead capture that's frictionless", "Follow-ups that close", "Strategy tailored to your audience's psychology"];
  const backingPoints = ["7Flow offer clarity", "Our conversion DNA", "TDB aggressive, emotional, data-rich marketing style"];
  return <section className="py-32 bg-white relative overflow-hidden">
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-stretch">
        <div className="text-center mb-24">
          <h2 className="text-4xl lg:text-6xl font-black text-gray-900 mb-8 leading-tight">
            We Built a System That Delivers<br />
            <span className="text-primary font-black">Customers Like Clockwork</span>
          </h2>
          <div className="w-24 h-1 bg-primary mx-auto mb-8"></div>
        </div>

        <div className="w-full h-full object-cover rounded-3xl ">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-stretch">
            <div className="bg-primary text-white rounded-3xl p-[40px] w-full h-full min-h-[420px] flex flex-col justify-center">
              <h3 className="text-3xl font-black mb-6">
                It's called the <span className="text-accent font-black">7Flow Engine™</span>
              </h3>
              <p className="text-xl mb-8 leading-relaxed">
                And it's how we help businesses get <span className="font-black text-accent">7 paying customers every month — or we work for free.</span>
              </p>
              <p className="text-lg opacity-90">
                This isn't an ad package. It's a full-growth engine:
              </p>
            </div>

            <div className="space-y-6 mb-10">
              {features.map((feature, index) => <div key={index} className="flex items-center space-x-6 p-6 bg-gray-50 rounded-xl hover:bg-gray-100 transition-colors py-[25px] px-[24px]">
                  <CheckCircle className="text-primary flex-shrink-0" size={28} />
                  <span className="text-lg font-medium">{feature}</span>
                </div>)}
            </div>
          </div>

          <div className="space-y-10">
            {/* Image with proper aspect ratio */}
            <div className="relative">
              <div className="aspect-[4/3] -bottom-1 rounded-3xl">
                <img alt="Marketing system dashboard" src="/lovable-uploads/3562e7a0-1d70-46f0-8787-611240a579e4.png" className="w-full h-full overflow-hidden rounded-3xl min-h-[420px] object-none" />
                
              </div>
            </div>

            <div className="bg-accent/20 p-10 rounded-2xl">
              <h4 className="text-2xl font-black text-primary mb-8">Backed by:</h4>
              <div className="space-y-6">
                {backingPoints.map((point, index) => <div key={index} className="flex items-start space-x-4">
                    <div className="w-4 h-4 bg-primary rounded-full mt-2 flex-shrink-0"></div>
                    <span className="text-lg font-medium">{point}</span>
                  </div>)}
              </div>
            </div>

            <div className="text-center bg-primary text-white p-10 px-[40px] rounded-3xl py-[34px]">
              <h4 className="text-2xl font-black mb-6">Ready to Get Started?</h4>
              <Button size="lg" className="bg-accent text-primary hover:bg-accent/90 font-black px-8 py-4 text-lg rounded-2xl">
                Get My 7 Customers Now
              </Button>
            </div>
          </div>
        </div>

        {/* Additional conversion section with image */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-10 mt-24">
          <div className="lg:col-span-2 bg-gradient-to-br from-gray-50 to-white p-10 rounded-3xl">
            <h3 className="text-3xl font-black text-gray-900 mb-8">
              Why Other Marketing Fails (And Why We Don't)
            </h3>
            <div className="space-y-6 text-lg text-gray-700 leading-relaxed">
              <p>Most marketing agencies focus on vanity metrics: likes, follows, impressions.</p>
              <p>We focus on what actually matters: <span className="font-black text-primary">paying customers walking through your door.</span></p>
              <p>Every strategy, every piece of content, every touchpoint is designed with one goal: conversion.</p>
            </div>
          </div>
          
          <div className="relative">
            <div className="p-8 rounded-3xl  h-full flex flex-col justify-center bg-[#60ba60]">
              <div className="text-center">
                <div className="text-6xl font-black text-primary mb-4">97%</div>
                <p className="text-gray-600 mb-6 font-medium">Success Rate</p>
                <div className="text-4xl font-black text-accent mb-4">7+</div>
                <p className="text-gray-600 font-medium">New Customers Monthly</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>;
};
export default ValuePitchSection;