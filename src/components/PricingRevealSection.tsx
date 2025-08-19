import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { CheckCircle, Gift } from 'lucide-react';
import { motion } from 'framer-motion';

const PricingRevealSection = () => {
  const [showFreeOffer, setShowFreeOffer] = useState(false);

  return (
    <section className="py-32 bg-[#163b24] text-white relative overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute inset-0 tdb-pattern"></div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl lg:text-6xl font-black mb-8 leading-tight">
            So What's the Cost?
          </h2>
        </motion.div>

        {!showFreeOffer ? (
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="max-w-4xl mx-auto"
          >
            <div className="bg-white rounded-[32px] p-12 text-center">
              <h3 className="text-3xl lg:text-4xl font-black mb-8 text-gray-900">
                It Doesn't Cost ₦100,000... Not Even ₦50,000
              </h3>
              
              <div className="mb-12">
                <div className="text-6xl lg:text-8xl font-black text-[#163b24] mb-6">
                  ₦35,000
                </div>
                <p className="text-xl text-gray-600 mb-4">
                  You can have <span className="font-bold text-[#163b24]">7 new customers this month</span> for just ₦35,000.
                </p>
                <p className="text-lg text-gray-500 mb-8">
                  That's about ₦1,666 per client.
                </p>
                <p className="text-xl font-bold text-gray-900">
                  If you sell anything over ₦20,000 — this is the best investment you'll make all year.
                </p>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12">
                {["Real People", "Real Customers", "Real Sales"].map((item, index) => (
                  <div 
                    key={index} 
                    className="flex items-center justify-center space-x-3 bg-[#163b24]/5 p-6 rounded-2xl"
                  >
                    <CheckCircle className="text-[#163b24]" size={24} />
                    <span className="font-bold text-gray-900">{item}</span>
                  </div>
                ))}
              </div>

              <p className="text-sm text-gray-500 mb-8">Terms & Conditions Apply.</p>

              <Button 
                onClick={() => setShowFreeOffer(true)}
                size="lg"
                className="bg-[#163b24] hover:bg-[#163b24]/90 text-white rounded-2xl px-12 py-6 text-xl font-bold"
              >
                Get Started Now
              </Button>
            </div>
          </motion.div>
        ) : (
          <motion.div 
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.4 }}
            className="max-w-4xl mx-auto"
          >
            <div className="bg-white rounded-[32px] p-12 text-center">
              <div className="w-20 h-20 bg-[#163b24]/10 rounded-full flex items-center justify-center mx-auto mb-8">
                <Gift className="text-[#163b24]" size={40} />
              </div>
              
              <h3 className="text-4xl lg:text-5xl font-black mb-8 text-gray-900">
                Actually, You Don't Even Have to Pay the ₦35,000...
              </h3>
              
              <div className="space-y-6 mb-12">
                <p className="text-2xl text-gray-700">
                  We're giving this away for <span className="font-black text-[#163b24] text-4xl">free.</span>
                </p>
                <p className="text-xl text-gray-600">No gimmicks. No hidden fees.</p>
                <p className="text-xl text-gray-700">
                  You get 7 customers this month, and <span className="font-bold text-[#163b24]">then you decide</span> if we're worth paying.
                </p>
              </div>

              <Button 
                size="lg"
                className="bg-[#163b24] hover:bg-[#163b24]/90 text-white rounded-2xl px-12 py-6 text-xl font-bold group transition-transform duration-500 hover:scale-105"
              >
                <span className="group-hover:scale-110 transition-transform duration-500 inline-block">
                  🎯 I Want 7 Free Clients
                </span>
              </Button>
            </div>
          </motion.div>
        )}
      </div>
    </section>
  );
};

export default PricingRevealSection;
